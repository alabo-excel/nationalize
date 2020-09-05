var inner = document.getElementById('in');
var check = document.getElementById('check');



check.addEventListener("click", () => {
    fetch("https://api.genderize.io?name=" + inner.value)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            document.getElementById('content').innerHTML = `
                <h2>NAME: ${data.name}</h2>
                <h2>GENDER: ${data.gender}</h2>
                `
        })

    fetch("https://api.agify.io?name=" + inner.value)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            document.getElementById('content').innerHTML += `
                <h2>AGE: ${data.age}</h2>
                `
        })

    fetch("https://api.nationalize.io/?name=" + inner.value)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            document.getElementById('content').innerHTML += `
                <h2>COUNTRY: ${data.country[0].country_id}</h2>
                `
        })

})