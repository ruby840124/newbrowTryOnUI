import React from "react"
import eyeBrow1 from './image/eyeBrow/eyeBrow1.png';
import eyeBrow2 from './image/eyeBrow/eyeBrow2.png';
import eyeBrow3 from './image/eyeBrow/eyeBrow3.png';
import eyeBrow4 from './image/eyeBrow/eyeBrow4.png';
import eyeBrow5 from './image/eyeBrow/eyeBrow5.png';
import eyeBrow6 from './image/eyeBrow/eyeBrow6.png';
import eyeBrowchoose from './image/eyeBrow/press.png';


class SelectBrowPage1 extends React.Component {
  constructor(props) {
		super(props);
    }

    render () {
      return(
        <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center",marginRight:"-40px",marginLeft:"-40px"}} >
                <button id="eyebrow1" className="eyeBrowButton" onClick={this.props.firstButton}>
                  <div id="eyebrow1choose" style={{position:"absolute"}} ><img src={eyeBrowchoose} width="150px"/></div>
                  <div><img src={eyeBrow1} width="150px"/></div>
                </button>
                <button id="eyebrow2" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <div><img src={eyeBrow2} width="150px"/></div>
                </button> 
                <button id="eyebrow3" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow3} width="150px"/>
                </button>  
                <button id="eyebrow4" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow4} width="150px"/>
                </button>  
                <button id="eyebrow5" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow5} width="150px"/>
                </button>  
                <button id="eyebrow6" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow6} width="150px"/>
                </button>  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      )
    }
  }

export default SelectBrowPage1;

