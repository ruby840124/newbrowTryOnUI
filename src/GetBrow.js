import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

class GetBrow extends React.Component{
	constructor(props) {
		super(props);
		this.state={isToggleOn:true}
	}	

    render(){
		const secondText = {
			display:"flex",
			fontSize: "18px",
			justifyContent: "center",
			flexDirection:"column",
			fontFamily: "ProximaNova-Bold",
		};

		const hrLine = { 
			color: '##FFB7DD',
			backgroundColor: '#FFB7DD',
			height: .5,
			borderColor : '#FFB7DD'
        };
        
        let width = (document.body.clientWidth/3.5)/2.6+"px";
        let height = (document.body.clientWidth/3.5)/2.6+"px";
		return( 
		<div style={{height:"100%"}}>
			<div className="getBrowFirst" style={{height:"30%"}}>
				<p style={{margin:0,fontSize:"1.5vw",fontFamily:"ProximaNova-light"}} >Your BROW WOW look is:</p>
				<p style={{margin:0,fontSize:"1.5vw",fontFamily:"ProximaNova-Bold"}}>NATURAL</p><br/>
				<p style={{margin:0,fontSize:"1vw",fontFamily:"ProximaNova-medium",textAlign:"center"}}>Get the services & products for your megical<br/>transformation in-store or online</p>
			</div>
			<hr style={{border:"1px solid #ececec"}}/>
			<div className="getBrowSecond" style={{height:"30%"}}>
				<LazyLoadImage src={require('./image/eyeBrowPencil/eyeBrowModel.png')} height={height} width={width} effect="blur"/>
				<div style={secondText}>
					<p style={{fontSize:"1.3vw"}}>brow wax</p>
					<a href="https://benefitboutiques.com/" style={{fontSize:"1.5vw",color:"#f73c6e",textDecorationStyle:"dashed"}}>BOOK NOW</a>
				</div>
			</div>
			<hr style={{border:"1px solid #ececec"}}/>
			<div className="getBrowSecond" style={{height:"30%"}}>
				<LazyLoadImage src={require('./image/eyeBrowPencil/eyeBrowPencil.png')} height={height} width={width} effect="blur"/>
				<div style={secondText}>
					<p style={{margin:0,fontSize:"1.3vw"}}>precisely, my brow<br/>eyebrow pencil</p>
					<div style={{display:"flex",alignItems:"center"}}>
						<img src={require('./image/eyeBrowPencil/color.png')} height="50px" width="55px"/>
						<p style={{margin:0,fontFamily:"ProximaNova-medium",fontSize:"1.2vw"}} > 03 - medium </p>
					</div>
					<a href="https://benefitboutiques.com/" style={{fontSize:"1.5vw",color:"#f73c6e",textDecorationStyle:"dashed"}}>ADD TO BAG</a>
				</div>
			</div>
		</div>	
		)
    }
}

export default GetBrow;