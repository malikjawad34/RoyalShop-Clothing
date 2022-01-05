import hiddenActionType from './cart.types';

const toggleCarthidden = hiddden => ({
    type: hiddenActionType.SetHidden,
    payload: hiddden
});

 export const AddItem = item => ({
    type: hiddenActionType.addItem,
    payload: item
});

export const ClearItem = item => ({
    type: hiddenActionType.removeItem,
    payload: item
});

export const RemoveItem = item => ({
    type: hiddenActionType.DecreaseItem,
    payload: item
});

export default toggleCarthidden;

