function confirmMessageReceived(){
    
    document.getElementById("invalid-name").innerHTML = "";
    document.getElementById("invalid-email").innerHTML = "";
    document.getElementById("invalid-message").innerHTML = "";

    var flag = 0;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("request-message").value; 

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //alert(emailPattern.test(email));
    if(name == '')
    {
        document.getElementById("invalid-name").innerHTML = "You have a nice name, please dont keep us from knowing that";
        document.getElementById("invalid-name").style = "color:red; font-size:small";
        flag++;

    }
    // if(email == '')
    // {
    //     document.getElementById("invalid-email").innerHTML = "We would love to stay in touch, please dont leave this field blank";
    //     document.getElementById("invalid-email").style = "color:red; font-size:small";
    //     flag++;
    // }
    if(!emailPattern.test(email))
    {
        document.getElementById("invalid-email").innerHTML = "We think you made a typo, plese validate";
        document.getElementById("invalid-email").style = "color:red; font-size:small";
        flag++;
        if(email == '')
        {
            document.getElementById("invalid-email").innerHTML = "We would love to stay in touch, please dont leave this field blank";
            document.getElementById("invalid-email").style = "color:red; font-size:small";
            flag++;

        }
        
    }
    if(message == '')
    {
        document.getElementById("invalid-message").innerHTML = "Our inbox is all open to your messages. Please enter something here.";
        document.getElementById("invalid-message").style = "color:red; font-size:small";
        flag++;

    }

    document.getElementById("name").innerHTML = "";
    document.getElementById("email").innerHTML = "";
    document.getElementById("request-message").innerHTML = "";
    
    if(flag == 0)
    {
        // alert("Hey, "+name+" we have received your request and we will get back to you in 3 business days.");
        document.getElementById("success").style.display = "flex";
        setTimeout(() => {
            document.getElementById("success").style.display = "none"
        }, 3000)
        document.getElementById("success").innerHTML = "Hey, "+name+" we have received your request and we will get back to you in 3 business days.";
        let frm = document.getElementById("reach-us-form");
        frm.reset();
    }

}

window.onload = () => {
    document.getElementById('success').style.display = "none;"
}

function testJS(){
    //var mail = document.createElement("a");
    window.location.href = "mailto:bullean007@humber.ca";
    //mail.click();
}