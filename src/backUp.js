import React ,{ Component } from 'react';
import Monster from './components/Monster'

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters:[],
      search:''
    }
    console.log(1)
  }
  componentDidMount(){
    console.log(2)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>{
      this.setState(()=>{
        return ({monsters:users})
      },
      ()=>{console.log(this.state)})
    })
  }
  render(){
    console.log(this.state)
    const searchHandler=(e)=>{
      this.setState(
        ()=>{return {search:(e.target.value.toLowerCase())}},
        ()=>{}
      )
    }
    return(
      <div className="app">
        <input type="search" onChange={searchHandler}/>
        
        {this.state.monsters.map(el=>{
          let comparison = el.name.toLowerCase().slice(0,this.state.search.length);
      
          if(this.state.search==='' || comparison===this.state.search){
            return (
              <div key={el.id} >
                <h1>{el.name}</h1>
              </div>
            )
          }
        })}
      </div>
    )
  }
}

export default App;
