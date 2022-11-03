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
        data: {"result": {"minY": 12.0, "minX": 0.0, "maxY": 1098.0, "series": [{"data": [[0.0, 12.0], [0.1, 13.0], [0.2, 13.0], [0.3, 14.0], [0.4, 15.0], [0.5, 15.0], [0.6, 15.0], [0.7, 16.0], [0.8, 18.0], [0.9, 19.0], [1.0, 21.0], [1.1, 21.0], [1.2, 22.0], [1.3, 25.0], [1.4, 26.0], [1.5, 29.0], [1.6, 30.0], [1.7, 32.0], [1.8, 33.0], [1.9, 34.0], [2.0, 35.0], [2.1, 36.0], [2.2, 37.0], [2.3, 38.0], [2.4, 40.0], [2.5, 41.0], [2.6, 42.0], [2.7, 42.0], [2.8, 43.0], [2.9, 46.0], [3.0, 47.0], [3.1, 47.0], [3.2, 51.0], [3.3, 51.0], [3.4, 53.0], [3.5, 53.0], [3.6, 55.0], [3.7, 55.0], [3.8, 56.0], [3.9, 57.0], [4.0, 60.0], [4.1, 61.0], [4.2, 62.0], [4.3, 62.0], [4.4, 62.0], [4.5, 64.0], [4.6, 64.0], [4.7, 65.0], [4.8, 66.0], [4.9, 66.0], [5.0, 67.0], [5.1, 67.0], [5.2, 68.0], [5.3, 69.0], [5.4, 69.0], [5.5, 70.0], [5.6, 70.0], [5.7, 70.0], [5.8, 70.0], [5.9, 71.0], [6.0, 71.0], [6.1, 71.0], [6.2, 72.0], [6.3, 72.0], [6.4, 72.0], [6.5, 73.0], [6.6, 73.0], [6.7, 74.0], [6.8, 75.0], [6.9, 75.0], [7.0, 76.0], [7.1, 76.0], [7.2, 76.0], [7.3, 77.0], [7.4, 78.0], [7.5, 78.0], [7.6, 78.0], [7.7, 78.0], [7.8, 78.0], [7.9, 79.0], [8.0, 79.0], [8.1, 80.0], [8.2, 80.0], [8.3, 81.0], [8.4, 81.0], [8.5, 81.0], [8.6, 82.0], [8.7, 83.0], [8.8, 83.0], [8.9, 83.0], [9.0, 84.0], [9.1, 84.0], [9.2, 85.0], [9.3, 86.0], [9.4, 86.0], [9.5, 86.0], [9.6, 87.0], [9.7, 87.0], [9.8, 87.0], [9.9, 87.0], [10.0, 88.0], [10.1, 88.0], [10.2, 89.0], [10.3, 89.0], [10.4, 89.0], [10.5, 89.0], [10.6, 90.0], [10.7, 90.0], [10.8, 90.0], [10.9, 91.0], [11.0, 92.0], [11.1, 92.0], [11.2, 93.0], [11.3, 93.0], [11.4, 93.0], [11.5, 93.0], [11.6, 93.0], [11.7, 94.0], [11.8, 94.0], [11.9, 94.0], [12.0, 94.0], [12.1, 94.0], [12.2, 94.0], [12.3, 95.0], [12.4, 95.0], [12.5, 95.0], [12.6, 95.0], [12.7, 96.0], [12.8, 96.0], [12.9, 96.0], [13.0, 97.0], [13.1, 97.0], [13.2, 97.0], [13.3, 97.0], [13.4, 98.0], [13.5, 98.0], [13.6, 98.0], [13.7, 98.0], [13.8, 98.0], [13.9, 98.0], [14.0, 98.0], [14.1, 98.0], [14.2, 98.0], [14.3, 99.0], [14.4, 99.0], [14.5, 99.0], [14.6, 99.0], [14.7, 99.0], [14.8, 99.0], [14.9, 100.0], [15.0, 100.0], [15.1, 100.0], [15.2, 100.0], [15.3, 100.0], [15.4, 100.0], [15.5, 101.0], [15.6, 101.0], [15.7, 101.0], [15.8, 102.0], [15.9, 102.0], [16.0, 102.0], [16.1, 102.0], [16.2, 102.0], [16.3, 102.0], [16.4, 102.0], [16.5, 103.0], [16.6, 103.0], [16.7, 103.0], [16.8, 103.0], [16.9, 103.0], [17.0, 103.0], [17.1, 104.0], [17.2, 104.0], [17.3, 104.0], [17.4, 104.0], [17.5, 104.0], [17.6, 105.0], [17.7, 105.0], [17.8, 105.0], [17.9, 105.0], [18.0, 106.0], [18.1, 106.0], [18.2, 106.0], [18.3, 107.0], [18.4, 107.0], [18.5, 107.0], [18.6, 107.0], [18.7, 107.0], [18.8, 107.0], [18.9, 107.0], [19.0, 107.0], [19.1, 108.0], [19.2, 108.0], [19.3, 108.0], [19.4, 108.0], [19.5, 109.0], [19.6, 109.0], [19.7, 109.0], [19.8, 109.0], [19.9, 109.0], [20.0, 109.0], [20.1, 109.0], [20.2, 109.0], [20.3, 110.0], [20.4, 110.0], [20.5, 110.0], [20.6, 110.0], [20.7, 110.0], [20.8, 111.0], [20.9, 111.0], [21.0, 111.0], [21.1, 111.0], [21.2, 111.0], [21.3, 111.0], [21.4, 112.0], [21.5, 112.0], [21.6, 112.0], [21.7, 112.0], [21.8, 112.0], [21.9, 112.0], [22.0, 113.0], [22.1, 113.0], [22.2, 113.0], [22.3, 113.0], [22.4, 113.0], [22.5, 113.0], [22.6, 114.0], [22.7, 114.0], [22.8, 114.0], [22.9, 115.0], [23.0, 115.0], [23.1, 116.0], [23.2, 116.0], [23.3, 116.0], [23.4, 116.0], [23.5, 116.0], [23.6, 117.0], [23.7, 117.0], [23.8, 117.0], [23.9, 118.0], [24.0, 118.0], [24.1, 118.0], [24.2, 118.0], [24.3, 118.0], [24.4, 119.0], [24.5, 119.0], [24.6, 119.0], [24.7, 119.0], [24.8, 119.0], [24.9, 119.0], [25.0, 119.0], [25.1, 120.0], [25.2, 120.0], [25.3, 120.0], [25.4, 120.0], [25.5, 121.0], [25.6, 121.0], [25.7, 121.0], [25.8, 121.0], [25.9, 121.0], [26.0, 122.0], [26.1, 122.0], [26.2, 122.0], [26.3, 122.0], [26.4, 122.0], [26.5, 123.0], [26.6, 123.0], [26.7, 123.0], [26.8, 123.0], [26.9, 123.0], [27.0, 123.0], [27.1, 123.0], [27.2, 123.0], [27.3, 124.0], [27.4, 124.0], [27.5, 124.0], [27.6, 124.0], [27.7, 124.0], [27.8, 124.0], [27.9, 124.0], [28.0, 125.0], [28.1, 125.0], [28.2, 125.0], [28.3, 125.0], [28.4, 125.0], [28.5, 125.0], [28.6, 125.0], [28.7, 125.0], [28.8, 125.0], [28.9, 125.0], [29.0, 126.0], [29.1, 126.0], [29.2, 127.0], [29.3, 127.0], [29.4, 127.0], [29.5, 127.0], [29.6, 127.0], [29.7, 127.0], [29.8, 127.0], [29.9, 127.0], [30.0, 128.0], [30.1, 128.0], [30.2, 128.0], [30.3, 128.0], [30.4, 129.0], [30.5, 129.0], [30.6, 129.0], [30.7, 129.0], [30.8, 129.0], [30.9, 129.0], [31.0, 130.0], [31.1, 130.0], [31.2, 131.0], [31.3, 131.0], [31.4, 131.0], [31.5, 131.0], [31.6, 131.0], [31.7, 131.0], [31.8, 131.0], [31.9, 131.0], [32.0, 132.0], [32.1, 132.0], [32.2, 132.0], [32.3, 132.0], [32.4, 133.0], [32.5, 133.0], [32.6, 133.0], [32.7, 133.0], [32.8, 133.0], [32.9, 134.0], [33.0, 134.0], [33.1, 134.0], [33.2, 134.0], [33.3, 134.0], [33.4, 135.0], [33.5, 135.0], [33.6, 135.0], [33.7, 135.0], [33.8, 135.0], [33.9, 135.0], [34.0, 136.0], [34.1, 136.0], [34.2, 136.0], [34.3, 136.0], [34.4, 136.0], [34.5, 137.0], [34.6, 137.0], [34.7, 137.0], [34.8, 137.0], [34.9, 137.0], [35.0, 138.0], [35.1, 138.0], [35.2, 138.0], [35.3, 138.0], [35.4, 138.0], [35.5, 139.0], [35.6, 139.0], [35.7, 139.0], [35.8, 139.0], [35.9, 139.0], [36.0, 139.0], [36.1, 139.0], [36.2, 140.0], [36.3, 140.0], [36.4, 140.0], [36.5, 140.0], [36.6, 140.0], [36.7, 140.0], [36.8, 140.0], [36.9, 140.0], [37.0, 141.0], [37.1, 141.0], [37.2, 141.0], [37.3, 141.0], [37.4, 141.0], [37.5, 141.0], [37.6, 141.0], [37.7, 141.0], [37.8, 142.0], [37.9, 142.0], [38.0, 142.0], [38.1, 142.0], [38.2, 142.0], [38.3, 142.0], [38.4, 142.0], [38.5, 143.0], [38.6, 143.0], [38.7, 143.0], [38.8, 143.0], [38.9, 143.0], [39.0, 143.0], [39.1, 143.0], [39.2, 144.0], [39.3, 144.0], [39.4, 144.0], [39.5, 144.0], [39.6, 144.0], [39.7, 145.0], [39.8, 145.0], [39.9, 145.0], [40.0, 145.0], [40.1, 145.0], [40.2, 145.0], [40.3, 145.0], [40.4, 145.0], [40.5, 146.0], [40.6, 146.0], [40.7, 146.0], [40.8, 146.0], [40.9, 146.0], [41.0, 146.0], [41.1, 147.0], [41.2, 147.0], [41.3, 147.0], [41.4, 147.0], [41.5, 147.0], [41.6, 148.0], [41.7, 148.0], [41.8, 148.0], [41.9, 148.0], [42.0, 148.0], [42.1, 148.0], [42.2, 148.0], [42.3, 148.0], [42.4, 148.0], [42.5, 148.0], [42.6, 149.0], [42.7, 149.0], [42.8, 149.0], [42.9, 149.0], [43.0, 149.0], [43.1, 150.0], [43.2, 150.0], [43.3, 150.0], [43.4, 150.0], [43.5, 150.0], [43.6, 150.0], [43.7, 150.0], [43.8, 150.0], [43.9, 151.0], [44.0, 151.0], [44.1, 151.0], [44.2, 151.0], [44.3, 151.0], [44.4, 151.0], [44.5, 152.0], [44.6, 152.0], [44.7, 152.0], [44.8, 152.0], [44.9, 152.0], [45.0, 152.0], [45.1, 153.0], [45.2, 153.0], [45.3, 153.0], [45.4, 153.0], [45.5, 154.0], [45.6, 154.0], [45.7, 154.0], [45.8, 154.0], [45.9, 155.0], [46.0, 155.0], [46.1, 155.0], [46.2, 155.0], [46.3, 156.0], [46.4, 156.0], [46.5, 157.0], [46.6, 157.0], [46.7, 157.0], [46.8, 157.0], [46.9, 157.0], [47.0, 157.0], [47.1, 158.0], [47.2, 158.0], [47.3, 158.0], [47.4, 159.0], [47.5, 159.0], [47.6, 159.0], [47.7, 159.0], [47.8, 159.0], [47.9, 159.0], [48.0, 160.0], [48.1, 160.0], [48.2, 160.0], [48.3, 160.0], [48.4, 160.0], [48.5, 161.0], [48.6, 161.0], [48.7, 161.0], [48.8, 161.0], [48.9, 161.0], [49.0, 162.0], [49.1, 162.0], [49.2, 162.0], [49.3, 162.0], [49.4, 162.0], [49.5, 163.0], [49.6, 163.0], [49.7, 163.0], [49.8, 163.0], [49.9, 163.0], [50.0, 164.0], [50.1, 164.0], [50.2, 164.0], [50.3, 164.0], [50.4, 165.0], [50.5, 165.0], [50.6, 165.0], [50.7, 165.0], [50.8, 165.0], [50.9, 165.0], [51.0, 166.0], [51.1, 166.0], [51.2, 166.0], [51.3, 166.0], [51.4, 166.0], [51.5, 166.0], [51.6, 166.0], [51.7, 167.0], [51.8, 167.0], [51.9, 167.0], [52.0, 168.0], [52.1, 168.0], [52.2, 168.0], [52.3, 168.0], [52.4, 168.0], [52.5, 168.0], [52.6, 169.0], [52.7, 169.0], [52.8, 169.0], [52.9, 169.0], [53.0, 169.0], [53.1, 169.0], [53.2, 169.0], [53.3, 170.0], [53.4, 170.0], [53.5, 170.0], [53.6, 170.0], [53.7, 170.0], [53.8, 171.0], [53.9, 171.0], [54.0, 171.0], [54.1, 171.0], [54.2, 171.0], [54.3, 171.0], [54.4, 172.0], [54.5, 172.0], [54.6, 172.0], [54.7, 172.0], [54.8, 173.0], [54.9, 173.0], [55.0, 173.0], [55.1, 173.0], [55.2, 173.0], [55.3, 173.0], [55.4, 174.0], [55.5, 174.0], [55.6, 174.0], [55.7, 174.0], [55.8, 174.0], [55.9, 174.0], [56.0, 174.0], [56.1, 174.0], [56.2, 175.0], [56.3, 175.0], [56.4, 175.0], [56.5, 175.0], [56.6, 175.0], [56.7, 176.0], [56.8, 176.0], [56.9, 176.0], [57.0, 176.0], [57.1, 176.0], [57.2, 177.0], [57.3, 177.0], [57.4, 177.0], [57.5, 177.0], [57.6, 178.0], [57.7, 178.0], [57.8, 178.0], [57.9, 179.0], [58.0, 179.0], [58.1, 179.0], [58.2, 179.0], [58.3, 179.0], [58.4, 179.0], [58.5, 179.0], [58.6, 180.0], [58.7, 180.0], [58.8, 180.0], [58.9, 180.0], [59.0, 180.0], [59.1, 181.0], [59.2, 181.0], [59.3, 181.0], [59.4, 181.0], [59.5, 181.0], [59.6, 181.0], [59.7, 182.0], [59.8, 182.0], [59.9, 182.0], [60.0, 182.0], [60.1, 183.0], [60.2, 183.0], [60.3, 183.0], [60.4, 183.0], [60.5, 183.0], [60.6, 184.0], [60.7, 184.0], [60.8, 184.0], [60.9, 184.0], [61.0, 184.0], [61.1, 185.0], [61.2, 185.0], [61.3, 185.0], [61.4, 185.0], [61.5, 186.0], [61.6, 186.0], [61.7, 186.0], [61.8, 186.0], [61.9, 186.0], [62.0, 187.0], [62.1, 187.0], [62.2, 187.0], [62.3, 187.0], [62.4, 187.0], [62.5, 188.0], [62.6, 188.0], [62.7, 188.0], [62.8, 189.0], [62.9, 189.0], [63.0, 189.0], [63.1, 189.0], [63.2, 189.0], [63.3, 190.0], [63.4, 191.0], [63.5, 191.0], [63.6, 191.0], [63.7, 191.0], [63.8, 191.0], [63.9, 192.0], [64.0, 192.0], [64.1, 192.0], [64.2, 193.0], [64.3, 193.0], [64.4, 194.0], [64.5, 194.0], [64.6, 194.0], [64.7, 195.0], [64.8, 195.0], [64.9, 195.0], [65.0, 196.0], [65.1, 196.0], [65.2, 196.0], [65.3, 196.0], [65.4, 196.0], [65.5, 196.0], [65.6, 197.0], [65.7, 197.0], [65.8, 197.0], [65.9, 198.0], [66.0, 198.0], [66.1, 199.0], [66.2, 199.0], [66.3, 200.0], [66.4, 200.0], [66.5, 200.0], [66.6, 200.0], [66.7, 200.0], [66.8, 200.0], [66.9, 201.0], [67.0, 201.0], [67.1, 201.0], [67.2, 201.0], [67.3, 201.0], [67.4, 202.0], [67.5, 202.0], [67.6, 202.0], [67.7, 202.0], [67.8, 203.0], [67.9, 204.0], [68.0, 204.0], [68.1, 204.0], [68.2, 205.0], [68.3, 205.0], [68.4, 206.0], [68.5, 207.0], [68.6, 207.0], [68.7, 207.0], [68.8, 208.0], [68.9, 208.0], [69.0, 208.0], [69.1, 208.0], [69.2, 209.0], [69.3, 209.0], [69.4, 210.0], [69.5, 210.0], [69.6, 211.0], [69.7, 211.0], [69.8, 212.0], [69.9, 212.0], [70.0, 212.0], [70.1, 212.0], [70.2, 213.0], [70.3, 213.0], [70.4, 213.0], [70.5, 213.0], [70.6, 213.0], [70.7, 214.0], [70.8, 214.0], [70.9, 215.0], [71.0, 215.0], [71.1, 215.0], [71.2, 215.0], [71.3, 216.0], [71.4, 216.0], [71.5, 216.0], [71.6, 216.0], [71.7, 216.0], [71.8, 217.0], [71.9, 218.0], [72.0, 218.0], [72.1, 218.0], [72.2, 219.0], [72.3, 220.0], [72.4, 220.0], [72.5, 220.0], [72.6, 220.0], [72.7, 221.0], [72.8, 221.0], [72.9, 221.0], [73.0, 222.0], [73.1, 222.0], [73.2, 223.0], [73.3, 223.0], [73.4, 224.0], [73.5, 224.0], [73.6, 224.0], [73.7, 225.0], [73.8, 225.0], [73.9, 225.0], [74.0, 226.0], [74.1, 226.0], [74.2, 226.0], [74.3, 226.0], [74.4, 227.0], [74.5, 227.0], [74.6, 227.0], [74.7, 228.0], [74.8, 228.0], [74.9, 228.0], [75.0, 229.0], [75.1, 229.0], [75.2, 229.0], [75.3, 230.0], [75.4, 230.0], [75.5, 230.0], [75.6, 231.0], [75.7, 231.0], [75.8, 232.0], [75.9, 232.0], [76.0, 233.0], [76.1, 233.0], [76.2, 233.0], [76.3, 234.0], [76.4, 235.0], [76.5, 235.0], [76.6, 235.0], [76.7, 236.0], [76.8, 236.0], [76.9, 236.0], [77.0, 237.0], [77.1, 237.0], [77.2, 238.0], [77.3, 238.0], [77.4, 239.0], [77.5, 239.0], [77.6, 239.0], [77.7, 240.0], [77.8, 240.0], [77.9, 241.0], [78.0, 242.0], [78.1, 242.0], [78.2, 243.0], [78.3, 243.0], [78.4, 244.0], [78.5, 245.0], [78.6, 246.0], [78.7, 246.0], [78.8, 246.0], [78.9, 247.0], [79.0, 247.0], [79.1, 248.0], [79.2, 248.0], [79.3, 248.0], [79.4, 249.0], [79.5, 249.0], [79.6, 249.0], [79.7, 250.0], [79.8, 250.0], [79.9, 250.0], [80.0, 252.0], [80.1, 252.0], [80.2, 253.0], [80.3, 254.0], [80.4, 254.0], [80.5, 255.0], [80.6, 255.0], [80.7, 256.0], [80.8, 256.0], [80.9, 256.0], [81.0, 256.0], [81.1, 257.0], [81.2, 257.0], [81.3, 257.0], [81.4, 258.0], [81.5, 259.0], [81.6, 260.0], [81.7, 260.0], [81.8, 261.0], [81.9, 261.0], [82.0, 262.0], [82.1, 262.0], [82.2, 263.0], [82.3, 263.0], [82.4, 264.0], [82.5, 264.0], [82.6, 265.0], [82.7, 265.0], [82.8, 266.0], [82.9, 266.0], [83.0, 267.0], [83.1, 268.0], [83.2, 268.0], [83.3, 268.0], [83.4, 269.0], [83.5, 270.0], [83.6, 270.0], [83.7, 271.0], [83.8, 271.0], [83.9, 271.0], [84.0, 273.0], [84.1, 273.0], [84.2, 275.0], [84.3, 276.0], [84.4, 276.0], [84.5, 277.0], [84.6, 278.0], [84.7, 278.0], [84.8, 279.0], [84.9, 280.0], [85.0, 280.0], [85.1, 281.0], [85.2, 282.0], [85.3, 283.0], [85.4, 284.0], [85.5, 285.0], [85.6, 285.0], [85.7, 285.0], [85.8, 286.0], [85.9, 287.0], [86.0, 288.0], [86.1, 290.0], [86.2, 292.0], [86.3, 292.0], [86.4, 292.0], [86.5, 293.0], [86.6, 293.0], [86.7, 294.0], [86.8, 297.0], [86.9, 298.0], [87.0, 299.0], [87.1, 301.0], [87.2, 302.0], [87.3, 302.0], [87.4, 303.0], [87.5, 304.0], [87.6, 305.0], [87.7, 307.0], [87.8, 307.0], [87.9, 308.0], [88.0, 309.0], [88.1, 311.0], [88.2, 311.0], [88.3, 312.0], [88.4, 314.0], [88.5, 314.0], [88.6, 316.0], [88.7, 318.0], [88.8, 318.0], [88.9, 319.0], [89.0, 320.0], [89.1, 320.0], [89.2, 321.0], [89.3, 323.0], [89.4, 324.0], [89.5, 326.0], [89.6, 328.0], [89.7, 329.0], [89.8, 330.0], [89.9, 330.0], [90.0, 332.0], [90.1, 333.0], [90.2, 334.0], [90.3, 336.0], [90.4, 338.0], [90.5, 338.0], [90.6, 340.0], [90.7, 340.0], [90.8, 340.0], [90.9, 344.0], [91.0, 344.0], [91.1, 345.0], [91.2, 345.0], [91.3, 347.0], [91.4, 348.0], [91.5, 348.0], [91.6, 350.0], [91.7, 352.0], [91.8, 353.0], [91.9, 356.0], [92.0, 360.0], [92.1, 360.0], [92.2, 362.0], [92.3, 363.0], [92.4, 367.0], [92.5, 371.0], [92.6, 372.0], [92.7, 372.0], [92.8, 375.0], [92.9, 377.0], [93.0, 379.0], [93.1, 381.0], [93.2, 387.0], [93.3, 389.0], [93.4, 391.0], [93.5, 393.0], [93.6, 394.0], [93.7, 395.0], [93.8, 397.0], [93.9, 401.0], [94.0, 406.0], [94.1, 412.0], [94.2, 413.0], [94.3, 413.0], [94.4, 414.0], [94.5, 415.0], [94.6, 415.0], [94.7, 416.0], [94.8, 418.0], [94.9, 419.0], [95.0, 421.0], [95.1, 425.0], [95.2, 427.0], [95.3, 429.0], [95.4, 429.0], [95.5, 430.0], [95.6, 432.0], [95.7, 435.0], [95.8, 436.0], [95.9, 437.0], [96.0, 438.0], [96.1, 439.0], [96.2, 443.0], [96.3, 444.0], [96.4, 446.0], [96.5, 448.0], [96.6, 451.0], [96.7, 453.0], [96.8, 459.0], [96.9, 462.0], [97.0, 464.0], [97.1, 467.0], [97.2, 470.0], [97.3, 472.0], [97.4, 476.0], [97.5, 486.0], [97.6, 493.0], [97.7, 499.0], [97.8, 500.0], [97.9, 512.0], [98.0, 514.0], [98.1, 521.0], [98.2, 524.0], [98.3, 535.0], [98.4, 540.0], [98.5, 540.0], [98.6, 559.0], [98.7, 560.0], [98.8, 567.0], [98.9, 571.0], [99.0, 575.0], [99.1, 577.0], [99.2, 582.0], [99.3, 584.0], [99.4, 591.0], [99.5, 604.0], [99.6, 618.0], [99.7, 646.0], [99.8, 662.0], [99.9, 683.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1028.0, "series": [{"data": [[0.0, 298.0], [300.0, 136.0], [600.0, 10.0], [100.0, 1028.0], [200.0, 416.0], [400.0, 77.0], [500.0, 34.0], [1000.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 43.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1957.0, "series": [{"data": [[0.0, 1957.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 43.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.5, "minX": 1.6673185062E12, "maxY": 100.0, "series": [{"data": [[1.6673185066E12, 85.15555555555555], [1.6673185076E12, 100.0], [1.6673185096E12, 92.22807017543859], [1.6673185086E12, 100.0], [1.6673185065E12, 74.97435897435894], [1.6673185098E12, 82.8], [1.6673185067E12, 95.29787234042554], [1.6673185077E12, 100.0], [1.6673185097E12, 86.60344827586206], [1.6673185087E12, 100.0], [1.6673185089E12, 100.0], [1.6673185079E12, 100.0], [1.6673185099E12, 78.51063829787233], [1.6673185068E12, 100.0], [1.6673185088E12, 100.0], [1.6673185078E12, 100.0], [1.667318508E12, 100.0], [1.667318507E12, 100.0], [1.667318509E12, 100.0], [1.66731851E12, 70.80357142857143], [1.6673185069E12, 100.0], [1.6673185102E12, 52.467741935483865], [1.6673185081E12, 100.0], [1.6673185071E12, 100.0], [1.6673185091E12, 100.0], [1.6673185101E12, 62.404255319148945], [1.6673185093E12, 100.0], [1.6673185072E12, 100.0], [1.6673185062E12, 43.37500000000001], [1.6673185103E12, 35.55737704918033], [1.6673185082E12, 100.0], [1.6673185092E12, 100.0], [1.6673185084E12, 100.0], [1.6673185104E12, 13.999999999999995], [1.6673185094E12, 98.64150943396227], [1.6673185073E12, 100.0], [1.6673185063E12, 54.8], [1.6673185083E12, 100.0], [1.6673185075E12, 100.0], [1.6673185085E12, 100.0], [1.6673185064E12, 64.67272727272729], [1.6673185105E12, 1.5], [1.6673185095E12, 96.28888888888888], [1.6673185074E12, 100.0]], "isOverall": false, "label": "goodsdemoaop", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673185105E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 271.30434782608694, "series": [{"data": [[2.0, 14.0], [3.0, 15.0], [4.0, 21.0], [5.0, 16.5], [6.0, 21.0], [7.0, 54.0], [8.0, 34.5], [10.0, 27.5], [11.0, 33.0], [12.0, 34.0], [13.0, 30.75], [15.0, 73.33333333333333], [17.0, 81.0], [18.0, 52.0], [19.0, 84.66666666666667], [21.0, 62.0], [22.0, 67.0], [23.0, 87.6], [24.0, 44.0], [25.0, 31.5], [26.0, 35.0], [27.0, 161.0], [28.0, 90.0], [29.0, 181.0], [30.0, 45.0], [31.0, 90.1111111111111], [33.0, 57.0], [32.0, 110.5], [35.0, 75.8], [34.0, 62.5], [37.0, 127.0], [36.0, 157.2], [39.0, 93.0], [38.0, 72.0], [41.0, 75.0], [40.0, 31.0], [42.0, 119.21739130434781], [43.0, 67.375], [44.0, 131.42105263157896], [45.0, 126.42857142857142], [47.0, 94.28571428571426], [46.0, 62.0], [48.0, 79.25], [49.0, 59.5], [50.0, 88.5], [51.0, 57.333333333333336], [53.0, 144.0], [52.0, 93.42857142857143], [55.0, 116.66666666666667], [57.0, 90.25], [56.0, 151.625], [58.0, 77.25], [59.0, 90.0], [60.0, 118.35714285714286], [61.0, 134.66666666666666], [62.0, 113.53846153846155], [63.0, 103.28571428571429], [64.0, 122.5], [65.0, 150.75000000000003], [66.0, 139.25], [67.0, 151.2857142857143], [68.0, 160.83333333333331], [69.0, 151.0588235294118], [70.0, 153.5], [71.0, 142.33333333333334], [72.0, 179.9230769230769], [73.0, 149.16666666666666], [74.0, 134.0], [75.0, 173.76923076923075], [76.0, 156.4], [77.0, 143.8], [78.0, 187.21052631578945], [79.0, 208.49999999999997], [80.0, 180.25], [81.0, 161.64285714285714], [82.0, 238.27272727272728], [83.0, 160.7058823529412], [84.0, 271.30434782608694], [85.0, 225.16666666666666], [86.0, 169.61111111111111], [87.0, 208.28571428571428], [88.0, 221.96874999999997], [89.0, 182.0], [90.0, 142.42857142857142], [91.0, 203.6315789473684], [92.0, 173.3076923076923], [93.0, 151.54545454545456], [94.0, 234.0], [95.0, 140.25925925925927], [96.0, 165.46875], [97.0, 169.77777777777777], [98.0, 186.68], [99.0, 170.1818181818182], [100.0, 214.42986798679863], [1.0, 16.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[88.00100000000015, 189.1365000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 9460.0, "minX": 1.6673185062E12, "maxY": 504630.0, "series": [{"data": [[1.6673185066E12, 212830.0], [1.6673185076E12, 236440.0], [1.6673185096E12, 269510.0], [1.6673185086E12, 217530.0], [1.6673185065E12, 184410.0], [1.6673185098E12, 141900.0], [1.6673185067E12, 222280.0], [1.6673185077E12, 137130.0], [1.6673185097E12, 274260.0], [1.6673185087E12, 236450.0], [1.6673185089E12, 170230.0], [1.6673185079E12, 307320.0], [1.6673185099E12, 222300.0], [1.6673185068E12, 345240.0], [1.6673185088E12, 198600.0], [1.6673185078E12, 231750.0], [1.667318508E12, 170210.0], [1.667318507E12, 113480.0], [1.667318509E12, 269540.0], [1.66731851E12, 264800.0], [1.6673185069E12, 217560.0], [1.6673185102E12, 293150.0], [1.6673185081E12, 170220.0], [1.6673185071E12, 217510.0], [1.6673185091E12, 260110.0], [1.6673185101E12, 222290.0], [1.6673185093E12, 217510.0], [1.6673185072E12, 160790.0], [1.6673185062E12, 226970.0], [1.6673185103E12, 288480.0], [1.6673185082E12, 203310.0], [1.6673185092E12, 189120.0], [1.6673185084E12, 255350.0], [1.6673185104E12, 208060.0], [1.6673185094E12, 250680.0], [1.6673185073E12, 383020.0], [1.6673185063E12, 23640.0], [1.6673185083E12, 212790.0], [1.6673185075E12, 160760.0], [1.6673185085E12, 212820.0], [1.6673185064E12, 260110.0], [1.6673185105E12, 9460.0], [1.6673185095E12, 212760.0], [1.6673185074E12, 174940.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6673185066E12, 280350.0], [1.6673185076E12, 311500.0], [1.6673185096E12, 355110.0], [1.6673185086E12, 286580.0], [1.6673185065E12, 242970.0], [1.6673185098E12, 186900.0], [1.6673185067E12, 292810.0], [1.6673185077E12, 180670.0], [1.6673185097E12, 361340.0], [1.6673185087E12, 311500.0], [1.6673185089E12, 224280.0], [1.6673185079E12, 404950.0], [1.6673185099E12, 292810.0], [1.6673185068E12, 454790.0], [1.6673185088E12, 261660.0], [1.6673185078E12, 305270.0], [1.667318508E12, 224280.0], [1.667318507E12, 149520.0], [1.667318509E12, 355110.0], [1.66731851E12, 348880.0], [1.6673185069E12, 286580.0], [1.6673185102E12, 386260.0], [1.6673185081E12, 224280.0], [1.6673185071E12, 286580.0], [1.6673185091E12, 342650.0], [1.6673185101E12, 292810.0], [1.6673185093E12, 286580.0], [1.6673185072E12, 211820.0], [1.6673185062E12, 299040.0], [1.6673185103E12, 380030.0], [1.6673185082E12, 267890.0], [1.6673185092E12, 249200.0], [1.6673185084E12, 336420.0], [1.6673185104E12, 274120.0], [1.6673185094E12, 330190.0], [1.6673185073E12, 504630.0], [1.6673185063E12, 31150.0], [1.6673185083E12, 280350.0], [1.6673185075E12, 211820.0], [1.6673185085E12, 280350.0], [1.6673185064E12, 342650.0], [1.6673185105E12, 12460.0], [1.6673185095E12, 280350.0], [1.6673185074E12, 230510.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673185105E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15.5, "minX": 1.6673185062E12, "maxY": 276.40350877192975, "series": [{"data": [[1.6673185066E12, 149.73333333333332], [1.6673185076E12, 198.74], [1.6673185096E12, 174.6315789473684], [1.6673185086E12, 196.8260869565217], [1.6673185065E12, 128.48717948717947], [1.6673185098E12, 233.60000000000002], [1.6673185067E12, 160.21276595744683], [1.6673185077E12, 215.0344827586207], [1.6673185097E12, 234.10344827586212], [1.6673185087E12, 193.04000000000005], [1.6673185089E12, 207.0277777777778], [1.6673185079E12, 261.16923076923064], [1.6673185099E12, 199.40425531914892], [1.6673185068E12, 157.21917808219183], [1.6673185088E12, 232.49999999999994], [1.6673185078E12, 247.1836734693877], [1.667318508E12, 167.88888888888889], [1.667318507E12, 175.66666666666669], [1.667318509E12, 276.40350877192975], [1.66731851E12, 180.125], [1.6673185069E12, 192.26086956521738], [1.6673185102E12, 124.27419354838712], [1.6673185081E12, 194.69444444444446], [1.6673185071E12, 210.7826086956522], [1.6673185091E12, 221.63636363636365], [1.6673185101E12, 126.9148936170213], [1.6673185093E12, 203.10869565217385], [1.6673185072E12, 186.1470588235294], [1.6673185062E12, 114.0625], [1.6673185103E12, 90.14754098360658], [1.6673185082E12, 196.09302325581402], [1.6673185092E12, 199.09999999999997], [1.6673185084E12, 255.53703703703704], [1.6673185104E12, 52.4090909090909], [1.6673185094E12, 179.6037735849056], [1.6673185073E12, 268.92592592592587], [1.6673185063E12, 46.4], [1.6673185083E12, 249.51111111111118], [1.6673185075E12, 219.3529411764706], [1.6673185085E12, 201.64444444444442], [1.6673185064E12, 126.99999999999999], [1.6673185105E12, 15.5], [1.6673185095E12, 167.6888888888889], [1.6673185074E12, 159.62162162162156]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673185105E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 15.5, "minX": 1.6673185062E12, "maxY": 276.29824561403507, "series": [{"data": [[1.6673185066E12, 149.0], [1.6673185076E12, 198.56000000000003], [1.6673185096E12, 174.2280701754386], [1.6673185086E12, 196.47826086956516], [1.6673185065E12, 128.02564102564105], [1.6673185098E12, 233.56666666666663], [1.6673185067E12, 160.08510638297872], [1.6673185077E12, 212.37931034482762], [1.6673185097E12, 233.6896551724138], [1.6673185087E12, 192.92000000000002], [1.6673185089E12, 206.8611111111111], [1.6673185079E12, 259.1076923076925], [1.6673185099E12, 199.00000000000003], [1.6673185068E12, 157.12328767123287], [1.6673185088E12, 232.2619047619047], [1.6673185078E12, 244.75510204081633], [1.667318508E12, 167.38888888888886], [1.667318507E12, 175.16666666666666], [1.667318509E12, 276.29824561403507], [1.66731851E12, 180.03571428571425], [1.6673185069E12, 191.89130434782612], [1.6673185102E12, 124.03225806451613], [1.6673185081E12, 194.25], [1.6673185071E12, 210.60869565217394], [1.6673185091E12, 221.4], [1.6673185101E12, 126.12765957446807], [1.6673185093E12, 202.8913043478261], [1.6673185072E12, 185.41176470588235], [1.6673185062E12, 111.75000000000001], [1.6673185103E12, 89.99999999999999], [1.6673185082E12, 195.55813953488368], [1.6673185092E12, 198.90000000000003], [1.6673185084E12, 255.27777777777777], [1.6673185104E12, 52.31818181818183], [1.6673185094E12, 178.07547169811318], [1.6673185073E12, 268.7530864197531], [1.6673185063E12, 46.2], [1.6673185083E12, 249.46666666666675], [1.6673185075E12, 219.26470588235298], [1.6673185085E12, 201.57777777777784], [1.6673185064E12, 126.58181818181818], [1.6673185105E12, 15.5], [1.6673185095E12, 167.44444444444446], [1.6673185074E12, 159.3783783783784]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673185105E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.6673185062E12, "maxY": 34.5625, "series": [{"data": [[1.6673185066E12, 0.26666666666666666], [1.6673185076E12, 0.0], [1.6673185096E12, 0.0], [1.6673185086E12, 0.0], [1.6673185065E12, 0.28205128205128205], [1.6673185098E12, 0.0], [1.6673185067E12, 0.8510638297872342], [1.6673185077E12, 0.0], [1.6673185097E12, 0.0], [1.6673185087E12, 0.0], [1.6673185089E12, 0.0], [1.6673185079E12, 0.0], [1.6673185099E12, 0.0], [1.6673185068E12, 0.6301369863013699], [1.6673185088E12, 0.0], [1.6673185078E12, 0.0], [1.667318508E12, 0.0], [1.667318507E12, 0.0], [1.667318509E12, 0.0], [1.66731851E12, 0.0], [1.6673185069E12, 0.1739130434782609], [1.6673185102E12, 0.0], [1.6673185081E12, 0.0], [1.6673185071E12, 0.0], [1.6673185091E12, 0.0], [1.6673185101E12, 0.0], [1.6673185093E12, 0.0], [1.6673185072E12, 0.0], [1.6673185062E12, 34.5625], [1.6673185103E12, 0.0], [1.6673185082E12, 0.0], [1.6673185092E12, 0.0], [1.6673185084E12, 0.0], [1.6673185104E12, 0.0], [1.6673185094E12, 0.0], [1.6673185073E12, 0.0], [1.6673185063E12, 0.4], [1.6673185083E12, 0.0], [1.6673185075E12, 0.0], [1.6673185085E12, 0.0], [1.6673185064E12, 0.32727272727272744], [1.6673185105E12, 0.0], [1.6673185095E12, 0.0], [1.6673185074E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673185105E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 12.0, "minX": 1.6673185062E12, "maxY": 1098.0, "series": [{"data": [[1.6673185066E12, 228.0], [1.6673185076E12, 382.0], [1.6673185096E12, 567.0], [1.6673185086E12, 618.0], [1.6673185065E12, 184.0], [1.6673185098E12, 662.0], [1.6673185067E12, 367.0], [1.6673185077E12, 439.0], [1.6673185097E12, 662.0], [1.6673185087E12, 487.0], [1.6673185089E12, 675.0], [1.6673185079E12, 604.0], [1.6673185099E12, 271.0], [1.6673185068E12, 433.0], [1.6673185088E12, 521.0], [1.6673185078E12, 567.0], [1.667318508E12, 312.0], [1.667318507E12, 239.0], [1.667318509E12, 1098.0], [1.66731851E12, 314.0], [1.6673185069E12, 415.0], [1.6673185102E12, 406.0], [1.6673185081E12, 285.0], [1.6673185071E12, 324.0], [1.6673185091E12, 577.0], [1.6673185101E12, 270.0], [1.6673185093E12, 320.0], [1.6673185072E12, 416.0], [1.6673185062E12, 187.0], [1.6673185103E12, 326.0], [1.6673185082E12, 394.0], [1.6673185092E12, 415.0], [1.6673185084E12, 586.0], [1.6673185104E12, 151.0], [1.6673185094E12, 393.0], [1.6673185073E12, 499.0], [1.6673185063E12, 70.0], [1.6673185083E12, 448.0], [1.6673185075E12, 371.0], [1.6673185085E12, 683.0], [1.6673185064E12, 176.0], [1.6673185105E12, 16.0], [1.6673185095E12, 429.0], [1.6673185074E12, 353.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6673185066E12, 187.0], [1.6673185076E12, 314.9], [1.6673185096E12, 376.4000000000002], [1.6673185086E12, 309.8], [1.6673185065E12, 160.0], [1.6673185098E12, 548.7000000000005], [1.6673185067E12, 250.8], [1.6673185077E12, 430.0], [1.6673185097E12, 560.7], [1.6673185087E12, 316.4], [1.6673185089E12, 419.50000000000057], [1.6673185079E12, 499.5999999999999], [1.6673185099E12, 252.0], [1.6673185068E12, 283.0000000000003], [1.6673185088E12, 475.4000000000002], [1.6673185078E12, 540.0], [1.667318508E12, 226.00000000000026], [1.667318507E12, 235.5], [1.667318509E12, 463.20000000000005], [1.66731851E12, 285.3], [1.6673185069E12, 335.10000000000025], [1.6673185102E12, 202.5], [1.6673185081E12, 276.3], [1.6673185071E12, 307.6], [1.6673185091E12, 371.4], [1.6673185101E12, 183.60000000000002], [1.6673185093E12, 302.6], [1.6673185072E12, 355.5], [1.6673185062E12, 169.4], [1.6673185103E12, 140.00000000000006], [1.6673185082E12, 343.6], [1.6673185092E12, 288.9], [1.6673185084E12, 452.5], [1.6673185104E12, 89.0], [1.6673185094E12, 314.6], [1.6673185073E12, 460.59999999999997], [1.6673185063E12, 70.0], [1.6673185083E12, 435.8], [1.6673185075E12, 270.5], [1.6673185085E12, 276.8], [1.6673185064E12, 164.39999999999998], [1.6673185105E12, 16.0], [1.6673185095E12, 325.19999999999993], [1.6673185074E12, 195.20000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6673185066E12, 228.0], [1.6673185076E12, 382.0], [1.6673185096E12, 567.0], [1.6673185086E12, 618.0], [1.6673185065E12, 184.0], [1.6673185098E12, 662.0], [1.6673185067E12, 367.0], [1.6673185077E12, 439.0], [1.6673185097E12, 662.0], [1.6673185087E12, 487.0], [1.6673185089E12, 675.0], [1.6673185079E12, 604.0], [1.6673185099E12, 271.0], [1.6673185068E12, 433.0], [1.6673185088E12, 521.0], [1.6673185078E12, 567.0], [1.667318508E12, 312.0], [1.667318507E12, 239.0], [1.667318509E12, 1098.0], [1.66731851E12, 314.0], [1.6673185069E12, 415.0], [1.6673185102E12, 406.0], [1.6673185081E12, 285.0], [1.6673185071E12, 324.0], [1.6673185091E12, 577.0], [1.6673185101E12, 270.0], [1.6673185093E12, 320.0], [1.6673185072E12, 416.0], [1.6673185062E12, 187.0], [1.6673185103E12, 326.0], [1.6673185082E12, 394.0], [1.6673185092E12, 415.0], [1.6673185084E12, 586.0], [1.6673185104E12, 151.0], [1.6673185094E12, 393.0], [1.6673185073E12, 499.0], [1.6673185063E12, 70.0], [1.6673185083E12, 448.0], [1.6673185075E12, 371.0], [1.6673185085E12, 683.0], [1.6673185064E12, 176.0], [1.6673185105E12, 16.0], [1.6673185095E12, 429.0], [1.6673185074E12, 353.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6673185066E12, 191.7], [1.6673185076E12, 329.19999999999993], [1.6673185096E12, 514.7999999999998], [1.6673185086E12, 464.3499999999997], [1.6673185065E12, 166.0], [1.6673185098E12, 645.5], [1.6673185067E12, 267.19999999999993], [1.6673185077E12, 437.5], [1.6673185097E12, 607.0499999999998], [1.6673185087E12, 459.9999999999999], [1.6673185089E12, 597.6499999999999], [1.6673185079E12, 579.9], [1.6673185099E12, 263.4], [1.6673185068E12, 313.5999999999999], [1.6673185088E12, 514.45], [1.6673185078E12, 559.5], [1.667318508E12, 278.84999999999997], [1.667318507E12, 238.25], [1.667318509E12, 572.3999999999999], [1.66731851E12, 295.2], [1.6673185069E12, 379.6], [1.6673185102E12, 260.09999999999997], [1.6673185081E12, 280.75], [1.6673185071E12, 320.55], [1.6673185091E12, 411.1999999999995], [1.6673185101E12, 205.19999999999996], [1.6673185093E12, 316.2], [1.6673185072E12, 389.75], [1.6673185062E12, 178.39999999999998], [1.6673185103E12, 160.6], [1.6673185082E12, 352.4], [1.6673185092E12, 341.6999999999998], [1.6673185084E12, 574.75], [1.6673185104E12, 112.25], [1.6673185094E12, 332.3], [1.6673185073E12, 477.4], [1.6673185063E12, 70.0], [1.6673185083E12, 442.59999999999997], [1.6673185075E12, 325.25], [1.6673185085E12, 516.1999999999999], [1.6673185064E12, 170.39999999999998], [1.6673185105E12, 16.0], [1.6673185095E12, 384.19999999999976], [1.6673185074E12, 332.3]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6673185066E12, 107.0], [1.6673185076E12, 66.0], [1.6673185096E12, 81.0], [1.6673185086E12, 70.0], [1.6673185065E12, 86.0], [1.6673185098E12, 103.0], [1.6673185067E12, 100.0], [1.6673185077E12, 84.0], [1.6673185097E12, 60.0], [1.6673185087E12, 74.0], [1.6673185089E12, 73.0], [1.6673185079E12, 30.0], [1.6673185099E12, 41.0], [1.6673185068E12, 55.0], [1.6673185088E12, 62.0], [1.6673185078E12, 21.0], [1.667318508E12, 51.0], [1.667318507E12, 93.0], [1.667318509E12, 98.0], [1.66731851E12, 76.0], [1.6673185069E12, 71.0], [1.6673185102E12, 32.0], [1.6673185081E12, 61.0], [1.6673185071E12, 71.0], [1.6673185091E12, 82.0], [1.6673185101E12, 46.0], [1.6673185093E12, 100.0], [1.6673185072E12, 51.0], [1.6673185062E12, 13.0], [1.6673185103E12, 25.0], [1.6673185082E12, 64.0], [1.6673185092E12, 108.0], [1.6673185084E12, 72.0], [1.6673185104E12, 12.0], [1.6673185094E12, 81.0], [1.6673185073E12, 71.0], [1.6673185063E12, 14.0], [1.6673185083E12, 66.0], [1.6673185075E12, 127.0], [1.6673185085E12, 66.0], [1.6673185064E12, 75.0], [1.6673185105E12, 15.0], [1.6673185095E12, 72.0], [1.6673185074E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6673185066E12, 148.0], [1.6673185076E12, 175.0], [1.6673185096E12, 118.0], [1.6673185086E12, 183.0], [1.6673185065E12, 131.0], [1.6673185098E12, 193.0], [1.6673185067E12, 136.0], [1.6673185077E12, 176.0], [1.6673185097E12, 173.5], [1.6673185087E12, 170.0], [1.6673185089E12, 162.0], [1.6673185079E12, 244.0], [1.6673185099E12, 206.0], [1.6673185068E12, 140.0], [1.6673185088E12, 205.0], [1.6673185078E12, 207.0], [1.667318508E12, 166.0], [1.667318507E12, 167.0], [1.667318509E12, 221.0], [1.66731851E12, 170.0], [1.6673185069E12, 167.5], [1.6673185102E12, 107.5], [1.6673185081E12, 214.0], [1.6673185071E12, 220.0], [1.6673185091E12, 197.0], [1.6673185101E12, 125.0], [1.6673185093E12, 196.5], [1.6673185072E12, 137.5], [1.6673185062E12, 144.0], [1.6673185103E12, 89.0], [1.6673185082E12, 169.0], [1.6673185092E12, 185.0], [1.6673185084E12, 210.0], [1.6673185104E12, 53.0], [1.6673185094E12, 167.0], [1.6673185073E12, 243.0], [1.6673185063E12, 59.0], [1.6673185083E12, 212.0], [1.6673185075E12, 224.5], [1.6673185085E12, 179.0], [1.6673185064E12, 123.0], [1.6673185105E12, 15.5], [1.6673185095E12, 146.0], [1.6673185074E12, 164.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673185105E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 104.0, "minX": 272.0, "maxY": 196.0, "series": [{"data": [[272.0, 104.0], [358.0, 140.0], [433.0, 179.0], [449.0, 196.0], [488.0, 182.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 488.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 104.0, "minX": 272.0, "maxY": 195.0, "series": [{"data": [[272.0, 104.0], [358.0, 138.0], [433.0, 179.0], [449.0, 195.0], [488.0, 181.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 488.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 100.0, "minX": 1.667318506E12, "maxY": 770.0, "series": [{"data": [[1.6673185066E12, 550.0], [1.6673185076E12, 510.0], [1.6673185096E12, 500.0], [1.6673185086E12, 460.0], [1.6673185065E12, 500.0], [1.6673185098E12, 280.0], [1.6673185067E12, 570.0], [1.6673185077E12, 290.0], [1.6673185097E12, 530.0], [1.6673185087E12, 490.0], [1.6673185089E12, 360.0], [1.6673185079E12, 650.0], [1.6673185099E12, 420.0], [1.6673185068E12, 720.0], [1.6673185088E12, 430.0], [1.6673185078E12, 490.0], [1.667318508E12, 360.0], [1.667318507E12, 250.0], [1.667318509E12, 570.0], [1.66731851E12, 450.0], [1.6673185069E12, 460.0], [1.6673185061E12, 100.0], [1.6673185102E12, 520.0], [1.6673185081E12, 360.0], [1.6673185071E12, 450.0], [1.6673185091E12, 550.0], [1.667318506E12, 300.0], [1.6673185101E12, 390.0], [1.6673185093E12, 460.0], [1.6673185072E12, 350.0], [1.6673185062E12, 100.0], [1.6673185103E12, 370.0], [1.6673185082E12, 430.0], [1.6673185092E12, 400.0], [1.6673185084E12, 540.0], [1.6673185104E12, 230.0], [1.6673185094E12, 500.0], [1.6673185073E12, 770.0], [1.6673185063E12, 630.0], [1.6673185083E12, 450.0], [1.6673185075E12, 330.0], [1.6673185085E12, 450.0], [1.6673185064E12, 640.0], [1.6673185095E12, 430.0], [1.6673185074E12, 410.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673185104E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.6673185062E12, "maxY": 810.0, "series": [{"data": [[1.6673185066E12, 450.0], [1.6673185076E12, 500.0], [1.6673185096E12, 570.0], [1.6673185086E12, 460.0], [1.6673185065E12, 390.0], [1.6673185098E12, 300.0], [1.6673185067E12, 470.0], [1.6673185077E12, 290.0], [1.6673185097E12, 580.0], [1.6673185087E12, 500.0], [1.6673185089E12, 360.0], [1.6673185079E12, 650.0], [1.6673185099E12, 470.0], [1.6673185068E12, 730.0], [1.6673185088E12, 420.0], [1.6673185078E12, 490.0], [1.667318508E12, 360.0], [1.667318507E12, 240.0], [1.667318509E12, 570.0], [1.66731851E12, 560.0], [1.6673185069E12, 460.0], [1.6673185102E12, 620.0], [1.6673185081E12, 360.0], [1.6673185071E12, 460.0], [1.6673185091E12, 550.0], [1.6673185101E12, 470.0], [1.6673185093E12, 460.0], [1.6673185072E12, 340.0], [1.6673185062E12, 480.0], [1.6673185103E12, 610.0], [1.6673185082E12, 430.0], [1.6673185092E12, 400.0], [1.6673185084E12, 540.0], [1.6673185104E12, 440.0], [1.6673185094E12, 530.0], [1.6673185073E12, 810.0], [1.6673185063E12, 50.0], [1.6673185083E12, 450.0], [1.6673185075E12, 340.0], [1.6673185085E12, 450.0], [1.6673185064E12, 550.0], [1.6673185105E12, 20.0], [1.6673185095E12, 450.0], [1.6673185074E12, 370.0]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6673185105E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.6673185062E12, "maxY": 810.0, "series": [{"data": [[1.6673185066E12, 450.0], [1.6673185076E12, 500.0], [1.6673185096E12, 570.0], [1.6673185086E12, 460.0], [1.6673185065E12, 390.0], [1.6673185098E12, 300.0], [1.6673185067E12, 470.0], [1.6673185077E12, 290.0], [1.6673185097E12, 580.0], [1.6673185087E12, 500.0], [1.6673185089E12, 360.0], [1.6673185079E12, 650.0], [1.6673185099E12, 470.0], [1.6673185068E12, 730.0], [1.6673185088E12, 420.0], [1.6673185078E12, 490.0], [1.667318508E12, 360.0], [1.667318507E12, 240.0], [1.667318509E12, 570.0], [1.66731851E12, 560.0], [1.6673185069E12, 460.0], [1.6673185102E12, 620.0], [1.6673185081E12, 360.0], [1.6673185071E12, 460.0], [1.6673185091E12, 550.0], [1.6673185101E12, 470.0], [1.6673185093E12, 460.0], [1.6673185072E12, 340.0], [1.6673185062E12, 480.0], [1.6673185103E12, 610.0], [1.6673185082E12, 430.0], [1.6673185092E12, 400.0], [1.6673185084E12, 540.0], [1.6673185104E12, 440.0], [1.6673185094E12, 530.0], [1.6673185073E12, 810.0], [1.6673185063E12, 50.0], [1.6673185083E12, 450.0], [1.6673185075E12, 340.0], [1.6673185085E12, 450.0], [1.6673185064E12, 550.0], [1.6673185105E12, 20.0], [1.6673185095E12, 450.0], [1.6673185074E12, 370.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673185105E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.6673185062E12, "maxY": 810.0, "series": [{"data": [[1.6673185066E12, 450.0], [1.6673185076E12, 500.0], [1.6673185096E12, 570.0], [1.6673185086E12, 460.0], [1.6673185065E12, 390.0], [1.6673185098E12, 300.0], [1.6673185067E12, 470.0], [1.6673185077E12, 290.0], [1.6673185097E12, 580.0], [1.6673185087E12, 500.0], [1.6673185089E12, 360.0], [1.6673185079E12, 650.0], [1.6673185099E12, 470.0], [1.6673185068E12, 730.0], [1.6673185088E12, 420.0], [1.6673185078E12, 490.0], [1.667318508E12, 360.0], [1.667318507E12, 240.0], [1.667318509E12, 570.0], [1.66731851E12, 560.0], [1.6673185069E12, 460.0], [1.6673185102E12, 620.0], [1.6673185081E12, 360.0], [1.6673185071E12, 460.0], [1.6673185091E12, 550.0], [1.6673185101E12, 470.0], [1.6673185093E12, 460.0], [1.6673185072E12, 340.0], [1.6673185062E12, 480.0], [1.6673185103E12, 610.0], [1.6673185082E12, 430.0], [1.6673185092E12, 400.0], [1.6673185084E12, 540.0], [1.6673185104E12, 440.0], [1.6673185094E12, 530.0], [1.6673185073E12, 810.0], [1.6673185063E12, 50.0], [1.6673185083E12, 450.0], [1.6673185075E12, 340.0], [1.6673185085E12, 450.0], [1.6673185064E12, 550.0], [1.6673185105E12, 20.0], [1.6673185095E12, 450.0], [1.6673185074E12, 370.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6673185105E12, "title": "Total Transactions Per Second"}},
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

