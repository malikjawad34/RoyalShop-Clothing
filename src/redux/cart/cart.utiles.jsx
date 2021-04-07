  
export const AddItemToCart = (carditems, additemTocart) => {
    const ExistingCartItem = carditems.find(
        carditem => carditem.id === additemTocart.id
    );

    if (ExistingCartItem) {
        return carditems.map(carditem =>
            carditem.id === additemTocart.id
            ? { ...carditem, quantity: carditem.quantity + 1}
            : {...carditem}
       );
    }
    return [...carditems, { ...additemTocart, quantity: 1}];
}

export const RemoveItemFromCart = (cartitems, removeitem) => {
    const ExistingCartItem = cartitems.find(
        cartitems => cartitems.id === removeitem.id
    );

    if(ExistingCartItem.quantity === 1){
        return cartitems.filter(
            cartitem => cartitem.id !== removeitem.id
        )
    }

    return cartitems.map(cartitem =>
        cartitem.id === removeitem.id
        ? { ...cartitem, quantity: cartitem.quantity - 1}
        : {...cartitem}
   );
}