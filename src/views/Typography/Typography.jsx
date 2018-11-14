import React from "react";
// @material-ui/core components
// core components
// import Quote from "components/Typography/Quote.jsx";
// import Muted from "components/Typography/Muted.jsx";
// import Primary from "components/Typography/Primary.jsx";
// import Info from "components/Typography/Info.jsx";
// import Success from "components/Typography/Success.jsx";
// import Warning from "components/Typography/Warning.jsx";
// import Danger from "components/Typography/Danger.jsx";
import CustomInput from "components/CustomInput/CustomInput";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { Button } from "@material-ui/core";
import SweetAlert from "react-bootstrap-sweetalert";
import axios from "axios";

class TypographyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      SweetAlert: false,
      value: "",
      PM10: "",
      PM25: "",
      NO2: "",
      O3: "",
      CO: "",
      SO2: "",
      NH3: "",
      Pb: "",
      MobileNumber: ""
    };

    this.handlePM10 = this.handlePM10.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handlePM25 = this.handlePM25.bind(this);

    this.handleCO = this.handleCO.bind(this);

    this.handleMobileNumber = this.handleMobileNumber.bind(this);

    this.handleNH3 = this.handleNH3.bind(this);

    this.handleNO2 = this.handleNO2.bind(this);

    this.handleSO2 = this.handleSO2.bind(this);

    this.handlePB = this.handlePB.bind(this);

    this.handleO3 = this.handleO3.bind(this);

    this.hideAlert = this.hideAlert.bind(this);

    // this.sweetAlerter = this.sweetAlerter.bind(this);
  }

  handlePM10(event) {
    this.setState({ PM10: event.target.value });
  }

  handlePM25(event) {
    this.setState({ PM25: event.target.value });
  }

  handleCO(event) {
    this.setState({ CO: event.target.value });
  }

  handleMobileNumber(event) {
    this.setState({ MobileNumber: event.target.value });
  }

  handleNH3(event) {
    this.setState({ NH3: event.target.value });
  }

  handleNO2(event) {
    this.setState({ NO2: event.target.value });
  }

  handleSO2(event) {
    this.setState({ SO2: event.target.value });
  }

  handlePB(event) {
    this.setState({ Pb: event.target.value });
  }

  handleO3(event) {
    this.setState({ O3: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: "post",
      url:
        "https://ufb8l0zd71.execute-api.us-east-1.amazonaws.com/default/edit_csv2",
      data: {
        "location":"C",
        "PM10":13,
        "PM25":12,
        "NO2":172,
        "O3":23,
        "CO":256,
        "SO2":334,
        "NH3":412,
        "Pb":241,
        "number":[`+91${this.state.MobileNumber}`]
      },
      config: {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "8OlICBjgcw7SmSWwlcJOSrKvhVv9JuQ4kgDB2xY3"
        }
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  hideAlert() {
    this.setState({
      SweetAlert: false
    });
  }
  render() {
    return (
      <Card>
        {this.state.SweetAlert &&
          <SweetAlert success title="Success!" onConfirm={this.hideAlert}>
            Data Submitted Succesfully and is Available in the Data visualisation Section
          </SweetAlert>
        }
        <CardHeader color="primary">
          <h4> Prediction and Analysis of Data </h4>
        </CardHeader>
        <CardBody>
          <form onSubmit={this.handleSubmit}>
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "PM10",
                value: this.state.PM10,
                onChange: this.handlePM10
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "PM2.5",
                value: this.state.PM25,
                onChange: this.handlePM25
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "NO2",
                value: this.state.NO2,
                onChange: this.handleNO2
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "O3",
                value: this.state.O3,
                onChange: this.handleO3
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "CO",
                value: this.state.CO,
                onChange: this.handleCO
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "SO2",
                value: this.state.SO2,
                onChange: this.handleSO2
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "NH3",
                value: this.state.NH3,
                onChange: this.handleNH3
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "Pb",
                value: this.state.Pb,
                onChange: this.handlePB
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <CustomInput
              value={this.state.core}
              inputProps={{
                placeholder: "Mobile Number",
                value: this.state.MobileNumber,
                onChange: this.handleMobileNumber
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
            <center>
              <Button type="submit" value="Submit">
                Submit
              </Button>
            </center>
          </form>
        </CardBody>
      </Card>
    );
  }
}

export default TypographyPage;
