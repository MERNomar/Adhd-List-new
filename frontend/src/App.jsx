import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import "./index.css";
import LandingRoot from "./components/landingPage/LandingRoot.jsx";
import SignupPage from "./components/authComponents/SignupPage.jsx";
import LoginPage from "./components/authComponents/LoginPage.jsx";
import { useUser } from "./store/authState.js";
import AdhdRoot from "./components/TodoList/AdhdRoot.jsx";
import TodoList from "./components/TodoList/TodoMangement/TodoList.jsx";
import { getTodos, getRootCategories } from "./myAPIS.js";
import { useDarkMode, useStore } from "./store/todoState.js";

export default function Router() {
  const user = useUser((user) => user.user);
  const setAllTasks = useStore((store) => store.setAllTasks);

  const darkMode = useDarkMode((dark) => dark.darkMode);

  const setAllSideRoots = useStore((store) => store.setAllSideRoots);

  const handleColorChange = (primaryColor) => {
    document.documentElement.style.setProperty("--primary-color", primaryColor);
  };

  // this function will get all needed items and store it in global state
  // the loader is for cleaner code and better performance
  const tasksLoader = async () => {
    if (!user) return "";
    handleColorChange(darkMode ? "#1a1d23" : "white");
    const TasksData = await getTodos(user.token);
    setAllTasks(TasksData);
    const categoryData = await getRootCategories(user.token);
    setAllSideRoots(categoryData);
    return null;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingRoot />,
    },
    {
      path: "/auth",
      element: user ? <Navigate to={"/app/todos/work"} /> : null,
      children: [
        { path: "login", element: <LoginPage /> },
        { path: "signup", element: <SignupPage /> },
        { path: "", element: <Navigate to={"login"} /> },
      ],
    },
    {
      path: "/app",
      element: user ? null : <Navigate to={"/auth/login"} />,
      children: [
        {
          path: "todos",
          element: <AdhdRoot />,
          loader: tasksLoader,
          children: [
            {
              path: ":title",
              element: <TodoList />,
              children: [{ path: ":child", element: <TodoList /> }],
            },
          ],
        },
        {
          path: "user",
          element: <p>item</p>,
          //loader: userLoader,
          children: [
            {
              path: "information",
              element: <p>information</p>,
            },
            {
              path: "statistics",
              element: <p>statistics</p>,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </div>
  );
}
