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
      // background:'MineSet',
      content: [
        {
          text: "Certificate of Authentication",
          style: "header",
          alignment: "center",
          fontSize: 30
        },
        {
          text:
            "\n\n\n\nThis is to certify that Talcher mine located in Angul district owned \nby Mr Talcher Mine Owner has met international standards and complied\n with pollution control and effluent discharge rules and regulations .\n\n",
          alignment: "center",
          fontSize: 18
        },
        {
          text:
            "\nIssued by OSPCB on 14th Nov 2018 and valid till 14th Dec 2018",
          alignment: "center",
          fontSize: 18
        }
      ],
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
              <Button
                style={{
                  color: "green",
                  marginTop: "40vh",
                  border: "5px solid"
                }}
                onClick={this.Certification}
              >
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
