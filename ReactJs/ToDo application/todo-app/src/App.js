import React from 'react'
import PendingTasks from './components/PendingTasks';
import CompletedTasks from './components/CompletedTasks';
import ArchievedTasks from './components/ArchievedTasks';
import '.index.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:[],
            title: "",
            desc: "",
            id: 0
        }
    }

    // componentDidMount(){
    // }
    // shouldComponentUpdate(){
    // }
    // getSnapshotBeforeUpdate(){
    // }
    // componentDidUpdate(){
    // }
    

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleDesc = (e) => {
        this.setState({desc: e.target.value})
    }

    addToDo = () => {
        const newItem = {
            id: this.state.id + 1,
            title: this.state.title,
            desc: this.state.desc,
            status: false,
            active: true
        }

        const item = [...this.state.todos, newItem]
        console.log(newItem.id)
        this.setState({todos: item, id: this.state.id + 1})
    }

    getPendingStatus = (todoId) => {
        const pendingItems = this.state.todos.filter(item => item.status === false && item.active === true)
        return pendingItems
    }

    getCompletedStatus = (todoId) => {
        const completedItems = this.state.todos.filter(item => item.status === true && item.active === true)
        return completedItems
    }

    getArchievedItems = () => {
        const archievedItems = this.state.todos.filter(item => item.active === false)
        return archievedItems
    }

    changeCompletionStatus=(todoId)=>{
        const temp=this.state.todos
        const obj=temp.find((item) => item.id === todoId)
        console.log(obj)
        obj.status=!obj.status
        console.log(obj)
        this.setState({todos:temp})
    }

    changeActiveStatus = (todoId) => {
        const objs = this.state.todos
        const activeObj = objs.find((item) => item.id === todoId)
        // console.log(activeObj)
        activeObj.active = !activeObj.active
        this.setState({todos:objs})
    }

    deleteTask = (todoId) => {
        const tasks = this.state.todos
        const newItems = tasks.filter((item) => item.id !== todoId)
        console.log(newItems)
        this.setState({todos: newItems})
    }

    render() {
        return(
            <>

                <h1>To Do Application</h1>

                <div>
                    <div>
                        <p>Title:</p> 
                        <input type='text' onChange={(e) => this.handleTitle(e)}></input>
                    </div>
                    <div>
                        <p>Description:</p> 
                        <input type='text' onChange={(e) => this.handleDesc(e)}></input>
                    </div>
                    <button onClick = {() => this.addToDo()}>Add Task</button>
                </div>

                <div>

                <PendingTasks prop1={this.getPendingStatus()} prop2={this.changeCompletionStatus} prop3 = {this.changeActiveStatus} prop4 = {this.deleteTask}></PendingTasks>
                
                <CompletedTasks prop1={this.getCompletedStatus()} prop2={this.changeCompletionStatus} prop3 = {this.changeActiveStatus} prop4 = {this.deleteTask}></CompletedTasks>

                <ArchievedTasks prop1={this.getArchievedItems()} prop3 = {this.changeActiveStatus} prop4 = {this.deleteTask}></ArchievedTasks>

                </div>
            </>
        )
    }
}

export default App