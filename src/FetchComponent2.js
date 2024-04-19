import React, { useState, useEffect } from 'react';
import './StylingFetch.css'

const FetchComponent = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      response=>response.json()).then(json=>{setData(json); console.log(json)})
  },[])
  const DisplayData=data.map(
    (info)=>{
        return(
            <tr>
                <td>{info.id}</td>
                <td>{info.title}</td>
                <td>{info.userId}</td>
                <td>{info.completed}</td>
            </tr>
        )
    }
)
  return (
    
    <div>
      <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>UserId</th>
                    <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }


export default FetchComponent;
// {data.map(item=><td key={item.id}>{item.title}</td>)}
