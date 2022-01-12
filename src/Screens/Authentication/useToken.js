import{useState} from 'react'

function useToken() {
// function to get token
const getToken=()=>{
    //sessionStorage belongs only to the specific window session. 
    //const tokenString= sessionStorage.getItem('token')
    //localStorage will save data even after the session ends.
    const tokenString= localStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
  }
  
const [token,setToken]= useState(getToken());
// Function to save imported token
const saveToken = userToken => {
    // sessionStorage.setItem('token', JSON.stringify(userToken));
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return{
      setToken:saveToken,
      token,
  }
}

export default useToken