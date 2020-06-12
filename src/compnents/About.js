import React from 'react';
const About = () =>{
    return (
        <div className="ui center aligned container">
            <div className="ui horizontal divider">
                About
            </div>
            <div className="ui container">
             <h4 className="ui center aligned">
                This is a CNN project of Class CS274P UCI credited to <a href="mailto:yixingw@uci.edu">Yixing Wang</a>  and <a href="mailto:yuj19@uci.edu">Jing Yu</a>. 
                It supports classification of 32 classes logos based on given <a href="https://www.uni-augsburg.de/en/fakultaet/fai/informatik/prof/mmc/research/datensatze/flickrlogos/">FlickrLogos-32 DataSet</a>.
                Give a try and enjoy! Feel free to contact us if you have any suggestion or question.
             </h4>
            </div>
        </div>
        )
}
export default About;