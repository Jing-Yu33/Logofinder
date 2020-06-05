import React from 'react';
import { Router, Route, Switch } from "react-router-dom"; 
import ImageUploader from 'react-images-upload';
import history from '../history'
import Header from './Header.js'
import About from './About.js'
import Prediction from './Predition.js'
import classify from '../apis/classify';
import ShowResult from './ShowResult';
import Title from './Title'
import UrlForm from './UrlForm';
import './App.css'
class App extends React.Component{
    
    render(){
        return (
            <div className="ui container">
                 <Router history={history}> 
                    <Header/>
                    <Switch>
                        <Route path="/About" component={About}/>
                        <Route path="/" component={Prediction}/>
                    </Switch>
                 </Router>
              </div>
        );
    }
}
export default App