const navslide = () =>{
    const hamburger = document.querySelector(".burger-menu");
    const navlinks = document.querySelector(".navlist");
    const b = document.body;

    hamburger.addEventListener("click", () => {
        navlinks.classList.toggle("open")
        b.classList.toggle("over")
       
        })
}

navslide()