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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 258.0, "series": [{"data": [[0.0, 11.0], [0.1, 13.0], [0.2, 14.0], [0.3, 14.0], [0.4, 14.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 15.0], [0.9, 15.0], [1.0, 15.0], [1.1, 16.0], [1.2, 16.0], [1.3, 16.0], [1.4, 16.0], [1.5, 16.0], [1.6, 16.0], [1.7, 17.0], [1.8, 17.0], [1.9, 17.0], [2.0, 17.0], [2.1, 17.0], [2.2, 17.0], [2.3, 17.0], [2.4, 17.0], [2.5, 18.0], [2.6, 18.0], [2.7, 18.0], [2.8, 18.0], [2.9, 18.0], [3.0, 18.0], [3.1, 18.0], [3.2, 18.0], [3.3, 18.0], [3.4, 18.0], [3.5, 19.0], [3.6, 19.0], [3.7, 19.0], [3.8, 19.0], [3.9, 19.0], [4.0, 19.0], [4.1, 19.0], [4.2, 19.0], [4.3, 19.0], [4.4, 19.0], [4.5, 19.0], [4.6, 20.0], [4.7, 20.0], [4.8, 20.0], [4.9, 20.0], [5.0, 20.0], [5.1, 20.0], [5.2, 20.0], [5.3, 20.0], [5.4, 20.0], [5.5, 20.0], [5.6, 20.0], [5.7, 20.0], [5.8, 20.0], [5.9, 20.0], [6.0, 20.0], [6.1, 20.0], [6.2, 21.0], [6.3, 21.0], [6.4, 21.0], [6.5, 21.0], [6.6, 21.0], [6.7, 21.0], [6.8, 21.0], [6.9, 21.0], [7.0, 21.0], [7.1, 21.0], [7.2, 21.0], [7.3, 21.0], [7.4, 21.0], [7.5, 21.0], [7.6, 22.0], [7.7, 22.0], [7.8, 22.0], [7.9, 22.0], [8.0, 22.0], [8.1, 22.0], [8.2, 22.0], [8.3, 22.0], [8.4, 22.0], [8.5, 22.0], [8.6, 22.0], [8.7, 22.0], [8.8, 22.0], [8.9, 22.0], [9.0, 22.0], [9.1, 22.0], [9.2, 22.0], [9.3, 22.0], [9.4, 23.0], [9.5, 23.0], [9.6, 23.0], [9.7, 23.0], [9.8, 23.0], [9.9, 23.0], [10.0, 23.0], [10.1, 23.0], [10.2, 23.0], [10.3, 23.0], [10.4, 23.0], [10.5, 23.0], [10.6, 23.0], [10.7, 23.0], [10.8, 23.0], [10.9, 23.0], [11.0, 23.0], [11.1, 23.0], [11.2, 24.0], [11.3, 24.0], [11.4, 24.0], [11.5, 24.0], [11.6, 24.0], [11.7, 24.0], [11.8, 24.0], [11.9, 24.0], [12.0, 24.0], [12.1, 24.0], [12.2, 24.0], [12.3, 24.0], [12.4, 24.0], [12.5, 24.0], [12.6, 24.0], [12.7, 24.0], [12.8, 24.0], [12.9, 25.0], [13.0, 25.0], [13.1, 25.0], [13.2, 25.0], [13.3, 25.0], [13.4, 25.0], [13.5, 25.0], [13.6, 25.0], [13.7, 25.0], [13.8, 25.0], [13.9, 25.0], [14.0, 25.0], [14.1, 25.0], [14.2, 25.0], [14.3, 25.0], [14.4, 25.0], [14.5, 25.0], [14.6, 25.0], [14.7, 25.0], [14.8, 26.0], [14.9, 26.0], [15.0, 26.0], [15.1, 26.0], [15.2, 26.0], [15.3, 26.0], [15.4, 26.0], [15.5, 26.0], [15.6, 26.0], [15.7, 26.0], [15.8, 26.0], [15.9, 26.0], [16.0, 26.0], [16.1, 26.0], [16.2, 26.0], [16.3, 26.0], [16.4, 26.0], [16.5, 26.0], [16.6, 26.0], [16.7, 26.0], [16.8, 26.0], [16.9, 26.0], [17.0, 27.0], [17.1, 27.0], [17.2, 27.0], [17.3, 27.0], [17.4, 27.0], [17.5, 27.0], [17.6, 27.0], [17.7, 27.0], [17.8, 27.0], [17.9, 27.0], [18.0, 27.0], [18.1, 27.0], [18.2, 27.0], [18.3, 27.0], [18.4, 27.0], [18.5, 27.0], [18.6, 27.0], [18.7, 27.0], [18.8, 27.0], [18.9, 27.0], [19.0, 27.0], [19.1, 27.0], [19.2, 28.0], [19.3, 28.0], [19.4, 28.0], [19.5, 28.0], [19.6, 28.0], [19.7, 28.0], [19.8, 28.0], [19.9, 28.0], [20.0, 28.0], [20.1, 28.0], [20.2, 28.0], [20.3, 28.0], [20.4, 28.0], [20.5, 28.0], [20.6, 28.0], [20.7, 28.0], [20.8, 28.0], [20.9, 28.0], [21.0, 28.0], [21.1, 28.0], [21.2, 28.0], [21.3, 28.0], [21.4, 28.0], [21.5, 29.0], [21.6, 29.0], [21.7, 29.0], [21.8, 29.0], [21.9, 29.0], [22.0, 29.0], [22.1, 29.0], [22.2, 29.0], [22.3, 29.0], [22.4, 29.0], [22.5, 29.0], [22.6, 29.0], [22.7, 29.0], [22.8, 29.0], [22.9, 29.0], [23.0, 29.0], [23.1, 29.0], [23.2, 29.0], [23.3, 29.0], [23.4, 29.0], [23.5, 29.0], [23.6, 29.0], [23.7, 29.0], [23.8, 29.0], [23.9, 30.0], [24.0, 30.0], [24.1, 30.0], [24.2, 30.0], [24.3, 30.0], [24.4, 30.0], [24.5, 30.0], [24.6, 30.0], [24.7, 30.0], [24.8, 30.0], [24.9, 30.0], [25.0, 30.0], [25.1, 30.0], [25.2, 30.0], [25.3, 30.0], [25.4, 30.0], [25.5, 30.0], [25.6, 30.0], [25.7, 30.0], [25.8, 30.0], [25.9, 30.0], [26.0, 30.0], [26.1, 30.0], [26.2, 30.0], [26.3, 30.0], [26.4, 30.0], [26.5, 31.0], [26.6, 31.0], [26.7, 31.0], [26.8, 31.0], [26.9, 31.0], [27.0, 31.0], [27.1, 31.0], [27.2, 31.0], [27.3, 31.0], [27.4, 31.0], [27.5, 31.0], [27.6, 31.0], [27.7, 31.0], [27.8, 31.0], [27.9, 31.0], [28.0, 31.0], [28.1, 31.0], [28.2, 31.0], [28.3, 31.0], [28.4, 31.0], [28.5, 31.0], [28.6, 31.0], [28.7, 31.0], [28.8, 31.0], [28.9, 31.0], [29.0, 31.0], [29.1, 32.0], [29.2, 32.0], [29.3, 32.0], [29.4, 32.0], [29.5, 32.0], [29.6, 32.0], [29.7, 32.0], [29.8, 32.0], [29.9, 32.0], [30.0, 32.0], [30.1, 32.0], [30.2, 32.0], [30.3, 32.0], [30.4, 32.0], [30.5, 32.0], [30.6, 32.0], [30.7, 32.0], [30.8, 32.0], [30.9, 32.0], [31.0, 32.0], [31.1, 32.0], [31.2, 32.0], [31.3, 32.0], [31.4, 32.0], [31.5, 32.0], [31.6, 32.0], [31.7, 32.0], [31.8, 32.0], [31.9, 32.0], [32.0, 32.0], [32.1, 32.0], [32.2, 33.0], [32.3, 33.0], [32.4, 33.0], [32.5, 33.0], [32.6, 33.0], [32.7, 33.0], [32.8, 33.0], [32.9, 33.0], [33.0, 33.0], [33.1, 33.0], [33.2, 33.0], [33.3, 33.0], [33.4, 33.0], [33.5, 33.0], [33.6, 33.0], [33.7, 33.0], [33.8, 33.0], [33.9, 33.0], [34.0, 33.0], [34.1, 33.0], [34.2, 33.0], [34.3, 33.0], [34.4, 33.0], [34.5, 33.0], [34.6, 33.0], [34.7, 33.0], [34.8, 33.0], [34.9, 33.0], [35.0, 33.0], [35.1, 33.0], [35.2, 34.0], [35.3, 34.0], [35.4, 34.0], [35.5, 34.0], [35.6, 34.0], [35.7, 34.0], [35.8, 34.0], [35.9, 34.0], [36.0, 34.0], [36.1, 34.0], [36.2, 34.0], [36.3, 34.0], [36.4, 34.0], [36.5, 34.0], [36.6, 34.0], [36.7, 34.0], [36.8, 34.0], [36.9, 34.0], [37.0, 34.0], [37.1, 34.0], [37.2, 34.0], [37.3, 34.0], [37.4, 34.0], [37.5, 35.0], [37.6, 35.0], [37.7, 35.0], [37.8, 35.0], [37.9, 35.0], [38.0, 35.0], [38.1, 35.0], [38.2, 35.0], [38.3, 35.0], [38.4, 35.0], [38.5, 35.0], [38.6, 35.0], [38.7, 35.0], [38.8, 35.0], [38.9, 35.0], [39.0, 35.0], [39.1, 35.0], [39.2, 35.0], [39.3, 35.0], [39.4, 35.0], [39.5, 35.0], [39.6, 35.0], [39.7, 35.0], [39.8, 35.0], [39.9, 35.0], [40.0, 36.0], [40.1, 36.0], [40.2, 36.0], [40.3, 36.0], [40.4, 36.0], [40.5, 36.0], [40.6, 36.0], [40.7, 36.0], [40.8, 36.0], [40.9, 36.0], [41.0, 36.0], [41.1, 36.0], [41.2, 36.0], [41.3, 36.0], [41.4, 36.0], [41.5, 36.0], [41.6, 36.0], [41.7, 36.0], [41.8, 36.0], [41.9, 36.0], [42.0, 36.0], [42.1, 36.0], [42.2, 36.0], [42.3, 36.0], [42.4, 36.0], [42.5, 36.0], [42.6, 36.0], [42.7, 36.0], [42.8, 36.0], [42.9, 36.0], [43.0, 37.0], [43.1, 37.0], [43.2, 37.0], [43.3, 37.0], [43.4, 37.0], [43.5, 37.0], [43.6, 37.0], [43.7, 37.0], [43.8, 37.0], [43.9, 37.0], [44.0, 37.0], [44.1, 37.0], [44.2, 37.0], [44.3, 37.0], [44.4, 37.0], [44.5, 37.0], [44.6, 37.0], [44.7, 37.0], [44.8, 37.0], [44.9, 37.0], [45.0, 37.0], [45.1, 37.0], [45.2, 37.0], [45.3, 37.0], [45.4, 37.0], [45.5, 38.0], [45.6, 38.0], [45.7, 38.0], [45.8, 38.0], [45.9, 38.0], [46.0, 38.0], [46.1, 38.0], [46.2, 38.0], [46.3, 38.0], [46.4, 38.0], [46.5, 38.0], [46.6, 38.0], [46.7, 38.0], [46.8, 38.0], [46.9, 38.0], [47.0, 38.0], [47.1, 38.0], [47.2, 38.0], [47.3, 38.0], [47.4, 38.0], [47.5, 38.0], [47.6, 38.0], [47.7, 38.0], [47.8, 38.0], [47.9, 38.0], [48.0, 38.0], [48.1, 38.0], [48.2, 39.0], [48.3, 39.0], [48.4, 39.0], [48.5, 39.0], [48.6, 39.0], [48.7, 39.0], [48.8, 39.0], [48.9, 39.0], [49.0, 39.0], [49.1, 39.0], [49.2, 39.0], [49.3, 39.0], [49.4, 39.0], [49.5, 39.0], [49.6, 39.0], [49.7, 39.0], [49.8, 39.0], [49.9, 39.0], [50.0, 39.0], [50.1, 39.0], [50.2, 39.0], [50.3, 39.0], [50.4, 39.0], [50.5, 39.0], [50.6, 39.0], [50.7, 39.0], [50.8, 40.0], [50.9, 40.0], [51.0, 40.0], [51.1, 40.0], [51.2, 40.0], [51.3, 40.0], [51.4, 40.0], [51.5, 40.0], [51.6, 40.0], [51.7, 40.0], [51.8, 40.0], [51.9, 40.0], [52.0, 40.0], [52.1, 40.0], [52.2, 40.0], [52.3, 40.0], [52.4, 40.0], [52.5, 40.0], [52.6, 40.0], [52.7, 40.0], [52.8, 40.0], [52.9, 40.0], [53.0, 40.0], [53.1, 40.0], [53.2, 40.0], [53.3, 41.0], [53.4, 41.0], [53.5, 41.0], [53.6, 41.0], [53.7, 41.0], [53.8, 41.0], [53.9, 41.0], [54.0, 41.0], [54.1, 41.0], [54.2, 41.0], [54.3, 41.0], [54.4, 41.0], [54.5, 41.0], [54.6, 41.0], [54.7, 41.0], [54.8, 41.0], [54.9, 41.0], [55.0, 41.0], [55.1, 41.0], [55.2, 41.0], [55.3, 41.0], [55.4, 41.0], [55.5, 42.0], [55.6, 42.0], [55.7, 42.0], [55.8, 42.0], [55.9, 42.0], [56.0, 42.0], [56.1, 42.0], [56.2, 42.0], [56.3, 42.0], [56.4, 42.0], [56.5, 42.0], [56.6, 42.0], [56.7, 42.0], [56.8, 42.0], [56.9, 42.0], [57.0, 42.0], [57.1, 42.0], [57.2, 42.0], [57.3, 42.0], [57.4, 42.0], [57.5, 42.0], [57.6, 42.0], [57.7, 42.0], [57.8, 42.0], [57.9, 42.0], [58.0, 42.0], [58.1, 42.0], [58.2, 42.0], [58.3, 43.0], [58.4, 43.0], [58.5, 43.0], [58.6, 43.0], [58.7, 43.0], [58.8, 43.0], [58.9, 43.0], [59.0, 43.0], [59.1, 43.0], [59.2, 43.0], [59.3, 43.0], [59.4, 43.0], [59.5, 43.0], [59.6, 43.0], [59.7, 43.0], [59.8, 43.0], [59.9, 43.0], [60.0, 43.0], [60.1, 43.0], [60.2, 43.0], [60.3, 43.0], [60.4, 43.0], [60.5, 43.0], [60.6, 43.0], [60.7, 43.0], [60.8, 44.0], [60.9, 44.0], [61.0, 44.0], [61.1, 44.0], [61.2, 44.0], [61.3, 44.0], [61.4, 44.0], [61.5, 44.0], [61.6, 44.0], [61.7, 44.0], [61.8, 44.0], [61.9, 44.0], [62.0, 44.0], [62.1, 44.0], [62.2, 44.0], [62.3, 44.0], [62.4, 44.0], [62.5, 44.0], [62.6, 44.0], [62.7, 44.0], [62.8, 44.0], [62.9, 45.0], [63.0, 45.0], [63.1, 45.0], [63.2, 45.0], [63.3, 45.0], [63.4, 45.0], [63.5, 45.0], [63.6, 45.0], [63.7, 45.0], [63.8, 45.0], [63.9, 45.0], [64.0, 45.0], [64.1, 45.0], [64.2, 45.0], [64.3, 45.0], [64.4, 45.0], [64.5, 45.0], [64.6, 45.0], [64.7, 45.0], [64.8, 45.0], [64.9, 45.0], [65.0, 46.0], [65.1, 46.0], [65.2, 46.0], [65.3, 46.0], [65.4, 46.0], [65.5, 46.0], [65.6, 46.0], [65.7, 46.0], [65.8, 46.0], [65.9, 46.0], [66.0, 46.0], [66.1, 46.0], [66.2, 46.0], [66.3, 46.0], [66.4, 46.0], [66.5, 46.0], [66.6, 46.0], [66.7, 46.0], [66.8, 46.0], [66.9, 46.0], [67.0, 46.0], [67.1, 46.0], [67.2, 47.0], [67.3, 47.0], [67.4, 47.0], [67.5, 47.0], [67.6, 47.0], [67.7, 47.0], [67.8, 47.0], [67.9, 47.0], [68.0, 47.0], [68.1, 47.0], [68.2, 47.0], [68.3, 47.0], [68.4, 47.0], [68.5, 47.0], [68.6, 47.0], [68.7, 47.0], [68.8, 47.0], [68.9, 47.0], [69.0, 48.0], [69.1, 48.0], [69.2, 48.0], [69.3, 48.0], [69.4, 48.0], [69.5, 48.0], [69.6, 48.0], [69.7, 48.0], [69.8, 48.0], [69.9, 48.0], [70.0, 48.0], [70.1, 48.0], [70.2, 48.0], [70.3, 48.0], [70.4, 48.0], [70.5, 48.0], [70.6, 49.0], [70.7, 49.0], [70.8, 49.0], [70.9, 49.0], [71.0, 49.0], [71.1, 49.0], [71.2, 49.0], [71.3, 49.0], [71.4, 49.0], [71.5, 49.0], [71.6, 49.0], [71.7, 49.0], [71.8, 49.0], [71.9, 49.0], [72.0, 49.0], [72.1, 49.0], [72.2, 50.0], [72.3, 50.0], [72.4, 50.0], [72.5, 50.0], [72.6, 50.0], [72.7, 50.0], [72.8, 50.0], [72.9, 50.0], [73.0, 50.0], [73.1, 50.0], [73.2, 50.0], [73.3, 50.0], [73.4, 50.0], [73.5, 50.0], [73.6, 50.0], [73.7, 50.0], [73.8, 51.0], [73.9, 51.0], [74.0, 51.0], [74.1, 51.0], [74.2, 51.0], [74.3, 51.0], [74.4, 51.0], [74.5, 51.0], [74.6, 51.0], [74.7, 51.0], [74.8, 51.0], [74.9, 51.0], [75.0, 51.0], [75.1, 51.0], [75.2, 51.0], [75.3, 51.0], [75.4, 51.0], [75.5, 51.0], [75.6, 52.0], [75.7, 52.0], [75.8, 52.0], [75.9, 52.0], [76.0, 52.0], [76.1, 52.0], [76.2, 52.0], [76.3, 52.0], [76.4, 52.0], [76.5, 52.0], [76.6, 52.0], [76.7, 52.0], [76.8, 52.0], [76.9, 52.0], [77.0, 52.0], [77.1, 53.0], [77.2, 53.0], [77.3, 53.0], [77.4, 53.0], [77.5, 53.0], [77.6, 53.0], [77.7, 53.0], [77.8, 53.0], [77.9, 53.0], [78.0, 53.0], [78.1, 53.0], [78.2, 53.0], [78.3, 53.0], [78.4, 53.0], [78.5, 54.0], [78.6, 54.0], [78.7, 54.0], [78.8, 54.0], [78.9, 54.0], [79.0, 54.0], [79.1, 54.0], [79.2, 54.0], [79.3, 54.0], [79.4, 54.0], [79.5, 54.0], [79.6, 54.0], [79.7, 55.0], [79.8, 55.0], [79.9, 55.0], [80.0, 55.0], [80.1, 55.0], [80.2, 55.0], [80.3, 55.0], [80.4, 55.0], [80.5, 55.0], [80.6, 55.0], [80.7, 55.0], [80.8, 55.0], [80.9, 56.0], [81.0, 56.0], [81.1, 56.0], [81.2, 56.0], [81.3, 56.0], [81.4, 56.0], [81.5, 56.0], [81.6, 56.0], [81.7, 56.0], [81.8, 56.0], [81.9, 56.0], [82.0, 56.0], [82.1, 56.0], [82.2, 56.0], [82.3, 57.0], [82.4, 57.0], [82.5, 57.0], [82.6, 57.0], [82.7, 57.0], [82.8, 57.0], [82.9, 57.0], [83.0, 57.0], [83.1, 57.0], [83.2, 57.0], [83.3, 57.0], [83.4, 58.0], [83.5, 58.0], [83.6, 58.0], [83.7, 58.0], [83.8, 58.0], [83.9, 58.0], [84.0, 58.0], [84.1, 58.0], [84.2, 58.0], [84.3, 58.0], [84.4, 59.0], [84.5, 59.0], [84.6, 59.0], [84.7, 59.0], [84.8, 59.0], [84.9, 59.0], [85.0, 59.0], [85.1, 59.0], [85.2, 59.0], [85.3, 59.0], [85.4, 60.0], [85.5, 60.0], [85.6, 60.0], [85.7, 60.0], [85.8, 60.0], [85.9, 60.0], [86.0, 60.0], [86.1, 60.0], [86.2, 60.0], [86.3, 61.0], [86.4, 61.0], [86.5, 61.0], [86.6, 61.0], [86.7, 61.0], [86.8, 61.0], [86.9, 61.0], [87.0, 61.0], [87.1, 61.0], [87.2, 61.0], [87.3, 62.0], [87.4, 62.0], [87.5, 62.0], [87.6, 62.0], [87.7, 62.0], [87.8, 62.0], [87.9, 63.0], [88.0, 63.0], [88.1, 63.0], [88.2, 63.0], [88.3, 63.0], [88.4, 64.0], [88.5, 64.0], [88.6, 64.0], [88.7, 64.0], [88.8, 64.0], [88.9, 64.0], [89.0, 64.0], [89.1, 65.0], [89.2, 65.0], [89.3, 65.0], [89.4, 65.0], [89.5, 65.0], [89.6, 65.0], [89.7, 66.0], [89.8, 66.0], [89.9, 66.0], [90.0, 66.0], [90.1, 66.0], [90.2, 66.0], [90.3, 67.0], [90.4, 67.0], [90.5, 67.0], [90.6, 67.0], [90.7, 67.0], [90.8, 67.0], [90.9, 68.0], [91.0, 68.0], [91.1, 69.0], [91.2, 69.0], [91.3, 69.0], [91.4, 69.0], [91.5, 69.0], [91.6, 69.0], [91.7, 70.0], [91.8, 70.0], [91.9, 70.0], [92.0, 70.0], [92.1, 70.0], [92.2, 70.0], [92.3, 71.0], [92.4, 71.0], [92.5, 71.0], [92.6, 71.0], [92.7, 72.0], [92.8, 72.0], [92.9, 72.0], [93.0, 73.0], [93.1, 73.0], [93.2, 73.0], [93.3, 73.0], [93.4, 74.0], [93.5, 74.0], [93.6, 74.0], [93.7, 75.0], [93.8, 75.0], [93.9, 75.0], [94.0, 76.0], [94.1, 76.0], [94.2, 77.0], [94.3, 77.0], [94.4, 77.0], [94.5, 77.0], [94.6, 77.0], [94.7, 78.0], [94.8, 78.0], [94.9, 79.0], [95.0, 79.0], [95.1, 79.0], [95.2, 80.0], [95.3, 81.0], [95.4, 81.0], [95.5, 81.0], [95.6, 82.0], [95.7, 82.0], [95.8, 82.0], [95.9, 83.0], [96.0, 84.0], [96.1, 85.0], [96.2, 85.0], [96.3, 86.0], [96.4, 86.0], [96.5, 86.0], [96.6, 87.0], [96.7, 87.0], [96.8, 88.0], [96.9, 89.0], [97.0, 91.0], [97.1, 91.0], [97.2, 93.0], [97.3, 94.0], [97.4, 94.0], [97.5, 95.0], [97.6, 96.0], [97.7, 97.0], [97.8, 99.0], [97.9, 102.0], [98.0, 103.0], [98.1, 104.0], [98.2, 104.0], [98.3, 106.0], [98.4, 108.0], [98.5, 109.0], [98.6, 110.0], [98.7, 113.0], [98.8, 116.0], [98.9, 119.0], [99.0, 121.0], [99.1, 122.0], [99.2, 123.0], [99.3, 126.0], [99.4, 136.0], [99.5, 142.0], [99.6, 151.0], [99.7, 161.0], [99.8, 169.0], [99.9, 227.0], [100.0, 258.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 3913.0, "series": [{"data": [[0.0, 3913.0], [100.0, 79.0], [200.0, 8.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4000.0, "series": [{"data": [[0.0, 4000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.625, "minX": 1.6673187103E12, "maxY": 25.0, "series": [{"data": [[1.6673212159E12, 25.0], [1.6673187114E12, 25.0], [1.6673187134E12, 25.0], [1.6673212139E12, 24.245901639344268], [1.6673187113E12, 25.0], [1.6673212137E12, 19.145833333333332], [1.6673212158E12, 25.0], [1.6673187115E12, 25.0], [1.6673187135E12, 25.0], [1.6673212138E12, 21.679245283018876], [1.6673187137E12, 25.0], [1.6673212136E12, 16.75], [1.6673187116E12, 25.0], [1.6673212157E12, 25.0], [1.6673187136E12, 25.0], [1.6673187118E12, 25.0], [1.6673212155E12, 25.0], [1.6673212135E12, 14.0], [1.6673187138E12, 24.796296296296298], [1.6673187117E12, 25.0], [1.6673212156E12, 25.0], [1.6673187119E12, 25.0], [1.6673212154E12, 25.0], [1.6673212134E12, 11.959999999999999], [1.6673187139E12, 20.177419354838715], [1.6673187141E12, 10.26190476190476], [1.667318712E12, 25.0], [1.6673212153E12, 25.0], [1.667318714E12, 14.729166666666663], [1.6673212133E12, 9.1], [1.6673187142E12, 4.360000000000001], [1.6673212172E12, 2.785714285714286], [1.6673187121E12, 25.0], [1.6673212152E12, 25.0], [1.667321215E12, 25.0], [1.6673187123E12, 25.0], [1.6673187143E12, 1.625], [1.6673212171E12, 5.970588235294119], [1.6673212151E12, 25.0], [1.6673187122E12, 25.0], [1.6673212169E12, 14.784313725490193], [1.6673187124E12, 25.0], [1.6673212149E12, 25.0], [1.6673187103E12, 9.0], [1.667321217E12, 9.166666666666666], [1.6673187105E12, 13.785714285714283], [1.6673212168E12, 21.734693877551017], [1.6673187125E12, 25.0], [1.6673212148E12, 25.0], [1.6673187104E12, 11.846153846153847], [1.6673187127E12, 25.0], [1.6673212146E12, 25.0], [1.6673212167E12, 23.0], [1.6673187106E12, 16.418604651162795], [1.6673187126E12, 25.0], [1.6673212147E12, 25.0], [1.6673187128E12, 25.0], [1.6673212145E12, 25.0], [1.6673212166E12, 23.96551724137931], [1.6673187107E12, 18.975609756097562], [1.6673187109E12, 23.936170212765962], [1.6673212164E12, 25.0], [1.6673187129E12, 25.0], [1.6673212144E12, 25.0], [1.6673187108E12, 21.35714285714286], [1.6673212165E12, 24.191489361702132], [1.667318711E12, 25.0], [1.6673212163E12, 25.0], [1.6673212143E12, 25.0], [1.667318713E12, 25.0], [1.6673187132E12, 25.0], [1.6673212141E12, 25.0], [1.6673187111E12, 25.0], [1.6673212162E12, 25.0], [1.6673212142E12, 25.0], [1.6673187131E12, 25.0], [1.667321216E12, 25.0], [1.6673187133E12, 25.0], [1.667321214E12, 25.0], [1.6673187112E12, 25.0], [1.6673212161E12, 25.0]], "isOverall": false, "label": "goodsdemoaop", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673212172E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.749999999999998, "minX": 1.0, "maxY": 58.999999999999986, "series": [{"data": [[2.0, 16.384615384615383], [3.0, 14.749999999999998], [4.0, 18.0], [5.0, 16.636363636363633], [6.0, 18.642857142857142], [7.0, 26.45], [8.0, 20.166666666666668], [9.0, 58.999999999999986], [10.0, 23.125000000000004], [11.0, 31.533333333333335], [12.0, 31.02631578947368], [13.0, 31.499999999999996], [14.0, 32.99999999999999], [15.0, 35.53333333333335], [16.0, 37.760869565217405], [1.0, 16.2], [17.0, 34.21621621621621], [18.0, 38.38775510204082], [19.0, 35.55555555555554], [20.0, 42.84905660377358], [21.0, 38.48333333333334], [22.0, 34.86274509803922], [23.0, 39.421768707483004], [24.0, 50.18705035971222], [25.0, 45.258913695434856]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[23.059750000000093, 43.22149999999998]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 25.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 37830.0, "minX": 1.6673187103E12, "maxY": 429870.0, "series": [{"data": [[1.6673212159E12, 269550.0], [1.6673187114E12, 231750.0], [1.6673187134E12, 255330.0], [1.6673212139E12, 288430.0], [1.6673187113E12, 283720.0], [1.6673212137E12, 226980.0], [1.6673212158E12, 198570.0], [1.6673187115E12, 250530.0], [1.6673187135E12, 283710.0], [1.6673212138E12, 250620.0], [1.6673187137E12, 264810.0], [1.6673212136E12, 189150.0], [1.6673187116E12, 241160.0], [1.6673212157E12, 321630.0], [1.6673187136E12, 217520.0], [1.6673187118E12, 245920.0], [1.6673212155E12, 151320.0], [1.6673212135E12, 184440.0], [1.6673187138E12, 255360.0], [1.6673187117E12, 293170.0], [1.6673212156E12, 297890.0], [1.6673187119E12, 274320.0], [1.6673212154E12, 326270.0], [1.6673212134E12, 118180.0], [1.6673187139E12, 293210.0], [1.6673187141E12, 198620.0], [1.667318712E12, 193900.0], [1.6673212153E12, 274220.0], [1.667318714E12, 227000.0], [1.6673212133E12, 47290.0], [1.6673187142E12, 118230.0], [1.6673212172E12, 66200.0], [1.6673187121E12, 274240.0], [1.6673212152E12, 255360.0], [1.667321215E12, 245890.0], [1.6673187123E12, 293230.0], [1.6673187143E12, 37830.0], [1.6673212171E12, 160790.0], [1.6673212151E12, 217480.0], [1.6673187122E12, 255340.0], [1.6673212169E12, 241180.0], [1.6673187124E12, 250650.0], [1.6673212149E12, 245900.0], [1.6673187103E12, 42540.0], [1.667321217E12, 170240.0], [1.6673187105E12, 132420.0], [1.6673212168E12, 231740.0], [1.6673187125E12, 274290.0], [1.6673212148E12, 288460.0], [1.6673187104E12, 61470.0], [1.6673187127E12, 283750.0], [1.6673212146E12, 321550.0], [1.6673212167E12, 316830.0], [1.6673187106E12, 203330.0], [1.6673187126E12, 231710.0], [1.6673212147E12, 255340.0], [1.6673187128E12, 274250.0], [1.6673212145E12, 255360.0], [1.6673212166E12, 274260.0], [1.6673187107E12, 193900.0], [1.6673187109E12, 222270.0], [1.6673212164E12, 297950.0], [1.6673187129E12, 307410.0], [1.6673212144E12, 269560.0], [1.6673187108E12, 198610.0], [1.6673212165E12, 222240.0], [1.667318711E12, 241180.0], [1.6673212163E12, 241200.0], [1.6673212143E12, 255360.0], [1.667318713E12, 297910.0], [1.6673187132E12, 264800.0], [1.6673212141E12, 255380.0], [1.6673187111E12, 241200.0], [1.6673212162E12, 203360.0], [1.6673212142E12, 283780.0], [1.6673187131E12, 198580.0], [1.667321216E12, 236420.0], [1.6673187133E12, 288460.0], [1.667321214E12, 189190.0], [1.6673187112E12, 260120.0], [1.6673212161E12, 312090.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6673212159E12, 355110.0], [1.6673187114E12, 305270.0], [1.6673187134E12, 336420.0], [1.6673212139E12, 380030.0], [1.6673187113E12, 373800.0], [1.6673212137E12, 299040.0], [1.6673212158E12, 261660.0], [1.6673187115E12, 330190.0], [1.6673187135E12, 373800.0], [1.6673212138E12, 330190.0], [1.6673187137E12, 348880.0], [1.6673212136E12, 249200.0], [1.6673187116E12, 317730.0], [1.6673212157E12, 423640.0], [1.6673187136E12, 286580.0], [1.6673187118E12, 323960.0], [1.6673212155E12, 199360.0], [1.6673212135E12, 242970.0], [1.6673187138E12, 336420.0], [1.6673187117E12, 386260.0], [1.6673212156E12, 392490.0], [1.6673187119E12, 361340.0], [1.6673212154E12, 429870.0], [1.6673212134E12, 155750.0], [1.6673187139E12, 386260.0], [1.6673187141E12, 261660.0], [1.667318712E12, 255430.0], [1.6673212153E12, 361340.0], [1.667318714E12, 299040.0], [1.6673212133E12, 62300.0], [1.6673187142E12, 155750.0], [1.6673212172E12, 87220.0], [1.6673187121E12, 361340.0], [1.6673212152E12, 336420.0], [1.667321215E12, 323960.0], [1.6673187123E12, 386260.0], [1.6673187143E12, 49840.0], [1.6673212171E12, 211820.0], [1.6673212151E12, 286580.0], [1.6673187122E12, 336420.0], [1.6673212169E12, 317730.0], [1.6673187124E12, 330190.0], [1.6673212149E12, 323960.0], [1.6673187103E12, 56070.0], [1.667321217E12, 224280.0], [1.6673187105E12, 174440.0], [1.6673212168E12, 305270.0], [1.6673187125E12, 361340.0], [1.6673212148E12, 380030.0], [1.6673187104E12, 80990.0], [1.6673187127E12, 373800.0], [1.6673212146E12, 423640.0], [1.6673212167E12, 417410.0], [1.6673187106E12, 267890.0], [1.6673187126E12, 305270.0], [1.6673212147E12, 336420.0], [1.6673187128E12, 361340.0], [1.6673212145E12, 336420.0], [1.6673212166E12, 361340.0], [1.6673187107E12, 255430.0], [1.6673187109E12, 292810.0], [1.6673212164E12, 392490.0], [1.6673187129E12, 404950.0], [1.6673212144E12, 355110.0], [1.6673187108E12, 261660.0], [1.6673212165E12, 292810.0], [1.667318711E12, 317730.0], [1.6673212163E12, 317730.0], [1.6673212143E12, 336420.0], [1.667318713E12, 392490.0], [1.6673187132E12, 348880.0], [1.6673212141E12, 336420.0], [1.6673187111E12, 317730.0], [1.6673212162E12, 267890.0], [1.6673212142E12, 373800.0], [1.6673187131E12, 261660.0], [1.667321216E12, 311500.0], [1.6673187133E12, 380030.0], [1.667321214E12, 249200.0], [1.6673187112E12, 342650.0], [1.6673212161E12, 411180.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673212172E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 16.64285714285714, "minX": 1.6673187103E12, "maxY": 100.44444444444444, "series": [{"data": [[1.6673212159E12, 49.333333333333336], [1.6673187114E12, 53.244897959183675], [1.6673187134E12, 42.44444444444444], [1.6673212139E12, 42.491803278688515], [1.6673187113E12, 39.416666666666664], [1.6673212137E12, 34.895833333333336], [1.6673212158E12, 47.642857142857146], [1.6673187115E12, 42.75471698113207], [1.6673187135E12, 44.716666666666676], [1.6673212138E12, 36.18867924528301], [1.6673187137E12, 44.17857142857143], [1.6673212136E12, 39.425], [1.6673187116E12, 41.74509803921568], [1.6673212157E12, 39.35294117647058], [1.6673187136E12, 50.891304347826086], [1.6673187118E12, 42.00000000000001], [1.6673212155E12, 45.59375], [1.6673212135E12, 33.589743589743584], [1.6673187138E12, 47.20370370370371], [1.6673187117E12, 50.12903225806451], [1.6673212156E12, 52.031746031746025], [1.6673187119E12, 43.620689655172406], [1.6673212154E12, 39.0], [1.6673212134E12, 30.48], [1.6673187139E12, 39.38709677419356], [1.6673187141E12, 25.738095238095234], [1.667318712E12, 50.65853658536585], [1.6673212153E12, 41.12068965517242], [1.667318714E12, 30.375], [1.6673212133E12, 71.60000000000001], [1.6673187142E12, 17.24], [1.6673212172E12, 16.64285714285714], [1.6673187121E12, 48.01724137931034], [1.6673212152E12, 54.092592592592595], [1.667321215E12, 44.51923076923077], [1.6673187123E12, 46.58064516129032], [1.6673187143E12, 16.875], [1.6673212171E12, 18.88235294117647], [1.6673212151E12, 47.45652173913042], [1.6673187122E12, 45.333333333333336], [1.6673212169E12, 29.882352941176467], [1.6673187124E12, 44.509433962264154], [1.6673212149E12, 48.653846153846146], [1.6673187103E12, 100.44444444444444], [1.667321217E12, 25.361111111111114], [1.6673187105E12, 38.285714285714285], [1.6673212168E12, 42.816326530612244], [1.6673187125E12, 40.51724137931034], [1.6673212148E12, 42.9016393442623], [1.6673187104E12, 37.46153846153847], [1.6673187127E12, 47.36666666666668], [1.6673212146E12, 40.338235294117645], [1.6673212167E12, 40.01492537313433], [1.6673187106E12, 37.046511627906966], [1.6673187126E12, 45.26530612244898], [1.6673212147E12, 40.66666666666666], [1.6673187128E12, 41.87931034482759], [1.6673212145E12, 42.851851851851855], [1.6673212166E12, 42.706896551724135], [1.6673187107E12, 42.56097560975611], [1.6673187109E12, 59.680851063829785], [1.6673212164E12, 39.55555555555554], [1.6673187129E12, 36.27692307692306], [1.6673212144E12, 45.35087719298246], [1.6673187108E12, 35.07142857142856], [1.6673212165E12, 53.723404255319146], [1.667318711E12, 46.52941176470588], [1.6673212163E12, 56.31372549019606], [1.6673212143E12, 46.48148148148148], [1.667318713E12, 42.61904761904762], [1.6673187132E12, 47.714285714285715], [1.6673212141E12, 46.27777777777778], [1.6673187111E12, 53.03921568627451], [1.6673212162E12, 42.44186046511627], [1.6673212142E12, 41.61666666666667], [1.6673187131E12, 54.07142857142856], [1.667321216E12, 41.78], [1.6673187133E12, 40.409836065573764], [1.667321214E12, 56.44999999999999], [1.6673187112E12, 44.87272727272727], [1.6673212161E12, 44.63636363636364]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673212172E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 16.64285714285714, "minX": 1.6673187103E12, "maxY": 96.44444444444444, "series": [{"data": [[1.6673212159E12, 49.07017543859649], [1.6673187114E12, 52.163265306122454], [1.6673187134E12, 41.72222222222223], [1.6673212139E12, 42.21311475409836], [1.6673187113E12, 39.33333333333333], [1.6673212137E12, 34.83333333333335], [1.6673212158E12, 47.500000000000014], [1.6673187115E12, 42.528301886792455], [1.6673187135E12, 44.46666666666667], [1.6673212138E12, 35.79245283018867], [1.6673187137E12, 43.625], [1.6673212136E12, 39.35], [1.6673187116E12, 41.54901960784314], [1.6673212157E12, 38.38235294117647], [1.6673187136E12, 50.391304347826086], [1.6673187118E12, 41.5], [1.6673212155E12, 45.5625], [1.6673212135E12, 33.38461538461538], [1.6673187138E12, 46.981481481481474], [1.6673187117E12, 49.98387096774194], [1.6673212156E12, 51.825396825396844], [1.6673187119E12, 43.55172413793104], [1.6673212154E12, 38.72463768115939], [1.6673212134E12, 30.08], [1.6673187139E12, 39.24193548387097], [1.6673187141E12, 25.714285714285708], [1.667318712E12, 50.14634146341463], [1.6673212153E12, 40.603448275862064], [1.667318714E12, 30.20833333333334], [1.6673212133E12, 65.7], [1.6673187142E12, 17.24], [1.6673212172E12, 16.64285714285714], [1.6673187121E12, 47.86206896551725], [1.6673212152E12, 54.0], [1.667321215E12, 44.461538461538446], [1.6673187123E12, 46.20967741935485], [1.6673187143E12, 16.875], [1.6673212171E12, 18.88235294117647], [1.6673212151E12, 47.347826086956516], [1.6673187122E12, 45.055555555555564], [1.6673212169E12, 29.86274509803921], [1.6673187124E12, 44.490566037735846], [1.6673212149E12, 48.55769230769233], [1.6673187103E12, 96.44444444444444], [1.667321217E12, 25.305555555555554], [1.6673187105E12, 37.10714285714286], [1.6673212168E12, 42.714285714285715], [1.6673187125E12, 40.344827586206875], [1.6673212148E12, 42.40983606557377], [1.6673187104E12, 37.230769230769226], [1.6673187127E12, 47.15000000000001], [1.6673212146E12, 40.19117647058823], [1.6673212167E12, 39.67164179104476], [1.6673187106E12, 36.7906976744186], [1.6673187126E12, 45.18367346938776], [1.6673212147E12, 40.55555555555556], [1.6673187128E12, 41.8103448275862], [1.6673212145E12, 42.59259259259259], [1.6673212166E12, 42.60344827586205], [1.6673187107E12, 41.926829268292686], [1.6673187109E12, 59.53191489361703], [1.6673212164E12, 38.603174603174594], [1.6673187129E12, 35.27692307692307], [1.6673212144E12, 45.12280701754386], [1.6673187108E12, 34.595238095238095], [1.6673212165E12, 53.680851063829785], [1.667318711E12, 46.52941176470588], [1.6673212163E12, 54.3529411764706], [1.6673212143E12, 45.83333333333332], [1.667318713E12, 42.3968253968254], [1.6673187132E12, 47.53571428571429], [1.6673212141E12, 45.962962962962955], [1.6673187111E12, 52.705882352941174], [1.6673212162E12, 42.27906976744186], [1.6673212142E12, 40.800000000000004], [1.6673187131E12, 52.666666666666664], [1.667321216E12, 41.480000000000004], [1.6673187133E12, 40.26229508196723], [1.667321214E12, 56.300000000000004], [1.6673187112E12, 44.59999999999998], [1.6673212161E12, 43.9848484848485]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673212172E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6673187103E12, "maxY": 41.333333333333336, "series": [{"data": [[1.6673212159E12, 0.0], [1.6673187114E12, 0.0], [1.6673187134E12, 0.0], [1.6673212139E12, 0.0819672131147541], [1.6673187113E12, 0.0], [1.6673212137E12, 0.08333333333333334], [1.6673212158E12, 0.0], [1.6673187115E12, 0.0], [1.6673187135E12, 0.0], [1.6673212138E12, 0.03773584905660377], [1.6673187137E12, 0.0], [1.6673212136E12, 0.10000000000000002], [1.6673187116E12, 0.0], [1.6673212157E12, 0.0], [1.6673187136E12, 0.0], [1.6673187118E12, 0.0], [1.6673212155E12, 0.0], [1.6673212135E12, 0.10256410256410256], [1.6673187138E12, 0.0], [1.6673187117E12, 0.0], [1.6673212156E12, 0.0], [1.6673187119E12, 0.0], [1.6673212154E12, 0.0], [1.6673212134E12, 0.12000000000000002], [1.6673187139E12, 0.0], [1.6673187141E12, 0.0], [1.667318712E12, 0.0], [1.6673212153E12, 0.0], [1.667318714E12, 0.0], [1.6673212133E12, 24.900000000000002], [1.6673187142E12, 0.0], [1.6673212172E12, 0.0], [1.6673187121E12, 0.0], [1.6673212152E12, 0.0], [1.667321215E12, 0.0], [1.6673187123E12, 0.0], [1.6673187143E12, 0.0], [1.6673212171E12, 0.0], [1.6673212151E12, 0.0], [1.6673187122E12, 0.0], [1.6673212169E12, 0.0], [1.6673187124E12, 0.0], [1.6673212149E12, 0.0], [1.6673187103E12, 41.333333333333336], [1.667321217E12, 0.0], [1.6673187105E12, 0.07142857142857145], [1.6673212168E12, 0.0], [1.6673187125E12, 0.0], [1.6673212148E12, 0.0], [1.6673187104E12, 0.23076923076923078], [1.6673187127E12, 0.0], [1.6673212146E12, 0.0], [1.6673212167E12, 0.0], [1.6673187106E12, 0.11627906976744189], [1.6673187126E12, 0.0], [1.6673212147E12, 0.0], [1.6673187128E12, 0.0], [1.6673212145E12, 0.0], [1.6673212166E12, 0.0], [1.6673187107E12, 0.09756097560975609], [1.6673187109E12, 0.06382978723404256], [1.6673212164E12, 0.0], [1.6673187129E12, 0.0], [1.6673212144E12, 0.0], [1.6673187108E12, 0.047619047619047616], [1.6673212165E12, 0.0], [1.667318711E12, 0.019607843137254898], [1.6673212163E12, 0.0], [1.6673212143E12, 0.0], [1.667318713E12, 0.0], [1.6673187132E12, 0.0], [1.6673212141E12, 0.0], [1.6673187111E12, 0.0], [1.6673212162E12, 0.0], [1.6673212142E12, 0.0], [1.6673187131E12, 0.0], [1.667321216E12, 0.0], [1.6673187133E12, 0.0], [1.667321214E12, 0.025000000000000012], [1.6673187112E12, 0.0], [1.6673212161E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673212172E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.6673187103E12, "maxY": 258.0, "series": [{"data": [[1.6673212159E12, 131.0], [1.6673187114E12, 108.0], [1.6673187134E12, 95.0], [1.6673212139E12, 125.0], [1.6673187113E12, 109.0], [1.6673212137E12, 86.0], [1.6673212158E12, 85.0], [1.6673187115E12, 87.0], [1.6673187135E12, 102.0], [1.6673212138E12, 104.0], [1.6673187137E12, 86.0], [1.6673212136E12, 63.0], [1.6673187116E12, 136.0], [1.6673212157E12, 115.0], [1.6673187136E12, 89.0], [1.6673187118E12, 69.0], [1.6673212155E12, 70.0], [1.6673212135E12, 47.0], [1.6673187138E12, 78.0], [1.6673187117E12, 258.0], [1.6673212156E12, 148.0], [1.6673187119E12, 104.0], [1.6673212154E12, 110.0], [1.6673212134E12, 39.0], [1.6673187139E12, 59.0], [1.6673187141E12, 51.0], [1.667318712E12, 158.0], [1.6673212153E12, 69.0], [1.667318714E12, 58.0], [1.6673212133E12, 107.0], [1.6673187142E12, 26.0], [1.6673212172E12, 23.0], [1.6673187121E12, 105.0], [1.6673212152E12, 104.0], [1.667321215E12, 63.0], [1.6673187123E12, 108.0], [1.6673187143E12, 23.0], [1.6673212171E12, 30.0], [1.6673212151E12, 84.0], [1.6673187122E12, 86.0], [1.6673212169E12, 71.0], [1.6673187124E12, 73.0], [1.6673212149E12, 107.0], [1.6673187103E12, 122.0], [1.667321217E12, 41.0], [1.6673187105E12, 86.0], [1.6673212168E12, 57.0], [1.6673187125E12, 96.0], [1.6673212148E12, 165.0], [1.6673187104E12, 47.0], [1.6673187127E12, 168.0], [1.6673212146E12, 79.0], [1.6673212167E12, 101.0], [1.6673187106E12, 85.0], [1.6673187126E12, 126.0], [1.6673212147E12, 141.0], [1.6673187128E12, 119.0], [1.6673212145E12, 113.0], [1.6673212166E12, 126.0], [1.6673187107E12, 80.0], [1.6673187109E12, 243.0], [1.6673212164E12, 116.0], [1.6673187129E12, 98.0], [1.6673212144E12, 82.0], [1.6673187108E12, 104.0], [1.6673212165E12, 247.0], [1.667318711E12, 141.0], [1.6673212163E12, 117.0], [1.6673212143E12, 163.0], [1.667318713E12, 150.0], [1.6673187132E12, 117.0], [1.6673212141E12, 78.0], [1.6673187111E12, 161.0], [1.6673212162E12, 85.0], [1.6673212142E12, 169.0], [1.6673187131E12, 85.0], [1.667321216E12, 141.0], [1.6673187133E12, 109.0], [1.667321214E12, 95.0], [1.6673187112E12, 123.0], [1.6673212161E12, 114.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6673212159E12, 77.4], [1.6673187114E12, 77.0], [1.6673187134E12, 67.0], [1.6673212139E12, 60.0], [1.6673187113E12, 57.8], [1.6673212137E12, 51.2], [1.6673212158E12, 74.7], [1.6673187115E12, 64.0], [1.6673187135E12, 68.0], [1.6673212138E12, 51.6], [1.6673187137E12, 64.30000000000001], [1.6673212136E12, 59.9], [1.6673187116E12, 54.0], [1.6673212157E12, 59.60000000000001], [1.6673187136E12, 80.30000000000001], [1.6673187118E12, 64.7], [1.6673212155E12, 62.199999999999996], [1.6673212135E12, 44.0], [1.6673187138E12, 63.5], [1.6673187117E12, 54.400000000000006], [1.6673212156E12, 90.6], [1.6673187119E12, 74.2], [1.6673212154E12, 56.0], [1.6673212134E12, 39.0], [1.6673187139E12, 48.7], [1.6673187141E12, 37.400000000000006], [1.667318712E12, 87.80000000000001], [1.6673212153E12, 56.2], [1.667318714E12, 37.80000000000001], [1.6673212133E12, 106.6], [1.6673187142E12, 25.400000000000002], [1.6673212172E12, 22.5], [1.6673187121E12, 70.1], [1.6673212152E12, 84.5], [1.667321215E12, 54.0], [1.6673187123E12, 75.0], [1.6673187143E12, 23.0], [1.6673212171E12, 25.0], [1.6673212151E12, 61.800000000000026], [1.6673187122E12, 70.0], [1.6673212169E12, 39.60000000000001], [1.6673187124E12, 62.800000000000004], [1.6673212149E12, 74.0], [1.6673187103E12, 122.0], [1.667321217E12, 38.20000000000002], [1.6673187105E12, 49.2], [1.6673212168E12, 52.0], [1.6673187125E12, 62.80000000000001], [1.6673212148E12, 59.0], [1.6673187104E12, 45.4], [1.6673187127E12, 90.6], [1.6673212146E12, 51.000000000000014], [1.6673212167E12, 59.400000000000006], [1.6673187106E12, 58.60000000000001], [1.6673187126E12, 57.0], [1.6673212147E12, 63.0], [1.6673187128E12, 61.300000000000004], [1.6673212145E12, 62.5], [1.6673212166E12, 67.30000000000001], [1.6673187107E12, 69.60000000000001], [1.6673187109E12, 153.8], [1.6673212164E12, 51.6], [1.6673187129E12, 52.4], [1.6673212144E12, 64.4], [1.6673187108E12, 53.400000000000006], [1.6673212165E12, 88.60000000000001], [1.667318711E12, 81.60000000000002], [1.6673212163E12, 91.0], [1.6673212143E12, 61.0], [1.667318713E12, 70.0], [1.6673187132E12, 73.30000000000001], [1.6673212141E12, 69.5], [1.6673187111E12, 73.4], [1.6673212162E12, 70.60000000000001], [1.6673212142E12, 61.9], [1.6673187131E12, 78.4], [1.667321216E12, 73.69999999999999], [1.6673187133E12, 53.60000000000001], [1.667321214E12, 81.9], [1.6673187112E12, 66.6], [1.6673212161E12, 83.40000000000008]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6673212159E12, 131.0], [1.6673187114E12, 108.0], [1.6673187134E12, 95.0], [1.6673212139E12, 125.0], [1.6673187113E12, 109.0], [1.6673212137E12, 86.0], [1.6673212158E12, 85.0], [1.6673187115E12, 87.0], [1.6673187135E12, 102.0], [1.6673212138E12, 104.0], [1.6673187137E12, 86.0], [1.6673212136E12, 63.0], [1.6673187116E12, 136.0], [1.6673212157E12, 115.0], [1.6673187136E12, 89.0], [1.6673187118E12, 69.0], [1.6673212155E12, 70.0], [1.6673212135E12, 47.0], [1.6673187138E12, 78.0], [1.6673187117E12, 258.0], [1.6673212156E12, 148.0], [1.6673187119E12, 104.0], [1.6673212154E12, 110.0], [1.6673212134E12, 39.0], [1.6673187139E12, 59.0], [1.6673187141E12, 51.0], [1.667318712E12, 158.0], [1.6673212153E12, 69.0], [1.667318714E12, 58.0], [1.6673212133E12, 107.0], [1.6673187142E12, 26.0], [1.6673212172E12, 23.0], [1.6673187121E12, 105.0], [1.6673212152E12, 104.0], [1.667321215E12, 63.0], [1.6673187123E12, 108.0], [1.6673187143E12, 23.0], [1.6673212171E12, 30.0], [1.6673212151E12, 84.0], [1.6673187122E12, 86.0], [1.6673212169E12, 71.0], [1.6673187124E12, 73.0], [1.6673212149E12, 107.0], [1.6673187103E12, 122.0], [1.667321217E12, 41.0], [1.6673187105E12, 86.0], [1.6673212168E12, 57.0], [1.6673187125E12, 96.0], [1.6673212148E12, 165.0], [1.6673187104E12, 47.0], [1.6673187127E12, 168.0], [1.6673212146E12, 79.0], [1.6673212167E12, 101.0], [1.6673187106E12, 85.0], [1.6673187126E12, 126.0], [1.6673212147E12, 141.0], [1.6673187128E12, 119.0], [1.6673212145E12, 113.0], [1.6673212166E12, 126.0], [1.6673187107E12, 80.0], [1.6673187109E12, 243.0], [1.6673212164E12, 116.0], [1.6673187129E12, 98.0], [1.6673212144E12, 82.0], [1.6673187108E12, 104.0], [1.6673212165E12, 247.0], [1.667318711E12, 141.0], [1.6673212163E12, 117.0], [1.6673212143E12, 163.0], [1.667318713E12, 150.0], [1.6673187132E12, 117.0], [1.6673212141E12, 78.0], [1.6673187111E12, 161.0], [1.6673212162E12, 85.0], [1.6673212142E12, 169.0], [1.6673187131E12, 85.0], [1.667321216E12, 141.0], [1.6673187133E12, 109.0], [1.667321214E12, 95.0], [1.6673187112E12, 123.0], [1.6673212161E12, 114.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6673212159E12, 83.19999999999987], [1.6673187114E12, 95.5], [1.6673187134E12, 83.0], [1.6673212139E12, 103.79999999999994], [1.6673187113E12, 76.19999999999993], [1.6673212137E12, 64.94999999999997], [1.6673212158E12, 81.10000000000001], [1.6673187115E12, 83.6], [1.6673187135E12, 78.59999999999997], [1.6673212138E12, 87.89999999999993], [1.6673187137E12, 69.24999999999997], [1.6673212136E12, 60.0], [1.6673187116E12, 72.39999999999998], [1.6673212157E12, 85.79999999999995], [1.6673187136E12, 85.94999999999999], [1.6673187118E12, 67.69999999999999], [1.6673212155E12, 68.05], [1.6673212135E12, 46.0], [1.6673187138E12, 70.25], [1.6673187117E12, 214.24999999999952], [1.6673212156E12, 119.99999999999997], [1.6673187119E12, 78.44999999999997], [1.6673212154E12, 63.5], [1.6673212134E12, 39.0], [1.6673187139E12, 55.099999999999966], [1.6673187141E12, 44.10000000000001], [1.667318712E12, 91.9], [1.6673212153E12, 61.29999999999998], [1.667318714E12, 50.64999999999999], [1.6673212133E12, 107.0], [1.6673187142E12, 26.0], [1.6673212172E12, 23.0], [1.6673187121E12, 76.05], [1.6673212152E12, 101.25], [1.667321215E12, 57.69999999999999], [1.6673187123E12, 85.24999999999997], [1.6673187143E12, 23.0], [1.6673212171E12, 27.0], [1.6673212151E12, 69.6], [1.6673187122E12, 79.5], [1.6673212169E12, 44.4], [1.6673187124E12, 68.19999999999999], [1.6673212149E12, 83.79999999999995], [1.6673187103E12, 122.0], [1.667321217E12, 41.0], [1.6673187105E12, 70.2499999999999], [1.6673212168E12, 56.0], [1.6673187125E12, 80.39999999999998], [1.6673212148E12, 120.79999999999991], [1.6673187104E12, 47.0], [1.6673187127E12, 108.79999999999998], [1.6673212146E12, 67.94999999999997], [1.6673212167E12, 69.19999999999996], [1.6673187106E12, 69.39999999999999], [1.6673187126E12, 90.5], [1.6673212147E12, 92.0], [1.6673187128E12, 65.24999999999999], [1.6673212145E12, 68.0], [1.6673212166E12, 84.99999999999994], [1.6673187107E12, 70.9], [1.6673187109E12, 216.99999999999997], [1.6673212164E12, 57.19999999999999], [1.6673187129E12, 63.39999999999999], [1.6673212144E12, 69.59999999999997], [1.6673187108E12, 92.85000000000002], [1.6673212165E12, 168.9999999999994], [1.667318711E12, 104.19999999999996], [1.6673212163E12, 97.19999999999999], [1.6673212143E12, 93.25], [1.667318713E12, 104.39999999999993], [1.6673187132E12, 88.04999999999998], [1.6673212141E12, 77.25], [1.6673187111E12, 103.19999999999999], [1.6673212162E12, 82.39999999999999], [1.6673212142E12, 91.34999999999994], [1.6673187131E12, 81.85], [1.667321216E12, 80.49999999999996], [1.6673187133E12, 55.9], [1.667321214E12, 88.74999999999997], [1.6673187112E12, 83.59999999999994], [1.6673212161E12, 108.6]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6673212159E12, 18.0], [1.6673187114E12, 19.0], [1.6673187134E12, 16.0], [1.6673212139E12, 18.0], [1.6673187113E12, 16.0], [1.6673212137E12, 16.0], [1.6673212158E12, 19.0], [1.6673187115E12, 19.0], [1.6673187135E12, 20.0], [1.6673212138E12, 16.0], [1.6673187137E12, 22.0], [1.6673212136E12, 18.0], [1.6673187116E12, 18.0], [1.6673212157E12, 18.0], [1.6673187136E12, 22.0], [1.6673187118E12, 14.0], [1.6673212155E12, 21.0], [1.6673212135E12, 19.0], [1.6673187138E12, 24.0], [1.6673187117E12, 20.0], [1.6673212156E12, 19.0], [1.6673187119E12, 14.0], [1.6673212154E12, 17.0], [1.6673212134E12, 19.0], [1.6673187139E12, 20.0], [1.6673187141E12, 14.0], [1.667318712E12, 21.0], [1.6673212153E12, 17.0], [1.667318714E12, 15.0], [1.6673212133E12, 17.0], [1.6673187142E12, 12.0], [1.6673212172E12, 13.0], [1.6673187121E12, 19.0], [1.6673212152E12, 29.0], [1.667321215E12, 26.0], [1.6673187123E12, 14.0], [1.6673187143E12, 14.0], [1.6673212171E12, 13.0], [1.6673212151E12, 23.0], [1.6673187122E12, 18.0], [1.6673212169E12, 16.0], [1.6673187124E12, 20.0], [1.6673212149E12, 20.0], [1.6673187103E12, 21.0], [1.667321217E12, 11.0], [1.6673187105E12, 19.0], [1.6673212168E12, 19.0], [1.6673187125E12, 14.0], [1.6673212148E12, 19.0], [1.6673187104E12, 19.0], [1.6673187127E12, 18.0], [1.6673212146E12, 16.0], [1.6673212167E12, 18.0], [1.6673187106E12, 19.0], [1.6673187126E12, 19.0], [1.6673212147E12, 17.0], [1.6673187128E12, 17.0], [1.6673212145E12, 24.0], [1.6673212166E12, 16.0], [1.6673187107E12, 22.0], [1.6673187109E12, 17.0], [1.6673212164E12, 16.0], [1.6673187129E12, 17.0], [1.6673212144E12, 21.0], [1.6673187108E12, 19.0], [1.6673212165E12, 16.0], [1.667318711E12, 20.0], [1.6673212163E12, 20.0], [1.6673212143E12, 22.0], [1.667318713E12, 15.0], [1.6673187132E12, 18.0], [1.6673212141E12, 25.0], [1.6673187111E12, 26.0], [1.6673212162E12, 15.0], [1.6673212142E12, 16.0], [1.6673187131E12, 23.0], [1.667321216E12, 18.0], [1.6673187133E12, 19.0], [1.667321214E12, 18.0], [1.6673187112E12, 22.0], [1.6673212161E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6673212159E12, 47.0], [1.6673187114E12, 50.0], [1.6673187134E12, 36.0], [1.6673212139E12, 41.0], [1.6673187113E12, 39.5], [1.6673212137E12, 32.0], [1.6673212158E12, 44.0], [1.6673187115E12, 42.0], [1.6673187135E12, 40.0], [1.6673212138E12, 33.0], [1.6673187137E12, 42.0], [1.6673212136E12, 37.0], [1.6673187116E12, 39.0], [1.6673212157E12, 36.0], [1.6673187136E12, 48.5], [1.6673187118E12, 37.0], [1.6673212155E12, 44.5], [1.6673212135E12, 33.0], [1.6673187138E12, 47.0], [1.6673187117E12, 39.5], [1.6673212156E12, 41.0], [1.6673187119E12, 40.5], [1.6673212154E12, 37.0], [1.6673212134E12, 32.0], [1.6673187139E12, 40.0], [1.6673187141E12, 23.0], [1.667318712E12, 46.0], [1.6673212153E12, 39.5], [1.667318714E12, 29.0], [1.6673212133E12, 94.0], [1.6673187142E12, 16.0], [1.6673212172E12, 15.5], [1.6673187121E12, 45.0], [1.6673212152E12, 52.5], [1.667321215E12, 44.0], [1.6673187123E12, 39.5], [1.6673187143E12, 16.0], [1.6673212171E12, 18.0], [1.6673212151E12, 47.5], [1.6673187122E12, 40.0], [1.6673212169E12, 29.0], [1.6673187124E12, 44.0], [1.6673212149E12, 50.0], [1.6673187103E12, 121.0], [1.667321217E12, 21.0], [1.6673187105E12, 38.5], [1.6673212168E12, 44.0], [1.6673187125E12, 39.0], [1.6673212148E12, 35.0], [1.6673187104E12, 41.0], [1.6673187127E12, 36.5], [1.6673212146E12, 40.0], [1.6673212167E12, 36.0], [1.6673187106E12, 34.0], [1.6673187126E12, 45.0], [1.6673212147E12, 33.5], [1.6673187128E12, 41.0], [1.6673212145E12, 41.0], [1.6673212166E12, 38.0], [1.6673187107E12, 40.0], [1.6673187109E12, 38.0], [1.6673212164E12, 39.0], [1.6673187129E12, 33.0], [1.6673212144E12, 46.0], [1.6673187108E12, 31.0], [1.6673212165E12, 45.0], [1.667318711E12, 40.0], [1.6673212163E12, 53.0], [1.6673212143E12, 43.0], [1.667318713E12, 38.0], [1.6673187132E12, 42.0], [1.6673212141E12, 45.5], [1.6673187111E12, 50.0], [1.6673212162E12, 38.0], [1.6673212142E12, 36.5], [1.6673187131E12, 53.0], [1.667321216E12, 36.5], [1.6673187133E12, 39.0], [1.667321214E12, 49.0], [1.6673187112E12, 39.0], [1.6673212161E12, 42.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673212172E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 20.0, "minX": 84.0, "maxY": 42.0, "series": [{"data": [[542.0, 40.5], [541.0, 42.0], [558.0, 41.0], [554.0, 42.0], [276.0, 35.0], [545.0, 39.0], [84.0, 20.0], [223.0, 38.0], [123.0, 24.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 558.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 20.0, "minX": 84.0, "maxY": 42.0, "series": [{"data": [[542.0, 40.0], [541.0, 42.0], [558.0, 40.0], [554.0, 41.0], [276.0, 34.0], [545.0, 38.0], [84.0, 20.0], [223.0, 37.0], [123.0, 23.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 558.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 30.0, "minX": 1.6673187102E12, "maxY": 690.0, "series": [{"data": [[1.6673212159E12, 570.0], [1.6673187114E12, 470.0], [1.6673187134E12, 540.0], [1.6673212139E12, 630.0], [1.6673187113E12, 600.0], [1.6673212137E12, 510.0], [1.6673212158E12, 420.0], [1.6673187115E12, 540.0], [1.6673187135E12, 590.0], [1.6673212138E12, 560.0], [1.6673187137E12, 570.0], [1.6673212136E12, 440.0], [1.6673187116E12, 520.0], [1.6673212157E12, 680.0], [1.6673187136E12, 460.0], [1.6673187118E12, 520.0], [1.6673212155E12, 320.0], [1.6673212135E12, 390.0], [1.6673187138E12, 520.0], [1.6673187117E12, 620.0], [1.6673212156E12, 630.0], [1.6673187119E12, 580.0], [1.6673212154E12, 690.0], [1.6673212134E12, 380.0], [1.6673187139E12, 550.0], [1.6673187141E12, 370.0], [1.6673212132E12, 70.0], [1.667318712E12, 410.0], [1.6673212153E12, 580.0], [1.667318714E12, 440.0], [1.6673212133E12, 30.0], [1.6673187142E12, 200.0], [1.6673212172E12, 90.0], [1.6673187121E12, 580.0], [1.6673212152E12, 540.0], [1.667321215E12, 520.0], [1.6673187123E12, 620.0], [1.6673187102E12, 70.0], [1.6673187143E12, 60.0], [1.6673212171E12, 320.0], [1.6673212151E12, 460.0], [1.6673187122E12, 540.0], [1.6673212169E12, 420.0], [1.6673187124E12, 520.0], [1.6673212149E12, 520.0], [1.6673187103E12, 30.0], [1.667321217E12, 330.0], [1.6673187105E12, 300.0], [1.6673212168E12, 450.0], [1.6673187125E12, 590.0], [1.6673212148E12, 610.0], [1.6673187104E12, 250.0], [1.6673187127E12, 600.0], [1.6673212146E12, 680.0], [1.6673212167E12, 670.0], [1.6673187106E12, 460.0], [1.6673187126E12, 490.0], [1.6673212147E12, 540.0], [1.6673187128E12, 580.0], [1.6673212145E12, 540.0], [1.6673212166E12, 570.0], [1.6673187107E12, 420.0], [1.6673187109E12, 490.0], [1.6673212164E12, 640.0], [1.6673187129E12, 650.0], [1.6673212144E12, 570.0], [1.6673187108E12, 460.0], [1.6673212165E12, 460.0], [1.667318711E12, 490.0], [1.6673212163E12, 500.0], [1.6673212143E12, 540.0], [1.667318713E12, 630.0], [1.6673187132E12, 560.0], [1.6673212141E12, 540.0], [1.6673187111E12, 530.0], [1.6673212162E12, 430.0], [1.6673212142E12, 600.0], [1.6673187131E12, 420.0], [1.667321216E12, 500.0], [1.6673187133E12, 610.0], [1.667321214E12, 400.0], [1.6673187112E12, 550.0], [1.6673212161E12, 660.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673212172E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6673187103E12, "maxY": 690.0, "series": [{"data": [[1.6673212159E12, 570.0], [1.6673187114E12, 490.0], [1.6673187134E12, 540.0], [1.6673212139E12, 610.0], [1.6673187113E12, 600.0], [1.6673212137E12, 480.0], [1.6673212158E12, 420.0], [1.6673187115E12, 530.0], [1.6673187135E12, 600.0], [1.6673212138E12, 530.0], [1.6673187137E12, 560.0], [1.6673212136E12, 400.0], [1.6673187116E12, 510.0], [1.6673212157E12, 680.0], [1.6673187136E12, 460.0], [1.6673187118E12, 520.0], [1.6673212155E12, 320.0], [1.6673212135E12, 390.0], [1.6673187138E12, 540.0], [1.6673187117E12, 620.0], [1.6673212156E12, 630.0], [1.6673187119E12, 580.0], [1.6673212154E12, 690.0], [1.6673212134E12, 250.0], [1.6673187139E12, 620.0], [1.6673187141E12, 420.0], [1.667318712E12, 410.0], [1.6673212153E12, 580.0], [1.667318714E12, 480.0], [1.6673212133E12, 100.0], [1.6673187142E12, 250.0], [1.6673212172E12, 140.0], [1.6673187121E12, 580.0], [1.6673212152E12, 540.0], [1.667321215E12, 520.0], [1.6673187123E12, 620.0], [1.6673187143E12, 80.0], [1.6673212171E12, 340.0], [1.6673212151E12, 460.0], [1.6673187122E12, 540.0], [1.6673212169E12, 510.0], [1.6673187124E12, 530.0], [1.6673212149E12, 520.0], [1.6673187103E12, 90.0], [1.667321217E12, 360.0], [1.6673187105E12, 280.0], [1.6673212168E12, 490.0], [1.6673187125E12, 580.0], [1.6673212148E12, 610.0], [1.6673187104E12, 130.0], [1.6673187127E12, 600.0], [1.6673212146E12, 680.0], [1.6673212167E12, 670.0], [1.6673187106E12, 430.0], [1.6673187126E12, 490.0], [1.6673212147E12, 540.0], [1.6673187128E12, 580.0], [1.6673212145E12, 540.0], [1.6673212166E12, 580.0], [1.6673187107E12, 410.0], [1.6673187109E12, 470.0], [1.6673212164E12, 630.0], [1.6673187129E12, 650.0], [1.6673212144E12, 570.0], [1.6673187108E12, 420.0], [1.6673212165E12, 470.0], [1.667318711E12, 510.0], [1.6673212163E12, 510.0], [1.6673212143E12, 540.0], [1.667318713E12, 630.0], [1.6673187132E12, 560.0], [1.6673212141E12, 540.0], [1.6673187111E12, 510.0], [1.6673212162E12, 430.0], [1.6673212142E12, 600.0], [1.6673187131E12, 420.0], [1.667321216E12, 500.0], [1.6673187133E12, 610.0], [1.667321214E12, 400.0], [1.6673187112E12, 550.0], [1.6673212161E12, 660.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673212172E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6673187103E12, "maxY": 690.0, "series": [{"data": [[1.6673212159E12, 570.0], [1.6673187114E12, 490.0], [1.6673187134E12, 540.0], [1.6673212139E12, 610.0], [1.6673187113E12, 600.0], [1.6673212137E12, 480.0], [1.6673212158E12, 420.0], [1.6673187115E12, 530.0], [1.6673187135E12, 600.0], [1.6673212138E12, 530.0], [1.6673187137E12, 560.0], [1.6673212136E12, 400.0], [1.6673187116E12, 510.0], [1.6673212157E12, 680.0], [1.6673187136E12, 460.0], [1.6673187118E12, 520.0], [1.6673212155E12, 320.0], [1.6673212135E12, 390.0], [1.6673187138E12, 540.0], [1.6673187117E12, 620.0], [1.6673212156E12, 630.0], [1.6673187119E12, 580.0], [1.6673212154E12, 690.0], [1.6673212134E12, 250.0], [1.6673187139E12, 620.0], [1.6673187141E12, 420.0], [1.667318712E12, 410.0], [1.6673212153E12, 580.0], [1.667318714E12, 480.0], [1.6673212133E12, 100.0], [1.6673187142E12, 250.0], [1.6673212172E12, 140.0], [1.6673187121E12, 580.0], [1.6673212152E12, 540.0], [1.667321215E12, 520.0], [1.6673187123E12, 620.0], [1.6673187143E12, 80.0], [1.6673212171E12, 340.0], [1.6673212151E12, 460.0], [1.6673187122E12, 540.0], [1.6673212169E12, 510.0], [1.6673187124E12, 530.0], [1.6673212149E12, 520.0], [1.6673187103E12, 90.0], [1.667321217E12, 360.0], [1.6673187105E12, 280.0], [1.6673212168E12, 490.0], [1.6673187125E12, 580.0], [1.6673212148E12, 610.0], [1.6673187104E12, 130.0], [1.6673187127E12, 600.0], [1.6673212146E12, 680.0], [1.6673212167E12, 670.0], [1.6673187106E12, 430.0], [1.6673187126E12, 490.0], [1.6673212147E12, 540.0], [1.6673187128E12, 580.0], [1.6673212145E12, 540.0], [1.6673212166E12, 580.0], [1.6673187107E12, 410.0], [1.6673187109E12, 470.0], [1.6673212164E12, 630.0], [1.6673187129E12, 650.0], [1.6673212144E12, 570.0], [1.6673187108E12, 420.0], [1.6673212165E12, 470.0], [1.667318711E12, 510.0], [1.6673212163E12, 510.0], [1.6673212143E12, 540.0], [1.667318713E12, 630.0], [1.6673187132E12, 560.0], [1.6673212141E12, 540.0], [1.6673187111E12, 510.0], [1.6673212162E12, 430.0], [1.6673212142E12, 600.0], [1.6673187131E12, 420.0], [1.667321216E12, 500.0], [1.6673187133E12, 610.0], [1.667321214E12, 400.0], [1.6673187112E12, 550.0], [1.6673212161E12, 660.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673212172E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6673187103E12, "maxY": 690.0, "series": [{"data": [[1.6673212159E12, 570.0], [1.6673187114E12, 490.0], [1.6673187134E12, 540.0], [1.6673212139E12, 610.0], [1.6673187113E12, 600.0], [1.6673212137E12, 480.0], [1.6673212158E12, 420.0], [1.6673187115E12, 530.0], [1.6673187135E12, 600.0], [1.6673212138E12, 530.0], [1.6673187137E12, 560.0], [1.6673212136E12, 400.0], [1.6673187116E12, 510.0], [1.6673212157E12, 680.0], [1.6673187136E12, 460.0], [1.6673187118E12, 520.0], [1.6673212155E12, 320.0], [1.6673212135E12, 390.0], [1.6673187138E12, 540.0], [1.6673187117E12, 620.0], [1.6673212156E12, 630.0], [1.6673187119E12, 580.0], [1.6673212154E12, 690.0], [1.6673212134E12, 250.0], [1.6673187139E12, 620.0], [1.6673187141E12, 420.0], [1.667318712E12, 410.0], [1.6673212153E12, 580.0], [1.667318714E12, 480.0], [1.6673212133E12, 100.0], [1.6673187142E12, 250.0], [1.6673212172E12, 140.0], [1.6673187121E12, 580.0], [1.6673212152E12, 540.0], [1.667321215E12, 520.0], [1.6673187123E12, 620.0], [1.6673187143E12, 80.0], [1.6673212171E12, 340.0], [1.6673212151E12, 460.0], [1.6673187122E12, 540.0], [1.6673212169E12, 510.0], [1.6673187124E12, 530.0], [1.6673212149E12, 520.0], [1.6673187103E12, 90.0], [1.667321217E12, 360.0], [1.6673187105E12, 280.0], [1.6673212168E12, 490.0], [1.6673187125E12, 580.0], [1.6673212148E12, 610.0], [1.6673187104E12, 130.0], [1.6673187127E12, 600.0], [1.6673212146E12, 680.0], [1.6673212167E12, 670.0], [1.6673187106E12, 430.0], [1.6673187126E12, 490.0], [1.6673212147E12, 540.0], [1.6673187128E12, 580.0], [1.6673212145E12, 540.0], [1.6673212166E12, 580.0], [1.6673187107E12, 410.0], [1.6673187109E12, 470.0], [1.6673212164E12, 630.0], [1.6673187129E12, 650.0], [1.6673212144E12, 570.0], [1.6673187108E12, 420.0], [1.6673212165E12, 470.0], [1.667318711E12, 510.0], [1.6673212163E12, 510.0], [1.6673212143E12, 540.0], [1.667318713E12, 630.0], [1.6673187132E12, 560.0], [1.6673212141E12, 540.0], [1.6673187111E12, 510.0], [1.6673212162E12, 430.0], [1.6673212142E12, 600.0], [1.6673187131E12, 420.0], [1.667321216E12, 500.0], [1.6673187133E12, 610.0], [1.667321214E12, 400.0], [1.6673187112E12, 550.0], [1.6673212161E12, 660.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673212172E12, "title": "Total Transactions Per Second"}},
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

