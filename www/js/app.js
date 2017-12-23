/*
Copyright (c) Cosyne LLC 2017 - 2018 - Author Ibrahim Pasha
app general javascript functions
[signup] - [login] - [sessions in local storage] - [update account]
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
              var id             = obj.id;
              var ig_user        = obj.insta_username;
              var ver_code       = obj.verification_code;


                  if ($.trim(current_status) == "success") {
                      $('#status').html(current_status);
                      $('#key').html(id);
                      $('#igu').html(ig_user);
                      $('#vcode').html(ver_code);
                      console.log(id);
                      console.log(ig_user);
                      window.localStorage.setItem("status",current_status);
                      window.localStorage.setItem("key",id);
                      window.localStorage.setItem("igu",ig_user);
                      window.localStorage.setItem("vcode",ver_code);
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
    var insta_username=$("#insta_username").val();
    var verification_code=$("#verification_code").val();
    var first_name=$("#first_name").val();
    var last_name=$("#last_name").val();
    var street_address=$("#street_address").val();
    var city=$("#city").val();
    var state=$("#state").val();
    var zip=$("#zip").val();
    var gender=$("#gender").val();
    var dataString = 'id=' + id +'&insta_username=' + insta_username + '&verification_code=' + verification_code + '&first_name=' + first_name
      + '&last_name=' + last_name + '&street_address=' + street_address + '&city=' + city + '&state=' + state + '&zip=' + zip + '&gender=' + gender+"&update_account=";
      if($.trim(id).length>0 & $.trim(first_name).length>0 & $.trim(insta_username).length>0)
            {
                $.ajax({
                    type: "POST",
                    url: url,
                    data: dataString,
                    crossDomain: true,
                    cache: false,
                    beforeSend: function(){ $("#update_account").val('Connecting...');},
                    success: function(data)
                    {
                           var obj2 = JSON.parse(data);
                           var insta    = obj2.insta_username;
                           var ver_code = obj2.verification_code;
                           $('#insta_var').html(insta);
                           $('#ver').html(ver_code);
                           window.localStorage.setItem("insta_var",insta);
                           window.localStorage.setItem("ver",ver_code);





                    }
        });
      }
  return false;
});



$(document).ready(function() {
    $.ajax({    //create an ajax request to load_page.php
      type: "GET",
      url: "file.php?selectedVal="+selectedVal,
      dataType: "html",   //expect html to be returned
      success: function(response){
          $("#some_container").html(response);
      }
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
