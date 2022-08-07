
// You should implement your task here.
let flag = true;
module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }
  let result = [];
  let count = 0;
  for(i of matrix){
    count++;
    console.log(count);
    let arr_2 = []
    for(n of i){
        arr_2.push(n);
    }
    
    count%2==0? arr_2.sort((a,b)=>b-a):arr_2.sort((a,b)=>a-b);
    console.log(arr_2);
    result.push(...arr_2);
    console.log(result);
  }
  return result;
}

let arr = [
  [ 1, 2, 3 ], 
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
 ]; 


 console.log(module.exports(arr));
