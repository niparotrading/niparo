import { Button, Col, Grid, Link, Row, Text } from "@nextui-org/react";
import React, { useRef } from "react";
import './landing.css'

export default function HomeLanding() {
    const myRef = useRef(null)
    const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return (
        <div>
            <Grid.Container className="landingBG" css={{
                jc: 'center',
                alignItems: 'center'
            }}>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    jc: 'center',
                    alignItems: 'center',
                    '@xsMin':{
                        padding: '48px 0px'
                    },
                    '@xsMax':{
                        padding: '132px 0px'
                    }
                }}>
                    <Row css={{
                        jc: 'center',
                        alignItems: 'center'
                    }}>
                        <Text css={{
                            fontSize: '$5xl',
                            fontWeight: '$semibold',
                            lineHeight: '1.1',
                            textAlign: 'right',
                            padding: '48px 12px',
                            '@xsMin':{
                                minWidth: '225px'
                            },
                            '@xsMax':{
                                fontSize: '$4xl'
                            }
                        }}>
                            NIPARO <br></br>
                            TRADING
                        </Text>
                        <Text css={{
                            fontSize: '$xl',
                            fontWeight: '$semibold',
                            lineHeight: '1.25',
                            textAlign: 'left',
                            padding: '48px 12px',
                            '@xsMin':{
                                minWidth: '225px'
                            },
                            '@xsMax':{
                                fontSize: '$md'
                            }
                        }}>
                            Empowering Your <br></br>
                            Facility's Success!
                        </Text>
                    </Row>

                    {/* Link goes below */}
                    <Link> 
                        <Button color="secondary" auto flat onPress={()=>{
                            executeScroll()
                        }}>
                            Get Started ⤵
                        </Button>
                    </Link>

                    <Text hideIn={"xs"} css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        fontSize: '$md',
                        lineHeight: '1.3',
                        padding: '48px 0px'
                    }}>
                        Comprehensive Facility Management Solutions for a streamlined experience. <br></br>
                        We exist to empower you to focus on what truly matters – your core business.
                    </Text>

                    <Text showIn={"xs"} css={{
                        textAlign: 'center',
                        fontWeight: '$semibold',
                        fontSize: '$sm',
                        lineHeight: '1.3',
                        padding: '48px 12px'
                    }}>
                        Comprehensive Facility Management Solutions for a streamlined experience. <br></br>
                        We exist to empower you to focus on what truly matters – your core business.
                    </Text>
                </Col>
                <div ref={myRef}></div>
            </Grid.Container>
        </div>
    )
}