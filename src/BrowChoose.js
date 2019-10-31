import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import BrowFunction from './BrowFunction';
import TryOnBrow from './TryOnBrow';
import GetBrow from './GetBrow';
import Share from './Share';


class BrowChoose extends React.Component{
    render(){
        return(
            <div style={{width:"550px",height:"100%"}}>
                <BrowserRouter>
                    <div className="browTopBlock">
				        <BrowFunction to="/newbrowTryOnUI" name="TRY ON BROWS" />
				        <BrowFunction to="/get" name="GET THIS BROW" />
			 	        <BrowFunction to="/share" name="SHARE" />
			 	        <BrowFunction to="/help" name="HELP" />
			        </div>
                    <div style={{height:'calc(100% - 70px)',width:"550px"}}>
                        <Route exact path="/newbrowTryOnUI" component={TryOnBrow}/>
                        <Route exact path="/get" component={GetBrow}/>
                        <Route exact path="/share" component={Share}/>
                        <Route exact path="/help" component={TryOnBrow}/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default BrowChoose;
