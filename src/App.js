import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Sidebar from './componets/pages/sidebar/Sidebar'
import Viewpro from './componets/pages/viewproduct/Viewpro';
import Productform from './componets/pages/Submitproform/Productform';

function App() {
  return (
    <div className="App">
      <Router>
    <div className='main__container'>
    <Sidebar/>
      <Routes>
      <Route path='/addpro' element={<Productform/>} />
      <Route path='/updatepro/:id' element={<Productform/>} />
     <Route path='/' element={<Viewpro/>} />
     
     </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
