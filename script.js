// Myclear function clears the screen to zero immediately
function MyClear() { document.getElementById("maininput").value = "0";  }
    
    
/*    maininput.value.substring(start, end)  mininput.value.substring(start, end) */ 
function MyDelete(){ maininput.value = maininput.value.substring(0, maininput.value.length-1);     }

 
//  on click event of the digits eg (0-9) the myFunction is called 
function myFunction(val){
  if ((maininput.value.charAt(0) === "0")) {
  maininput.value=""
  maininput.value+=val;
  } else {
  document.getElementById("maininput").value += val ; }
}

      
//  log function converting Cos in Radians to Degress
function Log (){  maininput.value = Math.log10(maininput.value)  }


//  cosine function converting Cos in Radians to Degress
function cosf () {     maininput.value = Math.cos((maininput.value)*Math.PI/180)  }


//  sine function converting Math.Sine function in Radians to Degress
function sinf () {        return maininput.value = Math.sin((maininput.value)*Math.PI/180) }


//  Tan function converting Math.Tan function in Radians to Degress
function tanf () {        return maininput.value = Math.tan((maininput.value)*Math.PI/180)  }


// fact function computes the factorial of x           
function fact() {
  h = (parseInt(maininput.value))
  let result = 1;

  if (h !=0) { 
      for(let i = h; i > 1 ; i--){
          result = result * i;
          maininput.value = result; 
          // console.log(result)
      }
  }  
}


//  when function equalto is called evaluate the sting on input as a text (Operators & Operands)
function equalto () {
  if ((maininput.value.charAt(0) === "")) {
      maininput.value="0"
  } else {

  try {    
      // history.push(maininput.value);
      maininput.value= eval (maininput.value);
  } 
  // catch every error (ie cases where input cannot be evaluated with the eval function)
  catch (e) {
  //  Display the type of error (e) as an error
  maininput.value = e
  }}
}