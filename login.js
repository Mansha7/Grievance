const form = document.querySelector("form");

form.addEventListener("submit" , (e) =>{

    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    const authenticated = authentication(username,password);
    if(authenticated){
        window.location.href = "logout.html";
    }
    else{
        alert("incorrect");
    }
})


// for checking valid username or password 
function authentication(username ,  password){
    if(username=="Mansha" && password=="loveYou") return 1;
    else if(username=="Ayashika" && password=="pswd@1234") return 1;
    else if(username=="Aynansh" && password=="pswd@1234") return 1;
    else if(username=="Shresth" && password=="pswd@1234") return 1;
    else if(username=="Shivi" && password=="pswd@1234") return 1;
    return 0;
}