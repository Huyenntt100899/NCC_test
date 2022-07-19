
const menu = document.getElementById("nav");
const wrapper = document.getElementById("lorem");

["Home", "Services", "News", "Blog", "Contact"].map((item, index)=>{
    menu.innerHTML += `
        <li class="nav-item ${index==0?'active':''} "}>${item}</li>
    `
})

data.map((item)=>{
    wrapper.innerHTML += `
        <div class="lorem-item">
            <h2>${item.title}</h2>
            <div style="padding-top:25px">
                <p class="">
                    <img src="./assest/images/${item.img}-icon.png" class="img-icon">
                </p>
                <p class="text">${item.content1}</p>
            </div>   
        </div>
    `
})

let menuItems = document.getElementsByClassName("nav-item");
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

