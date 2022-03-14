//getting users from github
class GitHub{
  constructor(){
  this.client_id = 'cb0a380006cf04590522'
  this.client_secret ='206e12c282568d57e478ad60aa66c8158f1e408b'
  this.token = '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'
  }
  //this get the users
   async getusers(user){
  
  const profileResponse = await fetch(`https://api.github.com/users/${user}
  ?client_id=${user.client_id}&client_secret=${user.client_secret}`)
  const getProfileData = await profileResponse.json()

    return{
      getProfileData
    }
  
  
}}
