/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import { title, html } from './index.md';
import products from './products.json';

class HomePage extends React.Component {

  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className="container">
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <h2>New Products</h2>
        <div className="new-products-block">
          <ul className="row">
            {this.props.products.map((product, i) =>
              <li className="col-sm-4 col-md-3 text-center" key={i}>
                <div className="information">
                  <h3 className="title"><a href="/product-details" title="view detail">{product.title}</a></h3>
                  <a className="pic" href={"/product/" + product.id} title="view detail"><img className="img-responsive center-block" src={product.imgSrc} /></a>
                  <span className="price">{product.price} VNĐ</span>
                  <a className="cta-view-more" href="/product-details" title="Xem chi tiết">Xem chi tiết</a>
                  <a className="btn-addcart" href="javascript:;" title="Thêm vào giỏ hàng">Thêm vào giỏ hàng</a>
                </div>
              </li>
            )}
          </ul>
        </div>
      </Layout>
    );
  }

}

HomePage.defaultProps = {
  products: products
};

export default HomePage;
