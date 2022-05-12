import {Component} from 'react';
import './SearchBox.css'

class SearchBox extends Component{
    
    render(){
        const {funk , placeholder , className} = this.props;
        return(
            <div className="">
                <input 
                    type="search"
                    placeholder={placeholder}
                    onChange = {funk}
                    className = {className}
                 />
            </div>
        )
    }

}

export default SearchBox;