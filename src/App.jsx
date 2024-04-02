import { useState,useEffect, useRef, useMemo, createContext, useContext, useReducer } from 'react'
import Props from './Props';
import Todo from './Todo';
import UserInput from './Hook/UserInput';
import Images from './Images';

//Es6 Classes
class car{
  constructor(name){
    this.brand=name
  }
  show(){
    return 'I have a'+this.brand+'car '
  }
}

class Mycar extends car{
  constructor(name,model){
    super(name);
    this.model=model
  }

  p(){
    return this.show()+' in a' +this.model+' model'
  }
}

//Es6 Arrow Functions
const hello = val => "hello " +val


//Es6 ES6 Array Methods
const myarr=["ui","ux","frontend","backend","fullstack"]

//React ES6 Destructuring
const my = ['mustang', 'f-150', 'expedition'];

const [carr, truck, suv] = my;
console.log(carr);
console.log(truck);
console.log(suv);


//React ES6 Spread Operator
const one=[1,2,3,4]
const two=[5,6,7,8]
//list or array
const numbersCombined =[...one,...two]
console.log(numbersCombined);

const vehicle={
  brandd:"ford", //key: value
  colorr:"red",
  modell:"111"
}

const updatevehicle={
  brand:"Bmw",
  color:"blue",
  model:"123"
}

//objects
const myUpdatedVehicle ={...vehicle,...updatevehicle};


//React ES6 Ternary Operator
let authenticated = true;

function renderApp() {
  return(
    <>
      renderApp
    </>
  )
}

function renderLogin() {
  return(
    <>
     renderLogin
    </>
  )
}


//Use Context 
const UserContextt = createContext();


export const ACTION ={
  ADD_TODO:'add-todo',
  TOOGLE_TODO:'toogle_todo',
  DELETE_TODO:'delete_todo'
}

//usereducer
function reducer(todos,action){
  switch(action.type){
    case ACTION.ADD_TODO:
      return [...todos,createTodo(action.payload.name)]
      case ACTION.TOOGLE_TODO:{
        return todos.map(todo=>
          {
            if(todo.id===action.payload.id){
              return {...todo,completed: !todo.completed}
            }
            return todo;
          })
      }
      case ACTION.DELETE_TODO:
      return todos.filter(todo=> todo.id!=action.payload.id)
       
    default:
      return todos
  }
}

function createTodo(name){
  return {
    id:Date.now(),
    name:name,
    completed:false
  }
}

function App({a,b}) {
  const m=new Mycar('ford','1990');
  console.log(hello('world'))


  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;
  

  const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red',
    registration: {
      city: 'Houston',
      state: 'Texas',
      country: 'USA'
    }
  }

  const details={
    name:"rahulraj",
    age:21,
    course:"EEE"
  }

  //React UseState()
  let x=1;
  // const handlechange=()=>{
  //   x=x+1;
  //   console.log(x);
  // }

  const [count,setcount]=useState(0);

  const handlechange=()=>{
    setcount((num)=>{
      return num+1;
    })
  }
  //    [variable,function]-Destructuring
  const [car,setcar]=useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  })
  

  const updateColor = () => {
   setcar((car)=>{
      return  {...car,color:"yellow"} //-Destructuring spread operator
    })
  }

  //UseEffect
  const[num1,setNum1]=useState(100)
  const[num2,setNum2]=useState(1000)

  useEffect(()=>{
    setNum2(num1*2)
    console.log("use Effect");

    
    // return()=>{
    //   console.log("cleaned");
    //   setNum1(100)
    // }
  },[num1,num2])



  //useRef
  const [input,setInput]=useState("");

  const userefinput=useRef();


  useEffect(()=>{
    userefinput.current=input;
  },[input])

  const dispaly =() =>{
    userefinput.current.focus();
  }


  //React UseMemo() hook
  const [number,setNumber]=useState(0);
  const [dark,setDark]=useState(false);


  // const doublenumber=slowfunction(number)
  // const doublenumber=useMemo(()=>{
  //   return slowfunction(number); //usememo return value
  // },[number])

  //use state and use effect vachi hum pannalam 
  const [doublenumber,setDoublenumber]=useState(0)

  useEffect(()=>{
    setDoublenumber(slowfunction(number))
  },[number])



  // const themestyle={
  //   background: dark?"black":"white",
  //   color: dark?"white":"black"
  // }
  const themestyle=useMemo(()=>{
    return {
      background: dark?"black":"white",
     color: dark?"white":"black"
    }
  },[dark])


  //use Context
  //props drilling
  const [user,setUser]=useState("Rahul Raj")


  //use Reducer
  // const [state, dispatch] = useReducer( reducer,{count:0});

  const [todos,dispatch]=useReducer(reducer,[])
  const [name,setName]=useState('')



  //name value access in the 
  function handlechangee(e){
    e.preventDefault();
    dispatch({
      type:ACTION.ADD_TODO,
      payload:{
        name:name
      }
    })
    setName('')
  }

  // function increment(){
  //   dispatch(
  //     {
  //       type:'increment'
  //     }
  //   )
  // }

  // function decrement(){
  //   dispatch(
  //     {
  //       type:'decrement'
  //     }
  //   )
  // }

  console.log(todos);

  //custom hook
  // const [namee,setNamee]=useState('')
  const [firstname,bindfirstname,resetfirstname]=UserInput("")
  const handlesubmit =()=>{
    alert('hello '+ firstname)
    resetfirstname();
  }

  //map real world example
  //search and filter
  const arr=[
    {
      image:'images/3.png',
      name:'RAHUL RAJ 1',
      age: '22'
    },
    {
      image:'images/4.png',
      name:'rahul raj 2',
      age: 21
    },
    {
      image:'images/5.png',
      name:'rahul raj 3',
      age: 21
    }
  ]

  
  return (
    <>
      <div>
      <h1>Es6 Classes</h1>
        <h2>Car Information</h2>
        <p>{m.p()}</p>
        
      </div>

      <br />
      <h1>Es6 Array</h1>
      {myarr.map((val,index)=>(
        <ul key={index}>
          <li>{val} {index}</li>
        </ul>
      ))}
      

      <br />
      <h1>React ES6 Destructuring</h1>
      <p>Add: {add}, Subtract: {subtract}, Multiply: {multiply}, Divide: {divide}</p>
      <p>{vehicleOne.brand}</p>
      <p>{vehicleOne.registration.state}</p>
      <br />


      <h1>React ES6 Spread Operator</h1>
      {numbersCombined.map((val,index)=>(
         <ul key={index}>
         <li>{val} index= {index}</li>
       </ul>
      ))}
      <br />

      {Object.entries(myUpdatedVehicle).map(([key,value])=>(
        <span key={key}> 
        {key} : {value} <br />
        </span>
      ))}

      <br />

      <h1>React ES6 Ternary Operator</h1>
      <h2>{authenticated ? renderApp() : renderLogin()}</h2>

      <br />
      <h1>React Props</h1>
      
      <Props 
              // name={details.name} 
              // age={details.age}
              // course={details.course}
              {...details}
      />


      <br />
        <h1>React UseState</h1>
        {/* Problem */}
        <p>{count}</p>
        <button onClick={handlechange}>Add</button>


        <h1>{car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button onClick={updateColor}>change</button>

        
        <br />
        <h1>React UseEffects</h1>
        <p>{num1}</p>
        <button onClick={()=> setNum1((num1)=> num1+1) }>click</button>

        <p>{num2}</p>
        <button onClick={()=> setNum2((num2)=> num2+1) }>click</button>
        

        <h1>React useRef Hook</h1>
        <input type="text" 
        ref={userefinput}
        value={input} onChange={(e) => setInput(e.target.value)} />

        <p>p: {input}</p>
        <p>p: {userefinput.current}</p>
        <button onClick={dispaly}>click</button>


        <br />
        <h1>React UseMemo Hook</h1>
        <input type="number" value={number}  onChange={(e)=> setNumber(e.target.value)} />
        <button onClick={()=> setDark((curr)=> !curr)}>theme</button>

        <div style={themestyle}>{doublenumber}</div>

        <br />

        <h1>Recat UseContext</h1>
        <UserContextt.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 />
        </UserContextt.Provider>

        <br />

        <h1>React UseReducer</h1>
        {/* <button onClick={decrement}>-</button>
        <h1>{state.count}</h1>
        <button onClick={increment}>+</button> */}

        <form onSubmit={handlechangee}>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </form>
        {
          todos.map(todo=> <Todo todo={todo} dispatch={dispatch}/>)
        }

        <br />

        <h1>Custom Hook</h1>
        <input 
        type="text"  
        {...bindfirstname}
        />

        <button type='submit' onClick={handlesubmit}>submit</button>
        <br />

        <h1>real world example for .map</h1>
        <Images arr={arr} />
    </>

    
    
    
  );
}


export default App

function Component2(){
  return (
    <>
      <h1>Component 2</h1>
      <Component3/>
    </>
  )
}

function Component3(){
  return(
    <>
      <h1>Component 3</h1>
      <Component4  />
    </>
  )
}

function Component4(){
  return(
    <>
      <h1>Component 4</h1>
      <Component5  />
    </>
  )
}

function Component5(){
  const user = useContext(UserContextt);
  return(
    <>
      <h1>Component 5</h1>
      <h1>{`hello i'm ${user}`}</h1>
    </>
  )
}

function slowfunction(num){
  for(let i=0;i<100000000;i++){}
  return num*2;
}