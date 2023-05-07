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
         console.log(commentContainer)
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

const LogIn = document.querySelector(".bntLogIn")

LogIn.addEventListener('click', createNewUser)

function createNewUser(){
    const userName = document.querySelector('.name').value
    const userGenero = document.querySelector('.genero').value
    const usersID = users.length

    const newUser = new User({
        name: userName,
        id: usersID,
        genero: userGenero
    })
    users.push(newUser)
    console.log(users)
}