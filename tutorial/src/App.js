import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
<>

 <Navbar title="TextUtils" about="About TU" />
 {/* <Navbar /> */}
 <div className="container my-3">
   <TextForm heading="Enter text here👇🏻"/>
   <About/>
 </div>


</>
  );
}

export default App;
