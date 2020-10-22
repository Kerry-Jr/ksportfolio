import React from 'react';

function AboutList() {

    const languages = [
       {'name': 'html5'},
      {'name': 'css3'},
      {'name':'sass'},
      {'name': 'javascript'},
      {'name': 'jquery'},
      {'name':'react'},
      {'name':'redux'},
      {'name':'redux-form'},
      {'name':'Python (work in progress)'},
      {'name': 'Angular (work in progress)'},
      {'name':'express.js'},
      {'name':'node.js'},
      {'name':'MySQL'},
      {'name': 'MongoDB'},
      {'name':'Firebase'},
      {'name':'Mongoose.js'},
      {'name': 'Next.JS'}
      ];

  return (
      <div>
         {languages.map((language, idx) => (<li key={idx}>{language.name}</li>))}
       </div>
    );


}

export default AboutList;
