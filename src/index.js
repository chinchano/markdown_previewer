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
      searchTerms: '*italic* **bold**, ~~strikethrough~~'
    };
  }
    handleInputChange(e){
      this.setState({
        searchTerms: e.target.value
       });
      
    }

   render(){
   	var searchTerms = this.state.searchTerms;
   	var markedUp = marked(searchTerms);
		return(
      <div>
         <textarea className="input" onChange={this.handleInputChange.bind(this)} value={searchTerms} cols="40" rows="5"></textarea>
         <span dangerouslySetInnerHTML={{__html: markedUp}} className="output"/>
      
      </div>
     );
   }
  
}




ReactDOM.render(<Input />, document.getElementById('app'));