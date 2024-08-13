import React from 'react'
import _isEqual from "lodash/isEqual"

class PendingTasks extends React.Component {
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
                {console.log('pending comp')}

                    <h2>Pending Tasks</h2>
                    {
                        this.props.prop1.map((item) => (
                            <div key={item.id}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div>
                                    <button onClick={()=>this.props.prop2(item.id)}>Completed</button>
                                    <button onClick={()=> this.props.prop3(item.id)}>Archive</button>
                                    <button onClick={() => this.props.prop4(item.id)}>Delete</button>
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
}

export default PendingTasks