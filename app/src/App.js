import React from 'react';
import { Map, Controls, Popup, LayerPanel } from '@bayer/ol-kit';
import { getWfsLayer } from './geoserver'

function App (){
  const onMapInit = async (map) => {
    var wfsUrl = process.env.REACT_APP_WFS_URL
    if (wfsUrl && wfsUrl.length > 0){
      var wfsLayer = await getWfsLayer(wfsUrl);
      map.addLayer(wfsLayer);
    }
  }

  return (
    <Map onMapInit={onMapInit} >
      <Controls />
      <Popup />
      <LayerPanel />  
    </Map>
  )
}

export default App
