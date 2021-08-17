import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import "./style.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmVnaW45OSIsImEiOiJja3FzbWxwNHIwa3FxMnZvM3N0bmFjNm42In0.xb-QyjtVE5zpuxqtt0qiLw";

export const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState("-74.0");
  const [lat, setLat] = useState("40.0");

  useEffect(() => {
    setLng(props.lon);
    setLat(props.lat);
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 12,
    });
    marker.current = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map.current);
  }, [lng, lat, props.lat, props.lon]);

  return <div className="map" ref={mapContainer}></div>;
};
