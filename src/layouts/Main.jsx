import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftNav from "../pages/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3} sm>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6} sm>
                        <h2>Main content comming</h2>
                    </Col>
                    <Col lg={3} sm>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;