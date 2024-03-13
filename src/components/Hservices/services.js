import React from "react";
import ITConsumables from '../../assets/PortfolioImages/ITConsumables.jpg'
import Janitorial from '../../assets/PortfolioImages/JanitorialEquipment.jpg'
import Office from '../../assets/PortfolioImages/OfficeStationary.jpg'
import FirstAid from '../../assets/PortfolioImages/FirstAid.jpg'
import Gym from '../../assets/PortfolioImages/GymEquipment.jpg'
import Sanitization from '../../assets/PortfolioImages/Santization.jpg'
import { Col, Grid, Link, Button, Image, Text} from "@nextui-org/react";
import './services.css'

export default function Services() {

    let data = [
        {
            name: 'IT Consumables',
            image: ITConsumables
        },
        {
            name: 'Janitorial Equipment',
            image: Janitorial
        },
        {
            name: 'First Aid Kits',
            image: FirstAid
        },
        {
            name: 'Office Stationary',
            image: Office
        },
        {
            name: 'Gym Equipment',
            image: Gym
        },
        {
            name: 'Sanitization',
            image: Sanitization
        },
    ]

    return (
        <Grid.Container css={{
            jc: 'center',
            alignItems: 'center'
        }}>

            <Text css={{
                '@xsMin':{
                    fontSize: '$4xl',
                    padding: '36px 0px 0px 0px'
                },
                '@xsMax':{
                    fontSize: '$2xl'
                },
                fontWeight: '$semibold',
                textGradient: "45deg, $purple600 20%, #CCA3FF 100%",
            }}>
                Services
            </Text>

            <Col css={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                jc: 'center'
            }}>
                <div className="gallery">
                    {data.map((service) => (
                        <Grid className="image-container" css={{
                            margin: '24px',
                            height: '300px', 
                            width: '300px', 
                        }}>
                             <Image
                                alt={service.name}
                                src={service.image}
                                css={{
                                    height: '300px', 
                                    width: '300px', 
                                    objectFit:"cover",
                                    "@hover":{
                                        cursor: 'pointer'
                                    }
                                }} 
                            />

                            <Text className="image-title" css={{
                                fontSize: '$lg',
                                fontWeight: '$semibold',
                                lineHeight: '1.1',
                                "@hover":{
                                    cursor: 'pointer'
                                }
                            }}>
                                {service.name}
                            </Text>
                        </Grid>
                    ))}
                </div>

                <Link href="/portfolio">
                    <Button color="secondary" auto flat >
                        Portfolio →
                    </Button>
                </Link>

            </Col>
        </Grid.Container>
    )
}