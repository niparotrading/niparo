import { Button, Col, Grid, Input, Row, Text } from "@nextui-org/react";
import React from "react";

export default function ContactPage() {
    return (
        <Grid.Container css={{
            jc:'center',
        }}>
            <Text css={{
                '@xsMin': {
                    fontSize: '$4xl',
                    padding: '16px 0px 16px 0px'
                },
                '@xsMax': {
                    fontSize: '$2xl',
                    padding: '24px 0px 16px 0px'
                },
                fontWeight: '$semibold',
                textGradient: "45deg, $purple600 20%, #CCA3FF 100%",
                width: '100vw',
                textAlign: 'center'
            }}>
                Contact Us
            </Text>

            <Text css={{
                '@xsMin': {
                    fontSize: '$lg',
                    padding: '16px 10% 36px 10%'
                },
                '@xsMax': {
                    fontSize: '$md',
                    padding: '24px 10% 36px 10%'
                },
                fontWeight: '$medium',
                textAlign: 'center',
                lineHeight: '1.3'
            }}>
                Let Niparo take the front seat in your day-to-day operations. <br></br>
                We'll handle the facility essentials, so you can focus on what truly matters - achieving your business goals.  Contact us today and reclaim your time!
            </Text>

            <Grid.Container css={{
                jc: 'center',
                marginBottom: '20vh'
            }}>

            <Grid css={{
                '@xsMin': {
                    borderWidth: '0px 1px 0px 0px',
                    borderStyle: 'solid',
                    borderColor: '$grey400'
                },
                padding: '24px',
                width: '320px'
            }}>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    jc: 'center',
                    gap: '12px',
                }}>
                    <Text css={{
                        fontWeight: '$semibold',
                        '@xsMax': {
                            fontSize: '$sm'
                        },
                        '@xsMin': {
                            fontSize: '$xl',
                        },
                        textAlign: 'center'
                    }}>
                        Contact Form
                    </Text>
                    <Input label="Full Name" placeholder="Siddhil Shah" />
                    {/* Put an email verify check like APL */}
                    <Input label="Email Address" placeholder="siddhilshah@niparo.com" />
                    <Row css={{
                        alignItems: 'end',
                        gap: '8px'
                    }}>
                        {/* Put an phone number verify check like APL */}
                        <Input label="Phone" placeholder="+91 12345 67890" />
                        <Button color="secondary" auto flat>
                            Contact Me!
                        </Button>
                    </Row>
                </Col>
            </Grid>

            <Grid css={{
                padding: '24px',
                width: '320px'
            }}>
                <Col css={{
                    padding: '4px 0px'
                }}>
                    <Text css={{
                        fontSize: '$xl',
                        fontWeight: '$semibold',
                        textDecoration: 'underline'
                    }}>
                        Address
                    </Text>
                    <Text css={{
                        fontWeight: '$medium',
                        fontSize: '$base',
                        lineHeight: '1.3'
                    }}>
                        #30-31, Anjanadri Green View, <br></br>
                        Opp To Anjaneya Temple, <br></br>
                        Bileshvalli Village, <br></br>
                        Hennur Road Cross, <br></br>
                        Bangalore - 560077
                    </Text>
                </Col>

                <Col css={{
                    padding: '4px 0px'
                }}>
                    <Text css={{
                        fontSize: '$xl',
                        fontWeight: '$semibold',
                        textDecoration: 'underline'
                    }}>
                        Phone
                    </Text>
                    <Text css={{
                        fontWeight: '$medium',
                        fontSize: '$base',
                        lineHeight: '1.3'
                    }}>
                        Sales & Operations -  +91 9902500655 /
                        +91 9900028128 / +91 968603789 / +91 9900028126 
                    </Text>
                </Col>

                <Col css={{
                    padding: '4px 0px'
                }}>
                    <Text css={{
                        fontSize: '$xl',
                        fontWeight: '$semibold',
                        textDecoration: 'underline'
                    }}>
                        Email
                    </Text>
                    <Text css={{
                        fontWeight: '$medium',
                        fontSize: '$base',
                        lineHeight: '1.3'
                    }}>
                        salesinfo@niparotrading.com
                    </Text>
                </Col>
            </Grid>

            </Grid.Container>

        </Grid.Container>
    )
}