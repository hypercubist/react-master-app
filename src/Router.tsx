import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Test from "./routes/Test";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">                                                                                                                                                   
          <Coins></Coins>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
