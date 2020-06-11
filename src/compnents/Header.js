import React from 'react';
import { Link } from 'react-router-dom'
import Title from './Title.js'
import './App.css'
const Header = () =>{
    return (
        // <div className="title">
           <div className="ui items">
                <Title/>
            {/* </div> */}
            <div className="ui bottom attached tabular menu">
                <Link to='/' className="item">
                    <div className="ui content">
                       <a className="ui  blue header"> 
                        <i class="expand icon"></i>
                        Classifier 
                       </a>
                    </div>
                </Link>
                <div className="right menu">
                    <Link to='/About' className="item">
                        <div className="ui content">
                            <a className="ui  blue header"> 
                             <i className="code icon"></i>
                             About 
                            </a>
                        </div>
                    </Link>
                </div>
            </div>
        </div> 
        )
}
export default Header;