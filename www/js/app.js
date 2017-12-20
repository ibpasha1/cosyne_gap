/*
Copyright (c) Cosyne LLC 2017 - 2018 - Author Ibrahim Pasha
app general javascript functions
signup - login - update account
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





$("#update_account").click(function(){
    var email=$("#email").val();
    var insta_username=$("#insta_username").val();
    var verification_code=$("#verification_code").val();
    var first_name=$("#first_name").val();
    var last_name=$("#last_name").val();
    var street_address=$("#street_address").val();
    var city=$("#city").val();
    var state=$("#state").val();
    var zip=$("#zip").val();
    var gender=$("#gender").val();
    var dataString = "email=" + email +"&insta_username=" + insta_username + "&verification_code=" + verification_code + "&first_name=" + first_name
    + "&last_name=" + last_name + "&street_address=" + street_address + "&city="
    + city + "&state=" + state + "&zip=" + zip
    + "&gender=" + gender+"&update_account=";
    if($.trim(email).length>0 & $.trim(insta_username).length>0 & $.trim(verification_code).length>0
    & $.trim(first_name).length>0 & $.trim(last_name).length>0
    & $.trim(street_address).length>0 & $.trim(city).length>0
    & $.trim(state).length>0 & $.trim(zip).length>0 & $.trim(gender).length>0)
    {
          $.ajax({
            type: "POST",
            url: url,
            data: dataString,
            crossDomain: true,
            cache: false,
            beforeSend: function(){ $("#update_account").val('Connecting...');},
            success: function(data){
               $('#key').html(data);
               //$('#status').html(data);
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
     window.location.href = "login.html";
   });


});
