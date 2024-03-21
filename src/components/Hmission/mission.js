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
            content: 'We focus on building lasting client relationships by exceeding expectations at every touchpoint. We proactively adapt to your evolving needs, ensuring mutual success.'
        },
        {
            heading: 'About Us',
            image: Logo2,
            content: 'Facility Experts. Over 2 decades of supporting your maintenance, startup, expansion & upgrades.'
        },
        {
            heading: 'Way Forward',
            image: Logo3,
            content: "Sustainable Growth: We're committed to eco-friendly solutions, cost savings, and exceeding expectations through innovation and partnerships."
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
                        borderColor: '$gray400',
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
                            borderRadius: '0px 0px 8px 8px'
                        }}>
                            { }
                        </Col>
                    </Col>
                </Grid>
            ))}

        </Grid.Container>
    )
}