let WANTS_APPLY = false;
let password = "MASH_ILE_ASH"

function redirect(url) {

    location.href = url;
    return "redirected!";

}

function contact_confirm() {

    alert("Thank you for the notification! We will take a look at your request soon.");
    location.href = "../../index.html";
}


function log_credentials() {

    let password_prompt = prompt("Enter password for logging access");

    if (password_prompt == password) {
        location.href = "res/html/logger/logger.html";
    }

    else if (password_prompt != password || "") {
        alert("The password was wrong!");
        location.reload();
    }

}

function apply(button) {

    if (WANTS_APPLY == false) {

        const username_field = document.createElement('input');
        username_field.setAttribute('placeholder','Full Name');
        username_field.setAttribute('id','username_field');

        const age_field = document.createElement('input');
        age_field.setAttribute('placeholder','Enter your age');
        age_field.setAttribute('id','age_field');

        if (button == 1) {
            username_field.setAttribute('style',"position: relative; left: -20cm; bottom: 16.5cm;");
            age_field.setAttribute('style','position: relative; left: -20cm; bottom: 16.5cm;');
        }

        else if (button == 2) {
            username_field.setAttribute('style',"position: relative; left: -20cm;");
            age_field.setAttribute('style','position: relative; left: -20cm;');
        }


        document.body.appendChild(username_field);
        document.body.appendChild(age_field);

        WANTS_APPLY = true;

    }

    else if (WANTS_APPLY == true) {

        if (document.getElementById('username_field').value != "") {


           if (document.getElementById('age_field').value != "") {

                alert("Thank you for the application "+document.getElementById('username_field').value+", "+document.getElementById('age_field').value+"."+" We will take a look at your application, review it, check our database and contact you!"); 

                location.href = "../../index.html";

            }

        }

        if (document.getElementById('username_field').value == "" || document.getElementById('age_field').value == "") {

            location.href = "job.html";
        }

        WANTS_APPLY = false;

    }
}
