import React from 'react'
import _isEqual from "lodash/isEqual"

class CompletedTasks extends React.Component {
    constructor(props) {
        super(props)
    }

     shouldComponentUpdate(nextProps) {
        if (_isEqual(nextProps.prop1, this.props.prop1)) {
            return false
        } else {
            return true
        }
    }

    render() {

        return(
            <>
                <div>
                {console.log('completed comp')}

                    <h2>Completed Tasks</h2>
                    {
                        this.props.prop1.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div>
                                    <button onClick={()=>this.props.prop2(item.id)}>Pending</button>
                                    <button onClick={()=> this.props.prop3(item.id)}>Archive</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default CompletedTasks