import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';

// Salvar um repositório Redux no armazenamento local da aplicação 
// (persistência à loja), salvará automaticamente a loja toda vez que o estado for atualizado.
const persistConfig = {
    key: 'food-shop',
    storage,
    whitelist:['cart']
};

const appReducer = combineReducers({
    cart: cartReducer,
});

export default persistReducer(persistConfig, appReducer);