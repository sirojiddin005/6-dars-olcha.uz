import { Component } from "react";
import './footer.css'

const menu = [
  {
    id: 1,
    head: 'olcha.uz', 
    li1: 'Телефон поддержки', 
    li2: '+998 (71) 202 202 1', 
    li3: 'Козитарнов, Ташкент', 
    li4: 'info@olcha.uz', 
  },
  {
    id: 2,
    head2: 'Информация',
    li1: 'О компании',
    li2: 'Вакансии', 
    li3: 'Возврат и обмен товаров', 
    li4: 'Условия рассрочки', 
    li5: 'Помощь',
    li6: 'Доставка'
  },
  {
    id: 3,
    head3: '.',
    li1: 'Eco-friendly', 
    li2: 'Бонусы и акции', 
    li3: 'Оплата и доставка', 
    li4: 'Продавайте на olcha',
    li5: 'Сервисные центры'
  },
]

class Footer extends Component {
    render() {
        return <footer className="px-5">
        <div className='row text-start gap-3'>
          {
            menu.map((v) => {
              return <div key={v.id} className="col-5 col-sm-3 col-lg-2 p-0 pb-3 m-4 mt-0">
                <h5 className="olcha">{v.head}</h5> 
                <h5 className="info">{v.head2}</h5> 
                <h5 className="info2">{v.head3}</h5> 
                <ul>
                <li className="mt-4"><a href="">{v.li1}</a></li>
                <li><a href="">{v.li2}</a></li>
                <li><a href="">{v.li3}</a></li>
                <li><a href="">{v.li4}</a></li>
                <li><a href="">{v.li5}</a></li>
                <li><a href="">{v.li6}</a></li>
                 </ul>
               </div>
            })
          }          
     </div>
  </footer>
  }
}

export default Footer