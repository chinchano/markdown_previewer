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
    };
  }
    handleInputChange(e){
      this.setState({
        searchTerms: e.target.value
       });
      
    }

   render(){
   	var searchTerms = this.state.searchTerms;
   	console.log(searchTerms);
     return(
      <div>
         <textarea onChange={this.handleInputChange.bind(this)} value={searchTerms} cols="40" rows="5"></textarea>
         <h1>{searchTerms}</h1>
      
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
  

}



ReactDOM.render(<Input />, document.getElementById('app'));