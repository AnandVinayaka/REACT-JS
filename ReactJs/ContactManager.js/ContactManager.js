import React from "react";
import axios from "axios";
class ContactManager extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            contacts:[],
            ipName:'',
            ipEmail:'',
            ipNumber:'',
            statusMsg:''
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3001/ContactDetails").then((res)=>this.setState({contacts:res.data})).catch
        ((err)=>console.log("error"))
    }
    handleChange=(e,keyword)=>{
        if(keyword==="contactname"){
            this.setState({ipName:e.target.value})
        }
        else if(keyword==="contactemail"){
            this.setState({ipEmail:e.target.value})
        }
        else{
            this.setState({ipNumber:e.target.value})
        }

    }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/ContactDetails",{
            cname:this.state.ipName,
            cemail:this.state.ipEmail,
            cno:this.state.ipNumber
        }).then((res)=>this.setState({statusMsg:"create user successfully"})).catch((err)=>this.setState({statusMsg:"some error occurred please try again"}))
        axios.get("http://localhost:3001/ContactDetails").then((res)=>this.setState({contacts:res.data})).catch
        ((err)=>console.log("error"))
    }
    
    render(){
        return(   
    <>
    <form>
        Contact Name:<input type="text" placeholder="enter the name of the contact" onChange={(e)=>this.handleChange(e,"contactname")}></input>
        Contact Mail:<input type="text" placeholder="Email"onChange={(e)=>this.handleChange(e,"contactemail")} ></input>
        Contact Number:<input type="text" placeholder="Phone" onChange={(e)=>this.handleChange(e,"contactnumber")}></input>
        <button onClick={(e)=>this.handleSubmit(e)}>create contact</button>

    </form>
    <p style={{color:"red"}}>{this.state.statusMsg}</p>
    {
        this.state.contacts.map((item)=>(
            <>
            <h2>Name :{item.cname}</h2>
            <p>Phone :{item.cno}</p>
            <p>Email :{item.cemail}</p>
            <br></br>
            <hr></hr>
            </>
        ))
    }
    </>
        )
    }
}
export default ContactManager
