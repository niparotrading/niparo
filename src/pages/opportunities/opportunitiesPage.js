import { Col, Grid, Text, Link, Button } from "@nextui-org/react";
import React from "react";

export default function OpportunitiesPage() {
    return (
        <Grid.Container css={{
            jc: 'center',
            alignItems: 'center'
        }}>
            <Text css={{
                '@smMin': {
                    fontSize: '$4xl',
                },
                '@smMax': {
                    fontSize: '$2xl'
                },
                fontWeight: '$semibold',
                textGradient: "45deg, $purple600 20%, #CCA3FF 100%",
                textAlign: 'center',
                padding: '18px 0px',
                width: '100vw'
            }}>
                Opportunities To Jump On!
            </Text>

            <Grid css={{
                maxW: '1000px',
                backgroundColor: '#141414',
                borderRadius: '16px',
                padding: '12px 24px',
                margin: '24px'
            }}>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderStyle: 'solid',
                    borderWidth: '0px 0px 2px 0px',
                    borderColor: '$purple300',
                    padding: '12px 0px'
                }}>
                    <Text css={{
                        fontWeight: '$semibold',
                        '@xsMin': {
                            fontSize: '$3xl'
                        },
                        '@xsMax': {
                            fontSize: '$lg'
                        },
                        lineHeight: '1.3'
                    }}>
                        Partnership
                    </Text>
                    <Text css={{
                        color: '$gray700',
                        '@xsMin': {
                            fontSize: '$lg'
                        },
                        '@xsMax': {
                            fontSize: '$base'
                        },
                        fontWeight: '$medium'
                    }}>
                        Expand Your Reach, Enhance Your Offerings
                    </Text>
                </Col>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px 0px'
                }}>
                    <Text css={{
                        fontWeight: '$medium',
                        '@xsMin': {
                            fontSize: '$md'
                        },
                        '@xsMax': {
                            fontSize: '$sm'
                        }
                    }}>
                        We are looking to partner with: <br></br>

                        • Original Equipment Manufacturers (OEM) & Distributors: Leverage Niparo's Extensive Network & Industry Expertise. Sell with us effortlessly to accelerate growth and boost sales. <br></br>

                        • Facility Management Companies: Expand your service offerings with access to a diverse product portfolio and expert support from Niparo. <br></br>

                        • Building Service Contractors: Enhance your value proposition by providing clients with comprehensive facility solutions. <br></br>

                        • Focus on Innovation, We'll Handle the Rest. Partner with Niparo's Network for Seamless Distribution. Contact our dedicated partnership team today to discuss how we can collaborate and achieve mutual success. <br></br>
                    </Text>
                </Col>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '4px 0px',
                    borderStyle: 'solid',
                    borderWidth: '2px 0px 0px 0px',
                    borderColor: '$purple300',
                }}>
                    <Text css={{
                        textAlign: 'end',
                        fontWeight: '$medium',
                        '@xsMin': {
                            fontSize: '$lg'
                        },
                        '@xsMax': {
                            fontSize: '$base'
                        },
                        color: '$gray700'
                    }}>
                        Partner with Niparo!
                    </Text>
                </Col>

            </Grid>

            <Grid css={{
                maxW: '1000px',
                backgroundColor: '#141414',
                borderRadius: '16px',
                padding: '12px 24px',
                margin: '24px'
            }}>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    borderStyle: 'solid',
                    borderWidth: '0px 0px 2px 0px',
                    borderColor: '$purple300',
                    padding: '12px 0px'
                }}>
                    <Text css={{
                        fontWeight: '$semibold',
                        '@xsMin': {
                            fontSize: '$3xl'
                        },
                        '@xsMax': {
                            fontSize: '$lg'
                        },
                        lineHeight: '1.3'
                    }}>
                        Career
                    </Text>
                    <Text css={{
                        color: '$gray700',
                        '@xsMin': {
                            fontSize: '$lg'
                        },
                        '@xsMax': {
                            fontSize: '$base'
                        },
                        fontWeight: '$medium'
                    }}>
                        Build a Rewarding Future, Shape Successful Facilities
                    </Text>
                </Col>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '12px 0px'
                }}>
                    <Text css={{
                        fontWeight: '$medium',
                        '@xsMin': {
                            fontSize: '$md'
                        },
                        '@xsMax': {
                            fontSize: '$sm'
                        }
                    }}>
                        At Niparo, we're passionate about creating successful facilities and empowering the people who make it happen. We offer a dynamic environment where you can make a real impact.  Your work directly contributes to the success of businesses across industries by ensuring their facilities are efficient, safe, and comfortable.<br></br>

                        • Join our team of dedicated professionals and gain valuable experience in facility management<br></br>

                        • We are committed to fostering your growth and development, providing opportunities for you to advance your career and reach your full potential.  Beyond professional development, Niparo prioritizes collaboration.<br></br>

                        • Thrive in a supportive and positive team atmosphere where teamwork is valued.<br></br>
                    </Text>
                </Col>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '4px 0px',
                    borderStyle: 'solid',
                    borderWidth: '2px 0px 0px 0px',
                    borderColor: '$purple300',
                }}>
                    <Text css={{
                        textAlign: 'end',
                        fontWeight: '$medium',
                        '@xsMin': {
                            fontSize: '$lg'
                        },
                        '@xsMax': {
                            fontSize: '$base'
                        },
                        color: '$gray700'
                    }}>
                        Explore careers at Niparo.
                    </Text>
                </Col>

            </Grid>

            <Grid css={{
                width:'100vw',
                jc:'center',
                display:'flex',
                margin:'0px 0px 24px 0px'
            }}>
                {/* Link goes below */}
                <Link>
                    <Button color="secondary" auto flat onPress={()=>{
                        window.location.pathname="/contact"
                    }}>
                        Contact Us →
                    </Button>
                </Link>
            </Grid>
        </Grid.Container>
    )
}