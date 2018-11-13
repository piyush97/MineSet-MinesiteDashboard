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
      5000
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
              <h4><b>Monthly Average</b> Air Quality Index</h4>
              <p> Last Campaign Performance </p>
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
              <h4><b>Monthly Average</b> Water Quality Index</h4>
              <p> Last Campaign Performance </p>
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
                <b>Monthly Average</b> Noise
                Index
              </h4>
              <p> Last Campaign Performance </p>
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
                className="ct-chart"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                responsiveOptions={completedTasksChart.responsiveOptions}
                listener={completedTasksChart.animation}
                />
            </CardHeader>
            <CardBody>
              <h4>
                <b>Monthly Average</b> Meterological
                Data
              </h4>
              <p> Last Campaign Performance </p>
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
