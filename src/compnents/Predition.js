import React from 'react';
import ImageUploader from 'react-images-upload';
import classify from '../apis/classify';
import ShowResult from './ShowResult';
import Spinner from 'react-bootstrap/Spinner';
import { Message } from 'semantic-ui-react'
import '../index.css'
class Predition extends React.Component{
    state = {
        files: null,
        url: null,
        isLoading: false,
        imageSelected: false,
        results : []
    };
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
    _predict =  () => {
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
    _clear = async () => {
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
                {/* /* /* <div className="ui items" >
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
        </div>*/}
            {/* </div>  */}
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
              <Message style={{width:'50%', backgroundColor:'clear', textAlign:'center', margin:'auto',backgroundColor: 'rgba(255,255,255,0)'}}>
                <Message.Header>
                  <a className="ui grey header">
                    <i className=" tag icon"></i>
                    Result
                  </a>
                </Message.Header>
                  {this.placeHolder()}
                 {this.renderResult()}
              </Message>
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
                  </div>
              </div>
          </div>
        )
    }
}
export default Predition;