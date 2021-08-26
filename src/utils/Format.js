
// --- CURRENCY FORMAT FUNCTION ---//
const defaultOptions = {
    significantDigits: 2,
    thousandsSeparator: '.',
    decimalSeparator: ',',
    symbol: 'Rp'
  }

export const FormatCurrency = (value, options)  => {
    if (typeof value !== 'number') value = 0.0
        options = { ...defaultOptions, ...options }
        value = value.toFixed(options.significantDigits)
          
        const [currency, decimal] = value.split('.')
        return `${options.symbol} ${currency.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            options.thousandsSeparator
        )}`
}

// --- DATE FORMAT FUNCTION ---//
export const FormatDate = (strDate) =>{
    var MONTHS = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    var dd = date.getDate();
    var mm = date.getMonth() + 1;

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    // date =  dd + "-" + mm + "-" + yyyy;
    date = dd + " " + MONTHS[date.getMonth()] + " " + yyyy;
    return date.toString();
}
