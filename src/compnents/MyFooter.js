import React from 'react';
import {Footer} from 'react-materialize';
import './App.css'
const MyFooter = () =>{
   return(
      <div className="ui vertical footer segment" style={{flexShrink:'0',position:'absolute',top:'150%',left:'0',textAlign: 'center', width:'100%'}}>
      {/* //  <div className="ui center aligned container" style={{display:'flex'}}> */}
        {/* <div className="ui borderless menu" style={{flexShrink:'0',margin:'0', borderRadius:'0px',bottom:'0'}}> */}
          Copyright © 2020 Jing Yu | Yixing Wang
      </div>
      // </div>
   )
};
export default MyFooter


