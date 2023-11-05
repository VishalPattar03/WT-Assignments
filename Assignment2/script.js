function saveData(){
    name = document.getElementById("name").value;
    pass = document.getElementById("pass").value;

    let records = new Array();
    records = JSON.parse(localStorage.getItem("data"))?JSON.parse(localStorage.getItem("data")):[];
    if(records.some((v) => {return v.name == name}))
    {
        alert("Duplicate Entry");
    }
    else
    {
        records.push({
            "name":name,
            "pass":pass,
        })
        localStorage.setItem('data',JSON.stringify(records));
    }

    for (let i = 0; i < records.length; i++) {
        console.log(records[i]);
    }
}