function getFormvalue() {
    //Write your code here

	let fname = document.getElementsByName("fname")[0].value.trim()
	let lname = document.getElementsByName("lname")[0].value.trim()

	let fullName = fname+" "+lname;
	fullName = fullName.trim()

	alert(fullName)

}
