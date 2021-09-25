fetch("https://ci-swapi.herokuapp.com/api/")
    .then(response => response.text())
    .then(data => displayData(data))
    .catch((e) => {
        console.error("Error: ", e);
    })

function displayData(data) {
    document.getElementById("content").innerText = data;
}