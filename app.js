
const search = document.getElementById('search')
let gitHub = new GitHub()
let ui = new Ui()

search.addEventListener('keyup',e =>{
  const userText = e.target.value
  if(userText != ''){
    gitHub.getusers(userText).then(data =>{

      ui.displayProfile(data)
    })
   }
  
  
  
})