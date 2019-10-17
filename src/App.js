import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import GlobalSearch from './components/GlobalSearch/GlobalSearch';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <GlobalSearch />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
