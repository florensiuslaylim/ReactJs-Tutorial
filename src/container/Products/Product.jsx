import React, { Component, Fragment } from 'react';
import './Product.css'
import CardProduct from '../CardProduct/CardProduct'

class Product extends Component {
  state = {
    order: 4
  }

  handleCounterChange = (newValue) => {
    this.setState({ order: newValue })
  }

  handlePlus = () => {
    this.setState({ order: this.state.order + 1 })
  }
  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState({ order: this.state.order - 1 })
    }
  }

  render () {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="https://info.etanee.id/wp-content/uploads/2020/06/Logo-etanee-LEAF-GREEN-500px.png" alt=""></img>
          </div>
          <div className="troley">
            <img src="https://image.flaticon.com/icons/png/512/263/263142.png"></img>
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;