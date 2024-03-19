import { Grid, Text, Col, Row, Image } from "@nextui-org/react";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import Test1 from '../../assets/Testimonial1.jpeg'
import Test2 from '../../assets/Testimonial2.jpg'
import startingQuote from '../../assets/startingQuote.png'
import endingQuote from '../../assets/endingQuote.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure carousel CSS is imported
import './testimonials.css'

export default function Testimonials() {

    let data = [
        {
            image: Test1,
            name: 'Aryan Yadav',
            role: 'CEO, Britannia',
            content: 'Everyone at Niparo was very helpful with our needs, responding to us immediately with any requests. Greatly appreciated!'
        },
        {
            image: Test2,
            name: 'Zahaan Shapoorjee',
            role: 'MD, 3M',
            content: 'Everyone at Niparo was very helpful with our needs, responding to us immediately with any requests. Greatly appreciated!'
        }
    ]

    return (
        <>
            <Grid.Container css={{ jc: 'center' }}>
                <Text css={{
                    '@xsMin': { fontSize: '$4xl', padding: '36px 0px 24px 0px' },
                    '@xsMax': { fontSize: '$2xl', padding: '36px 0px 24px 0px' },
                    fontWeight: '$semibold',
                    textGradient: "45deg, $purple600 20%, #CCA3FF 100%",
                    width: '100vw',
                    textAlign: 'center'
                }}>
                    Testimonials
                </Text>
            </Grid.Container>

            <Carousel
                showDots={true}
                infiniteLoop={true}
                autoPlay={false}
                stopOnHover={true}
                swipeable={true}
                useKeyboardArrows={true}
                showThumbs={false}
                centerMode={true} // Enable center mode if desired
                centerSlidePercentage={50} // Adjust slide percentage to control size
            >
                {data.map((testimonial, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid css={{ maxWidth: '500px' }}> {/* Adjust maxWidth as needed */}
                            <Row justify="center" align="center">
                                <Col css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Image src={testimonial.image}
                                        css={{
                                            width: '100px', // Adjust image size as needed
                                            height: '100px',
                                            borderRadius: '50%'
                                        }}
                                        alt="Testimonial"
                                    />
                                    <Text css={{ fontSize: '$lg', fontWeight: '$semibold', paddingTop: '12px' }}>
                                        {testimonial.name}
                                    </Text>
                                    <Text css={{ fontSize: '$md', fontWeight: '$regular' }}>
                                        {testimonial.role}
                                    </Text>
                                </Col>
                            </Row>
                            <Row justify="center" align="center">
                                <Image src={startingQuote} alt="Start quote" css={{ width: '24px', height: '24px' }} />
                                <Text css={{ fontSize: '$base', padding: '0 12px' }}>
                                    {testimonial.content}
                                </Text>
                                <Image src={endingQuote} alt="End quote" css={{ width: '24px', height: '24px' }} />
                            </Row>
                        </Grid>
                    </div>
                ))}
            </Carousel>
        </>
    );
}
