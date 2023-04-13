function val()
{
    var ptn=new RegExp(/^[A-Z]{1}[a-z]{2,20}$/);
    var user=document.getElementById("user").value;
    if(user.match(ptn))
    {
      alert("user name valid")
    }
    else
    {
        alert("user name invalid")
    }
}

function val()
{
    var ptn=new RegExp(/^[0-9A-Za-z]{1,20}$/);
    var pass=document.getElementById("pass").value;
    if(pass.match(ptn))
    {
      alert("password valid")
    }
    else
    {
        alert("password invalid")
    }
}

function val()
{
    var ptn=new RegExp(/^[6-9]{1}[0-9]{9}$/);
    var mn=document.getElementById("mn").value;
    if(mn.match(ptn))
    {
      alert("mobile valid")
    }
    else
    {
        alert("mobile invalid")
    }
}
  