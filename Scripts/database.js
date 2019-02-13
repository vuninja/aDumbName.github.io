var datas = ["test1","test2","test3"];

function view() {
    var x = document.getElementById("first_name").value;
    document.getElementById("displayName").innerHTML = x;
    var y = document.getElementById("email").value;
    document.getElementById("displayEmail").innerHTML = y;
  }

function display()
{
    for(var x = 0; x < datas.length; ++x)
    {
        var field = document.createElement("P"); 
        var text = document.createTextNode(datas[x]);
        field.appendChild(text);
        //var br = document.createElement("BR"); 
        document.getElementById("display_window").appendChild(field);
        //document.getElementById("display_window").appendChild(br);
    }
}