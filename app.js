function init(){
    const hamburger=document.querySelector(".hamburger");
const sidebarCloseButton=document.querySelector(".close-button");
const sidebarContainer=document.querySelector(".sidebar-container");
const openSidebar=()=>{
    sidebarContainer.classList.add("show-sidebar");
};
const closeSidebar=()=>{
    sidebarContainer.classList.remove("show-sidebar");
};

hamburger.addEventListener("click",openSidebar);
sidebarCloseButton.addEventListener("click",closeSidebar);

}
init();

function navRelatedCode() {
    const navBarContainer = document.querySelector(".nav-container");
    const body = document.body; // Select the body element

    window.addEventListener("scroll", function() {
        const scrollNumber = this.window.scrollY;
        // If window width is 992px or more, target is 70, otherwise 0.
        const targetNumber = this.window.innerWidth >= 992 ? 70 : 0;

        if (scrollNumber >= targetNumber) {
            navBarContainer.classList.add("sticky-nav");
            body.classList.add("body-has-sticky-nav"); // Add class to body
        } else {
            navBarContainer.classList.remove("sticky-nav");
            body.classList.remove("body-has-sticky-nav"); // Remove class from body
        }
    });
}
navRelatedCode();