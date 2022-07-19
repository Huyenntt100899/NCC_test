
const menu = document.getElementById("nav");
const wrapper = document.getElementById("lorem");

["Home", "Services", "News", "Blog", "Contact"].map((item)=>{
    menu.innerHTML += `
        <li class="nav-item">${item}</li>
    `
})

data.map((item)=>{
    wrapper.innerHTML += `
        <div class="lorem-item">
            <h2>${item.title}</h2>
            <div class="df "> 
                <div class="">
                    <img src="./assest/images/${item.img}-icon.png">
                </div>
                <div class="text">
                    <p>${item.content1}</p>
                </div>
            </div>
        </div>
    `
})