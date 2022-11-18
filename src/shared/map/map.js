import React, {useState} from 'react';
import {YMaps,Map,Placemark} from "react-yandex-maps";
import './map.css'
import {LoadingRing} from "../ui/loading-ring/loading-ring";

export const CardMap = ({lat,lon}) => {
    const [isLoading,setIsLoading] = useState(true)
    const styleMap = {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        padding: "0 5px",
    };
    const styleMapContainer = {width:"500", height: "600",position:"relative"};
    return (
        <div className="card-body__map" style={styleMapContainer}>
            {isLoading && <LoadingRing/>}
            <YMaps>
                <Map
                    onLoad={() => setIsLoading(false)}
                    style={styleMap}
                    defaultState={{center: [lat, lon], zoom: 9}}
                >
                    <Placemark geometry={[lat, lon]}/>
                </Map>
            </YMaps>
        </div>
    );
};
