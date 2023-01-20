import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState("");
  function showMenu(){
    show === "" ? setShow("show") : setShow("");
  }

  const activeItem = (e) => {
    let list = document.querySelectorAll("li");
    for (let i = 0; i < 4; i++) {
      list[i].className = "";
    }
    e.target.className = "active";
showMenu();
  };


useEffect(()=>{
const url = window.location.href.split('/')[3];
console.log(window.location.href);

const text = url.charAt(0).toLocaleUpperCase() + url.slice(1);
let list = document.querySelectorAll("li");
if(window.location.href === 'http://localhost:3000/'){
list[0].classList = 'active';
}
    for (let i = 0; i < 4; i++) {
      if(list[i].innerText === ''){
list[i].className = 'active'
      } else if(list[i].innerText === text){
        list[i].className ='active'
      }
      }
})

  

  return (
    <div>
      <div className="navbar">
        <div className="logo">ValehGoja</div>

        <ul onClick={activeItem}  className={`navbarList ${show}`}>
          <Link className="navbarListItem" to={""}>
            <li >Home</li>
          </Link>
          <Link className="navbarListItem" to={"about"}>
            <li>About</li>
          </Link>
          <Link className="navbarListItem" to={"services"}>
            <li>Services</li>
          </Link>
          <Link className="navbarListItem" to={"contact"}>
            <li>Contact</li>
          </Link>
          
          
        </ul>
        <i
          onClick={showMenu}
          className={` fa-solid fa-bars menuIcon`}
        ></i>
      </div>
      
    </div>
  );
}

export default Navbar;
