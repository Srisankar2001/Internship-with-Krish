// A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
const low = 'A'.charCodeAt(0)
const high = 'Z'.charCodeAt(0)
 
let tries = 0
let flag = false
 
const ans = Math.floor(Math.random() * (high - low + 1)) + low
 
while(!flag && tries<5){
    let input = prompt("Enter Your Guess? : ")
   
    if(!input || input.length !== 1){
        alert("Please Enter a Letter...")
        continue
    }
   
    input = input.toUpperCase()
   
    if(input.charCodeAt(0) < low || input.charCodeAt(0) > high){
        alert("Please Enter a Letter...")
        continue
    }
   
     ++tries
     
    switch(Math.abs(input.charCodeAt(0) - ans)){
        case 0:
            flag = true
            break
        case 1:
        case 2:
            alert("HOT")
            break
        case 3:
        case 4:
            alert("WARM")
            break
        case 5:
        case 6:
            alert("COOL")
            break
        default:
            alert("COLD")
            break
    }
}
 
if(flag){
    alert("Congratulations. You find the answer on your attemp : "+tries)
}else{
    alert("Your Chance Ended. Answer is " + String.fromCharCode(ans))
}