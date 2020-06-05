import React from 'react'

class SearchBar extends React.Component{
    state = {url : ''};
    onFormSubmit = event =>{
        // event.preventDefault();
        this.props.onSubmit(this.state.url);
    }

    render(){
        return (
        <div className="search-bar ui segement" >
            <form onSubmit={this.onFormSubmit} className="ui form" >
                <div className="field">
                    <h2 className="ui purple center aligned header" id="fonts">Provide an image url</h2>
                    <input 
                        label = "url"
                        value = {this.state.url}
                        onChange = {(e) => this.setState({url :e.target.value})}
                    />
                </div>
            </form>
        </div>
        );
    }
}
export default SearchBar