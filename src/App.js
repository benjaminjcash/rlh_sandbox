import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AutosuggestContainer from './components/AutosuggestContainer/AutosuggestContainer';
import DatePickerContainer from './components/DatePickerContainer/DatePickerContainer';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <AutosuggestContainer />
        </Col>
        <Col>
          <DatePickerContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
