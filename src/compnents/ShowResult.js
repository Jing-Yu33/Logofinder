import React from 'react';

// import VideoItem from './VideoItem';
const ShowResult = ({results}) =>{
   const predictResults = results.map((result,index) =>{
       return <ui key={index}> {result} </ui>
   });
   return(
            <div className="ui center aligned container ">
                <p>The prediction of uploaded image(s) is:</p>
                {predictResults}
            </div>
   )
};
export default ShowResult