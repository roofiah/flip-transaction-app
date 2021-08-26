
// --- SORT NAME BY ASCENDING ---//
export const sortAsc = (arr, field) =>{
    let dataArr = arr.dataArr
    return dataArr.sort(function (a, b) {
        if (a[field] > b[field]) {
            return 1;
        }
        if (b[field]> a[field]) {
            return -1;
        }
        return 0;
    })
}

// --- SORT NAME BY DESCENDING ---//
export const sortDesc = (arr, field) =>{
    let dataArr = arr.dataArr
    return dataArr.sort(function (a, b) {
        if (a[field] > b[field]) {
            return -1;
        }
        if (b[field]> a[field]) {
            return 1;
        }
        return 0;
    })
}

// --- SORT DATE BY ASCENDING ---//
export const sortAscDate = (arr, field) => {
    let dataArr = arr.dataArr
    return dataArr.sort((a, b) => b.created_at.localeCompare(a.created_at));
}

// --- SORT DATE BY DESCENDING ---//
export const sortDescDate = (arr, field) => {
    let dataArr = arr.dataArr
    return dataArr.sort((a, b) => a.created_at.localeCompare(b.created_at));
}

// --- CHECK SEARCH FILTER ALREADY EXISTS--->
export const addFilter = (filter, appliedSearch) => {
    let index = appliedSearch.indexOf(filter);
    if (index===-1) appliedSearch.push(filter);

    return appliedSearch;
}

// --- CHECK SEARCH FILTER IS EMPTY ---//
export const removeFilter = (filter, appliedSearch) =>{
    let index = appliedSearch.indexOf(filter);
    appliedSearch.splice(index, 1);
    return appliedSearch;
}

export const valueSort =(val) =>{
    if(val == 'asc'){
        return 'Nama A - Z'
    }else if (val == 'desc'){
        return 'Nama Z - A'
    }else if (val == 'newDate'){
        return 'Tanggal Terbaru'
    }else if (val == 'oldDate'){
        return 'Tanggal Terlama'
    }else if (val == 'urutkan'){
        return 'URUTKAN'
    }else{
        return 'URUTKAN'
    }
}


