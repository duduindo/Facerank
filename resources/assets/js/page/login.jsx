

import React from 'react';
import FacebookLogin from 'react-facebook-login';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);

  }

  responseFacebook(response) {
    console.log(response);
  }

  render() {
    return(
      <section>
        <FacebookLogin
          appId="462633930465371"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
      </section>
    );
  }
}

export default Login;
