var datas = [];

//===========================================================================
//Input Page
//===========================================================================
var memberData = {
name: "",
email: ""
};

var memberArray = [];

function inputPageOnLoad()
{
    if(sessionStorage.getItem("datas") != null)
    {
        datas = JSON.parse(sessionStorage.getItem("datas"));
    }
}

function resetForm(){
    document.getElementById("memberForm").reset();
    memberData = {
        name: "",
        email: ""
        };    
}

function submit() {
    var name = document.getElementById("first_name").value;
    var email = document.getElementById("email").value; 
    memberData = {
        name: "",
        email: ""
        };
    memberData.name = name;
    memberData.email = email;
    datas.push(memberData);
    //for (var i = 0; i < memberArray.length; i++){
    document.getElementById("displayName").innerHTML = datas[datas.length - 1].name;
    document.getElementById("displayEmail").innerHTML = datas[datas.length - 1].email;
    //}
    
    sessionStorage.setItem("datas",JSON.stringify(datas));
    //window.alert(datas);
}
//===========================================================================
//Output Page
//===========================================================================

function display()
{
    datas = JSON.parse(sessionStorage.getItem("datas"));
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

function resetButton()
{
    datas = [];
    sessionStorage.setItem("datas",JSON.stringify(datas));
    location.reload();
}

function outputToCSV()
{
    if(datas === null || datas.length == 0 || datas === undefined)
    {
        window.alert("You don't have any data. Don't tell me you are the only one in your club. :<");
        return;
    }
    var csv = objectToCSVString(datas);
    if(csv != null)
    {
        csv = "data:text/csv;charset=utf-8," + csv;
        data = encodeURI(csv);
        //download file
        downLink = document.getElementById("dummy_download");
        downLink.setAttribute('href', data);
        downLink.setAttribute('download', 'export.csv');
        downLink.click();
    }
}

function objectToCSVString(data)
{
    if(data == null || data == [])
    {
        return null;
    }
    var csv = "";
    //add title
    keys = Object.keys(data[0]);
    csv += keys.join(",");
    csv += "\n";
    for(var x = 0; x <datas.length ; ++x)
    {
        csv += Object.values(data[x]).join(",");
        csv += "\n";
    }
    return csv;
}

function inputFromCSV()
{

}