import React from "react";

class PassingValue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            newvalue: null
        }
    }
    static getDerivedStateFromProps(props, state) {
        //console.log(props.value)
        return { count: Number(props.value) }
    }
    
    componentDidMount() {
        let counter = this.state.count
        
        setInterval(() => {
            counter = counter - 1
            console.log(this.state.newvalue)
            this.setState({ newvalue: counter })
            //console.log(typeof(this.state.count))
        }, 100)
    }
    func(arg){
        if(arg>0){
            return arg
        }else{
            return 0
        }
    }
    render() {
        return (
            <div className="main-container">
                <div className="container">
                    <h1>{this.func(this.state.newvalue)}</h1>
                </div>
                
            </div>
        )
    }
}
export default PassingValue;