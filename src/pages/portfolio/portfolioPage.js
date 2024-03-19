import React from "react";
import ITConsumables from '../../assets/PortfolioImages/ITConsumables.jpg'
import Janitorial from '../../assets/PortfolioImages/JanitorialEquipment.jpg'
import Office from '../../assets/PortfolioImages/OfficeStationary.jpg'
import FirstAid from '../../assets/PortfolioImages/FirstAid.jpg'
import Gym from '../../assets/PortfolioImages/GymEquipment.jpg'
import Sanitization from '../../assets/PortfolioImages/Santization.jpg'
import Toiletteries from '../../assets/PortfolioImages/Toiletteries.jpg'
import CorperateEvent from '../../assets/PortfolioImages/CorporateEvent.jpg'
import PantryEdibles from '../../assets/PortfolioImages/PantryEdibles.jpg'
import Cutleries from '../../assets/PortfolioImages/Cutlery.jpg'
import { Button, Col, Grid, Link, Row, Text, Image, Collapse } from "@nextui-org/react";
import "./portfolioPage.css"

export default function PortfolioPage() {

    let data = [
        {
            name: 'Office Stationary',
            image: Office,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'Janitorial Equipment',
            image: Janitorial,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: "Toiletteries",
            image: Toiletteries,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'Sanitization',
            image: Sanitization,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'IT Consumables',
            image: ITConsumables,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'Corporate Events',
            image: CorperateEvent,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'Pantry Edibles',
            image: PantryEdibles,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'First Aid Kits',
            image: FirstAid,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'Gym Equipment',
            image: Gym,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'Cutlieries & Crockeries',
            image: Cutleries,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
    ]

    return (
        <>
            <Grid.Container css={{
                jc: 'center',
                alignItems: 'center',
            }}>
                <Col css={{
                    display: 'flex',
                    flexDirection: 'column',
                    jc: 'center',
                    alignItems: 'center',
                    '@smMin': {
                        padding: '32px 0px'
                    },
                    '@smMax': {
                        padding: '24px 0px'
                    }
                }}>
                    <Row css={{
                        jc: 'center',
                        alignItems: 'center',
                        width: '100%',
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
                            padding: '18px 0px'
                        }}>
                            Products & Services
                        </Text>
                    </Row>
                    <Row css={{
                        jc: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        <Text css={{
                            textAlign: 'center',
                            fontWeight: '$medium',
                            fontSize: '$lg',
                            lineHeight: '1.3',
                            '@smMin': {
                                padding: '12px 60px',
                            },
                            '@smMax': {
                                padding: '12px 24px',
                            }
                        }}>
                            Embrace a comprehensive range of high-quality office consumables with our diverse material portfolio. From complete housekeeping consumables to being an authorized distributor of renowned brands like Diversey, Unger, Gala, and Rubbermaid, we ensure your workplace is equipped with the best. Our 3M products cater to the FM industry, featuring scrub pads, mats, and dry erase sheets. Explore our dispensers for washrooms, facilities, and kitchen areas, along with a sole distributorship of tissues and all paper products from Amasht.
                        </Text>
                    </Row>
                    <Row>
                        <Grid.Container justify="center" css={{
                            margin: '24px'
                        }}>
                            {data.map((service, index) => (
                                <Grid xs={12} sm={6} md={4} key={index} css={{
                                    margin: '12px 60px'
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                        <Image
                                            alt={service.name}
                                            src={service.image}
                                            css={{
                                                height: '300px',
                                                width: '500px',
                                                objectFit: 'cover',
                                                "@hover": {
                                                    cursor: 'pointer'
                                                }
                                            }}
                                        />
                                        <Collapse.Group splitted accordion={false}>
                                            <Collapse title={service.name} css={{
                                                marginTop: '1rem',
                                                width: '500px',
                                                jc: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                '.nextui-collapse-title': {
                                                    textDecoration: 'underline',
                                                    width: '100%',
                                                    justifyContent: 'center',
                                                    textAlign: "center"
                                                }

                                            }}>
                                                <Text css={{
                                                    fontSize: '$lg',
                                                    padding: '0 1rem',
                                                }}>
                                                    {service.info}
                                                </Text>
                                            </Collapse>
                                        </Collapse.Group>
                                    </div>
                                </Grid>
                            ))}
                        </Grid.Container>



                    </Row>

                    <Row>
                        <Text css={{
                            textAlign: 'center',
                            fontWeight: '$medium',
                            fontSize: '$lg',
                            lineHeight: '1.3',
                            '@smMin': {
                                padding: '24px 60px',
                            },
                            '@smMax': {
                                padding: '24px 24px',
                            }
                        }}>
                            Beyond materials, we extend our support into cutleries, crockeries (both normal and biodegradable), and a range of sanitizers and soaps. In essence, we provide a holistic solution, covering everything from stationery to electrical and plumbing items.

                            Value is not just about products; it's about service. Collaborating with our service partners, we offer training and site audits related to initiation and upgradation. Committed to your success, we go beyond by providing insights into cost optimization and improvement. Elevate your workspace with us, where quality and service converge seamlessly.                        </Text>
                    </Row>
                </Col>
            </Grid.Container>
        </>
    )
}