import React from 'react';
import { connect } from 'react-redux';
//import './collection-item.styles.scss';
import {
    CollectionFooterContainer,
    CollectionItemContainer,
    BackgroundImage,
    AddButton,
    PriceContainer,
    NameContainer } from './collection-item.styles';


import { AddItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({item, AddItem}) => {
    const { name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />          
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>

            </CollectionFooterContainer>
            <AddButton 
                onClick={() => AddItem(item)} 
                inverted>
                    add to cart
                </AddButton>
            
        </CollectionItemContainer>

)}

const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
