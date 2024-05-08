// 项目的根组件

// app -> index,js -> public/index.html -> root div

// const count = 100;
// function getName(){
//   return "Eric"
// }
import { useState } from 'react'
import './index.css'
const list = [
  {id: 1, name: 'Eric'},
  {id: 2, name: 'Tom'},
  {id: 3, name: 'Jerry'}
]
const isLogin = true;

const articleType = 1 // 0 1 3

function getArticleTem(){
  if(articleType ===0){
    return <div>article type 0</div>
  } else if(articleType === 1){
    return <div>article type 1</div>
  } else {
    return <div>article type 3</div>
  }
}

// function Button() {
//   return <button>click me</button>
// }

const Button = () => {
  return <button>click me</button>

}

const style = {
  color: "green",
  fontSize: "50px"

}

// use useState to create a count simulater
function App() {
  // 事件参数
  // const handleClick = (event) => {
  //   console.log('click me', event)
  // }
  //自定义参数
  // const  handleClick = (name) => {
  //   console.log('click me', name)
  // }
  //事件对象 和 自定义参数
  // const handleClick = (name, e) => {
  //   console.log('click me', name, e)
  // }

  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   setCount(count + 1)
  // }

  const [form, setForm] = useState({name: "jack"})
  const changeForm = () => {
    setForm(
      {
        ...form, // 展开form
        name: "rose"
      }
    )
  }

  return (
    <div className="App">
     {/* this is app */}
     {/* {'this is message'}
     {count}
     {getName()}
     {new Date().getDate()}
     <div style={{color: "red"}}>this is div</div> */}
     {/* <ul>
      {list.map(item => <li key={item.id}>{item.name}</li>)}
     </ul>
     {isLogin && <span>this is span</span>}
     {isLogin ? <span>this is span</span> : <div>this is div</div>}
     {getArticleTem()} */}
     <Button></Button>

     <div>
       {/* <button onClick = {handleClick}>click me</button> */}
       {/* <button onClick = {() => handleClick("jack")}>click me</button> */}
       {/* <button onClick = {(e) => {handleClick("jack",e)}}>click me</button> */}
     </div>

     {/* <button onClick= {handleClick}>{count}</button> */}
     <button onClick ={changeForm}>{form.name}</button>

     <span style={style}>this is span</span>
     <span className= "foo"> this is class foo</span>
    </div>
  );
}

export default App;
