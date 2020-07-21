import GeoJSON from 'ol/format/geojson';
import olVectorLayer from 'ol/layer/vector';
import olVectorSource from 'ol/source/vector';
import olFill from 'ol/style/fill';
import olStroke from 'ol/style/stroke';
import olStyle from 'ol/style/style';
import olText from 'ol/style/text';

const styleFunction = feature => {
  const color = feature.getProperties().selected ? '#FF6347' : '#7FDBFF33';
  const name = feature.getProperties().name;
  return [
    new olStyle({
      fill: new olFill({ color: color }),
      stroke: new olStroke({
        color: '#0074D9',
        width: 2,
      }),
      text: new olText({ text: name }),
    }),
  ];
};

export const getWfsLayer = async(url) => {

  try {
    const layer = new olVectorLayer({
      source: new olVectorSource({
        format: new GeoJSON(),
        url,
      }),
      style: styleFunction,
      title: 'GeoServerLayer',
    });
    return layer;
  } catch (err) {
    console.log(err);
    return null;
  }
}

