/* 
THE FUNCTION IS FROM : 
https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
*/

const numberWithCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export default numberWithCommas;
