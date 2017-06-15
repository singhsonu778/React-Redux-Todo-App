import React, { Component } from 'react';

class Link extends Component {

   handleClick(event) {
       console.log('Link...handleclick method...');
       event.preventDefault();
       this.props.onClickHandler();
   }

   render() {
      {
         if (this.props.active) {
            return (<span>{this.props.children}</span>);
         }
         return (<a href="#" onClick={this.handleClick.bind(this)}>{this.props.children}</a>);
      }
   }
}

export default Link;