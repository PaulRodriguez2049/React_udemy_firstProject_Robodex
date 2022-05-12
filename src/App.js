import { Component} from 'react'
import MonsterList from './components/MonsterList'
import SearchBox from './components/SearchBox';
import './App.css'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      search:''
    }
  
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>{
      this.setState(
        ()=>{return {monsters:users}},
        ()=>{},
      )
    })
  }

  handleSearch = (e)=>{
    this.setState(
      ()=>{return {search:e.target.value.toLowerCase()}},
      ()=>{}
    )
  }

  render(){
      return(
        <div className="app">
          <h1 className='Designation'>Monster Robotex</h1>
          <SearchBox 
            className = 'search-box'
            funk={this.handleSearch}
            placeholder = 'Here There be Monsters'
          />
          <MonsterList state={this.state}/>
        </div>
      )
    }
  }

export default App;