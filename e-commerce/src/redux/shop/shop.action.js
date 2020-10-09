import ShopActionType from './shop.types';

export const updateShopCollections = (collectionMap) => ({
    type: ShopActionType.UPDATE_COLLECTION,
    payload: collectionMap
});