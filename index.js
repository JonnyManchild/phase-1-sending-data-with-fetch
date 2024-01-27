function submitData(nameData, emailData) {
    const formData = {
        name: nameData,
        email: emailData,
    }
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            const idData = document.createElement("li");
            idData.textContent = object.id;
            return document.body.appendChild(idData);
        })
        .catch(function (error) {
            const errorData = document.createElement("li");
            errorData.textContent = error.message;
            return document.body.appendChild(errorData);
        })
};