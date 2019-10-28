import React from "react"
import eyeBrow13 from './image/eyeBrow/eyeBrow13.png';
import eyeBrow14 from './image/eyeBrow/eyeBrow14.png';
import eyeBrow15 from './image/eyeBrow/eyeBrow15.png';

class SelectBrowPage3 extends React.Component {
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
                <button id="eyebrow13" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow13} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow14" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow14} width={this.state.windowWidth+"px"}/>
                </button>  
                <button id="eyebrow15" className="eyeBrowButton" onClick={this.props.otherButton}>
                  <img src={eyeBrow15} width={this.state.windowWidth+"px"}/>
                </button>  
        </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
      )
    }
  }

export default SelectBrowPage3;

