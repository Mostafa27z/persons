window.addEventListener("load", () => {
	local = JSON.parse(localStorage.getItem("persons")) || [];
	let form = document.querySelector("form");
	let name = document.querySelector("#name");
	let job = document.querySelector("#job");
	let image = document.querySelector("#image");
	form.addEventListener("submit", (e) =>{
		e.preventDefault();
		
		if(name.value && job.value && image.value){
			const person = {
				name : name.value, 
				image : image.value,
				job : job.value
			}

			local.push(person);
			localStorage.setItem("persons" , JSON.stringify(local));

			console.log(local);

			e.target.reset();
		}
		display();
	});
	display();
});
function display() {
	let per = document.querySelector(".persons");
	

	per.innerHTML = "";
	for (var i = 0; i < local.length; i++) {
		per.innerHTML += `<div class="person">
			<img src="${local[i].image}.jpg" alt="The URL is not valid">
			<input type="text" value="${local[i].name}" readonly="" class="name">
			<input type="text" value="${local[i].job}" readonly="" class="job" >
			<button class="edit">Edit</button>
			<button class="delete">Delete</button>
		</div>`;
	}
	let del = document.querySelectorAll(".delete");
	let edt = document.querySelectorAll(".edit");
	console.log(del);
	del.forEach((de,j) =>{
	de.addEventListener("click", ()=>{
		local.splice(j,1);
		localStorage.setItem("persons" , JSON.stringify(local));
		
		display();
		
	})
})
	let nedt = document.querySelectorAll(".name");
	let jedt = document.querySelectorAll(".job");
	edt.forEach((ed,i) =>{
		ed.addEventListener("click", ()=>{
			if(edt[i].innerHTML== "Edit"){
				edt[i].innerHTML= "Confirm changes";
				jedt[i].removeAttribute("readonly");
				nedt[i].removeAttribute("readonly");

			}
			else{
				edt[i].innerHTML="Edit";
				nedt[i].setAttribute("readonly","readonly");
				jedt[i].setAttribute("readonly","readonly");
				local[i].name= nedt[i].value;
				local[i].job= jedt[i].value;
				localStorage.setItem("persons" , JSON.stringify(local));
				
			}
		})
	})

}
