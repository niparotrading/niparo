import React from "react";
import HomeLanding from "../../components/Hlanding/landing";
import Scroller from "../../components/Hmarquee/marquee";
import Mission from "../../components/Hmission/mission";
import Services from "../../components/Hservices/services";

export default function HomePage() {

    let textsData = [
        {
            heading: '95% Projects Delivered',
            subheading: 'Before 1st Deadling'
        },
        {
            heading: '20+ Clients',
            subheading: 'Served'
        },
        {
            heading: '30+ Services',
            subheading: 'Offered'
        },
        {
            heading: '25+ Years',
            subheading: 'Experience'
        },
    ]
    return (
        <>
            <HomeLanding />
            {/* types = ["texts", "distributors", "logos"] */}
            <Scroller type="texts" data={textsData}/> 
            <Mission />
            <Services />
        </>
    )
}