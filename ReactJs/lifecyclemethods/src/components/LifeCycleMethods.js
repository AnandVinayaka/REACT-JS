import React from "react"
class LifeCyclemethods extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:0,
            msg: ""
            // msg:"hello welcome"
        }
    }

    ////////"getDerivedStateFromProps"

    // static getDerivedStateFromProps(props,state){
    //     console.log("inside getDerivedStateFromProps method ");
    //     console.log(props,state)
    //     // state.msg = props.msg
    //     return{
    //         msg:props.msg
    //     }
    // }


    ////////"ComponentDidMount"
    // componentDidMount(){
    //     console.log("inside ComponentDidMount method ");
    //     setTimeout(
    //         ()=>{
    //             this.setState(
    //                 {msg:"hello welcome ANAND", count:this.state.count + 1})},3000
    //             )
    // }


    ////////"shouldComponentUpdate"
    shouldComponentUpdate(newprops,newstate){
        console.log("inside shouldComponentUpdate method ");
        console.log(newstate.count)
        
        if (this.state.count === newstate.count){
            return false
        }
        else{
            return true
        }
    }


    ////////"shouldComponentUpdate"
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log("inside getSnapshotBeforeUpdate method");
        console.log(this.state)
        return "from Snapshot"
    }


    ////////"componentDidUpdate"
    componentDidUpdate(props,state,snapvalue){
        console.log("inside componentDidUpdate method");
        console.log(this.state, snapvalue)
    }

    changeCount = ()=>{
            console.log("changeCount component");
            this.setState({count:this.state.count + 1})
    }

    render(){
        console.log("render");
        
        return(
            <>
            <h1>{this.state.count}</h1>
            <h1>{this.state.msg}</h1>
            <button onClick={this.changeCount}>change</button>
            </>
        )
    }
}
export default LifeCyclemethods