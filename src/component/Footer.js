import React from "react";
import { Github } from 'react-bootstrap-icons';
import { Linkedin } from 'react-bootstrap-icons';
import { Stars } from 'react-bootstrap-icons';
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <div className = "footer">
      <Card>
        <Card.Footer><p>Copyright: Erika Debelis<Stars /> {new Date().getFullYear()} <a href="https://github.com/ErikaDebelis"> <Github /></a>  <a href="https://www.linkedin.com/in/erika-debelis/"> <Linkedin /> </a></p></Card.Footer>
      </Card>
    </div>
  )
}
  
export default Footer;