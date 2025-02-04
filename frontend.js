console.log("script loaded");

const link = "http://localhost:7777/getuser";
 document.addEventListener("DOMContentLoaded", () =>{
    
    document.getElementById("btn").onclick = () =>{
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const age = document.getElementById("age").value;
    const about = document.getElementById("about").value;
    const skills = document.getElementById("skills").value.split(',').map(skill => skill.trim());
    const dynamicuser = {
    firstname:firstname,
    lastname:lastname,
    age:age,
    skills:skills,
    about:about,
}

try{
fetch("http://localhost:7777/adduser",{
    
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(dynamicuser)
    
})
.then(response=>response.text())
.then(data=>console.log("server response:  ", data));
}catch(err){
    console.log("Error : "+err.message);
}
 
}
    
});

  



