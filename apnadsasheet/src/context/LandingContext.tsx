import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useRef,
} from "react";
import { apiCaller } from "@/lib/ApiCaller.ts";
import useAuth from "@/hooks/useAuth.tsx";

const initialState = {
  loading: false,
  userId: "",
  bookmarkedProblem: [] as string[],
  completedProblem: [] as string[],
  searchTerm: "",
  isDirty: false, // Track if we have pending changes
};

type Action =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_USER_ID"; payload: string }
  | { type: "TOGGLE_BOOKMARKED_PROBLEM"; payload: string }
  | { type: "TOGGLE_COMPLETED_PROBLEM"; payload: string }
  | { type: "SET_BOOKMARKED_PROBLEMS"; payload: string[] }
  | { type: "SET_COMPLETED_PROBLEMS"; payload: string[] }
  | { type: "SET_SEARCH_TERM"; payload: string }
  | { type: "MARK_SAVED" }
  | { type: "RESET" };

const contextState = {
  ...initialState,
  dispatch: () => {},
};

type LandingState = typeof initialState & {
  dispatch: Dispatch<Action>;
};

const LandingContext = createContext<LandingState>(contextState);

const DEBOUNCE_DELAY = 2000; // 2 seconds delay

const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_USER_ID":
      return { ...state, userId: action.payload };
    case "SET_BOOKMARKED_PROBLEMS":
      return { ...state, bookmarkedProblem: action.payload };
    case "SET_COMPLETED_PROBLEMS":
      return { ...state, completedProblem: action.payload };
    case "TOGGLE_BOOKMARKED_PROBLEM":
      return {
        ...state,
        bookmarkedProblem: state.bookmarkedProblem.includes(action.payload)
          ? state.bookmarkedProblem.filter((id) => id !== action.payload)
          : [...state.bookmarkedProblem, action.payload],
        isDirty: true,
      };
    case "TOGGLE_COMPLETED_PROBLEM":
      return {
        ...state,
        completedProblem: state.completedProblem.includes(action.payload)
          ? state.completedProblem.filter((id) => id !== action.payload)
          : [...state.completedProblem, action.payload],
        isDirty: true,
      };
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.payload };
    case "MARK_SAVED":
      return { ...state, isDirty: false };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const LandingProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useAuth();
  const timeoutRef = useRef<number | null>(null);

  // Function to save changes to the backend
  const saveChanges = async () => {
    if (!state.isDirty || !id) return;

    try {
      const response = await apiCaller.request(`/problems/${id}`, {
        method: "POST",
        credentials: "include",
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookmarkedProblem: state.bookmarkedProblem,
          completedProblem: state.completedProblem,
        }),
        baseUrl: "auth",
      });

      if (!response.error) {
        dispatch({ type: "MARK_SAVED" });
      }
    } catch (error) {
      console.error("Failed to save problems:", error);
    }
  };

  // Set up the initial data fetch
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING", payload: true });

      try {
        const response = await apiCaller.request<{
          bookmarkedProblem: string[];
          completedProblem: string[];
        }>(`/problems/${id}`, {
          credentials: "include",
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
          method: "GET",
          baseUrl: "auth",
        });

        if (!response.error) {
          const data = response.data;
          dispatch({
            type: "SET_BOOKMARKED_PROBLEMS",
            payload: data ? data.bookmarkedProblem : [],
          });
          dispatch({
            type: "SET_COMPLETED_PROBLEMS",
            payload: data ? data.completedProblem : [],
          });
        }
      } catch (error) {
        console.error("Failed to fetch problems:", error);
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // Set up the debounced save effect
  useEffect(() => {
    if (state.isDirty) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      // Set new timeout
      timeoutRef.current = window.setTimeout(() => {
        saveChanges();
      }, DEBOUNCE_DELAY);
    }

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [state.bookmarkedProblem, state.completedProblem, state.isDirty]);

  // Save changes on unmount if there are any pending
  useEffect(() => {
    return () => {
      if (state.isDirty) {
        saveChanges();
      }
    };
  }, []);

  return (
    <LandingContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </LandingContext.Provider>
  );
};

export const useLandingContext = () => {
  const context = useContext(LandingContext);
  if (!context) {
    throw new Error("useLandingContext must be used within a LandingProvider");
  }
  return context;
};

export { LandingProvider };
