// Add your code here

function submitData(userName, userEmail){

    const userData = {
        name: `${userName}`,
        email: `${userEmail}`
    };

    const configurationObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(userData),
    };

    return fetch('http://localhost:3000/users', configurationObj)
    .then(function(response){
        return response.json();
    })
    .then(function (obj){
        const p = document.querySelector("#id")
        const span = document.createElement("span")
        p.textContent = obj.id

        p.appendChild(span)
    })
    .catch(function (error){
        document.body.innerHTML = `<p><span>${error.message}</span></p>`
    })
}

submitData("jmyli562", "jmyli562@gmail.com")