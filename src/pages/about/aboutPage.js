import { Grid, Text, Collapse, Col } from "@nextui-org/react";
import React from "react";

export default function AboutPage() {
    return (
        <Grid.Container>
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
                NIPARO TRADING PVT LTD
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
                Established in 1999 in Bangalore, our company has steadily grown, expanding our services to a pan-India level. We specialize in offering a comprehensive range of high-quality consumables, covering everything from housekeeping and office stationery to IT consumables, pantry edibles, FMCG products, restroom hygiene equipment and consumables, specialty chemicals, and customized solutions for new projects and expansions.
            </Text>

            <Grid.Container
                css={{
                    jc: 'center',
                    alignItems: 'center'
                }}>
                {/* Left Side */}
                <Grid
                    css={{
                        '@xsMin': {
                            width: '600px'
                        },
                        '@xsMax': {
                            width: '300px'
                        }
                    }}>
                    <Collapse.Group splitted accordion={false}>
                        <Collapse title="What Is Our Commitment?" >
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                Our commitment to industry-leading benchmarks is evident in our business practices, focusing on quality, time-bound services, rapid response, efficient deliverables, meticulous accounting, and stringent compliance measures.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                As authorized business associates of both renowned Indian and multinational companies, we pride ourselves on delivering a single-point solution for all office consumables with unparalleled excellence.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                We Are Currently Associated With 400+ Clients, E.G., Cisco, Qualcomm, Accenture, Toyota, Kirloskar, Juniper, Autoliv, JLL, CBRE, DTSS, Tenon, Compass & Many Others.
                            </Text>
                        </Collapse>
                    </Collapse.Group>
                </Grid>

                {/* Right Side */}
                <Grid
                    css={{
                        '@xsMin': {
                            width: '600px'
                        },
                        '@xsMax': {
                            width: '300px'
                        }
                    }}>
                    <Collapse.Group splitted accordion={false}>
                        <Collapse title="Why Choose Niparo?">
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                We Simplify Your Facility Management.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • Niparo: Empowering you to focus on your core business in today's fast-paced environment, managing a facility often feels like a constant juggling act. Between core business priorities, managing multiple vendors, and overseeing a constant stream of facility needs, valuable time and resources can be stretched thin. At Niparo, we understand this challenge.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • One-Stop Shop: Eliminate vendor headaches with our comprehensive product and service range, from cleaning supplies to breakroom essentials.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • Expert Solutions: Leverage our 25+ years of experience for customized plans that optimize your facility operations.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • Cost Savings: We secure competitive prices and develop strategic sourcing plans to maximize your budget.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • Beyond Products: Get valuable training, audits, and cost-saving strategies to get the most out of your facility.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • Your Partner: We build strong relationships and work collaboratively to achieve your specific goals.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • Quality & Sustainability: We provide high-quality products, partner with leading brands, and offer eco-friendly options.
                            </Text>
                            <Text css={{ padding: '6px 0px', lineHeight: '1.35' }}>
                                • Reliable Support: Count on us for extended support and emergency supply services to keep your facility running smoothly.
                            </Text>

                        </Collapse>
                    </Collapse.Group>
                </Grid>
            </Grid.Container>

            <Grid.Container>
                <Grid>
                    <Col>
                        <Text css={{
                            '@xsMin': {
                                fontSize: '$xl',
                                padding: '16px 0px 16px 0px'
                            },
                            '@xsMax': {
                                fontSize: '$md',
                                padding: '24px 0px 16px 0px'
                            },
                            fontWeight: '$semibold',
                            textAlign: 'center'
                        }}>
                            Reach Us
                        </Text>
                        
                    </Col>
                </Grid>
            </Grid.Container>

        </Grid.Container>
    )
}