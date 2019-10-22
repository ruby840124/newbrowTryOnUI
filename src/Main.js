import React from 'react';
import ContentBlock from './ContentBlock';

class Main extends React.Component{
  //建構子
  constructor(props) {
    super(props);
    this.state={isToggleOn:true,height:0,modelDisplay:'none'}
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

  render() {
    let compareIcon = null;
    (this.state.isToggleOn?compareIcon=(<img src={require('./image/button/separateLine.png')} width="40vw"/>):compareIcon=(<img src={require('./image/button/close.png')} width="40vw"/>));
    let width = document.body.clientWidth+"px";
    let height = document.body.clientHeight+"px";
    return (
    <div className="MainBlock" style={{width:width,height:height}}>
        <div id="topBlock" >
          <button className="topButton" onClick={this.handleReload} ><img src={require('./image/button/reload.png')}  width="50vw"/></button>
          <div className="topText">Brow Try On</div>
          <button className="topButton" onClick={this.handleCompare}>{compareIcon}</button>
        </div>
          <ContentBlock modelDisplay={this.state.modelDisplay}/>
    </div>
    )
  }
}
export default Main;
