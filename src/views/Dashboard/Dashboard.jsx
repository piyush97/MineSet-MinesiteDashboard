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
    return <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card chart>
              <CardHeader color="success">
                <center>
                  <h1>
                    Welcome to Mine <b>A</b>
                  </h1>
                </center>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={10}>
                    About Us
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                    <img src="https://updateodisha.com/wp-content/uploads/2016/11/Invest-Odisha.jpg" alt="someimage" height="100px" />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <center>
              <h1>WorkSpace</h1>
            </center>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart style={{height:"300px"}}>
              <CardBody>
                <CardHeader color="warning">
                <h1><center>Data Entry</center></h1>
                </CardHeader>
                <p style={{ fontSize: '20px', paddingTop: '18px' }}>
                  Periodic Data Entry of Air Quality, Water Quality and
                  Ambient Noise
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart style={{height:"300px"}}>
              <CardBody>
                <CardHeader color="success">
                <h1><center>Visual Analysis</center></h1>
                </CardHeader>
                <p style={{ fontSize: '20px', paddingTop: '18px' }}>
                  Graphs and Statistics of the available data
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart style={{height:"300px"}}>
              <CardBody>
                <CardHeader color="primary">
                  <h1>
                    <center>Consent Orders</center>
                  </h1>
                </CardHeader>
                <p style={{ fontSize: '20px', paddingTop: '18px' }}>
                  Approved orders uploaded from the Mineside
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart style={{height:"300px"}}>
              <CardBody>
              <CardHeader color="info">
                <h1>Inspection Drives</h1>
              </CardHeader>
              <p style={{ fontSize: '20px', paddingTop: '18px' }}>
                Approved orders uploaded from the Mineside
              </p>
              </CardBody>
            </Card>
          </GridItem>
        <GridItem xs={12} sm={12} md={6}>
            <Card chart style={{height:"300px"}}>
            <CardBody>
              <CardHeader color="info">
                <h1>Mitigation Plans</h1>
              </CardHeader>
              <p style={{ fontSize: '20px', paddingTop: '18px' }}>
                Recommended Actions in order to tackle address pollution
              </p>
            </CardBody>
          </Card>
        </GridItem>
        </GridContainer>
      </div>;
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
