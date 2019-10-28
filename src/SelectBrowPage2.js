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
                <button id="eyebrow7" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <div><img src={eyeBrow7} width={this.state.windowWidth+"px"}/></div>
                </button>
                <button id="eyebrow8" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <div><img src={eyeBrow8} width={this.state.windowWidth+"px"}/></div>
                </button> 
                <button id="eyebrow9" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow9} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow10" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow10} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow11" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow11} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow12" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow12} width={this.state.windowWidth+"px"}/>
                </button>  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      )
    }
  }

export default SelectBrowPage2;

