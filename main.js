const users = [];
class User{
    constructor({name, id, genero}){
        {
            this.name = name,
            this._id = id,
            this.genero = genero
        }
    }
    comentar(content){
        const commentContainer = new comment({
            author: this.name,
            content: content,
        })
        //Renderizar comentario
        const areaRender = document.querySelector(".comentarios")
        const container = document.createElement("div")
        const author = document.createElement("h2")
            author.innerText = commentContainer.author
        const p = document.createElement("div")
            p.innerText = commentContainer.content
        const likes = document.createElement("div")
            likes.innerText = commentContainer.likes || 0

        container.appendChild(author)
        container.appendChild(p)
        areaRender.appendChild(container)
    }
}
class comment{
    constructor({author, content}){
        {
            this.author = author,
            this.content = content,
            this.likes = 0
        }
    }
}

//Log In & Log Out
const LogIn = document.querySelector(".bntLogIn")
const LogOut = document.querySelector(".logOut")

LogIn.addEventListener('click', createNewUser)
LogOut.addEventListener("click", deleteUser)

function createNewUser(){
    const userName = document.querySelector('.name').value
    const userGenero = document.querySelector('.genero').value
    const usersID = users.length
    if(users.length > 0){
        console.warn("No puedes loggear 2 usuarios al mismo tiempo")
    } else{
        const newUser = new User({
        name: userName,
        id: usersID,
        genero: userGenero
        })
        users.push(newUser)
    console.log(users)
    }
}
function deleteUser(){
    users.shift()
    console.log(users)
}

//Postear Comentarios
const postComment = document.querySelector(".postComment")

postComment.addEventListener("click", post)

function post(){
    const content = document.querySelector(".commentContent").value
    const usuarioLog = users[0]
    usuarioLog.comentar(content)
}
