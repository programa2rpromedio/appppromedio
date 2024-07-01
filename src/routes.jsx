import { createBrowserRouter, } from "react-router-dom";

import App from "./App";
import Projects from "./pages/Projects"
import Services from "./pages/Services"
import About from "./pages/About"
import Home from "./pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "",
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "about",
        element: <About />
      },
    ]
  }
]);

export default router