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
import Client1 from '../../assets/Clients/09SOLUTIONS.jpeg'
import Client2 from '../../assets/Clients/Accenture.jpeg'
import Client3 from '../../assets/Clients/CAT.jpeg'
import Client4 from '../../assets/Clients/CBRE.jpeg'
import Client5 from '../../assets/Clients/CISCO.jpeg'
import Client6 from '../../assets/Clients/COMPASS.jpeg'
import Client7 from '../../assets/Clients/CUSHMAN.jpeg'
import Client8 from '../../assets/Clients/DELOITTE.jpeg'
import Client9 from '../../assets/Clients/DTS.jpeg'
import Client10 from '../../assets/Clients/EY.jpeg'
import Client11 from '../../assets/Clients/INDIQUBE.jpeg'
import Client12 from '../../assets/Clients/JLL.jpeg'
import Client13 from '../../assets/Clients/PWC.jpeg'
import Client14 from '../../assets/Clients/SG.jpeg'
import Testimonials from "../../components/Htestimonials/testimonials";

export default function HomePage() {

    let textsData = [
        {
            heading: '99% Projects Delivered',
            subheading: 'Before 1st Deadline'
        },
        {
            heading: '200+ Clients',
            subheading: 'Served'
        },
        {
            heading: '25+ Years',
            subheading: 'Experience'
        },
        {
            heading: '600+ Facilities',
            subheading: 'Served'
        },
        {
            heading: '3000+',
            subheading: 'Products'
        },
    ]

    let distributorsData = [
        Amasht,
        Britannia,
        MMM,
        Conta,
        Diversey
    ]

    let clientsData = [
        Client1,
        Client2,
        Client3,
        Client4,
        Client5,
        Client6,
        Client7,
        Client8,
        Client9,
        Client10,
        Client11,
        Client12,
        Client13,
        Client14,
    ]

    return (
        <>
            <HomeLanding />
            {/* types = ["texts", "distributors", "clients"] */}
            <Scroller type="texts" data={textsData}/> 
            <Mission />
            {/* <Services /> */}
            <Scroller type="clients" data={clientsData}/>
            <Hallmarks />
            <Scroller type="distributors" data={distributorsData}/>
            {/* <Testimonials/> */}
        </>
    )
}