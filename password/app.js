
let inputRangeEle = document.getElementById("input-range")
let rangeValueEle = document.getElementById("range-value")
let passBoxEle = document.getElementById("pass-box")
let lowercaseeEle = document.getElementById("lowercase")
let uppercaseEle = document.getElementById("uppercase")
let symbolseEle = document.getElementById("symbols")
let numberseEle = document.getElementById("numbers")
let genBtnEle = document.getElementById("btn")


rangeValueEle.textContent = inputRangeEle.value
inputRangeEle.addEventListener('input', () => {
    rangeValueEle.textContent = inputRangeEle.value
})

genBtnEle.addEventListener('click', () => {
    passBoxEle.value = genratePassword()
})


let uppercaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseLetter = "abcdefghtijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "~!@#$%^&*";

function genratePassword(){
    let password = ''
    let allChar = ''
      
    allChar += lowercaseeEle.checked ? lowercaseLetter : ""
    allChar += uppercaseEle.checked ? uppercaseLetter : ""
    allChar += numberseEle.checked ? numbers : ""
    allChar += symbolseEle.checked ? symbols : ""


    if(allChar == "" || allChar.length == 0 ){
         return password
    }

    let i = 1

        while(i <= inputRangeEle.value){
            password += allChar.charAt(Math.floor(Math.random() * allChar.length));
            i++
        }
        console.log(password)
        return password
        
}





// let age = prompt('enter your age')

// let country = prompt('enter your country')

// let family = prompt('enter your family')

// if(age < 15 && country === 'pakistan'){
//     console.log('allow our family')
// }
// else{
//     console.log('not allow family')
// }







// let arr =  ["Banana", "Orange", "Apple", "Mango"];

// // arr.unshift('graps')

// console.log(arr)

// arr[3] = 'watermelon'


// console.log(arr)

// let friuts =  ["Banana", "Orange", "Apple", "Mango"];

// let friuts1 = friuts.slice(0)
// // friuts.splice(0,2,'graps')

// console.log(friuts1,friuts);



// let arr = ['islamabad','karachi','lahore',]

// let matchFound = 'no'

// let cityCheck = prompt('enter your city name')
// for(let i = 0;i < arr.length;i++){
//    if(cityCheck === arr[i]){
//     matchFound = 'yes'
//     console.log(`${arr[i]} cleanest city`)
//     break;
//    }
   
   

// }
// if (matchFound === "no") {
//      alert("It's not on the list");
//     }
    

// let arr = [[1,2],[3,4],[5,6]]

// for(let i = 0;i < arr.length;i++){
//     for(let j =0;j < arr[i].length;j++){
//         console.log(arr[i][j])
//     }
// }


// let arr = 'ghOus'

// console.log(arr.toLowerCase())







// let str = "the quick world war II brown fox jumps world war II over the lazy world war II dog.";

// let wrd = 'hello world'

// let wrd2 = str.charAt(1)

// console.log(wrd2)
// the second world war



// for(let i = 0;i < str.length;i++){
//     let targetText = str.slice(i,i + 12)
//     if(targetText === "world war II"){
//         str = str.slice(0,i) + "the second world war" + str.slice(i + 12)
//         console.log(str);
        
//     }
// }




// let num = Math.round(1.4)
// console.log(num)






// let num1 = Math.floor(.999999)
// console.log(num1)




// let num = parseInt("1.99999")

// console.log( num)



// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];

//  console.log(nameOfToday);
 
// let now = new Date('jan 30,2024')

// console.log(now);
// var d = new Date();
// d.setMonth(11);
// console.log(d);












// let sum = greet()

// function greet(){
//   var sum = 2 + 2
//  retun =sum
// }
// console.log(sum)
// // greet()









// let obj = {
//     name: 'haider'
// }

// let admin = obj.name

// let obj2 = {...admin}
// let obj3 = obj2.name = 'ali'
// console.log(admin,obj2,obj3);
