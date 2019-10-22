import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";
import eyeBrow7 from './image/eyeBrow/eyeBrow7.png';
import eyeBrow8 from './image/eyeBrow/eyeBrow8.png';
import eyeBrow9 from './image/eyeBrow/eyeBrow9.png';
import eyeBrow10 from './image/eyeBrow/eyeBrow10.png';
import eyeBrow11 from './image/eyeBrow/eyeBrow11.png';
import eyeBrow12 from './image/eyeBrow/eyeBrow12.png';

class SelectBrowPage2 extends React.Component {
    render () {
      let width = (document.body.clientWidth/3.5)/3.5+"px";
      return(
        <div style={{display:"flex",flexWrap:"wrap"}} >
                <button id="eyebrow7" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <div><img src={eyeBrow7} width={width}/></div>
                </button>
                <button id="eyebrow8" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <div><img src={eyeBrow8} width={width}/></div>
                </button> 
                <button id="eyebrow9" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow9} width={width}/>
                </button>  
                <button id="eyebrow10" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow10} width={width}/>
                </button>  
                <button id="eyebrow11" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow11} width={width}/>
                </button>  
                <button id="eyebrow12" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow12} width={width}/>
                </button>  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      )
    }
  }

export default SelectBrowPage2;

