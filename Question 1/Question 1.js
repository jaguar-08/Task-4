// 1) a.Print OddNumbers USing Anonymous functions

const Oddno = function(array){
    for(let i in array){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }

  console.log(Oddno([1,2,3,4,5,6,7]))


  // 1) a.Print OddNumbers USing IIFE functions

let total = (function(arr){
    for(let ind in arr){
        if(arr[ind]%2!=0){
           console.log(arr[ind])
        } 
   }
})([1,2,3,4,5,6,7])
console.log(total)

// 1) b.Convert all strings to tittle caps USing Anonymous functions

let str=function(string){
      let arr=[];
   string=string.toLowerCase().split(" ");
   
   for(i=0;i<string.length;i++)
   {
      arr.push(string[i].charAt(0).toUpperCase() + string[i].slice(1));
   }
    return console.log(...arr)
};
(str("my name is raghul"));


// 1) b.Convert all strings to tittle caps USing IIFE functions

(function(str1){
    let array=[];
   str1=str1.toLowerCase().split(" ");
   
   for(i=0;i<str1.length;i++)
   {
      array.push(str1[i].charAt(0).toUpperCase() + str1[i].slice(1));
   }
    return console.log(...array);
})("I love coding");

//1) c.Sum of all numbers in an array using Anonymous Function

const sum = function(arr){
    let sum1=0;
    for(let i=0; i<arr.length; i++){
        sum1 = sum1 + arr[i]
    }
    return sum1
}
console.log(sum([1,2,3,4,5]))


//1) c.Sum of all numbers in an array using IIFE Function

let summ = (function(sum){
    let sum1=0;
    for(let i=0; i<sum.length; i++){
        sum1 = sum1 + sum[i]
    }
    return sum1
})([1,2,3,4,5,6])
console.log(summ)
// 1) d.return all the prime numbers in an array using Anonymous function

let prime = function(num){
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


// 1) d.return all the prime numbers in an array using IIFE function

let Prime =(function(val){
    Final=[]
    for(let i=0;i<val.length;i++){
    isprime=true
    for(let j=2;j<val[i]/2;j++){
        if(val[i]%j==0){
            isprime=false
        }
    }
    if(isprime){
        Final.push(val[i])
    }
}
return Final
})(([1,2,3,4,5,6,7,8,11,13,17,21]))

console.log(Prime)

//1) e. Return all the pallindrome in the array using Anonymous function

let pallindrome = function(arr){
    val=[]
    for(var i=0;i<arr.length;i++){
        let check = arr[i].split("").reverse().join("")
        if(arr[i]==check){
            val.push(arr[i])
        }
    }return val
}
console.log(pallindrome(["sos","raw","pop"]))


//1) e. Return all the pallidrome in the array using IIFE function

let ques = (function(obj){
    Val=[]
    for(let i=0;i<obj.length;i++){
        let Check = obj[i].split("").reverse().join("")
        if(obj[i]==Check){
            Val.push(obj[i])
        }
    }return Val
})(["sos","raw","pop","lol"])
console.log(ques)

// 1) g.Remove duplicates from the array using anonymous function

let duplicate = function(arr){
    val=[]
    for(let i=0;i<arr.length;i++){
      if( val.indexOf(arr[i])==-1){
        val.push(arr[i])
      }
    }return val
}
console.log(duplicate([1,1,12,3,3,4,5,65,65,55,55,3,4,566,6775,65543,53,656,56]))


// 1) g.Remove duplicates from the array using IIFE function

let dupli = (function(ar){
    value=[]
    for(let i=0;i<ar.length;i++){
      if( value.indexOf(ar[i])==-1){
        value.push(ar[i])
      }
    }return value
})([1,1,12,3,3,4,5,65,65,55,55,3,4,566])
console.log(dupli)	