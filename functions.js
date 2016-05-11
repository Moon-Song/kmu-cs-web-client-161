var Q1 = alert("hello homework3") ;
console.log("hello homework3", Q1) ;

function stringToInt(input) {
    console.log("Q2: String to Integer conversion: " + parseInt(input));
}

function maskNumber(input) {   
    /*if (input == undefined || input === '') {
		return '';
	}
	var pattern = /.{7}^/; // 정규식
	return input.replace(pattern, "*******");*/
    var mask_number = console.log("Q3: masking "+input+": " + input.replace(/\d\d\d\d\d\d\d/,"*******")) ;
  return mask_number; 
}
 

function getAverage(input_array){
   
    var sum = 0.0;
    
    for(var i=0; i<input_array.length; i++)
        {
            sum+=input_array[i];
        }
    
    var avg = console.log("Q4: average of input [" + input_array + "] is " +sum/input_array.length);
    
    return avg;
}


function isSevenMultiple(input){
    if(input%7==0)
    {
        console.log("Q5:  [" + input + "] is multiple of 7: " + true);
    }
    else
        {
            console.log("Q5:  [" + input + "] is multiple of 7: " + false);
        }
}


 
function operation(a, b){
       
     if(isNaN(a)==true){
        console.log("Not Supported")
    }
    else{
         var a=parseInt(a);
        var b=parseInt(b);
    console.log("Q6: a="+a+" and b="+b+". Add is: "+(a+b));
    console.log("Q6: a="+a+" and b="+b+". Subtract is: "+(a-b));
    console.log("Q6: a="+a+" and b="+b+". Multiply is: "+(a*b));
    console.log("Q6: a="+a+" and b="+b+". Divide is: " +(a/b));
    console.log("Q6: a="+a+" and b="+b+". Power is: "+(Math.pow(a,b)));
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
    
         console.log((star));
    }
