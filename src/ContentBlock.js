import React from "react"
import Main from './Main';
import BrowChoose from './BrowChoose';

class ContentBlock extends React.Component{
    constructor(props) {
		super(props);
        this.state={browChooseWidth:0,imageWidth:0,height:0}
    }	

    componentDidMount(){
        let width = document.body.clientWidth/3.5+"px";
        let imageWidth = (document.body.clientWidth- document.body.clientWidth/3.5)+"px"
        let height = document.body.clientHeight-80+"px";
        this.setState(({browChooseWidth:width,imageWidth:imageWidth,height:height}));
    }
    render(){
            let noCompare = null;
            (this.props.modelDisplay=='inline'?noCompare='none':noCompare='inline');
        return(
            <div style={{display:"flex",height:"92%",width:"100%"}}>
                <div>
                    <img className="modelImage" src={require('./image/model/before.jpg')} 
                        style={{display:noCompare,width:this.state.imageWidth,height:this.state.height}}/>
                    <img className="modelImage" src={require('./image/model/after.jpg')} 
                        style={{display:this.props.modelDisplay,width:this.state.imageWidth,height:this.state.height}}/>    
                </div>
                <div style={{width:this.state.browChooseWidth,overflow:"hidden"}}>
                    <BrowChoose/>
                </div>
            </div>
        )
    }
}

export default ContentBlock;