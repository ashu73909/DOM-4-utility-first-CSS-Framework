//method-1
// const refHOne=document.getElementsByClassName("chai-p-2");//HTMLCollections => no forEach
// for(let paddingCLS of refHOne){
//     paddingCLS.style.color="red";
// }

//method-2

/**
 *  returns a static NodeList containing all elements in the document that have the class(.chai-b-500 , .chai-c-red)*/
// const refCLS=document.querySelectorAll(".ashu-b-500 , .ashu-c-red,.ashu-p-2,ashu-b-cyan,.ashu-m-2");
// /**
//  *  refCLS.forEach(element => {}) => loops to every elements in document(DOM) that have class(.chai-b-500 , .chai-c-red)*/
// refCLS.forEach(element=>{

//     /**
//      *  classList.contains() methods helps to check whether a particular class is present in an element or not , if yes then apply style.*/

//     if(element.classList.contains("ashu-b-500")){//if true
//         element.style.fontWeight="bold";//then do this 
//     }
//     if(element.classList.contains("ashu-p-2")){
//         element.style.padding="20px";
//     }
//     if(element.classList.contains("ashu-b-cyan")){
//         element.style.backgroundColor="cyan";
//     }
//     if(element.classList.contains("ashu-m-2")){
//         element.style.margin="20px";
//     }
// })

//method-3
// const refCLS=document.querySelectorAll(".ashu-m-2,.ashu-b-cyan,.ashu-p-3,.ashu-c-red,.ashu-b-500")
// const obj={
//     "ashu-b-500":"bold",
//     "ashu-c-red":"red",
//     "ashu-p-2":"30px",
//     "ashu-b-cyan":"cyan",
//     "ashu-m-2":"20px"
// }
// for(const element of refCLS){//of in array
//     for(const key in obj){//in for objects
//         if(element.classList.contains(key)){//classList.contains("") => class name without (.) .: object keys should not have ".ashu...."
//             element.style.fontWeight=obj[key];
//         }
//         if(element.classList.contains(key)){
//             element.style.margin=obj[key];
//         }
//         if(element.classList.contains(key)){
//             element.style.padding=obj[key];
//         }
//         if(element.classList.contains(key)){
//             element.style.backgroundColor=obj[key];
//         }
        
//     }
// }

/**
 * Above code has bug 
->for 
if(element.classList.contains(key)){
    element.style.margin = obj[key];
}
->suppose
obj = {
    "ashu-b-500":"30px",
    "ashu-p-3":"30px",
    "ashu-m-2":"20px"
}

->workflow 
=> code first checks 
element.classList.contains(key) for <p class="ashu-p-3">  ,now if the specific class exist then the assignment happens
=>loop continue working
key = "ashu-b-500"  // false
key = "ashu-c-red"  // false
key = "ashu-p-3"    // true

=>Since we running loop through each key:value in objects 
so  Only for "ashu-p-3" will the three assignments run:
element.style.fontWeight = "30px";      // invalid (first if condition ) 
element.style.margin = "30px";          // valid   (second if condition)
element.style.backgroundColor = "30px"; // invalid (3rd if condition )

That means each and every (if) condition will be checked class exist or not . and even after matched ..cause it's a loop

* This is not a bug 


-> Bug : When a class matches, its value is applied to all CSS properties.

=>suppose
const obj = {
    "ashu-p-3": "30px",
    "ashu-m-2": "20px"
};

=>for (const element of queryselectorall){  //["element:class1","element:class2"]
    for(const key in obj){
        if(element.classList.contains(key)){
            element.style.margin=obj[key];
        }
        if(element.classList.contains(key)){
            element.style.padding=obj[key];
        }
    }
}

=>HTML :<p class="ashu-p-3 ashu-m-2">
=>first iteration : key = "ashu-p-3" condition is true because both if condition checks if element have ashu-p-2 class ,now it is present .:runs every section inside if condition => ending up applying margin and padding to 30px to element.
                    :1st if cond.= if(element.classList.contains("ashu-p-3"))=>true =>element.style.margin=obj["ashu-p-3"]/30px
                    :2nd if cond. =if(element.classList.contains("ashu-p-3"))=>true =>element.style.padding=obj["ashu-p-3"]/30px
                    :Runs 
                    element.style.margin = "30px";
                    element.style.padding = "30px";

=>second iteration : key= "ashu-m-2" it is present ,.: condition true 
                    :1st if cond. =if(element.classList.contains("ashu-m-2"))=>true =>element.style.margin=obj["ashu-m-2"]/20px
                    :2nd if cond. =if(element.classList.contains("ashu-m-2"))=>true =>element.style.padding=obj["ashu-m-2"]/20px

=> AFTER both iteration :-> 30px gets overridden by 20px.
=> ashu-p-2 accidentally affects margin, and ashu-m-2 accidentally affects padding.

=> and thats why utility framework have  "ashu-b-500": ["fontWeight","bold"],  && { property:"margin", value:"20px" }

 */





/* ---------------------------------------------- final-logic-utilityFramework-CSS ---------------------------------------------- */



//method-4
//A utility framework needs to know:class name  ->  CSS property + value
//"ashu-b-500": ["fontWeight","bold"],  && { property:"margin", value:"20px" }
const refCLS=document.querySelectorAll(".ashu-m-2,.ashu-b-cyan,.ashu-p-2,.ashu-c-red,.ashu-b-500,.ashu-fs-3 ,.ashu-b-black,ashu-br-16,.ashu-w-auto,.ashu-h-auto,.ashu-h-100,.ashu-w-100,.ashu-text-center,.ashu-mt-1,.ashu-flex,.ashu-basis,.ashu-flexs,.ashu-flexg,.ashu-justify-center,.ashu-jc-spcBtw,.ashu-jc-spcArnd,.ashu-jc-spcEven")
const obj={
    "ashu-b-500":["fontWeight","bold"],
    "ashu-c-red":["color","red"],
    "ashu-p-2":["padding","20px"],
    "ashu-b-cyan":["backgroundColor","cyan"],
    "ashu-m-2":["margin","20px"],
    "ashu-fs-3":["fontSize","30px"],
    "ashu-b-black":["border","1px solid black"],
    "ashu-br-16":["borderRadius","16px"],
    "ashu-h-auto":["width","auto"],
    "ashu-w-auto":["height","auto"],
    "ashu-w-100":["width","100px"],
    "ashu-h-100":["height","100px"],
    "ashu-text-center":["textAlign","center"],
    "ashu-mt-1":["marginTop","10px"],
    "ashu-flex":["display","flex"],
    "ashu-flexg":["flexGrow","flex-grow"],//defaults to flex 1
    "ashu-flexs":["flexShrink","flex-shrink"], //defaults to flex 1
    "ashu-basis":["flexBasis","flex-basis"],//default to flex 0%
    "ashu-jc-center":["justifyContent","center"],//justify-content : center;
    "ashu-jc-spcBtw":["justifyContent","space-between"],//justify-content : space-between;
    "ashu-jc-spcEven":["justifyContent","space-evenly"],//justify-content : space-between;
    "ashu-jc-spcArnd":["justifyContent","space-around"],//justify-content : space-between;
}
for(const element of refCLS){//of in array
    for(const key in obj){//in for objects
        //classList.contains("") => class name without (.) .: object keys should not have ".ashu...."
        if(element.classList.contains(key)){
            //[property,value]=obj[key] => [property,value]=["fontWeight","bold"]  => property ="fontWeight" & value ="bold"
            const [property,value]=obj[key]; 
            element.style[property]=value;
        }
    }
}


/**
 * Using objects for utility framework 
const refCLS=document.querySelectorAll(".ashu-m-2,.ashu-b-cyan,.ashu-p-2,.ashu-c-red,.ashu-b-500,.ashu-fs-3 ,.ashu-b-black,ashu-br-16,.ashu-w-auto,.ashu-h-auto,.ashu-h-100,.ashu-w-100,.ashu-text-center,.ashu-mt-1,.ashu-flex,.ashu-basis,.ashu-flexs,.ashu-flexg,.ashu-justify-center,.ashu-jc-spcBtw,.ashu-jc-spcArnd,.ashu-jc-spcEven")
const obj={
    "ashu-b-500":{property:"fontWeight",value:"bold"],
    "ashu-c-red":{property:"color",value:"red"},
    "ashu-p-2":{property:"padding",value:"20px"},
    "ashu-b-cyan":{property:"backgroundColor",value:"cyan"},
    "ashu-m-2":{property:"margin",value:"20px"},
    "ashu-fs-3":{property:"fontSize",value:"30px"},
}

for(const element of refCLS){//of in array
    for(const key in obj){
        if(element.classList.contains(key)){ 
            element.style[obj[key].property]=obj[key].value;
        }
    }
}
 */
