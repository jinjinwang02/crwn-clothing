import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectShopCollections],
    collections => (collections ? Object.keys(collections).map(key => collections[key]) : [])
);

export const selectCollectionForOverview = collectionUrlParam => createSelector(
    [selectShopCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)