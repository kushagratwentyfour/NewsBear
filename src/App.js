import './App.css';
import { Component } from 'react';
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

 
export default class App extends Component {
  key=process.env.REACT_APP_NEWS_API
  state = {
progress:0

  }
  setProgress=(progress)=>{

    this.setState({
progress:progress

    })
  }
  render() {

    return (
      
        <div style={{ backgroundColor: '#2D2E2E'}}>
          
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
        <Route exact path="/"><News setProgress={this.setProgress} apikey={this.key}  key="general1" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apikey={this.key} key="business" pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apikey={this.key} key="entertainment"  pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apikey={this.key} key="health" pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apikey={this.key} key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apikey={this.key} key="sports" pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apikey={this.key} key="technology" pageSize={5} country="in" category="technology"/></Route>
        </Switch>
        </Router>

        </div>
      
    )

  }

}

// function App() {
//   return (

//     </div>
//   );
// }

// export default App;
