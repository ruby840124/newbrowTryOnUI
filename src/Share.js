import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

class Share extends React.Component{
	//建構子
	constructor(props) {
			super(props);
	}
	
	
    render(){
        return(
            <div style={{height:"100%"}}>
                <div className="getBrowFirst" style={{height:"50%"}}>
                    <p style={{fontSize:"1.6vw",fontFamily:"ProximaNova-Bold",color:"#484848"}}>SHARE THE GLAM</p>
                    <div style={{display:"flex",flexDirection:"column",width:"100%"}}>
                        <div className="iconBlock" style={{justifyContent:"space-around"}}>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/facebook.png')} height="35vh" width="35vw"/>
                                <p>FACEBOOK</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/pinterest.png')} height="35vh" width="35vw"/>
                                <p>PINTEREST</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/ig.png')} height="35vh" width="35vw"/>
                                <p>INSTAGRAM</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/weibo.png')} height="35vh" width="35vw"/>
                                <p>WEIBO</p>
                            </div>
                        </div>
                        <div className="iconBlock" style={{justifyContent:"space-around"}}>
                        <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/kakao.png')} height="35vh" width="35vw"/>
                                <p>KAKAO</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/save.png')} height="35vh" width="35vw"/>
                                <p>SAVE</p>
                            </div>
                            <div style={{visibility:"hidden"}} >
                                <img src={require('./image/icon/kakao.png')} height="35vh" width="35vw"/>
                                <p>KAKAO</p>
                            </div>
                            <div style={{visibility:"hidden"}}>
                                <img src={require('./image/icon/save.png')} height="35vh" width="35vw"/>
                                <p>SAVE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{border:"1px solid #ececec"}}/>
                <div style={{display:"flex",justifyContent:"center",height:"50%"}}> 
                    <a href="https://www.benefitcosmetics.com/us/en/brow-makeup"><img src={require('./image/icon/product.PNG')} height="80%" width="100%"/></a>
                </div>
            </div>    
        )
    }
}

export default Share;