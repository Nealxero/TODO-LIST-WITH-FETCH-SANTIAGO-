import React, { useEffect, useState } from "react";

//include images into your bundle

//create your first component


const Home = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

////// paso 1 para cargar los datos ////////

  const cargaInicial = () => { 
    var auxHolder = fetchDataCallback();
    console.log(auxHolder)
  }
  cargaInicial()

////////////                      ///////////
////////------recibir informacion de la API--------///////////
  const handleSubmit = (e) => {
    e.preventDefault()
    todosAddData();
  }
  
  /////---------------------------------------------------------------/////
  
  const todosDeleteData = async (id) => {
    const todosNew = todos.filter((todo) => todo.id !== id);
    await udpateFetch(todosNew)
    setTodos(todosNew);
  };

  const todosAddData = async () => {
    const todosNew = [...todos,{ label: todo, done: false, id:Date.now()+ todo}];
    await udpateFetch(todosNew)
    setTodos(todosNew);
  }
  
  useEffect(() =>{
    fetchDataCallback().then( response => setTodos(response.map(item =>({... item, id : Date.now()}))))
  }, []);



/////----------------------------------------------------------------------////
  return (<div className="Porfa">
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>
	  <div>
      {todos.map((todo) => (
        <div key={todo.id} className="text-center" >
          <div className="Caja" style={{display:"flex"}}>
            <div>{todo.label}</div>
            <button onClick={() => todosDeleteData(todo.id)}>X</button>{" "}
          </div>
        </div>
      ))}
	  </div>
    </div>
	</div>
  );
};

/////////////////////////////--------
const udpateFetch = (todos) =>
  fetch("https://assets.breatheco.de/apis/fake/todos/user/alesanchezr", {
    method: "PUT",
    body: JSON.stringify(todos),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((response) => {
    return response.json().then((response) => {console.log(response); return response} );

   }).catch((err) => {
    console.log(err);
    return false;
  });

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
////////////////////////////////----------
export default Home ;