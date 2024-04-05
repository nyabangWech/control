// Write a program that takes in an array of numbers and consoles the first four items multiplied 
//by itself  and the last two added by 10 Return the array with the new values
const numbers=[1,,2,3,4,5,6]
let  array=[];
let firstnum =num.slice(0,4)
let second = num.slice(-2)
for(let num of firstnum){
    const multply=num*num;
    array.push(multply)

} return array


//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arr=[(1,2,3,4,5,6,7,8,9)]
let i=0;
while(i<arr.length){
    if(arr[i]===arr[5])
    break;
  console.log(arr[i])
}i++;
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','
let fruits=["apple","plum","banana","strawberries","kiwi"]
function fruits(array){

    for(let i=0; i<array.length;i++){
        if(i===1){
            continue;
        }
        console.log(array[i]);
    }
    
} 
fruits();
function arraystring(arrays){
  }  for (let i =0; i<arrays.length; i++){
        console.log(arrays[i]);}
        arraystring(["Alice","nyabang","wech","jacob"]);
  
//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function sort(arrays){

    const arr=[]
    let=["bang","girl","boy","woman"]
    for (let i=0; i<arrays.length;i++){
     arrays.reverse()
    }
    console.log(arrays)
}
sort();



