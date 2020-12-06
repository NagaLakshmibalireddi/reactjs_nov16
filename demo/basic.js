var main=document.getElementById("root");
//console.log(main);

var heading=document.createElement("h1");
heading.textContent="React js";
//console.log(heading);
main.appendChild(heading);

var para1=document.createElement("p");
para1.textContent="Web desiging JSON stands for JavaScript Object Notation. JSON is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page.";
//console.log(heading);
main.appendChild(para1);

var pic=document.createElement("img");
pic.src="img/card1.png";
//pic.alt="alternate name"
//console.log(heading);
main.appendChild(pic);