import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";


import {foot} from './footer.styles';

const Footer = ({ sections }) => (
  <foot>
    <center>
      <clothed>
        {sections.map(({ id, title }) => (
          <linkar href={"/shop/" + title.toLowerCase()} key={id}>
            {" " + title + " "}
          </linkar>
        ))}
      </clothed>
      <br />
      <developer>
        <span> Developer Ricardo Passinho </span>
        <br />
        <span> Brazil - 2021 </span>
      </developer>
    </center>
  </foot>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default withRouter(connect(mapStateToProps)(Footer));
