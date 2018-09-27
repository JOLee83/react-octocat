import React, { Component } from 'react';


class Kats extends Component {
    state = {}
    render() {
    return (
        <section>
        <img alt="" className="kats" src={this.props.katImage}/>
          <div className="imginfo">
          <aside className="infoleft">
            <h3>#{this.props.katNumber}</h3>
          </aside>
          <aside className="inforight">
            <h3 className="colorright">The <a>{this.props.katName}</a> by </h3>
            <img className="user" src={this.props.userImage}/>
          </aside>
        </div>
      </section>
    );
  }
}

export default Kats;
