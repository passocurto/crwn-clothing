import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";


import {FooterConteiner, Developer} from './footer.styles';

const Footer = ({ sections }) => (
  <FooterConteiner>
    <center>
      <Developer>
        <span> Software Engine: Ricardo Passinho </span>
        <br />
        <span> Brasil - 2022 </span>
      </Developer>
    </center>
  </FooterConteiner>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default withRouter(connect(mapStateToProps)(Footer));
