import React from "react"
import { Route, Link } from "react-router-dom"
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

class TryOnBrowBelow extends React.Component {
    constructor(props) {
		super(props);
        this.state={
            defaultValue:10,
            color:["#cda885","#ab8d7c","#967765","#64483c","#5c4743"]
        }
    }	    

    render() {
        //調整數值的Slider
        const wrapperStyle = { width: 400, margin: 50 };
        const createSliderWithTooltip = Slider.createSliderWithTooltip;
        const Range = createSliderWithTooltip(Slider.Range);
        const Handle = Slider.Handle;
        const handle = (props) => {
            const { value, dragging, index, ...restProps } = props;
            return (
              <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
              >
                <Handle value={value} {...restProps} />
              </Tooltip>
            );
          };
          
        const color = this.state.color;
        const browColor = color.map((color,index) =>
            <svg style={{width:"50px"}}>
                <circle cx="15" cy="75" r="12" stroke-width="3" fill={color} />
            </svg>
        );

        return (
            <div>
                <div className="browColor" style={{height:"45px",backgroundColor:"#fbf1e9",visibility:this.props.browColorBlock,display:"flex",alignItems:"center",justifyContent:"center"}}>
                {browColor}
                </div>    
                <div style={{height:"45px",backgroundColor:"#fbf1e9",display:this.props.archBlock,alignItems:"center",justifyContent:"center"}}>
                    <div style={wrapperStyle}>
                        <Slider min={0} max={20} defaultValue={this.state.defaultValue} handle={handle} />
                    </div>
                </div>
                <div style={{height:"45px",backgroundColor:"#fbf1e9",display:this.props.placementBlock,justifyContent:"center"}}>
                    <button onClick={this.handleLeft} className="buttonArrow" ><img src={require('./image/button/left.png')}width="35px"/></button> 
                    <button onClick={this.handleRight} className="buttonArrow" ><img src={require('./image/button/right.png')}width="35px"/></button> 
                <div style={{backgroundColor:"#fbf1e9"}}/>
                    <button onClick={this.handleDown} className="buttonArrow" ><img src={require('./image/button/down.png')}width="35px"/></button> 
                    <button onClick={this.handleUp} className="buttonArrow" ><img src={require('./image/button/up.png')}width="35px"/></button> 
                </div>
                <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#FFFFFF"}}>
                    <button className="BelowBrowButton" style={{display:this.props.shade,color:this.props.shadeBtn}} onClick={this.props.handleShade} >SHADE</button>
                    <button className="BelowBrowButton" style={{color:this.props.archBtn}} onClick={this.props.handleArch} >ARCH</button>
                    <button className="BelowBrowButton" style={{color:this.props.thicknessBtn}} onClick={this.props.handleThickness} >THICKNESS</button>
                    <button className="BelowBrowButton" style={{color:this.props.definitionBtn}} onClick={this.props.handleDefinition}>DEFINITION</button>
                    <button className="BelowBrowButton" style={{color:this.props.placementBtn}} onClick={this.props.handlePlacement}>PLACEMENT</button>
                </div>
            </div>
        )
    }
}

export default TryOnBrowBelow;