import React from 'react';
import ImageUploader from 'react-images-upload';
import classify from '../apis/classify';
import ShowResult from './ShowResult';
import Spinner from 'react-bootstrap/Spinner';

import Title from './Title'
import UrlForm from './UrlForm';
import '../index.css'
class Predition extends React.Component{
    state = {
        files: null,
        url: null,
        isLoading: false,
        imageSelected: false,
        results : []
    };
    // onUrlSubmit = (url) => {
    //     this.setState({
    //         url: url
    //     })
    // }
    changeColor(e) {
        e.target.style.color = 'Blue';
      }
    changeColorBack(e) {
        e.target.style.color = 'Black';
      }
     onFileUpload = (pictures)  => {
        this.setState({
            files: pictures,
            imageSelected: true,
        })
    }
    _predict =  (e) => {
        this.setState({
            isLoading: true,
            results: []
        });
        if (this.state.files) {
            this.state.files.map(async (file) =>{
                let response = null;
                const data = new FormData();
                data.append('image',file);
                // console.log(data.get('image'));
                response = await classify.post('/', data,
                {
                    headers: {
                        'content-type': 'multipart/form-data'
                    } 
                });
                console.log(response.data);
                this.setState( state=>{
                    const results = [...state.results,response.data.prediction];
                    return {results};
                 });
            })
            this.setState({isLoading: false});
        }       
    }
    _clear = async (e) => {
        this.setState({
            files: null,
            imageSelected: false,
            isLoading: false,
            results: [],
            url: ""
        })
    };
    placeHolder = () => {
        return (
            <div className="ui center aligned container">
                <div className="ui items" >
                    <div className="item">
                        <div className="ui center content">
                            <a className="ui grey header"
                                // onMouseOver={this.changeColor} 
                                // onMouseLeave={this.changeColorBack}
                            >
                        <i className=" tag icon"></i>
                        Result
                    </a>
                    </div>
                </div>
                </div>
                {( this.state.isLoading  || (!this.state.imageSelected) || this.state.results.length === 0) && (
                 <div className="ui center aligned container">
                    <Spinner
                    as="span"
                    animation="grow"
                    variant="light"
                    role="status"
                    aria-hidden="true"></Spinner>
                 </div>
                )}
            </div>
        )
    }
    renderResult = () => {
        // if (this.state.isLoading && this.state.imageSelected) { 
        //     return (
        //         <div className="ui container">
        //             <Spinner color="primary" type="grow" />
        //         </div>
        // )}
        if (this.state.results.length !== 0) {
            console.log(this.state.results);
            return (
             <div>
                <ShowResult results={this.state.results}/>
             </div>
            )
        }
        else return null;
    }
    render() {
        return (
            <div className="ui container">
                {this.placeHolder()}
                {this.renderResult()}
                <h2 className="ui  center grey aligned header" >Upload an image</h2>
                <ImageUploader withIcon={true}
                    id='image'
                    onChange={this.onFileUpload}
                    withPreview={true}
                />
                <div class="ui container center aligned">
                    <div className="ui centered form">
                            <button className="ui primary fluid basic button " onClick={this._predict}
                                    disabled={this.state.isLoading || !this.state.imageSelected}> Predict</button>
                            {/* <span className="p-1 "/> */}
                            {/* <br></br>
                            <button className="ui negative fluid basic button " onClick={this._clear}> Clear</button> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Predition;