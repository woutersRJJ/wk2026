import {firestoreDatabase} from "../services/firestore";
import {useEffect, useState} from "react";

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
        <h2>Hosts</h2>npx ser
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
    </div>
}
