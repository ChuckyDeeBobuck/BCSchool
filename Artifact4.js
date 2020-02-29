function ValidateForm(){
 var validUsername = false;
 var validUserPassword = false;
 var validPhone = false;
 var errorMessages ="";  // All the error messages are going to stay in this variable
 /*********** VALIDATES USERNAME ******** */
 //Required field
//This syntax is using name-of-form.name-of-field.value
// You can also use document.getElementById("id-of-field").value

/*********** VALIDATES USERNAME ******** */
 if (myContact.username.value.length > 0 &&
 myContact.username.value.length < 15)
 validUsername =true;
 else 
 errorMessages += "<p>The username must be less than 15 characters</p>";
 console.log(validUsername);  
 /*********** VALIDATES PASSWORD ******** */
 if (myContact.userPassword.value==null ||
 myContact.password.value== "" ||
 myContact.password.value.length >15)
 errorMessages += "<p>The password must be less than 15 characters and it is required</p>";
 else
 validUserPassword = true; p

if (myContact.phone.value.length < 15 && myContact.phone.value.length > 0)
	validPhone = true;
else
	 errorMessages += "<p>The phone number must be less than 15 characters</p>";

 document.getElementById("errorMessages").innerHTML = errorMessages;
// Make sure you return all the boolean variables that are checking each field
 return (validUsername && validUserPassword && validPhone) ;
}