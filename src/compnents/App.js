import React from 'react';
import { Router, Route, Switch } from "react-router-dom"; 
import ImageUploader from 'react-images-upload';
import history from '../history'
import Header from './Header.js'
import MyFooter from './MyFooter.js'
import About from './About.js'
import Prediction from './Predition.js'
import './App.css'
class App extends React.Component{
    
    render(){
        return (
            <div className="ui container" style={{minHeight:'100%', display:'flex',flexDirection: 'column'}}>
                 <Router history={history}> 
                    <Header/>
                    <Switch>
                        <Route path="/About" component={About}/>
                        <Route path="/" component={Prediction}/>
                    </Switch>
                    
                 </Router>
                 <MyFooter/>
              </div>
        );
    }
}
export default App