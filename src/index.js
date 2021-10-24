import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app'


// import { Component, Fragment } from 'react';
// class WhoAmI extends Component{
//     constructor (props){
//         super(props);
//         this.state = {
//             years: 27,
//             position: '',
//         }
//     }
//     nextYear = () => {
//         console.log('+++');
//         this.setState(state => ({
//             years: state.years + 1,
//         }))
//     }
//     commitInputChanges = (e, color) => {
//         this.setState({
//             position:e.target.value,
//         })
//     }
//     render() {
//         // const {name, surname, link} = this.props;
//         const {position, years} = this.state;
//         return (
//             <>
//                 <button onClick={this.nextYear}>+++</button>
//                 {/* <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1> */}
//                 <h1>Age - {years}, position - {position}</h1>
//                 {/* <a href={link}>My profile</a> */}
//                 <form>
//                     <span>ВВедите должность</span>
//                     <input type='text' onChange={(e) => this.commitInputChanges(e, 'some color')} />
//                 </form>
//             </>
//         )
//     }
// }


ReactDOM.render(
    <StrictMode>
        <App />
        {/* <WhoAmI/> */}
    </StrictMode>,
    document.getElementById('root')
);
