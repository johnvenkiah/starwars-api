fetch("https://ci-swapi.herokuapp.com/api/")
.then(response => response.json())
.then(data => {
    document.getElementById("content").innerText = data.people;
})