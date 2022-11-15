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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 259.0, "series": [{"data": [[0.0, 13.0], [0.1, 13.0], [0.2, 13.0], [0.3, 13.0], [0.4, 13.0], [0.5, 13.0], [0.6, 13.0], [0.7, 14.0], [0.8, 14.0], [0.9, 14.0], [1.0, 14.0], [1.1, 14.0], [1.2, 14.0], [1.3, 14.0], [1.4, 14.0], [1.5, 14.0], [1.6, 14.0], [1.7, 14.0], [1.8, 14.0], [1.9, 14.0], [2.0, 15.0], [2.1, 15.0], [2.2, 15.0], [2.3, 15.0], [2.4, 15.0], [2.5, 15.0], [2.6, 15.0], [2.7, 15.0], [2.8, 15.0], [2.9, 15.0], [3.0, 15.0], [3.1, 15.0], [3.2, 15.0], [3.3, 15.0], [3.4, 15.0], [3.5, 15.0], [3.6, 15.0], [3.7, 15.0], [3.8, 15.0], [3.9, 15.0], [4.0, 16.0], [4.1, 16.0], [4.2, 16.0], [4.3, 16.0], [4.4, 16.0], [4.5, 16.0], [4.6, 16.0], [4.7, 16.0], [4.8, 16.0], [4.9, 16.0], [5.0, 16.0], [5.1, 16.0], [5.2, 16.0], [5.3, 16.0], [5.4, 16.0], [5.5, 16.0], [5.6, 16.0], [5.7, 16.0], [5.8, 16.0], [5.9, 16.0], [6.0, 16.0], [6.1, 16.0], [6.2, 16.0], [6.3, 16.0], [6.4, 16.0], [6.5, 16.0], [6.6, 16.0], [6.7, 16.0], [6.8, 16.0], [6.9, 16.0], [7.0, 16.0], [7.1, 16.0], [7.2, 16.0], [7.3, 16.0], [7.4, 16.0], [7.5, 16.0], [7.6, 16.0], [7.7, 16.0], [7.8, 16.0], [7.9, 16.0], [8.0, 16.0], [8.1, 16.0], [8.2, 16.0], [8.3, 16.0], [8.4, 16.0], [8.5, 16.0], [8.6, 16.0], [8.7, 16.0], [8.8, 16.0], [8.9, 16.0], [9.0, 16.0], [9.1, 16.0], [9.2, 16.0], [9.3, 16.0], [9.4, 16.0], [9.5, 16.0], [9.6, 16.0], [9.7, 16.0], [9.8, 16.0], [9.9, 16.0], [10.0, 16.0], [10.1, 16.0], [10.2, 16.0], [10.3, 16.0], [10.4, 16.0], [10.5, 16.0], [10.6, 16.0], [10.7, 16.0], [10.8, 16.0], [10.9, 16.0], [11.0, 16.0], [11.1, 16.0], [11.2, 16.0], [11.3, 16.0], [11.4, 16.0], [11.5, 16.0], [11.6, 16.0], [11.7, 16.0], [11.8, 16.0], [11.9, 16.0], [12.0, 16.0], [12.1, 16.0], [12.2, 16.0], [12.3, 16.0], [12.4, 16.0], [12.5, 16.0], [12.6, 16.0], [12.7, 16.0], [12.8, 16.0], [12.9, 16.0], [13.0, 16.0], [13.1, 16.0], [13.2, 16.0], [13.3, 16.0], [13.4, 16.0], [13.5, 16.0], [13.6, 16.0], [13.7, 16.0], [13.8, 16.0], [13.9, 16.0], [14.0, 16.0], [14.1, 16.0], [14.2, 16.0], [14.3, 16.0], [14.4, 16.0], [14.5, 16.0], [14.6, 16.0], [14.7, 17.0], [14.8, 17.0], [14.9, 17.0], [15.0, 17.0], [15.1, 17.0], [15.2, 17.0], [15.3, 17.0], [15.4, 17.0], [15.5, 17.0], [15.6, 17.0], [15.7, 17.0], [15.8, 17.0], [15.9, 17.0], [16.0, 17.0], [16.1, 17.0], [16.2, 17.0], [16.3, 17.0], [16.4, 17.0], [16.5, 17.0], [16.6, 17.0], [16.7, 17.0], [16.8, 17.0], [16.9, 17.0], [17.0, 17.0], [17.1, 17.0], [17.2, 17.0], [17.3, 17.0], [17.4, 17.0], [17.5, 17.0], [17.6, 17.0], [17.7, 17.0], [17.8, 17.0], [17.9, 17.0], [18.0, 17.0], [18.1, 17.0], [18.2, 17.0], [18.3, 17.0], [18.4, 17.0], [18.5, 17.0], [18.6, 17.0], [18.7, 17.0], [18.8, 17.0], [18.9, 17.0], [19.0, 17.0], [19.1, 17.0], [19.2, 17.0], [19.3, 17.0], [19.4, 17.0], [19.5, 17.0], [19.6, 17.0], [19.7, 17.0], [19.8, 17.0], [19.9, 17.0], [20.0, 18.0], [20.1, 18.0], [20.2, 18.0], [20.3, 18.0], [20.4, 18.0], [20.5, 18.0], [20.6, 18.0], [20.7, 18.0], [20.8, 18.0], [20.9, 18.0], [21.0, 18.0], [21.1, 18.0], [21.2, 18.0], [21.3, 18.0], [21.4, 18.0], [21.5, 18.0], [21.6, 18.0], [21.7, 18.0], [21.8, 18.0], [21.9, 18.0], [22.0, 18.0], [22.1, 18.0], [22.2, 18.0], [22.3, 18.0], [22.4, 18.0], [22.5, 18.0], [22.6, 18.0], [22.7, 18.0], [22.8, 18.0], [22.9, 18.0], [23.0, 18.0], [23.1, 18.0], [23.2, 18.0], [23.3, 18.0], [23.4, 18.0], [23.5, 18.0], [23.6, 18.0], [23.7, 18.0], [23.8, 18.0], [23.9, 18.0], [24.0, 18.0], [24.1, 18.0], [24.2, 18.0], [24.3, 18.0], [24.4, 18.0], [24.5, 18.0], [24.6, 18.0], [24.7, 18.0], [24.8, 18.0], [24.9, 18.0], [25.0, 18.0], [25.1, 18.0], [25.2, 18.0], [25.3, 18.0], [25.4, 19.0], [25.5, 19.0], [25.6, 19.0], [25.7, 19.0], [25.8, 19.0], [25.9, 19.0], [26.0, 19.0], [26.1, 19.0], [26.2, 19.0], [26.3, 19.0], [26.4, 19.0], [26.5, 19.0], [26.6, 19.0], [26.7, 19.0], [26.8, 19.0], [26.9, 19.0], [27.0, 19.0], [27.1, 19.0], [27.2, 19.0], [27.3, 19.0], [27.4, 19.0], [27.5, 19.0], [27.6, 19.0], [27.7, 19.0], [27.8, 19.0], [27.9, 19.0], [28.0, 19.0], [28.1, 19.0], [28.2, 19.0], [28.3, 19.0], [28.4, 19.0], [28.5, 19.0], [28.6, 19.0], [28.7, 19.0], [28.8, 19.0], [28.9, 19.0], [29.0, 19.0], [29.1, 19.0], [29.2, 19.0], [29.3, 19.0], [29.4, 19.0], [29.5, 19.0], [29.6, 19.0], [29.7, 19.0], [29.8, 19.0], [29.9, 19.0], [30.0, 19.0], [30.1, 19.0], [30.2, 19.0], [30.3, 19.0], [30.4, 19.0], [30.5, 19.0], [30.6, 19.0], [30.7, 19.0], [30.8, 19.0], [30.9, 19.0], [31.0, 19.0], [31.1, 19.0], [31.2, 19.0], [31.3, 19.0], [31.4, 20.0], [31.5, 20.0], [31.6, 20.0], [31.7, 20.0], [31.8, 20.0], [31.9, 20.0], [32.0, 20.0], [32.1, 20.0], [32.2, 20.0], [32.3, 20.0], [32.4, 20.0], [32.5, 20.0], [32.6, 20.0], [32.7, 20.0], [32.8, 20.0], [32.9, 20.0], [33.0, 20.0], [33.1, 20.0], [33.2, 20.0], [33.3, 20.0], [33.4, 21.0], [33.5, 21.0], [33.6, 21.0], [33.7, 21.0], [33.8, 21.0], [33.9, 21.0], [34.0, 21.0], [34.1, 21.0], [34.2, 21.0], [34.3, 21.0], [34.4, 21.0], [34.5, 21.0], [34.6, 21.0], [34.7, 22.0], [34.8, 22.0], [34.9, 22.0], [35.0, 22.0], [35.1, 22.0], [35.2, 22.0], [35.3, 22.0], [35.4, 22.0], [35.5, 22.0], [35.6, 22.0], [35.7, 22.0], [35.8, 22.0], [35.9, 22.0], [36.0, 22.0], [36.1, 22.0], [36.2, 22.0], [36.3, 22.0], [36.4, 22.0], [36.5, 22.0], [36.6, 22.0], [36.7, 23.0], [36.8, 23.0], [36.9, 23.0], [37.0, 23.0], [37.1, 23.0], [37.2, 23.0], [37.3, 23.0], [37.4, 23.0], [37.5, 23.0], [37.6, 23.0], [37.7, 23.0], [37.8, 23.0], [37.9, 23.0], [38.0, 27.0], [38.1, 27.0], [38.2, 27.0], [38.3, 27.0], [38.4, 27.0], [38.5, 27.0], [38.6, 27.0], [38.7, 28.0], [38.8, 28.0], [38.9, 28.0], [39.0, 28.0], [39.1, 28.0], [39.2, 28.0], [39.3, 28.0], [39.4, 28.0], [39.5, 28.0], [39.6, 28.0], [39.7, 28.0], [39.8, 28.0], [39.9, 28.0], [40.0, 29.0], [40.1, 29.0], [40.2, 29.0], [40.3, 29.0], [40.4, 29.0], [40.5, 29.0], [40.6, 29.0], [40.7, 30.0], [40.8, 30.0], [40.9, 30.0], [41.0, 30.0], [41.1, 30.0], [41.2, 30.0], [41.3, 30.0], [41.4, 41.0], [41.5, 41.0], [41.6, 41.0], [41.7, 41.0], [41.8, 41.0], [41.9, 41.0], [42.0, 48.0], [42.1, 48.0], [42.2, 48.0], [42.3, 48.0], [42.4, 48.0], [42.5, 48.0], [42.6, 48.0], [42.7, 49.0], [42.8, 49.0], [42.9, 49.0], [43.0, 49.0], [43.1, 49.0], [43.2, 49.0], [43.3, 49.0], [43.4, 55.0], [43.5, 55.0], [43.6, 55.0], [43.7, 55.0], [43.8, 55.0], [43.9, 55.0], [44.0, 61.0], [44.1, 61.0], [44.2, 61.0], [44.3, 61.0], [44.4, 61.0], [44.5, 61.0], [44.6, 61.0], [44.7, 65.0], [44.8, 65.0], [44.9, 65.0], [45.0, 65.0], [45.1, 65.0], [45.2, 65.0], [45.3, 65.0], [45.4, 65.0], [45.5, 65.0], [45.6, 65.0], [45.7, 65.0], [45.8, 65.0], [45.9, 65.0], [46.0, 69.0], [46.1, 69.0], [46.2, 69.0], [46.3, 69.0], [46.4, 69.0], [46.5, 69.0], [46.6, 69.0], [46.7, 77.0], [46.8, 77.0], [46.9, 77.0], [47.0, 77.0], [47.1, 77.0], [47.2, 77.0], [47.3, 77.0], [47.4, 81.0], [47.5, 81.0], [47.6, 81.0], [47.7, 81.0], [47.8, 81.0], [47.9, 81.0], [48.0, 82.0], [48.1, 82.0], [48.2, 82.0], [48.3, 82.0], [48.4, 82.0], [48.5, 82.0], [48.6, 82.0], [48.7, 84.0], [48.8, 84.0], [48.9, 84.0], [49.0, 84.0], [49.1, 84.0], [49.2, 84.0], [49.3, 84.0], [49.4, 86.0], [49.5, 86.0], [49.6, 86.0], [49.7, 86.0], [49.8, 86.0], [49.9, 86.0], [50.0, 89.0], [50.1, 89.0], [50.2, 89.0], [50.3, 89.0], [50.4, 89.0], [50.5, 89.0], [50.6, 89.0], [50.7, 90.0], [50.8, 90.0], [50.9, 90.0], [51.0, 90.0], [51.1, 90.0], [51.2, 90.0], [51.3, 90.0], [51.4, 122.0], [51.5, 122.0], [51.6, 122.0], [51.7, 122.0], [51.8, 122.0], [51.9, 122.0], [52.0, 122.0], [52.1, 122.0], [52.2, 122.0], [52.3, 122.0], [52.4, 122.0], [52.5, 122.0], [52.6, 122.0], [52.7, 126.0], [52.8, 126.0], [52.9, 126.0], [53.0, 126.0], [53.1, 126.0], [53.2, 126.0], [53.3, 126.0], [53.4, 127.0], [53.5, 127.0], [53.6, 127.0], [53.7, 127.0], [53.8, 127.0], [53.9, 127.0], [54.0, 128.0], [54.1, 128.0], [54.2, 128.0], [54.3, 128.0], [54.4, 128.0], [54.5, 128.0], [54.6, 128.0], [54.7, 129.0], [54.8, 129.0], [54.9, 129.0], [55.0, 129.0], [55.1, 129.0], [55.2, 129.0], [55.3, 129.0], [55.4, 130.0], [55.5, 130.0], [55.6, 130.0], [55.7, 130.0], [55.8, 130.0], [55.9, 130.0], [56.0, 130.0], [56.1, 130.0], [56.2, 130.0], [56.3, 130.0], [56.4, 130.0], [56.5, 130.0], [56.6, 130.0], [56.7, 130.0], [56.8, 130.0], [56.9, 130.0], [57.0, 130.0], [57.1, 130.0], [57.2, 130.0], [57.3, 130.0], [57.4, 131.0], [57.5, 131.0], [57.6, 131.0], [57.7, 131.0], [57.8, 131.0], [57.9, 131.0], [58.0, 136.0], [58.1, 136.0], [58.2, 136.0], [58.3, 136.0], [58.4, 136.0], [58.5, 136.0], [58.6, 136.0], [58.7, 139.0], [58.8, 139.0], [58.9, 139.0], [59.0, 139.0], [59.1, 139.0], [59.2, 139.0], [59.3, 139.0], [59.4, 140.0], [59.5, 140.0], [59.6, 140.0], [59.7, 140.0], [59.8, 140.0], [59.9, 140.0], [60.0, 140.0], [60.1, 140.0], [60.2, 140.0], [60.3, 140.0], [60.4, 140.0], [60.5, 140.0], [60.6, 140.0], [60.7, 141.0], [60.8, 141.0], [60.9, 141.0], [61.0, 141.0], [61.1, 141.0], [61.2, 141.0], [61.3, 141.0], [61.4, 142.0], [61.5, 142.0], [61.6, 142.0], [61.7, 142.0], [61.8, 142.0], [61.9, 142.0], [62.0, 143.0], [62.1, 143.0], [62.2, 143.0], [62.3, 143.0], [62.4, 143.0], [62.5, 143.0], [62.6, 143.0], [62.7, 145.0], [62.8, 145.0], [62.9, 145.0], [63.0, 145.0], [63.1, 145.0], [63.2, 145.0], [63.3, 145.0], [63.4, 146.0], [63.5, 146.0], [63.6, 146.0], [63.7, 146.0], [63.8, 146.0], [63.9, 146.0], [64.0, 151.0], [64.1, 151.0], [64.2, 151.0], [64.3, 151.0], [64.4, 151.0], [64.5, 151.0], [64.6, 151.0], [64.7, 152.0], [64.8, 152.0], [64.9, 152.0], [65.0, 152.0], [65.1, 152.0], [65.2, 152.0], [65.3, 152.0], [65.4, 160.0], [65.5, 160.0], [65.6, 160.0], [65.7, 160.0], [65.8, 160.0], [65.9, 160.0], [66.0, 166.0], [66.1, 166.0], [66.2, 166.0], [66.3, 166.0], [66.4, 166.0], [66.5, 166.0], [66.6, 166.0], [66.7, 166.0], [66.8, 166.0], [66.9, 166.0], [67.0, 166.0], [67.1, 166.0], [67.2, 166.0], [67.3, 166.0], [67.4, 167.0], [67.5, 167.0], [67.6, 167.0], [67.7, 167.0], [67.8, 167.0], [67.9, 167.0], [68.0, 168.0], [68.1, 168.0], [68.2, 168.0], [68.3, 168.0], [68.4, 168.0], [68.5, 168.0], [68.6, 168.0], [68.7, 168.0], [68.8, 168.0], [68.9, 168.0], [69.0, 168.0], [69.1, 168.0], [69.2, 168.0], [69.3, 168.0], [69.4, 169.0], [69.5, 169.0], [69.6, 169.0], [69.7, 169.0], [69.8, 169.0], [69.9, 169.0], [70.0, 170.0], [70.1, 170.0], [70.2, 170.0], [70.3, 170.0], [70.4, 170.0], [70.5, 170.0], [70.6, 170.0], [70.7, 171.0], [70.8, 171.0], [70.9, 171.0], [71.0, 171.0], [71.1, 171.0], [71.2, 171.0], [71.3, 171.0], [71.4, 171.0], [71.5, 171.0], [71.6, 171.0], [71.7, 171.0], [71.8, 171.0], [71.9, 171.0], [72.0, 174.0], [72.1, 174.0], [72.2, 174.0], [72.3, 174.0], [72.4, 174.0], [72.5, 174.0], [72.6, 174.0], [72.7, 175.0], [72.8, 175.0], [72.9, 175.0], [73.0, 175.0], [73.1, 175.0], [73.2, 175.0], [73.3, 175.0], [73.4, 177.0], [73.5, 177.0], [73.6, 177.0], [73.7, 177.0], [73.8, 177.0], [73.9, 177.0], [74.0, 180.0], [74.1, 180.0], [74.2, 180.0], [74.3, 180.0], [74.4, 180.0], [74.5, 180.0], [74.6, 180.0], [74.7, 181.0], [74.8, 181.0], [74.9, 181.0], [75.0, 181.0], [75.1, 181.0], [75.2, 181.0], [75.3, 181.0], [75.4, 182.0], [75.5, 182.0], [75.6, 182.0], [75.7, 182.0], [75.8, 182.0], [75.9, 182.0], [76.0, 184.0], [76.1, 184.0], [76.2, 184.0], [76.3, 184.0], [76.4, 184.0], [76.5, 184.0], [76.6, 184.0], [76.7, 191.0], [76.8, 191.0], [76.9, 191.0], [77.0, 191.0], [77.1, 191.0], [77.2, 191.0], [77.3, 191.0], [77.4, 191.0], [77.5, 191.0], [77.6, 191.0], [77.7, 191.0], [77.8, 191.0], [77.9, 191.0], [78.0, 191.0], [78.1, 191.0], [78.2, 191.0], [78.3, 191.0], [78.4, 191.0], [78.5, 191.0], [78.6, 191.0], [78.7, 192.0], [78.8, 192.0], [78.9, 192.0], [79.0, 192.0], [79.1, 192.0], [79.2, 192.0], [79.3, 192.0], [79.4, 194.0], [79.5, 194.0], [79.6, 194.0], [79.7, 194.0], [79.8, 194.0], [79.9, 194.0], [80.0, 195.0], [80.1, 195.0], [80.2, 195.0], [80.3, 195.0], [80.4, 195.0], [80.5, 195.0], [80.6, 195.0], [80.7, 196.0], [80.8, 196.0], [80.9, 196.0], [81.0, 196.0], [81.1, 196.0], [81.2, 196.0], [81.3, 196.0], [81.4, 199.0], [81.5, 199.0], [81.6, 199.0], [81.7, 199.0], [81.8, 199.0], [81.9, 199.0], [82.0, 199.0], [82.1, 202.0], [82.2, 202.0], [82.3, 202.0], [82.4, 202.0], [82.5, 202.0], [82.6, 202.0], [82.7, 208.0], [82.8, 208.0], [82.9, 208.0], [83.0, 208.0], [83.1, 208.0], [83.2, 208.0], [83.3, 208.0], [83.4, 209.0], [83.5, 209.0], [83.6, 209.0], [83.7, 209.0], [83.8, 209.0], [83.9, 209.0], [84.0, 209.0], [84.1, 213.0], [84.2, 213.0], [84.3, 213.0], [84.4, 213.0], [84.5, 213.0], [84.6, 213.0], [84.7, 216.0], [84.8, 216.0], [84.9, 216.0], [85.0, 216.0], [85.1, 216.0], [85.2, 216.0], [85.3, 216.0], [85.4, 218.0], [85.5, 218.0], [85.6, 218.0], [85.7, 218.0], [85.8, 218.0], [85.9, 218.0], [86.0, 218.0], [86.1, 220.0], [86.2, 220.0], [86.3, 220.0], [86.4, 220.0], [86.5, 220.0], [86.6, 220.0], [86.7, 221.0], [86.8, 221.0], [86.9, 221.0], [87.0, 221.0], [87.1, 221.0], [87.2, 221.0], [87.3, 221.0], [87.4, 224.0], [87.5, 224.0], [87.6, 224.0], [87.7, 224.0], [87.8, 224.0], [87.9, 224.0], [88.0, 224.0], [88.1, 224.0], [88.2, 224.0], [88.3, 224.0], [88.4, 224.0], [88.5, 224.0], [88.6, 224.0], [88.7, 226.0], [88.8, 226.0], [88.9, 226.0], [89.0, 226.0], [89.1, 226.0], [89.2, 226.0], [89.3, 226.0], [89.4, 227.0], [89.5, 227.0], [89.6, 227.0], [89.7, 227.0], [89.8, 227.0], [89.9, 227.0], [90.0, 227.0], [90.1, 227.0], [90.2, 227.0], [90.3, 227.0], [90.4, 227.0], [90.5, 227.0], [90.6, 227.0], [90.7, 229.0], [90.8, 229.0], [90.9, 229.0], [91.0, 229.0], [91.1, 229.0], [91.2, 229.0], [91.3, 229.0], [91.4, 229.0], [91.5, 229.0], [91.6, 229.0], [91.7, 229.0], [91.8, 229.0], [91.9, 229.0], [92.0, 229.0], [92.1, 231.0], [92.2, 231.0], [92.3, 231.0], [92.4, 231.0], [92.5, 231.0], [92.6, 231.0], [92.7, 236.0], [92.8, 236.0], [92.9, 236.0], [93.0, 236.0], [93.1, 236.0], [93.2, 236.0], [93.3, 236.0], [93.4, 237.0], [93.5, 237.0], [93.6, 237.0], [93.7, 237.0], [93.8, 237.0], [93.9, 237.0], [94.0, 237.0], [94.1, 240.0], [94.2, 240.0], [94.3, 240.0], [94.4, 240.0], [94.5, 240.0], [94.6, 240.0], [94.7, 242.0], [94.8, 242.0], [94.9, 242.0], [95.0, 242.0], [95.1, 242.0], [95.2, 242.0], [95.3, 242.0], [95.4, 242.0], [95.5, 242.0], [95.6, 242.0], [95.7, 242.0], [95.8, 242.0], [95.9, 242.0], [96.0, 242.0], [96.1, 244.0], [96.2, 244.0], [96.3, 244.0], [96.4, 244.0], [96.5, 244.0], [96.6, 244.0], [96.7, 251.0], [96.8, 251.0], [96.9, 251.0], [97.0, 251.0], [97.1, 251.0], [97.2, 251.0], [97.3, 251.0], [97.4, 251.0], [97.5, 251.0], [97.6, 251.0], [97.7, 251.0], [97.8, 251.0], [97.9, 251.0], [98.0, 251.0], [98.1, 253.0], [98.2, 253.0], [98.3, 253.0], [98.4, 253.0], [98.5, 253.0], [98.6, 253.0], [98.7, 257.0], [98.8, 257.0], [98.9, 257.0], [99.0, 257.0], [99.1, 257.0], [99.2, 257.0], [99.3, 257.0], [99.4, 259.0], [99.5, 259.0], [99.6, 259.0], [99.7, 259.0], [99.8, 259.0], [99.9, 259.0], [100.0, 259.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 77.0, "series": [{"data": [[0.0, 77.0], [100.0, 46.0], [200.0, 27.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 150.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 150.0, "series": [{"data": [[0.0, 150.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 2.375, "minX": 1.6677196636E12, "maxY": 77.77611940298505, "series": [{"data": [[1.6677196637E12, 77.77611940298505], [1.6677196642E12, 2.875], [1.6677196639E12, 3.0], [1.6677196636E12, 75.0], [1.6677196641E12, 3.9375000000000004], [1.667719664E12, 2.375], [1.6677196638E12, 18.119999999999994]], "isOverall": false, "label": "goodsdemoaop", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677196642E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.760000000000005, "minX": 1.0, "maxY": 253.0, "series": [{"data": [[2.0, 18.166666666666668], [41.0, 226.0], [43.0, 86.0], [3.0, 16.760000000000005], [51.0, 55.0], [55.0, 253.0], [61.0, 96.66666666666667], [63.0, 158.2], [66.0, 81.0], [65.0, 231.0], [64.0, 76.5], [4.0, 18.944444444444443], [68.0, 221.0], [75.0, 144.6153846153846], [74.0, 237.0], [73.0, 153.0], [79.0, 231.5], [78.0, 151.0], [76.0, 142.0], [81.0, 169.16], [83.0, 202.0], [5.0, 19.833333333333336], [86.0, 189.25], [87.0, 194.75], [88.0, 194.88888888888889], [6.0, 26.5], [8.0, 171.0], [9.0, 38.5], [12.0, 53.0], [1.0, 19.0], [31.0, 48.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[44.25999999999999, 105.03333333333332]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 88.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 37740.0, "minX": 1.6677196636E12, "maxY": 417410.0, "series": [{"data": [[1.6677196637E12, 316180.0], [1.6677196642E12, 37740.0], [1.6677196639E12, 70790.0], [1.6677196636E12, 51890.0], [1.6677196641E12, 75490.0], [1.667719664E12, 37750.0], [1.6677196638E12, 117980.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6677196637E12, 417410.0], [1.6677196642E12, 49840.0], [1.6677196639E12, 93450.0], [1.6677196636E12, 68530.0], [1.6677196641E12, 99680.0], [1.667719664E12, 49840.0], [1.6677196638E12, 155750.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677196642E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 16.133333333333333, "minX": 1.6677196636E12, "maxY": 180.7462686567164, "series": [{"data": [[1.6677196637E12, 180.7462686567164], [1.6677196642E12, 17.125], [1.6677196639E12, 16.133333333333333], [1.6677196636E12, 135.27272727272725], [1.6677196641E12, 18.4375], [1.667719664E12, 21.125], [1.6677196638E12, 52.56000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677196642E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 15.999999999999998, "minX": 1.6677196636E12, "maxY": 180.17910447761201, "series": [{"data": [[1.6677196637E12, 180.17910447761201], [1.6677196642E12, 17.125], [1.6677196639E12, 15.999999999999998], [1.6677196636E12, 125.9090909090909], [1.6677196641E12, 18.3125], [1.667719664E12, 21.0], [1.6677196638E12, 52.32]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677196642E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.6677196636E12, "maxY": 45.90909090909091, "series": [{"data": [[1.6677196637E12, 35.850746268656714], [1.6677196642E12, 1.0], [1.6677196639E12, 1.1333333333333335], [1.6677196636E12, 45.90909090909091], [1.6677196641E12, 1.3750000000000002], [1.667719664E12, 1.625], [1.6677196638E12, 2.6799999999999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677196642E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.6677196636E12, "maxY": 259.0, "series": [{"data": [[1.6677196637E12, 259.0], [1.6677196642E12, 20.0], [1.6677196639E12, 19.0], [1.6677196636E12, 152.0], [1.6677196641E12, 27.0], [1.667719664E12, 29.0], [1.6677196638E12, 226.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6677196637E12, 242.4], [1.6677196642E12, 20.0], [1.6677196639E12, 18.4], [1.6677196636E12, 150.20000000000002], [1.6677196641E12, 22.800000000000004], [1.667719664E12, 29.0], [1.6677196638E12, 164.40000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6677196637E12, 259.0], [1.6677196642E12, 20.0], [1.6677196639E12, 19.0], [1.6677196636E12, 152.0], [1.6677196641E12, 27.0], [1.667719664E12, 29.0], [1.6677196638E12, 226.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6677196637E12, 252.2], [1.6677196642E12, 20.0], [1.6677196639E12, 19.0], [1.6677196636E12, 152.0], [1.6677196641E12, 27.0], [1.667719664E12, 29.0], [1.6677196638E12, 209.49999999999994]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6677196637E12, 23.0], [1.6677196642E12, 16.0], [1.6677196639E12, 14.0], [1.6677196636E12, 126.0], [1.6677196641E12, 13.0], [1.667719664E12, 16.0], [1.6677196638E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6677196637E12, 191.0], [1.6677196642E12, 16.5], [1.6677196639E12, 16.0], [1.6677196636E12, 131.0], [1.6677196641E12, 18.0], [1.667719664E12, 20.0], [1.6677196638E12, 28.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677196642E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 18.0, "minX": 32.0, "maxY": 140.5, "series": [{"data": [[32.0, 18.0], [118.0, 140.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 18.0, "minX": 32.0, "maxY": 135.0, "series": [{"data": [[32.0, 18.0], [118.0, 135.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 118.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.6677196635E12, "maxY": 630.0, "series": [{"data": [[1.6677196637E12, 150.0], [1.6677196642E12, 50.0], [1.6677196639E12, 150.0], [1.6677196636E12, 120.0], [1.6677196641E12, 180.0], [1.6677196635E12, 630.0], [1.667719664E12, 70.0], [1.6677196638E12, 150.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677196642E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6677196636E12, "maxY": 670.0, "series": [{"data": [[1.6677196637E12, 670.0], [1.6677196642E12, 80.0], [1.6677196639E12, 150.0], [1.6677196636E12, 110.0], [1.6677196641E12, 160.0], [1.667719664E12, 80.0], [1.6677196638E12, 250.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677196642E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6677196636E12, "maxY": 670.0, "series": [{"data": [[1.6677196637E12, 670.0], [1.6677196642E12, 80.0], [1.6677196639E12, 150.0], [1.6677196636E12, 110.0], [1.6677196641E12, 160.0], [1.667719664E12, 80.0], [1.6677196638E12, 250.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677196642E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6677196636E12, "maxY": 670.0, "series": [{"data": [[1.6677196637E12, 670.0], [1.6677196642E12, 80.0], [1.6677196639E12, 150.0], [1.6677196636E12, 110.0], [1.6677196641E12, 160.0], [1.667719664E12, 80.0], [1.6677196638E12, 250.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677196642E12, "title": "Total Transactions Per Second"}},
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

