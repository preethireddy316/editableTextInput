import './App.css'

import {Component} from 'react'
// Replace your code here
class App extends Component {
  state = {
    text: '',
    isSaved: false,
  }

  buttonEle = () => {
    const isSaved = this.state
    if (isSaved) {
      return <button type="button">Edit</button>
    } else {
      return <button type="button">Save</button>
    }
  }

  render() {
    const {text} = this.state
    return (
      <>
        <div>
          <h1>Editable Text Input</h1>
          <input type="input" value={text} />
          {this.buttonEle()}
        </div>
      </>
    )
  }
}

export default App
