import React from 'react';
import { Link } from 'react-router-dom'
import Title from './Title.js'
import './App.css'
const Header = () =>{
    return (
        // <div className="title">
           <div className="ui container">
                <Title/>
            {/* </div> */}
            <div className="ui bottom attached tabular menu">
                <Link to='/' className="blue item">
                       <h3> Classifier </h3>
                </Link>
                <div className="right menu">
                    <Link to='/About' className="item">
                            <h3> About </h3>
                    </Link>
                </div>
            </div>
        </div> 
        )
}
export default Header;