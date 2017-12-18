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
              if ($.trim(data) == "success") {
                  window.location.href = "backbone.html";
                  //localStorage.login="true";
              } else {
                  $('#status').html(data);
                  //localStorage.login="false";
              }
          }
       });
    }
   return false;
});

//update_account
$("#update_account").click(function(){
    var email=$("#email").val();
    var password=$("#password").val();
    var dataString="email="+email+"&password="+password+"&update_account=";
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
            if(data=="success")
            {
                alert("Thank you for Registering with us! you can login now");
                $("#update_account").val('submit');
                 localStorage.login="true";
				 localStorage.email=email;
				 window.location.href = "backbone.html";
            }
            else if(data="exist")
			{
				alert("Hey! You alreay has account! you can login with us");
			}
			else if(data="failed")
			{
			alert("Something Went wrong");
			}
          }
      });
    }
   return false;
});


});
