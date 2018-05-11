window.onload=function() {
    let supBtn = document.getElementById('supBtn');
    let supText = document.getElementById('supText');
    let submitBtn = document.getElementById('submit');

    //pop modal & form errors
    let errorMess = document.getElementById('errorMess');
    let errorCon = document.getElementById('error-contain');
    let errorBtn = document.getElementById('errorBtn');
    let errorOut = document.getElementById('error-outcome');
    let icon = document.getElementById('icon');

    //input fields
    let fName = document.getElementById('fName');
    let lName = document.getElementById('lName');
    let email = document.getElementById('email');
    let pass1 = document.getElementById('pass1');
    let pass2 = document.getElementById('pass2');



    //Toggles styling for Signup button and Signup Text
    function toggle() {
        if (supText.style.color === 'rgb(81, 98, 115)') {
            supText.style.color = "#fff";
            supText.style.paddingBottom = '2px';
            supText.style.borderBottom = '2px solid rgb(81, 98, 115)';
            supBtn.style.backgroundColor = '#fff';
        } else {
            supText.style.color = 'rgb(81, 98, 115)';
            supText.style.borderBottom = 'none';
            supBtn.style.backgroundColor = '#cfe9e9';
        }
    }


    //checks if password fields are filled and if passwords match
    function checkPass() {


        if (pass2.value === ""){
            return 1;
        }
        else if (pass1.value !== pass2.value){
            return -1;
        }


    }

    //displays pop fail modal
    function modalFail(wrong) {
        icon.innerHTML = '<i class="far fa-times-circle fa-6x invalid"></i>';
        errorMess.textContent = wrong;
        errorCon.style.display = "block";
        errorOut.textContent = "Oops!";

    }

    //displays pop modal success
    function modalSuccess() {
        icon.innerHTML = '<i class="far fa-check-circle fa-6x success"></i>';
        errorOut.textContent = "Success!";
        errorMess.textContent = "You have successfully created your account";
        errorCon.style.display = "block";
    }


    //Stores value returned from checkPass function
    //checks if fields are filled and displays pop up modal based on form errors.
    function passwordPattern() {

        let passMatch = checkPass();
        let str = pass1.value;
        let mail = email.value;
        let regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let error = "";



        if (fName.value === "" || lName.value === "") {
            error = "First Name and Last Name are required";
            modalFail(error);
        } else if(passMatch === 1)
        {
            error = "Confirm password";
            modalFail(error);
        }
        else if(passMatch === -1){
            error = "Password does not match";
            modalFail(error);
        }
        else if (str.length < 8) {
            error = "Password must be atleast 8 characters long";
            modalFail(error);
        } else if (str.match(/[a-z]/g) === null) //validate lowercase
        {
            error = "Password must have lowercase letter";
            modalFail(error);

        } else if (str.match(/[A-Z]/g) === null) //validate uppercase
        {
            error = "Password must have uppercase letter";
            modalFail(error);

        } else if (str.match(/[0-9]/g) === null) //validate numbers
        {
            error = "Password must have a number";
            modalFail(error);

        } else if (str.match(/[!@#\\$%\\^&]/) === null) //validate special
        {
            error = "Password must have a special character.";
            modalFail(error);
        }
        else if (regEx.test(mail) === false) //validate email
        {
            error = "You did not enter a valid email";
            modalFail(error);

        }
        else {
            modalSuccess();
        }
    }


    //Form Signup button
    submitBtn.addEventListener('click', passwordPattern);

    //Signup toggle button
    supBtn.addEventListener('click', toggle);

    //Pop Modal Button
    errorBtn.addEventListener('click', function () {
        errorCon.style.display = "none";
    });

};