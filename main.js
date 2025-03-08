document.addEventListener("DOMContentLoaded", function(){

    const mainEl = document.querySelector('#main');
    if (mainEl) {
        const scroll = new LocomotiveScroll({
            el: mainEl,
            smooth: true
        });
    }

    var elemc = document.querySelector("#elem-con");
    var fixImage = document.querySelector("#fixed-image");
    
    const menuIconContainer = document.querySelector("nav .menu-icon-container");
    const navContainer = document.querySelector(".nav-container");
    
    menuIconContainer.addEventListener("click", () => {
        navContainer.classList.toggle("active");
    });
    
    var elems = document.querySelectorAll(".elem");
    elems.forEach(function(e){
        var img = e.getAttribute("data-image");
        e.addEventListener("mouseenter", function(){
            fixImage.style.display = "block";
            fixImage.style.backgroundImage = `url(${img})`;
            fixImage.addEventListener("mouseenter", function(){
                fixImage.style.display = "block";
            });
        });
        e.addEventListener("mouseleave", function(){
            fixImage.style.display = "none"; 
        });
        fixImage.addEventListener("mouseleave", function(){
            fixImage.style.display = "none";
        });
    });
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 50
    });
    
    var loader = document.querySelector("#loader");
    setTimeout(function(){
        loader.style.top = "-100%";
    }, 4000);
    
    var desc = document.querySelector("#desc");
    var Design = document.querySelector("#Design");
    var design = document.querySelector("#design");
    var Project = document.querySelector("#Project");
    var Execution = document.querySelector("#Execution");
    var image = document.querySelector("#page4-img");
    
    Design.addEventListener("click", function(){
        desc.textContent = "At AGCT, we believe in the spirit of competitive cricket — a game of strategy, endurance, and unwavering passion. The AGCT Men’s Cricket Test Championship brings together aspiring cricketers in a classic Round Robin format, with the top two teams battling it out in the grand finale. With registrations yet to open, the excitement builds for this stage of raw talent, skill, and the purest form of cricket.";
        var add = Design.getAttribute("data-img");
        image.setAttribute("src", `${add}`);
        Project.style.right = "0vw";
        Design.style.right = "2vw";
        design.style.color = "#EFEAE3";
        Execution.style.right = "0vw";
        Execution.style.color = "#504A45";
        Project.style.color = "#504A45";
    });
    
    Project.addEventListener("click", function(){
        desc.textContent = "The number of participating teams will be confirmed after the registration period, starting March 10, 2025. Once the registration process is complete, the official list of teams will be announced, showcasing the talented squads set to compete in the AGCT Men’s Cricket Test Championship. Each team will battle it out in the Round Robin format, aiming for a spot in the highly anticipated final.";
        var add = Project.getAttribute("data-img");
        image.setAttribute("src", `${add}`);
        Project.style.right = "2vw";
        Project.style.color = "#EFEAE3";
        Design.style.right = "0vw";
        design.style.color = "#504A45";
        Execution.style.color = "#504A45";
        Execution.style.right = "0vw";
    });
    
    Execution.addEventListener("click", function(){
        desc.textContent = "Stay updated with real-time match progress of the AGCT Men’s Cricket Test Championship exclusively on the Stumps app. From ball-by-ball updates to team standings, the app brings you every moment of the action. Follow the live scores, track your favorite teams, and witness the journey to the final — all in one place. Don’t miss a single delivery!";
        var add = Execution.getAttribute("data-img");
        image.setAttribute("src", `${add}`);
        Project.style.right = "0vw";
        Design.style.right = "0vw";
        Execution.style.right = "2vw";
        Execution.style.color = "#EFEAE3";
        Project.style.color = "#504A45";
        design.style.color = "#504A45";
    });
});