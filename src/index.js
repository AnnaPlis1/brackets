module.exports = function check(str, bracketsConfig) {
  // your solution
  
  let all = bracketsConfig.join('').replace(/,/g, '');
  let arr = [];
for (let elem of str) {
      let index = all.indexOf(elem)

      if (index % 2 === 0) {
          
          if (elem === all[index + 1] && arr[arr.length - 1] === index){
              arr.pop();
          } else if (elem === all[index + 1] && elem[elem.length - 1] !== index) {
              arr.push(index)
          }
          else{
              arr.push(index)
          }
      } 
      else {
          if (arr.pop() !== index-1){
              return false;
          }
      }
      
  }
  if (arr.length === 0){return true}
  else return false;
}
