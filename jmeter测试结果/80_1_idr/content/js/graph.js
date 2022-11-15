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
        data: {"result": {"minY": 18.0, "minX": 0.0, "maxY": 345.0, "series": [{"data": [[0.0, 18.0], [0.1, 18.0], [0.2, 18.0], [0.3, 18.0], [0.4, 18.0], [0.5, 18.0], [0.6, 18.0], [0.7, 18.0], [0.8, 18.0], [0.9, 18.0], [1.0, 18.0], [1.1, 18.0], [1.2, 18.0], [1.3, 20.0], [1.4, 20.0], [1.5, 20.0], [1.6, 20.0], [1.7, 20.0], [1.8, 20.0], [1.9, 20.0], [2.0, 20.0], [2.1, 20.0], [2.2, 20.0], [2.3, 20.0], [2.4, 20.0], [2.5, 23.0], [2.6, 23.0], [2.7, 23.0], [2.8, 23.0], [2.9, 23.0], [3.0, 23.0], [3.1, 23.0], [3.2, 23.0], [3.3, 23.0], [3.4, 23.0], [3.5, 23.0], [3.6, 23.0], [3.7, 23.0], [3.8, 25.0], [3.9, 25.0], [4.0, 25.0], [4.1, 25.0], [4.2, 25.0], [4.3, 25.0], [4.4, 25.0], [4.5, 25.0], [4.6, 25.0], [4.7, 25.0], [4.8, 25.0], [4.9, 25.0], [5.0, 29.0], [5.1, 29.0], [5.2, 29.0], [5.3, 29.0], [5.4, 29.0], [5.5, 29.0], [5.6, 29.0], [5.7, 29.0], [5.8, 29.0], [5.9, 29.0], [6.0, 29.0], [6.1, 29.0], [6.2, 29.0], [6.3, 33.0], [6.4, 33.0], [6.5, 33.0], [6.6, 33.0], [6.7, 33.0], [6.8, 33.0], [6.9, 33.0], [7.0, 33.0], [7.1, 33.0], [7.2, 33.0], [7.3, 33.0], [7.4, 33.0], [7.5, 43.0], [7.6, 43.0], [7.7, 43.0], [7.8, 43.0], [7.9, 43.0], [8.0, 43.0], [8.1, 43.0], [8.2, 43.0], [8.3, 43.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 45.0], [8.9, 45.0], [9.0, 45.0], [9.1, 45.0], [9.2, 45.0], [9.3, 45.0], [9.4, 45.0], [9.5, 45.0], [9.6, 45.0], [9.7, 45.0], [9.8, 45.0], [9.9, 45.0], [10.0, 61.0], [10.1, 61.0], [10.2, 61.0], [10.3, 61.0], [10.4, 61.0], [10.5, 61.0], [10.6, 61.0], [10.7, 61.0], [10.8, 61.0], [10.9, 61.0], [11.0, 61.0], [11.1, 61.0], [11.2, 61.0], [11.3, 66.0], [11.4, 66.0], [11.5, 66.0], [11.6, 66.0], [11.7, 66.0], [11.8, 66.0], [11.9, 66.0], [12.0, 66.0], [12.1, 66.0], [12.2, 66.0], [12.3, 66.0], [12.4, 66.0], [12.5, 71.0], [12.6, 71.0], [12.7, 71.0], [12.8, 71.0], [12.9, 71.0], [13.0, 71.0], [13.1, 71.0], [13.2, 71.0], [13.3, 71.0], [13.4, 71.0], [13.5, 71.0], [13.6, 71.0], [13.7, 71.0], [13.8, 75.0], [13.9, 75.0], [14.0, 75.0], [14.1, 75.0], [14.2, 75.0], [14.3, 75.0], [14.4, 75.0], [14.5, 75.0], [14.6, 75.0], [14.7, 75.0], [14.8, 75.0], [14.9, 75.0], [15.0, 78.0], [15.1, 78.0], [15.2, 78.0], [15.3, 78.0], [15.4, 78.0], [15.5, 78.0], [15.6, 78.0], [15.7, 78.0], [15.8, 78.0], [15.9, 78.0], [16.0, 78.0], [16.1, 78.0], [16.2, 78.0], [16.3, 79.0], [16.4, 79.0], [16.5, 79.0], [16.6, 79.0], [16.7, 79.0], [16.8, 79.0], [16.9, 79.0], [17.0, 79.0], [17.1, 79.0], [17.2, 79.0], [17.3, 79.0], [17.4, 79.0], [17.5, 80.0], [17.6, 80.0], [17.7, 80.0], [17.8, 80.0], [17.9, 80.0], [18.0, 80.0], [18.1, 80.0], [18.2, 80.0], [18.3, 80.0], [18.4, 80.0], [18.5, 80.0], [18.6, 80.0], [18.7, 80.0], [18.8, 80.0], [18.9, 80.0], [19.0, 80.0], [19.1, 80.0], [19.2, 80.0], [19.3, 80.0], [19.4, 80.0], [19.5, 80.0], [19.6, 80.0], [19.7, 80.0], [19.8, 80.0], [19.9, 80.0], [20.0, 82.0], [20.1, 82.0], [20.2, 82.0], [20.3, 82.0], [20.4, 82.0], [20.5, 82.0], [20.6, 82.0], [20.7, 82.0], [20.8, 82.0], [20.9, 82.0], [21.0, 82.0], [21.1, 82.0], [21.2, 82.0], [21.3, 86.0], [21.4, 86.0], [21.5, 86.0], [21.6, 86.0], [21.7, 86.0], [21.8, 86.0], [21.9, 86.0], [22.0, 86.0], [22.1, 86.0], [22.2, 86.0], [22.3, 86.0], [22.4, 86.0], [22.5, 92.0], [22.6, 92.0], [22.7, 92.0], [22.8, 92.0], [22.9, 92.0], [23.0, 92.0], [23.1, 92.0], [23.2, 92.0], [23.3, 92.0], [23.4, 92.0], [23.5, 92.0], [23.6, 92.0], [23.7, 92.0], [23.8, 99.0], [23.9, 99.0], [24.0, 99.0], [24.1, 99.0], [24.2, 99.0], [24.3, 99.0], [24.4, 99.0], [24.5, 99.0], [24.6, 99.0], [24.7, 99.0], [24.8, 99.0], [24.9, 99.0], [25.0, 119.0], [25.1, 119.0], [25.2, 119.0], [25.3, 119.0], [25.4, 119.0], [25.5, 119.0], [25.6, 119.0], [25.7, 119.0], [25.8, 119.0], [25.9, 119.0], [26.0, 119.0], [26.1, 119.0], [26.2, 119.0], [26.3, 127.0], [26.4, 127.0], [26.5, 127.0], [26.6, 127.0], [26.7, 127.0], [26.8, 127.0], [26.9, 127.0], [27.0, 127.0], [27.1, 127.0], [27.2, 127.0], [27.3, 127.0], [27.4, 127.0], [27.5, 127.0], [27.6, 127.0], [27.7, 127.0], [27.8, 127.0], [27.9, 127.0], [28.0, 127.0], [28.1, 127.0], [28.2, 127.0], [28.3, 127.0], [28.4, 127.0], [28.5, 127.0], [28.6, 127.0], [28.7, 127.0], [28.8, 133.0], [28.9, 133.0], [29.0, 133.0], [29.1, 133.0], [29.2, 133.0], [29.3, 133.0], [29.4, 133.0], [29.5, 133.0], [29.6, 133.0], [29.7, 133.0], [29.8, 133.0], [29.9, 133.0], [30.0, 133.0], [30.1, 133.0], [30.2, 133.0], [30.3, 133.0], [30.4, 133.0], [30.5, 133.0], [30.6, 133.0], [30.7, 133.0], [30.8, 133.0], [30.9, 133.0], [31.0, 133.0], [31.1, 133.0], [31.2, 133.0], [31.3, 134.0], [31.4, 134.0], [31.5, 134.0], [31.6, 134.0], [31.7, 134.0], [31.8, 134.0], [31.9, 134.0], [32.0, 134.0], [32.1, 134.0], [32.2, 134.0], [32.3, 134.0], [32.4, 134.0], [32.5, 137.0], [32.6, 137.0], [32.7, 137.0], [32.8, 137.0], [32.9, 137.0], [33.0, 137.0], [33.1, 137.0], [33.2, 137.0], [33.3, 137.0], [33.4, 137.0], [33.5, 137.0], [33.6, 137.0], [33.7, 137.0], [33.8, 142.0], [33.9, 142.0], [34.0, 142.0], [34.1, 142.0], [34.2, 142.0], [34.3, 142.0], [34.4, 142.0], [34.5, 142.0], [34.6, 142.0], [34.7, 142.0], [34.8, 142.0], [34.9, 142.0], [35.0, 145.0], [35.1, 145.0], [35.2, 145.0], [35.3, 145.0], [35.4, 145.0], [35.5, 145.0], [35.6, 145.0], [35.7, 145.0], [35.8, 145.0], [35.9, 145.0], [36.0, 145.0], [36.1, 145.0], [36.2, 145.0], [36.3, 146.0], [36.4, 146.0], [36.5, 146.0], [36.6, 146.0], [36.7, 146.0], [36.8, 146.0], [36.9, 146.0], [37.0, 146.0], [37.1, 146.0], [37.2, 146.0], [37.3, 146.0], [37.4, 146.0], [37.5, 146.0], [37.6, 146.0], [37.7, 146.0], [37.8, 146.0], [37.9, 146.0], [38.0, 146.0], [38.1, 146.0], [38.2, 146.0], [38.3, 146.0], [38.4, 146.0], [38.5, 146.0], [38.6, 146.0], [38.7, 146.0], [38.8, 147.0], [38.9, 147.0], [39.0, 147.0], [39.1, 147.0], [39.2, 147.0], [39.3, 147.0], [39.4, 147.0], [39.5, 147.0], [39.6, 147.0], [39.7, 147.0], [39.8, 147.0], [39.9, 147.0], [40.0, 157.0], [40.1, 157.0], [40.2, 157.0], [40.3, 157.0], [40.4, 157.0], [40.5, 157.0], [40.6, 157.0], [40.7, 157.0], [40.8, 157.0], [40.9, 157.0], [41.0, 157.0], [41.1, 157.0], [41.2, 157.0], [41.3, 158.0], [41.4, 158.0], [41.5, 158.0], [41.6, 158.0], [41.7, 158.0], [41.8, 158.0], [41.9, 158.0], [42.0, 158.0], [42.1, 158.0], [42.2, 158.0], [42.3, 158.0], [42.4, 158.0], [42.5, 158.0], [42.6, 158.0], [42.7, 158.0], [42.8, 158.0], [42.9, 158.0], [43.0, 158.0], [43.1, 158.0], [43.2, 158.0], [43.3, 158.0], [43.4, 158.0], [43.5, 158.0], [43.6, 158.0], [43.7, 158.0], [43.8, 162.0], [43.9, 162.0], [44.0, 162.0], [44.1, 162.0], [44.2, 162.0], [44.3, 162.0], [44.4, 162.0], [44.5, 162.0], [44.6, 162.0], [44.7, 162.0], [44.8, 162.0], [44.9, 162.0], [45.0, 162.0], [45.1, 162.0], [45.2, 162.0], [45.3, 162.0], [45.4, 162.0], [45.5, 162.0], [45.6, 162.0], [45.7, 162.0], [45.8, 162.0], [45.9, 162.0], [46.0, 162.0], [46.1, 162.0], [46.2, 162.0], [46.3, 163.0], [46.4, 163.0], [46.5, 163.0], [46.6, 163.0], [46.7, 163.0], [46.8, 163.0], [46.9, 163.0], [47.0, 163.0], [47.1, 163.0], [47.2, 163.0], [47.3, 163.0], [47.4, 163.0], [47.5, 165.0], [47.6, 165.0], [47.7, 165.0], [47.8, 165.0], [47.9, 165.0], [48.0, 165.0], [48.1, 165.0], [48.2, 165.0], [48.3, 165.0], [48.4, 165.0], [48.5, 165.0], [48.6, 165.0], [48.7, 165.0], [48.8, 168.0], [48.9, 168.0], [49.0, 168.0], [49.1, 168.0], [49.2, 168.0], [49.3, 168.0], [49.4, 168.0], [49.5, 168.0], [49.6, 168.0], [49.7, 168.0], [49.8, 168.0], [49.9, 168.0], [50.0, 172.0], [50.1, 172.0], [50.2, 172.0], [50.3, 172.0], [50.4, 172.0], [50.5, 172.0], [50.6, 172.0], [50.7, 172.0], [50.8, 172.0], [50.9, 172.0], [51.0, 172.0], [51.1, 172.0], [51.2, 172.0], [51.3, 173.0], [51.4, 173.0], [51.5, 173.0], [51.6, 173.0], [51.7, 173.0], [51.8, 173.0], [51.9, 173.0], [52.0, 173.0], [52.1, 173.0], [52.2, 173.0], [52.3, 173.0], [52.4, 173.0], [52.5, 178.0], [52.6, 178.0], [52.7, 178.0], [52.8, 178.0], [52.9, 178.0], [53.0, 178.0], [53.1, 178.0], [53.2, 178.0], [53.3, 178.0], [53.4, 178.0], [53.5, 178.0], [53.6, 178.0], [53.7, 178.0], [53.8, 179.0], [53.9, 179.0], [54.0, 179.0], [54.1, 179.0], [54.2, 179.0], [54.3, 179.0], [54.4, 179.0], [54.5, 179.0], [54.6, 179.0], [54.7, 179.0], [54.8, 179.0], [54.9, 179.0], [55.0, 180.0], [55.1, 180.0], [55.2, 180.0], [55.3, 180.0], [55.4, 180.0], [55.5, 180.0], [55.6, 180.0], [55.7, 180.0], [55.8, 180.0], [55.9, 180.0], [56.0, 180.0], [56.1, 180.0], [56.2, 180.0], [56.3, 189.0], [56.4, 189.0], [56.5, 189.0], [56.6, 189.0], [56.7, 189.0], [56.8, 189.0], [56.9, 189.0], [57.0, 189.0], [57.1, 189.0], [57.2, 189.0], [57.3, 189.0], [57.4, 189.0], [57.5, 192.0], [57.6, 192.0], [57.7, 192.0], [57.8, 192.0], [57.9, 192.0], [58.0, 192.0], [58.1, 192.0], [58.2, 192.0], [58.3, 192.0], [58.4, 192.0], [58.5, 192.0], [58.6, 192.0], [58.7, 192.0], [58.8, 192.0], [58.9, 192.0], [59.0, 192.0], [59.1, 192.0], [59.2, 192.0], [59.3, 192.0], [59.4, 192.0], [59.5, 192.0], [59.6, 192.0], [59.7, 192.0], [59.8, 192.0], [59.9, 192.0], [60.0, 201.0], [60.1, 201.0], [60.2, 201.0], [60.3, 201.0], [60.4, 201.0], [60.5, 201.0], [60.6, 201.0], [60.7, 201.0], [60.8, 201.0], [60.9, 201.0], [61.0, 201.0], [61.1, 201.0], [61.2, 201.0], [61.3, 201.0], [61.4, 201.0], [61.5, 201.0], [61.6, 201.0], [61.7, 201.0], [61.8, 201.0], [61.9, 201.0], [62.0, 201.0], [62.1, 201.0], [62.2, 201.0], [62.3, 201.0], [62.4, 201.0], [62.5, 207.0], [62.6, 207.0], [62.7, 207.0], [62.8, 207.0], [62.9, 207.0], [63.0, 207.0], [63.1, 207.0], [63.2, 207.0], [63.3, 207.0], [63.4, 207.0], [63.5, 207.0], [63.6, 207.0], [63.7, 207.0], [63.8, 208.0], [63.9, 208.0], [64.0, 208.0], [64.1, 208.0], [64.2, 208.0], [64.3, 208.0], [64.4, 208.0], [64.5, 208.0], [64.6, 208.0], [64.7, 208.0], [64.8, 208.0], [64.9, 208.0], [65.0, 211.0], [65.1, 211.0], [65.2, 211.0], [65.3, 211.0], [65.4, 211.0], [65.5, 211.0], [65.6, 211.0], [65.7, 211.0], [65.8, 211.0], [65.9, 211.0], [66.0, 211.0], [66.1, 211.0], [66.2, 211.0], [66.3, 212.0], [66.4, 212.0], [66.5, 212.0], [66.6, 212.0], [66.7, 212.0], [66.8, 212.0], [66.9, 212.0], [67.0, 212.0], [67.1, 212.0], [67.2, 212.0], [67.3, 212.0], [67.4, 212.0], [67.5, 231.0], [67.6, 231.0], [67.7, 231.0], [67.8, 231.0], [67.9, 231.0], [68.0, 231.0], [68.1, 231.0], [68.2, 231.0], [68.3, 231.0], [68.4, 231.0], [68.5, 231.0], [68.6, 231.0], [68.7, 231.0], [68.8, 232.0], [68.9, 232.0], [69.0, 232.0], [69.1, 232.0], [69.2, 232.0], [69.3, 232.0], [69.4, 232.0], [69.5, 232.0], [69.6, 232.0], [69.7, 232.0], [69.8, 232.0], [69.9, 232.0], [70.0, 233.0], [70.1, 233.0], [70.2, 233.0], [70.3, 233.0], [70.4, 233.0], [70.5, 233.0], [70.6, 233.0], [70.7, 233.0], [70.8, 233.0], [70.9, 233.0], [71.0, 233.0], [71.1, 233.0], [71.2, 233.0], [71.3, 233.0], [71.4, 233.0], [71.5, 233.0], [71.6, 233.0], [71.7, 233.0], [71.8, 233.0], [71.9, 233.0], [72.0, 233.0], [72.1, 233.0], [72.2, 233.0], [72.3, 233.0], [72.4, 233.0], [72.5, 236.0], [72.6, 236.0], [72.7, 236.0], [72.8, 236.0], [72.9, 236.0], [73.0, 236.0], [73.1, 236.0], [73.2, 236.0], [73.3, 236.0], [73.4, 236.0], [73.5, 236.0], [73.6, 236.0], [73.7, 236.0], [73.8, 236.0], [73.9, 236.0], [74.0, 236.0], [74.1, 236.0], [74.2, 236.0], [74.3, 236.0], [74.4, 236.0], [74.5, 236.0], [74.6, 236.0], [74.7, 236.0], [74.8, 236.0], [74.9, 236.0], [75.0, 236.0], [75.1, 236.0], [75.2, 236.0], [75.3, 236.0], [75.4, 236.0], [75.5, 236.0], [75.6, 236.0], [75.7, 236.0], [75.8, 236.0], [75.9, 236.0], [76.0, 236.0], [76.1, 236.0], [76.2, 236.0], [76.3, 239.0], [76.4, 239.0], [76.5, 239.0], [76.6, 239.0], [76.7, 239.0], [76.8, 239.0], [76.9, 239.0], [77.0, 239.0], [77.1, 239.0], [77.2, 239.0], [77.3, 239.0], [77.4, 239.0], [77.5, 243.0], [77.6, 243.0], [77.7, 243.0], [77.8, 243.0], [77.9, 243.0], [78.0, 243.0], [78.1, 243.0], [78.2, 243.0], [78.3, 243.0], [78.4, 243.0], [78.5, 243.0], [78.6, 243.0], [78.7, 243.0], [78.8, 248.0], [78.9, 248.0], [79.0, 248.0], [79.1, 248.0], [79.2, 248.0], [79.3, 248.0], [79.4, 248.0], [79.5, 248.0], [79.6, 248.0], [79.7, 248.0], [79.8, 248.0], [79.9, 248.0], [80.0, 254.0], [80.1, 254.0], [80.2, 254.0], [80.3, 254.0], [80.4, 254.0], [80.5, 254.0], [80.6, 254.0], [80.7, 254.0], [80.8, 254.0], [80.9, 254.0], [81.0, 254.0], [81.1, 254.0], [81.2, 254.0], [81.3, 259.0], [81.4, 259.0], [81.5, 259.0], [81.6, 259.0], [81.7, 259.0], [81.8, 259.0], [81.9, 259.0], [82.0, 259.0], [82.1, 259.0], [82.2, 259.0], [82.3, 259.0], [82.4, 259.0], [82.5, 260.0], [82.6, 260.0], [82.7, 260.0], [82.8, 260.0], [82.9, 260.0], [83.0, 260.0], [83.1, 260.0], [83.2, 260.0], [83.3, 260.0], [83.4, 260.0], [83.5, 260.0], [83.6, 260.0], [83.7, 260.0], [83.8, 268.0], [83.9, 268.0], [84.0, 268.0], [84.1, 268.0], [84.2, 268.0], [84.3, 268.0], [84.4, 268.0], [84.5, 268.0], [84.6, 268.0], [84.7, 268.0], [84.8, 268.0], [84.9, 268.0], [85.0, 270.0], [85.1, 270.0], [85.2, 270.0], [85.3, 270.0], [85.4, 270.0], [85.5, 270.0], [85.6, 270.0], [85.7, 270.0], [85.8, 270.0], [85.9, 270.0], [86.0, 270.0], [86.1, 270.0], [86.2, 270.0], [86.3, 276.0], [86.4, 276.0], [86.5, 276.0], [86.6, 276.0], [86.7, 276.0], [86.8, 276.0], [86.9, 276.0], [87.0, 276.0], [87.1, 276.0], [87.2, 276.0], [87.3, 276.0], [87.4, 276.0], [87.5, 285.0], [87.6, 285.0], [87.7, 285.0], [87.8, 285.0], [87.9, 285.0], [88.0, 285.0], [88.1, 285.0], [88.2, 285.0], [88.3, 285.0], [88.4, 285.0], [88.5, 285.0], [88.6, 285.0], [88.7, 285.0], [88.8, 297.0], [88.9, 297.0], [89.0, 297.0], [89.1, 297.0], [89.2, 297.0], [89.3, 297.0], [89.4, 297.0], [89.5, 297.0], [89.6, 297.0], [89.7, 297.0], [89.8, 297.0], [89.9, 297.0], [90.0, 298.0], [90.1, 298.0], [90.2, 298.0], [90.3, 298.0], [90.4, 298.0], [90.5, 298.0], [90.6, 298.0], [90.7, 298.0], [90.8, 298.0], [90.9, 298.0], [91.0, 298.0], [91.1, 298.0], [91.2, 298.0], [91.3, 300.0], [91.4, 300.0], [91.5, 300.0], [91.6, 300.0], [91.7, 300.0], [91.8, 300.0], [91.9, 300.0], [92.0, 300.0], [92.1, 300.0], [92.2, 300.0], [92.3, 300.0], [92.4, 300.0], [92.5, 301.0], [92.6, 301.0], [92.7, 301.0], [92.8, 301.0], [92.9, 301.0], [93.0, 301.0], [93.1, 301.0], [93.2, 301.0], [93.3, 301.0], [93.4, 301.0], [93.5, 301.0], [93.6, 301.0], [93.7, 301.0], [93.8, 325.0], [93.9, 325.0], [94.0, 325.0], [94.1, 325.0], [94.2, 325.0], [94.3, 325.0], [94.4, 325.0], [94.5, 325.0], [94.6, 325.0], [94.7, 325.0], [94.8, 325.0], [94.9, 325.0], [95.0, 336.0], [95.1, 336.0], [95.2, 336.0], [95.3, 336.0], [95.4, 336.0], [95.5, 336.0], [95.6, 336.0], [95.7, 336.0], [95.8, 336.0], [95.9, 336.0], [96.0, 336.0], [96.1, 336.0], [96.2, 336.0], [96.3, 343.0], [96.4, 343.0], [96.5, 343.0], [96.6, 343.0], [96.7, 343.0], [96.8, 343.0], [96.9, 343.0], [97.0, 343.0], [97.1, 343.0], [97.2, 343.0], [97.3, 343.0], [97.4, 343.0], [97.5, 345.0], [97.6, 345.0], [97.7, 345.0], [97.8, 345.0], [97.9, 345.0], [98.0, 345.0], [98.1, 345.0], [98.2, 345.0], [98.3, 345.0], [98.4, 345.0], [98.5, 345.0], [98.6, 345.0], [98.7, 345.0], [98.8, 345.0], [98.9, 345.0], [99.0, 345.0], [99.1, 345.0], [99.2, 345.0], [99.3, 345.0], [99.4, 345.0], [99.5, 345.0], [99.6, 345.0], [99.7, 345.0], [99.8, 345.0], [99.9, 345.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 7.0, "minX": 0.0, "maxY": 28.0, "series": [{"data": [[0.0, 20.0], [300.0, 7.0], [100.0, 28.0], [200.0, 25.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 80.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 80.0, "series": [{"data": [[0.0, 80.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.2142857142857135, "minX": 1.6677195493E12, "maxY": 35.0, "series": [{"data": [[1.6677195493E12, 35.0], [1.6677195498E12, 5.2142857142857135], [1.6677195497E12, 12.555555555555554], [1.6677195495E12, 24.25], [1.6677195494E12, 31.857142857142858], [1.6677195496E12, 20.615384615384617]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195498E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.0, "maxY": 307.5, "series": [{"data": [[33.0, 211.0], [32.0, 179.5], [2.0, 20.0], [35.0, 152.28571428571428], [34.0, 208.0], [36.0, 178.0], [3.0, 66.0], [4.0, 25.0], [5.0, 43.5], [6.0, 62.5], [7.0, 105.5], [8.0, 112.5], [9.0, 113.0], [10.0, 168.0], [12.0, 133.33333333333334], [13.0, 102.66666666666667], [14.0, 79.0], [15.0, 172.66666666666666], [16.0, 246.5], [1.0, 23.0], [17.0, 228.0], [18.0, 86.0], [19.0, 209.0], [20.0, 233.0], [21.0, 307.5], [22.0, 281.5], [23.0, 249.0], [24.0, 147.0], [25.0, 249.33333333333334], [26.0, 235.5], [27.0, 169.0], [28.0, 248.0], [29.0, 251.0], [30.0, 236.0], [31.0, 205.66666666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[19.700000000000006, 174.22500000000005]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 36.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 23950.0, "minX": 1.6677195493E12, "maxY": 161260.0, "series": [{"data": [[1.6677195493E12, 45060.0], [1.6677195498E12, 127840.0], [1.6677195497E12, 161260.0], [1.6677195495E12, 143180.0], [1.6677195494E12, 124610.0], [1.6677195496E12, 111770.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6677195493E12, 23950.0], [1.6677195498E12, 67060.0], [1.6677195497E12, 86220.0], [1.6677195495E12, 76640.0], [1.6677195494E12, 67060.0], [1.6677195496E12, 62270.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195498E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 52.0, "minX": 1.6677195493E12, "maxY": 261.25, "series": [{"data": [[1.6677195493E12, 134.6], [1.6677195498E12, 52.0], [1.6677195497E12, 152.1111111111111], [1.6677195495E12, 261.25], [1.6677195494E12, 210.85714285714286], [1.6677195496E12, 205.15384615384616]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195498E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 51.64285714285715, "minX": 1.6677195493E12, "maxY": 261.125, "series": [{"data": [[1.6677195493E12, 127.8], [1.6677195498E12, 51.64285714285715], [1.6677195497E12, 152.05555555555557], [1.6677195495E12, 261.125], [1.6677195494E12, 209.78571428571428], [1.6677195496E12, 205.07692307692307]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195498E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.2142857142857142, "minX": 1.6677195493E12, "maxY": 35.2, "series": [{"data": [[1.6677195493E12, 35.2], [1.6677195498E12, 1.2142857142857142], [1.6677195497E12, 1.8888888888888886], [1.6677195495E12, 19.187500000000004], [1.6677195494E12, 29.785714285714285], [1.6677195496E12, 1.3846153846153846]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195498E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 18.0, "minX": 1.6677195493E12, "maxY": 345.0, "series": [{"data": [[1.6677195493E12, 142.0], [1.6677195498E12, 99.0], [1.6677195497E12, 301.0], [1.6677195495E12, 345.0], [1.6677195494E12, 259.0], [1.6677195496E12, 276.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6677195493E12, 142.0], [1.6677195498E12, 95.5], [1.6677195497E12, 258.70000000000005], [1.6677195495E12, 345.0], [1.6677195494E12, 253.5], [1.6677195496E12, 273.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6677195493E12, 142.0], [1.6677195498E12, 99.0], [1.6677195497E12, 301.0], [1.6677195495E12, 345.0], [1.6677195494E12, 259.0], [1.6677195496E12, 276.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6677195493E12, 142.0], [1.6677195498E12, 99.0], [1.6677195497E12, 301.0], [1.6677195495E12, 345.0], [1.6677195494E12, 259.0], [1.6677195496E12, 276.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6677195493E12, 127.0], [1.6677195498E12, 18.0], [1.6677195497E12, 61.0], [1.6677195495E12, 162.0], [1.6677195494E12, 158.0], [1.6677195496E12, 86.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6677195493E12, 134.0], [1.6677195498E12, 44.0], [1.6677195497E12, 145.5], [1.6677195495E12, 291.0], [1.6677195494E12, 207.5], [1.6677195496E12, 233.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195498E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 170.0, "minX": 80.0, "maxY": 170.0, "series": [{"data": [[80.0, 170.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 170.0, "minX": 80.0, "maxY": 170.0, "series": [{"data": [[80.0, 170.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 80.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 80.0, "minX": 1.6677195492E12, "maxY": 290.0, "series": [{"data": [[1.6677195493E12, 80.0], [1.6677195498E12, 80.0], [1.6677195492E12, 290.0], [1.6677195497E12, 80.0], [1.6677195495E12, 90.0], [1.6677195494E12, 90.0], [1.6677195496E12, 90.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195498E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.6677195493E12, "maxY": 180.0, "series": [{"data": [[1.6677195493E12, 50.0], [1.6677195498E12, 140.0], [1.6677195497E12, 180.0], [1.6677195495E12, 160.0], [1.6677195494E12, 140.0], [1.6677195496E12, 130.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195498E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.6677195493E12, "maxY": 180.0, "series": [{"data": [[1.6677195493E12, 50.0], [1.6677195498E12, 140.0], [1.6677195497E12, 180.0], [1.6677195495E12, 160.0], [1.6677195494E12, 140.0], [1.6677195496E12, 130.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195498E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.6677195493E12, "maxY": 180.0, "series": [{"data": [[1.6677195493E12, 50.0], [1.6677195498E12, 140.0], [1.6677195497E12, 180.0], [1.6677195495E12, 160.0], [1.6677195494E12, 140.0], [1.6677195496E12, 130.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195498E12, "title": "Total Transactions Per Second"}},
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

