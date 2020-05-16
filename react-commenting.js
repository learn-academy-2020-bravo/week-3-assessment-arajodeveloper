// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.this creates the state of the component with a blank string for userInput
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. when the user inputs, we update the state with the new input
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. it is rendering what user inputs using destructuring method.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* when user changes anything in the input, we call this.robot method */}
          onChange={ this.robot }
          {/* show the userInput (from this.state) in this input box */}
          value={ userInput }
        />

        <div>
          {/* add a good robot component */}
          <GoodRobot
            {/* pass the userInput from this.state as a prop to the good robot */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. jsx template for good robot
      <div>
        <h3>Good Robot</h3>
        {/* show userInput (from props) in an h4 element  */}
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Each js file must have export default matching the file name to make the code work
export default GoodRobot
