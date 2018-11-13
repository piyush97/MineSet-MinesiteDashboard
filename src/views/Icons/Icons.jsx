import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";
import Info from "components/Typography/Info.jsx";
import { Button } from "@material-ui/core";
import pdfMake from "pdfmake/build/pdfmake";
import Logo from "../../assets/img/O.jpg";
import pdfFonts from "pdfmake/build/vfs_fonts";
class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      core: "",
      buffer: "",
      sample1: "",
      sample2: "",
      IndDay: "",
      IndNight: "",
      ResDay: "",
      ResNight: ""
    };

    this.download = this.download.bind(this);

    this.handleChangCore = this.handleChangCore.bind(this);

    this.handleChangBuffer = this.handleChangBuffer.bind(this);

    this.handleChangIndDay = this.handleChangIndDay.bind(this);

    this.handleChangIndNight = this.handleChangIndNight.bind(this);

    this.handleChangsample1 = this.handleChangIndNight.bind(this);

    this.handleChangsample2 = this.handleChangIndNight.bind(this);
  }

  handleChangCore(event) {
    this.setState({ core: event.target.value });
  }
  handleChangBuffer(event) {
    this.setState({ buffer: event.target.value });
  }
  handleChangsample1(event) {
    this.setState({ sample1: event.target.value });
  }
  handleChangsample2(event) {
    this.setState({ sample2: event.target.value });
  }
  handleChangIndDay(event) {
    this.setState({ IndDay: event.target.value });
  }
  handleChangIndNight(event) {
    this.setState({ IndNight: event.target.value });
  }

  download() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = {
      content: [
        {
          text: "MineSet Report",
          style: "header",
          image: Logo,
          width: 150
        },
        {
          text: `Air Quality: 
          Core Values: ${this.state.core}
          Buffer Values: ${this.state.buffer} 
          Surface Water Analysis
          Sample 1 Value: ${this.state.sample1}
          Sample 2 Value: ${this.state.sample2}
          `,
          fontSize: 20,
          style: "subheader"
        }
      ],

      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: "center"
        },
        anotherStyle: {
          italic: true,
          alignment: "right"
        }
      }
    };
    pdfMake.createPdf(docDefinition).download("MinesetReport.pdf");
  }
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Info>
            <h1>Air Quality</h1>
          </Info>
          <CustomInput
            value={this.state.core}
            inputProps={{
              placeholder: "Core Zone",
              value: this.state.core,
              onChange: this.handleChangCore
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <CustomInput
            id="air quality"
            value={this.state.buffer}
            inputProps={{
              placeholder: "Buffer Zone",
              value: this.state.buffer,
              onChange: this.handleChangBuffer
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <Info>
            <h1>Surface Water Analysis</h1>
          </Info>
          <CustomInput
            id="air quality"
            value={this.state.sample1}
            inputProps={{
              placeholder: "Sample 1 Value",
              value: this.state.sample1,
              onChange: this.handleChangsample1
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <CustomInput
            id="air quality"
            value={this.state.sample2}
            inputProps={{
              placeholder: "Sample 2 Value",
              value: this.state.sample2,
              onChange: this.handleChangsample2
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <Info>
            <h1>Ambient Noise Analysis</h1>
          </Info>
          <CustomInput
            id="air quality"
            inputProps={{
              placeholder: "Industrial Area Noise: Day",
              value: this.state.IndDay,
              onChange: this.handleChangIndDay
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <CustomInput
            id="air quality"
            inputProps={{
              placeholder: "Industrial Area Noise: Night",
              value: this.state.IndNight,
              onChange: this.handleChangIndNight
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <CustomInput
            id="air quality"
            inputProps={{
              placeholder: "Residential Area Noise: Morning"
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <CustomInput
            id="air quality"
            inputProps={{
              placeholder: "Residential Area Noise: Day"
            }}
            formControlProps={{
              fullWidth: true
            }}
          />
          <Button onClick={this.download}>Generate Report</Button>
        </GridItem>
      </GridContainer>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
