import React, { Component } from 'react';
import './index.css';
import Header from "./Header";
import TheKats from "./TheKats"
import Footer from "./Footer";
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        
          <TheKats/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
