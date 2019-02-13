var datas = ["test1","test2","test3"];

//===========================================================================
//Input Page
//===========================================================================
var memberData = {
name: "",
email: ""
};

var memberArray = [];

function resetForm(){
    document.getElementById("memberForm").reset();    
}

function view() {
  var name = document.getElementById("first_name").value;
  var email = document.getElementById("email").value; 
  memberData.name = name;
  memberData.email = email;
  memberArray[0] = memberData;

    for (var i = 0; i < memberArray.length; i++){
        document.getElementById("displayName").innerHTML = memberArray[i].name;
        document.getElementById("displayEmail").innerHTML = memberArray[i].email;
    }
}
//===========================================================================
//Output Page
//===========================================================================

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