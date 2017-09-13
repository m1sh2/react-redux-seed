import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
// import App from './components/Counter'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = store.getState()

    store.subscribe(() => this.setState(store.getState()))
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <h1>{this.state.app.message}</h1>
        </div>
      </Provider>
    )
  }
}
