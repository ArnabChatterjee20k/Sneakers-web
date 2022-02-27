// Initialisation
let image = document.querySelector(".gallery_img");
let thumbnails = document.querySelectorAll(".thumbnail_img");

// Events
thumbnails.forEach((element)=>{
    element.addEventListener("click",(eventObject)=>{
        let active_thumbnail = document.querySelector(".active");
        active_thumbnail.classList.remove("active")
        eventObject.target.classList.add("active")
        // you cant use thumbnails in the gallery img so fist make a way to import the main images then set them in the gallery
    })
})
