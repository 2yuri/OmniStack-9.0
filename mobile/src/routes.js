import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Book from "./pages/List";
import List from "./pages/Book";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Book,
    List,
  })
);

export default Routes;
