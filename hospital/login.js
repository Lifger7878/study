function getAllCards(){
    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then ((res) => res.json())
    .then ((res) =>{
        console.log(res)
        const cardWrapper = document.querySelector(".card-wrapper")
        res.forEach((item)=>{
console.log(item)
 cardWrapper.append(createCard(item))
        })
    })

}

const form = document.querySelector("#login");
const buttonOpenModalCreateVisit = document.querySelector(".button-visit")
const card = document.querySelector(".card-wrapper")
const createVisitButton = document.querySelector("#buttonCreateModal")
if (localStorage.getItem("token")){
    button.style.display="block"
    form.style.display="none"
    card.style.display="block"
}

 form.addEventListener(`submit`, function(event){
    event.preventDefault()
    const email = document.querySelector(`.email`).value
    const password = document.querySelector(`.password`).value
    const errorLogin = document.querySelector(`.errorLogin`)
    console.log(email, password)
    if(!email && !password){
        errorLogin.textContent = `Введіть емеіл та пароль`
    }
        if(email && !password){
            errorLogin.textContent = `Введіть емеіл та пароль`
        }
            if(!email && password){
                errorLogin.textContent = `Введіть емеіл та пароль`
    }

    if (email && password){
        fetch("https://ajax.test-danit.com/api/v2/cards/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,password
            })

        })
        .then((value) => value.text())
        .then((res) =>{
            localStorage.setItem("token", res)
            console.log(res)
            form.style.display="none"
            formSearch.style.display = "flex"
        })
    }
    
 })
const isLogin = false


buttonOpenModalCreateVisit.addEventListener("click", ()=> {
    $("#createModal").modal('show')
})

createVisitButton.addEventListener("click", ()=>{
    fetch("https://ajax.test-danit.com/api/v2/cards", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  },
  body: JSON.stringify({
    title: document.getElementById("titleModal").value,
    description: document.getElementById("textModal").value,
    doctor: document.getElementById("doctorTypeModal").value,
  })
})
  .then(response => response.json())
  .then(response => {
    console.log(response)
    getAllCards()
})
})

function createCard(item){
    const conteinerCard = document.createElement("div")
    conteinerCard.classList.add("card")
    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    const cardTitle = document.createElement("h5")
    cardTitle.classList.add("card-title")
    cardTitle.textContent = item.title
    const cardSubtitle = document.createElement("h6")
    cardSubtitle.classList.add("card-subtitle")
    cardSubtitle.textContent = item.doctor
    const cardText = document.createElement("p")
    cardText.classList.add("card-text")
    cardText.textContent = item.description
    const cardLink= document.createElement("a")
    cardLink.classList.add("card-list")
    cardLink.textContent = "Видалити запис"

    cardBody.append(cardTitle,cardSubtitle,cardText,cardLink)
    conteinerCard.append(cardBody)

    return conteinerCard
}
getAllCards()  


