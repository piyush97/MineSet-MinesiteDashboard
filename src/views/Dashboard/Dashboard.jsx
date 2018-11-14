import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Success from "components/Typography/Success.jsx";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <center>
                  <h1> Welcome to Talcher Mine </h1>
                </center>
              </CardHeader>
              <CardBody>
                  <GridItem xs={12} sm={12} md={12}>
                  <Success>
                   <b> Talcher also named as Coal City of Odisha is one of the fastest growing industrial and coal hubs in the state. Because of its huge coal reserves, the city has been ranked among the highest in terms of GDP in Odisha. It is also one of the 4 sub-divisions of Angul district in the Indian state of Odisha. Situated on the right bank of the river Brahmani, it is one of the fastest growing industrial and mining complexes of the country. The city is surrounded by the coalfields under MCL (Mahanadi Coalfields Limited) and has two Mega Power plants like NTPC, TTPS.</b>
                  </Success>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}><center>
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="someimage"
                      height="180px"
                    />
                  </center>
                </GridItem>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <center>
              <h1>WorkSpace</h1>
            </center>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart style={{ height: "300px" }}>
              <CardBody>
                <CardHeader color="warning">
                  <h1>
                    <center>Data Entry</center>
                  </h1>
                </CardHeader>
                <p style={{ fontSize: "20px", paddingTop: "18px" }}>
                  Periodic Data Entry of Air Quality, Water Quality and Ambient
                  Noise
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart style={{ height: "300px" }}>
              <CardBody>
                <CardHeader color="success">
                  <h1>
                    <center>Visual Analysis</center>
                  </h1>
                </CardHeader>
                <p style={{ fontSize: "20px", paddingTop: "18px" }}>
                  Graphs and Statistics of the available data
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart style={{ height: "300px" }}>
              <CardBody>
                <CardHeader color="primary">
                  <h1>
                    <center>Consent Orders</center>
                  </h1>
                </CardHeader>
                <p style={{ fontSize: "20px", paddingTop: "18px" }}>
                  Approved orders uploaded from the Mineside
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart style={{ height: "300px" }}>
              <CardBody>
                <CardHeader color="info">
                  <h1>Inspection Drives</h1>
                </CardHeader>
                <p style={{ fontSize: "20px", paddingTop: "18px" }}>
                  Approved orders uploaded from the Mineside
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart style={{ height: "300px" }}>
              <CardBody>
                <CardHeader color="info">
                  <h1>Mitigation Plans</h1>
                </CardHeader>
                <p style={{ fontSize: "20px", paddingTop: "18px" }}>
                  Recommended Actions in order to tackle address pollution
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
