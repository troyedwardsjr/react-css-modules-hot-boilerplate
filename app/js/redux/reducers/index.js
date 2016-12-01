import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import multireducer from 'multireducer';
import * as types from '../actions/types';

const initialState = {
	count: 0
};

const counter = (state = initialState, action) => {
	switch (action.type) {
		case types.INCREMENT:
			const {count} = state;
			return {
				count: count + 1
			};
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	routing: routing,
	counterGroup: multireducer({
		counterOne: counter,
		counterTwo: counter,
		counterThree: counter,
		counterFour: counter
	})
});

export default rootReducer;
