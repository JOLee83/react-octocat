import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
      <div>
         <footer>
        <div className="footerleft">
          <a className="link" href="http://feeds.feedburner.com/Octocats">RSS</a>
          <a className="link" href="https://octodex.github.com/faq.html">FAQ</a>
        </div>
        <div className="footercenter">
          <a href="http://www.github.com/"><img className="icon" src="https://www.shareicon.net/data/128x128/2015/09/15/101512_logo_512x512.png"/></a>
        </div>
        <div className="footerright">
          <p>© 2013 – 2018 GitHub, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
    );
  }
}

export default Footer;
