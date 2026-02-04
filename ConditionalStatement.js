let browser="chrome"

if(browser=== "edge"){
    console.log("browser is edge===")
    
 }else if(browser ==="chrome"){
    console.log("browser is chrome")
}else{
    console.log("browser is not defined")
}


let testType="Regression"

switch(testType){
 case "smoke":
        console.log("smoke type")
        break
    case "Sanity":
        console.log("sanity type")  
        break //jump stmt 
    case "Regression":
        console.log("Regression type")
        break      

    default:
        console.log("Default test type")    
        break
}
