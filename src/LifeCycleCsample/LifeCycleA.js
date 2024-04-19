import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"john"
      }
      console.log("Life cycle A constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life Cycle A get derivedstate from props')
        return null

    }
    componentDidMount(){
        console.log('component did mount A');
    }
    
  render() {
    console.log('LifeCycle A render');
    return (
      <div>
        Life Cycle A
        <div><LifeCycleB/></div>
      </div>
    )
  }
}

export default LifeCycleA

