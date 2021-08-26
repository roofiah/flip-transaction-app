import { combineReducers } from 'redux';
import { TransactionList } from './TransactionListReducer';
// import { QuranDetail } from './QuranDetailReducer';

export default combineReducers({
    transactionList: TransactionList,
    // quranDetail: QuranDetail
})
