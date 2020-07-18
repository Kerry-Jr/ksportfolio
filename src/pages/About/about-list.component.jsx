import React, {Component} from 'react';

class AboutList extends Component {
  render() {
    const languages = [{'name': 'html5'}, {'name': 'css3'}, {'name':'sass'}, {'name': 'javascript'},{'name': 'jquery'},{'name':'react'}, {'name':'redux'},{'name':'redux-form'},{'name': 'redux-thunk'},{'name':'Python (work in progress)'},{'name':'express.js'},{'name':'node.js'},{'name':'MySQL'},{'name': 'MongoDB'},{'name':'Firebase'},{'name':'Mongoose.js'}];
    return (
       <div>
         {languages.map(function(language, idx){
           return (<li key={idx}>{language.name}</li>)
         })}
       </div>
    );
  }
}

export default AboutList;