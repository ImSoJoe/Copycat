//getting users from github
let apiToken = new ApiToken()
class GitHub{
  constructor(){
  this.client_id = 'cb0a380006cf04590522'
  this.client_secret ='206e12c282568d57e478ad60aa66c8158f1e408b'
  this.config = {
  headers:{
    Authorization:`token ${apiToken.token}`
  }}
} async getusers(user){
  const profileResponse = await fetch(`https://api.github.com/users/${user}
  `,this.config)
  const getProfileData = await profileResponse.json()
  
    return{
      getProfileData
    }
  

}}
