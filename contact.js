$(document).ready(function()
{

$("#name").change(function(event)
		{
			//Retrieves the value of the user entered color
			var name = event.target.value;
			//Add code to set cookie
            Cookie.set("name", name);
		});

var checkName = Cookie.get("name");
$("#username").html("Hi " + checkName +",");

});