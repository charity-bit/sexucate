


$("#search").click((e)=>{
    e.preventDefault();
     if($("#nm").val() === "" || $("#phon").val() === "" || $("#loc").val() === "" || $("#issue").val() === ""){
        if($("#nm").val() === ""){
            alert("Please enter your name")
        }

        else if($("#phon").val() === ""){
            alert("please enter your phone to allow us to contact you back")
        }
        else  if ($("#loc").val() === "" ){
            alert("Please enter your location");
        }
        else{
            alert("please enter the issue you want us to address")
        }
     }

     else {
     alert("...searching");
        $("#find-form").trigger("reset");
     }

})


//issue form

$("#send").click((e)=>{

    e.preventDefault();

    if($("#a-name").val() === "" || $("#a-tel").val() === "" || $("#a-age").val() === "" || $("#a-issue").val() === "" || $("input[name='gender']:checked") == false){
        if($("#a-name").val() === ""){
            alert("Please enter your name")
        }

        else if($("#a-tel").val() === ""){
            alert("please enter your phone to allow us to contact you back")
        }
        else  if ($("#a-age").val() === "" ){
            alert("Please enter your age");
        }
        else if($("#a-issue").val() === ""){
            alert("please enter the issue you want us to address")
        }

        else{
            alert("please choose your gender")
        }
    }

    else{
        alert(`Thank you for contacting us ${$("#a-name").val()}. One of our experts will get back to you.`);
        $("#assist-form").trigger("reset");
    }
    if($("#a-age").val() < 12 && $("#a-age").val() > 23){
        alert("please enter a valid age")
    }

})