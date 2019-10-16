import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AutosuggestContainer from './components/AutosuggestContainer/AutosuggestContainer';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <AutosuggestContainer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
