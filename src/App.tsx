import { ChakraProvider, theme } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Studio } from "./pages/Studio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "foundation",
    element: <Studio />,
  },
  {
    path: "foundation/:element",
    element: <Studio />,
  },
  {
    path: "component",
    element: <Studio />,
  },
  {
    path: "component/:element",
    element: <Studio />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
