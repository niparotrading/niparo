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
import Bin from '../../assets/PortfolioImages/Bin.jpg'
import WG from '../../assets/PortfolioImages/WhiteGoods.jpg'
import { Button, Col, Grid, Link, Row, Text, Image, Collapse } from "@nextui-org/react";
import "./portfolioPage.css"

export default function PortfolioPage() {

    let data = [
        {
            name: 'Housekeeping Consumables',
            image: Sanitization,
            info: "Streamline Cleanliness & Maintain a sparkling facility with: Cleaning Chemicals: High-performance formulas for tackling various surfaces and messes. Dispensers: Wall-mounted or portable dispensers for controlled use of cleaning solutions. Cleaning Tools & Equipment: Durable mops, brooms, vacuum cleaners, and other tools for efficient cleaning. Trash Removal Supplies: Trash bags, liners, bins, and recycling bins for seamless waste disposal. Trusted brand options – Diversey (Taski Chemicals)"
        },
        {
            name: "Hygiene Essentials",
            image: Toiletteries,
            info: "Ensures a healthy and hygienic environment for occupants and visitors with: Facial Tissues & Toilet Paper: Promote comfort and hygiene in restrooms. Hand Sanitizers & Disinfectants: Combat germs and maintain cleanliness throughout your facility. Paper Towels & Dispensers: Efficiently manage hand drying needs. Multipurpose Wipes: Convenient for quick cleaning and surface disinfection. Trusted brand options - Amasht & Saraya Mystair"
        },
        {
            name: 'Restroom Supplies',
            image: Janitorial,
            info: 'Maintain clean and efficient restrooms with our comprehensive selection: Hand Dryers: Energy-efficient and hygienic hand drying options for a touchless experience. Soap Dispensers: Choose from touchless, manual, or wall-mounted dispensers for various soap types (liquid, foam, or spray). Toilet Paper Dispensers: High-capacity or single-roll dispensers for optimal efficiency and user convenience. Trusted brand options - Euronics, Amasht & Saraya Mystair.'
        },
        {
            name: 'Bins',
            image: Bin,
            info: "We offer a diverse range of high-quality bins, crafted from a variety of materials to suit any facility requirement. Choose from: Durable Plastic Bins: Lightweight and cost-effective for everyday waste collection. Stainless Steel Bins: Sleek and hygienic, ideal for high-traffic areas and kitchens. Trusted Brand Options: Otto, Rubbermaid, Aristo, Nilkamal, and Sintex, ensuring quality and reliability"
        },
        {
            name: 'Essential White Goods',
            image: WG,
            info: "Enhance employee well-being and optimize operations with our reliable white goods: Refrigerators & Freezers, Microwaves, Water Coolers, Washing Machines & Dryers, Televisions. Trusted brand options: LG, Samsung, Bluestar, Bosch"
        },
        {
            name: 'Office Stationary',
            image: Office,
            info: "We provide a complete range of mechanical, electrical, and office stationery items."
        },
        {
            name: 'IT Consumables',
            image: ITConsumables,
            info: "Dinnerware, cookware, mugs and cups, kitchen utensils and kitchen storage, kitchen appliances, thermos and bottles [Branding available]"
        },
        {
            name: 'FMCG Essentials',
            image: PantryEdibles,
            info: "Stock your pantry for success with beverages, snacks, Breakfast essentials, instant food, and all kinds of condiments. Trusted brand options: Britannia, PepsiCo, Coca-Cola, Nestle, HUL, ITC, Haldirams and MTR. We offer all branded pantry items ranging from Britannia, Parle, ITC, PepsiCo, Coke, Amul, Too Yum, McCain, etc"
        },
        {
            name: 'Cutlieries & Crockeries',
            image: Cutleries,
            info: "Elevate Your Facility's Dining Experience with Branded Cutlery & Crockery -All kinds of plates, bowls, glasses, mugs & cups, spoons, forks, dinnerware sets and serving utensils for facility customizable with your branding! Trusted brand options: Borosil, Serve Well, Clay craft, Milton & Ariane"
        },
        {
            name: 'Gym Equipment',
            image: Gym,
            info: "We provide sports items for all sports (cricket, football, tennis, badminton, etc.) and gym equipment treadmills, exercise bikes, and free weights equipment. TT Tables, Foosball Tables, Snooker/Pool Table."
        },
        {
            name: 'Essential Safety Items',
            image: FirstAid,
            info: "Protect your facility from any situation with Fire extinguishers, First aid kits, wheelchairs, stretcher, disposable gloves, safety goggles, and other medical equipment."
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
                            Embrace a comprehensive range of high-quality office consumables with our diverse material portfolio. From complete housekeeping consumables to being an authorized distributor of renowned brands like Diversey, we ensure your workplace is equipped with the best. Our 3M products cater to the FM industry, featuring scrub pads, mats, and dry erase sheets. Explore our dispensers for washrooms, facilities, and kitchen areas, along with a sole distributorship of tissues and all paper products from Amasht.
                        </Text>
                    </Row>
                    <Row>
                        <Grid.Container justify="center" css={{
                            margin: '24px'
                        }}>
                            {data.map((service, index) => (
                                <Grid xs={12} sm={6} md={4} key={index} css={{
                                    margin: '24px 60px'
                                }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                                        <Image
                                            alt={service.name}
                                            src={service.image}
                                            css={{
                                                height: '250px',
                                                width: '400px',
                                                objectFit: 'cover',
                                                "@hover": {
                                                    cursor: 'pointer'
                                                }
                                            }}
                                        />
                                        <Collapse.Group>
                                            <Collapse title={service.name} css={{
                                                // marginTop: '1rem',
                                                width: '100%',
                                                jc: 'center',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                '.nextui-collapse-title': {
                                                    textDecoration: 'underline',
                                                    width: '100%',
                                                    justifyContent: 'center',
                                                    textAlign: "center",
                                                    fontWeight: '$medium',
                                                    fontSize: '$xl'
                                                }

                                            }}>
                                                <Text css={{
                                                    fontSize: '$base',
                                                    padding: '0px 24px',
                                                    lineHeight: '1.3'
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