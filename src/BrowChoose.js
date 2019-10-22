import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import BrowFunction from './BrowFunction';
import TryOnBrow from './TryOnBrow';
import GetBrow from './GetBrow';
import Share from './Share';


class BrowChoose extends React.Component{
    render(){
        return(
                <BrowserRouter>
                    <div className="browTopBlock">
				        <BrowFunction to="/newbrowTryOnUI" name="TRY ON BROWS" />
				        <BrowFunction to="/get" name="GET THIS BROW" />
			 	        <BrowFunction to="/share" name="SHARE" />
			 	        <BrowFunction to="/help" name="HELP" />
			        </div>
                        <Route exact path="/newbrowTryOnUI" component={TryOnBrow} />
				        <Route exact path="/get" component={GetBrow} />
                        <Route exact path="/share" component={Share} />
                        <Route exact path="/help" component={TryOnBrow} />
                </BrowserRouter>
        )
    }
}

export default BrowChoose;
