function Sum(num1,num2,callback){
            const y = num1+num2;
            console.log(y);
}
Sum(2,3,callMe);
setTimeout(callMe,2000);

//callback function
function callMe(a,b){
            if(a>b){
                        console.log("all is good");
            }else {
                        console.log("i am not good");
            }
}
console.log("hi everyone");