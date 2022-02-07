import React, { Component } from "react";

class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products

    //this.props.history.push("/products");
    //Using push we can go back to pevious page.

    this.props.history.replace("/products");
    //Using replace we cannot go to pevious page, This is often used when a user logs in and goes to a new page, If he click back button we dont want him to go back to login page.
  };

  render() {
    return (
      <div>
        <h1>Product Details -{this.props.match.params.id} </h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;
