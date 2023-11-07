let fetchdata = () =>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users/');
    xhr.send();
    xhr.onload = ()=>{
        let res = JSON.parse(xhr.responseText);
        localStorage.setItem('users', JSON.stringify(res));
        displayData();
    }
}

let displayData = ()=>{
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = "";
    let res = JSON.parse(localStorage.getItem('users'));
    res.map(
        (user, index)=>
        (tbody.innerHTML += 
        `<tr>
            <td>${index + 1}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>`)
    );
};

fetchdata();

let btn = document.getElementById('btn');
btn.addEventListener("click", ()=>{
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let Postobj = {
        name,
        email
    };

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
    xhr.setRequestHeader('Content-type', 'Application/json');
    xhr.send(JSON.stringify(Postobj));

    xhr.onload = () =>{
        if(xhr.status == 201){
            let storedata = JSON.parse(localStorage.getItem('users'));
            storedata.push(Postobj);
            localStorage.setItem('users', JSON.stringify(storedata));
            displayData();
        }
    }
})