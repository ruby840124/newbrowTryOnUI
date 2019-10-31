import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

class Share extends React.Component{
	//建構子
	constructor(props) {
            const height = (document.body.scrollHeight-600)+"px";
            super(props);
            this.state={height:height}
	}
	
	
    render(){
        return(
            <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column"}}>
                <div className="getBrowFirst" style={{flex:1.5,alignItems:"center"}}>
                    <p style={{fontSize:"28px",fontFamily:"ProximaNova-Bold",color:"#484848"}}>SHARE THE GLAM</p>
                    <div className="iconBlock" style={{justifyContent:"space-around"}}>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/facebook.png')} width="40px" height="40px"/>
                                <p>FACEBOOK</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/pinterest.png')} width="40px" height="40px"/>
                                <p>PINTEREST</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/ig.png')} width="40px" height="40px" />
                                <p>INSTAGRAM</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/weibo.png')} width="40px" height="40px"/>
                                <p>WEIBO</p>
                            </div>
                        </div>
                        <div className="iconBlock" style={{justifyContent:"space-around"}}>
                        <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/kakao.png')} width="40px" height="40px"/>
                                <p>KAKAO</p>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <img src={require('./image/icon/save.png')} width="40px" height="40px"/>
                                <p>SAVE</p>
                            </div>
                            <div style={{visibility:"hidden"}} >
                                <img src={require('./image/icon/kakao.png')} width="40px" height="40px"/>
                                <p>KAKAO</p>
                            </div>
                            <div style={{visibility:"hidden"}}>
                                <img src={require('./image/icon/save.png')} width="40px" height="40px"/>
                                <p>SAVE</p>
                            </div>
                        </div>
                </div>
                 <hr style={{margin:0,border:"1px solid #ececec"}}/>
                 <div style={{alignItems:"center",flex:1}}> 
                    <a href="https://www.benefitcosmetics.com/us/en/brow-makeup"><img src={require('./image/icon/product.PNG')} style={{objectFit:"cover"}} height="100%" width="100%"/></a>
                </div>
            </div>    
        )
    }
}

export default Share;