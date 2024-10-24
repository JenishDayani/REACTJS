import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>Hello world!</h1> */}
      <h1 className='bg-green-800 text-black p-4 rounded-full'>
        Jenish Dayani!
      </h1>
      <Card userName='Jenish' btnText='Click me' />
      <Card userName='Het' />
    </>
  );
}

export default App;
