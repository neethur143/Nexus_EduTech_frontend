import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Paper className="p-4 mb-4 rounded text-center bg-light">
      <Typography variant="h6" className="mb-2">
        Created by <span style={{ color: "#027edd" }}>Team F</span> | All Rights Reserved &copy;{new Date().getFullYear()}
      </Typography>
      <small className="text-muted">
        Stay connected:{" "}
        <a href="#" className="text-primary text-decoration-none me-2">
          <i className="fab fa-twitter"></i>
        </a>{" "}
        |{" "}
        <a href="#" className="text-primary text-decoration-none me-2">
          <i className="fab fa-linkedin"></i>
        </a>{" "}
        |{" "}
        <a href="#" className="text-primary text-decoration-none">
          <i className="fab fa-github"></i>
        </a>
      </small>
    </Paper>
  );
};

export default Footer;
