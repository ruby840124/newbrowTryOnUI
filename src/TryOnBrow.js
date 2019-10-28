import React from "react"
import { Route, Link } from "react-router-dom"
import SelectBrowPage1 from './SelectBrowPage1';
import SelectBrowPage2 from './SelectBrowPage2';
import SelectBrowPage3 from './SelectBrowPage3';
import TryOnBrowBelow from './TryOnBrowBelow';
import {TweenMax} from "gsap/TweenMax";

class TryOnBrow extends React.Component{
    constructor(props) {
		super(props);
		const windowWidth = (document.body.clientWidth/3.5)/3.5;
        this.state={
            pageNow:0,
            xLocation:0,
            shade:"none",
            rightButton:"visible",
            leftButton:"hidden",
            shadeBtn:"black",
            archBtn:"#20c3b0",
            thicknessBtn:"black",
            definitionBtn:"black",
            placementBtn:"black",
            placementBlock:"none",
            browColorBlock:"hidden",
            archBlock:"flex",
            lastIcon:"eyebrow1choose",
			windowWidth:windowWidth
        }
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
    
    handleRightButton=event=> {
        var div = document.getElementById('page1');
        var pageWidth = div.clientWidth;
        this.state.pageNow = this.state.pageNow+1;
        this.setState({pageNow:this.state.pageNow});
        if(this.state.pageNow==1){
            this.setState({leftButton:"visible"});
        }else if(this.state.pageNow==2){
            this.setState({rightButton:"hidden"});
        }
            
        let xLocation = this.state.xLocation;
        this.setState({ xLocation: xLocation-pageWidth});
        TweenMax.to("#page1", 1, {x:xLocation-pageWidth});
        TweenMax.to("#page2", 1, {x:xLocation-pageWidth});
        TweenMax.to("#page3", 1, {x:xLocation-pageWidth});
    }

    handleLeftButton=event=> {
        var div = document.getElementById('page1');
        var pageWidth = div.clientWidth;
        this.state.pageNow = this.state.pageNow-1;
        this.setState({pageNow:this.state.pageNow});
        if(this.state.pageNow==1){
            this.setState({rightButton:"visible"});
        }else if(this.state.pageNow==0){
            this.setState({leftButton:"hidden"});
        }

        let xLocation = this.state.xLocation;
        this.setState({ xLocation: xLocation+pageWidth});
        TweenMax.to("#page1", 1, {x:xLocation+pageWidth});
        TweenMax.to("#page2", 1, {x:xLocation+pageWidth});
        TweenMax.to("#page3", 1, {x:xLocation+pageWidth});
    }

	handleEyebrowExample=event=> {
        if(this.state.shadeBtn=="#20c3b0"){
            this.setState({archBtn:"#20c3b0",shadeBtn:"black"});
        }
        document.getElementById(this.state.lastIcon).remove();
        //動態新增
        document.getElementById(event.currentTarget.id).innerHTML="<div id="+event.currentTarget.id+"choose "+"style=position:absolute><img src=\"https://upload.cc/i1/2019/10/09/nbCFmd.png\" width="+this.state.windowWidth+"px"+"></div>"+document.getElementById(event.currentTarget.id).innerHTML;
        const lastIcon = event.currentTarget.id+"choose";
        this.setState({shade:"none",lastIcon:lastIcon,browColorBlock:"hidden"});
    }

    handleEyebrow=event=> {
        //動態新增
        document.getElementById(this.state.lastIcon).remove();
        document.getElementById(event.currentTarget.id).innerHTML="<div id="+event.currentTarget.id+"choose "+"style=position:absolute><img src=\"https://upload.cc/i1/2019/10/09/nbCFmd.png\"  width="+this.state.windowWidth+"px"+"></div>"+document.getElementById(event.currentTarget.id).innerHTML;
        const lastIcon = event.currentTarget.id+"choose";
        this.setState({shade:"inline",lastIcon:lastIcon});
    }   

    handleShade=event=> {
        this.setState({
            shadeBtn:"#20c3b0",
            archBtn:"black",
            thicknessBtn:"black",
            definitionBtn:"black",
            placementBtn:"black",
            placementBlock:"none",
            archBlock:"flex",
            browColorBlock:"visible",
        });
    }

    handleArch=event=> {
        this.setState({
            archBtn:"#20c3b0",
            shadeBtn:"black",
            thicknessBtn:"black",
            definitionBtn:"black",
            placementBtn:"black",
            placementBlock:"none",
            archBlock:"flex",
            browColorBlock:"hidden",
        });
    }

    handleThickness=event=> {
        this.setState({
            archBtn:"black",
            shadeBtn:"black",
            thicknessBtn:"#20c3b0",
            definitionBtn:"black",
            placementBtn:"black",
            placementBlock:"none",
            archBlock:"flex",
            browColorBlock:"hidden",
        });
    }

    handleDefinition=event=> {
        this.setState({
            archBtn:"black",
            shadeBtn:"black",
            thicknessBtn:"black",
            definitionBtn:"#20c3b0",
            placementBtn:"black",
            placementBlock:"none",
            archBlock:"flex",
            browColorBlock:"hidden",
        });
    }

    handlePlacement=event=> {
        this.setState({
            archBtn:"black",
            shadeBtn:"black",
            thicknessBtn:"black",
            definitionBtn:"black",
            placementBtn:"#20c3b0",
            placementBlock:"flex",
            archBlock:"none",
            browColorBlock:"hidden",
        });
    }

    render(){   
        return ( 
        <div style={{display:"flex",flexDirection:"column",height:"100%"}}>
            <div style={{display:"flex",height:"70%",justifyContent:"center",alignItems:"center"}}>
                <button onClick={this.handleLeftButton} className="belowSelectButtonRight" style={{visibility:this.state.leftButton}}><img src={require('./image/button/arrowLeft.png')}/></button> 
                    <div className="rootBar">
                        <div className="childrenBar" id="page1">
                            <SelectBrowPage1  firstButton={this.handleEyebrowExample} otherButton={this.handleEyebrow}/>
                        </div>
                        <div className="childrenBar" id="page2">
                            <SelectBrowPage2 otherButton={this.handleEyebrow}/>
                        </div>
                        <div className="childrenBar" id="page3">
                            <SelectBrowPage3 otherButton={this.handleEyebrow}/>
                        </div>
                    </div>
                <button onClick={this.handleRightButton} className="belowSelectButtonLeft" style={{visibility:this.state.rightButton}}><img src={require('./image/button/arrow.png')}/></button>
            </div>
            <div style={{height:"30%"}}>
            < TryOnBrowBelow 
                shade={this.state.shade} 
                shadeBtn={this.state.shadeBtn} 
                archBtn={this.state.archBtn} 
                thicknessBtn={this.state.thicknessBtn} 
                definitionBtn={this.state.definitionBtn} 
                placementBtn={this.state.placementBtn} 
                placementBlock={this.state.placementBlock} 
                browColorBlock={this.state.browColorBlock} 
                archBlock={this.state.archBlock} 
                browColorBlock={this.state.browColorBlock} 
                handleShade={this.handleShade} 
                handleArch={this.handleArch}
                handleThickness={this.handleThickness}
                handleDefinition={this.handleDefinition}
                handlePlacement={this.handlePlacement}
                />
            </div>
        </div>

        )
    }
}
export default TryOnBrow;