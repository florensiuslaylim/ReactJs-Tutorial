import React, { Component } from 'react';

class Product extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue)
  }

  handlePlus = () => {
    this.setState({ 
        order: this.state.order + 1 
    }, () => {
        this.handleCounterChange(this.state.order);
    })
  }
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({ 
          order: this.state.order - 1 
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }
  }

  render () {
    return (
        <div className="card">
          <div className="img-thumb-prod">
            <img src="https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/1/14/476717782/476717782_e7e26483-1349-45cf-8de2-aa42dd515646_1084_1084.jpg" alt="product_image" />
          </div>
          <p className="product-title">Daging Ayam Berbumbu Rasa Original plus tepung crispy</p>
          <p className="product-price">Rp 410.000</p>
          <div className="counter">
            <button className="minus" onClick={this.handleMinus}>-</button>
            <input type="text" value={this.state.order} class="text-count" />
            <button className="plus" onClick={this.handlePlus}>+</button>
          </div>
        </div>
    );
  }
}

export default Product;