


function fetchDataCallback() {
    return fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr")
  
      .then((response) => {
       return response.json().then((response) => {console.log(response); return response} );
  
      })
      .catch((error) => {
        //error handling
        console.log(error);
      });
  };

  export default fetchDataCallback