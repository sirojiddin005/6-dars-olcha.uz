import { Component } from 'react';
import './App.css';
import main from './Components/Main/main.css';
import Header from './Components/Header/';
import Footer from './Components/Footer';
import Cards from './Components/Main/Cards';
import Sidebar from './Components/Sidebar/';

const CardsData = [
  {
    id: 1,
    img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlqxVY8L30dkg0O7-DmyyHIAE8_Y3vwhm76Q8bPMLCRyGU4clU',
    exposition1: 'Samsung Galaxy A33 5G 6/128GB Черный',
    sum1: '3 279 000',
    sum2: '443 000 x 12 мес',
    sign: 'В рассрочку'
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhc6q7wfPqPoe9lxrbg1dz3rKABCVpbZaErImFu_bMkTFbKSAi',
    exposition1: 'Redmi Note 12 Pro 4G (Global) Графитово-серый 8/256 GB ',
    sum1: '3 350 000',
    sum2: '443 000 x 12 мес',
    sign: 'В рассрочку'
  },
  {
    id: 3,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhzfSgrS3LQ--DPwaQkPbW1ue8ZEx2j8uIg&usqp=CAU',
    exposition1: 'Смартфон Xiaomi Redmi Note 11S 128GB 8 GB Графитово-серый ',
    sum1: '2 261 000',
    sum2: '360 000 x 12 мес',
    sign: 'В рассрочку'
  },
  {
    id: 4,
    img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTCU48A_Vo8sBTNUdUKDhDQzuUnwNMrRLfVgzCeiMY-uVdnP289',
    exposition1: 'Samsung Galaxy A14 (Global) Черный 4/64 GB ',
    sum1: '2 177 000',
    sum2: '289 000 x 12 мес',
    sign: 'В рассрочку'
  },
]

class App extends Component {
  constructor() {
    super()

    this.state = {
      basket: [],
      hide: true,
      mode: localStorage.getItem('mode') ? JSON.parse(localStorage.getItem('mode')) : []
   }
}

setMode = (v) => this.setState({mode: v})
setHide = (v) => this.setState({hide: v});

    buy = (product) => {
      this.setState((state) => {
        let arr = [...state.basket]
        arr.push(product)
        return {basket: arr}
      })
   }

 render() { 
  localStorage.setItem('mode', JSON.stringify(this.state.mode));
  console.log(this.state.basket);
    return (
    <div className={`${this.state.mode && 'dark'}`}>
      <Sidebar setHide={this.setHide} hide={this.state.hide}/>
      <Header basket={this.state.basket} setHide={this.setHide} setMode={this.setMode} mode={this.state.mode} />
      
       <div className="container-fluid p- text-center">        
        <div className="row">
         {
            CardsData.map((v) => <div key={v.id} className="col-md-4 col-sm-6 col-lg-3 mt-4">
              
            <Cards data={v} buy={() => this.buy(v)}/></div>)
         }
       
     </div>
     <hr className='mt-5' />
    </div>
      <Footer />
    </div>
   );
  }
}

export default App;
