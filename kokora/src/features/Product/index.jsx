import React, { useState } from "react";
import "./product.scss";
import "antd/dist/antd.css";
import TableProduct from "features/Product/Components/TableProduct/TablePro";
import ProductModal from "./Components/Modal/ProductModal";
import ProductModalList from "./Components/Modal/ProductModalList";
import { Col, Row, Collapse, Affix, List } from "antd";
import Header from "components/Header";
import {
  Row1Collapse,
  SearchInput,
  HeaderButton,
  Row22Table,
} from "./StyleProduct";
import ProductAddEdit from "./Components/AddEditDel/ProductAddEdit";

const { Panel } = Collapse;
const { Search } = SearchInput;
const onSearch = (value) => console.log(value);

function callback(key) {
  console.log(key);
}

function Product() {
  return (
    <div>
      {/* <Header /> */}
      <Row className="product">
        <Col className="product__col1">
          <div className="product__co1Header">
            <label className="product__label">Sản phẩm</label>
          </div>
          <Row className="product__row11">
            <Row1Collapse defaultActiveKey={["1"]} onChange={callback}>
              <div className="product__modalTag">
                <ProductModal />
              </div>
              <Panel
                header="Danh mục sản phẩm"
                key="1"
                style={{ width: "275px" }}
              >
                <div className="product__Box">
                  <Search
                    placeholder="TÌm kiếm nhóm hàng"
                    onSearch={onSearch}
                  />
                  <div className="product__listItem">
                    <div className="product__item">
                      Thuốc
                      <ProductModalList />
                    </div>
                    <div className="product__item">
                      Đồ uống
                      <ProductModalList />
                    </div>
                    <div className="product__item">
                      Thời trang nam
                      <ProductModalList />
                    </div>
                    <div className="product__item">
                      Thới trang nữ
                      <ProductModalList />
                    </div>
                  </div>
                </div>
              </Panel>
            </Row1Collapse>
          </Row>
          <Row className="product__row12">
            <Row1Collapse defadivtActiveKey={["1"]} onChange={callback}>
              <ProductModal />
              <Panel
                header="Danh sách đơn vị tính"
                key="1"
                style={{ width: "275px" }}
              >
                <div className="product__Box">
                  <Search
                    placeholder="TÌm kiếm nhóm hàng"
                    onSearch={onSearch}
                  />
                  <div className="product__listItem">
                    <div className="product__item">
                      Chiếc <ProductModalList />
                    </div>
                    <div className="product__item">
                      Cái <ProductModalList />
                    </div>
                    <div className="product__item">
                      Gói <ProductModalList />
                    </div>
                    <div className="product__item">
                      Tá <ProductModalList />
                    </div>
                  </div>
                </div>
              </Panel>
            </Row1Collapse>
          </Row>
        </Col>

        <Col className="product__col2">
          <Affix>
            <Row className="product__col2Header">
              <div className="product__search">
                <Search placeholder="Mã, tên sản phẩm" onSearch={onSearch} />
              </div>
              <div className="product__listButton">
                <HeaderButton type="primary">Xuất excel</HeaderButton>
                <HeaderButton type="primary">Nhập excel</HeaderButton>
                <HeaderButton type="primary">Thêm mới</HeaderButton>
              </div>
            </Row>
          </Affix>
          <Row className="product__row22">
            <TableProduct />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Product;
