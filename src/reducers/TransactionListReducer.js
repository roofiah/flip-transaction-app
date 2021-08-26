import {
    FETCHING_TRANSACTION_LIST_REQUEST,
    FETCHING_TRANSACTION_LIST_SUCCESS,
    FETCHING_TRANSACTION_LIST_FAILURE,
    SORT_BY_ASC,
    SORT_BY_DESC,
    SORT_BY_NEWDATE,
    SORT_BY_OLDDATE,
    SEARCH_BY_VALUE,
    SEARCH_BY_NOMINAL
} from '../utils/ActionTypes';

import {sortAsc, sortDesc, sortAscDate, sortDescDate, addFilter, removeFilter} from '../utils/Filter'

const initialState = {
    actionStatus: '',
    data: [],
    error: false,
    errorMessage: '',
    loading: false,
    refreshing: false,
    valInput: '',
    searchValue: '',
    appliedSearch: [],
    filteredData: [],
};

const TransactionList = (state = initialState, { payload, type, error, valueInput, searchInput, searchData }) => {
    switch (type) {
        case FETCHING_TRANSACTION_LIST_REQUEST:
            return {
                ...state,
                actionStatus: FETCHING_TRANSACTION_LIST_REQUEST,
                error: false,
                errorMessage: '',
                loading: true,
                refreshing: true,
            };
        case FETCHING_TRANSACTION_LIST_SUCCESS:
            console.log ('ini list klik urutan...',payload)
            return {
                ...state,
                actionStatus: FETCHING_TRANSACTION_LIST_SUCCESS,
                data: payload,
                filteredData: payload,
                valInput: 'urutkan',
                error: false,
                loading: false,
                refreshing: false,
            }
        case FETCHING_TRANSACTION_LIST_FAILURE:
            return {
                ...state,
                actionStatus: FETCHING_TRANSACTION_LIST_FAILURE,
                error: true,
                errorMessage: error,
                loading: false,
                refreshing: false,
            }
        case SORT_BY_ASC:
            let sortedArrAsc = sortAsc(valueInput, 'beneficiary_name') 
             return {
                ...state,
                data: sortedArrAsc,
                valInput:'asc',
            } 
        case SORT_BY_DESC:
            let sortedArrDesc = sortDesc(valueInput, 'beneficiary_name') 
            return {
                ...state,
                data: sortedArrDesc,
                valInput: 'desc'
            } 
        case SORT_BY_NEWDATE:
            let sortedAscDate = sortAscDate(valueInput, 'created_at') 
            return {
                ...state,
                data: sortedAscDate,
                valInput: 'newDate'
            }
        case SORT_BY_OLDDATE:
            let sortedDescDate = sortDescDate(valueInput, 'created_at') 
            return {
                ...state,
                data: sortedDescDate,
                valInput: 'oldDate'
            }  
        case SEARCH_BY_VALUE:
            let newData = Object.assign({}, state);
            let value = searchInput.searchInput
            let filteredValues = state.data.filter(dataList => {
                return (
                    dataList.beneficiary_bank.toLowerCase().includes(value) || 
                    dataList.sender_bank.toLowerCase().includes(value) ||
                    dataList.beneficiary_name.toLowerCase().includes(value)
                )
            });

            let appliedSearch = state.appliedSearch;

            if (value) {
                appliedSearch = addFilter(SEARCH_BY_VALUE, appliedSearch);
                newData.dataFiltered = filteredValues;
            } 
            else {
                appliedSearch = removeFilter(SEARCH_BY_VALUE, appliedSearch);
                if (appliedSearch.length === 0) {
                    newData.dataFiltered = newData.filteredData
                }
            }
            
            return {
                ...state,
                data : newData.dataFiltered,
            }
        default:
            return state;
    }
};

export { TransactionList };
