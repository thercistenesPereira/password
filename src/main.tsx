import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/main.sass';

ReactDOM
  .createRoot(document.getElementById('root') as HTMLElement)
  .render(<App />);
