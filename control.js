// Write a program that takes in an array of numbers and consoles the first four items multiplied 
//by itself  and the last two added by 10 Return the array with the new n

const multiplied =(numbers)=>{
let newArray=[];
for(let i=0; i<numbers.length;i++){
 const multiply=num.slice(0,4)*num;
  newArray.push(multiply)
}
return newArray;
} 







//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
function loop(){
    let arrNum=[1,2,3,4,5,6,7,8,9]
    
    while(arrNum<=[4]){
        break;
    }
    

    

    };
    loop()

//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','
function fruit(){
    let fruits=["apple","plum","banana","strawberries","kiwi"]
    for(let i=0; i<fruits.length;i++){
        if(i===1){
            continue;
        }
        console.log(fruits[i]);
    }
    
} 
fruit();
function arraystring(arrays){
    for (let i =0; i<arrays.length; i++){
        console.log(arrays[i]);}}
        arraystring(["Alice","nyabang","wech","jacob"]);
  
//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.
function sort(){

    const arr=[]
    let arrays=["bang","girl","boy","woman"]
    for (let i=0; i<arrays.length;i++){
     arrays.reverse().sort()
    }
    console.log(arrays)
}
sort();



