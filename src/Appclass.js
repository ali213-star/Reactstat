import React,{Component} from "react";
import"./App.css";

 class Appclass extends Component{
     constructor(props){
         super (props);
         this.state = {
            fullName: "Sadraoui ali",
            bio: "develloper full satck js  ",
            profession: "dancer :(",
            show: false,
            count: 0,
            imgSrc :" https://scontent.fnbe1-2.fna.fbcdn.net/v/t1.6435-9/245229618_1538531899823457_6358243582760637197_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cFTnJ4WS_gwAX_IK0Vm&_nc_ht=scontent.fnbe1-2.fna&oh=97b6a5fae00743efa9e0350ef4e969a1&oe=618CB94B"        
         };
     }
     show =()=> {
        this.setState({ show: !this.state.show });
    };
    componentDidMount(){
        setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
        console.log("component did mount");
    };
    render() {
        return (
          <div>
            <h1>welcome</h1>
            {this.state.show && (
              <>
                <h1>{this.state.fullName}</h1> <br />
               <h1>{this.state.bio}</h1>  <br /><br /> 
               <img src={this.state.imgSrc} alt="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Ffr%2Fphotos%2Fprofil-homme-visage-masculin-1105761%2F&psig=AOvVaw3dxmr331_ERb_UrkuI9DF3&ust=1634132292550000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOiHtLj_xPMCFQAAAAAdAAAAABAD " ></img>
              <h1>{this.state.profession}</h1>
              </>
            )}
            <button id="btn" onClick={this.show}>show me</button>
            <h4>{this.state.count}</h4>
           
    
          </div>
        );
}
 }
 export default Appclass;

 