import React from 'react';
import {YMaps,Map} from "react-yandex-maps";

export const CardMap = ({lat,lon}) => {
    return (
        <div className="card-body__map">
            <YMaps>
                <Map
                    width={400}
                    height={500}
                    defaultState={{
                    center: [lat, lon],
                    zoom: 9
                }} />
            </YMaps>
        </div>
    );
};
