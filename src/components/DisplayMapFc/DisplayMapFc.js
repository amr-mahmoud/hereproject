import * as React from "react";
import "./DisplayMapFc.css";
export const DisplayMapFC = ({ list }) => {
  // Create a reference to the HTML element we want to put the map on
  const mapRef = React.useRef(null);
  const apiKey = "4CwEQaxA5OnFpekbxDT-I096-13RkgrY5tYxtZMnPWY";

  /**
   * Create the map instance
   * While `useEffect` could also be used here, `useLayoutEffect` will render
   * the map sooner
   */
  React.useLayoutEffect(() => {
    // `mapRef.current` will be `undefined` when this hook first runs; edge case that
    if (!mapRef.current) return;
    const H = window.H;
    const platform = new H.service.Platform({
      apikey: apiKey,
    });
    const defaultLayers = platform.createDefaultLayers();
    const hMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
      center: { lat: 52.56222, lng: 13.35125 },
      zoom: 9,
      pixelRatio: window.devicePixelRatio || 1,
    });
    if (list && list.length > 0) {
      list.map((member) => {
        let marker = new H.map.Marker({
          lat: member.Latitude,
          lng: member.Longitude,
        });
        return hMap.addObject(marker);
      });
    }
    // eslint-disable-next-line
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(hMap));
    // eslint-disable-next-line
    const ui = H.ui.UI.createDefault(hMap, defaultLayers);

    // This will act as a cleanup to run once this hook runs again.
    // This includes when the component un-mounts
    return () => {
      hMap.dispose();
    };
  }, [mapRef, list]); // This will run this hook every time this ref is updated

  return (
    <div
      className="map"
      ref={mapRef}
      style={{ width: "900px", height: "600px" }}
    />
  );
};
