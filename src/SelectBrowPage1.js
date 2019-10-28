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
		const windowWidth = (document.body.clientWidth/3.5)/3.5;
        this.state={windowWidth:windowWidth};
    }
	//若視窗改變觸發，重新抓取高及寬
  componentWillMount() {
    window.addEventListener('resize', this.resizeHandle, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandle);
  }
  
    resizeHandle = event => {
		const windowWidth = (document.body.clientWidth/3.5)/3.5;
		this.setState({windowWidth});
	}

    render () {
      return(
        <div style={{display:"flex",flexWrap:"wrap"}} >
                <button id="eyebrow1" className="eyeBrowButton" onClick={this.props.firstButton}>
                  <div id="eyebrow1choose" style={{position:"absolute"}}><img src={eyeBrowchoose} width={this.state.windowWidth+"px"}/></div>
                  <div><img src={eyeBrow1} width={this.state.windowWidth+"px"}/></div>
                </button>
                <button id="eyebrow2" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <div><img src={eyeBrow2} width={this.state.windowWidth+"px"}/></div>
                </button> 
                <button id="eyebrow3" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow3} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow4" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow4} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow5" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow5} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow6" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow6} width={this.state.windowWidth+"px"}/>
                </button>  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      )
    }
  }

export default SelectBrowPage1;

