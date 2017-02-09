import React, { Component } from 'react';

const App = React.createClass({
  getInitialState(){
    return {
    }
  },

  render(){
    return(
        <div>
          {this.props.children}
        </div>
    )
  }
})
export default App;
