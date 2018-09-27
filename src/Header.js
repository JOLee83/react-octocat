import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <div>
        <header>
        <div className="headerleft">
          <h1><a href="http://www.github.com/">GitHub</a> Octodex</h1>
        </div>
        <div className="headerright">
          <a className="link" href="http://feeds.feedburner.com/Octocats">RSS</a>
          <a className="link" href="https://octodex.github.com/faq.html">FAQ</a>
          <a className="link" href="http://www.github.com/">Back to GitHub</a>
        </div>
    </header>
    </div>
    );
  }
}

export default Header;
