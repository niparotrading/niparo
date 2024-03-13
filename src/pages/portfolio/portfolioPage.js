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
import { Button, Col, Grid, Link, Row, Text, Image} from "@nextui-org/react";
import "./portfolioPage.css"

export default function PortfolioPage(){

    let data = [
        {
            name: 'Office Stationary',
            image: Office
        },
        {
            name: 'Janitorial Equipment',
            image: Janitorial
        },
        {
            name:"Toiletteries",
            image:Toiletteries,
        },
        {
            name: 'Sanitization',
            image: Sanitization
        },
        {
            name: 'IT Consumables',
            image: ITConsumables
        },
        {
            name: 'Corporate Events',
            image: CorperateEvent
        },
        {
            name: 'Pantry Edibles',
            image: PantryEdibles
        },
        {
            name: 'First Aid Kits',
            image: FirstAid
        },
        {
            name: 'Gym Equipment',
            image: Gym
        },
        {
            name: 'Cutlieries & Crockeries',
            image: Cutleries
        },
    ]
    
    return(
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
                    '@mdMin': {
                        padding: '32px 0px'
                    },
                    '@mdMax': {
                        padding: '24px 0px' 
                    }
                }}>
                    <Row css={{
                        jc: 'center',
                        alignItems: 'center',
                        width: '100%', 
                    }}>
                        <Text css={{
                            '@mdMin': {
                                fontSize: '$4xl', 
                            },
                            '@mdMax': {
                                fontSize: '$2xl' 
                            },
                            fontWeight: '$semibold',
                            textGradient: "90deg, #009DFF 31.91%, #88D1FF 67.03%",
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
                            fontWeight: '',
                            fontSize: '$lg',
                            lineHeight: '1.3',
                            '@mdMin': {
                                padding: '32px 60px', 
                            },
                            '@mdMax': {
                                padding: '32px 24px', 
                            }
                        }}>
                            Embrace a comprehensive range of high-quality office consumables with our diverse material portfolio. From complete housekeeping consumables to being an authorized distributor of renowned brands like Diversey, Unger, Gala, and Rubbermaid, we ensure your workplace is equipped with the best. Our 3M products cater to the FM industry, featuring scrub pads, mats, and dry erase sheets. Explore our dispensers for washrooms, facilities, and kitchen areas, along with a sole distributorship of tissues and all paper products from Amasht.
                        </Text>
                    </Row>
                    <Row>
                    <div className="galleryPortfolio">
                    {data.map((service) => (
                        <Grid className="image-containerPortfolio" css={{
                            margin: '24px',
                            height: '250px', 
                            width: '350px', 
                        }}>
                             <Image
                                alt={service.name}
                                src={service.image}
                                css={{
                                    height: '250px', 
                                    width: '350px', 
                                    objectFit:"cover",
                                    "@hover":{
                                        cursor: 'pointer'
                                    }
                                }} 
                            />

                            <Text className="image-titlePortfolio" css={{
                                fontSize: '$lg',
                                fontWeight: '$semibold',
                                lineHeight: '1.1',
                                textDecoration:"underline",
                                "@hover":{
                                    cursor: 'pointer'
                                },
                                '@mdMin': {
                                    padding: '12px 60px', 
                                },
                                '@mdMax': {
                                    padding: '12px 24px', 
                                }
                            }}>
                                {service.name}
                            </Text>
                        </Grid>
                    ))}
                </div></Row>

                <Row>
                <Text css={{
                            textAlign: 'center',
                            fontWeight: '',
                            fontSize: '$lg',
                            lineHeight: '1.3',
                            '@mdMin': {
                                padding: '48px 60px', 
                            },
                            '@mdMax': {
                                padding: '48px 24px', 
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