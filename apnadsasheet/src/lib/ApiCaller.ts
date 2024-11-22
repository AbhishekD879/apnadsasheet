export interface ApiResponse<T = unknown> {
  data: T | null;
  error: string | null;
  status: number | null;
}

export interface ApiCallerOptions extends RequestInit {
  baseUrl?: string; // Optional base URL to override the default one
  timeout?: number; // Optional timeout in milliseconds
}

class ApiCaller {
  private static instance: ApiCaller; // Singleton instance
  private baseUrls: Record<string, string>;
  private defaultBaseUrlKey: string;

  private constructor(
    baseUrls: Record<string, string>,
    defaultBaseUrlKey: string,
  ) {
    this.baseUrls = baseUrls;
    this.defaultBaseUrlKey = defaultBaseUrlKey;

    if (!this.baseUrls[this.defaultBaseUrlKey]) {
      throw new Error(
        `Default base URL key "${this.defaultBaseUrlKey}" is missing in baseUrls.`,
      );
    }
  }

  public static getInstance(
    baseUrls?: Record<string, string>,
    defaultBaseUrlKey?: string,
  ): ApiCaller {
    if (!ApiCaller.instance) {
      if (!baseUrls || !defaultBaseUrlKey) {
        throw new Error(
          "First-time initialization requires baseUrls and defaultBaseUrlKey.",
        );
      }
      ApiCaller.instance = new ApiCaller(baseUrls, defaultBaseUrlKey);
    }

    return ApiCaller.instance;
  }

  private getBaseUrl(baseUrlKey?: string): string {
    if (baseUrlKey && this.baseUrls[baseUrlKey]) {
      return this.baseUrls[baseUrlKey];
    }
    return this.baseUrls[this.defaultBaseUrlKey];
  }

  public async request<T = unknown>(
    endpoint: string,
    options: ApiCallerOptions = {},
  ): Promise<ApiResponse<T>> {
    const { baseUrl: baseUrlKey, timeout, ...fetchOptions } = options;
    const baseUrl = this.getBaseUrl(baseUrlKey);
    const url = `${baseUrl}${endpoint}`;
    const abortController = new AbortController();

    if (timeout) {
      setTimeout(() => abortController.abort(), timeout);
    }

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        credentials: "include",
        signal: abortController.signal,
      });

      const contentType = response.headers.get("Content-Type") || "";

      if (!response.ok) {
        const errorMessage = contentType.includes("application/json")
          ? (await response.json()).message || response.statusText
          : response.statusText;

         throw new Error(`Error: ${response.status} - ${errorMessage}`);
      }

      const data: T = contentType.includes("application/json")
        ? await response.json()
        : await response.text();

      return { data, error: null, status: response.status };
    } catch (error: unknown) {
      if (abortController.signal.aborted) {
        return {
          data: null,
          error: "Request timed out or was aborted",
          status: null,
        };
      }

      return {
        data: null,
        error: error instanceof Error ? error.message : "Unknown error",
        status: null,
      };
    }
  }
}

const baseUrls = {
  auth: `${import.meta.env.VITE_BACKEND}/api/auth"`,
  data: "https://data.example.com/api",
  problem: "https://problem.example.com/api",
  default: "https://default.example.com/api",
};

export const apiCaller = ApiCaller.getInstance(baseUrls, "default");
