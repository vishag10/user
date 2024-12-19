let API="http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    form.addEventListener("submit", async (event) => {
       
        event.preventDefault();

       
    
        const email= document.getElementById("email").value
        const password = document.getElementById("password").value

        

        console.log(email,password);

     
        try {
            const res= await fetch(API+"/api/login",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({email,password})
            })
            if(res.status==200){
                const {msg,token}=await res.json();
                
                alert(msg);
                console.log(token);
                
                console.log(res.body);
                localStorage.setItem('token',token);
                const email= document.getElementById("email").value=''
                const password = document.getElementById("password").value=''
                
                 window.location.href="../index.html"
               
                
    
            }else{
                const {msg}=await res.json();
                alert(msg);
            }  
    
            
        } catch (error) {
            console.log(error);
            
        }

        
    });
})