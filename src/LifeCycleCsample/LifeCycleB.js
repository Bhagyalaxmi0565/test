import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"john"
      }
      console.log("Life cycle  B constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life Cycle B get derivedstate from props')
        return null

    }
    componentDidMount(){
        console.log('component did mount B');
    }
    
  render() {
    console.log('LifeCycle B render');
    return (
      <div>
        Life Cycle B
      </div>
    )
  }
}

export default LifeCycleB

