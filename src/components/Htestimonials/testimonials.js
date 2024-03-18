import { Grid, Text, Col, Row, Image } from "@nextui-org/react";
import React from "react";
import { Carousel } from 'react-responsive-carousel';
import Test1 from '../../assets/Testimonial1.jpeg'
import Test2 from '../../assets/Testimonial2.jpg'
import startingQuote from '../../assets/startingQuote.png'
import endingQuote from '../../assets/endingQuote.png'
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
            <Grid.Container css={{
                jc: 'center'
            }}>
                <Text css={{
                    '@xsMin': {
                        fontSize: '$4xl',
                        padding: '36px 0px 24px 0px'
                    },
                    '@xsMax': {
                        fontSize: '$2xl',
                        padding: '36px 0px 24px 0px'
                    },
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
                slidesToSlide={3}
                stopOnHover={true}
                swipeable={true}
                useKeyboardArrows={true}
                showThumbs={false}
            >

                <div>

                    <Grid css={{
                        justifyContent: 'center',
                        width: '300px'
                    }}>
                        <Row css={{
                            jc: 'center',
                            width: '300px'
                        }}>
                            <Col css={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <Image src={Test1}
                                    css={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '30px'
                                    }} />
                                <Text css={{
                                    fontSize: '$md',
                                    fontWeight: '$semibold',
                                    lineHeight: '1.3',
                                    paddingTop: '6px'
                                }}>
                                    Aryan Yadav
                                </Text>
                                <Text css={{
                                    fontSize: '$xs',
                                    fontWeight: '$semibold'
                                }}>
                                    CEO, Britannia
                                </Text>
                            </Col>
                            <Image src={startingQuote}
                                css={{
                                    width: '24px',
                                    height: '24px'
                                }}
                                width={'24px'}
                                height={'24px'}
                            />
                            <Text css={{
                                fontSize: '$base'
                            }}>
                                Everyone at Niparo was very helpful with our needs, responding to us immediately with any requests. Greatly appreciated!
                            </Text>
                            <Image src={endingQuote}
                                css={{
                                    width: '24px',
                                    height: '24px'
                                }}
                            />
                        </Row>
                    </Grid>

                </div>

                <div>

                    <Grid>
                        <Row>
                            <Col>
                                <Image src={Test2}
                                    css={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '30px'
                                    }} />
                            </Col>
                            <Image />
                            <Text>

                            </Text>
                            <Image />
                        </Row>
                    </Grid>

                </div>


            </Carousel>
        </>
    )
}