function name1()
{
    let ename=document.getElementById("ename").value;
    let sp1=document.getElementById("sp1");
    let i;
    if(ename.length>3)
    {
        i="good";
    }
    else
    {
        i="bad";
    }
    sp1.innerHTML=i;
}

function empid()
{
    let empid=document.getElementById("empid").value;
    let sp2 =document.getElementById("sp2");
    let temp;
    
    if(empid !="")
    {
        temp="OK";
    }
    else
    {
        temp ="Enter employee id";
    }
    sp2.innerHTML=temp;

}

function des()
{
    let role =document.getElementById("desi").value;
    let sp3 =document.getElementById("sp3");
    let temp1;

    if(role !="")
    {
        temp1="ok";
    }
    else
    {
        temp1="No value";
    }
    sp3.innerHTML=temp1;
}

function sal()
{

    let basic=document.getElementById("basic").value;
    let hra=document.getElementById("hra").value=basic*(15/100);
    let da=document.getElementById("da").value=basic*(10/100);
    let pf=document.getElementById("pf").value=basic*(5/100);
    basic=parseInt(basic);
    hra=parseInt(hra);
    da=parseInt(da);
    pf=parseInt(pf);

    let netpay =document.getElementById("ntpay").value=(basic+hra+da);

    let grosspay =document.getElementById("grpay").value=(netpay-pf);

}

function submit()
{
    let ename=document.getElementById("ename").value;
    let empid=document.getElementById("empid").value;
    let role =document.getElementById("desi").value;
    let basic=document.getElementById("basic").value;
    let hra=document.getElementById("hra").value;
    let da=document.getElementById("da").value;
    let pf=document.getElementById("pf").value;
    let netpay =document.getElementById("ntpay").value;

    let grosspay =document.getElementById("grpay").value;

    let div=document.getElementById("divid");

    div.innerHTML="Employee Name :"+ename+'<br>'+'Employee id'+empid+'<br>'+"Employee Role"+role+'<br>'+"Basic Pay"+basic+'<br>'+"HRA"+hra+'<br>'+"DA"+da+'<br>'+'PF'+pf+'<br>'+"Net pay"+netpay+'<br>'+"grosspay"+grosspay;

}