function myFunction() {
      var username   = document.getElementById("username").value;
      var email      = document.getElementById("email").value;
      var password   = document.getElementById("password").value;
 
      // Returns successful data submission message when the entered information is stored in database.
      var dataString = 'username=' + username + '&email=' + email + '&password=' + password;
      if (username == '' || email == '' || password == '') {
      alert("Please Fill All Fields");
      } else {
      $.ajax({
      type: "POST",
      url: "../server/influencer_register.php",
      data: dataString,
      cache: false,
      success: function(html) {
      alert(html);
      }
      });
      }
      return false;
  }