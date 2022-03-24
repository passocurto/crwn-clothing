import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";


import {FooterConteiner, Clothed, Developer} from './footer.styles';

const Footer = ({ sections }) => (
  <FooterConteiner>
    <center>
      <Clothed>
        {sections.map(({ id, title }) => (
          <a href={"/shop/" + title.toLowerCase()} key={id}>
            {" " + title + " "}
          </a>
        ))}
      </Clothed>
      <Developer>
        <span> Developer Ricardo Passinho </span>
        <br />
        <span> Brazil - 2022 </span>
      </Developer>
    </center>
  </FooterConteiner>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default withRouter(connect(mapStateToProps)(Footer));
