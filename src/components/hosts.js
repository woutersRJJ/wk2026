import {firestoreDatabase} from "../services/firestore";
import {useEffect, useState} from "react";
import toronto from "../img/toronto.avif";
import vancouver from "../img/vancouver.avif";
import monterey from "../img/monterey.avif";
import guadalajara from "../img/guadalajara.avif";
import mexicoCity from "../img/mexicoCity.avif";
import atlanta from "../img/atlanta.avif";
import boston from "../img/boston.avif";
import dallas from "../img/dallas.avif";
import houston from "../img/houston.avif";
import NYC from "../img/NYC.avif";
import sanFran from "../img/sanFran.avif";
import seattle from "../img/seattle.avif";
import miami from "../img/miami.avif";
import philadelphia from "../img/philadelphia.avif";
import LA from "../img/LA.avif";
import kansas from "../img/kansas.avif";

export function Hosts() {
    const [hosts, setHosts] = useState([])
    useEffect(() => {
        loadHosts();
    }, []);

    async function loadHosts() {
        const result = await firestoreDatabase.collection('hosts').orderBy("country", "asc").orderBy("city", "asc").get();
        setHosts(result.docs.map(doc => ({...doc.data()})));
    }

    return <div>
        <h2>Hosts</h2>
        <div>
            <h3>Canada</h3>
            {hosts.filter(h => h.country === 'Canada').map((h, index) => <Host host={h} key={index}/>)}
            <h3>Mexico</h3>
            {hosts.filter(h => h.country === 'Mexico').map((h, index) => <Host host={h} key={index}/>)}
            <h3>USA</h3>
            {hosts.filter(h => h.country === 'USA').map((h, index) => <Host host={h} key={index}/>)}
        </div>

    </div>
}

function Host({host}) {
    return <div className='speler'>
        <div style={{marginTop: '10px'}}>{host.city}</div>
        <div>{host.stadium.name}</div>
        <div>Capacity: {host.stadium.capacity}</div>
        <div>Opened: {host.stadium.opened}</div>
        <ImageComponent city={host.city}/>
    </div>
}

function ImageComponent({city}){
    switch(city) {
        case 'Monterey':
            return <img src={monterey} alt={'foto'} width={'350px'}/>
        case 'Toronto':
            return <img src={toronto} alt={'foto'} width={'350px'}/>
        case 'Vancouver':
            return <img src={vancouver} alt={'foto'} width={'350px'}/>
        case 'Guadalajara':
            return <img src={guadalajara} alt={'foto'} width={'350px'}/>
        case 'Mexico City':
            return <img src={mexicoCity} alt={'foto'} width={'350px'}/>
        case 'Atlanta':
            return <img src={atlanta} alt={'foto'} width={'350px'}/>
        case 'Boston':
            return <img src={boston} alt={'foto'} width={'350px'}/>
        case 'Dallas':
            return <img src={dallas} alt={'foto'} width={'350px'}/>
        case 'Houston':
            return <img src={houston} alt={'foto'} width={'350px'}/>
        case 'New York':
            return <img src={NYC} alt={'foto'} width={'350px'}/>
        case 'San Fransisco':
            return <img src={sanFran} alt={'foto'} width={'350px'}/>
        case 'Seattle':
            return <img src={seattle} alt={'foto'} width={'350px'}/>
        case 'Miami':
            return <img src={miami} alt={'foto'} width={'350px'}/>
        case 'Philadelphia':
            return <img src={philadelphia} alt={'foto'} width={'350px'}/>
        case 'Los Angeles':
            return <img src={LA} alt={'foto'} width={'350px'}/>
        case 'Kansas':
            return <img src={kansas} alt={'foto'} width={'350px'}/>
        default: return null;
    }
}
