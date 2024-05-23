export function handlebutton2click() {
    let content = document.getElementById("content")
    content.innerHTML = ""

    let headone = document.createElement('h1')
    
    headone.textContent = "pasta"
    content.appendChild(headone)
    
    let img = document.createElement('img')
    
    img.src = "../images/68gtqAmf-720.jpg"
    content.appendChild(img)
    
    let para = document.createElement('p')
    
    para.textContent = "Lorem ipsum dolor sit amet cpturi sdsdss wewe.";
    
    content.appendChild(para)

    let headtwo = document.createElement('h1')
    
    headtwo.textContent = "soup"
    content.appendChild(headtwo)
    
    let img2 = document.createElement('img')
    
    img2.src = "../images/RM-115965-egg-drop-soup-better-than-restaurant-quality-ddmfs-3x4-2907-517cc318787f4ab59560c40e2b62c176.jpg"
    content.appendChild(img2)
    
    let para2 = document.createElement('p')
    
    para2.textContent = "Lorem ipsum dolor sit amet cpturi sdsdss wewe.";
    
    content.appendChild(para2)
}
