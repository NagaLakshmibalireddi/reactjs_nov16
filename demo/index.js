(function(){



function loadJSON(file,callback){

	var xhrObject= new XMLHttpRequest();
	xhrObject.overrideMimeType('application/json')
	xhrObject.open('GET',file,true);

	xhrObject.onreadystatechange=function()
	{
		
		if(xhrObject.readyState === 4 && xhrObject.status=="200")
		{
			    callback(xhrObject.responseText);
         }
	
	}
	xhrObject.send();

}

loadJSON("data.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	profile(data);
	skills(data.skills);
	education(data);
	interest(data);
	language(data);
	

})



function profile(pdata){
	console.log(pdata);
	var main=document.getElementById("main");
	var left=document.getElementById("left");

	var card=document.createElement("div");
	card.classList.add("card");


    //Profile card pic
	var pic=document.createElement('img');
	pic.src="img/card2.png";
	pic.style.width="300px";
	card.appendChild(pic);

	// Card Data
    var ename=document.createElement('h2');
    ename.textContent=pdata.name;
    card.appendChild(ename);

    var email=document.createElement('h2');
    email.textContent=pdata.email;
    card.appendChild(email);

     var phone=document.createElement('h2');
    phone.textContent=pdata.phone;
    card.appendChild(phone);
   
   var obj=document.createElement('h1');
  	obj.textContent="Career Objective :";
  	card.appendChild(obj);

     var hr=document.createElement('hr');
     card.appendChild(hr);

  	var career=document.createElement('p');
  	career.textContent=pdata.career;
  	card.appendChild(career);

   
	left.appendChild(card)
	main.appendChild(left)

   }
 //Skills

  function skills(eskills){

  	console.log(eskills);
  	var right=document.getElementById("right");

  	var pskills=document.createElement('h1');
  	pskills.textContent="Skills :";
  	right.appendChild(pskills);
  	main.appendChild(right);

  	var hr=document.createElement('hr');
  	right.appendChild(hr);

  	for (i in eskills)
  	{
  		var course=document.createElement('h3');
  		course.textContent=eskills[i].course+":";
  		right.appendChild(course);

  		for (k in eskills[i].keywords){
  			var keys=document.createElement('i');
  			keys.textContent=eskills[i].keywords[k]+" , ";
  			right.appendChild(keys);
  		}
  	}


  }

function education(education){
	console.log(education);

	var ed=document.createElement("h2");
	ed.innerHTML="Educational Details:";
	right.appendChild(ed);

	var hr=document.createElement('hr');
  	right.appendChild(hr);

  	etable=document.createElement("table");
  	etable.border="1";

  	var tr1="<tr><td>sno</td><td>Institution</td><td>YOF</td><td>Percentage</td>";
  	var tr2="<tr><td>1</td><td>ABC College</td><td>2021</td><td>83</td>";
  	var tr3="<tr><td>2</td><td>GOVT College</td><td>2017</td><td>92</td>";
  	var tr4="<tr><td>3</td><td>ABC School</td><td>2015</td><td>92</td>";
  	for (i=0;i<education.length;i++){
  		tr2=tr2+"<tr><td>"+education[i].sno+"</td><td>"+education[i].institute+"</td><td>"+education[i].YOF+"</td><td>"+education[i].Percentage+"</td></tr>";
  	    
  	}

  	etable.innerHTML=tr1+tr2+tr3+tr4;
  	right.appendChild(etable);




}

function interest(interest){
	console.log(interest);

	var interest=document.createElement("h2");
	interest.textContent="Interests :";
	right.appendChild(interest);
	

	var b=document.createElement('b');
  	b.textContent="Wildlife :";
  	right.appendChild(b);

    
  	var obj=document.createElement('i');
  	obj.textContent="Ferrets,Unicorns";
  	right.appendChild(obj);
	

}
 
 function language(language){
 	console.log(language);

 	var ln=document.createElement("h2");
	ln.innerHTML="Languages:";
	right.appendChild(ln);

  
  			var lan=document.createElement('i');
  			lan.textContent="English , Native Speaker";
  			right.appendChild(lan);
  		

 }

 }())



