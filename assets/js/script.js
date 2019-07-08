window.onScroll = function(){
    scrollFunction()
};

var navBar = document.querySelector("#navContain");

var stick = navBar.offsetTop;

function scrollFunction(){
    if(window.pageYOffset > stick){
        navBar.classList.add("navbar-fixed-top");
    } else{
        navBar.classList.remove("navbar-fixed-top");
    }
}