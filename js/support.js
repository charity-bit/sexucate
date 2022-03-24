$("#send").click((e)=>{
    e.preventDefault();
     if($("#nm").val() === "" || $("#phon").val() === "" || $("#msg").val() === ""){
        if($("#nm").val() === ""){
            alert("Please enter your name")
        }

        else if($("#phon").val() === ""){
            alert("please enter your phone to allow us to contact you back")
        }
        else {
            alert("Please enter a message");
        }
     }

     else {
         alert(`Thank you for contacting us ${$("#nm").val()}. We will get back to you as soon as possible.`);
        $("#contact-form").trigger("reset");
     }

})