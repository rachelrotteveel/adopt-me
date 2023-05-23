import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams/>
    </div>
  ) 
}

// In React 18, this will be called React.createRoot()
render(<App/>, document.getElementById("root"));
