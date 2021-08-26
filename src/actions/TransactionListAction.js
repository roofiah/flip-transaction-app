import { TRANSACTION_LIST_URL } from '../utils/ApiUrl';
import { Constants } from '../utils/Constants';
import axios from 'axios';
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


export const fetchingTransactionListRequest = () => ({ type: FETCHING_TRANSACTION_LIST_REQUEST });

export const fetchingTransactionListSuccess = (json) => ({
    type: FETCHING_TRANSACTION_LIST_SUCCESS,
    payload: json
});

export const fetchingTransactionListFailure = (error) => ({
    type: FETCHING_TRANSACTION_LIST_FAILURE,
    error: error
});

export const fetchingTransaction = () => {
    return async dispatch => {
        dispatch(fetchingTransactionListRequest());
        try {
            const customData = require('../utils/data.json');
            console.log('ini hasil dari get API 1', JSON.stringify(customData.data))
            dataArr = Object.values(customData.data).map((value)=>value )
            dispatch(fetchingTransactionListSuccess(dataArr));

            // let response = await axios.get(TRANSACTION_LIST_URL);
            // if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
            //     console.log('ini hasil dari get API 1', JSON.stringify(response.data))
            //     dataArr = Object.values(response.data).map((value)=>value )
            //     console.log('ini data setelah di proses', dataArr )
            //     // dispatch(fetchingTransactionListSuccess(dataArr));
            // } else {
            //     dispatch(fetchingTransactionListFailure("Request Data gagal. MohonPeriksa kembali koneksi internet Anda"));
            // }
        } catch (error) {
            dispatch(fetchingTransactionListFailure("Request Data gagal. MohonPeriksa kembali koneksi internet Anda"));
        }
    }
}

export const sortByAsc = (valueInput, dataSort) => ({
    type: SORT_BY_ASC,
    valueInput:valueInput,
    dataSort: dataSort,
})

export const sortByDesc = (valueInput, dataSort) => ({
    type: SORT_BY_DESC,
    valueInput:valueInput,
    dataSort: dataSort,
})

export const sortByNewDate = (valueInput, dataSort) => ({
    type: SORT_BY_NEWDATE,
    valueInput:valueInput,
    dataSort: dataSort,
})

export const sortByOldDate = (valueInput, dataSort) => ({
    type: SORT_BY_OLDDATE,
    valueInput:valueInput,
    dataSort: dataSort,
})

export const searchByValue = (searchInput) => ({
    type: SEARCH_BY_VALUE,
    searchInput:searchInput
})
// export const searchByValue = (searchInput, searchData) => ({
//     type: SEARCH_BY_VALUE,
//     searchInput:searchInput,
//     searchData:searchData
// })

export const searchByNominal = (payload) => ({
    type: SEARCH_BY_VALUE,
    payload
})
