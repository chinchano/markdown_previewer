import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import marked from 'marked';

//Input Component
class Input extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerms: ''
    }
  };
    handleInputChange(e){
      this.setState({
        searchTerms: e.target.value
       
      });
       //console.log('search Terms ' + searchTerms);
    }
   handleOutput(searchTerms){
    //API call
    
 console.log(marked('I am using 00121'));
  }
   render(){
     return(
      <div>
         <textarea onClick={this.handleOutput.bind(this)} cols="40" rows="5"></textarea>
      
      </div>
     );
   }
  
}

//Marked Component
class MarkedOutput extends React.Component{
  constructor(){
    super();
    this.state = {
      output: ''
    };
  }
  
//   handleInput(searchTerms){
//     //API call
    
//     axios.get('https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&search=dog&limit=10').then(response => {
//       console.log(response);
//     });
//   }
}


ReactDOM.render(<Input />, document.getElementById('app'));