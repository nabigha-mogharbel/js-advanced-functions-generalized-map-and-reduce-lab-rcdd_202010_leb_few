// Add your functions here
<<<<<<< HEAD
function map(source, fn){ 
  let array=[];
  for(let i=0; i<source.length; i++){
    let el=source[i];
    array.push(fn(el))}
    return array
}

function reduce(source, fn, start){
  let array=(!!start)? start : source[0];
  let i=(!!start)? 0 : 1;
  for (; i<source.length; i++){
    array=fn(source[i], array)
  }
  return array
}
=======
const mapToNegative=[1, 2, 3, -9] => [1, 2, 3, -9].map(ele => ele*-1);
const mapToNoNegative=array.map(ele => ele);
>>>>>>> 9b097c38666236cf5a2328ff2f3a0965760a1a02
