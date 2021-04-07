import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';
import { createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import Header from './components/header/header.components';
import {setCurrentUser} from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import CheakOutPage from './pages/cheakout/cheakout.components';
import SignInAndUpPage from './pages/sign-in-up/sign-in-up.component';
import Kill from './pages/kill/kill';


class App extends React.Component {
  unsubsribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubsribeFromAuth = auth.onAuthStateChanged(async userAuth => {     
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            }) 
        })
      }
      else{
        setCurrentUser(userAuth)
      }
    });
  }
  componentWillUnmonut() {
    this.unsubsribeFromAuth();
  }
  render() {
    return (
      <div >
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />          
          <Route exact path='/cheakout' component={CheakOutPage} />
          <Route exact path='/jawad' component={Kill} />
          <Route exact path='/sign-in' 
             render={
               () => this.props.currentUser ?
                   (<Redirect to='/' />)
                   : (
                     <SignInAndUpPage />
                   )
             } />
            <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
        mapStateToProps, 
        mapDispatchToProps)
        (App);
