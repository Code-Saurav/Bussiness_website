//html code inside the jsx function : 
import ExpenseItem from  './components/ExpenseItem'

function App() {
  return (
   <div>
    <h2>
      Hello world
    </h2>
    <ExpenseItem></ExpenseItem>
   </div>
  );
}

export default App;

// Imperative approach : <p>This is also visible </p>
// const para = document.createElement('p');
// para.textContent = 'This is also visible';
// document.getElementById('root').append(para)