import React, { Component } from 'react'
import './Sidebar.css'

const ul = [
  {id: 1, li: 'О компании'},
  {id: 2, li: 'Вакансии'},
  {id: 3, li: 'Возврат и обмен товаров'},
  {id: 4, li: 'Условия рассрочки'},
  {id: 4, li: 'Помощь'},
  {id: 4, li: 'Доставка'},
];

export class Sidebar extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    // console.log(this.props);
    return (
      <div className={`sidebar ${this.props.hide && 'hide'}`}>
        <div className="d-flex align-items-center justify-content-between mb-5">
        <h2>Menu</h2>
        <h1 className="btn" onClick={() => this.props.setHide(true)}>X</h1>
        </div>
        {
          ul.map((v) => {
            return <ul className='p-0 m-0 mt-3' key={v.id} >
              <li>
                <a href="">{v.li}</a>
              </li>
            </ul>
          })
         }        
      </div>
    )
  }
}

export default Sidebar