import React from 'react';
import { Link } from 'react-router-dom'
import Title from './Title.js'
const Header = () =>{
    return (
        <div className="ui container">
            <div className="ui container">
                <Title/>
            </div>
            <div className="ui secondary pointing menu">
                <Link to='/' className="ui primary basic button">
                       <h3> Classifier </h3>
                </Link>
                <div className="right menu">
                    <Link to='/About' className="ui negative basic button">
                            <h3> About </h3>
                    </Link>
                </div>
            </div>
        </div> 
        )
}
export default Header;