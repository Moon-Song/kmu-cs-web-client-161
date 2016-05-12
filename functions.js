var Q1 = alert("hello homework3") ;
console.log("Hello homework3") ;

function stringToInt(input) {
    var z = parseInt(input)
    return z;
}

function maskNumber(input) {   
  
    var mask_number = /.{3}$/;
        
        /*console.log("Q3: masking "+input+": " + input.replace(/\d\d\d\d\d\d\d/,"*******")) ;*/
  return input.replace(mask_number, "***"); 
}
 

function getAverage(input_array){
   
    var sum = 0.0;
    
    for(var i=0; i<input_array.length; i++)
        {
            sum+=input_array[i];
        }
    
    var avg = (sum/input_array.length);
    
    return avg;
}


function isMultipleSeven(input){
    if(input%7==0)
    {
        return true;
    }
    else
        {
           return false;
        }
}


 
function operation(c,a, b){
      
  
    var a=parseInt(a);
        var b=parseInt(b);
    if(c=="add"){
            return a+b;
        }
    else if(c=="substract"){
        return a-b;
    }
    else if(c=="multiply"){
        return a*b;
    }
    else if(c=="divide"){
        return a/b;
    }
    else if(c=="power"){
        return Math.pow(a,b);
    }
    else{
        console.log("Not Supported.")
    }
}
   


function triangleMtn(input){
    var star="";
    for (var i=1; i<input+1 ;i++ )
        {
            for (var j=1;j<i+1 ;j++ )
            {
                star += "*";
            }
            star += "\n";
        }
    
     console.log(star);
    }
