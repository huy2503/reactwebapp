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
import details from './details.json';

class ProductPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    var id = this.props.route.params.id;
    return (
      <Layout className="container">
        <h2>Product {id}</h2>
        <div className="detail-block">
          <div className="row">
            <div className="col-sm-3">
              <img className="img-responsive center-block" src={details.imgSrc} alt={details.text.replace('#{id}', id)} />
            </div>
            <div className="col-sm-9">
              <h3 className="title">{details.title.replace('#{id}', id)}</h3>
              <span className="price">{details.price} VNĐ</span>
              <div className="desc">
                <p>{details.description}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

ProductPage.defaultProps = {
  details: details
};

export default ProductPage;
