import React, { Component } from 'react'

class Cards extends Component {
    constructor() {
        super();
      }
  render() {
    const {img, sum1, sum2, exposition1, sign} = this.props.data
    return <div className='cards p-3'>
      <div className="img">
      <img className='w-50' src={img} alt="" />
      </div>
    <div className='text'>
     <a href="" className='a1'><p className='mt-2 text-start'>{exposition1}</p></a> 
     </div>
     <p className='text-start mb-2 fw-bold fs-5'>{sum1 + ' сум'}</p>
     <p className='text-start mb-5 sum2'>{sum2}</p>
     <div className="d-flex">
     <div className='korzina btn btn-outline-dark border-2 me-2'onClick={this.props.buy}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg></div>
     <div className="btn btn-outline-danger border-2 p-1 w-100">{sign}</div>
     </div>
    </div>   
  }
}

export default Cards