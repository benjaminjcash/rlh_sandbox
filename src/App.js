import React from 'react';
import { Container, Row, Col } from 'reactstrap';
// import GlobalSearch from './components/GlobalSearch/GlobalSearch';
import AutosuggestContainer from './components/AutosuggestContainer/AutosuggestContainer';
// import HelloRewards from './components/HelloRewards/HelloRewards';

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
