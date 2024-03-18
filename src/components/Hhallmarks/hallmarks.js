import React from "react";
import { Row, Col, Text, Image, Grid } from '@nextui-org/react';
import VIP from '../../assets/SalientFeatureLogos/ExtraMile.png'
import AF from '../../assets/SalientFeatureLogos/Accounting&Financial.png'
import BE from '../../assets/SalientFeatureLogos/BusinessEthos.png'
import LV from '../../assets/SalientFeatureLogos/LargeVolume.png'
import Prod from '../../assets/SalientFeatureLogos/Productivity.png'
import Regulations from '../../assets/SalientFeatureLogos/Regulations.png'
import FR from '../../assets/SalientFeatureLogos/FinancialReserve.png'
import './hallmarks.css'


export default function Hallmarks() {

    let data = [
        {
            logo: VIP,
            content: 'Ever ready to go the “extra mile” towards customer satisfaction!',
        },
        {
            logo: LV,
            content: 'Exposure to handling large clientele and big volumes with ease!',
        },
        {
            logo: BE,
            content: 'Uncompromised Business Ethos: Integrity – Quality – Transparency',
        },
        {
            logo: AF,
            content: 'Best practices in accounting and financials by qualified workforce!',
        },
        {
            logo: Prod,
            content: 'Structured and competitive pricing coupled with quality to enhance productivity!',
        },
        {
            logo: FR,
            content: 'Strong Financial reserves for sustaining deferred large transactions.',
        },
        {
            logo: Regulations,
            content: 'Commitment to adhere all Health & Safety regulatory compliances',
        },
    ]

    return (
        <Grid.Container css={{
            jc: 'center'
        }}>
            <Text css={{
                '@xsMin': {
                    fontSize: '$4xl',
                    padding: '36px 0px 24px 0px'
                },
                '@xsMax': {
                    fontSize: '$2xl',
                    padding: '36px 0px 24px 0px'
                },
                fontWeight: '$semibold',
                textGradient: "45deg, $purple600 20%, #CCA3FF 100%",
                width: '100vw',
                textAlign: 'center'
            }}>
                Hallmarks
            </Text>

            {/* {data.map((element) => (
                <Grid css={{
                    jc: 'center',
                    margin: '12px 24px',
                    width: '260px',
                    backgroundColor: '#1C1C1C',
                    borderRadius: '8px',
                    boxShadow: '$md',
                    filter: 'blur(12px)',
                    zIndex: '10',
                }}>
                    <Row  css={{
                        zIndex: '50'
                    }}>
                        <Image
                            src={element.logo}
                            css={{
                                height: '96px',
                                width: '96px',
                                objectFit: "cover",
                                "@hover": {
                                    cursor: 'pointer'
                                },
                            }}
                            width={'96px'}
                            height={'96px'}
                        />
                        <Text>

                        </Text>
                    </Row>
                </Grid>
            ))} */}

            {data.map((element) => (
                <div className="grid-item-container">
                    {/* Background layer for blur effect */}
                    <div className="background-blur"></div>

                    {/* Content */}
                    <Grid css={{ jc: 'center', backgroundColor: 'transparent', boxShadow: '$md', zIndex: '10', }}>
                        <Row className="grid-item-content" 
                            css={{
                                jc: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image
                                src={element.logo}
                                css={{
                                    height: '88px',
                                    width: '88px',
                                    objectFit: "cover",
                                    "@hover": {
                                        cursor: 'pointer'
                                    },
                                }}
                                width={'88px'}
                                height={'88px'}
                            />
                            <Text css={{ 
                                color: 'white',
                                width: '188px',
                                padding: '16px 8px',
                                fontSize: '$sm',
                                fontWeight: '$semibold'
                            }}> {/* Add styling as needed */}
                                {element.content}
                            </Text>
                        </Row>
                    </Grid>
                </div>
            ))}

        </Grid.Container>
    )
}