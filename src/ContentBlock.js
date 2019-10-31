import React from "react"
import Main from './Main';
import BrowChoose from './BrowChoose';

class ContentBlock extends React.Component{
    constructor(props) {
		super(props);
    }	
	 
    render(){
            let noCompare = null; //判斷是化妝前，還是化妝後的圖片
            (this.props.modelDisplay=='inline'?noCompare='none':noCompare='inline');
        return(
            <div style={{width:"100%",height:"92%",display:"flex"}}>
                <div style={{width:"80%"}}>  
                    <img  src={require('./image/model/before.jpg')} style={{display:noCompare,objectFit:"cover",width:"100%",height:"100%"}}/>
                    <img  src={require('./image/model/after.jpg')}  style={{display:this.props.modelDisplay,objectFit:"cover",width:"100%",height:"100%"}}/> 
                </div>
                    <BrowChoose/>
            </div>
        )
    }
}

export default ContentBlock;