import React from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

class GetBrow extends React.Component{
	constructor(props) {
		super(props);
		const height = (document.body.scrollHeight-645)+"px";
		this.state={height:height}
	}	

    render(){
		return( 
            <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column"}}>
                <div className="getBrowFirst" style={{flex:1,alignItems:"center"}}>
					<p style={{margin:0,fontSize:"28px",fontFamily:"ProximaNova-light"}} >Your BROW WOW look is:</p>
					<p style={{margin:0,fontSize:"25px",fontFamily:"ProximaNova-Bold"}}>NATURAL</p><br/>
					<p style={{margin:0,fontSize:"20px",fontFamily:"ProximaNova-medium"}}>Get the services & products for your megical<br/>transformation in-store or online</p>
				</div>
				<hr style={{margin:0,border:"1px solid #ececec"}}/>
				<div className="getBrowSecond" style={{height:"250px",flex:1}}>
					<img src={require('./image/eyeBrowPencil/eyeBrowModel.png')} style={{objectFit:"cover",height:"200px"}}/>
					<div className="getBrowFirst" style={{fontFamily:"ProximaNova-Bold"}}>
						<p style={{fontSize:"25px"}}>brow wax</p>
						<a href="https://benefitboutiques.com/" style={{fontSize:"28px",color:"#f73c6e",textDecorationStyle:"dashed"}}>BOOK NOW</a>
					</div>
				</div>
				<hr style={{margin:0,border:"1px solid #ececec"}}/>
				<div className="getBrowSecond" style={{flex:1}} >
					<img src={require('./image/eyeBrowPencil/eyeBrowPencil.png')} style={{objectFit:"cover",height:"200px"}} />
					<div className="getBrowFirst" style={{fontFamily:"ProximaNova-Bold"}}>
						<p style={{margin:0,fontSize:"23px"}}>precisely, my brow<br/>eyebrow pencil</p>
						<div style={{display:"flex",alignItems:"center"}}>
							<img src={require('./image/eyeBrowPencil/color.png')} height="30%" width="30%"/>
							<p style={{margin:0,fontFamily:"ProximaNova-medium",fontSize:"20px"}} > 03 - medium </p>
						</div>
					<a href="https://benefitboutiques.com/" style={{fontSize:"25px",color:"#f73c6e",textDecorationStyle:"dashed"}}>ADD TO BAG</a>
				</div>
				</div>  
            </div>    	
		)
    }
}

export default GetBrow;