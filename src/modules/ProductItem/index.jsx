import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { data ,showDetail} = this.props
    return (
      <div>
         <div className="card">
                        <img src={data.image} alt="" />
                        <div className="card-body">
                            <p>{data.name}</p>
                            <p>${(data.price).toLocaleString()}</p>
                            <button className='btn btn-outline-warning' data-toggle="modal" data-target="#exampleModal" onClick={showDetail}>Show details</button>
                        </div>
                    </div>
      </div>
    )
  }
}