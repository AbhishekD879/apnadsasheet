import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth.tsx";
import { PropsWithChildren, useLayoutEffect } from "react";
import LoadingPage from "@/components/util/Loading.tsx";
const Protected = ({ children }: PropsWithChildren) => {
  const auth = useAuth();
  const navigate = useNavigate();
  // Check if user is authenticated and redirect to login page if not.
  useLayoutEffect(() => {
    if (auth === null || auth.id === "") {
      navigate("/auth", { replace: true });
    }
  }, [navigate, auth.id]);
  if (auth.authLoading) {
    return <LoadingPage />;
  }
  return <>{children}</>;
};

export default Protected;
