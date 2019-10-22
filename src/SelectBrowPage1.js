import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import press from './image/eyeBrow/press.png';
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
        this.state={width:0};
    }

    render () {
      let width = (document.body.clientWidth/3.5)/3.5+"px";
      return(
        <div style={{display:"flex",flexWrap:"wrap"}} >
                <button id="eyebrow1" className="eyeBrowButton" onClick={this.props.firstButton}>
                  <div id="eyebrow1choose" style={{position:"absolute"}}><img src={eyeBrowchoose} width={width}/></div>
                  <div><img src={eyeBrow1} width={width}/></div>
                </button>
                <button id="eyebrow2" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <div><img src={eyeBrow2} width={width}/></div>
                </button> 
                <button id="eyebrow3" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow3} width={width}/>
                </button>  
                <button id="eyebrow4" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow4} width={width}/>
                </button>  
                <button id="eyebrow5" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow5} width={width}/>
                </button>  
                <button id="eyebrow6" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow6} width={width}/>
                </button>  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      )
    }
  }

export default SelectBrowPage1;

