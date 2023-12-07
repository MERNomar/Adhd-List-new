import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import TodoList from "./components/TodoMangement/TodoList.jsx";
import { ReactQueryDevtools } from "react-query/devtools";
import LandingPage from "./components/landingPage/LandingPage.jsx";
import Main from "./components/landingPage/Main.jsx";


const queryClient = new QueryClient();

  


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      { path: "/", element: <Main /> },
    ],
  },

  
  {
    path: "/todos",
    element: <App />,
    children: [
      {
        path: "all",
        element: <TodoList   header="All Todos" category="all"/>,
      },
      {
        path: "my-day",
        element: <TodoList header="My day" category="day" />,
      },
      {
        path: "work",
        element: <TodoList header="Work" category="work" />,

      },
      {
        path: "home",
        element: <TodoList header="Home" category="home" />,
      },
      {
        path: "important",
        element: <TodoList header="Important !" category="important" />,
      },
      {
        path: "overdue",
        element: <TodoList header="Overdue" category="overdue" />,
      },
      {
        path: "*",
        element: <TodoList  header="All Todos" category="all"  />,
      },
    ],
  },
]);

export default function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
}
