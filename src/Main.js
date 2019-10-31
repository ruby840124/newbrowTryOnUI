import React from 'react';
import ContentBlock from './ContentBlock';

class Main extends React.Component{
  //建構子
  constructor(props) {
    super(props);
    this.state={isToggleOn:true,modelDisplay:'none'}
  }


  //按下reload按鈕
  handleReload = event => {
    alert("reload");
  }

  //按下compare按鈕鍵，比較model的前後對照圖
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
    }
  
  render() {
    let compareIcon = null;
    (this.state.isToggleOn?compareIcon=(<img src={require('./image/button/separateLine.png')} width="60%"/>):compareIcon=(<img src={require('./image/button/close.png')} width="60%"/>));
    return (
    <div style={{width:"100%",height:"100%"}}>
       <div id="topBlock" >
          <button className="topButton" onClick={this.handleReload} ><img src={require('./image/button/reload.png')} width="60%"/></button>
          <div className="topText">Brow Try On</div>
          <button className="topButton" onClick={this.handleCompare}>{compareIcon}</button>
      </div>
      <ContentBlock modelDisplay={this.state.modelDisplay}/>
    </div>
    )
  }
}
export default Main;
