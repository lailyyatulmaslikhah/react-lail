import { useState } from 'react';
import React from 'react';


const Likestate = () => {
    const [like, setLike] = useState(1);
    const [dislike, setDislike] = useState(0);

    const handleClick = () => {
        setLike(like + 1);
    }
    const handleDislike = () => {
        setDislike(dislike + 1);
    }

    return (
        <div className="Likestate">  
            <h2><center>Contact List</center></h2>
            <h2><center>Like: { like } </center></h2>
            <center><button onClick={handleClick}>Like</button></center>  
            <h2><center> Dislike: { dislike } </center></h2> 
            <center><button onClick={handleDislike}>Dislike</button></center>    
        </div>
    );
}
export default Likestate;

// STATE
// import React, { Component } from 'react';
// //import Likestate from "../components/Likestate";
// import logo from '../maskot stikom.png';
// import '../App.css'

// class Timer extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             time : props.start
//         }
//     }

//     componentDidMount(){
//         this.addInterval = setInterval( () => this.increase(), 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.addInterval)
//     }
//     increase() {
//         this.setState((state, props) => ({
//             time: parseInt(state.time) + 1
//         }))
//     }

//     render(){
//         return(
//             <div> {this.state.time} Detik</div>
//         )
//     }
// }

// class App extends Component {
//         render() {
//             return (
//                 <div className="App">
//                     <header className="App-header">
//                         <img src={logo} className="App-logo" alt="logo" />
//                         <Timer start="0"/>
//                     </header>
//                 </div>
//             )
//         }
//     }

