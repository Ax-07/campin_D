import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '/src/App.jsx';
import '/src/assets/scss/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/P8-openClassRooms/">
    <App />
  </BrowserRouter>,
)
