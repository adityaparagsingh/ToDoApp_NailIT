import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// text-white font-bold text-2xl font-stretch-200% font-sans

function App() {
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])
  // const [count, setCount] = useState(0)

  useEffect(() => {
    let todoString = localStorage.getItem("list");
    if (todoString){
      let list = JSON.parse(localStorage.getItem("list"));
      setList(list);
    }
  }, [])
  

  const saveTodos=()=>{
    localStorage.setItem("list",JSON.stringify(list));
  }

  const handleEdit = (e,id) => {
    let t = list.filter(i=>i.id===id);
    setTodo(t[0].todo);
        let newTodos = list.filter(item=>{
      return item.id !== id 
    });
    setList(newTodos);
    saveTodos();
  }
  
  const handleDelete = (e,id) => {
    let newTodos = list.filter(item=>{
      return item.id !== id 
    });
    setList(newTodos);
    // console.log(index);
    saveTodos();
  }
  
  const handleAdd = () => {
    setList([...list, {id:uuidv4(),todo, isCompleted: false }]);
    setTodo("");
    saveTodos();
  }
  
  const handleChange = (e) => {
    setTodo(e.target.value);
    saveTodos();;
    // console.log(e.target.value)
  }
  
  const handleCheckbox = (e) => {
    let id = e.target.name;
    console.log(id);
    // list.filter()
    let index = list.findIndex(item=>{
      return item.id === id;
    })
    let newTodos = [...list];
    newTodos[index].isCompleted=!newTodos[index].isCompleted;
    setList(newTodos);
    console.log(index);
    saveTodos();
  }
  
  return (
    <>
      <Navbar />
      {/* <div className="container mx-auto"> */}
      <div className="bg-[#B999FF] lg:min-h-[80vh] p-4 lg:max-w-[50vw] mx-auto rounded-3xl m-6 sm:max-w-[50vh] sm:max-h-[100vh]">
        {/* <h1 >Your ToDos</h1> */}
        <h2 className='text-3xl mb-1 sm:flex sm:justify-center'>Add a ToDo</h2>
        <div className=" addTodo w-[50vw] mx-auto text-white flex mb-6 gap-0.5">
          <input onChange={handleChange} value={todo} className="rounded-full px-2 bg-[#7433FF9c] focus:outline-none w-[50%] sm:w-[90%] " type="text" />
          <button onClick={handleAdd} className='bg-[#7433ff9c] hover:bg-[#7433ff]  rounded-full w-10 h-10 cursor-pointer font-bold'>✚</button>
        </div>
        <hr className='my-2 border-t-2 border-purple-200'/>
        <h2 className='text-2xl mb-1'>Your ToDos</h2>
        <div className="list bg-[#DCCCFF] text-black rounded-3xl h-[70vh] p-2 hide-scrollbar overflow-auto">
          {list.length===0 && <div className='flex justify-center h-full items-center  font-bold text-3xl text-purple-800' >No ToDos to display :) <br/> Add a todo to display here!</div>}
          {list.map(item=>{
          return (<div key={item.id} className="listItem flex justify-between p-1 bg-[#B999FF] rounded-full mb-2 items-center">
            <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} className='ml-2 w-5 h-5 text-purple-600 accent-purple-600 focus:ring-0 rounded-md'/>
            <div className={`text w-[80%] text-2xl break-words ${item.isCompleted ? "line-through text-gray-500" : ""}`}>{item.todo}</div>

            <div className="button">
              <button onClick={(e)=>{(handleEdit(e,item.id))}}className='bg-[#7433ff9c] hover:bg-[#7433ff] rounded-full  cursor-pointer font-bold p-2 mx-0.5 text-white'>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M3.78181 16.3092L3 21L7.69086 20.2182C8.50544 20.0824 9.25725 19.6956 9.84119 19.1116L18.5 10.4527L13.5472 5.5L4.88841 14.159C4.30447 14.7429 3.91757 15.4947 3.78181 16.3092Z" fill="#ffffff"></path>
                  <path d="M3.78181 16.3092L3 21L7.69086 20.2182C8.50544 20.0825 9.25725 19.6956 9.84119 19.1116L20.4198 8.53288C21.1934 7.75922 21.1934 6.5049 20.4197 5.73126L18.2687 3.58024C17.495 2.80658 16.2406 2.80659 15.4669 3.58027L4.88841 14.159C4.30447 14.7429 3.91757 15.4947 3.78181 16.3092Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M14 6L18 10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </button>
              <button onClick={(e)=>{(handleDelete(e,item.id))}} className='bg-[#7433ff9c] hover:bg-[#7433ff] rounded-full  cursor-pointer font-bold  p-2  text-white'>
                <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.4" d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5H19.5Z" fill="#ffffff"></path>
                  <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                  <path d="M21 5.5H3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                  <path d="M16.0575 5.5L15.3748 4.09173C14.9213 3.15626 14.6946 2.68852 14.3035 2.39681C14.2167 2.3321 14.1249 2.27454 14.0288 2.2247C13.5957 2 13.0759 2 12.0363 2C10.9706 2 10.4377 2 9.99745 2.23412C9.89986 2.28601 9.80675 2.3459 9.71906 2.41317C9.3234 2.7167 9.10239 3.20155 8.66037 4.17126L8.05469 5.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                  <path d="M9.5 16.5L9.5 10.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                  <path d="M14.5 16.5L14.5 10.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                </svg>
              </button>
            </div>
          </div>)
        })}
        </div>
      </div>
      {/* </div> */}
    </> 
  )
}

export default App