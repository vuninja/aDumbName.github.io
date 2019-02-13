function view() {
    var x = document.getElementById("first_name").value;
    document.getElementById("displayName").innerHTML = x;
    var y = document.getElementById("email").value;
    document.getElementById("displayEmail").innerHTML = y;
  }