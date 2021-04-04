import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';

import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  const {offers, activeCardId} = props;

  const [offerOne] = offers;

  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: offerOne.city.location.latitude,
        lng: offerOne.city.location.longitude
      },
      zoom: offerOne.city.location.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    const iconsGroup = leaflet.layerGroup().addTo(mapRef.current);

    mapRef.current.setView(
        {
          lat: offerOne.city.location.latitude,
          lng: offerOne.city.location.longitude
        },
        offerOne.city.location.zoom
    );

    const icon = leaflet.icon({
      iconUrl: `./img/pin.svg`,
      iconSize: [30, 30]
    });

    const activeIcon = leaflet.icon({
      iconUrl: `./img/pin-active.svg`,
      iconSize: [30, 30]
    });

    offers.forEach((offer) => {
      leaflet.marker({
        lat: offer.location.latitude,
        lng: offer.location.longitude
      },
      {
        icon: offer.id === activeCardId ? activeIcon : icon
      })
      .addTo(iconsGroup);
    });

    return () => {
      iconsGroup.clearLayers();
    };

  }, [offers, activeCardId]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  activeCardId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Map;
