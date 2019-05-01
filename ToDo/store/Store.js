import { createStore } from 'react';
import rootReducer from './reducers/RootReducer'

export const store = createStore(rootReducer);