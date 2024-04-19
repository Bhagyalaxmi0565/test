import React, { Component } from 'react'
import UpdatingLifeCycleB from './UpdatingLifeCycleB';

class UpdatingLifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"john"
      }
      console.log("Life cycle A constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log('ULife Cycle A get derivedstate from props')
        return null

    }
    componentDidMount(){
        console.log('component did mount A');
    }
    shouldComponentUpdate(){
        console.log('Life cycle A component should mount');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Life cycle A getSnapShotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log('Life Cycle A component did update');
    }
    changeState=()=>{
        this.setState({
            name:'allen'
        })
    }
    
  render() {
    console.log('LifeCycle A render');
    return (
      <div>
        Life Cycle A
        <div><UpdatingLifeCycleB/></div>
        <button onClick={this.changeState}>change</button>
      </div>
    )
  }
}

export default UpdatingLifeCycleA;

