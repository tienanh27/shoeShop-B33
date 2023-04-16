import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    const {productDetail} = this.props;

    const {name,
        alias,
        price,
        description,
        shortDescription,
        quantity,
        image} = productDetail

    return (
      <div>
           <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <strong class="modal-title" id="exampleModalLabel">Product Details</strong>
                            </div>

                            <div class="modal-body">
                                <div className="card" style={{width: '100'}}>
                                    <img src={image} alt="" className="card-img-top" />
                                        <div className="card-body" >
                                            <p>Name: {name}</p>
                                            <p>Alias: {alias}</p>
                                            <p>Price: {price}</p>
                                            <p>Description: {description}</p>
                                            <p>Short Description: {shortDescription}</p>
                                            <p>Quantity: {quantity}</p>
                                        </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}