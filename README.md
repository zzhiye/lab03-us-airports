# US Airports Web Map

![US Airports Web Map Preview](/img/US_Airports_Web_Map.png)

This repository contains the neccessary files to create and display an interactive web map of airports in the United States. As it is shown in the map preview above, users are able to identify whether or not an airport has an air control tower present and the airport count by state through the form of a choropleth map. Additionally, users are able to click on the airplane icons to display the name of the airport. Futhermore, users can zoom in and out of the map to view select portions of the US and they can use the added ruler feature to measure distances from location to another. Moreover, there are map elements such as a legend, scale bar, and credits to aid in the visualization and credibility of the map. Lastly, the web map can be viewed at: https://zzhiye.github.io/us-airports/index.html.

## Primary Functions of this Web Map
* **Overall Purpose**: The functionality of this web map is to communicate the airport count throughout the US and show whether air control tower is present or not.
* **Base Map, Legend, and Choropleth Layer**: These functionalities provide visual enhancements to the web map. For instance, the light color base map provided by CartoDB helps draw focus to the US choropleth layer and air control tower icons. The legend provides insight on air control tower presence and airport count by state, which is associated with the choropleth layer.
* **Air Control Tower Icons**: This functionality helps user identify whether or not an air control tower is present. Additionally, users can click on the icon to display the airport name.
* **Zoom**: This functionality allows the user to zoom in and out of the map to view select portions of the US.
* **Leaflet-ruler**: This functionality was added from Leaflet Plugins to allow the user to measure distances from location to another.
* **Scale Bar**: This functionality provides a visual indication of distance and feature size of the map.
* **Credits**: This functionality provides information regarding the data source and map author.

## Libraries
* Chroma.js @ 1.3.4
* Font Awesome @ 4.7.0
* Google Fonts: Open Sans
* JQuery @ 3.1.0
* Leaflet @ 1.7.1
* Leaflet Ajax @ 2.1.0
* Leaflet Plugins: Leaflet-ruler (maintained by [Goker Tanrisever](https://github.com/gokertanrisever/leaflet-ruler))

## Data Sources
* US Airport Data by USGS
* US States by Mike Bostock of D3
* Base Map by CartoDB

## Credit and Acknowledgment
This lab was made by UW Professor, Bo Zhao along with Kevin Ko, who upgraded the lab material. Thank you for this lab to help teach web map applications.
