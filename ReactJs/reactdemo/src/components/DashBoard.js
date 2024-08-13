import React from "react";
class DashBoard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {username,role} = this.props.userdata;
        return(
        <>
        <h1>Welcome {username}</h1>
        <h2>Role:{role}</h2>
        <button onClick={this.props.toggleFunc}>Logout</button>
        </>
        )
    }
}   
export default DashBoard;