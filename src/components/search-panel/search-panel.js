import { Component } from 'react';
import './search-panel.css'

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
        }
    }

    onUpdateSeatch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSeatch(term);
    }

    render() {
        return (
            <input type='text'
                   className='form-control search-imput'
                   placeholder='Найти сотрудника'
                   value={this.state.term}
                   onChange={this.onUpdateSeatch}/>
        )
    }
}

export default SearchPanel;