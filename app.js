
const search = document.getElementById('search')
const gitHub = new GitHub()
const ui = new Ui()

search.addEventListener('keyup',e =>{
  const userText = e.target.value
  if(userText != ''){
    gitHub.getusers(userText).then(data =>{

      ui.displayProfile(data)
    })
   }
  
  
  
})