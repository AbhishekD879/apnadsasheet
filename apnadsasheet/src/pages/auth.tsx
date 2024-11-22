import { useLayoutEffect, useState } from "react";
import { Eye, EyeOff, Github, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useAuth from "@/hooks/useAuth.tsx";
import { useNavigate } from "react-router-dom";
import { apiCaller } from "@/lib/ApiCaller.ts";
import { User } from "@/types/User.ts";
import LoadingPage from "@/components/util/Loading.tsx";

export default function AuthPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  useLayoutEffect(() => {
    if (auth.id) {
      navigate("/", { replace: true });
    }
  }, [auth.authLoading, auth.id]);

  if (auth.authLoading) {
    return <LoadingPage />;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const response = await apiCaller.request<{
      token: string;
      message: string;
      user: User;
    }>("/login", {
      baseUrl: "auth",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    });
    if (!response.error) {
      if (auth.setUser) {
        localStorage.setItem(
          "token",
          response.data?.token ? response.data?.token : "",
        );
        auth.setUser(response.data?.user as User);
        navigate("/", { replace: true });
      }
    } else {
      const errorData = response.data?.message;
      alert(`Login failed: ${errorData}`);
    }
    setIsLoading(false);
  };

  const handleRegister = async () => {
    setIsLoading(true);
    const response = await apiCaller.request<{
      token: string;
      message: string;
      user: User;
    }>("/register", {
      baseUrl: "auth",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
      credentials: "include",
    });
    console.log("Register", response);
    if (!response.error) {
      if (auth.setUser) {
        localStorage.setItem(
          "token",
          response.data?.token ? response.data?.token : "",
        );
        auth.setUser(response.data?.user as User);
        navigate("/", { replace: true });
      }
    } else {
      const errorData = response.data?.message;
      alert(`Register failed: ${errorData}`);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8f8fd]">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-2">
            <Rocket className="h-8 w-8 text-[#6674cc]" />
          </div>
          <CardTitle className="text-2xl text-center">DSA Quest</CardTitle>
          <CardDescription className="text-center">
            Login or create an account to start your journey
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={user.email}
                    onChange={(event) => {
                      setUser({ ...user, email: event.target.value });
                    }}
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2 mt-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={user.password}
                      onChange={(event) => {
                        setUser({ ...user, password: event.target.value });
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={handleLogin}
                  className="w-full mt-4 bg-[#6674cc] hover:bg-[#505ba0]"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-2 mt-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    value={user.email}
                    onChange={(event) =>
                      setUser({ ...user, email: event.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-2 mt-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={user.password}
                      onChange={(event) =>
                        setUser({ ...user, password: event.target.value })
                      }
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </div>
                <div className="grid gap-2 mt-2">
                  <Label htmlFor="password">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      value={user.confirmPassword}
                      onChange={(event) =>
                        setUser({
                          ...user,
                          confirmPassword: event.target.value,
                        })
                      }
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-500" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-500" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={handleRegister}
                  className="w-full mt-4 bg-[#6674cc] hover:bg-[#505ba0]"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Creating account..." : "Create account"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" type="button" disabled={isLoading}>
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
        </CardContent>
        <CardFooter>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
