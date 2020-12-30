import "./App.css";
import {
  List,
  Card,
  Select,
  Typography,
  Row,
  Col,
  Button,
  Avatar,
  Space,
  Divider,
} from "antd";
import {
  CalendarOutlined,
  EyeOutlined,
  StarFilled,
  FieldTimeOutlined,
  AimOutlined,
  InfoCircleOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import data from "./components/data";
import React from "react";
import Meta from "antd/lib/card/Meta";
function App() {
  const { Text, Title } = Typography;
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const CostomHeder = (props) => {
    return (
      <Row
        className="main-header"
        style={{ paddingLeft: "20px" }}
        gutter={[16, 24]}
      >
        <Col span={24}>
          <Text style={{ color: "#000" }}>
            Search results from
            <Text
              strong
              style={{
                color: "salmon",
              }}
            >
              "Dos in All Catagoreis"
            </Text>
            &nbsp; with in
            <Text
              strong
              style={{
                color: "salmon",
              }}
            >
              &nbsp; "15 Kilometers"
            </Text>
          </Text>
        </Col>
        <Row justify="space-between" gutter={[16, 24]}>
          <Col
            span={12}
            className="items"
            style={{
              display: " flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              block
              type="text"
              style={{
                background: "transparent",
                width: "100px",
              }}
            >
              Shopes
            </Button>
            <Button
              block
              type="text"
              style={{
                borderRadius: "10px",
                background: "rgb(248, 167, 17)",
                width: "100px",
                borderColor: "rgb(248, 167, 17)",
              }}
            >
              Items
            </Button>
          </Col>
          <Col
            span={12}
            className="sortingContainer"
            style={{
              alignItems: "self-end",
              justifyContent: "right",
            }}
          >
            <Select
              defaultValue="sort by"
              className="sorting"
              style={{ width: 150 }}
              onChange={props.handleChange}
            >
              <Option value="kms">keliometer</Option>
              <Option value="ratings">ratings</Option>
              <Option value="price">Price</Option>
            </Select>
          </Col>
        </Row>
      </Row>
    );
  };
  // const Newfotter = (props) => {
  //   return (
  //     <footer className="page-footer">
  //       <p>
  //         &copy; All Rights are Reserved by <a href="#">Mnemonicx</a>
  //       </p>
  //     </footer>
  //   );
  // };
  const renderItem = (item) => {
    const titleStyle = {
      fontSize: ScWidth <= 700 ? "12px" : "1.1rem",
      fontWeight: ScWidth <= 700 ? "300" : "bold",
    };
    return (
      <section className="FoodsHolder" key={item.key}>
        <Row
          style={{
            background: "#FBE9E7",
          }}
        >
          <Col
            xl={{ span: 11, offset: 1 }}
            lg={{ span: 11, offset: 1 }}
            md={19}
            sm={19}
            xs={19}
            className="FoodsMainArea"
            style={{ alignItems: "center", justifyContent: "flex-end" }}
          >
            <div style={{ width: "100%" }}>
              <Text strong style={titleStyle}>
                {item.title.toUpperCase()}
              </Text>
            </div>
            <Space
              split={
                <Divider type="vertical" style={{ backgroundColor: "#000" }} />
              }
            >
              <Text
                strong
                style={{
                  color: "#F66574",
                  fontSize: ScWidth >= 800 ? "12px" : "10px",
                  textTransform: "uppercase",
                }}
              >
                {item.status.toUpperCase()}
              </Text>
              <Text
                strong
                style={{
                  color: "#0882C5",
                  fontSize: ScWidth >= 800 ? "12px" : "10px",
                  textTransform: "uppercase",
                }}
              >
                {item.offers.toUpperCase()}
              </Text>
              {/* <Text strong style={{color:"#F66574",fontSize:"16px",textTransform:'uppercase'}} >{item.status}</Text> */}
            </Space>
            <br />
            <Space
              split={
                <Divider type="vertical" style={{ backgroundColor: "#000" }} />
              }
            >
              <Text
                strong
                style={{
                  color: "#FF7D4C",
                  fontSize: ScWidth >= 800 ? "12px" : "10px",
                  textTransform: "uppercase",
                }}
              >
                <StarFilled /> &nbsp;
                {item.ratings <= 0 ? (
                  <Text
                    style={{
                      color: "#FF7D4C",
                      fontSize: ScWidth >= 800 ? "12px" : "10px",
                      textTransform: "uppercase",
                    }}
                    strong
                  >
                    0
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: "#FF7D4C",
                      fontSize: "12px",
                      textTransform: "uppercase",
                    }}
                    strong
                  >
                    {item.ratings}
                  </Text>
                )}
              </Text>
              <Text
                strong
                style={{
                  color: "#000",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                <FieldTimeOutlined /> &nbsp;
                {item.opnings}
              </Text>
              <Text
                strong
                style={{
                  color: "#000",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                <AimOutlined />
                &nbsp;
                {item.kms}
              </Text>
              <Text
                strong
                style={{
                  color: "#000",
                  fontSize: "12px",
                  textTransform: "uppercase",
                }}
              >
                <InfoCircleOutlined />
                &nbsp;
                {item.delivery.toUpperCase()}
              </Text>
            </Space>
          </Col>
          <Col
            className="foodBtnHolder"
            xl={{ span: 11, offset: 1 }}
            lg={{ span: 11, offset: 1 }}
            md={5}
            sm={5}
            xs={5}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              className="viewAllBtn"
              type="link "
              size={window.innerWidth >= 800 ? "small" : "middle"}
              style={{
                color: "#000",
              }}
              icon={<EyeOutlined />}
            >
              {window.innerWidth <= 800 ? "" : "VIEW ALL ITEMS"}
            </Button>
            <Button
              size={window.innerWidth >= 800 ? "small" : "middle"}
              style={{ background: "#FBE9E7" }}
              className="bookBtn"
              icon={<CalendarOutlined />}
            >
              {window.innerWidth <= 800 ? "" : "BOOK APPONTMENT"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {item.foods.map((i) => (
              <>
              <Card bordered={false} style={{ width: "100%" }}>
                <Space align="start" style={{ width: "100%" }} split={""}>
                  <Meta
                    avatar={
                      <Avatar
                        shape="square"
                        size={ScWidth <= 700 ? 40 : 60}
                        src={i.imgUrl}
                      />
                    }
                  />
                  <div style={{ width: "100%" }}>
                    <Text strong style={titleStyle}>{i.foodTitle.toUpperCase()}</Text>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    {i.variant
                      ? i.variant.map((e) => (
                          <span
                            className="vari"
                            style={{
                              background: "#EBF6FC",
                              color: "#1D7CD1",
                              fontSize:
                                window.innerWidth <= 800 ? "8px" : "small",
                              padding: "2px",
                              margin: "5px",
                              borderWidth: ".8px",
                              borderColor: "#1D7CD1",
                            }}
                          >
                            {e.toUpperCase()}
                          </span>
                        ))
                      : null}
                  </div>
                </Space>
               
                <Space
                  style={{
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    width: "100%",
                  }}
                  align="center"
                  className="InnerCardSection"
                >
                  <Text strong> RS &nbsp;{i.price}</Text>
                  <Button
                    size={ScWidth <= 800 ? 100 : "middle"}
                    type="primary"
                    style={{ backgroundColor: "#AAA", borderColor: "#aaa" }}
                    icon={<PlusOutlined />}
                  >
                    {window.innerWidth <= 700 ? "" : "ADD"}
                  </Button>
                </Space>
              </Card>
             
              </>
            ))}
          </Col>
        </Row>
      </section>
    );
  };
  const [ScWidth, setScWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    setScWidth(window.innerWidth);
  }, [ScWidth]);
  return (
    <div className="App">
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        <List
          grid={{
            gutter: 16,
            lg: 1,
            xl: 1,
            md: 1,
            sm: 1,
            xs: 1,
            xxl: 1,
          }}
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
          header={<CostomHeder handleChange={handleChange} />}
          // footer={<Newfotter />}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={renderItem}
        />
      </div>
    </div>
  );
}

export default App;
