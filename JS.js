function submitInput(){
    let uName = document.getElementById("username").value;
    let uPass = document.getElementById("password").value;
    const form = document.getElementById("form");

    if(uName == "user1" && uPass == "pass123!@")
    {
        window.location.href = "SimpleHomePage.html";
    }
    else
    {
        alert("The server does not recognize this username and/or password.\nPlease try again.");
    }
}
document.getElementById("submitButton").addEventListener("click", submitInput);

// this will handle any errors from login (form submit event) 
// e.preventDefault will prevent the default behavior of an element from triggering
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
})