# docker-ol-kit

This container enables running a standalone ol-kit app with the ability to dynamically import layers from local files.  

## ol-kit docs

<https://github.com/MonsantoCo/ol-kit>  

## To run this image  

```bash
docker run -p 8000:80 1904labs/ol-kit:latest  
```

## To build this image locally

- clone this repository  

```bash
docker build . -t ol-kit:latest  
docker run -p 8000:80 ol-kit:latest  
```

## React developers

If you want to run ol-kit in the npm test server in order to make and test  changes to the React app, you can:  

- install nodejs and npm  
- clone this repository  
- cd into the "app" directory  
- npm start  

## Interacting with the map

If the image is not running launch it with  

```bash
docker run -p 8000:80 1904labs/ol-kit:latest  
```

Once the image is running, to access the map open you browser and navigate to:
<http://localhost:8000>

You should see the map centered on the United States:  
![initial](https://raw.githubusercontent.com/1904labs/docker-ol-kit/master/images/initial.png)  

 Next select the layers panel icon on the right side of the screen to open the layers panel  
![panel open](https://raw.githubusercontent.com/1904labs/docker-ol-kit/master/images/panelopen.png)  

 To import a layer first you will need something to import, for this example I downloaded these two files:  

- From: <https://eric.clst.org/tech/usgeojson/>
  <https://eric.clst.org/assets/wiki/uploads/Stuff/gz_2010_us_040_00_500k.json>  
- From: <https://datahub.io/core/geo-nuts-administrative-boundaries#data>
  <https://datahub.io/core/geo-nuts-administrative-boundaries/r/nuts_rg_60m_2013_lvl_1.geojson1>  

Once you have those files (or any other geojson or kml files you wish to import), Click the three button menu in the layers panel and select import.  
![menu open](https://raw.githubusercontent.com/1904labs/docker-ol-kit/master/images/menuopen.png)  

After selecting import you can navigate in your computers file manager to the location you downloaded the files to and select the file gz_2010_us_040_00_500k.json, this will load the features layer to the map.  
![loaded1](https://raw.githubusercontent.com/1904labs/docker-ol-kit/master/images/loaded1.png)  

To zoom to the extent represented in the layer, click the three button menu next to that layer and select "Zoom to Layer Extent"  
![zoom select](https://raw.githubusercontent.com/1904labs/docker-ol-kit/master/images/zoomselect.png)  

This should zoom you out to a view akin to this:  
![zoomed](https://raw.githubusercontent.com/1904labs/docker-ol-kit/master/images/zoomed.png)  

Now to add the second layer open the layer panel menu again and select import, navigate to where you downloaded the files to, and select the file "nuts_rg_60m_2013_lvl_1.geojson1", this should add the new layer to the map:  
![loaded2](https://raw.githubusercontent.com/1904labs/docker-ol-kit/master/images/loaded2.png)  

From here you can experiment with adding and removing any geojson or kml files that you have access to, there are plenty available out on the web.  
