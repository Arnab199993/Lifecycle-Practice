import React, { Component } from 'react'

export default class LifecycleClass extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            input:""
        }
    }
    componentDidMount(){
        console.log("The component Mounted")       
    }
    componentDidUpdate(){
        console.log("The component Updated")
    }
    componentWillUnmount(){
        console.log("The component unmounted")
    }
    handleclick=(()=>{
        this.setState({...this.state.name,name:"Johny"})
    })
    handlechange=((event)=>{
        this.setState({...this.state,input:event.target.value})
    })
  render() {
    return (
      <div>
        <h1>LifecycleClass</h1>
        <button onClick={this.handleclick}>
            Click Me
        </button>
        <input onChange={this.handlechange}/>
            {this.state.name};
            {this.state.input}
        {/* </input> */}
        </div>
    )
  }
}
