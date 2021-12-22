import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Auth from "./pages/Auth";
import Item from "./pages/item";
import Product from "./pages/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/product" component={Product} />
          <Route exact path="/" component={Auth} />
          <Route exact path="/item/:id" component={Item} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
