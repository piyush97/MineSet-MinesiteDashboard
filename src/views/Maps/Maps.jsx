import React from "react";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import { Button } from "@material-ui/core";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.Certification = this.Certification.bind(this);
  }
  Certification() {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    var docDefinition = {
      pageOrientation: "landscape",
      footer: {
        columns: [
          "Field Officer",
          {
            text: "Governing Officer",
            alignment: "right"
          }
        ]
      }
    };
    pdfMake.createPdf(docDefinition).download("Certificate.pdf");
  }
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <center>
              <Button style={{ color: "green", border: "5px solid" }} onClick={this.Certification}>
                Get Certified
              </Button>
            </center>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default Maps;
