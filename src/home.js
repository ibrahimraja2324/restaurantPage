export function handlebutton1click() {
    let content = document.getElementById("content")
    content.innerHTML = ""

    let headone = document.createElement('h1')
    
    headone.textContent = "cool restraunt"
    content.appendChild(headone)
    
    let img = document.createElement('img')
    
    img.src = "../images/images.jpeg"
    content.appendChild(img)
    
    let para = document.createElement('p')
    
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto repellendus at explicabo, in saepe. Voluptatem tenetur perspiciatis reprehenderit non sunt. Ea officia rem culpa ab ducimus, numquam quia excepturi.";
    
    content.appendChild(para)
}
