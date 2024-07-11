// Print odd number in an array

const Oddnum = (arr) => {
    for (let i in arr) {
       if (arr[i] % 2 != 0) {
          console.log(arr[i])
       }
    }
 }
 console.log(Oddnum([1, 2, 3, 4, 5, 6, 7]))
 
 // 2)b. Convert all the strings to title caps in a string array using arrow function
 
 let title = (string) =>{
     let arr=[];
     string=string.toLowerCase().split(" ");
     
     for(i=0;i<string.length;i++)
     {
        arr.push(string[i].charAt(0).toUpperCase() + string[i].slice(1));
     }
      return console.log(...arr);
  };
  (title("my name is raghul"));
 
 // 2) c.sum of all numbers using arrow function
 
 let sum = (arr) =>{
 let sum1=0;
 for(let i=0; i<arr.length; i++){
     sum1 = sum1 + arr[i]
 }
 return sum1
 }
 console.log(sum([1,2,3,4,5]))
 
 // 2)d.Return all the prime numbers in an array using arrow function
 
 let prime = (num) => {
     final=[]
     for(let i=0;i<num.length;i++){
     isprime=true
     for(let j=2;j<num[i]/2;j++){
         if(num[i]%j==0){
             isprime=false
         }
     }
     if(isprime){
         final.push(num[i])
     }
 }
 return final
 }
 
 console.log(prime([1,2,3,4,5,6,7,8,11]))
 
 
 // 2)e.Return all the palindromes in an array using arrow functions
 
 let pallidrome = (arr) => {
     val=[]
     for(var i=0;i<arr.length;i++){
         let check = arr[i].split("").reverse().join("")
         if(arr[i]==check){
             val.push(arr[i])
         }
     }return val
 }
 console.log(pallidrome(["sos","raw","pop"]))