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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 306.0, "series": [{"data": [[0.0, 13.0], [0.1, 14.0], [0.2, 14.0], [0.3, 15.0], [0.4, 15.0], [0.5, 17.0], [0.6, 17.0], [0.7, 17.0], [0.8, 17.0], [0.9, 17.0], [1.0, 18.0], [1.1, 18.0], [1.2, 18.0], [1.3, 18.0], [1.4, 18.0], [1.5, 19.0], [1.6, 19.0], [1.7, 19.0], [1.8, 19.0], [1.9, 20.0], [2.0, 20.0], [2.1, 20.0], [2.2, 20.0], [2.3, 21.0], [2.4, 21.0], [2.5, 21.0], [2.6, 21.0], [2.7, 22.0], [2.8, 22.0], [2.9, 22.0], [3.0, 22.0], [3.1, 22.0], [3.2, 22.0], [3.3, 23.0], [3.4, 23.0], [3.5, 24.0], [3.6, 24.0], [3.7, 24.0], [3.8, 25.0], [3.9, 25.0], [4.0, 25.0], [4.1, 26.0], [4.2, 26.0], [4.3, 26.0], [4.4, 26.0], [4.5, 27.0], [4.6, 27.0], [4.7, 27.0], [4.8, 28.0], [4.9, 28.0], [5.0, 28.0], [5.1, 28.0], [5.2, 28.0], [5.3, 29.0], [5.4, 29.0], [5.5, 29.0], [5.6, 29.0], [5.7, 30.0], [5.8, 30.0], [5.9, 30.0], [6.0, 30.0], [6.1, 30.0], [6.2, 30.0], [6.3, 31.0], [6.4, 31.0], [6.5, 31.0], [6.6, 31.0], [6.7, 31.0], [6.8, 32.0], [6.9, 32.0], [7.0, 32.0], [7.1, 32.0], [7.2, 32.0], [7.3, 33.0], [7.4, 33.0], [7.5, 33.0], [7.6, 33.0], [7.7, 34.0], [7.8, 34.0], [7.9, 34.0], [8.0, 34.0], [8.1, 35.0], [8.2, 35.0], [8.3, 35.0], [8.4, 35.0], [8.5, 35.0], [8.6, 35.0], [8.7, 35.0], [8.8, 35.0], [8.9, 36.0], [9.0, 36.0], [9.1, 36.0], [9.2, 36.0], [9.3, 36.0], [9.4, 37.0], [9.5, 37.0], [9.6, 37.0], [9.7, 37.0], [9.8, 37.0], [9.9, 37.0], [10.0, 38.0], [10.1, 38.0], [10.2, 38.0], [10.3, 38.0], [10.4, 38.0], [10.5, 38.0], [10.6, 38.0], [10.7, 39.0], [10.8, 39.0], [10.9, 39.0], [11.0, 40.0], [11.1, 40.0], [11.2, 40.0], [11.3, 40.0], [11.4, 41.0], [11.5, 41.0], [11.6, 41.0], [11.7, 41.0], [11.8, 41.0], [11.9, 41.0], [12.0, 41.0], [12.1, 42.0], [12.2, 42.0], [12.3, 42.0], [12.4, 42.0], [12.5, 43.0], [12.6, 43.0], [12.7, 43.0], [12.8, 43.0], [12.9, 43.0], [13.0, 43.0], [13.1, 44.0], [13.2, 44.0], [13.3, 44.0], [13.4, 45.0], [13.5, 45.0], [13.6, 45.0], [13.7, 45.0], [13.8, 45.0], [13.9, 45.0], [14.0, 45.0], [14.1, 45.0], [14.2, 45.0], [14.3, 46.0], [14.4, 46.0], [14.5, 46.0], [14.6, 46.0], [14.7, 46.0], [14.8, 46.0], [14.9, 46.0], [15.0, 47.0], [15.1, 47.0], [15.2, 47.0], [15.3, 47.0], [15.4, 47.0], [15.5, 47.0], [15.6, 48.0], [15.7, 48.0], [15.8, 48.0], [15.9, 48.0], [16.0, 48.0], [16.1, 48.0], [16.2, 48.0], [16.3, 48.0], [16.4, 49.0], [16.5, 49.0], [16.6, 49.0], [16.7, 49.0], [16.8, 49.0], [16.9, 49.0], [17.0, 49.0], [17.1, 49.0], [17.2, 50.0], [17.3, 50.0], [17.4, 50.0], [17.5, 50.0], [17.6, 50.0], [17.7, 50.0], [17.8, 50.0], [17.9, 50.0], [18.0, 51.0], [18.1, 51.0], [18.2, 51.0], [18.3, 51.0], [18.4, 51.0], [18.5, 51.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 52.0], [19.5, 52.0], [19.6, 53.0], [19.7, 53.0], [19.8, 53.0], [19.9, 53.0], [20.0, 53.0], [20.1, 54.0], [20.2, 54.0], [20.3, 54.0], [20.4, 54.0], [20.5, 54.0], [20.6, 54.0], [20.7, 55.0], [20.8, 55.0], [20.9, 55.0], [21.0, 55.0], [21.1, 55.0], [21.2, 55.0], [21.3, 55.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 56.0], [21.8, 56.0], [21.9, 56.0], [22.0, 56.0], [22.1, 56.0], [22.2, 56.0], [22.3, 56.0], [22.4, 57.0], [22.5, 57.0], [22.6, 57.0], [22.7, 57.0], [22.8, 57.0], [22.9, 57.0], [23.0, 57.0], [23.1, 58.0], [23.2, 58.0], [23.3, 58.0], [23.4, 58.0], [23.5, 58.0], [23.6, 58.0], [23.7, 58.0], [23.8, 58.0], [23.9, 58.0], [24.0, 58.0], [24.1, 58.0], [24.2, 58.0], [24.3, 58.0], [24.4, 59.0], [24.5, 59.0], [24.6, 59.0], [24.7, 59.0], [24.8, 59.0], [24.9, 59.0], [25.0, 59.0], [25.1, 59.0], [25.2, 60.0], [25.3, 60.0], [25.4, 60.0], [25.5, 60.0], [25.6, 60.0], [25.7, 60.0], [25.8, 60.0], [25.9, 60.0], [26.0, 60.0], [26.1, 60.0], [26.2, 60.0], [26.3, 61.0], [26.4, 61.0], [26.5, 61.0], [26.6, 61.0], [26.7, 61.0], [26.8, 61.0], [26.9, 61.0], [27.0, 61.0], [27.1, 61.0], [27.2, 61.0], [27.3, 61.0], [27.4, 62.0], [27.5, 62.0], [27.6, 62.0], [27.7, 62.0], [27.8, 62.0], [27.9, 62.0], [28.0, 62.0], [28.1, 63.0], [28.2, 63.0], [28.3, 63.0], [28.4, 63.0], [28.5, 63.0], [28.6, 63.0], [28.7, 63.0], [28.8, 63.0], [28.9, 63.0], [29.0, 63.0], [29.1, 63.0], [29.2, 63.0], [29.3, 63.0], [29.4, 63.0], [29.5, 63.0], [29.6, 63.0], [29.7, 64.0], [29.8, 64.0], [29.9, 64.0], [30.0, 64.0], [30.1, 64.0], [30.2, 64.0], [30.3, 64.0], [30.4, 64.0], [30.5, 64.0], [30.6, 64.0], [30.7, 64.0], [30.8, 65.0], [30.9, 65.0], [31.0, 65.0], [31.1, 65.0], [31.2, 65.0], [31.3, 65.0], [31.4, 65.0], [31.5, 65.0], [31.6, 65.0], [31.7, 65.0], [31.8, 65.0], [31.9, 65.0], [32.0, 65.0], [32.1, 66.0], [32.2, 66.0], [32.3, 66.0], [32.4, 66.0], [32.5, 66.0], [32.6, 66.0], [32.7, 66.0], [32.8, 66.0], [32.9, 66.0], [33.0, 67.0], [33.1, 67.0], [33.2, 67.0], [33.3, 67.0], [33.4, 67.0], [33.5, 67.0], [33.6, 67.0], [33.7, 68.0], [33.8, 68.0], [33.9, 68.0], [34.0, 68.0], [34.1, 68.0], [34.2, 68.0], [34.3, 68.0], [34.4, 68.0], [34.5, 68.0], [34.6, 68.0], [34.7, 68.0], [34.8, 68.0], [34.9, 68.0], [35.0, 68.0], [35.1, 68.0], [35.2, 68.0], [35.3, 69.0], [35.4, 69.0], [35.5, 69.0], [35.6, 69.0], [35.7, 69.0], [35.8, 69.0], [35.9, 69.0], [36.0, 69.0], [36.1, 69.0], [36.2, 70.0], [36.3, 70.0], [36.4, 70.0], [36.5, 70.0], [36.6, 70.0], [36.7, 70.0], [36.8, 70.0], [36.9, 70.0], [37.0, 70.0], [37.1, 70.0], [37.2, 70.0], [37.3, 71.0], [37.4, 71.0], [37.5, 71.0], [37.6, 71.0], [37.7, 71.0], [37.8, 71.0], [37.9, 71.0], [38.0, 71.0], [38.1, 71.0], [38.2, 71.0], [38.3, 71.0], [38.4, 72.0], [38.5, 72.0], [38.6, 72.0], [38.7, 72.0], [38.8, 72.0], [38.9, 72.0], [39.0, 72.0], [39.1, 72.0], [39.2, 72.0], [39.3, 73.0], [39.4, 73.0], [39.5, 73.0], [39.6, 73.0], [39.7, 73.0], [39.8, 73.0], [39.9, 73.0], [40.0, 73.0], [40.1, 73.0], [40.2, 73.0], [40.3, 73.0], [40.4, 73.0], [40.5, 74.0], [40.6, 74.0], [40.7, 74.0], [40.8, 74.0], [40.9, 74.0], [41.0, 74.0], [41.1, 74.0], [41.2, 74.0], [41.3, 74.0], [41.4, 74.0], [41.5, 74.0], [41.6, 75.0], [41.7, 75.0], [41.8, 75.0], [41.9, 75.0], [42.0, 75.0], [42.1, 75.0], [42.2, 75.0], [42.3, 75.0], [42.4, 75.0], [42.5, 75.0], [42.6, 76.0], [42.7, 76.0], [42.8, 76.0], [42.9, 76.0], [43.0, 76.0], [43.1, 76.0], [43.2, 76.0], [43.3, 76.0], [43.4, 76.0], [43.5, 77.0], [43.6, 77.0], [43.7, 77.0], [43.8, 77.0], [43.9, 77.0], [44.0, 77.0], [44.1, 77.0], [44.2, 77.0], [44.3, 78.0], [44.4, 78.0], [44.5, 78.0], [44.6, 78.0], [44.7, 78.0], [44.8, 78.0], [44.9, 78.0], [45.0, 78.0], [45.1, 78.0], [45.2, 78.0], [45.3, 78.0], [45.4, 78.0], [45.5, 79.0], [45.6, 79.0], [45.7, 79.0], [45.8, 79.0], [45.9, 79.0], [46.0, 79.0], [46.1, 79.0], [46.2, 79.0], [46.3, 79.0], [46.4, 80.0], [46.5, 80.0], [46.6, 80.0], [46.7, 80.0], [46.8, 80.0], [46.9, 80.0], [47.0, 80.0], [47.1, 80.0], [47.2, 80.0], [47.3, 80.0], [47.4, 81.0], [47.5, 81.0], [47.6, 81.0], [47.7, 81.0], [47.8, 81.0], [47.9, 81.0], [48.0, 81.0], [48.1, 81.0], [48.2, 81.0], [48.3, 81.0], [48.4, 82.0], [48.5, 82.0], [48.6, 82.0], [48.7, 82.0], [48.8, 82.0], [48.9, 82.0], [49.0, 83.0], [49.1, 83.0], [49.2, 83.0], [49.3, 83.0], [49.4, 83.0], [49.5, 83.0], [49.6, 83.0], [49.7, 83.0], [49.8, 83.0], [49.9, 84.0], [50.0, 84.0], [50.1, 84.0], [50.2, 84.0], [50.3, 84.0], [50.4, 84.0], [50.5, 84.0], [50.6, 84.0], [50.7, 84.0], [50.8, 85.0], [50.9, 85.0], [51.0, 85.0], [51.1, 85.0], [51.2, 85.0], [51.3, 85.0], [51.4, 85.0], [51.5, 85.0], [51.6, 85.0], [51.7, 85.0], [51.8, 85.0], [51.9, 86.0], [52.0, 86.0], [52.1, 86.0], [52.2, 86.0], [52.3, 86.0], [52.4, 86.0], [52.5, 86.0], [52.6, 86.0], [52.7, 86.0], [52.8, 86.0], [52.9, 86.0], [53.0, 87.0], [53.1, 87.0], [53.2, 87.0], [53.3, 87.0], [53.4, 87.0], [53.5, 87.0], [53.6, 87.0], [53.7, 88.0], [53.8, 88.0], [53.9, 88.0], [54.0, 88.0], [54.1, 88.0], [54.2, 88.0], [54.3, 88.0], [54.4, 88.0], [54.5, 88.0], [54.6, 89.0], [54.7, 89.0], [54.8, 89.0], [54.9, 89.0], [55.0, 89.0], [55.1, 89.0], [55.2, 89.0], [55.3, 89.0], [55.4, 89.0], [55.5, 89.0], [55.6, 89.0], [55.7, 89.0], [55.8, 89.0], [55.9, 90.0], [56.0, 90.0], [56.1, 90.0], [56.2, 90.0], [56.3, 90.0], [56.4, 90.0], [56.5, 90.0], [56.6, 90.0], [56.7, 90.0], [56.8, 90.0], [56.9, 91.0], [57.0, 91.0], [57.1, 91.0], [57.2, 91.0], [57.3, 91.0], [57.4, 92.0], [57.5, 92.0], [57.6, 92.0], [57.7, 92.0], [57.8, 92.0], [57.9, 92.0], [58.0, 92.0], [58.1, 92.0], [58.2, 93.0], [58.3, 93.0], [58.4, 93.0], [58.5, 93.0], [58.6, 93.0], [58.7, 93.0], [58.8, 93.0], [58.9, 94.0], [59.0, 94.0], [59.1, 94.0], [59.2, 94.0], [59.3, 94.0], [59.4, 94.0], [59.5, 94.0], [59.6, 94.0], [59.7, 95.0], [59.8, 95.0], [59.9, 95.0], [60.0, 95.0], [60.1, 95.0], [60.2, 95.0], [60.3, 96.0], [60.4, 96.0], [60.5, 96.0], [60.6, 96.0], [60.7, 96.0], [60.8, 96.0], [60.9, 96.0], [61.0, 97.0], [61.1, 97.0], [61.2, 97.0], [61.3, 97.0], [61.4, 97.0], [61.5, 97.0], [61.6, 97.0], [61.7, 97.0], [61.8, 98.0], [61.9, 98.0], [62.0, 98.0], [62.1, 98.0], [62.2, 98.0], [62.3, 98.0], [62.4, 98.0], [62.5, 98.0], [62.6, 98.0], [62.7, 98.0], [62.8, 99.0], [62.9, 99.0], [63.0, 99.0], [63.1, 99.0], [63.2, 99.0], [63.3, 100.0], [63.4, 100.0], [63.5, 100.0], [63.6, 100.0], [63.7, 100.0], [63.8, 100.0], [63.9, 100.0], [64.0, 101.0], [64.1, 101.0], [64.2, 101.0], [64.3, 101.0], [64.4, 101.0], [64.5, 101.0], [64.6, 102.0], [64.7, 102.0], [64.8, 102.0], [64.9, 102.0], [65.0, 102.0], [65.1, 102.0], [65.2, 103.0], [65.3, 103.0], [65.4, 103.0], [65.5, 103.0], [65.6, 103.0], [65.7, 104.0], [65.8, 104.0], [65.9, 104.0], [66.0, 104.0], [66.1, 104.0], [66.2, 104.0], [66.3, 104.0], [66.4, 104.0], [66.5, 104.0], [66.6, 104.0], [66.7, 105.0], [66.8, 105.0], [66.9, 105.0], [67.0, 105.0], [67.1, 105.0], [67.2, 105.0], [67.3, 105.0], [67.4, 105.0], [67.5, 106.0], [67.6, 106.0], [67.7, 106.0], [67.8, 106.0], [67.9, 106.0], [68.0, 106.0], [68.1, 107.0], [68.2, 107.0], [68.3, 107.0], [68.4, 107.0], [68.5, 107.0], [68.6, 107.0], [68.7, 107.0], [68.8, 108.0], [68.9, 108.0], [69.0, 108.0], [69.1, 108.0], [69.2, 108.0], [69.3, 108.0], [69.4, 109.0], [69.5, 109.0], [69.6, 109.0], [69.7, 109.0], [69.8, 109.0], [69.9, 109.0], [70.0, 109.0], [70.1, 110.0], [70.2, 110.0], [70.3, 110.0], [70.4, 110.0], [70.5, 110.0], [70.6, 110.0], [70.7, 110.0], [70.8, 110.0], [70.9, 111.0], [71.0, 111.0], [71.1, 111.0], [71.2, 111.0], [71.3, 111.0], [71.4, 111.0], [71.5, 111.0], [71.6, 111.0], [71.7, 111.0], [71.8, 111.0], [71.9, 112.0], [72.0, 112.0], [72.1, 112.0], [72.2, 112.0], [72.3, 112.0], [72.4, 112.0], [72.5, 112.0], [72.6, 113.0], [72.7, 113.0], [72.8, 113.0], [72.9, 113.0], [73.0, 113.0], [73.1, 113.0], [73.2, 113.0], [73.3, 113.0], [73.4, 113.0], [73.5, 113.0], [73.6, 113.0], [73.7, 114.0], [73.8, 114.0], [73.9, 114.0], [74.0, 114.0], [74.1, 114.0], [74.2, 115.0], [74.3, 115.0], [74.4, 115.0], [74.5, 115.0], [74.6, 115.0], [74.7, 115.0], [74.8, 115.0], [74.9, 115.0], [75.0, 115.0], [75.1, 116.0], [75.2, 116.0], [75.3, 116.0], [75.4, 116.0], [75.5, 116.0], [75.6, 116.0], [75.7, 116.0], [75.8, 116.0], [75.9, 117.0], [76.0, 117.0], [76.1, 117.0], [76.2, 118.0], [76.3, 118.0], [76.4, 118.0], [76.5, 118.0], [76.6, 119.0], [76.7, 119.0], [76.8, 119.0], [76.9, 119.0], [77.0, 119.0], [77.1, 119.0], [77.2, 119.0], [77.3, 120.0], [77.4, 120.0], [77.5, 120.0], [77.6, 120.0], [77.7, 121.0], [77.8, 121.0], [77.9, 121.0], [78.0, 122.0], [78.1, 122.0], [78.2, 122.0], [78.3, 122.0], [78.4, 122.0], [78.5, 122.0], [78.6, 122.0], [78.7, 122.0], [78.8, 123.0], [78.9, 123.0], [79.0, 124.0], [79.1, 124.0], [79.2, 124.0], [79.3, 124.0], [79.4, 124.0], [79.5, 124.0], [79.6, 124.0], [79.7, 125.0], [79.8, 125.0], [79.9, 125.0], [80.0, 125.0], [80.1, 125.0], [80.2, 125.0], [80.3, 125.0], [80.4, 125.0], [80.5, 126.0], [80.6, 126.0], [80.7, 126.0], [80.8, 126.0], [80.9, 126.0], [81.0, 126.0], [81.1, 126.0], [81.2, 126.0], [81.3, 127.0], [81.4, 127.0], [81.5, 127.0], [81.6, 127.0], [81.7, 127.0], [81.8, 127.0], [81.9, 128.0], [82.0, 128.0], [82.1, 128.0], [82.2, 128.0], [82.3, 128.0], [82.4, 128.0], [82.5, 128.0], [82.6, 129.0], [82.7, 129.0], [82.8, 129.0], [82.9, 129.0], [83.0, 129.0], [83.1, 129.0], [83.2, 129.0], [83.3, 129.0], [83.4, 129.0], [83.5, 130.0], [83.6, 130.0], [83.7, 130.0], [83.8, 131.0], [83.9, 131.0], [84.0, 131.0], [84.1, 131.0], [84.2, 132.0], [84.3, 132.0], [84.4, 132.0], [84.5, 132.0], [84.6, 133.0], [84.7, 133.0], [84.8, 133.0], [84.9, 133.0], [85.0, 133.0], [85.1, 134.0], [85.2, 134.0], [85.3, 134.0], [85.4, 134.0], [85.5, 134.0], [85.6, 134.0], [85.7, 135.0], [85.8, 135.0], [85.9, 135.0], [86.0, 135.0], [86.1, 135.0], [86.2, 136.0], [86.3, 136.0], [86.4, 136.0], [86.5, 137.0], [86.6, 137.0], [86.7, 137.0], [86.8, 137.0], [86.9, 138.0], [87.0, 138.0], [87.1, 138.0], [87.2, 138.0], [87.3, 139.0], [87.4, 139.0], [87.5, 139.0], [87.6, 139.0], [87.7, 140.0], [87.8, 140.0], [87.9, 140.0], [88.0, 140.0], [88.1, 141.0], [88.2, 142.0], [88.3, 142.0], [88.4, 142.0], [88.5, 143.0], [88.6, 143.0], [88.7, 143.0], [88.8, 143.0], [88.9, 143.0], [89.0, 143.0], [89.1, 144.0], [89.2, 144.0], [89.3, 145.0], [89.4, 145.0], [89.5, 145.0], [89.6, 146.0], [89.7, 147.0], [89.8, 147.0], [89.9, 147.0], [90.0, 148.0], [90.1, 148.0], [90.2, 148.0], [90.3, 149.0], [90.4, 149.0], [90.5, 150.0], [90.6, 150.0], [90.7, 150.0], [90.8, 150.0], [90.9, 151.0], [91.0, 151.0], [91.1, 152.0], [91.2, 152.0], [91.3, 152.0], [91.4, 153.0], [91.5, 153.0], [91.6, 154.0], [91.7, 154.0], [91.8, 155.0], [91.9, 155.0], [92.0, 155.0], [92.1, 156.0], [92.2, 156.0], [92.3, 156.0], [92.4, 157.0], [92.5, 158.0], [92.6, 159.0], [92.7, 159.0], [92.8, 159.0], [92.9, 160.0], [93.0, 160.0], [93.1, 160.0], [93.2, 162.0], [93.3, 162.0], [93.4, 163.0], [93.5, 164.0], [93.6, 165.0], [93.7, 165.0], [93.8, 166.0], [93.9, 166.0], [94.0, 167.0], [94.1, 167.0], [94.2, 167.0], [94.3, 168.0], [94.4, 169.0], [94.5, 170.0], [94.6, 170.0], [94.7, 172.0], [94.8, 172.0], [94.9, 173.0], [95.0, 173.0], [95.1, 174.0], [95.2, 174.0], [95.3, 175.0], [95.4, 175.0], [95.5, 176.0], [95.6, 176.0], [95.7, 176.0], [95.8, 177.0], [95.9, 178.0], [96.0, 179.0], [96.1, 179.0], [96.2, 180.0], [96.3, 181.0], [96.4, 181.0], [96.5, 182.0], [96.6, 182.0], [96.7, 183.0], [96.8, 184.0], [96.9, 186.0], [97.0, 187.0], [97.1, 188.0], [97.2, 188.0], [97.3, 188.0], [97.4, 190.0], [97.5, 190.0], [97.6, 193.0], [97.7, 194.0], [97.8, 194.0], [97.9, 196.0], [98.0, 197.0], [98.1, 200.0], [98.2, 202.0], [98.3, 204.0], [98.4, 205.0], [98.5, 206.0], [98.6, 209.0], [98.7, 214.0], [98.8, 216.0], [98.9, 220.0], [99.0, 221.0], [99.1, 223.0], [99.2, 228.0], [99.3, 234.0], [99.4, 245.0], [99.5, 246.0], [99.6, 251.0], [99.7, 262.0], [99.8, 269.0], [99.9, 276.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1265.0, "series": [{"data": [[0.0, 1265.0], [300.0, 1.0], [100.0, 697.0], [200.0, 37.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0000000000000004, "minX": 1.6673186138E12, "maxY": 50.0, "series": [{"data": [[1.6673186172E12, 45.333333333333336], [1.6673186141E12, 34.3125], [1.6673186161E12, 50.0], [1.6673186151E12, 50.0], [1.6673186171E12, 48.01886792452832], [1.6673186163E12, 50.0], [1.6673186173E12, 44.61224489795919], [1.6673186152E12, 50.0], [1.6673186142E12, 39.441176470588246], [1.6673186162E12, 50.0], [1.6673186154E12, 50.0], [1.6673186164E12, 50.0], [1.6673186174E12, 42.48333333333334], [1.6673186153E12, 50.0], [1.6673186143E12, 44.66666666666666], [1.6673186145E12, 50.0], [1.6673186155E12, 50.0], [1.6673186165E12, 50.0], [1.6673186144E12, 49.11538461538461], [1.6673186175E12, 36.91666666666666], [1.6673186177E12, 19.42857142857143], [1.6673186167E12, 50.0], [1.6673186146E12, 50.0], [1.6673186156E12, 50.0], [1.6673186176E12, 31.272727272727263], [1.6673186166E12, 50.0], [1.6673186168E12, 50.0], [1.6673186158E12, 50.0], [1.6673186178E12, 6.935483870967742], [1.6673186147E12, 50.0], [1.6673186157E12, 50.0], [1.6673186149E12, 50.0], [1.6673186169E12, 50.0], [1.6673186159E12, 50.0], [1.6673186138E12, 18.3], [1.6673186179E12, 2.0000000000000004], [1.6673186148E12, 50.0], [1.667318614E12, 28.270270270270267], [1.667318616E12, 50.0], [1.667318615E12, 50.0], [1.667318617E12, 49.16666666666666], [1.6673186139E12, 25.53846153846154]], "isOverall": false, "label": "goodsdemoaop", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673186179E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 16.666666666666668, "minX": 1.0, "maxY": 119.66666666666667, "series": [{"data": [[32.0, 72.77777777777777], [33.0, 62.866666666666674], [2.0, 18.285714285714285], [34.0, 60.45454545454546], [35.0, 58.66666666666667], [36.0, 98.71428571428574], [37.0, 88.58333333333334], [38.0, 74.73333333333333], [39.0, 91.77777777777777], [40.0, 90.0], [41.0, 79.99999999999999], [42.0, 72.32258064516128], [43.0, 106.6], [44.0, 95.39999999999999], [45.0, 96.77611940298506], [46.0, 99.36363636363637], [47.0, 101.28571428571429], [48.0, 118.41176470588236], [49.0, 100.80769230769232], [3.0, 16.666666666666668], [50.0, 94.05617147080575], [4.0, 22.0], [5.0, 21.5], [6.0, 24.777777777777775], [8.0, 25.2], [9.0, 32.4], [10.0, 27.0], [11.0, 25.5], [12.0, 25.0], [13.0, 59.0], [14.0, 28.0], [16.0, 37.625], [1.0, 17.0], [17.0, 43.25], [18.0, 83.45454545454545], [19.0, 86.625], [20.0, 74.0], [21.0, 67.125], [22.0, 61.2], [23.0, 119.66666666666667], [24.0, 94.5], [25.0, 95.4], [26.0, 64.24000000000001], [27.0, 77.85714285714286], [28.0, 43.0], [29.0, 58.6], [30.0, 56.54545454545455], [31.0, 86.5]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[45.536500000000025, 90.00149999999996]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 50.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 42560.0, "minX": 1.6673186138E12, "maxY": 461020.0, "series": [{"data": [[1.6673186172E12, 198610.0], [1.6673186141E12, 227000.0], [1.6673186161E12, 349970.0], [1.6673186151E12, 227000.0], [1.6673186171E12, 250630.0], [1.6673186163E12, 226990.0], [1.6673186173E12, 231670.0], [1.6673186152E12, 245900.0], [1.6673186142E12, 160810.0], [1.6673186162E12, 108780.0], [1.6673186154E12, 208090.0], [1.6673186164E12, 231730.0], [1.6673186174E12, 283680.0], [1.6673186153E12, 283700.0], [1.6673186143E12, 212820.0], [1.6673186145E12, 208070.0], [1.6673186155E12, 231700.0], [1.6673186165E12, 335770.0], [1.6673186144E12, 245900.0], [1.6673186175E12, 226980.0], [1.6673186177E12, 231730.0], [1.6673186167E12, 212820.0], [1.6673186146E12, 293210.0], [1.6673186156E12, 302640.0], [1.6673186176E12, 208050.0], [1.6673186166E12, 184400.0], [1.6673186168E12, 269560.0], [1.6673186158E12, 236440.0], [1.6673186178E12, 146570.0], [1.6673186147E12, 274240.0], [1.6673186157E12, 236430.0], [1.6673186149E12, 293180.0], [1.6673186169E12, 260040.0], [1.6673186159E12, 260080.0], [1.6673186138E12, 94590.0], [1.6673186179E12, 42560.0], [1.6673186148E12, 226990.0], [1.667318614E12, 174940.0], [1.667318616E12, 255340.0], [1.667318615E12, 269570.0], [1.667318617E12, 226960.0], [1.6673186139E12, 61470.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6673186172E12, 261660.0], [1.6673186141E12, 299040.0], [1.6673186161E12, 461020.0], [1.6673186151E12, 299040.0], [1.6673186171E12, 330190.0], [1.6673186163E12, 299040.0], [1.6673186173E12, 305270.0], [1.6673186152E12, 323960.0], [1.6673186142E12, 211820.0], [1.6673186162E12, 143290.0], [1.6673186154E12, 274120.0], [1.6673186164E12, 305270.0], [1.6673186174E12, 373800.0], [1.6673186153E12, 373800.0], [1.6673186143E12, 280350.0], [1.6673186145E12, 274120.0], [1.6673186155E12, 305270.0], [1.6673186165E12, 442330.0], [1.6673186144E12, 323960.0], [1.6673186175E12, 299040.0], [1.6673186177E12, 305270.0], [1.6673186167E12, 280350.0], [1.6673186146E12, 386260.0], [1.6673186156E12, 398720.0], [1.6673186176E12, 274120.0], [1.6673186166E12, 242970.0], [1.6673186168E12, 355110.0], [1.6673186158E12, 311500.0], [1.6673186178E12, 193130.0], [1.6673186147E12, 361340.0], [1.6673186157E12, 311500.0], [1.6673186149E12, 386260.0], [1.6673186169E12, 342650.0], [1.6673186159E12, 342650.0], [1.6673186138E12, 124600.0], [1.6673186179E12, 56070.0], [1.6673186148E12, 299040.0], [1.667318614E12, 230510.0], [1.667318616E12, 336420.0], [1.667318615E12, 355110.0], [1.667318617E12, 299040.0], [1.6673186139E12, 80990.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673186179E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 18.11111111111111, "minX": 1.6673186138E12, "maxY": 142.00000000000003, "series": [{"data": [[1.6673186172E12, 105.26190476190476], [1.6673186141E12, 70.77083333333331], [1.6673186161E12, 79.8918918918919], [1.6673186151E12, 89.08333333333334], [1.6673186171E12, 103.2264150943396], [1.6673186163E12, 142.00000000000003], [1.6673186173E12, 93.18367346938777], [1.6673186152E12, 87.76923076923079], [1.6673186142E12, 85.6470588235294], [1.6673186162E12, 92.4782608695652], [1.6673186154E12, 86.31818181818184], [1.6673186164E12, 84.63265306122449], [1.6673186174E12, 81.76666666666665], [1.6673186153E12, 94.53333333333332], [1.6673186143E12, 94.2222222222222], [1.6673186145E12, 77.63636363636363], [1.6673186155E12, 113.08163265306122], [1.6673186165E12, 88.26760563380279], [1.6673186144E12, 99.92307692307689], [1.6673186175E12, 78.41666666666666], [1.6673186177E12, 67.53061224489795], [1.6673186167E12, 99.84444444444445], [1.6673186146E12, 88.62903225806451], [1.6673186156E12, 94.37499999999999], [1.6673186176E12, 70.68181818181819], [1.6673186166E12, 91.4102564102564], [1.6673186168E12, 111.57894736842108], [1.6673186158E12, 101.57999999999998], [1.6673186178E12, 25.09677419354839], [1.6673186147E12, 113.2241379310345], [1.6673186157E12, 84.4], [1.6673186149E12, 79.70967741935483], [1.6673186169E12, 97.52727272727272], [1.6673186159E12, 99.70909090909093], [1.6673186138E12, 96.25], [1.6673186179E12, 18.11111111111111], [1.6673186148E12, 76.41666666666669], [1.667318614E12, 63.13513513513513], [1.667318616E12, 85.2592592592593], [1.667318615E12, 101.64912280701758], [1.667318617E12, 94.43750000000001], [1.6673186139E12, 58.84615384615385]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673186179E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 18.11111111111111, "minX": 1.6673186138E12, "maxY": 141.87500000000003, "series": [{"data": [[1.6673186172E12, 104.73809523809524], [1.6673186141E12, 70.39583333333333], [1.6673186161E12, 79.74324324324326], [1.6673186151E12, 88.75], [1.6673186171E12, 102.8867924528302], [1.6673186163E12, 141.87500000000003], [1.6673186173E12, 92.89795918367348], [1.6673186152E12, 87.03846153846152], [1.6673186142E12, 85.14705882352939], [1.6673186162E12, 91.17391304347827], [1.6673186154E12, 85.09090909090908], [1.6673186164E12, 84.61224489795917], [1.6673186174E12, 81.69999999999997], [1.6673186153E12, 94.33333333333336], [1.6673186143E12, 92.31111111111115], [1.6673186145E12, 77.25], [1.6673186155E12, 112.85714285714283], [1.6673186165E12, 87.78873239436616], [1.6673186144E12, 99.48076923076924], [1.6673186175E12, 77.77083333333333], [1.6673186177E12, 67.14285714285715], [1.6673186167E12, 99.84444444444445], [1.6673186146E12, 88.25806451612905], [1.6673186156E12, 93.56250000000003], [1.6673186176E12, 70.6590909090909], [1.6673186166E12, 91.33333333333334], [1.6673186168E12, 111.03508771929825], [1.6673186158E12, 100.89999999999999], [1.6673186178E12, 25.09677419354839], [1.6673186147E12, 113.15517241379311], [1.6673186157E12, 84.34000000000002], [1.6673186149E12, 78.88709677419357], [1.6673186169E12, 95.7818181818182], [1.6673186159E12, 99.45454545454542], [1.6673186138E12, 89.55000000000001], [1.6673186179E12, 18.11111111111111], [1.6673186148E12, 75.81250000000001], [1.667318614E12, 63.02702702702703], [1.667318616E12, 84.74074074074079], [1.667318615E12, 101.54385964912284], [1.667318617E12, 93.875], [1.6673186139E12, 58.76923076923077]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673186179E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6673186138E12, "maxY": 32.550000000000004, "series": [{"data": [[1.6673186172E12, 0.0], [1.6673186141E12, 0.20833333333333334], [1.6673186161E12, 0.0], [1.6673186151E12, 0.0], [1.6673186171E12, 0.0], [1.6673186163E12, 0.0], [1.6673186173E12, 0.0], [1.6673186152E12, 0.0], [1.6673186142E12, 0.23529411764705888], [1.6673186162E12, 0.0], [1.6673186154E12, 0.0], [1.6673186164E12, 0.0], [1.6673186174E12, 0.0], [1.6673186153E12, 0.0], [1.6673186143E12, 0.24444444444444444], [1.6673186145E12, 0.045454545454545456], [1.6673186155E12, 0.0], [1.6673186165E12, 0.0], [1.6673186144E12, 0.09615384615384616], [1.6673186175E12, 0.0], [1.6673186177E12, 0.0], [1.6673186167E12, 0.0], [1.6673186146E12, 0.03225806451612903], [1.6673186156E12, 0.0], [1.6673186176E12, 0.0], [1.6673186166E12, 0.0], [1.6673186168E12, 0.0], [1.6673186158E12, 0.0], [1.6673186178E12, 0.0], [1.6673186147E12, 0.0], [1.6673186157E12, 0.0], [1.6673186149E12, 0.0], [1.6673186169E12, 0.0], [1.6673186159E12, 0.0], [1.6673186138E12, 32.550000000000004], [1.6673186179E12, 0.0], [1.6673186148E12, 0.0], [1.667318614E12, 0.16216216216216217], [1.667318616E12, 0.0], [1.667318615E12, 0.0], [1.667318617E12, 0.0], [1.6673186139E12, 0.38461538461538464]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673186179E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.6673186138E12, "maxY": 306.0, "series": [{"data": [[1.6673186172E12, 264.0], [1.6673186141E12, 182.0], [1.6673186161E12, 167.0], [1.6673186151E12, 188.0], [1.6673186171E12, 188.0], [1.6673186163E12, 232.0], [1.6673186173E12, 234.0], [1.6673186152E12, 207.0], [1.6673186142E12, 154.0], [1.6673186162E12, 176.0], [1.6673186154E12, 172.0], [1.6673186164E12, 202.0], [1.6673186174E12, 251.0], [1.6673186153E12, 188.0], [1.6673186143E12, 193.0], [1.6673186145E12, 131.0], [1.6673186155E12, 221.0], [1.6673186165E12, 246.0], [1.6673186144E12, 228.0], [1.6673186175E12, 126.0], [1.6673186177E12, 192.0], [1.6673186167E12, 153.0], [1.6673186146E12, 262.0], [1.6673186156E12, 251.0], [1.6673186176E12, 177.0], [1.6673186166E12, 276.0], [1.6673186168E12, 306.0], [1.6673186158E12, 214.0], [1.6673186178E12, 53.0], [1.6673186147E12, 261.0], [1.6673186157E12, 179.0], [1.6673186149E12, 160.0], [1.6673186169E12, 205.0], [1.6673186159E12, 196.0], [1.6673186138E12, 129.0], [1.6673186179E12, 22.0], [1.6673186148E12, 172.0], [1.667318614E12, 89.0], [1.667318616E12, 156.0], [1.667318615E12, 187.0], [1.667318617E12, 178.0], [1.6673186139E12, 69.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6673186172E12, 150.0], [1.6673186141E12, 134.20000000000002], [1.6673186161E12, 128.0], [1.6673186151E12, 143.5], [1.6673186171E12, 151.00000000000003], [1.6673186163E12, 188.1], [1.6673186173E12, 129.0], [1.6673186152E12, 138.7], [1.6673186142E12, 117.5], [1.6673186162E12, 152.60000000000005], [1.6673186154E12, 157.0], [1.6673186164E12, 150.0], [1.6673186174E12, 126.99999999999999], [1.6673186153E12, 154.7], [1.6673186143E12, 176.6], [1.6673186145E12, 120.0], [1.6673186155E12, 183.0], [1.6673186165E12, 168.39999999999998], [1.6673186144E12, 180.4], [1.6673186175E12, 124.0], [1.6673186177E12, 127.0], [1.6673186167E12, 136.0], [1.6673186146E12, 137.10000000000002], [1.6673186156E12, 186.0], [1.6673186176E12, 144.0], [1.6673186166E12, 217.0], [1.6673186168E12, 194.4], [1.6673186158E12, 169.6], [1.6673186178E12, 35.0], [1.6673186147E12, 171.70000000000002], [1.6673186157E12, 134.0], [1.6673186149E12, 125.90000000000002], [1.6673186169E12, 168.39999999999998], [1.6673186159E12, 166.6], [1.6673186138E12, 129.0], [1.6673186179E12, 22.0], [1.6673186148E12, 119.60000000000001], [1.667318614E12, 79.60000000000001], [1.667318616E12, 130.0], [1.667318615E12, 151.8], [1.667318617E12, 136.0], [1.6673186139E12, 68.2]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6673186172E12, 264.0], [1.6673186141E12, 182.0], [1.6673186161E12, 167.0], [1.6673186151E12, 188.0], [1.6673186171E12, 188.0], [1.6673186163E12, 232.0], [1.6673186173E12, 234.0], [1.6673186152E12, 207.0], [1.6673186142E12, 154.0], [1.6673186162E12, 176.0], [1.6673186154E12, 172.0], [1.6673186164E12, 202.0], [1.6673186174E12, 251.0], [1.6673186153E12, 188.0], [1.6673186143E12, 193.0], [1.6673186145E12, 131.0], [1.6673186155E12, 221.0], [1.6673186165E12, 246.0], [1.6673186144E12, 228.0], [1.6673186175E12, 126.0], [1.6673186177E12, 192.0], [1.6673186167E12, 153.0], [1.6673186146E12, 262.0], [1.6673186156E12, 251.0], [1.6673186176E12, 177.0], [1.6673186166E12, 276.0], [1.6673186168E12, 306.0], [1.6673186158E12, 214.0], [1.6673186178E12, 53.0], [1.6673186147E12, 261.0], [1.6673186157E12, 179.0], [1.6673186149E12, 160.0], [1.6673186169E12, 205.0], [1.6673186159E12, 196.0], [1.6673186138E12, 129.0], [1.6673186179E12, 22.0], [1.6673186148E12, 172.0], [1.667318614E12, 89.0], [1.667318616E12, 156.0], [1.667318615E12, 187.0], [1.667318617E12, 178.0], [1.6673186139E12, 69.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6673186172E12, 156.25], [1.6673186141E12, 161.29999999999993], [1.6673186161E12, 133.75], [1.6673186151E12, 169.39999999999992], [1.6673186171E12, 172.3], [1.6673186163E12, 207.2], [1.6673186173E12, 224.0], [1.6673186152E12, 146.14999999999995], [1.6673186142E12, 137.5], [1.6673186162E12, 173.79999999999995], [1.6673186154E12, 166.5], [1.6673186164E12, 169.5], [1.6673186174E12, 133.95], [1.6673186153E12, 166.95], [1.6673186143E12, 190.0], [1.6673186145E12, 128.5], [1.6673186155E12, 220.5], [1.6673186165E12, 179.99999999999991], [1.6673186144E12, 204.24999999999991], [1.6673186175E12, 125.0], [1.6673186177E12, 140.5], [1.6673186167E12, 143.99999999999994], [1.6673186146E12, 215.39999999999998], [1.6673186156E12, 202.25], [1.6673186176E12, 167.75], [1.6673186166E12, 274.0], [1.6673186168E12, 209.09999999999977], [1.6673186158E12, 200.14999999999998], [1.6673186178E12, 43.99999999999998], [1.6673186147E12, 184.94999999999987], [1.6673186157E12, 139.7], [1.6673186149E12, 135.54999999999998], [1.6673186169E12, 184.0], [1.6673186159E12, 185.99999999999994], [1.6673186138E12, 129.0], [1.6673186179E12, 22.0], [1.6673186148E12, 144.69999999999996], [1.667318614E12, 83.60000000000001], [1.667318616E12, 143.5], [1.667318615E12, 159.1], [1.667318617E12, 152.75], [1.6673186139E12, 69.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6673186172E12, 64.0], [1.6673186141E12, 20.0], [1.6673186161E12, 17.0], [1.6673186151E12, 31.0], [1.6673186171E12, 58.0], [1.6673186163E12, 15.0], [1.6673186173E12, 41.0], [1.6673186152E12, 23.0], [1.6673186142E12, 22.0], [1.6673186162E12, 43.0], [1.6673186154E12, 17.0], [1.6673186164E12, 13.0], [1.6673186174E12, 38.0], [1.6673186153E12, 22.0], [1.6673186143E12, 18.0], [1.6673186145E12, 26.0], [1.6673186155E12, 13.0], [1.6673186165E12, 17.0], [1.6673186144E12, 32.0], [1.6673186175E12, 25.0], [1.6673186177E12, 21.0], [1.6673186167E12, 22.0], [1.6673186146E12, 18.0], [1.6673186156E12, 25.0], [1.6673186176E12, 26.0], [1.6673186166E12, 34.0], [1.6673186168E12, 15.0], [1.6673186158E12, 32.0], [1.6673186178E12, 14.0], [1.6673186147E12, 45.0], [1.6673186157E12, 32.0], [1.6673186149E12, 26.0], [1.6673186169E12, 28.0], [1.6673186159E12, 17.0], [1.6673186138E12, 18.0], [1.6673186179E12, 16.0], [1.6673186148E12, 30.0], [1.667318614E12, 26.0], [1.667318616E12, 20.0], [1.667318615E12, 37.0], [1.667318617E12, 47.0], [1.6673186139E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6673186172E12, 96.0], [1.6673186141E12, 60.5], [1.6673186161E12, 74.0], [1.6673186151E12, 86.0], [1.6673186171E12, 102.0], [1.6673186163E12, 142.5], [1.6673186173E12, 84.0], [1.6673186152E12, 85.5], [1.6673186142E12, 82.5], [1.6673186162E12, 81.0], [1.6673186154E12, 87.0], [1.6673186164E12, 78.0], [1.6673186174E12, 77.0], [1.6673186153E12, 90.5], [1.6673186143E12, 81.0], [1.6673186145E12, 80.0], [1.6673186155E12, 115.0], [1.6673186165E12, 82.0], [1.6673186144E12, 89.5], [1.6673186175E12, 76.0], [1.6673186177E12, 50.0], [1.6673186167E12, 115.0], [1.6673186146E12, 75.5], [1.6673186156E12, 79.0], [1.6673186176E12, 58.5], [1.6673186166E12, 68.0], [1.6673186168E12, 109.0], [1.6673186158E12, 87.0], [1.6673186178E12, 24.0], [1.6673186147E12, 109.5], [1.6673186157E12, 82.5], [1.6673186149E12, 77.0], [1.6673186169E12, 93.0], [1.6673186159E12, 100.0], [1.6673186138E12, 125.0], [1.6673186179E12, 18.0], [1.6673186148E12, 70.0], [1.667318614E12, 68.0], [1.667318616E12, 89.0], [1.667318615E12, 97.0], [1.667318617E12, 93.5], [1.6673186139E12, 61.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673186179E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 67.0, "minX": 33.0, "maxY": 90.0, "series": [{"data": [[33.0, 67.0], [529.0, 90.0], [515.0, 89.0], [433.0, 78.0], [490.0, 77.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 529.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 66.0, "minX": 33.0, "maxY": 90.0, "series": [{"data": [[33.0, 66.0], [529.0, 90.0], [515.0, 88.0], [433.0, 78.0], [490.0, 77.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 529.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.6673186137E12, "maxY": 730.0, "series": [{"data": [[1.6673186172E12, 410.0], [1.6673186141E12, 530.0], [1.6673186161E12, 730.0], [1.6673186151E12, 480.0], [1.6673186171E12, 500.0], [1.6673186163E12, 480.0], [1.6673186173E12, 480.0], [1.6673186152E12, 520.0], [1.6673186142E12, 380.0], [1.6673186162E12, 240.0], [1.6673186154E12, 440.0], [1.6673186164E12, 490.0], [1.6673186174E12, 550.0], [1.6673186153E12, 600.0], [1.6673186143E12, 510.0], [1.6673186145E12, 450.0], [1.6673186155E12, 490.0], [1.6673186165E12, 710.0], [1.6673186144E12, 540.0], [1.6673186175E12, 440.0], [1.6673186177E12, 350.0], [1.6673186167E12, 450.0], [1.6673186146E12, 620.0], [1.6673186156E12, 640.0], [1.6673186176E12, 340.0], [1.6673186166E12, 390.0], [1.6673186168E12, 570.0], [1.6673186158E12, 500.0], [1.6673186137E12, 160.0], [1.6673186178E12, 230.0], [1.6673186147E12, 580.0], [1.6673186157E12, 500.0], [1.6673186149E12, 620.0], [1.6673186169E12, 550.0], [1.6673186159E12, 540.0], [1.6673186138E12, 50.0], [1.6673186179E12, 60.0], [1.6673186148E12, 480.0], [1.667318614E12, 440.0], [1.667318616E12, 550.0], [1.667318615E12, 570.0], [1.667318617E12, 470.0], [1.6673186139E12, 370.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673186179E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.6673186138E12, "maxY": 740.0, "series": [{"data": [[1.6673186172E12, 420.0], [1.6673186141E12, 480.0], [1.6673186161E12, 740.0], [1.6673186151E12, 480.0], [1.6673186171E12, 530.0], [1.6673186163E12, 480.0], [1.6673186173E12, 490.0], [1.6673186152E12, 520.0], [1.6673186142E12, 340.0], [1.6673186162E12, 230.0], [1.6673186154E12, 440.0], [1.6673186164E12, 490.0], [1.6673186174E12, 600.0], [1.6673186153E12, 600.0], [1.6673186143E12, 450.0], [1.6673186145E12, 440.0], [1.6673186155E12, 490.0], [1.6673186165E12, 710.0], [1.6673186144E12, 520.0], [1.6673186175E12, 480.0], [1.6673186177E12, 490.0], [1.6673186167E12, 450.0], [1.6673186146E12, 620.0], [1.6673186156E12, 640.0], [1.6673186176E12, 440.0], [1.6673186166E12, 390.0], [1.6673186168E12, 570.0], [1.6673186158E12, 500.0], [1.6673186178E12, 310.0], [1.6673186147E12, 580.0], [1.6673186157E12, 500.0], [1.6673186149E12, 620.0], [1.6673186169E12, 550.0], [1.6673186159E12, 550.0], [1.6673186138E12, 200.0], [1.6673186179E12, 90.0], [1.6673186148E12, 480.0], [1.667318614E12, 370.0], [1.667318616E12, 540.0], [1.667318615E12, 570.0], [1.667318617E12, 480.0], [1.6673186139E12, 130.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673186179E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.6673186138E12, "maxY": 740.0, "series": [{"data": [[1.6673186172E12, 420.0], [1.6673186141E12, 480.0], [1.6673186161E12, 740.0], [1.6673186151E12, 480.0], [1.6673186171E12, 530.0], [1.6673186163E12, 480.0], [1.6673186173E12, 490.0], [1.6673186152E12, 520.0], [1.6673186142E12, 340.0], [1.6673186162E12, 230.0], [1.6673186154E12, 440.0], [1.6673186164E12, 490.0], [1.6673186174E12, 600.0], [1.6673186153E12, 600.0], [1.6673186143E12, 450.0], [1.6673186145E12, 440.0], [1.6673186155E12, 490.0], [1.6673186165E12, 710.0], [1.6673186144E12, 520.0], [1.6673186175E12, 480.0], [1.6673186177E12, 490.0], [1.6673186167E12, 450.0], [1.6673186146E12, 620.0], [1.6673186156E12, 640.0], [1.6673186176E12, 440.0], [1.6673186166E12, 390.0], [1.6673186168E12, 570.0], [1.6673186158E12, 500.0], [1.6673186178E12, 310.0], [1.6673186147E12, 580.0], [1.6673186157E12, 500.0], [1.6673186149E12, 620.0], [1.6673186169E12, 550.0], [1.6673186159E12, 550.0], [1.6673186138E12, 200.0], [1.6673186179E12, 90.0], [1.6673186148E12, 480.0], [1.667318614E12, 370.0], [1.667318616E12, 540.0], [1.667318615E12, 570.0], [1.667318617E12, 480.0], [1.6673186139E12, 130.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673186179E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 90.0, "minX": 1.6673186138E12, "maxY": 740.0, "series": [{"data": [[1.6673186172E12, 420.0], [1.6673186141E12, 480.0], [1.6673186161E12, 740.0], [1.6673186151E12, 480.0], [1.6673186171E12, 530.0], [1.6673186163E12, 480.0], [1.6673186173E12, 490.0], [1.6673186152E12, 520.0], [1.6673186142E12, 340.0], [1.6673186162E12, 230.0], [1.6673186154E12, 440.0], [1.6673186164E12, 490.0], [1.6673186174E12, 600.0], [1.6673186153E12, 600.0], [1.6673186143E12, 450.0], [1.6673186145E12, 440.0], [1.6673186155E12, 490.0], [1.6673186165E12, 710.0], [1.6673186144E12, 520.0], [1.6673186175E12, 480.0], [1.6673186177E12, 490.0], [1.6673186167E12, 450.0], [1.6673186146E12, 620.0], [1.6673186156E12, 640.0], [1.6673186176E12, 440.0], [1.6673186166E12, 390.0], [1.6673186168E12, 570.0], [1.6673186158E12, 500.0], [1.6673186178E12, 310.0], [1.6673186147E12, 580.0], [1.6673186157E12, 500.0], [1.6673186149E12, 620.0], [1.6673186169E12, 550.0], [1.6673186159E12, 550.0], [1.6673186138E12, 200.0], [1.6673186179E12, 90.0], [1.6673186148E12, 480.0], [1.667318614E12, 370.0], [1.667318616E12, 540.0], [1.667318615E12, 570.0], [1.667318617E12, 480.0], [1.6673186139E12, 130.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673186179E12, "title": "Total Transactions Per Second"}},
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

