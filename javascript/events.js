function get(){

var user=document.getElementById("user").value;
localStorage.setItem("name", user);
alert(localStorage.getItem("name"));
}

// localStorage.getItem(a);
// alert(a);


// var a="satheesh"
// localStorage.setItem("name",a);
// var b=localStorage.getItem("satheesh");
// alert(a);

// localStorage.setItem("city", "Noida");  


// function sam(){
//     var user=document.getElementById("us").value;
//     var dob=document.getElementById("dob").value;
//     var first_name=user.slice(0,4);
//     var date=new Date(dob);
//     var last_name=date.getDate();
//     var full_name=first_name+last_name;
//     var store_pass=document.getElementById("divid")
//     store_pass.innerHTML=full_name;
// }


// function sample(){
//     var a=document.getElementById("user").value;
//     var b=document.getElementById("pass").value;

// }


// function sample(){

//     var a=document.getElementById("number").value;
//     var id=document.getElementById("select");
//     var output='<option>select</option>'
//     for (var i=1;i<a;i++){
//      output+='<option value='+i+'>'+i+'</option>'
//     }
//     document.getElementById("select").innerHTML=output
//     }

//     function sample1(){
//         var id=document.getElementById("select").value;
//         // alert(id)
//         var out='<option value="">select</option>'
//         for (var j=0;j<=id;j++){
//             out+='<Option value='+j+'>'+j+'</option>';
//         }
//         document.getElementById("select1").innerHTML=out;
//     }

//     function sample2(){
//         var id=document.getElementById("select1").value;
//         alert(id)
//         var nex="";
//         for(var k=0;k<=id;k++){
//         nex+='<input type="text" placeholder="enter the name"><input type="text" placeholder="password">'
//         }
//         document.getElementById("select2").innerHTML=nex;
//     }


    // function val(){
    //      var input=document.getElementById("user").value;
    //      document.getElementById("spn1").innerHTML=input;
    //   } 