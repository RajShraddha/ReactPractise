import GoogleMapReact from "google-map-react";
import "./styles.css";
import Location from "./Location";

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <Location
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
        />
      );
    }
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyByL5fBDcz4hWG0hpAyF2HhW6jU4mXNcSM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
};

export default Map;
