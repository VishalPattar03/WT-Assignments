let fetchData = ()=>{
	let xtr = new XMLHttpRequest();
	xtr.open('GET', 'https://jsonplaceholder.typicode.com/users');
	xtr.send();
	xtr.onload = () =>{
		let res = JSON.parse(xtr.responseText);
		console.log(res);
		localStorage.setItem('users',JSON.stringify(res));
		displayData();
	}
}

let displayData = ()=>{
	let tbody = document.getElementById('tbody');
	tbody.innerHTML = "";
	let storedata = JSON.parse(localStorage.getItem('users'));
	storedata.map(
		(user, index)=>
		(tbody.innerHTML += `
		<tr>
			<td>${index + 1}</td>
			<td>${user.name}</td>
			<td>${user.email}</td>
		</tr>
		`)
	);
};

fetchData();

let btn = document.getElementById('btn');
btn.addEventListener("click", ()=>{
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;

	let postObject = {
		name,
		email
	};

	let xhr = new XMLHttpRequest();
	xhr.open("POST", "https://jsonplaceholder.typicode.com/users/");
	xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");
	xhr.send(JSON.stringify(postObject));

	xhr.onload = () =>{
		if (xhr.status == 201){
			let storeddata = JSON.parse(localStorage.getItem('users'));
			storeddata.unshift(postObject);
			localStorage.setItem("users", JSON.stringify(storeddata));
			displayData();
		}
	};
});