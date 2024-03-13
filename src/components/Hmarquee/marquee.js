import { Row, Col, Text, Image } from '@nextui-org/react';
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
                            padding: '0px 64px'
                        }}>
                            <Text css={{
                                fontSize: '$4xl',
                                '@xsMax':{
                                    fontSize: '$2xl'
                                },
                                fontWeight: '$semibold',
                                lineHeight: '1'
                            }}>
                                {feature.heading}
                            </Text>
                            <Text css={{
                                fontSize: '$base',
                                '@xsMax':{
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
        );
    }

    if (type == "distributors"){
        return(
            <div>
                test
            </div>
        )
    }

};

export default Scroller;