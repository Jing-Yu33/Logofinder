import React from 'react';
import ImageUploader from 'react-images-upload';
import classify from '../apis/classify';
import ShowResult from './ShowResult';
import Title from './Title'
import UrlForm from './UrlForm';
import '../index.css'
class Predition extends React.Component{
    state = {
        files: null,
        url: null,
        isLoading: true,
        imageSelected: true,
        results : []
    };
    // onUrlSubmit = (url) => {
    //     this.setState({
    //         url: url
    //     })
    // }
     onFileUpload = (pictures)  => {
        this.setState({
            files: pictures,
            imageSelected: true,
            isLoading: false
        })
    }
    _predict =  (e) => {
        this.setState({isLoading: true});
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
                // console.log(response.data);
                this.setState( state=>{
                    const results = [...state.results,response.data.prediction];
                    return {results};
                 });
            })
            // this.setState({isLoading: false});
        }       
    }
    _clear = async (e) => {
        this.setState({
            files: null,
            imageSelected: false,
            isLoading: true,
            results: [],
            url: ""
        })
    };
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
                {/* <UrlForm onSubmit={this.onUrlSubmit}/>
                <h2 className="ui purple center aligned header" id="fonts">OR</h2> */}
                {this.renderResult()}
                <h2 className="ui purple center grey aligned header" >Upload an image</h2>
                <ImageUploader withIcon={true}
                    id='image'
                    onChange={this.onFileUpload}
                    withPreview={true}
                />
                <div class="ui container center aligned">
                    <div className="ui centered form">
                            <button className="ui primary fluid basic button " onClick={this._predict}
                                    disabled={this.state.isLoading}> Predict</button>
                            <span className="p-1 "/>
                            <button className="ui negative fluid basic button " onClick={this._clear}> Clear</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Predition;