import React from "react"
import { Route, Link } from "react-router-dom"

class BrowFunction extends React.Component {
    render() {
        return (
            <Route exact path={this.props.to}
                children={props => {
                let className = "browFunction"
                {props.match?className += " selectBrowFunction":className="browFunction"}
                return (
                    <Link to={this.props.to}>
                        <button class={className}>{this.props.name}</button>
                    </Link>
                )
            }} />
        )
    }
}

export default BrowFunction;