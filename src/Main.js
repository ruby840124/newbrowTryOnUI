import React from 'react';
import ContentBlock from './ContentBlock';

class Main extends React.Component{
  //建構子
  constructor(props) {
    super(props);
    this.state={isToggleOn:true,modelDisplay:'none',
		windowWidth:document.body.clientWidth,
		windowHeight:document.body.clientHeight}
  }


  //按下reload按鈕
  handleReload = event => {
    alert("reload");
  }

  //按下compare按鈕鍵
  handleCompare = event => {
    let Display =null;
    (this.state.isToggleOn==true?Display='inline':Display='none');
    this.setState(prevState => ({isToggleOn:!prevState.isToggleOn}));
    this.setState({modelDisplay:Display});
  }
  
  //若視窗改變觸發，重新抓取高及寬
  componentWillMount() {
    window.addEventListener('resize', this.resizeHandle, true);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandle);
  }
  
    resizeHandle = event => {
	const windowWidth = document.body.clientWidth;
    const windowHeight = document.body.clientHeight;
	this.setState({windowWidth,windowHeight});
	}
  

  render() {
    let compareIcon = null;
    (this.state.isToggleOn?compareIcon=(<img src={require('./image/button/separateLine.png')} width="40vw"/>):compareIcon=(<img src={require('./image/button/close.png')} width="40vw"/>));
    return (
    <div className="MainBlock" style={{width:this.state.windowWidth+"px",height:this.state.windowHeight+"px"}}>
        <div id="topBlock" >
          <button className="topButton" onClick={this.handleReload} ><img src={require('./image/button/reload.png')}  width="50vw"/></button>
          <div className="topText">Brow Try On</div>
          <button className="topButton" onClick={this.handleCompare}>{compareIcon}</button>
        </div>
          <ContentBlock modelDisplay={this.state.modelDisplay} windowWidth={this.state.windowWidth} windowHeight={this.state.windowHeight}/>
    </div>
    )
  }
}
export default Main;
