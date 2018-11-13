import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
// import Quote from "components/Typography/Quote.jsx";
// import Muted from "components/Typography/Muted.jsx";
// import Primary from "components/Typography/Primary.jsx";
// import Info from "components/Typography/Info.jsx";
// import Success from "components/Typography/Success.jsx";
// import Warning from "components/Typography/Warning.jsx";
// import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Button } from "@material-ui/core";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <Card>
        <CardHeader color="primary">
          <h4> Prediction and Analysis of Data </h4>
        </CardHeader>
        <CardBody>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="Mine Name"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input placeholder="PM10" />
            <input placeholder="PM25" />
            <input placeholder="NO2" />
            <input placeholder="O3" />
            <input placeholder="CO" />
            <input placeholder="SO2" />
            <input placeholder="NH3" />
            <input placeholder="Pb" />
            <Button type="submit" value="Submit" >
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(TypographyPage);
