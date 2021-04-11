import React  from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {TodosPage} from "./pages/TodosPage";
import {AboutPage} from "./pages/AboutPage";
import {Wstest} from "./pages/Wstest";
import {Table} from "./pages/TableJS";



const App: React.FunctionComponent = () => {

    return <BrowserRouter>

        <Navbar/>
        <div className="container">
        <Switch>
            <Route component={TodosPage} path="/" exact/>
            <Route component={AboutPage} path="/about" />
            <Route component={Wstest} path="/ws" />
            <Route component={Table} path="/table" />
        </Switch>

        </div>
    </BrowserRouter>
}

export default App;
