import Todolist from './components/todolist/todolist'
import useFetch from './custom-hooks/useFetch'
function App() {
  
  const data = useFetch('https://jsonplaceholder.typicode.com/posts')
  console.log(data)
  return (
    
    <div className="App">
      <Todolist/>
    </div>
  );
}

export default App;
