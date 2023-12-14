import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./index.css";
import LandingRoot from "./components/landingPage/LandingRoot.jsx";
import SignupPage from "./components/authComponents/SignupPage.jsx";
import LoginPage from "./components/authComponents/LoginPage.jsx";
import { useUser } from "./store/authState.js";
import AdhdRoot from "./components/TodoList/AdhdRoot.jsx";
import TodoList from "./components/TodoList/TodoMangement/TodoList.jsx";

const queryClient = new QueryClient();

export default function Router() {
  const user = useUser((user) => user.user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingRoot />,
    },
    {
      path: "/auth",
      element: user ? <Navigate to={"/todos/all"} /> : null,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
        { path: "", element: <Navigate to={"login"} /> },
      ],
    },

    {
      path: "/todos",
      element: user ? <AdhdRoot /> : <Navigate to={"/auth/login"} />,
      children: [
        {
          path: "my-day",
          element: <TodoList header="My day" category="my-day" />,
        },
        {
          path: "work",
          element: <TodoList header="Work" category="work" />,
        },
        {
          path: "important",
          element: <TodoList header="Important !" category="important" />,
        },
        {
          path: "",
          element: <TodoList header="Work" category="all" />,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}
