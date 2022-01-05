import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.componets';
import CartDropdown from '../cart-dropdown/cart-dropdown.componets';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import toggleCarthidden  from '../../redux/cart/cart.actions';
import { selectCurrentUser } from '../../redux/user/user.selector';

import { OptionsContainer, HeaderContainer, LinkContainer, OptionLink} from './header.styles';

const Header = ({ currentUser, hidden, dispatch }) => (
    <HeaderContainer>
        <LinkContainer onClick={() => {dispatch(toggleCarthidden(true))}} to='/'>
            <Logo className='logo'  />
        </LinkContainer>
        <OptionsContainer>          
            <OptionLink onClick={() => {dispatch(toggleCarthidden(true))}} to='/'>
                HOME
            </OptionLink>
            <OptionLink  onClick={() => {dispatch(toggleCarthidden(true))}} to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink onClick={() => {dispatch(toggleCarthidden(true))}} to='/contact'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                (<OptionLink as='div' onClick={() => auth.signOut()}>
                     SIGN OUT</OptionLink>)
                :
                (<OptionLink onClick={() => {dispatch(toggleCarthidden(true))}} to='/sign-in'>
                 SIGN IN
                 </OptionLink>)
            }
            <CartIcon />          
        </OptionsContainer> 
        {
            hidden ?
            null  
             : <CartDropdown />
          
        }
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);