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
        data: {"result": {"minY": 11.0, "minX": 0.0, "maxY": 119.0, "series": [{"data": [[0.0, 11.0], [0.1, 12.0], [0.2, 13.0], [0.3, 13.0], [0.4, 13.0], [0.5, 13.0], [0.6, 13.0], [0.7, 13.0], [0.8, 13.0], [0.9, 13.0], [1.0, 13.0], [1.1, 13.0], [1.2, 14.0], [1.3, 14.0], [1.4, 14.0], [1.5, 14.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 14.0], [2.1, 14.0], [2.2, 14.0], [2.3, 14.0], [2.4, 14.0], [2.5, 14.0], [2.6, 14.0], [2.7, 14.0], [2.8, 14.0], [2.9, 14.0], [3.0, 14.0], [3.1, 14.0], [3.2, 14.0], [3.3, 15.0], [3.4, 15.0], [3.5, 15.0], [3.6, 15.0], [3.7, 15.0], [3.8, 15.0], [3.9, 15.0], [4.0, 15.0], [4.1, 15.0], [4.2, 15.0], [4.3, 15.0], [4.4, 15.0], [4.5, 15.0], [4.6, 15.0], [4.7, 15.0], [4.8, 15.0], [4.9, 15.0], [5.0, 15.0], [5.1, 15.0], [5.2, 15.0], [5.3, 15.0], [5.4, 15.0], [5.5, 15.0], [5.6, 15.0], [5.7, 15.0], [5.8, 15.0], [5.9, 15.0], [6.0, 15.0], [6.1, 15.0], [6.2, 15.0], [6.3, 15.0], [6.4, 15.0], [6.5, 15.0], [6.6, 15.0], [6.7, 15.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 16.0], [7.2, 16.0], [7.3, 16.0], [7.4, 16.0], [7.5, 16.0], [7.6, 16.0], [7.7, 16.0], [7.8, 16.0], [7.9, 16.0], [8.0, 16.0], [8.1, 16.0], [8.2, 16.0], [8.3, 16.0], [8.4, 16.0], [8.5, 16.0], [8.6, 16.0], [8.7, 16.0], [8.8, 16.0], [8.9, 16.0], [9.0, 16.0], [9.1, 16.0], [9.2, 16.0], [9.3, 16.0], [9.4, 16.0], [9.5, 16.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 16.0], [10.7, 16.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 17.0], [11.7, 17.0], [11.8, 17.0], [11.9, 17.0], [12.0, 17.0], [12.1, 17.0], [12.2, 17.0], [12.3, 17.0], [12.4, 17.0], [12.5, 17.0], [12.6, 17.0], [12.7, 17.0], [12.8, 17.0], [12.9, 17.0], [13.0, 17.0], [13.1, 17.0], [13.2, 17.0], [13.3, 17.0], [13.4, 17.0], [13.5, 17.0], [13.6, 17.0], [13.7, 17.0], [13.8, 17.0], [13.9, 17.0], [14.0, 17.0], [14.1, 17.0], [14.2, 17.0], [14.3, 17.0], [14.4, 17.0], [14.5, 17.0], [14.6, 17.0], [14.7, 17.0], [14.8, 17.0], [14.9, 17.0], [15.0, 17.0], [15.1, 17.0], [15.2, 17.0], [15.3, 17.0], [15.4, 17.0], [15.5, 17.0], [15.6, 17.0], [15.7, 17.0], [15.8, 17.0], [15.9, 17.0], [16.0, 17.0], [16.1, 17.0], [16.2, 17.0], [16.3, 17.0], [16.4, 17.0], [16.5, 17.0], [16.6, 17.0], [16.7, 17.0], [16.8, 17.0], [16.9, 17.0], [17.0, 17.0], [17.1, 17.0], [17.2, 17.0], [17.3, 17.0], [17.4, 17.0], [17.5, 17.0], [17.6, 17.0], [17.7, 18.0], [17.8, 18.0], [17.9, 18.0], [18.0, 18.0], [18.1, 18.0], [18.2, 18.0], [18.3, 18.0], [18.4, 18.0], [18.5, 18.0], [18.6, 18.0], [18.7, 18.0], [18.8, 18.0], [18.9, 18.0], [19.0, 18.0], [19.1, 18.0], [19.2, 18.0], [19.3, 18.0], [19.4, 18.0], [19.5, 18.0], [19.6, 18.0], [19.7, 18.0], [19.8, 18.0], [19.9, 18.0], [20.0, 18.0], [20.1, 18.0], [20.2, 18.0], [20.3, 18.0], [20.4, 18.0], [20.5, 18.0], [20.6, 18.0], [20.7, 18.0], [20.8, 18.0], [20.9, 18.0], [21.0, 18.0], [21.1, 18.0], [21.2, 18.0], [21.3, 18.0], [21.4, 18.0], [21.5, 18.0], [21.6, 18.0], [21.7, 18.0], [21.8, 18.0], [21.9, 18.0], [22.0, 18.0], [22.1, 18.0], [22.2, 18.0], [22.3, 18.0], [22.4, 18.0], [22.5, 18.0], [22.6, 18.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 19.0], [23.8, 19.0], [23.9, 19.0], [24.0, 19.0], [24.1, 19.0], [24.2, 19.0], [24.3, 19.0], [24.4, 19.0], [24.5, 19.0], [24.6, 19.0], [24.7, 19.0], [24.8, 19.0], [24.9, 19.0], [25.0, 19.0], [25.1, 19.0], [25.2, 19.0], [25.3, 19.0], [25.4, 19.0], [25.5, 19.0], [25.6, 19.0], [25.7, 19.0], [25.8, 19.0], [25.9, 19.0], [26.0, 19.0], [26.1, 19.0], [26.2, 19.0], [26.3, 19.0], [26.4, 19.0], [26.5, 19.0], [26.6, 19.0], [26.7, 19.0], [26.8, 19.0], [26.9, 19.0], [27.0, 19.0], [27.1, 19.0], [27.2, 19.0], [27.3, 19.0], [27.4, 19.0], [27.5, 19.0], [27.6, 19.0], [27.7, 19.0], [27.8, 19.0], [27.9, 19.0], [28.0, 19.0], [28.1, 19.0], [28.2, 19.0], [28.3, 19.0], [28.4, 19.0], [28.5, 19.0], [28.6, 19.0], [28.7, 19.0], [28.8, 19.0], [28.9, 19.0], [29.0, 19.0], [29.1, 19.0], [29.2, 20.0], [29.3, 20.0], [29.4, 20.0], [29.5, 20.0], [29.6, 20.0], [29.7, 20.0], [29.8, 20.0], [29.9, 20.0], [30.0, 20.0], [30.1, 20.0], [30.2, 20.0], [30.3, 20.0], [30.4, 20.0], [30.5, 20.0], [30.6, 20.0], [30.7, 20.0], [30.8, 20.0], [30.9, 20.0], [31.0, 20.0], [31.1, 20.0], [31.2, 20.0], [31.3, 20.0], [31.4, 20.0], [31.5, 20.0], [31.6, 20.0], [31.7, 20.0], [31.8, 20.0], [31.9, 20.0], [32.0, 20.0], [32.1, 20.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 20.0], [33.2, 20.0], [33.3, 20.0], [33.4, 20.0], [33.5, 20.0], [33.6, 20.0], [33.7, 20.0], [33.8, 20.0], [33.9, 20.0], [34.0, 20.0], [34.1, 20.0], [34.2, 20.0], [34.3, 20.0], [34.4, 20.0], [34.5, 20.0], [34.6, 20.0], [34.7, 20.0], [34.8, 20.0], [34.9, 20.0], [35.0, 20.0], [35.1, 20.0], [35.2, 20.0], [35.3, 20.0], [35.4, 20.0], [35.5, 20.0], [35.6, 20.0], [35.7, 20.0], [35.8, 20.0], [35.9, 20.0], [36.0, 20.0], [36.1, 21.0], [36.2, 21.0], [36.3, 21.0], [36.4, 21.0], [36.5, 21.0], [36.6, 21.0], [36.7, 21.0], [36.8, 21.0], [36.9, 21.0], [37.0, 21.0], [37.1, 21.0], [37.2, 21.0], [37.3, 21.0], [37.4, 21.0], [37.5, 21.0], [37.6, 21.0], [37.7, 21.0], [37.8, 21.0], [37.9, 21.0], [38.0, 21.0], [38.1, 21.0], [38.2, 21.0], [38.3, 21.0], [38.4, 21.0], [38.5, 21.0], [38.6, 21.0], [38.7, 21.0], [38.8, 21.0], [38.9, 21.0], [39.0, 21.0], [39.1, 21.0], [39.2, 21.0], [39.3, 21.0], [39.4, 21.0], [39.5, 21.0], [39.6, 21.0], [39.7, 21.0], [39.8, 21.0], [39.9, 21.0], [40.0, 21.0], [40.1, 21.0], [40.2, 21.0], [40.3, 21.0], [40.4, 21.0], [40.5, 21.0], [40.6, 21.0], [40.7, 21.0], [40.8, 21.0], [40.9, 21.0], [41.0, 21.0], [41.1, 21.0], [41.2, 21.0], [41.3, 21.0], [41.4, 21.0], [41.5, 21.0], [41.6, 21.0], [41.7, 21.0], [41.8, 21.0], [41.9, 21.0], [42.0, 21.0], [42.1, 21.0], [42.2, 21.0], [42.3, 22.0], [42.4, 22.0], [42.5, 22.0], [42.6, 22.0], [42.7, 22.0], [42.8, 22.0], [42.9, 22.0], [43.0, 22.0], [43.1, 22.0], [43.2, 22.0], [43.3, 22.0], [43.4, 22.0], [43.5, 22.0], [43.6, 22.0], [43.7, 22.0], [43.8, 22.0], [43.9, 22.0], [44.0, 22.0], [44.1, 22.0], [44.2, 22.0], [44.3, 22.0], [44.4, 22.0], [44.5, 22.0], [44.6, 22.0], [44.7, 22.0], [44.8, 22.0], [44.9, 22.0], [45.0, 22.0], [45.1, 22.0], [45.2, 22.0], [45.3, 22.0], [45.4, 22.0], [45.5, 22.0], [45.6, 22.0], [45.7, 22.0], [45.8, 22.0], [45.9, 22.0], [46.0, 22.0], [46.1, 22.0], [46.2, 22.0], [46.3, 22.0], [46.4, 22.0], [46.5, 22.0], [46.6, 22.0], [46.7, 22.0], [46.8, 22.0], [46.9, 22.0], [47.0, 22.0], [47.1, 22.0], [47.2, 22.0], [47.3, 22.0], [47.4, 22.0], [47.5, 22.0], [47.6, 22.0], [47.7, 22.0], [47.8, 22.0], [47.9, 22.0], [48.0, 22.0], [48.1, 22.0], [48.2, 22.0], [48.3, 22.0], [48.4, 22.0], [48.5, 23.0], [48.6, 23.0], [48.7, 23.0], [48.8, 23.0], [48.9, 23.0], [49.0, 23.0], [49.1, 23.0], [49.2, 23.0], [49.3, 23.0], [49.4, 23.0], [49.5, 23.0], [49.6, 23.0], [49.7, 23.0], [49.8, 23.0], [49.9, 23.0], [50.0, 23.0], [50.1, 23.0], [50.2, 23.0], [50.3, 23.0], [50.4, 23.0], [50.5, 23.0], [50.6, 23.0], [50.7, 23.0], [50.8, 23.0], [50.9, 23.0], [51.0, 23.0], [51.1, 23.0], [51.2, 23.0], [51.3, 23.0], [51.4, 23.0], [51.5, 23.0], [51.6, 23.0], [51.7, 23.0], [51.8, 23.0], [51.9, 23.0], [52.0, 23.0], [52.1, 23.0], [52.2, 23.0], [52.3, 23.0], [52.4, 23.0], [52.5, 23.0], [52.6, 23.0], [52.7, 23.0], [52.8, 23.0], [52.9, 23.0], [53.0, 23.0], [53.1, 23.0], [53.2, 23.0], [53.3, 23.0], [53.4, 23.0], [53.5, 23.0], [53.6, 23.0], [53.7, 23.0], [53.8, 23.0], [53.9, 23.0], [54.0, 23.0], [54.1, 23.0], [54.2, 23.0], [54.3, 23.0], [54.4, 23.0], [54.5, 23.0], [54.6, 23.0], [54.7, 23.0], [54.8, 23.0], [54.9, 23.0], [55.0, 23.0], [55.1, 23.0], [55.2, 23.0], [55.3, 23.0], [55.4, 24.0], [55.5, 24.0], [55.6, 24.0], [55.7, 24.0], [55.8, 24.0], [55.9, 24.0], [56.0, 24.0], [56.1, 24.0], [56.2, 24.0], [56.3, 24.0], [56.4, 24.0], [56.5, 24.0], [56.6, 24.0], [56.7, 24.0], [56.8, 24.0], [56.9, 24.0], [57.0, 24.0], [57.1, 24.0], [57.2, 24.0], [57.3, 24.0], [57.4, 24.0], [57.5, 24.0], [57.6, 24.0], [57.7, 24.0], [57.8, 24.0], [57.9, 24.0], [58.0, 24.0], [58.1, 24.0], [58.2, 24.0], [58.3, 24.0], [58.4, 24.0], [58.5, 24.0], [58.6, 24.0], [58.7, 24.0], [58.8, 24.0], [58.9, 24.0], [59.0, 24.0], [59.1, 24.0], [59.2, 24.0], [59.3, 24.0], [59.4, 24.0], [59.5, 24.0], [59.6, 24.0], [59.7, 24.0], [59.8, 24.0], [59.9, 24.0], [60.0, 24.0], [60.1, 24.0], [60.2, 24.0], [60.3, 24.0], [60.4, 24.0], [60.5, 24.0], [60.6, 24.0], [60.7, 24.0], [60.8, 24.0], [60.9, 25.0], [61.0, 25.0], [61.1, 25.0], [61.2, 25.0], [61.3, 25.0], [61.4, 25.0], [61.5, 25.0], [61.6, 25.0], [61.7, 25.0], [61.8, 25.0], [61.9, 25.0], [62.0, 25.0], [62.1, 25.0], [62.2, 25.0], [62.3, 25.0], [62.4, 25.0], [62.5, 25.0], [62.6, 25.0], [62.7, 25.0], [62.8, 25.0], [62.9, 25.0], [63.0, 25.0], [63.1, 25.0], [63.2, 25.0], [63.3, 25.0], [63.4, 25.0], [63.5, 25.0], [63.6, 25.0], [63.7, 25.0], [63.8, 25.0], [63.9, 25.0], [64.0, 25.0], [64.1, 25.0], [64.2, 25.0], [64.3, 25.0], [64.4, 25.0], [64.5, 25.0], [64.6, 25.0], [64.7, 25.0], [64.8, 25.0], [64.9, 25.0], [65.0, 25.0], [65.1, 25.0], [65.2, 25.0], [65.3, 25.0], [65.4, 25.0], [65.5, 26.0], [65.6, 26.0], [65.7, 26.0], [65.8, 26.0], [65.9, 26.0], [66.0, 26.0], [66.1, 26.0], [66.2, 26.0], [66.3, 26.0], [66.4, 26.0], [66.5, 26.0], [66.6, 26.0], [66.7, 26.0], [66.8, 26.0], [66.9, 26.0], [67.0, 26.0], [67.1, 26.0], [67.2, 26.0], [67.3, 26.0], [67.4, 26.0], [67.5, 26.0], [67.6, 26.0], [67.7, 26.0], [67.8, 26.0], [67.9, 26.0], [68.0, 26.0], [68.1, 26.0], [68.2, 26.0], [68.3, 26.0], [68.4, 26.0], [68.5, 26.0], [68.6, 26.0], [68.7, 26.0], [68.8, 26.0], [68.9, 26.0], [69.0, 26.0], [69.1, 26.0], [69.2, 26.0], [69.3, 26.0], [69.4, 26.0], [69.5, 26.0], [69.6, 26.0], [69.7, 26.0], [69.8, 26.0], [69.9, 26.0], [70.0, 26.0], [70.1, 27.0], [70.2, 27.0], [70.3, 27.0], [70.4, 27.0], [70.5, 27.0], [70.6, 27.0], [70.7, 27.0], [70.8, 27.0], [70.9, 27.0], [71.0, 27.0], [71.1, 27.0], [71.2, 27.0], [71.3, 27.0], [71.4, 27.0], [71.5, 27.0], [71.6, 27.0], [71.7, 27.0], [71.8, 27.0], [71.9, 27.0], [72.0, 27.0], [72.1, 27.0], [72.2, 27.0], [72.3, 27.0], [72.4, 27.0], [72.5, 27.0], [72.6, 27.0], [72.7, 27.0], [72.8, 27.0], [72.9, 27.0], [73.0, 27.0], [73.1, 27.0], [73.2, 27.0], [73.3, 27.0], [73.4, 27.0], [73.5, 27.0], [73.6, 27.0], [73.7, 28.0], [73.8, 28.0], [73.9, 28.0], [74.0, 28.0], [74.1, 28.0], [74.2, 28.0], [74.3, 28.0], [74.4, 28.0], [74.5, 28.0], [74.6, 28.0], [74.7, 28.0], [74.8, 28.0], [74.9, 28.0], [75.0, 28.0], [75.1, 28.0], [75.2, 28.0], [75.3, 28.0], [75.4, 28.0], [75.5, 28.0], [75.6, 28.0], [75.7, 28.0], [75.8, 28.0], [75.9, 28.0], [76.0, 28.0], [76.1, 28.0], [76.2, 28.0], [76.3, 28.0], [76.4, 28.0], [76.5, 28.0], [76.6, 28.0], [76.7, 28.0], [76.8, 28.0], [76.9, 29.0], [77.0, 29.0], [77.1, 29.0], [77.2, 29.0], [77.3, 29.0], [77.4, 29.0], [77.5, 29.0], [77.6, 29.0], [77.7, 29.0], [77.8, 29.0], [77.9, 29.0], [78.0, 29.0], [78.1, 29.0], [78.2, 29.0], [78.3, 29.0], [78.4, 29.0], [78.5, 29.0], [78.6, 29.0], [78.7, 29.0], [78.8, 29.0], [78.9, 29.0], [79.0, 29.0], [79.1, 29.0], [79.2, 29.0], [79.3, 29.0], [79.4, 29.0], [79.5, 30.0], [79.6, 30.0], [79.7, 30.0], [79.8, 30.0], [79.9, 30.0], [80.0, 30.0], [80.1, 30.0], [80.2, 30.0], [80.3, 30.0], [80.4, 30.0], [80.5, 30.0], [80.6, 30.0], [80.7, 30.0], [80.8, 30.0], [80.9, 30.0], [81.0, 30.0], [81.1, 30.0], [81.2, 30.0], [81.3, 30.0], [81.4, 30.0], [81.5, 30.0], [81.6, 30.0], [81.7, 30.0], [81.8, 30.0], [81.9, 30.0], [82.0, 30.0], [82.1, 30.0], [82.2, 31.0], [82.3, 31.0], [82.4, 31.0], [82.5, 31.0], [82.6, 31.0], [82.7, 31.0], [82.8, 31.0], [82.9, 31.0], [83.0, 31.0], [83.1, 31.0], [83.2, 31.0], [83.3, 31.0], [83.4, 31.0], [83.5, 31.0], [83.6, 31.0], [83.7, 31.0], [83.8, 31.0], [83.9, 31.0], [84.0, 31.0], [84.1, 31.0], [84.2, 31.0], [84.3, 31.0], [84.4, 31.0], [84.5, 31.0], [84.6, 31.0], [84.7, 31.0], [84.8, 31.0], [84.9, 32.0], [85.0, 32.0], [85.1, 32.0], [85.2, 32.0], [85.3, 32.0], [85.4, 32.0], [85.5, 32.0], [85.6, 32.0], [85.7, 32.0], [85.8, 32.0], [85.9, 32.0], [86.0, 32.0], [86.1, 32.0], [86.2, 32.0], [86.3, 32.0], [86.4, 33.0], [86.5, 33.0], [86.6, 33.0], [86.7, 33.0], [86.8, 33.0], [86.9, 33.0], [87.0, 33.0], [87.1, 33.0], [87.2, 33.0], [87.3, 33.0], [87.4, 33.0], [87.5, 33.0], [87.6, 33.0], [87.7, 33.0], [87.8, 33.0], [87.9, 33.0], [88.0, 33.0], [88.1, 33.0], [88.2, 33.0], [88.3, 33.0], [88.4, 33.0], [88.5, 33.0], [88.6, 34.0], [88.7, 34.0], [88.8, 34.0], [88.9, 34.0], [89.0, 34.0], [89.1, 34.0], [89.2, 34.0], [89.3, 34.0], [89.4, 34.0], [89.5, 34.0], [89.6, 34.0], [89.7, 34.0], [89.8, 34.0], [89.9, 34.0], [90.0, 34.0], [90.1, 34.0], [90.2, 34.0], [90.3, 34.0], [90.4, 35.0], [90.5, 35.0], [90.6, 35.0], [90.7, 35.0], [90.8, 35.0], [90.9, 35.0], [91.0, 35.0], [91.1, 35.0], [91.2, 35.0], [91.3, 35.0], [91.4, 35.0], [91.5, 35.0], [91.6, 36.0], [91.7, 36.0], [91.8, 36.0], [91.9, 36.0], [92.0, 36.0], [92.1, 36.0], [92.2, 36.0], [92.3, 36.0], [92.4, 36.0], [92.5, 36.0], [92.6, 36.0], [92.7, 36.0], [92.8, 36.0], [92.9, 36.0], [93.0, 36.0], [93.1, 37.0], [93.2, 37.0], [93.3, 37.0], [93.4, 37.0], [93.5, 37.0], [93.6, 37.0], [93.7, 37.0], [93.8, 37.0], [93.9, 38.0], [94.0, 38.0], [94.1, 38.0], [94.2, 38.0], [94.3, 38.0], [94.4, 38.0], [94.5, 38.0], [94.6, 38.0], [94.7, 38.0], [94.8, 38.0], [94.9, 38.0], [95.0, 39.0], [95.1, 39.0], [95.2, 39.0], [95.3, 39.0], [95.4, 39.0], [95.5, 40.0], [95.6, 40.0], [95.7, 40.0], [95.8, 40.0], [95.9, 41.0], [96.0, 41.0], [96.1, 41.0], [96.2, 41.0], [96.3, 41.0], [96.4, 41.0], [96.5, 42.0], [96.6, 42.0], [96.7, 42.0], [96.8, 42.0], [96.9, 42.0], [97.0, 42.0], [97.1, 43.0], [97.2, 43.0], [97.3, 44.0], [97.4, 44.0], [97.5, 44.0], [97.6, 45.0], [97.7, 45.0], [97.8, 46.0], [97.9, 46.0], [98.0, 46.0], [98.1, 47.0], [98.2, 47.0], [98.3, 47.0], [98.4, 47.0], [98.5, 48.0], [98.6, 48.0], [98.7, 48.0], [98.8, 50.0], [98.9, 50.0], [99.0, 50.0], [99.1, 50.0], [99.2, 51.0], [99.3, 52.0], [99.4, 53.0], [99.5, 54.0], [99.6, 57.0], [99.7, 62.0], [99.8, 64.0], [99.9, 119.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 1997.0, "series": [{"data": [[0.0, 1997.0], [100.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 2000.0, "series": [{"data": [[0.0, 2000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.2857142857142856, "minX": 1.667318814E12, "maxY": 10.0, "series": [{"data": [[1.6673188179E12, 10.0], [1.6673188158E12, 10.0], [1.6673188178E12, 10.0], [1.667318818E12, 10.0], [1.6673188159E12, 10.0], [1.6673188161E12, 10.0], [1.667318814E12, 4.0], [1.6673188181E12, 10.0], [1.667318816E12, 10.0], [1.6673188142E12, 6.03030303030303], [1.6673188183E12, 10.0], [1.6673188162E12, 10.0], [1.6673188141E12, 5.045454545454546], [1.6673188182E12, 10.0], [1.6673188184E12, 10.0], [1.6673188143E12, 7.085714285714285], [1.6673188163E12, 10.0], [1.6673188165E12, 10.0], [1.6673188144E12, 8.029411764705882], [1.6673188185E12, 10.0], [1.6673188164E12, 10.0], [1.6673188166E12, 10.0], [1.6673188145E12, 9.0], [1.6673188186E12, 10.0], [1.6673188188E12, 9.928571428571429], [1.6673188147E12, 10.0], [1.6673188167E12, 10.0], [1.6673188146E12, 10.0], [1.6673188187E12, 10.0], [1.6673188148E12, 10.0], [1.6673188189E12, 7.794871794871796], [1.6673188168E12, 10.0], [1.667318817E12, 10.0], [1.6673188149E12, 10.0], [1.667318819E12, 6.758620689655172], [1.6673188169E12, 10.0], [1.6673188151E12, 10.0], [1.6673188171E12, 10.0], [1.667318815E12, 10.0], [1.6673188191E12, 5.580645161290322], [1.6673188152E12, 10.0], [1.6673188193E12, 2.0], [1.6673188172E12, 10.0], [1.6673188192E12, 3.347826086956523], [1.6673188174E12, 10.0], [1.6673188153E12, 10.0], [1.6673188194E12, 1.2857142857142856], [1.6673188173E12, 10.0], [1.6673188175E12, 10.0], [1.6673188154E12, 10.0], [1.6673188156E12, 10.0], [1.6673188176E12, 10.0], [1.6673188155E12, 10.0], [1.6673188157E12, 10.0], [1.6673188177E12, 10.0]], "isOverall": false, "label": "goodsdemoaop", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673188194E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.166666666666664, "minX": 1.0, "maxY": 69.66666666666667, "series": [{"data": [[4.0, 69.66666666666667], [8.0, 21.85365853658537], [2.0, 14.166666666666664], [1.0, 14.2], [9.0, 21.450000000000003], [5.0, 17.842105263157887], [10.0, 25.092691622103384], [6.0, 19.482758620689655], [3.0, 14.6], [7.0, 19.881578947368414]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.438999999999998, 24.34800000000007]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 18920.0, "minX": 1.667318814E12, "maxY": 299040.0, "series": [{"data": [[1.6673188179E12, 151350.0], [1.6673188158E12, 226950.0], [1.6673188178E12, 227000.0], [1.667318818E12, 198560.0], [1.6673188159E12, 175000.0], [1.6673188161E12, 193900.0], [1.667318814E12, 18920.0], [1.6673188181E12, 179720.0], [1.667318816E12, 189190.0], [1.6673188142E12, 156060.0], [1.6673188183E12, 217530.0], [1.6673188162E12, 175000.0], [1.6673188141E12, 104030.0], [1.6673188182E12, 184410.0], [1.6673188184E12, 184450.0], [1.6673188143E12, 165530.0], [1.6673188163E12, 189130.0], [1.6673188165E12, 211960.0], [1.6673188144E12, 160770.0], [1.6673188185E12, 198630.0], [1.6673188164E12, 174680.0], [1.6673188166E12, 151020.0], [1.6673188145E12, 203370.0], [1.6673188186E12, 174990.0], [1.6673188188E12, 198320.0], [1.6673188147E12, 179700.0], [1.6673188167E12, 189140.0], [1.6673188146E12, 165530.0], [1.6673188187E12, 189170.0], [1.6673188148E12, 212760.0], [1.6673188189E12, 183870.0], [1.6673188168E12, 169630.0], [1.667318817E12, 184140.0], [1.6673188149E12, 170250.0], [1.667318819E12, 136840.0], [1.6673188169E12, 179420.0], [1.6673188151E12, 170230.0], [1.6673188171E12, 193910.0], [1.667318815E12, 113510.0], [1.6673188191E12, 146300.0], [1.6673188152E12, 174950.0], [1.6673188193E12, 66190.0], [1.6673188172E12, 184390.0], [1.6673188192E12, 107900.0], [1.6673188174E12, 165510.0], [1.6673188153E12, 179690.0], [1.6673188194E12, 32530.0], [1.6673188173E12, 217260.0], [1.6673188175E12, 208050.0], [1.6673188154E12, 156010.0], [1.6673188156E12, 208110.0], [1.6673188176E12, 198630.0], [1.6673188155E12, 170200.0], [1.6673188157E12, 189150.0], [1.6673188177E12, 198650.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6673188179E12, 199360.0], [1.6673188158E12, 299040.0], [1.6673188178E12, 299040.0], [1.667318818E12, 261660.0], [1.6673188159E12, 230510.0], [1.6673188161E12, 255430.0], [1.667318814E12, 24920.0], [1.6673188181E12, 236740.0], [1.667318816E12, 249200.0], [1.6673188142E12, 205590.0], [1.6673188183E12, 286580.0], [1.6673188162E12, 230510.0], [1.6673188141E12, 137060.0], [1.6673188182E12, 242970.0], [1.6673188184E12, 242970.0], [1.6673188143E12, 218050.0], [1.6673188163E12, 249200.0], [1.6673188165E12, 280350.0], [1.6673188144E12, 211820.0], [1.6673188185E12, 261660.0], [1.6673188164E12, 230510.0], [1.6673188166E12, 199360.0], [1.6673188145E12, 267890.0], [1.6673188186E12, 230510.0], [1.6673188188E12, 261660.0], [1.6673188147E12, 236740.0], [1.6673188167E12, 249200.0], [1.6673188146E12, 218050.0], [1.6673188187E12, 249200.0], [1.6673188148E12, 280350.0], [1.6673188189E12, 242970.0], [1.6673188168E12, 224280.0], [1.667318817E12, 242970.0], [1.6673188149E12, 224280.0], [1.667318819E12, 180670.0], [1.6673188169E12, 236740.0], [1.6673188151E12, 224280.0], [1.6673188171E12, 255430.0], [1.667318815E12, 149520.0], [1.6673188191E12, 193130.0], [1.6673188152E12, 230510.0], [1.6673188193E12, 87220.0], [1.6673188172E12, 242970.0], [1.6673188192E12, 143290.0], [1.6673188174E12, 218050.0], [1.6673188153E12, 236740.0], [1.6673188194E12, 43610.0], [1.6673188173E12, 286580.0], [1.6673188175E12, 274120.0], [1.6673188154E12, 205590.0], [1.6673188156E12, 274120.0], [1.6673188176E12, 261660.0], [1.6673188155E12, 224280.0], [1.6673188157E12, 249200.0], [1.6673188177E12, 261660.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673188194E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14.142857142857142, "minX": 1.667318814E12, "maxY": 96.5, "series": [{"data": [[1.6673188179E12, 27.343749999999996], [1.6673188158E12, 20.479166666666664], [1.6673188178E12, 21.66666666666667], [1.667318818E12, 22.380952380952376], [1.6673188159E12, 25.45945945945946], [1.6673188161E12, 22.878048780487806], [1.667318814E12, 96.5], [1.6673188181E12, 27.97368421052632], [1.667318816E12, 25.02499999999999], [1.6673188142E12, 17.090909090909093], [1.6673188183E12, 21.76086956521739], [1.6673188162E12, 29.297297297297305], [1.6673188141E12, 19.409090909090903], [1.6673188182E12, 24.538461538461537], [1.6673188184E12, 26.35897435897436], [1.6673188143E12, 19.371428571428567], [1.6673188163E12, 24.125000000000007], [1.6673188165E12, 24.755555555555546], [1.6673188144E12, 21.323529411764707], [1.6673188185E12, 22.69047619047619], [1.6673188164E12, 24.324324324324323], [1.6673188166E12, 28.937499999999996], [1.6673188145E12, 21.46511627906977], [1.6673188186E12, 26.864864864864874], [1.6673188188E12, 21.809523809523807], [1.6673188147E12, 25.39473684210526], [1.6673188167E12, 24.75], [1.6673188146E12, 27.657142857142862], [1.6673188187E12, 26.350000000000005], [1.6673188148E12, 22.35555555555555], [1.6673188189E12, 22.025641025641033], [1.6673188168E12, 23.52777777777778], [1.667318817E12, 24.794871794871796], [1.6673188149E12, 25.5], [1.667318819E12, 22.551724137931032], [1.6673188169E12, 29.078947368421048], [1.6673188151E12, 27.888888888888886], [1.6673188171E12, 24.24390243902439], [1.667318815E12, 38.833333333333336], [1.6673188191E12, 17.548387096774196], [1.6673188152E12, 27.10810810810811], [1.6673188193E12, 14.142857142857142], [1.6673188172E12, 26.25641025641026], [1.6673188192E12, 14.82608695652174], [1.6673188174E12, 27.199999999999996], [1.6673188153E12, 29.052631578947363], [1.6673188194E12, 14.428571428571427], [1.6673188173E12, 22.239130434782613], [1.6673188175E12, 22.068181818181817], [1.6673188154E12, 27.51515151515152], [1.6673188156E12, 22.0], [1.6673188176E12, 22.97619047619047], [1.6673188155E12, 26.722222222222218], [1.6673188157E12, 25.6], [1.6673188177E12, 24.333333333333332]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673188194E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 14.142857142857142, "minX": 1.667318814E12, "maxY": 89.75, "series": [{"data": [[1.6673188179E12, 27.3125], [1.6673188158E12, 20.395833333333332], [1.6673188178E12, 21.58333333333334], [1.667318818E12, 21.952380952380956], [1.6673188159E12, 25.32432432432432], [1.6673188161E12, 22.731707317073173], [1.667318814E12, 89.75], [1.6673188181E12, 27.73684210526316], [1.667318816E12, 24.95], [1.6673188142E12, 16.939393939393938], [1.6673188183E12, 21.717391304347828], [1.6673188162E12, 29.243243243243246], [1.6673188141E12, 19.363636363636367], [1.6673188182E12, 24.384615384615383], [1.6673188184E12, 26.230769230769234], [1.6673188143E12, 19.28571428571429], [1.6673188163E12, 23.925000000000004], [1.6673188165E12, 24.622222222222224], [1.6673188144E12, 21.20588235294118], [1.6673188185E12, 22.47619047619047], [1.6673188164E12, 24.297297297297288], [1.6673188166E12, 28.812499999999996], [1.6673188145E12, 21.30232558139535], [1.6673188186E12, 26.810810810810814], [1.6673188188E12, 21.666666666666668], [1.6673188147E12, 24.5], [1.6673188167E12, 24.699999999999996], [1.6673188146E12, 27.25714285714286], [1.6673188187E12, 26.175000000000004], [1.6673188148E12, 22.111111111111118], [1.6673188189E12, 21.8974358974359], [1.6673188168E12, 23.305555555555557], [1.667318817E12, 24.692307692307693], [1.6673188149E12, 25.27777777777778], [1.667318819E12, 22.51724137931034], [1.6673188169E12, 29.026315789473685], [1.6673188151E12, 27.638888888888882], [1.6673188171E12, 24.048780487804876], [1.667318815E12, 38.00000000000001], [1.6673188191E12, 17.483870967741936], [1.6673188152E12, 26.918918918918923], [1.6673188193E12, 14.142857142857142], [1.6673188172E12, 26.205128205128197], [1.6673188192E12, 14.782608695652174], [1.6673188174E12, 27.171428571428574], [1.6673188153E12, 28.684210526315784], [1.6673188194E12, 14.285714285714285], [1.6673188173E12, 21.934782608695656], [1.6673188175E12, 21.954545454545446], [1.6673188154E12, 27.3030303030303], [1.6673188156E12, 21.77272727272727], [1.6673188176E12, 22.928571428571423], [1.6673188155E12, 26.611111111111107], [1.6673188157E12, 25.35], [1.6673188177E12, 24.142857142857142]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673188194E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.667318814E12, "maxY": 46.25, "series": [{"data": [[1.6673188179E12, 0.0], [1.6673188158E12, 0.0], [1.6673188178E12, 0.0], [1.667318818E12, 0.0], [1.6673188159E12, 0.0], [1.6673188161E12, 0.0], [1.667318814E12, 46.25], [1.6673188181E12, 0.0], [1.667318816E12, 0.0], [1.6673188142E12, 0.06060606060606061], [1.6673188183E12, 0.0], [1.6673188162E12, 0.0], [1.6673188141E12, 0.09090909090909093], [1.6673188182E12, 0.0], [1.6673188184E12, 0.0], [1.6673188143E12, 0.02857142857142857], [1.6673188163E12, 0.0], [1.6673188165E12, 0.04444444444444446], [1.6673188144E12, 0.029411764705882353], [1.6673188185E12, 0.0], [1.6673188164E12, 0.05405405405405405], [1.6673188166E12, 0.0625], [1.6673188145E12, 0.023255813953488372], [1.6673188186E12, 0.0], [1.6673188188E12, 0.0], [1.6673188147E12, 0.0], [1.6673188167E12, 0.0], [1.6673188146E12, 0.02857142857142857], [1.6673188187E12, 0.0], [1.6673188148E12, 0.0], [1.6673188189E12, 0.0], [1.6673188168E12, 0.08333333333333334], [1.667318817E12, 0.0], [1.6673188149E12, 0.0], [1.667318819E12, 0.0], [1.6673188169E12, 0.02631578947368421], [1.6673188151E12, 0.0], [1.6673188171E12, 0.024390243902439022], [1.667318815E12, 0.0], [1.6673188191E12, 0.0], [1.6673188152E12, 0.0], [1.6673188193E12, 0.0], [1.6673188172E12, 0.0], [1.6673188192E12, 0.0], [1.6673188174E12, 0.0], [1.6673188153E12, 0.0], [1.6673188194E12, 0.0], [1.6673188173E12, 0.043478260869565216], [1.6673188175E12, 0.0], [1.6673188154E12, 0.0], [1.6673188156E12, 0.0], [1.6673188176E12, 0.0], [1.6673188155E12, 0.0], [1.6673188157E12, 0.0], [1.6673188177E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673188194E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 11.0, "minX": 1.667318814E12, "maxY": 119.0, "series": [{"data": [[1.6673188179E12, 50.0], [1.6673188158E12, 42.0], [1.6673188178E12, 37.0], [1.667318818E12, 36.0], [1.6673188159E12, 46.0], [1.6673188161E12, 37.0], [1.667318814E12, 119.0], [1.6673188181E12, 62.0], [1.667318816E12, 34.0], [1.6673188142E12, 24.0], [1.6673188183E12, 46.0], [1.6673188162E12, 62.0], [1.6673188141E12, 28.0], [1.6673188182E12, 46.0], [1.6673188184E12, 64.0], [1.6673188143E12, 26.0], [1.6673188163E12, 41.0], [1.6673188165E12, 39.0], [1.6673188144E12, 40.0], [1.6673188185E12, 37.0], [1.6673188164E12, 36.0], [1.6673188166E12, 48.0], [1.6673188145E12, 32.0], [1.6673188186E12, 53.0], [1.6673188188E12, 37.0], [1.6673188147E12, 48.0], [1.6673188167E12, 38.0], [1.6673188146E12, 39.0], [1.6673188187E12, 39.0], [1.6673188148E12, 43.0], [1.6673188189E12, 47.0], [1.6673188168E12, 42.0], [1.667318817E12, 38.0], [1.6673188149E12, 50.0], [1.667318819E12, 41.0], [1.6673188169E12, 57.0], [1.6673188151E12, 40.0], [1.6673188171E12, 47.0], [1.667318815E12, 59.0], [1.6673188191E12, 24.0], [1.6673188152E12, 39.0], [1.6673188193E12, 17.0], [1.6673188172E12, 51.0], [1.6673188192E12, 20.0], [1.6673188174E12, 42.0], [1.6673188153E12, 51.0], [1.6673188194E12, 15.0], [1.6673188173E12, 32.0], [1.6673188175E12, 44.0], [1.6673188154E12, 50.0], [1.6673188156E12, 41.0], [1.6673188176E12, 57.0], [1.6673188155E12, 42.0], [1.6673188157E12, 40.0], [1.6673188177E12, 42.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6673188179E12, 43.099999999999994], [1.6673188158E12, 25.200000000000003], [1.6673188178E12, 28.0], [1.667318818E12, 33.10000000000001], [1.6673188159E12, 37.2], [1.6673188161E12, 30.0], [1.667318814E12, 119.0], [1.6673188181E12, 45.1], [1.667318816E12, 31.9], [1.6673188142E12, 20.200000000000003], [1.6673188183E12, 30.300000000000004], [1.6673188162E12, 47.2], [1.6673188141E12, 24.4], [1.6673188182E12, 32.0], [1.6673188184E12, 34.0], [1.6673188143E12, 24.4], [1.6673188163E12, 35.8], [1.6673188165E12, 32.4], [1.6673188144E12, 32.0], [1.6673188185E12, 29.700000000000003], [1.6673188164E12, 30.60000000000001], [1.6673188166E12, 36.099999999999994], [1.6673188145E12, 25.0], [1.6673188186E12, 39.0], [1.6673188188E12, 30.700000000000003], [1.6673188147E12, 38.2], [1.6673188167E12, 32.8], [1.6673188146E12, 35.4], [1.6673188187E12, 36.8], [1.6673188148E12, 28.0], [1.6673188189E12, 28.0], [1.6673188168E12, 33.60000000000001], [1.667318817E12, 33.0], [1.6673188149E12, 48.0], [1.667318819E12, 35.0], [1.6673188169E12, 42.1], [1.6673188151E12, 34.300000000000004], [1.6673188171E12, 34.800000000000004], [1.667318815E12, 53.5], [1.6673188191E12, 22.0], [1.6673188152E12, 36.0], [1.6673188193E12, 17.0], [1.6673188172E12, 38.0], [1.6673188192E12, 17.0], [1.6673188174E12, 36.0], [1.6673188153E12, 42.400000000000006], [1.6673188194E12, 15.0], [1.6673188173E12, 28.300000000000004], [1.6673188175E12, 29.5], [1.6673188154E12, 43.2], [1.6673188156E12, 32.0], [1.6673188176E12, 30.0], [1.6673188155E12, 37.300000000000004], [1.6673188157E12, 37.699999999999996], [1.6673188177E12, 33.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6673188179E12, 50.0], [1.6673188158E12, 42.0], [1.6673188178E12, 37.0], [1.667318818E12, 36.0], [1.6673188159E12, 46.0], [1.6673188161E12, 37.0], [1.667318814E12, 119.0], [1.6673188181E12, 62.0], [1.667318816E12, 34.0], [1.6673188142E12, 24.0], [1.6673188183E12, 46.0], [1.6673188162E12, 62.0], [1.6673188141E12, 28.0], [1.6673188182E12, 46.0], [1.6673188184E12, 64.0], [1.6673188143E12, 26.0], [1.6673188163E12, 41.0], [1.6673188165E12, 39.0], [1.6673188144E12, 40.0], [1.6673188185E12, 37.0], [1.6673188164E12, 36.0], [1.6673188166E12, 48.0], [1.6673188145E12, 32.0], [1.6673188186E12, 53.0], [1.6673188188E12, 37.0], [1.6673188147E12, 48.0], [1.6673188167E12, 38.0], [1.6673188146E12, 39.0], [1.6673188187E12, 39.0], [1.6673188148E12, 43.0], [1.6673188189E12, 47.0], [1.6673188168E12, 42.0], [1.667318817E12, 38.0], [1.6673188149E12, 50.0], [1.667318819E12, 41.0], [1.6673188169E12, 57.0], [1.6673188151E12, 40.0], [1.6673188171E12, 47.0], [1.667318815E12, 59.0], [1.6673188191E12, 24.0], [1.6673188152E12, 39.0], [1.6673188193E12, 17.0], [1.6673188172E12, 51.0], [1.6673188192E12, 20.0], [1.6673188174E12, 42.0], [1.6673188153E12, 51.0], [1.6673188194E12, 15.0], [1.6673188173E12, 32.0], [1.6673188175E12, 44.0], [1.6673188154E12, 50.0], [1.6673188156E12, 41.0], [1.6673188176E12, 57.0], [1.6673188155E12, 42.0], [1.6673188157E12, 40.0], [1.6673188177E12, 42.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6673188179E12, 46.749999999999986], [1.6673188158E12, 27.549999999999997], [1.6673188178E12, 32.749999999999986], [1.667318818E12, 36.0], [1.6673188159E12, 38.80000000000001], [1.6673188161E12, 35.699999999999996], [1.667318814E12, 119.0], [1.6673188181E12, 52.49999999999997], [1.667318816E12, 33.89999999999999], [1.6673188142E12, 21.89999999999999], [1.6673188183E12, 35.599999999999994], [1.6673188162E12, 54.80000000000001], [1.6673188141E12, 27.549999999999994], [1.6673188182E12, 42.0], [1.6673188184E12, 41.0], [1.6673188143E12, 26.0], [1.6673188163E12, 36.0], [1.6673188165E12, 37.79999999999998], [1.6673188144E12, 35.5], [1.6673188185E12, 31.0], [1.6673188164E12, 33.300000000000004], [1.6673188166E12, 40.84999999999998], [1.6673188145E12, 28.39999999999999], [1.6673188186E12, 43.100000000000016], [1.6673188188E12, 32.85], [1.6673188147E12, 43.249999999999986], [1.6673188167E12, 35.949999999999996], [1.6673188146E12, 38.199999999999996], [1.6673188187E12, 37.949999999999996], [1.6673188148E12, 33.699999999999996], [1.6673188189E12, 31.0], [1.6673188168E12, 36.89999999999999], [1.667318817E12, 34.0], [1.6673188149E12, 50.0], [1.667318819E12, 39.0], [1.6673188169E12, 48.449999999999974], [1.6673188151E12, 36.599999999999994], [1.6673188171E12, 45.49999999999999], [1.667318815E12, 57.75], [1.6673188191E12, 23.4], [1.6673188152E12, 38.1], [1.6673188193E12, 17.0], [1.6673188172E12, 44.0], [1.6673188192E12, 19.39999999999999], [1.6673188174E12, 37.199999999999974], [1.6673188153E12, 47.19999999999999], [1.6673188194E12, 15.0], [1.6673188173E12, 31.299999999999997], [1.6673188175E12, 39.25], [1.6673188154E12, 49.3], [1.6673188156E12, 33.0], [1.6673188176E12, 33.85], [1.6673188155E12, 38.599999999999994], [1.6673188157E12, 38.0], [1.6673188177E12, 37.7]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6673188179E12, 15.0], [1.6673188158E12, 14.0], [1.6673188178E12, 15.0], [1.667318818E12, 14.0], [1.6673188159E12, 12.0], [1.6673188161E12, 13.0], [1.667318814E12, 29.0], [1.6673188181E12, 16.0], [1.667318816E12, 16.0], [1.6673188142E12, 13.0], [1.6673188183E12, 14.0], [1.6673188162E12, 14.0], [1.6673188141E12, 14.0], [1.6673188182E12, 16.0], [1.6673188184E12, 15.0], [1.6673188143E12, 15.0], [1.6673188163E12, 14.0], [1.6673188165E12, 15.0], [1.6673188144E12, 14.0], [1.6673188185E12, 14.0], [1.6673188164E12, 13.0], [1.6673188166E12, 18.0], [1.6673188145E12, 14.0], [1.6673188186E12, 17.0], [1.6673188188E12, 13.0], [1.6673188147E12, 14.0], [1.6673188167E12, 15.0], [1.6673188146E12, 16.0], [1.6673188187E12, 15.0], [1.6673188148E12, 13.0], [1.6673188189E12, 15.0], [1.6673188168E12, 12.0], [1.667318817E12, 14.0], [1.6673188149E12, 17.0], [1.667318819E12, 14.0], [1.6673188169E12, 15.0], [1.6673188151E12, 20.0], [1.6673188171E12, 15.0], [1.667318815E12, 19.0], [1.6673188191E12, 14.0], [1.6673188152E12, 17.0], [1.6673188193E12, 11.0], [1.6673188172E12, 14.0], [1.6673188192E12, 13.0], [1.6673188174E12, 16.0], [1.6673188153E12, 14.0], [1.6673188194E12, 13.0], [1.6673188173E12, 16.0], [1.6673188175E12, 14.0], [1.6673188154E12, 17.0], [1.6673188156E12, 14.0], [1.6673188176E12, 15.0], [1.6673188155E12, 15.0], [1.6673188157E12, 16.0], [1.6673188177E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6673188179E12, 26.0], [1.6673188158E12, 20.0], [1.6673188178E12, 21.0], [1.667318818E12, 21.0], [1.6673188159E12, 24.0], [1.6673188161E12, 23.0], [1.667318814E12, 119.0], [1.6673188181E12, 23.0], [1.667318816E12, 26.0], [1.6673188142E12, 17.0], [1.6673188183E12, 20.0], [1.6673188162E12, 27.0], [1.6673188141E12, 19.0], [1.6673188182E12, 22.0], [1.6673188184E12, 28.0], [1.6673188143E12, 18.0], [1.6673188163E12, 23.0], [1.6673188165E12, 24.0], [1.6673188144E12, 20.0], [1.6673188185E12, 22.5], [1.6673188164E12, 24.0], [1.6673188166E12, 28.0], [1.6673188145E12, 22.0], [1.6673188186E12, 23.0], [1.6673188188E12, 21.0], [1.6673188147E12, 24.0], [1.6673188167E12, 24.0], [1.6673188146E12, 28.0], [1.6673188187E12, 24.0], [1.6673188148E12, 22.0], [1.6673188189E12, 22.0], [1.6673188168E12, 23.0], [1.667318817E12, 25.0], [1.6673188149E12, 22.0], [1.667318819E12, 20.0], [1.6673188169E12, 27.5], [1.6673188151E12, 28.0], [1.6673188171E12, 23.0], [1.667318815E12, 38.5], [1.6673188191E12, 17.0], [1.6673188152E12, 26.0], [1.6673188193E12, 14.0], [1.6673188172E12, 25.0], [1.6673188192E12, 14.0], [1.6673188174E12, 26.0], [1.6673188153E12, 26.0], [1.6673188194E12, 15.0], [1.6673188173E12, 22.0], [1.6673188175E12, 21.0], [1.6673188154E12, 25.0], [1.6673188156E12, 21.0], [1.6673188176E12, 22.0], [1.6673188155E12, 26.0], [1.6673188157E12, 24.0], [1.6673188177E12, 24.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673188194E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 16.0, "minX": 104.0, "maxY": 25.0, "series": [{"data": [[325.0, 21.0], [373.0, 24.0], [386.0, 25.0], [408.0, 23.0], [404.0, 22.0], [104.0, 16.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 408.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 16.0, "minX": 104.0, "maxY": 25.0, "series": [{"data": [[325.0, 21.0], [373.0, 24.0], [386.0, 25.0], [408.0, 23.0], [404.0, 22.0], [104.0, 16.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 408.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6673188139E12, "maxY": 480.0, "series": [{"data": [[1.6673188179E12, 330.0], [1.6673188158E12, 480.0], [1.6673188178E12, 470.0], [1.667318818E12, 420.0], [1.6673188139E12, 40.0], [1.6673188159E12, 370.0], [1.6673188161E12, 410.0], [1.667318814E12, 10.0], [1.6673188181E12, 380.0], [1.667318816E12, 400.0], [1.6673188142E12, 360.0], [1.6673188183E12, 460.0], [1.6673188162E12, 360.0], [1.6673188141E12, 250.0], [1.6673188182E12, 390.0], [1.6673188184E12, 390.0], [1.6673188143E12, 340.0], [1.6673188163E12, 410.0], [1.6673188165E12, 450.0], [1.6673188144E12, 370.0], [1.6673188185E12, 420.0], [1.6673188164E12, 370.0], [1.6673188166E12, 320.0], [1.6673188145E12, 440.0], [1.6673188186E12, 370.0], [1.6673188188E12, 400.0], [1.6673188147E12, 380.0], [1.6673188167E12, 400.0], [1.6673188146E12, 350.0], [1.6673188187E12, 400.0], [1.6673188148E12, 440.0], [1.6673188189E12, 380.0], [1.6673188168E12, 360.0], [1.667318817E12, 390.0], [1.6673188149E12, 370.0], [1.667318819E12, 280.0], [1.6673188169E12, 380.0], [1.6673188151E12, 360.0], [1.6673188171E12, 410.0], [1.667318815E12, 240.0], [1.6673188191E12, 300.0], [1.6673188152E12, 370.0], [1.6673188193E12, 140.0], [1.6673188172E12, 390.0], [1.6673188192E12, 200.0], [1.6673188174E12, 350.0], [1.6673188153E12, 350.0], [1.6673188194E12, 50.0], [1.6673188173E12, 460.0], [1.6673188175E12, 430.0], [1.6673188154E12, 360.0], [1.6673188156E12, 440.0], [1.6673188176E12, 430.0], [1.6673188155E12, 360.0], [1.6673188157E12, 400.0], [1.6673188177E12, 420.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673188194E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.667318814E12, "maxY": 480.0, "series": [{"data": [[1.6673188179E12, 320.0], [1.6673188158E12, 480.0], [1.6673188178E12, 480.0], [1.667318818E12, 420.0], [1.6673188159E12, 370.0], [1.6673188161E12, 410.0], [1.667318814E12, 40.0], [1.6673188181E12, 380.0], [1.667318816E12, 400.0], [1.6673188142E12, 330.0], [1.6673188183E12, 460.0], [1.6673188162E12, 370.0], [1.6673188141E12, 220.0], [1.6673188182E12, 390.0], [1.6673188184E12, 390.0], [1.6673188143E12, 350.0], [1.6673188163E12, 400.0], [1.6673188165E12, 450.0], [1.6673188144E12, 340.0], [1.6673188185E12, 420.0], [1.6673188164E12, 370.0], [1.6673188166E12, 320.0], [1.6673188145E12, 430.0], [1.6673188186E12, 370.0], [1.6673188188E12, 420.0], [1.6673188147E12, 380.0], [1.6673188167E12, 400.0], [1.6673188146E12, 350.0], [1.6673188187E12, 400.0], [1.6673188148E12, 450.0], [1.6673188189E12, 390.0], [1.6673188168E12, 360.0], [1.667318817E12, 390.0], [1.6673188149E12, 360.0], [1.667318819E12, 290.0], [1.6673188169E12, 380.0], [1.6673188151E12, 360.0], [1.6673188171E12, 410.0], [1.667318815E12, 240.0], [1.6673188191E12, 310.0], [1.6673188152E12, 370.0], [1.6673188193E12, 140.0], [1.6673188172E12, 390.0], [1.6673188192E12, 230.0], [1.6673188174E12, 350.0], [1.6673188153E12, 380.0], [1.6673188194E12, 70.0], [1.6673188173E12, 460.0], [1.6673188175E12, 440.0], [1.6673188154E12, 330.0], [1.6673188156E12, 440.0], [1.6673188176E12, 420.0], [1.6673188155E12, 360.0], [1.6673188157E12, 400.0], [1.6673188177E12, 420.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673188194E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.667318814E12, "maxY": 480.0, "series": [{"data": [[1.6673188179E12, 320.0], [1.6673188158E12, 480.0], [1.6673188178E12, 480.0], [1.667318818E12, 420.0], [1.6673188159E12, 370.0], [1.6673188161E12, 410.0], [1.667318814E12, 40.0], [1.6673188181E12, 380.0], [1.667318816E12, 400.0], [1.6673188142E12, 330.0], [1.6673188183E12, 460.0], [1.6673188162E12, 370.0], [1.6673188141E12, 220.0], [1.6673188182E12, 390.0], [1.6673188184E12, 390.0], [1.6673188143E12, 350.0], [1.6673188163E12, 400.0], [1.6673188165E12, 450.0], [1.6673188144E12, 340.0], [1.6673188185E12, 420.0], [1.6673188164E12, 370.0], [1.6673188166E12, 320.0], [1.6673188145E12, 430.0], [1.6673188186E12, 370.0], [1.6673188188E12, 420.0], [1.6673188147E12, 380.0], [1.6673188167E12, 400.0], [1.6673188146E12, 350.0], [1.6673188187E12, 400.0], [1.6673188148E12, 450.0], [1.6673188189E12, 390.0], [1.6673188168E12, 360.0], [1.667318817E12, 390.0], [1.6673188149E12, 360.0], [1.667318819E12, 290.0], [1.6673188169E12, 380.0], [1.6673188151E12, 360.0], [1.6673188171E12, 410.0], [1.667318815E12, 240.0], [1.6673188191E12, 310.0], [1.6673188152E12, 370.0], [1.6673188193E12, 140.0], [1.6673188172E12, 390.0], [1.6673188192E12, 230.0], [1.6673188174E12, 350.0], [1.6673188153E12, 380.0], [1.6673188194E12, 70.0], [1.6673188173E12, 460.0], [1.6673188175E12, 440.0], [1.6673188154E12, 330.0], [1.6673188156E12, 440.0], [1.6673188176E12, 420.0], [1.6673188155E12, 360.0], [1.6673188157E12, 400.0], [1.6673188177E12, 420.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673188194E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 40.0, "minX": 1.667318814E12, "maxY": 480.0, "series": [{"data": [[1.6673188179E12, 320.0], [1.6673188158E12, 480.0], [1.6673188178E12, 480.0], [1.667318818E12, 420.0], [1.6673188159E12, 370.0], [1.6673188161E12, 410.0], [1.667318814E12, 40.0], [1.6673188181E12, 380.0], [1.667318816E12, 400.0], [1.6673188142E12, 330.0], [1.6673188183E12, 460.0], [1.6673188162E12, 370.0], [1.6673188141E12, 220.0], [1.6673188182E12, 390.0], [1.6673188184E12, 390.0], [1.6673188143E12, 350.0], [1.6673188163E12, 400.0], [1.6673188165E12, 450.0], [1.6673188144E12, 340.0], [1.6673188185E12, 420.0], [1.6673188164E12, 370.0], [1.6673188166E12, 320.0], [1.6673188145E12, 430.0], [1.6673188186E12, 370.0], [1.6673188188E12, 420.0], [1.6673188147E12, 380.0], [1.6673188167E12, 400.0], [1.6673188146E12, 350.0], [1.6673188187E12, 400.0], [1.6673188148E12, 450.0], [1.6673188189E12, 390.0], [1.6673188168E12, 360.0], [1.667318817E12, 390.0], [1.6673188149E12, 360.0], [1.667318819E12, 290.0], [1.6673188169E12, 380.0], [1.6673188151E12, 360.0], [1.6673188171E12, 410.0], [1.667318815E12, 240.0], [1.6673188191E12, 310.0], [1.6673188152E12, 370.0], [1.6673188193E12, 140.0], [1.6673188172E12, 390.0], [1.6673188192E12, 230.0], [1.6673188174E12, 350.0], [1.6673188153E12, 380.0], [1.6673188194E12, 70.0], [1.6673188173E12, 460.0], [1.6673188175E12, 440.0], [1.6673188154E12, 330.0], [1.6673188156E12, 440.0], [1.6673188176E12, 420.0], [1.6673188155E12, 360.0], [1.6673188157E12, 400.0], [1.6673188177E12, 420.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673188194E12, "title": "Total Transactions Per Second"}},
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

