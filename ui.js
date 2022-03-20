
class Ui{
constructor(){
this.profile = document.querySelector('.profile')

}
async displayProfile(user){
this.profile.innerHTML =`
<img src='${user.avatar_url}' id='img'>
<div>${user.name}</div>



`

}

}

