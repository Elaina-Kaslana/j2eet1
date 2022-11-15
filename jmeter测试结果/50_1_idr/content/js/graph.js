/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 293.0, "series": [{"data": [[0.0, 19.0], [0.1, 19.0], [0.2, 19.0], [0.3, 19.0], [0.4, 19.0], [0.5, 19.0], [0.6, 19.0], [0.7, 19.0], [0.8, 19.0], [0.9, 19.0], [1.0, 19.0], [1.1, 19.0], [1.2, 19.0], [1.3, 19.0], [1.4, 19.0], [1.5, 19.0], [1.6, 19.0], [1.7, 19.0], [1.8, 19.0], [1.9, 19.0], [2.0, 20.0], [2.1, 20.0], [2.2, 20.0], [2.3, 20.0], [2.4, 20.0], [2.5, 20.0], [2.6, 20.0], [2.7, 20.0], [2.8, 20.0], [2.9, 20.0], [3.0, 20.0], [3.1, 20.0], [3.2, 20.0], [3.3, 20.0], [3.4, 20.0], [3.5, 20.0], [3.6, 20.0], [3.7, 20.0], [3.8, 20.0], [3.9, 20.0], [4.0, 21.0], [4.1, 21.0], [4.2, 21.0], [4.3, 21.0], [4.4, 21.0], [4.5, 21.0], [4.6, 21.0], [4.7, 21.0], [4.8, 21.0], [4.9, 21.0], [5.0, 21.0], [5.1, 21.0], [5.2, 21.0], [5.3, 21.0], [5.4, 21.0], [5.5, 21.0], [5.6, 21.0], [5.7, 21.0], [5.8, 21.0], [5.9, 21.0], [6.0, 21.0], [6.1, 21.0], [6.2, 21.0], [6.3, 21.0], [6.4, 21.0], [6.5, 21.0], [6.6, 21.0], [6.7, 21.0], [6.8, 21.0], [6.9, 21.0], [7.0, 21.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 21.0], [7.6, 21.0], [7.7, 21.0], [7.8, 21.0], [7.9, 21.0], [8.0, 21.0], [8.1, 21.0], [8.2, 21.0], [8.3, 21.0], [8.4, 21.0], [8.5, 21.0], [8.6, 21.0], [8.7, 21.0], [8.8, 21.0], [8.9, 21.0], [9.0, 21.0], [9.1, 21.0], [9.2, 21.0], [9.3, 21.0], [9.4, 21.0], [9.5, 21.0], [9.6, 21.0], [9.7, 21.0], [9.8, 21.0], [9.9, 21.0], [10.0, 21.0], [10.1, 21.0], [10.2, 21.0], [10.3, 21.0], [10.4, 21.0], [10.5, 21.0], [10.6, 21.0], [10.7, 21.0], [10.8, 21.0], [10.9, 21.0], [11.0, 21.0], [11.1, 21.0], [11.2, 21.0], [11.3, 21.0], [11.4, 21.0], [11.5, 21.0], [11.6, 21.0], [11.7, 21.0], [11.8, 21.0], [11.9, 21.0], [12.0, 22.0], [12.1, 22.0], [12.2, 22.0], [12.3, 22.0], [12.4, 22.0], [12.5, 22.0], [12.6, 22.0], [12.7, 22.0], [12.8, 22.0], [12.9, 22.0], [13.0, 22.0], [13.1, 22.0], [13.2, 22.0], [13.3, 22.0], [13.4, 22.0], [13.5, 22.0], [13.6, 22.0], [13.7, 22.0], [13.8, 22.0], [13.9, 22.0], [14.0, 22.0], [14.1, 22.0], [14.2, 22.0], [14.3, 22.0], [14.4, 22.0], [14.5, 22.0], [14.6, 22.0], [14.7, 22.0], [14.8, 22.0], [14.9, 22.0], [15.0, 22.0], [15.1, 22.0], [15.2, 22.0], [15.3, 22.0], [15.4, 22.0], [15.5, 22.0], [15.6, 22.0], [15.7, 22.0], [15.8, 22.0], [15.9, 22.0], [16.0, 22.0], [16.1, 22.0], [16.2, 22.0], [16.3, 22.0], [16.4, 22.0], [16.5, 22.0], [16.6, 22.0], [16.7, 22.0], [16.8, 22.0], [16.9, 22.0], [17.0, 22.0], [17.1, 22.0], [17.2, 22.0], [17.3, 22.0], [17.4, 22.0], [17.5, 22.0], [17.6, 22.0], [17.7, 22.0], [17.8, 22.0], [17.9, 22.0], [18.0, 22.0], [18.1, 22.0], [18.2, 22.0], [18.3, 22.0], [18.4, 22.0], [18.5, 22.0], [18.6, 22.0], [18.7, 22.0], [18.8, 22.0], [18.9, 22.0], [19.0, 22.0], [19.1, 22.0], [19.2, 22.0], [19.3, 22.0], [19.4, 22.0], [19.5, 22.0], [19.6, 22.0], [19.7, 22.0], [19.8, 22.0], [19.9, 22.0], [20.0, 22.0], [20.1, 22.0], [20.2, 22.0], [20.3, 22.0], [20.4, 22.0], [20.5, 22.0], [20.6, 22.0], [20.7, 22.0], [20.8, 22.0], [20.9, 22.0], [21.0, 22.0], [21.1, 22.0], [21.2, 22.0], [21.3, 22.0], [21.4, 22.0], [21.5, 22.0], [21.6, 22.0], [21.7, 22.0], [21.8, 22.0], [21.9, 22.0], [22.0, 23.0], [22.1, 23.0], [22.2, 23.0], [22.3, 23.0], [22.4, 23.0], [22.5, 23.0], [22.6, 23.0], [22.7, 23.0], [22.8, 23.0], [22.9, 23.0], [23.0, 23.0], [23.1, 23.0], [23.2, 23.0], [23.3, 23.0], [23.4, 23.0], [23.5, 23.0], [23.6, 23.0], [23.7, 23.0], [23.8, 23.0], [23.9, 23.0], [24.0, 23.0], [24.1, 23.0], [24.2, 23.0], [24.3, 23.0], [24.4, 23.0], [24.5, 23.0], [24.6, 23.0], [24.7, 23.0], [24.8, 23.0], [24.9, 23.0], [25.0, 23.0], [25.1, 23.0], [25.2, 23.0], [25.3, 23.0], [25.4, 23.0], [25.5, 23.0], [25.6, 23.0], [25.7, 23.0], [25.8, 23.0], [25.9, 23.0], [26.0, 24.0], [26.1, 24.0], [26.2, 24.0], [26.3, 24.0], [26.4, 24.0], [26.5, 24.0], [26.6, 24.0], [26.7, 24.0], [26.8, 24.0], [26.9, 24.0], [27.0, 24.0], [27.1, 24.0], [27.2, 24.0], [27.3, 24.0], [27.4, 24.0], [27.5, 24.0], [27.6, 24.0], [27.7, 24.0], [27.8, 24.0], [27.9, 24.0], [28.0, 25.0], [28.1, 25.0], [28.2, 25.0], [28.3, 25.0], [28.4, 25.0], [28.5, 25.0], [28.6, 25.0], [28.7, 25.0], [28.8, 25.0], [28.9, 25.0], [29.0, 25.0], [29.1, 25.0], [29.2, 25.0], [29.3, 25.0], [29.4, 25.0], [29.5, 25.0], [29.6, 25.0], [29.7, 25.0], [29.8, 25.0], [29.9, 25.0], [30.0, 27.0], [30.1, 27.0], [30.2, 27.0], [30.3, 27.0], [30.4, 27.0], [30.5, 27.0], [30.6, 27.0], [30.7, 27.0], [30.8, 27.0], [30.9, 27.0], [31.0, 27.0], [31.1, 27.0], [31.2, 27.0], [31.3, 27.0], [31.4, 27.0], [31.5, 27.0], [31.6, 27.0], [31.7, 27.0], [31.8, 27.0], [31.9, 27.0], [32.0, 27.0], [32.1, 27.0], [32.2, 27.0], [32.3, 27.0], [32.4, 27.0], [32.5, 27.0], [32.6, 27.0], [32.7, 27.0], [32.8, 27.0], [32.9, 27.0], [33.0, 27.0], [33.1, 27.0], [33.2, 27.0], [33.3, 27.0], [33.4, 27.0], [33.5, 27.0], [33.6, 27.0], [33.7, 27.0], [33.8, 27.0], [33.9, 27.0], [34.0, 28.0], [34.1, 28.0], [34.2, 28.0], [34.3, 28.0], [34.4, 28.0], [34.5, 28.0], [34.6, 28.0], [34.7, 28.0], [34.8, 28.0], [34.9, 28.0], [35.0, 28.0], [35.1, 28.0], [35.2, 28.0], [35.3, 28.0], [35.4, 28.0], [35.5, 28.0], [35.6, 28.0], [35.7, 28.0], [35.8, 28.0], [35.9, 28.0], [36.0, 30.0], [36.1, 30.0], [36.2, 30.0], [36.3, 30.0], [36.4, 30.0], [36.5, 30.0], [36.6, 30.0], [36.7, 30.0], [36.8, 30.0], [36.9, 30.0], [37.0, 30.0], [37.1, 30.0], [37.2, 30.0], [37.3, 30.0], [37.4, 30.0], [37.5, 30.0], [37.6, 30.0], [37.7, 30.0], [37.8, 30.0], [37.9, 30.0], [38.0, 30.0], [38.1, 30.0], [38.2, 30.0], [38.3, 30.0], [38.4, 30.0], [38.5, 30.0], [38.6, 30.0], [38.7, 30.0], [38.8, 30.0], [38.9, 30.0], [39.0, 30.0], [39.1, 30.0], [39.2, 30.0], [39.3, 30.0], [39.4, 30.0], [39.5, 30.0], [39.6, 30.0], [39.7, 30.0], [39.8, 30.0], [39.9, 30.0], [40.0, 45.0], [40.1, 45.0], [40.2, 45.0], [40.3, 45.0], [40.4, 45.0], [40.5, 45.0], [40.6, 45.0], [40.7, 45.0], [40.8, 45.0], [40.9, 45.0], [41.0, 45.0], [41.1, 45.0], [41.2, 45.0], [41.3, 45.0], [41.4, 45.0], [41.5, 45.0], [41.6, 45.0], [41.7, 45.0], [41.8, 45.0], [41.9, 45.0], [42.0, 48.0], [42.1, 48.0], [42.2, 48.0], [42.3, 48.0], [42.4, 48.0], [42.5, 48.0], [42.6, 48.0], [42.7, 48.0], [42.8, 48.0], [42.9, 48.0], [43.0, 48.0], [43.1, 48.0], [43.2, 48.0], [43.3, 48.0], [43.4, 48.0], [43.5, 48.0], [43.6, 48.0], [43.7, 48.0], [43.8, 48.0], [43.9, 48.0], [44.0, 58.0], [44.1, 58.0], [44.2, 58.0], [44.3, 58.0], [44.4, 58.0], [44.5, 58.0], [44.6, 58.0], [44.7, 58.0], [44.8, 58.0], [44.9, 58.0], [45.0, 58.0], [45.1, 58.0], [45.2, 58.0], [45.3, 58.0], [45.4, 58.0], [45.5, 58.0], [45.6, 58.0], [45.7, 58.0], [45.8, 58.0], [45.9, 58.0], [46.0, 88.0], [46.1, 88.0], [46.2, 88.0], [46.3, 88.0], [46.4, 88.0], [46.5, 88.0], [46.6, 88.0], [46.7, 88.0], [46.8, 88.0], [46.9, 88.0], [47.0, 88.0], [47.1, 88.0], [47.2, 88.0], [47.3, 88.0], [47.4, 88.0], [47.5, 88.0], [47.6, 88.0], [47.7, 88.0], [47.8, 88.0], [47.9, 88.0], [48.0, 90.0], [48.1, 90.0], [48.2, 90.0], [48.3, 90.0], [48.4, 90.0], [48.5, 90.0], [48.6, 90.0], [48.7, 90.0], [48.8, 90.0], [48.9, 90.0], [49.0, 90.0], [49.1, 90.0], [49.2, 90.0], [49.3, 90.0], [49.4, 90.0], [49.5, 90.0], [49.6, 90.0], [49.7, 90.0], [49.8, 90.0], [49.9, 90.0], [50.0, 104.0], [50.1, 104.0], [50.2, 104.0], [50.3, 104.0], [50.4, 104.0], [50.5, 104.0], [50.6, 104.0], [50.7, 104.0], [50.8, 104.0], [50.9, 104.0], [51.0, 104.0], [51.1, 104.0], [51.2, 104.0], [51.3, 104.0], [51.4, 104.0], [51.5, 104.0], [51.6, 104.0], [51.7, 104.0], [51.8, 104.0], [51.9, 104.0], [52.0, 106.0], [52.1, 106.0], [52.2, 106.0], [52.3, 106.0], [52.4, 106.0], [52.5, 106.0], [52.6, 106.0], [52.7, 106.0], [52.8, 106.0], [52.9, 106.0], [53.0, 106.0], [53.1, 106.0], [53.2, 106.0], [53.3, 106.0], [53.4, 106.0], [53.5, 106.0], [53.6, 106.0], [53.7, 106.0], [53.8, 106.0], [53.9, 106.0], [54.0, 109.0], [54.1, 109.0], [54.2, 109.0], [54.3, 109.0], [54.4, 109.0], [54.5, 109.0], [54.6, 109.0], [54.7, 109.0], [54.8, 109.0], [54.9, 109.0], [55.0, 109.0], [55.1, 109.0], [55.2, 109.0], [55.3, 109.0], [55.4, 109.0], [55.5, 109.0], [55.6, 109.0], [55.7, 109.0], [55.8, 109.0], [55.9, 109.0], [56.0, 114.0], [56.1, 114.0], [56.2, 114.0], [56.3, 114.0], [56.4, 114.0], [56.5, 114.0], [56.6, 114.0], [56.7, 114.0], [56.8, 114.0], [56.9, 114.0], [57.0, 114.0], [57.1, 114.0], [57.2, 114.0], [57.3, 114.0], [57.4, 114.0], [57.5, 114.0], [57.6, 114.0], [57.7, 114.0], [57.8, 114.0], [57.9, 114.0], [58.0, 118.0], [58.1, 118.0], [58.2, 118.0], [58.3, 118.0], [58.4, 118.0], [58.5, 118.0], [58.6, 118.0], [58.7, 118.0], [58.8, 118.0], [58.9, 118.0], [59.0, 118.0], [59.1, 118.0], [59.2, 118.0], [59.3, 118.0], [59.4, 118.0], [59.5, 118.0], [59.6, 118.0], [59.7, 118.0], [59.8, 118.0], [59.9, 118.0], [60.0, 118.0], [60.1, 118.0], [60.2, 118.0], [60.3, 118.0], [60.4, 118.0], [60.5, 118.0], [60.6, 118.0], [60.7, 118.0], [60.8, 118.0], [60.9, 118.0], [61.0, 118.0], [61.1, 118.0], [61.2, 118.0], [61.3, 118.0], [61.4, 118.0], [61.5, 118.0], [61.6, 118.0], [61.7, 118.0], [61.8, 118.0], [61.9, 118.0], [62.0, 127.0], [62.1, 127.0], [62.2, 127.0], [62.3, 127.0], [62.4, 127.0], [62.5, 127.0], [62.6, 127.0], [62.7, 127.0], [62.8, 127.0], [62.9, 127.0], [63.0, 127.0], [63.1, 127.0], [63.2, 127.0], [63.3, 127.0], [63.4, 127.0], [63.5, 127.0], [63.6, 127.0], [63.7, 127.0], [63.8, 127.0], [63.9, 127.0], [64.0, 129.0], [64.1, 129.0], [64.2, 129.0], [64.3, 129.0], [64.4, 129.0], [64.5, 129.0], [64.6, 129.0], [64.7, 129.0], [64.8, 129.0], [64.9, 129.0], [65.0, 129.0], [65.1, 129.0], [65.2, 129.0], [65.3, 129.0], [65.4, 129.0], [65.5, 129.0], [65.6, 129.0], [65.7, 129.0], [65.8, 129.0], [65.9, 129.0], [66.0, 129.0], [66.1, 129.0], [66.2, 129.0], [66.3, 129.0], [66.4, 129.0], [66.5, 129.0], [66.6, 129.0], [66.7, 129.0], [66.8, 129.0], [66.9, 129.0], [67.0, 129.0], [67.1, 129.0], [67.2, 129.0], [67.3, 129.0], [67.4, 129.0], [67.5, 129.0], [67.6, 129.0], [67.7, 129.0], [67.8, 129.0], [67.9, 129.0], [68.0, 135.0], [68.1, 135.0], [68.2, 135.0], [68.3, 135.0], [68.4, 135.0], [68.5, 135.0], [68.6, 135.0], [68.7, 135.0], [68.8, 135.0], [68.9, 135.0], [69.0, 135.0], [69.1, 135.0], [69.2, 135.0], [69.3, 135.0], [69.4, 135.0], [69.5, 135.0], [69.6, 135.0], [69.7, 135.0], [69.8, 135.0], [69.9, 135.0], [70.0, 139.0], [70.1, 139.0], [70.2, 139.0], [70.3, 139.0], [70.4, 139.0], [70.5, 139.0], [70.6, 139.0], [70.7, 139.0], [70.8, 139.0], [70.9, 139.0], [71.0, 139.0], [71.1, 139.0], [71.2, 139.0], [71.3, 139.0], [71.4, 139.0], [71.5, 139.0], [71.6, 139.0], [71.7, 139.0], [71.8, 139.0], [71.9, 139.0], [72.0, 141.0], [72.1, 141.0], [72.2, 141.0], [72.3, 141.0], [72.4, 141.0], [72.5, 141.0], [72.6, 141.0], [72.7, 141.0], [72.8, 141.0], [72.9, 141.0], [73.0, 141.0], [73.1, 141.0], [73.2, 141.0], [73.3, 141.0], [73.4, 141.0], [73.5, 141.0], [73.6, 141.0], [73.7, 141.0], [73.8, 141.0], [73.9, 141.0], [74.0, 145.0], [74.1, 145.0], [74.2, 145.0], [74.3, 145.0], [74.4, 145.0], [74.5, 145.0], [74.6, 145.0], [74.7, 145.0], [74.8, 145.0], [74.9, 145.0], [75.0, 145.0], [75.1, 145.0], [75.2, 145.0], [75.3, 145.0], [75.4, 145.0], [75.5, 145.0], [75.6, 145.0], [75.7, 145.0], [75.8, 145.0], [75.9, 145.0], [76.0, 151.0], [76.1, 151.0], [76.2, 151.0], [76.3, 151.0], [76.4, 151.0], [76.5, 151.0], [76.6, 151.0], [76.7, 151.0], [76.8, 151.0], [76.9, 151.0], [77.0, 151.0], [77.1, 151.0], [77.2, 151.0], [77.3, 151.0], [77.4, 151.0], [77.5, 151.0], [77.6, 151.0], [77.7, 151.0], [77.8, 151.0], [77.9, 151.0], [78.0, 159.0], [78.1, 159.0], [78.2, 159.0], [78.3, 159.0], [78.4, 159.0], [78.5, 159.0], [78.6, 159.0], [78.7, 159.0], [78.8, 159.0], [78.9, 159.0], [79.0, 159.0], [79.1, 159.0], [79.2, 159.0], [79.3, 159.0], [79.4, 159.0], [79.5, 159.0], [79.6, 159.0], [79.7, 159.0], [79.8, 159.0], [79.9, 159.0], [80.0, 164.0], [80.1, 164.0], [80.2, 164.0], [80.3, 164.0], [80.4, 164.0], [80.5, 164.0], [80.6, 164.0], [80.7, 164.0], [80.8, 164.0], [80.9, 164.0], [81.0, 164.0], [81.1, 164.0], [81.2, 164.0], [81.3, 164.0], [81.4, 164.0], [81.5, 164.0], [81.6, 164.0], [81.7, 164.0], [81.8, 164.0], [81.9, 164.0], [82.0, 167.0], [82.1, 167.0], [82.2, 167.0], [82.3, 167.0], [82.4, 167.0], [82.5, 167.0], [82.6, 167.0], [82.7, 167.0], [82.8, 167.0], [82.9, 167.0], [83.0, 167.0], [83.1, 167.0], [83.2, 167.0], [83.3, 167.0], [83.4, 167.0], [83.5, 167.0], [83.6, 167.0], [83.7, 167.0], [83.8, 167.0], [83.9, 167.0], [84.0, 187.0], [84.1, 187.0], [84.2, 187.0], [84.3, 187.0], [84.4, 187.0], [84.5, 187.0], [84.6, 187.0], [84.7, 187.0], [84.8, 187.0], [84.9, 187.0], [85.0, 187.0], [85.1, 187.0], [85.2, 187.0], [85.3, 187.0], [85.4, 187.0], [85.5, 187.0], [85.6, 187.0], [85.7, 187.0], [85.8, 187.0], [85.9, 187.0], [86.0, 191.0], [86.1, 191.0], [86.2, 191.0], [86.3, 191.0], [86.4, 191.0], [86.5, 191.0], [86.6, 191.0], [86.7, 191.0], [86.8, 191.0], [86.9, 191.0], [87.0, 191.0], [87.1, 191.0], [87.2, 191.0], [87.3, 191.0], [87.4, 191.0], [87.5, 191.0], [87.6, 191.0], [87.7, 191.0], [87.8, 191.0], [87.9, 191.0], [88.0, 194.0], [88.1, 194.0], [88.2, 194.0], [88.3, 194.0], [88.4, 194.0], [88.5, 194.0], [88.6, 194.0], [88.7, 194.0], [88.8, 194.0], [88.9, 194.0], [89.0, 194.0], [89.1, 194.0], [89.2, 194.0], [89.3, 194.0], [89.4, 194.0], [89.5, 194.0], [89.6, 194.0], [89.7, 194.0], [89.8, 194.0], [89.9, 194.0], [90.0, 205.0], [90.1, 205.0], [90.2, 205.0], [90.3, 205.0], [90.4, 205.0], [90.5, 205.0], [90.6, 205.0], [90.7, 205.0], [90.8, 205.0], [90.9, 205.0], [91.0, 205.0], [91.1, 205.0], [91.2, 205.0], [91.3, 205.0], [91.4, 205.0], [91.5, 205.0], [91.6, 205.0], [91.7, 205.0], [91.8, 205.0], [91.9, 205.0], [92.0, 206.0], [92.1, 206.0], [92.2, 206.0], [92.3, 206.0], [92.4, 206.0], [92.5, 206.0], [92.6, 206.0], [92.7, 206.0], [92.8, 206.0], [92.9, 206.0], [93.0, 206.0], [93.1, 206.0], [93.2, 206.0], [93.3, 206.0], [93.4, 206.0], [93.5, 206.0], [93.6, 206.0], [93.7, 206.0], [93.8, 206.0], [93.9, 206.0], [94.0, 240.0], [94.1, 240.0], [94.2, 240.0], [94.3, 240.0], [94.4, 240.0], [94.5, 240.0], [94.6, 240.0], [94.7, 240.0], [94.8, 240.0], [94.9, 240.0], [95.0, 240.0], [95.1, 240.0], [95.2, 240.0], [95.3, 240.0], [95.4, 240.0], [95.5, 240.0], [95.6, 240.0], [95.7, 240.0], [95.8, 240.0], [95.9, 240.0], [96.0, 246.0], [96.1, 246.0], [96.2, 246.0], [96.3, 246.0], [96.4, 246.0], [96.5, 246.0], [96.6, 246.0], [96.7, 246.0], [96.8, 246.0], [96.9, 246.0], [97.0, 246.0], [97.1, 246.0], [97.2, 246.0], [97.3, 246.0], [97.4, 246.0], [97.5, 246.0], [97.6, 246.0], [97.7, 246.0], [97.8, 246.0], [97.9, 246.0], [98.0, 293.0], [98.1, 293.0], [98.2, 293.0], [98.3, 293.0], [98.4, 293.0], [98.5, 293.0], [98.6, 293.0], [98.7, 293.0], [98.8, 293.0], [98.9, 293.0], [99.0, 293.0], [99.1, 293.0], [99.2, 293.0], [99.3, 293.0], [99.4, 293.0], [99.5, 293.0], [99.6, 293.0], [99.7, 293.0], [99.8, 293.0], [99.9, 293.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 25.0, "series": [{"data": [[0.0, 25.0], [100.0, 20.0], [200.0, 5.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 50.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [[0.0, 50.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.75, "minX": 1.6677195037E12, "maxY": 16.125, "series": [{"data": [[1.6677195037E12, 16.125], [1.6677195042E12, 1.8], [1.6677195039E12, 7.9411764705882355], [1.6677195041E12, 1.8], [1.667719504E12, 1.8], [1.6677195038E12, 13.333333333333334], [1.6677195043E12, 1.75]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195043E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 23.5, "minX": 1.0, "maxY": 198.5, "series": [{"data": [[8.0, 169.0], [2.0, 23.5], [11.0, 156.0], [12.0, 198.5], [3.0, 51.666666666666664], [13.0, 184.16666666666666], [14.0, 180.0], [15.0, 127.66666666666667], [16.0, 139.0], [4.0, 48.0], [1.0, 23.8], [18.0, 116.66666666666667], [5.0, 58.0], [6.0, 98.0], [7.0, 191.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[7.560000000000006, 96.32000000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 18.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 19160.0, "minX": 1.6677195037E12, "maxY": 152350.0, "series": [{"data": [[1.6677195037E12, 70980.0], [1.6677195042E12, 40900.0], [1.6677195039E12, 152350.0], [1.6677195041E12, 44170.0], [1.667719504E12, 43270.0], [1.6677195038E12, 52720.0], [1.6677195043E12, 38010.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6677195037E12, 38320.0], [1.6677195042E12, 23950.0], [1.6677195039E12, 81430.0], [1.6677195041E12, 23950.0], [1.667719504E12, 23950.0], [1.6677195038E12, 28740.0], [1.6677195043E12, 19160.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195043E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 22.4, "minX": 1.6677195037E12, "maxY": 186.16666666666666, "series": [{"data": [[1.6677195037E12, 128.875], [1.6677195042E12, 24.2], [1.6677195039E12, 131.05882352941177], [1.6677195041E12, 22.4], [1.667719504E12, 22.8], [1.6677195038E12, 186.16666666666666], [1.6677195043E12, 23.25]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195043E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 22.4, "minX": 1.6677195037E12, "maxY": 186.16666666666666, "series": [{"data": [[1.6677195037E12, 127.50000000000001], [1.6677195042E12, 24.2], [1.6677195039E12, 130.1764705882353], [1.6677195041E12, 22.4], [1.667719504E12, 22.8], [1.6677195038E12, 186.16666666666666], [1.6677195043E12, 23.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195043E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.6677195037E12, "maxY": 36.0, "series": [{"data": [[1.6677195037E12, 36.0], [1.6677195042E12, 2.6], [1.6677195039E12, 3.9411764705882355], [1.6677195041E12, 1.0], [1.667719504E12, 1.8], [1.6677195038E12, 31.666666666666664], [1.6677195043E12, 1.5]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195043E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 19.0, "minX": 1.6677195037E12, "maxY": 293.0, "series": [{"data": [[1.6677195037E12, 159.0], [1.6677195042E12, 30.0], [1.6677195039E12, 293.0], [1.6677195041E12, 25.0], [1.667719504E12, 28.0], [1.6677195038E12, 246.0], [1.6677195043E12, 27.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6677195037E12, 159.0], [1.6677195042E12, 30.0], [1.6677195039E12, 223.39999999999995], [1.6677195041E12, 25.0], [1.667719504E12, 28.0], [1.6677195038E12, 246.0], [1.6677195043E12, 27.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6677195037E12, 159.0], [1.6677195042E12, 30.0], [1.6677195039E12, 293.0], [1.6677195041E12, 25.0], [1.667719504E12, 28.0], [1.6677195038E12, 246.0], [1.6677195043E12, 27.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6677195037E12, 159.0], [1.6677195042E12, 30.0], [1.6677195039E12, 293.0], [1.6677195041E12, 25.0], [1.667719504E12, 28.0], [1.6677195038E12, 246.0], [1.6677195043E12, 27.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6677195037E12, 109.0], [1.6677195042E12, 20.0], [1.6677195039E12, 30.0], [1.6677195041E12, 19.0], [1.667719504E12, 21.0], [1.6677195038E12, 129.0], [1.6677195043E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6677195037E12, 123.5], [1.6677195042E12, 23.0], [1.6677195039E12, 127.0], [1.6677195041E12, 22.0], [1.667719504E12, 22.0], [1.6677195038E12, 180.5], [1.6677195043E12, 22.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195043E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 22.0, "minX": 19.0, "maxY": 135.0, "series": [{"data": [[19.0, 22.0], [31.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 22.0, "minX": 19.0, "maxY": 134.0, "series": [{"data": [[19.0, 22.0], [31.0, 134.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 31.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 20.0, "minX": 1.6677195036E12, "maxY": 150.0, "series": [{"data": [[1.6677195037E12, 60.0], [1.6677195042E12, 60.0], [1.6677195039E12, 50.0], [1.6677195036E12, 150.0], [1.6677195041E12, 50.0], [1.667719504E12, 50.0], [1.6677195038E12, 60.0], [1.6677195043E12, 20.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195043E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 40.0, "minX": 1.6677195037E12, "maxY": 170.0, "series": [{"data": [[1.6677195037E12, 80.0], [1.6677195042E12, 50.0], [1.6677195039E12, 170.0], [1.6677195041E12, 50.0], [1.667719504E12, 50.0], [1.6677195038E12, 60.0], [1.6677195043E12, 40.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195043E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 40.0, "minX": 1.6677195037E12, "maxY": 170.0, "series": [{"data": [[1.6677195037E12, 80.0], [1.6677195042E12, 50.0], [1.6677195039E12, 170.0], [1.6677195041E12, 50.0], [1.667719504E12, 50.0], [1.6677195038E12, 60.0], [1.6677195043E12, 40.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195043E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 40.0, "minX": 1.6677195037E12, "maxY": 170.0, "series": [{"data": [[1.6677195037E12, 80.0], [1.6677195042E12, 50.0], [1.6677195039E12, 170.0], [1.6677195041E12, 50.0], [1.667719504E12, 50.0], [1.6677195038E12, 60.0], [1.6677195043E12, 40.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195043E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

