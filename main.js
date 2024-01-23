// class visacard {

//     constructor (refill , cashing, money) {
//         this.c = refill
//         this.cashing = cashing
//         this.money = money 
//     }
//     moneyMax(){
//         console.log("refill:"+ this.refill);
//     }

// }

// const rezult = new visacard("")
// rezult.moneyMax()

// class visacardmin extends visacard {
//     constructor ( refill,cashing) {
//         super(refill,cashing,0)
//     }
//     moneyMin(){
//         console.log( "cashing:" + this.cashing);
//     }
// }


// class remainder extends visacardmin{
//     constructor (refill,cashing,money){
//         super(refill,cashing,money)
//     }
//     mnrez (){
//         console.log("пополнение:" + this.refill + this.money);
//     }
//     mnrezu(){
//         console.log("обналичивание:" + this.money);
//     }

// }
// const cridit = new visacardmin("cashing:")
// cridit.moneyMin()
// cridit.mnrezu()

// class CreditCard {

//     constructor(){
//        this.balance=0
//     }
//     refill(amount){
//       let ref=this.balance+=amount; 
//       console.log(`Successfully refilled ${ref} into the credit card`);
   
//     }
//     cashing(amount){
//        if(this.balance>=amount){
//            this.balance-=amount
//            console.log(`Successfully cashed out ${amount}from the credit card`);
//        }
//        else{
           
//            console.log("В вашем карточке не дастаточно средства");
//        }
//     }
   
//     getAmount(){
//        console.log(this.balance);
//     }
        
//  }
   
//     const rec = new CreditCard ();
//     rec.refill(500)
//     rec.cashing(200)
//     rec.getAmount()
//     rec.refill(300)




const classt = document.querySelector(".pokemon")
const ul = document.querySelector(".ul-list")
const img = document.querySelector(".img")
const ulp = document.querySelector(".ul-pokemon")
    fetch("https://pokeapi.co/api/v2/pokemon/")


.then((pokemon) => {
    return pokemon.json();
})
.then((pokemon) => {
    console.log(pokemon);
    pokemon.results.forEach((pokemon) => {
        console.log(pokemon);
       const url = document.createElement("li")
       url.innerText = pokemon.name 
       url.classList.add("li-list")
       ul.append(url)
       url.addEventListener("click" , function (){
           fetch(pokemon.url)
           .then(res => res.json()
           )
           .then((res) => {
            ulp.innerHTML=""
            //    img.src = ""
               img.src = res.sprites.front_default
               classt.append(img)
               console.log(res);
               const name = document.createElement("li")
               name.innerText = pokemon.name
               name.classList.add(".li-pokemon")
            const type = document.createElement("li")
            type.innerHTML = res.base_experience
            // console.log(res.types[0].type.name);
            type.classList.add(".li-pokemon")
            
            const length = document.createElement("li")
            type.innerHTML = res.weight
            length.classList.add(".li-pokemon")
            ulp.append(name)
            ulp.append(length)  
            ulp.append(type)
               
            })
        })

        });

        
    })