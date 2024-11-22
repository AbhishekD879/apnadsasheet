import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthPage from "@/pages/auth.tsx";
import Problem from "@/pages/Problem.tsx";
import { Protected } from "@/components/util/index.ts";
import TopicExplorer from "@/pages/Landing.tsx";
import { TopicExplorerHeader } from "@/components/layout";
import Footer from "@/components/layout/Footer.tsx";
import { LandingProvider } from "@/context/LandingContext.tsx";
import LoadingPage from "@/components/util/Loading.tsx";

const router = createBrowserRouter([
  {
    element: (
      <>
        <TopicExplorerHeader />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <Protected>
            <LandingProvider>
              <TopicExplorer />
            </LandingProvider>
          </Protected>
        ),
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path: "/problem/:id",
        element: (
          <Protected>
            <Problem />
          </Protected>
        ),
      },
      {
        path: "test",
        element: <LoadingPage />,
      },
    ],
  },
  {
    path: "*",
    element: "NotFound",
  },
]);

export default router;
