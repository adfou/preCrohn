import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import parse from 'html-react-parser';

const renderContent = (key, value) => {
    switch (key) {
        case 'H2':
            return <h2>{value}</h2>;
        case 'H3':
            return <h3>{value}</h3>;
        case 'Text':
            return Array.isArray(value) 
                ? value.map((text, index) => <p key={index}>{parse(text)}</p>) 
                : <p>{parse(value)}</p>;
        case 'HTMLTEXT':
            return <p>{parse(value)}</p>;
            
        case 'LIST':
            return (
                <ul>
                    {value.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );

        case 'LISTHtml':
            return (
                <ul>
                    {value.map((item, index) => (
                        <li key={index}>{parse(item)}</li>
                    ))}
                </ul>
            );
        case 'LISTNumber':
            return (
                <ol  class ="number-list">
                    {value.map((item, index) => (
                        <li key={index}>{parse(item)}</li>
                    ))}
                </ol >
            );
            
        case 'ImageTitle':
                return (
                    <Container fluid className="team-container" style={{marginTop:"30px"}}>
                            <Row key={1} className="team-member align-items-center mb-4">
                                <Row md={3} className="text-center">
                                    <img
                                        src={value.image}
                                        alt={value.title}
                                        className="img-fluid "
                                        style={{ maxWidth: '400px' }}
                                    />
                                </Row>
                                <Row md={9} style={{marginTop:"25px"}}>
                                    <h3>{value.title}</h3>
                                    <h5 className="text-muted" style={{ textTransform: "uppercase" }}>
                                        {value.subTitle}
                                    </h5>
                                    <p>{value.number}</p>
                                    <p>{value.Desc}</p>
                                </Row>
                            </Row>
                       
                    </Container>
                );
        case 'LISTBold':
            return (
                <ul>
                    {value.map((item, index) => (
                        <li style={{fontWeight:"600"}} key={index}>{item}</li>
                    ))}
                </ul>
            );
            
        case 'CARD':
            return (
                <Container>
                    <Row className="container-card">
                        {value.map((card, index) => (
                            <Card key={index} className="sx light-card">
                                <Card.Body> 
                                    <Card.Title >{card.Title}</Card.Title>
                                    <Card.Subtitle style={{textTransform:"uppercase",lineHeight:"19px"}}className="mb-2 text-muted">{card.underTitlte}</Card.Subtitle>
                                    <Card.Text>{card.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Row>
                </Container>
            );
        case 'CARDGREEN':
                return (
                    <Container>
                        <Row className="container-card">
                            {value.map((card, index) => (
                                <Card key={index} className="sx background-card">
                                    <Card.Body>
                                        <Card.Title>{card.Title}</Card.Title>
                                        <a href={card.link} className="card-button">
                                            {card.button}
                                        </a>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>
                    </Container>
                );
        default:
            return <p>{value}</p>;
    }
};

const Section = ({ section }) => (
    <section className="my-4">
        <Row>
            <Col>
                {Object.entries(section).map(([key, value], index) => (
                    <React.Fragment key={index}>
                        {renderContent(key, value)}
                    </React.Fragment>
                ))}
            </Col>
        </Row>
    </section>
);

export const BodyPage = ({ data }) => (
    <Container>
        {data.map((section, index) => (
            <Section key={index} section={section} />
        ))}
    </Container>
);
