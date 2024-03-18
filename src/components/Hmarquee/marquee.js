import { Row, Col, Text, Image, Grid } from '@nextui-org/react';
import React from 'react';
import Marquee from 'react-fast-marquee';
import Bullet from '../../assets/bullet2.png'

const Scroller = (props) => {

    var type = props.type
    var data = props.data

    if (type == "texts") {
        return (
            <Marquee
                pauseOnHover={true}
                speed={50}
                style={{
                    background: 'black',
                }}
                direction='right'
                gradientColor={[255, 255, 255]}
                gradientWidth={'15%'}
            >
                {data.map((feature) => (
                    <Row css={{
                        alignItems: 'center',
                        padding: '48px 0px 48px 0px'
                    }}>
                        <Col css={{
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '0px 84px'
                        }}>
                            <Text css={{
                                fontSize: '$3xl',
                                '@xsMax': {
                                    fontSize: '$2xl'
                                },
                                fontWeight: '$semibold',
                                lineHeight: '1'
                            }}>
                                {feature.heading}
                            </Text>
                            <Text css={{
                                fontSize: '$base',
                                '@xsMax': {
                                    fontSize: '$sm'
                                },
                                fontWeight: '$semibold',
                                color: '$gray600',
                                lineHeight: '1.1'
                            }}>
                                {feature.subheading}
                            </Text>
                        </Col>
                        <Image css={{
                            width: '16px',
                            height: '16px'
                        }} src={Bullet}
                        />
                    </Row>
                ))}
            </Marquee>
        )
    }

    if (type == "distributors") {
        return (
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
                }}>
                    Authorized Distributors For
                </Text>

                <Marquee
                    pauseOnHover={true}
                    speed={50}
                    style={{
                        background: 'black',
                    }}
                    direction='left'
                    gradientColor={[255, 255, 255]}
                    gradientWidth={'15%'}
                >
                    {data.map((distributor) => (
                        <>
                            <Row css={{
                                padding: '0px 0px 0px 0px',
                                alignItems: 'center'
                            }}>
                                <Grid css={{
                                    padding: '0px 36px'
                                }}>
                                    <Image
                                        css={{
                                            height: '120px',
                                            width: '200px',
                                            objectFit: 'cover',
                                        }}
                                        src={distributor}
                                    />
                                </Grid>
                                <Image css={{
                                    width: '16px',
                                    height: '16px'
                                }} src={Bullet}
                                />
                            </Row>


                        </>
                    ))}
                </Marquee>

            </Grid.Container>
        )
    }

    if (type == "clients") {
        return (
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
                }}>
                    Clients
                </Text>

                <Marquee
                    pauseOnHover={true}
                    speed={50}
                    style={{
                        background: 'black',
                    }}
                    direction='right'
                    gradientColor={[255, 255, 255]}
                    gradientWidth={'15%'}
                >
                    {data.map((distributor) => (
                        <>
                            <Row css={{
                                padding: '0px 0px 0px 0px',
                                alignItems: 'center'
                            }}>
                                <Grid css={{
                                    padding: '0px 36px'
                                }}>
                                    <Image
                                        css={{
                                            height: '120px',
                                            width: '200px',
                                            objectFit: 'cover',
                                        }}
                                        src={distributor}
                                    />
                                </Grid>
                                <Image css={{
                                    width: '16px',
                                    height: '16px'
                                }} src={Bullet}
                                />
                            </Row>


                        </>
                    ))}
                </Marquee>

            </Grid.Container>
        )
    }

};

export default Scroller;