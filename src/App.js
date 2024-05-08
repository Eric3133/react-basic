// 项目的根组件

// app -> index,js -> public/index.html -> root div

// const count = 100;
// function getName(){
//   return "Eric"
// }
const list = [
  {id: 1, name: 'Eric'},
  {id: 2, name: 'Tom'},
  {id: 3, name: 'Jerry'}
]
function App() {

  return (
    <div className="App">
     this is app
     {/* {'this is message'}
     {count}
     {getName()}
     {new Date().getDate()}
     <div style={{color: "red"}}>this is div</div> */}
     <ul>
      {list.map(item => <li key={item.id}>{item.name}</li>)}
     </ul>
    </div>
  );
}

export default App;
