import "./App.css";
import { generateToken } from "./actions/authenticationActions";
function App() {
  // var platform = new H.service.Platform({
  //   apikey: "1NASa-QTGazkqwwCOZjMjqgLCLGmBTAvSB4afPNzMbQ",
  // });
  generateToken();
  fetch(
    `https://discover.search.hereapi.com/v1/discover?apiKey=3jrqPg29rurQRzN_TL2cioMVYHodcbeTUwaw_GqFH-A&lang=en-US&q=petrol+station&at=52.5228,13.4124`
  ).then((res) => console.log("fetch", res.json(), res.body));
  return <div className="App">here</div>;
}

export default App;
