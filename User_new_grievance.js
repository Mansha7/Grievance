const trackbtn = document.querySelector(".track-btn") ;
const new_grievancesbtn = document.querySelector(".new_grievances-btn") ;

trackbtn.addEventListener("click" , () =>{
    window.location.replace("admin_login.html");
})
new_grievancesbtn.addEventListener("click" , () =>{
    window.location.replace("new_grievance.html");
})