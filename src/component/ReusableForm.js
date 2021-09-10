import React from 'react';
import PropTypes from 'prop-types';
import Keg from './Keg';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <div className ="form-space">
          <Row className="g-3">
            <Col md>
              <FloatingLabel controlId="floatingInputGrid" label="Brand">
                <Form.Control
                  type = 'text'
                  name = 'brand'
                  placeholder = 'Brand' />
              </FloatingLabel>
            </Col>

            <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Keg Name">
                <Form.Control
                  type = 'text'
                  name = 'name'
                  placeholder = 'Keg Name' />
              </FloatingLabel>
            </Col>

            <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Keg Alcohol Content">
                <Form.Control
                  type = 'text'
                  name = 'alcoholContent'
                  placeholder = 'Alcohol Content' />
              </FloatingLabel>
            </Col>

            <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="Keg Price">
                <Form.Control
                  type = 'text'
                  name = 'price'
                  placeholder = 'Price' />
              </FloatingLabel>
            </Col>

            {/* <Col md>
            <FloatingLabel controlId="floatingInputGrid" label="stock">
              <Form.Control
                type='text'
                name='pintsRemaining'
                placeholder='Pints Remaining in Keg'
                defaultValue={props.pintsRemaining} />
              </FloatingLabel>
            </Col> */}
          </Row>
        </div>

        <div className = "button-space">
          <div className="d-grid gap-2">
            <Button type = 'submit' variant="outline-success" size="lg">
            {props.buttonText}
            </Button>
          </div>
        </div>

      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;