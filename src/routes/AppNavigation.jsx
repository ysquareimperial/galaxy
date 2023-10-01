import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Home from "../Components/Home";

function AppNavigation() {
  let element = useRoutes([
    {
      element: <AppIndex />,
      children: [
        {
          path: "/",
          element: <Home />,
          children: [{ index: true }],
        },
      ],
    },
  ]);
  return element;
}
export default AppNavigation;
