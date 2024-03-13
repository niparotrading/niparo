import { Grid, Col, Text, Image } from "@nextui-org/react";
import React from "react";
import Logo1 from '../../assets/MissionLogos/handshake.png'
import Logo2 from '../../assets/MissionLogos/rocket.png'
import Logo3 from '../../assets/MissionLogos/arrow.png'

export default function Mission() {

    let data = [
        {
            heading: 'Our Promise',
            image: Logo1,
            content: 'To Envision, Endeavor, Enhance, Enrich customer delight and satisfaction at every step of our business association with all clients & be positively proactive to keep in pace with ever changing needs of clients leading to mutual growth.'
        },
        {
            heading: 'About Us',
            image: Logo2,
            content: 'An organization, operating since 1999 successfully supporting our clients professionally, in fulfilling their needs of materials related to Facility Maintenance, Start Up, Expansion & Upgradation.'
        },
        {
            heading: 'Way Forward',
            image: Logo3,
            content: 'Our path forward includes promoting eco-friendly products, cost reduction, staying current, surpassing benchmarks, optimizing budgets, and fostering knowledge-sharing partnerships with OEMs to enhance client capabilities.'
        },
    ]

    return (
        <Grid.Container css={{
            jc: 'center',
            alignItems: 'top',
            padding: '36px 0px 0px 0px',
            "@smMax": {
              paddingBottom: '36px', 
            },
        }}>
            {data.map((box, index) => (
                <Grid key={index} css={{
                    padding: '0px 18px',
                    position: 'relative', 
    
                    "@smMax": {
                      marginBottom: '36px', 
                    },
                    "@mdMax": {
                      marginBottom: '36px',
                    }
                }}>
                    <Col css={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxW: '250px',
                        textAlign: 'center',
                        borderStyle: 'solid',
                        borderWidth: '2px',
                        borderColor: '$white',
                        borderRadius: '8px',
                        paddingTop: '36px', 
                    }}>
                        <Text css={{
                            fontWeight: '$semibold',
                            fontSize: '$xl',
                            position: 'absolute', 
                            top: '-18px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '$background',
                            padding: '0 10px', 
                        }}>
                            {box.heading}
                        </Text>

                        <Image css={{
                            width: '48px',
                            height: '48px',
                            marginTop: '12px'
                        }} src={box.image}
                        />

                        <Text css={{
                            fontWeight: '$medium',
                            fontSize: '$sm',
                            padding: '12px 6px '
                        }}>
                            {box.content}
                        </Text>

                        <Col css={{
                            height: '16px',
                            backgroundColor: '$gray400',
                            opacity: '0.5',
                            borderRadius: '8px'
                        }}>
                            { }
                        </Col>
                    </Col>
                </Grid>
            ))}

        </Grid.Container>
    )
}