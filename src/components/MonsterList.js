import {Component} from 'react';
import './MonsterList.css'

class MonsterList extends Component{
    
    render(){
        const {monsters , search} = this.props.state;
        console.log(monsters , search)
        

        return(
            <div className="List">
                {monsters.map(el=>{
                    if(search === '' || el.name.toLowerCase().includes(search)){
                     return (
                        <div className="Card" key={el.id}>
                            <img src={`https://robohash.org/${el.id}?set-set2`} alt="" className="Card__Image" />
                            <h1 className='Card__Name'>{el.name}</h1>
                            <h1 className='Card__Email'>{el.email}</h1>
                        </div>
                        )
                    }
                })}
            </div>
        )
    }
}
export default MonsterList;