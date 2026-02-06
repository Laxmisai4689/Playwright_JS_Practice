let s = "hello world";


//let trimmed = s.trim();                 // Remove extra spaces
let words = s.split(" ");         // Split into words
let lastWord = words[words.length - 1];
 // Get last word
 let value = s.length
 console.log(value);

 //Anagram program

 let text1="listen"
 let text2="silent"

 if(text1.length==text2.length){
    console.log("Length are same")
 }else{
    console.log("dont check for anagram")
     }

   let len1=text1.split("").sort().join()
   let len2=text2.split("").sort().join()
   
   if(len1===len2){
    console.log("The string is Anagram")
   }else(){
    console.log("The given string is not Anagram")
   }