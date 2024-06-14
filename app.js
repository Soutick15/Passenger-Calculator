
let value = 0;
let count = document.getElementById("count-el");

// function to increment value
function increment(){
    value +=1;
    count.innerHTML=value;
    console.log(`Value Increased to ${value}`);    
}

// function to decrement value
function decrement(){
    if(value>0){
        value -=1;
        count.innerHTML=value;
        console.log(`Value Decreased to ${value}`);
        }
    else{
       alert('You can\'t decrease below zero');
        }
     }

    //  save function

    function save(){
       let savedValue= document.querySelector("p").innerHTML += value +" - ";
       value=0;
       count.innerHTML=value;
    }
    function clearIt(){
        let defaultValue = document.querySelector("p").innerHTML= "Previous Entries: ";
        
    }

    
