/*
Copyright (c) Cosyne LLC 2017 - 2018 - Author Ibrahim Pasha
app general javascript functions
signup - login - update account
*/
$(document).ready(function() {

    var url="http://localhost/cosyne_backend/app.php?callback=?";

    $("#signup").click(function(){
    var email=$("#email").val();
    var password=$("#password").val();
    var dataString="email="+email+"&password="+password+"&signup=";
    if($.trim(email).length>0 & $.trim(password).length>0)
    {
        $.ajax({
          type: "POST",
          url: url,
          data: dataString,
          crossDomain: true,
          cache: false,
          beforeSend: function(){ $("#signup").val('Connecting...');},
          success: function(data){
             $('#key').html(data);
             $('#status').html(data);
          }
      });
    }
   return false;
});



$("#login").click(function(){
    var email=$("#email").val();
    var password=$("#password").val();
    var dataString="email="+email+"&password="+password+"&login=";
    if($.trim(email).length>0 & $.trim(password).length>0)
    {
        $.ajax({
          type: "POST",
          url: url,
          data: dataString,
          crossDomain: true,
          cache: false,
          beforeSend: function(){ $("#login").val('Connecting...');},
          success: function(data)
            {
              var obj = JSON.parse(data);
                var current_status = obj.status;
                var user_email     = obj.email;
                if (current_status == email) {
                    $('#status').html(current_status);
                     console.log(user_email);
                     window.location.href = "backbone.html";
                  } else {
                     window.location.href = "login.html";
                  }
            }

       });
    }
   return false;
});

//update_account


    $("#logout").click(function(){
     localStorage.login="false";
     window.location.href = "login.html";
   });


});
