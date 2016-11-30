// We Will use the function to calculate the area of the circle by using the formula.
   
   function CalculateArea(){
        var radius =document.form1.txtRadius.value; //It will take user input from the form.
		
        document.write("<P>The area of the circle is " + (radius * radius * Math.PI) + "</p>"); //Prints the Output
        
    }
