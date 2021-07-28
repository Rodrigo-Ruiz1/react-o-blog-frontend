import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuotesList from './components/QuotesList';
import QuotesProfile from './components/QuotesProfile';
import './App.css';

const App = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    (async () => {
      const quotes = await _fetchQuotes();
      setQuotes(quotes)
    })();
  }, [setQuotes]);

  const _fetchQuotes = async () => {
    const url = 'http://127.0.0.1:3333/';
    const response = await fetch(url).then(response => response.json());
    console.log('Response from API: ', response);
    return response;
  }


  return (
    <div className="App">
      <Router>
      <div id="logoDiv">
        <h1>Random Quotes From</h1>
        <img src="https://fanart.tv/fanart/tv/73244/hdtvlogo/the-office-us-58ff233e655fe.png" id="logo" alt="logo"></img>
        </div>
        <Switch>
          <Route exact path='/'>
            <QuotesList quotes={quotes}/>
          </Route>
          <Route path='/quotes/:id'>
            <QuotesProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
