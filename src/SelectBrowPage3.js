import React from "react"
import eyeBrow13 from './image/eyeBrow/eyeBrow13.png';
import eyeBrow14 from './image/eyeBrow/eyeBrow14.png';
import eyeBrow15 from './image/eyeBrow/eyeBrow15.png';

class SelectBrowPage3 extends React.Component {
	constructor(props) {
		super(props);
    }


    render () {
      return(
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}} >
                <button id="eyebrow13" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow13} width="150px"/>
                </button>  
                <button id="eyebrow14" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow14} width="150px"/>
                </button>  
                <button id="eyebrow15" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow15} width="150px"/>
                </button>
                <button id="eyebrow16" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow15} width="150px"/>
                </button>      
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      )
    }
  }

export default SelectBrowPage3;

