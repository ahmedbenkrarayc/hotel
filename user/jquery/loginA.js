$(document).ready(function(){
    var email = $('#email');
    var pass = $('#password');
    var send = $('#send');
    
    function isEmpty(e){
        if(e.val() == ''){
            e.css("border","2px solid red");
            e.prop("title","Fill this input");
            return true;
        }else{
            e.css("border","2px solid black");
            e.removeAttr('title');
            return false;
        }
    }

    send.click(function(){
        if(!isEmpty(email) && !isEmpty(pass)){
            $.ajax({
                url:'logA.php',
                type:'POST',
                dataType:'JSON',
                data:{
                    email:email.val(),
                    pass:pass.val()
                },success:function(data){
                    if(parseInt(data) == 0){
                        alert("Admin doesn't exist !");
                    }else if(parseInt(data) == 1){
                        alert("wrong password !");
                    }else if(parseInt(data) == 2){
                        window.location = "login.php";
                    }
                }
            });
        }
    });
})