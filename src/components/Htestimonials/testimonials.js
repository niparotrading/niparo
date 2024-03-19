import { Grid, Text, Col, Row, Image } from "@nextui-org/react";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import Test1 from '../../assets/Testimonial1.jpeg'
import Test2 from '../../assets/Testimonial2.jpg'
import startingQuote from '../../assets/startingQuote.png'
import endingQuote from '../../assets/endingQuote.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
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
                    '@xsMin': { fontSize: '$4xl', padding: '36px 0px 0px 0px' },
                    '@xsMax': { fontSize: '$2xl', padding: '36px 0px 0px 0px' },
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
                autoPlay={true}
                stopOnHover={true}
                swipeable={true}
                useKeyboardArrows={true}
                showThumbs={false}
                centerMode={true}
                centerSlidePercentage={100}
            >
                {data.map((testimonial, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid css={{ 
                            // maxWidth: '500px',
                            margin: '48px',
                            backgroundColor: '#1c1c1c',
                            borderRadius: '16px'
                        }}>
                            <Row justify="center" css={{
                                padding: '16px'
                            }}>
                                <Col css={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center',
                                    width: 'max-content'
                                }}>
                                    <Image src={testimonial.image}
                                        css={{
                                            width: '60px',
                                            height: '60px',
                                            borderRadius: '50%'
                                        }}
                                        alt="Testimonial"
                                    />
                                    <Text css={{ fontSize: '$lg', fontWeight: '$semibold', paddingTop: '6px', whiteSpace: 'nowrap' }}>
                                        {testimonial.name}
                                    </Text>
                                    <Text css={{ fontSize: '$md', fontWeight: '$regular', color: '$gray600', lineHeight: '1.2' }}>
                                        {testimonial.role}
                                    </Text>
                                </Col>
                                {/* <Row justify="center" align="center"> */}
                                    <Image src={startingQuote} alt="Start quote" 
                                    className="startingQuote"
                                    css={{ 
                                        width: '24px', 
                                        height: '24px' 
                                    }} 
                                    width={'24px'}
                                    height={'24px'}/>
                                    <Text css={{ 
                                        padding: '0 12px',
                                        textAlign: 'start',
                                        fontWeight: '$semibold',
                                        alignItems: 'start',
                                        display: 'flex',
                                        '@xsMin':{
                                            maxW: '320px',
                                            fontSize: '$lg', 
                                        },
                                        '@xsMax':{
                                            maxW: '250px',
                                            fontSize: '$sm'
                                        }
                                    }}>
                                        {testimonial.content}
                                    </Text>
                                    <Image src={endingQuote} alt="End quote" 
                                    className="endingQuote"
                                    css={{ 
                                        width: '24px', 
                                        height: '24px',
                                    }} 
                                    width={'24px'}
                                    height={'24px'}/>
                                {/* </Row> */}
                            </Row>
                        </Grid>
                    </div>
                ))}
            </Carousel>
        </>
    );
}
