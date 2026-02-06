// reverse string
let data="amazon"

let rev=""
//nozama
for(let i=data.length-1;i>=0;i--){
    rev=rev+data[i]
}
console.log(rev)

//palindrom program

let Str="madam"

let revStr=""
//nozama
for(let i=Str.length-1;i>=0;i--){
    revStr=revStr+Str[i]
}
console.log(revStr)
if(Str===revStr){

    console.log("Given string is Palindrom")
}else{
console.log("Reverse String is not Palindrom")

}
