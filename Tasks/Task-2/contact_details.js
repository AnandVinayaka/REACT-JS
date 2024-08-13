document.getElementById("infoForm").addEventListener("submit", function(submit) {
    submit.preventDefault();
    
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>${name}</h2>
        <p>Contact Number: ${contact}</p>
        <p>Email: ${email}</p>
    `;

    document.getElementById("contactDeatils").appendChild(card);
    
    this.reset();
});