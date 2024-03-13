import React from "react";
import HomeLanding from "../../components/Hlanding/landing";
import Scroller from "../../components/Hmarquee/marquee";
import Mission from "../../components/Hmission/mission";
import Services from "../../components/Hservices/services";
import Amasht from '../../assets/Distributors/Amasht.jpeg'
import Britannia from '../../assets/Distributors/Britannia.jpeg'
import MMM from '../../assets/Distributors/3M.png'
import Conta from '../../assets/Distributors/ContaGroup.jpeg'
import Diversey from '../../assets/Distributors/diversey-logo-vector.svg'
import Hallmarks from "../../components/Hhallmarks/hallmarks";

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

    let distributorsData = [
        Amasht,
        Britannia,
        MMM,
        Conta,
        Diversey
    ]

    return (
        <>
            <HomeLanding />
            {/* types = ["texts", "distributors", "logos"] */}
            <Scroller type="texts" data={textsData}/> 
            <Mission />
            <Services />
            <Scroller type="distributors" data={distributorsData}/>
            <Hallmarks />
        </>
    )
}