import React, {useState} from 'react';
import {YMaps,Map,Placemark} from "react-yandex-maps";
import './map.css'

export const CardMap = ({lat,lon}) => {
    const [isLoading,setIsLoading] = useState(true)
    return (
        <div className="card-body__map">
            {isLoading &&  <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>}
            <YMaps>
                <Map
                    onLoad={() => setIsLoading(false)}
                    width={500}
                    height={500}
                    defaultState={{center: [lat, lon], zoom: 9}}
                >
                    <Placemark geometry={[lat, lon]}/>
                </Map>
            </YMaps>
        </div>
    );
};
