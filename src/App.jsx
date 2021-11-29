import React from "react";
import {Route,Switch} from "react-router-dom";
import Locations from "./Locations";
import Home from "./Home";
import Aboutus from "./Aboutus";
import Catering from "./Catering";
import Contactus from "./Contactus";
import Ordernow from "./Ordernow";

function App()
{
return(
<React.Fragment>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={Aboutus}/>
        <Route exact path="/catering" component={Catering}/>
        <Route exact path="/locations" component={Locations}/>
        <Route exact path="/contact" component={Contactus}/>
        <Route exact path="/order" component={Ordernow}/>
        <Route component={Home}/>
    </Switch>
</React.Fragment>

);
}
export default App;