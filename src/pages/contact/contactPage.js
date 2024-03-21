import { Button, Col, Grid, Input, Row, Text } from "@nextui-org/react";
import React, { useState } from "react";
import './contactPage.css'

export default function ContactPage() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            Name: fullName,
            Email: email,
            Phone: phone,
        };

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwPoYELqz6PKc_Nb0OAXvWT0J2v3J6ZXsffrid116rdB0bYZCsdqDfvZksm8wVF0ssprw/exec', {
                method: 'POST',
                mode: 'no-cors',
                body: new URLSearchParams(formData),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            if (response) {
                setFullName('');
                setEmail('');
                setPhone('');
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };


    return (
        <Grid.Container css={{
            jc: 'center',
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

                <form className="contact-form" onSubmit={handleSubmit}>
                    <Grid css={{
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
                                '@xsMin':{
                                    fontSize: '$xl'
                                },
                                '@xsMax':{
                                    fontSize: '$md'
                                },
                                textAlign: 'center'
                            }}>
                                Contact Form
                            </Text>
                            <Input label="Full Name" placeholder="Your Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            <Input label="Email Address" placeholder="your_email@domain.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Row css={{
                                alignItems: 'end',
                                gap: '4px'
                            }}>
                                <Input label="Phone" placeholder="+91 12345 67890" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <Button color="secondary" auto flat type="submit">
                                    Contact Me!
                                </Button>
                            </Row>
                        </Col>
                    </Grid>
                </form>

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
                            lineHeight: '1.3',
                            paddingBottom: '4px'
                        }}>
                            Sales & Operations -  +91 9902500655 /
                            +91 9900028128 / +91 968603789 / +91 9900028126
                        </Text>
                        <Text css={{
                            fontWeight: '$medium',
                            fontSize: '$base',
                            lineHeight: '1.3'
                        }}>
                            Partnerships & Careers - +91 9535143290 / +91 9845031561 
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