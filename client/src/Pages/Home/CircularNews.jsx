import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{
              backgroundColor: '#00FFFF',
              textAlign: 'center',
              padding: '20px',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '36px',
              color: '#fff',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              marginBottom: '20px',
            }}>
            <div style={{ backgroundColor: 'black', width: '40%', textAlign: 'center', margin: '0 auto' }}>
                      <h1 style={{ color: 'white' }}>Circular and News Feed</h1>
                    </div>

              
            </div>

      </header>
      <Container>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris ac nisi bibendum consequat in eu libero. Nam quis lobortis massa. Sed vel risus id massa rutrum feugiat sed quis eros. Mauris pharetra nulla sed maximus fermentum. Donec quis risus vel sem dictum tristique.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris ac nisi bibendum consequat in eu libero. Nam quis lobortis massa. Sed vel risus id massa rutrum feugiat sed quis eros. Mauris pharetra nulla sed maximus fermentum. Donec quis risus vel sem dictum tristique.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris ac nisi bibendum consequat in eu libero. Nam quis lobortis massa. Sed vel risus id massa rutrum feugiat sed quis eros. Mauris pharetra nulla sed maximus fermentum. Donec quis risus vel sem dictum tristique.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris ac nisi bibendum consequat in eu libero. Nam quis lobortis massa. Sed vel risus id massa rutrum feugiat sed quis eros. Mauris pharetra nulla sed maximus fermentum. Donec quis risus vel sem dictum tristique.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris ac nisi bibendum consequat in eu libero. Nam quis lobortis massa. Sed vel risus id massa rutrum feugiat sed quis eros. Mauris pharetra nulla sed maximus fermentum. Donec quis risus vel sem dictum tristique.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris ac nisi bibendum consequat in eu libero. Nam quis lobortis massa. Sed vel risus id massa rutrum feugiat sed quis eros. Mauris pharetra nulla sed maximus fermentum. Donec quis risus vel sem dictum tristique.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/640x360" />
              <Card.Body>
                <Card.Title>Article Title</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac mauris ac nisi bibendum consequat in eu libero. Nam quis lobortis massa. Sed vel risus id massa rutrum feugiat sed quis eros. Mauris pharetra nulla sed maximus fermentum. Donec quis risus vel sem dictum tristique.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
