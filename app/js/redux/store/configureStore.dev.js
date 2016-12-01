import rootReducer from '../reducers';
import DevTools from '../../containers/DevTools';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers'; 
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk, ReduxPromise)(createStore);
export default function configureStore(initialState) {
		const store = createStoreWithMiddleware(
					rootReducer,
					initialState,
					DevTools.instrument()
		);
    return store;
}
