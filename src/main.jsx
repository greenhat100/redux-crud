import { render } from 'preact'
import './app.css'
import App  from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
