import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { Container } from "./styles";
import Coffe from "@material-ui/icons/FreeBreakfastOutlined";
import Heart from "@material-ui/icons/FavoriteBorderOutlined";
import Link from 'next/link'

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#cf8d6d",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#cf8d6d",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "0px",
        fontFamily: '"Louis George Café", sans serif',
      },
      "&:hover fieldset": {
        borderColor: "#cf8d6d",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#cf8d6d",
      },
    },
  },
})(TextField);

const Footer = () => {
  return (
    <Container>
      <div className="header-footer">
        <img src="logo-header.svg" className="logo" />
        <div className="subscribe">
          <div className="social-icons">
          <Link href="https://www.facebook.com/estefanemedeiross">
              <a target="_blank"><img src="facebook.svg" /></a>
            </Link>
            <Link href="https://www.instagram.com/estefanemedeiross/">
              <a target="_blank"><img src="instagram.svg" /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/estefane-medeiros-2518531ab/">
              <a target="_blank"><img src="linkedin.svg" /></a>
            </Link>
          </div>
          <div className="input-subscribe">
            <CssTextField
              label="Inscreva-se na nossa Newsletter"
              size="small"
              fullWidth
              variant="outlined"
              id="custom-css-outlined-input"
            />
            <button type="submit">ok</button>
          </div>
        </div>
      </div>
      <div class="footer-efive">
        <h3>
          Feito com <Heart fontSize="small" style={{ marginBottom: "-6px" }} />{" "}
          e <Coffe fontSize="small" style={{ marginBottom: "-6px" }} /> por -
          eFive
        </h3>
      </div>
    </Container>
  );
};

export default Footer;
