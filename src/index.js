import {handlebutton1click} from './home.js';
import {handlebutton2click} from './menu.js';
import {handlebutton3click} from './about.js';

document.addEventListener('DOMContentLoaded', () => {
    let content = document.getElementById("content")

    let headone = document.createElement('h1')
    
    headone.textContent = "cool restraunt"
    content.appendChild(headone)
    
    let img = document.createElement('img')
    
    img.src = "../images/images.jpeg"
    content.appendChild(img)
    
    let para = document.createElement('p')
    
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa architecto repellendus at explicabo, in saepe. Voluptatem tenetur perspiciatis reprehenderit non sunt. Ea officia rem culpa ab ducimus, numquam quia excepturi.";
    
    content.appendChild(para)
    
    
    document.getElementById('home').addEventListener("click", handlebutton1click)
    document.getElementById('menu').addEventListener("click", handlebutton2click)
    document.getElementById('about').addEventListener("click", handlebutton3click)
    
})

