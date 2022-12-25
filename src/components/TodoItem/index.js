import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {eachItem, funtobepassed} = this.props
    const {title, id} = eachItem
    const fun = () => {
      funtobepassed(id)
    }

    return (
      <li className="item">
        <p>{title}</p>
        <button type="button" className="button" onClick={fun}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
