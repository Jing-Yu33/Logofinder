import React from 'react';
import SearchBar from './SearchBar'

class UrlForm extends React.Component{
    // state = {url : ''};
    onFormSubmit = url =>{
        // event.preventDefault();
        this.props.onSubmit(url);
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar onSubmit={this.onFormSubmit} className="ui form" />
        </div>
        );
    }
}
export default UrlForm