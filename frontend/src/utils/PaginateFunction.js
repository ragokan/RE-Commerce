/* 
THE FUNCTION IS FROM : 
https://stackoverflow.com/questions/42761068/paginate-javascript-array
*/

const paginate = (array, page_size, page_number) =>
  array.slice((page_number - 1) * page_size, page_number * page_size);

export default paginate;
