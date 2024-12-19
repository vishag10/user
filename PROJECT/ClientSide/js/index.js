let API="http://localhost:3000";

async function log(){
    const token=localStorage.getItem("token")
    console.log(token);

    const res= await  fetch(API+"/api/home",{
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    if(res.status==200){
        const {username}= await res.json()
        document.getElementById("nav").innerHTML=`
                <span href="" class="username">HELLO <label for="">${username}</label></span>
                <a href="./pages/login.html" class="logout-button">login</a>
        `
        
        
    }else{
        document.getElementById("nav").innerHTML=`
                <span href="" class="username">login</span>
                <a href="./pages/login.html" class="logout-button">login</a>
        `
        
    }
    
}

log()