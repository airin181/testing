/* document.getElementById("submit").addEventListener((event) => {

    
        let name = document.forms.myForm.name.value;
        let email = document.forms.myForm.email.value;
        let message = document.forms.myForm.message.value;

        const at = "@"

        if (name == null || name == "") {
            alert("Name must be filled out");
        }

        if (email.match(at)) {
            alert("Must be a valid e-mail") // REGEX
        }

        if (message == "") {
            alert("You must type something")
        }

}) */