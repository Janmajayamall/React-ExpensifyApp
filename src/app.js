import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css'
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore.js';
import {addExpense, editExpense, removeExpense, startSetExpenses} from './actions/expenses.js';
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from './actions/filters.js';
import expensesReducer from './reducers/expenses.js';
import filtersReducer from './reducers/filters.js';
import getVisibleExpenses from './selectors/expenses.js';
import { Provider } from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';
import './playground/promise'


const store = configureStore();




const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(()=>{
    ReactDOM.render(jsx, document.getElementById('app'));

});


