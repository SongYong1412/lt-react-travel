import React, { Component } from "react";
import { Header, Footer, Carousel, SideMenu, ProductCollection, BusinessPartners } from '../../components';
import { Row, Col, Typography, Spin } from 'antd';
import { connect } from 'react-redux';
import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import styles from './HomePage.module.css'
import { giveMeDataActionCreator } from '../../redux/recommendProducts/recommendProductsActions';
import { RootState } from "../../redux/store";

const mapStateToProps = (state: RootState) => {
  return {
    productList: state.recommendProductsReducer.productList,
    loading: state.recommendProductsReducer.loading,
    error: state.recommendProductsReducer.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator());
    }
  }
}

type PropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends Component<PropsType> {
  componentDidMount () {
    this.props.giveMeData();
  }

  render () {
    const { productList, loading, error } = this.props;
    if (loading) {
      return (
        <Spin size="large" style={{ marginTop: 200, marginBottom: 200, marginLeft: "auto", marginRight: "auto", width: "100%" }} />
      )
    }
    if (error) {
      return (
        <div>网站出错：{error}</div>
      )
    }
    return (
      <div className={styles.App}>
      <Header />
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              周边当地旅游
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList[0].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              境内旅游
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList[1].touristRoutes}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              国内游推荐
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList[2].touristRoutes}
        />
        <BusinessPartners />
      </div>
      <Footer />
    </div>
    )
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageComponent);