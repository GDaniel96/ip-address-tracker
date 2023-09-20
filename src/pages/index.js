import Head from "next/head";
import { Heading } from "../components/common/Heading";
import { Row, Col, Container } from "reactstrap";
import Hero from "../components/Hero";
import Form from "../components/Form";
import Details from "../components/Details";

export default function Home() {
  return (
    <>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="IP Address Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Container fluid="true">
          <Row noGutters="true">
            <Col xs={12}>
              <Hero>
                <Heading>IP Address Tracker</Heading>
                <Form />
              </Hero>
            </Col>
          </Row>
          <Row>
            <Col xs={1} />
            <Col xs={10}>
              <Details />
            </Col>
            <Col xs={1} />
          </Row>
        </Container>
      </main>
    </>
  );
}
