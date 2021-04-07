import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import DirectoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';



const PersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: DirectoryReducer,
    shop: shopReducer
});

export default persistReducer( PersistConfig, rootReducer);