//display number in text box

function display(num){
    result.value += num
}

//clear text box

function clearBox(){
    result.value ="" 
}

//evaluate expression
 function evaluateExp(){

   //method 1
        
         // exp=result.value                        //4+6
        // output=eval(exp)                          //10
       // result.value =output

    //method 2
    
    result.value=eval(result.value)
 }

//Remove last item from text box

 function removeLast(){
    currentExp = result.value
   result.value = currentExp.slice(0,-1)
    
 }

