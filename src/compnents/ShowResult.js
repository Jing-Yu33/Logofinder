import React from 'react';
import { Header, Item } from 'semantic-ui-react'
// import VideoItem from './VideoItem';
const ShowResult = ({results}) =>{
   const predictResults = results.map((result,index) =>{
       return <Item ><Item.Content textAlign='center'> <Item.Header >{result}</Item.Header> </Item.Content></Item>
   });
   return(
            <div className="ui center aligned container ">
                <Header as='h4'>The prediction of uploaded image(s) is:</Header>
                <div></div>
                <Item.Group divided>
                  {predictResults}
                </Item.Group>
            </div>
   )
};
export default ShowResult