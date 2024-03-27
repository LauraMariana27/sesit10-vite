import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import Menu from './components/Menu'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Contact = () => {
    const position = [-25.4249668, -49.2748809]
    return(
        <>
            <Menu/>
            <div>
                <h1>Contato</h1>
                <div>
                    <h2>Mapa</h2>
                    <div>
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:"50vw" , height:"500px"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                        <Popup>
                            <a target="_blank" href="https://www.google.com/maps/place/R.+Paula+Gomes,+270+-+Centro,+Curitiba+-+PR,+80510-030/@-25.4249668,-49.2748809,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce5795befda7d:0xfd4f054127f9a778!8m2!3d-25.4249647!4d-49.272303!16s%2Fg%2F11krkw3wp0?entry=ttu"> Go to Maps</a>
                            <p> R. Paula Gomes, 270 - São Franscisco, Curitiba - PR, 80510-070</p>
                        </Popup>
                        </Marker>
                    </MapContainer>
                    </div>
                </div>
            </div>
        </>
    )
}
