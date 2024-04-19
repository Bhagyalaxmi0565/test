import React, { Component } from 'react'

export class LifeCycleComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            show:false,
            count:0
        }
    }
    delHeader=()=>{
        this.setState({show:true})
    }
        componentDidMount(){
            console.log("Compoenent did mount");
        }
        componentDidUpdate(){
            console.log("Compoenent did Update");
        }
    
  render() {
    let myheader;
    if (this.state.show){
        myheader=<Child/>;
    };
    return (
      <div>
        <center>
            {myheader}
            <button type="button" onClick={this.delHeader}>delete Header</button>
            <h3>count:{this.state.count}</h3>
            <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        </center>
        
      </div>
    )
  }
}
class Child extends React.Component{
    CompopnentwillUnmount(){
        console.log("Component will unmount");
    }
    render(){
        return(
        <h1>Hello world!</h1>
        );
    }

}

export default LifeCycleComponent
