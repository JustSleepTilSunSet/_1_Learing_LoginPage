const apiAddress = 'http://127.0.0.1:17200/'

function sendLoginJSON(){

    // let Username = document.querySelector('#floatingEmail');
    // let Password = document.querySelector('#floatingUsername');
    let Username = document.getElementById("floatingEmail").value;
    let Password = document.getElementById("floatingPassword").value;
    let userInfo = {};
    userInfo.email = Username;
    userInfo.pwd = Password;

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = `${apiAddress}login/`;

    // open a connection.
    xhr.open("POST", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            alert(JSON.stringify(xhr.response,null,2));
        }
    }

    // Set the request header i.e. which type of content you are sending.
    xhr.setRequestHeader("Content-Type", "application/json");

    // Converting JSON data to string.
    let data = JSON.stringify(userInfo);

    // Sending data with the request.
    xhr.send(data);
    // alert(xhr.status);
    // alert(xhr.response);
}

function sendSignupJSON(){

    let Username = document.getElementById("floatingEmail").value;
    let Password = document.getElementById("floatingPassword").value;
    let userInfo = {};
    userInfo.email = Username;
    userInfo.pwd = Password;

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = `${apiAddress}signup/`;

    // open a connection.
    xhr.open("POST", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            alert(JSON.stringify(xhr.response,null,2));
        }
    }

    // Set the request header i.e. which type of content you are sending.
    xhr.setRequestHeader("Content-Type", "application/json");

    // Converting JSON data to string.
    let data = JSON.stringify(userInfo);

    // Sending data with the request.
    xhr.send(data);
    // alert(xhr.status);
    // alert(xhr.response);
}

function sendUpdatePwdJSON(){

    let Username = document.getElementById("floatingEmail").value;
    let Password = document.getElementById("floatingPassword").value;
    let userInfo = {};
    userInfo.email = Username;
    userInfo.pwd = Password;

    // Creating a XHR object
    let xhr = new XMLHttpRequest();
    let url = `${apiAddress}forgetPwd/`;

    // open a connection.
    xhr.open("POST", url, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            alert(JSON.stringify(xhr.response,null,2));
        }
    }

    // Set the request header i.e. which type of content you are sending.
    xhr.setRequestHeader("Content-Type", "application/json");

    // Converting JSON data to string.
    let data = JSON.stringify(userInfo);

    // Sending data with the request.
    xhr.send(data);
}