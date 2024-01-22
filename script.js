const toggleNavBar = () => {
    const navItems = document.getElementById("navItems");
    const toggleNavBarIcon = document.getElementById("toggleNavBarIcon");
    
    if (navItems.classList.contains("hideNavItems")) {
        toggleNavBarIcon.src = "./images/close.svg";

        toggleNavBarIcon.alt = "Close menu icon";
        navItems.classList.remove("hideNavItems");
    } else {
        toggleNavBarIcon.src = "./images/menu.svg";
        toggleNavBarIcon.alt = "Open menu icon";
        navItems.classList.add("hideNavItems");
    }
}

const changeGalleryImage = (image) => {
    const display = document.getElementById("display");
    display.innerHTML = "";
    const gallerySelection = document.getElementById("gallerySelection");
    let altText;
   gallerySelection.childNodes.forEach((child) => {
        if (child.nodeName === "#text") return;
        if (child.classList.contains("selected")) {
            child.classList.remove("selected");
        }
        if (child.id === "g" + image) {
            child.classList.add("selected");
            altText = child.childNodes[0].alt;
        }
    })
    if (image == 0) {
        const video = document.createElement("video");
        video.src = "./videos/video.mp4";
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.controls = false;
        video.title = altText;
        display.appendChild(video);
        return;
    } else {
        const imageElement = document.createElement("img");
        imageElement.src = "./images/g" + image + ".jpg";
        imageElement.alt = altText;
        display.appendChild(imageElement);
    }
}