import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import Book from "./pages/Book";
import List from "./pages/List";

const Routes = createAppContainer(
  createStackNavigator({
    Login,
    Book,
    List,
  })
);

export default Routes;
