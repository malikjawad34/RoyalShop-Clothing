import { createSelector } from "reselect";


const selectShop = state => state.shop;

export  const selectcollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectcollections],
    collections => collections ? Object.keys(collections).map( key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => 
    createSelector(
        [selectcollections],
        collections => (collections ? collections[collectionUrlParam] : null) 
    );

export const selectIsFetchingCollection = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsLoadedCollection = createSelector(
    [selectShop],
    shop => !!shop.collections
);