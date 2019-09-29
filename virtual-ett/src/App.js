import React from 'react';
import View from './containers/viewContainer'
// import ColorLeft from './containers/colorContainer/colorLeftContainer';
// import ColorRight from './containers/colorContainer/colorRightContainer';
// import LocationLeft from './containers/locationContainer/locationLeftContainer';
// import LocationRight from './containers/locationContainer/locationRightContainer';
// import ClientViewLeft from './containers/clientViewContainer/clientViewLeftContainer';
// import ClientViewRight from './containers/clientViewContainer/clientViewRightContainer';
import ClientViewLayout from './components/clientView/clientViewLayout';
// import Session from './components/session';
import OperatorView from './components/operatorView';
import './App.css';

class App extends React.Component {
  state = {
    display: 0
  }

  componentDidMount() {
  
  }
  changeView = (num) => {
    this.setState({display: num})
}

  render(){
    let content = null
    if (this.state.display === 0) {
      content = 
        <div className="show">
          <View changeView = {this.changeView} />
        </div>
    } else if (this.state.display === 1) {
      content = 
        <div className="show">
          {/* <ColorLeft />
          <LocationLeft />
          <ClientViewLeft display={this.state.display}/>
          <ColorRight />
          <LocationRight />
          <ClientViewRight display={this.state.display}/>
          <Session /> */}
          <OperatorView display={this.state.display}/>
      </div>
    } else if (this.state.display === 2) {
      content = 
        <div>
          <ClientViewLayout />
        </div>
    }
    return (
      <div>{content}</div>
    );
  }
}

export default App;