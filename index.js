console.log("welcome to project");
const itemSelect=document.querySelector('#itemSelect');
const itemSelectl=document.querySelector('#itemSelect1');
const inputNumber=document.querySelector('#inputnumber');
const inputNumber1=document.querySelector('#inputnumber1');


function convertfun(){
    let num=inputNumber.value;
   let selectedValue=itemSelectl.value;
    console.log(selectedValue);
   let leftSelectitem=itemSelect.value;
   console.log(leftSelectitem);
    if(leftSelectitem=="decimal" && selectedValue=="binary"){
       inputNumber1.value=parseInt(num).toString(2);
    }else if(leftSelectitem=="decimal" && selectedValue=="decimal"){
        inputNumber1.value=parseInt(num).toString(10);
    }else if(leftSelectitem=="decimal" && selectedValue=="hexadecimal"){
        inputNumber1.value=parseInt(num).toString(16).toUpperCase();
    }else if(leftSelectitem=="decimal" && selectedValue=="octal"){
        inputNumber1.value=parseInt(num).toString(8);


    }else if(leftSelectitem=="binary" && selectedValue=="binary"){
        inputNumber1.value=parseInt(num);
     }else if(leftSelectitem=="binary" && selectedValue=="decimal"){
         inputNumber1.value=parseInt(num,2);
     }else if(leftSelectitem=="binary" && selectedValue=="hexadecimal"){
         inputNumber1.value=parseInt(num,2).toString(16).toUpperCase();
     }else if(leftSelectitem=="binary" && selectedValue=="octal"){
         inputNumber1.value=parseInt(num, 2).toString(8);


     }else if(leftSelectitem=="octal" && selectedValue=="binary"){ 
        inputNumber1.value=parseInt(num,8).toString(2);
     }else if(leftSelectitem=="octal" && selectedValue=="decimal"){
         inputNumber1.value=parseInt(num,8);
     }else if(leftSelectitem=="octal" && selectedValue=="hexadecimal"){
         inputNumber1.value=parseInt(num,8).toString(16).toUpperCase();
     }else if(leftSelectitem=="octal" && selectedValue=="octal"){
         inputNumber1.value=inputNumber.value;


     }else if(leftSelectitem=="hexadecimal" && selectedValue=="decimal"){
        inputNumber1.value=parseInt(num,16);
     }else if(leftSelectitem=="hexadecimal" && selectedValue=="binary"){
        inputNumber1.value=parseInt(num,16).toString(2);
     }else if(leftSelectitem=="hexadecimal" && selectedValue=="octal"){
        inputNumber1.value=parseInt(num,16).toString(8);
     }else if(leftSelectitem=="hexadecimal" && selectedValue=="hexadecimal"){
        inputNumber1.value=parseInt(num,16).toString(16);
     }

  
}

function swapFunction(){
    let temp=itemSelect.value;
    itemSelect.value=itemSelectl.value;
    itemSelectl.value=temp;
}