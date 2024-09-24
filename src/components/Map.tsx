import React, { useMemo, useRef, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import { MESSAGES } from "@/constants/constants";
import WeatherDisplay from "./WeatherDisplay";
import MarkerIcon from "./MarkerIcon";

type Marker = {
  _latlng: { lat: number; lng: number };
};

export default function MapSelector() {
  const [position, setPosition] = useState({
    lat: 39.9334,
    lng: 32.8597,
  });
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const markerRef = useRef(null);

  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          const typedMarker = marker as Marker;
          setPosition(typedMarker._latlng);
        }
      },
    }),
    []
  );

  return (
    isMounted && (
      <>
        <MapContainer
          center={[39.9334, 32.8597]}
          zoom={7}
          scrollWheelZoom={false}
          className="max-w-xl mb-4"
          style={{ height: "50vh" }}
        >
          <TileLayer
            attribution={MESSAGES.MAP_ATTRIBUTION}
            url={MESSAGES.MAP_URL}
          />
          <Marker
            draggable={true}
            position={position}
            eventHandlers={eventHandlers}
            ref={markerRef}
            icon={MarkerIcon()}
          ></Marker>
        </MapContainer>
        {position && <WeatherDisplay lat={position.lat} lon={position.lng} />}
      </>
    )
  );
}
