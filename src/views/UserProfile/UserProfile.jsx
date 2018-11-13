import React from "react";
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
// import CustomInput from "components/CustomInput/CustomInput.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
// import CardHeader from "components/Card/CardHeader.jsx";
// import MenuItem from '@material-ui/core/MenuItem';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// import CardAvatar from "components/Card/CardAvatar.jsx";
// import CardBody from "components/Card/CardBody.jsx";
// import CardFooter from "components/Card/CardFooter.jsx";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, FormHelperText, Radio } from "@material-ui/core";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import moment from "moment";
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  }
});

class UserProfile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: null,
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
      1000
    );
  }
  handleChange = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <h1>Periodic Data Entry</h1>
            <Card>
              <div className={classes.root}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Air Quality</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <GridContainer>
                      <GridItem xs={12} lg={7} md={7}>
                        <b>Time:</b> {this.state.acccordianchoice}
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "PM 10"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "PM 2.5"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "NO2"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "O3"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "CO"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "SO2"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "NH3"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "Pb"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                        />
                      </GridItem>
                        <GridItem xs={12} lg={12} md={12} xl={12}>
                        <label>Mine A</label>
                        <Radio
                          checked={this.state.selectedValue === 'a'}
                          onChange={this.handleChange}
                          value="a"
                          name="Mine A"
                          aria-label="A"
                          icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                          checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                          classes={{
                            checked: classes.radio,
                          }}
                        />
                        <label>Mine B</label>
                        <Radio
                          checked={this.state.selectedValue === 'b'}
                          onChange={this.handleChange}
                          value="b"
                          name="radio button demo"
                          aria-label="B"
                          icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                          checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                          classes={{
                            checked: classes.radio
                          }}
                        />
                          <label>Mine C</label>
                        <Radio
                          checked={this.state.selectedValue === 'c'}
                          onChange={this.handleChange}
                          value="C"
                          name="radio button demo"
                          aria-label="C"
                          icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                          checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                          classes={{
                            checked: classes.radio
                          }}
                        />
                        <FormHelperText>Select Mine </FormHelperText>
                        <GridItem xs={12} lg={12} md={12}>
                          <center>
                            <Button color="primary" type="success">
                              Submit
                            </Button>
                          </center>
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Water Quality</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <GridContainer>
                      <GridItem xs={12} lg={7} md={7}>
                        <b>Time:</b> {this.state.acccordianchoice}
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "pH value"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "Total Dissolved Solids"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "Chlorides"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={3} md={3}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "Sulphates"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={4} md={4}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "Nitrates"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={4} md={4}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "Phlorides"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      </GridItem>
                      <GridItem xs={12} lg={4} md={4}>
                        <CustomInput
                        id="regular"
                        inputProps={{
                          placeholder: "Iron"
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                        />
                      </GridItem>
                        <GridItem xs={12} lg={12} md={12} xl={12}>
                        <label>Mine A</label>
                        <Radio
                          checked={this.state.selectedValue === 'a'}
                          onChange={this.handleChange}
                          value="a"
                          name="Mine A"
                          aria-label="A"
                          icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                          checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                          classes={{
                            checked: classes.radio,
                          }}
                        />
                        <label>Mine B</label>
                        <Radio
                          checked={this.state.selectedValue === 'b'}
                          onChange={this.handleChange}
                          value="b"
                          name="radio button demo"
                          aria-label="B"
                          icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                          checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                          classes={{
                            checked: classes.radio
                          }}
                        />
                          <label>Mine C</label>
                        <Radio
                          checked={this.state.selectedValue === 'c'}
                          onChange={this.handleChange}
                          value="C"
                          name="radio button demo"
                          aria-label="C"
                          icon={<FiberManualRecord className={classes.radioUnchecked}/>}
                          checkedIcon={<FiberManualRecord className={classes.radioChecked}/>}
                          classes={{
                            checked: classes.radio
                          }}
                        />
                        <FormHelperText>Select Mine </FormHelperText>
                        <GridItem xs={12} lg={12} md={12}>
                          <center>
                            <Button color="primary" type="success">
                              Submit
                            </Button>
                          </center>
                      </GridItem>
                    </GridItem>
                  </GridContainer>
                </ExpansionPanelDetails>
              </ExpansionPanel>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Ambient Noise Quality</Typography>
                  </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Meterological data</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
          <h1>Annual Data Entry</h1>
           <Card>
              <div className={classes.root}>
                <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Water Consumption</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Raw Material Consumption</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
// function UserProfile(props) {
//   return (
//     <div>
//       <GridContainer>
//         <GridItem xs={12} sm={12} md={8}>
//           <Card>
//           </Card>
//         </GridItem>
//       </GridContainer>
//     </div>
//   );
// }
UserProfile.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(UserProfile);
