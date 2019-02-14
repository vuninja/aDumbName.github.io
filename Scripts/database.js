var datas = [];

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

function submit() {
  var name = document.getElementById("first_name").value;
  var email = document.getElementById("email").value; 
  memberData.name = name;
  memberData.email = email;
  memberArray[0] = memberData;

    for (var i = 0; i < memberArray.length; i++){
        document.getElementById("displayName").innerHTML = memberArray[i].name;
        document.getElementById("displayEmail").innerHTML = memberArray[i].email;
    }
    datas.push(memberData);
    localStorage.setItem("datas",datas);
    window.alert(datas);
    window.alert(localStorage.getItem("datas"));
}
//===========================================================================
//Output Page
//===========================================================================

function display()
{
    localStorage.getItem("datas");
    window.alert(datas);
    for(var x = 0; x < datas.length; ++x)
    {
        var field = document.createElement("P"); 
        var text = document.createTextNode(datas[x].name + "  " +datas[x].email);
        field.appendChild(text);
        //var br = document.createElement("BR"); 
        document.getElementById("display_window").appendChild(field);
        //document.getElementById("display_window").appendChild(br);
    }
}