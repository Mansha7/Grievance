const logoutbtn = document.querySelector(".logout-btn") ;
const view_grievancesbtn = document.querySelector(".view_grievances-btn") ;

logoutbtn.addEventListener("click" , () =>{
    window.location.replace("admin_login.html");
})
view_grievancesbtn.addEventListener("click" , () =>{
    window.location.replace("Hierarchy.html");
})