import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TodoList from './component/todo/TodoList';
import Color from './component/Utilities/Color';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NoMatch from './component/NoMatch';
import NavBar from './component/NavBar/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/color" element={<Color />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>

  </>


);

reportWebVitals();
