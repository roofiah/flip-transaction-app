import { combineReducers } from 'redux';
import { TransactionList } from './TransactionListReducer';

export default combineReducers({
    transactionList: TransactionList,
})
