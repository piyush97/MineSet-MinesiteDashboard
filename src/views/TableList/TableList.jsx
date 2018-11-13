import React from "react";
// @material-ui/core components
// core components
import ChartistGraph from "react-chartist";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Primary from "components/Typography/Primary.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import Warning from "components/Typography/Warning.jsx";
// import Danger from "components/Typography/Danger.jsx";
import {
  AirQuality,
  WaterQuality,
  completedTasksChart
} from "variables/charts.jsx";
import AccessTime from "@material-ui/icons/AccessTime";
import moment from "moment";

class TableList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acccordianchoice: ""
    };
  }
  componentDidMount() {
    window.setInterval(
      function() {
        var changes = moment().format("MMMM Do YYYY, h:mm:ss a");
        this.setState({
          acccordianchoice: changes
        });
      }.bind(this),
      3000
    );
  }

  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={AirQuality.data}
                type="Bar"
                options={AirQuality.options}
                responsiveOptions={AirQuality.responsiveOptions}
                listener={AirQuality.animation}
              />
            </CardHeader>
            <CardBody>
              <h4>
                <b>Monthly Average Air Quality Index</b>
              </h4>
              <Warning> Last Campaign Performance </Warning>
            </CardBody>
            <CardFooter chart>
              <div>
                <AccessTime /> campaign sent {this.state.acccordianchoice}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <Card chart>
            <CardHeader color="primary">
              <ChartistGraph
                className="ct-chart"
                data={WaterQuality.data}
                type="Bar"
                options={WaterQuality.options}
                responsiveOptions={WaterQuality.responsiveOptions}
                listener={WaterQuality.animation}
              />
            </CardHeader>
            <CardBody>
              <h4>
                <b>Monthly Average Water Quality Index</b>
              </h4>
              <Primary> Last Campaign Performance </Primary>
            </CardBody>
            <CardFooter chart>
              <div>
                <AccessTime /> campaign sent {this.state.acccordianchoice}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={WaterQuality.data}
                type="Bar"
                options={WaterQuality.options}
                responsiveOptions={WaterQuality.responsiveOptions}
                listener={WaterQuality.animation}
              />
            </CardHeader>
            <CardBody>
              <h4>
                <b>Monthly Average Noise Index</b>
              </h4>
              <Info> Last Campaign Performance </Info>
            </CardBody>
            <CardFooter chart>
              <div>
                <AccessTime /> campaign sent {this.state.acccordianchoice}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                responsiveOptions={completedTasksChart.responsiveOptions}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4>
                <b> Average Meterological Data </b>
              </h4>
              <Success> Last Campaign Performance </Success>
            </CardBody>
            <CardFooter chart>
              <div>
                <AccessTime /> campaign sent {this.state.acccordianchoice}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default TableList;
