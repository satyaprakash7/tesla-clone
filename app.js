//Get element from the DOM
const menu = document.querySelector('.menu-btn');
const menuBtnMobile = document.querySelector('.menu-btn-mobile');
const sidebar = document.querySelector('.sidebar');
const closeBtn =document.querySelector('.close-btn');
const backdrop= document.querySelector('.sidebar-backdrop');
const navbarMenu = document.querySelector('.navbar');

menu.addEventListener('click',sidebarOpen);
menuBtnMobile.addEventListener('click',sidebarOpen);
//open sidebar function
function sidebarOpen(){
//change sidebar position
    sidebar.style.right ="0";
//show backdrop
backdrop.style.display = "block";
//show backdrop through a smooth transition

setTimeout(()=>{
backdrop.style.opacity ="1";
},50);
//disable scroll on body
document.body.classList.add('sidebar-open-body');

}
sidebarOpen();
//add the close button click event
closeBtn.addEventListener('click',()=>{
    sidebar.style.right="-20em";
    //hide 
    backdrop.style.opacity = "0";
    setTimeout(()=>{
        backdrop.style.display="none";
    },300);
    document.body.classList.remove('sidebar-open-body');
})