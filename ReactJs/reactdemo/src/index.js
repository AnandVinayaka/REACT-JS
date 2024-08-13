// import React from 'react';
// import ReactDOM from 'react-dom/client';

// import SimpleClassComponent from './components/class_component';

// import PropsEg from './components/PropsEg';
// import HeaderComponent from './components/ImportExportsEg';
// import SampleClassComponent from './components/SampleClassComponent';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <h1>Hello Everyone</h1>
//     <PropsEg fname="ANAND" role="SOFTWARE ENGINEER" logintime="10:30 AM"></PropsEg>
//     <br></br>
//     <br></br>
//     <HeaderComponent></HeaderComponent>
//     <br></br>
//     <br></br>
//     <SampleClassComponent fname="Anand"></SampleClassComponent>
//     <SampleClassComponent fname="Vinayaka"></SampleClassComponent>
//     <SampleClassComponent fname="Palyam"></SampleClassComponent>

//   </>
// );

////////

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <SimpleClassComponent></SimpleClassComponent>
// );


////////5-08-2024

import React from "react";
import DashBoard from "./components/DashBoard.js";
import SigninComponent from "./components/SigninComponent.js";

class Loginuser extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLogged:true,
           user:{
            username:"ANAND",
            role:"SOFTWARE ENGINEER"
           }
        }
    }
    toggleUser=()=>{
       this.setState({isLogged:!(this.state.isLogged)})
    }
    render(){
        return(
            <>
                {
                    this.state.isLogged?
                    <>
                    <DashBoard userdata={this.state.user} toggleFunc={this.toggleUser}></DashBoard>
                    </>:<>
                   <SigninComponent toggleFunc={this.toggleUser}></SigninComponent>
                    </>
                }
            </>
        )
    }
}    
export default Loginuser;
