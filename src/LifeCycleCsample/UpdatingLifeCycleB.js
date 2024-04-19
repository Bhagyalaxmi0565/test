import React, { Component } from 'react'



class UpdatingLifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"john"
      }
      console.log("Life cycle B constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log('Life Cycle B get derivedstate from props')
        return null

    }
    componentDidMount(){
        console.log('component did mount B');
    }
    shouldComponentUpdate(){
        console.log('Life cycle B component should mount');
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('Life cycle B getSnapShotBeforeUpdate');
        return null
    }
    componentDidUpdate(){
        console.log('Life Cycle B component did update');
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

export default UpdatingLifeCycleB

