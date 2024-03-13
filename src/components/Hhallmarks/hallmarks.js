import React from "react";
import { Row, Col, Text, Image, Grid } from '@nextui-org/react';

export default function Hallmarks(){
    return(
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
                }}>
                    Hallmarks
                </Text>
        </Grid.Container>
    )
}