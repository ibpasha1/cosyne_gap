/*
Copyright (c) Cosyne LLC 2017 - 2018 - Author Ibrahim Pasha
app general javascript functions
signup - login - sessions in local storage -  update account
*/
$(document).ready(function() {

        var url="http://localhost/cosyne_backend/cosyne_backend/app.php?callback=?";
      //var url="http://www.cosyne.io/y/app.php?callback=?";

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

window.onload = function() {
document.addEventListener("deviceready", init, false);
}


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
              var id     = obj.id;
                  if ($.trim(current_status) == "success") {
                      $('#status').html(current_status);
                      $('#key').html(id);
                      console.log(id);
                      window.localStorage.setItem("status",current_status);
                      window.localStorage.setItem("key",id);
                      window.location.href = "backbone.html";
                } else {
                      window.location.href = "login.html";
                      $('#status').html('wrong password or email');
              }
          }
      });
  }
   return false;
});





$("#update_account").click(function(){
    var id=$("#id").val();
    var first_name=$("#first_name").val();
    var insta_username=$("#insta_username").val();
    var dataString = "id=" + id +"&first_name=" + first_name +"&insta_username=" + insta_username +"&update_account=";
      if($.trim(id).length>0 & $.trim(first_name).length>0 & $.trim(insta_username).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: url,
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#update_account").val('Connecting...');},
                    success: function(data){
                          $('#sum').html(data);
            }
        });
      }
  return false;
});








$("#update_accountdep").click(function(){
      var insta_username        = document.getElementById("insta_username").value;
      var verification_code     = document.getElementById("verification_code").value;
      var first_name            = document.getElementById("first_name").value;
      var last_name             = document.getElementById("last_name").value;
      var street_address        = document.getElementById("street_address").value;
      var city                  = document.getElementById("city").value;
      var state                 = document.getElementById("state").value;
      var zip                   = document.getElementById("zip").value;
      var gender                = document.getElementById("gender").value;
      var dataString = 'insta_username=' + insta_username + '&verification_code=' + verification_code + '&first_name=' + first_name
      + '&last_name=' + last_name + '&street_address=' + street_address + '&city=' + city + '&state=' + state + '&zip=' + zip + '&gender=' + gender;
      if (insta_username == '' || verification_code == '' || first_name == '' || last_name == '')
      {
              alert("Please Fill All Fields");
              } else {
              // AJAX code to submit form.
              $.ajax({
                      type: "POST",
                      url: "http://localhost/cosyne_backend/cosyne_backend/app.php",
                      data: dataString,
                      cache: false,
                      success: function(html) {
                      alert(html);
                   }
              });
        }
      return false;
});



$(document).ready(function() {

    $("#display").click(function() {

      $.ajax({    //create an ajax request to display.php
        type: "GET",
        url: url,
        dataType: "html",   //expect html to be returned
        success: function(response){
            $("#insta_username").html(response);
            //alert(response);
        }

    });
});
});

//account_request
$( "#account_request" ).keyup(function() {
    user_email = $('#email').val();

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost/cosyne_backend/cosyne_backend/app.php", // replace 'PHP-FILE.php with your php file
        data: {account_request: user_email},
        success: function(data) {
          $.each(data, function(i,item){
            if (item.field == "insta_username") {
              $("#insta_username").val(item.value);
            } else if (item.field == "verification_code") {
              $("#verification_code").val(item.value);
            } else if (item.field == "first_name") {
              $("#first_name").val(item.value);
            } else if (item.field == "first_name") {
              $("#first_name").val(item.value);
            } else if (item.field == "last_name") {
              $("#last_name").val(item.value);
            } else if (item.field == "street_address") {
              $("#street_address").val(item.value);
            } else if (item.field == "city") {
              $("#city").val(item.value);
            } else if (item.field == "state") {
              $("#state").val(item.value);
            } else if (item.field == "zip") {
              $("#zip").val(item.value);
            } else if (item.field == "gender") {
              $("#gender").val(item.value);
            }
        });
      },
           error : function(){
           alert('Some error occurred!');
        }
    });
});








    $("#logout").click(function(){
     localStorage.login="false";
     localStorage.clear();
     //window.localstorage.setItem("status",current_status);
     //window.localstorage.setItem("key",id);
     window.location.href = "login.html";
   });


});
