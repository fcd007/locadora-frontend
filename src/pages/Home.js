import React, { Component } from 'react';
import { FooterComponent as Footer, HeaderComponent as Header } from '../components';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Home;
