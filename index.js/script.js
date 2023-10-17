// membuat progam pengecekan user

// function untuk melakukan pengecekan userberdasarkan data user
function CekUser(data_username,data_password){
    let user = [
        ['admin' ,'admin123'],
        ['santri' ,'santri123'],
        ['okita' ,'okitasama']
    ]

    for (user of user){
        let u = user[0]  //ini adalah username
        let p = user[1]  //ini adalah password

        if(u == data_username && p == data_password)
        {
            window.location = "home.html"
        }
    }
}

function login(){
    let username = document.getElementById('username').value

    let password  = document.getElementById('password').value

    if (username.length < 1 || password.length <1 )
     {
        alert("isi username terlebih dahulu")
    }

    else if (password.length < 8)
    {
        alert("password minimal 8 karakter")
    }
    else {
        CekUser(username, password)
    }
}
document.getElementById('simpan').addEventListener('click',login)