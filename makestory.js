$(document).ready(function() {
    console.log("yes1");

    $("#form1").submit(function(event){
        event.preventDefault();
        console.log("yes");
        var animal1 = $("#animal-1").val();
        var animal2 = $("#animal-2").val();
        var animal3 = $("#animal-3").val();
        var adj1 = $("#adj-1").val();
        var verb1 = $("#verb-1").val();
        var num1 = $("#num-1").val();
        var quote = $("#quote").val();
        var speed = $("#speed").val();
        var radio = $('input[name="answer"]:checked').val();
        var msg = $("#message").val();
        localStorage.setItem("animal1",animal1);
        localStorage.setItem("animal2",animal2);
        localStorage.setItem("animal3",animal3);
        localStorage.setItem("adj1",adj1);
        localStorage.setItem("verb1",verb1);
        localStorage.setItem("num1",num1);
        localStorage.setItem("quote",quote);
        localStorage.setItem("speed",speed);
        localStorage.setItem("radio",radio);
        localStorage.setItem("msg",msg);
        location.href= "story.html";
    });

});