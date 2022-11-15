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
        data: {"result": {"minY": 205.0, "minX": 0.0, "maxY": 774.0, "series": [{"data": [[0.0, 205.0], [0.1, 205.0], [0.2, 205.0], [0.3, 205.0], [0.4, 205.0], [0.5, 205.0], [0.6, 205.0], [0.7, 205.0], [0.8, 205.0], [0.9, 205.0], [1.0, 208.0], [1.1, 208.0], [1.2, 208.0], [1.3, 208.0], [1.4, 208.0], [1.5, 208.0], [1.6, 208.0], [1.7, 208.0], [1.8, 208.0], [1.9, 208.0], [2.0, 213.0], [2.1, 213.0], [2.2, 213.0], [2.3, 213.0], [2.4, 213.0], [2.5, 213.0], [2.6, 213.0], [2.7, 213.0], [2.8, 213.0], [2.9, 213.0], [3.0, 268.0], [3.1, 268.0], [3.2, 268.0], [3.3, 268.0], [3.4, 268.0], [3.5, 268.0], [3.6, 268.0], [3.7, 268.0], [3.8, 268.0], [3.9, 268.0], [4.0, 286.0], [4.1, 286.0], [4.2, 286.0], [4.3, 286.0], [4.4, 286.0], [4.5, 286.0], [4.6, 286.0], [4.7, 286.0], [4.8, 286.0], [4.9, 286.0], [5.0, 289.0], [5.1, 289.0], [5.2, 289.0], [5.3, 289.0], [5.4, 289.0], [5.5, 289.0], [5.6, 289.0], [5.7, 289.0], [5.8, 289.0], [5.9, 289.0], [6.0, 323.0], [6.1, 323.0], [6.2, 323.0], [6.3, 323.0], [6.4, 323.0], [6.5, 323.0], [6.6, 323.0], [6.7, 323.0], [6.8, 323.0], [6.9, 323.0], [7.0, 331.0], [7.1, 331.0], [7.2, 331.0], [7.3, 331.0], [7.4, 331.0], [7.5, 331.0], [7.6, 331.0], [7.7, 331.0], [7.8, 331.0], [7.9, 331.0], [8.0, 339.0], [8.1, 339.0], [8.2, 339.0], [8.3, 339.0], [8.4, 339.0], [8.5, 339.0], [8.6, 339.0], [8.7, 339.0], [8.8, 339.0], [8.9, 339.0], [9.0, 345.0], [9.1, 345.0], [9.2, 345.0], [9.3, 345.0], [9.4, 345.0], [9.5, 345.0], [9.6, 345.0], [9.7, 345.0], [9.8, 345.0], [9.9, 345.0], [10.0, 350.0], [10.1, 350.0], [10.2, 350.0], [10.3, 350.0], [10.4, 350.0], [10.5, 350.0], [10.6, 350.0], [10.7, 350.0], [10.8, 350.0], [10.9, 350.0], [11.0, 354.0], [11.1, 354.0], [11.2, 354.0], [11.3, 354.0], [11.4, 354.0], [11.5, 354.0], [11.6, 354.0], [11.7, 354.0], [11.8, 354.0], [11.9, 354.0], [12.0, 356.0], [12.1, 356.0], [12.2, 356.0], [12.3, 356.0], [12.4, 356.0], [12.5, 356.0], [12.6, 356.0], [12.7, 356.0], [12.8, 356.0], [12.9, 356.0], [13.0, 367.0], [13.1, 367.0], [13.2, 367.0], [13.3, 367.0], [13.4, 367.0], [13.5, 367.0], [13.6, 367.0], [13.7, 367.0], [13.8, 367.0], [13.9, 367.0], [14.0, 375.0], [14.1, 375.0], [14.2, 375.0], [14.3, 375.0], [14.4, 375.0], [14.5, 375.0], [14.6, 375.0], [14.7, 375.0], [14.8, 375.0], [14.9, 375.0], [15.0, 390.0], [15.1, 390.0], [15.2, 390.0], [15.3, 390.0], [15.4, 390.0], [15.5, 390.0], [15.6, 390.0], [15.7, 390.0], [15.8, 390.0], [15.9, 390.0], [16.0, 405.0], [16.1, 405.0], [16.2, 405.0], [16.3, 405.0], [16.4, 405.0], [16.5, 405.0], [16.6, 405.0], [16.7, 405.0], [16.8, 405.0], [16.9, 405.0], [17.0, 441.0], [17.1, 441.0], [17.2, 441.0], [17.3, 441.0], [17.4, 441.0], [17.5, 441.0], [17.6, 441.0], [17.7, 441.0], [17.8, 441.0], [17.9, 441.0], [18.0, 458.0], [18.1, 458.0], [18.2, 458.0], [18.3, 458.0], [18.4, 458.0], [18.5, 458.0], [18.6, 458.0], [18.7, 458.0], [18.8, 458.0], [18.9, 458.0], [19.0, 462.0], [19.1, 462.0], [19.2, 462.0], [19.3, 462.0], [19.4, 462.0], [19.5, 462.0], [19.6, 462.0], [19.7, 462.0], [19.8, 462.0], [19.9, 462.0], [20.0, 471.0], [20.1, 471.0], [20.2, 471.0], [20.3, 471.0], [20.4, 471.0], [20.5, 471.0], [20.6, 471.0], [20.7, 471.0], [20.8, 471.0], [20.9, 471.0], [21.0, 484.0], [21.1, 484.0], [21.2, 484.0], [21.3, 484.0], [21.4, 484.0], [21.5, 484.0], [21.6, 484.0], [21.7, 484.0], [21.8, 484.0], [21.9, 484.0], [22.0, 498.0], [22.1, 498.0], [22.2, 498.0], [22.3, 498.0], [22.4, 498.0], [22.5, 498.0], [22.6, 498.0], [22.7, 498.0], [22.8, 498.0], [22.9, 498.0], [23.0, 500.0], [23.1, 500.0], [23.2, 500.0], [23.3, 500.0], [23.4, 500.0], [23.5, 500.0], [23.6, 500.0], [23.7, 500.0], [23.8, 500.0], [23.9, 500.0], [24.0, 502.0], [24.1, 502.0], [24.2, 502.0], [24.3, 502.0], [24.4, 502.0], [24.5, 502.0], [24.6, 502.0], [24.7, 502.0], [24.8, 502.0], [24.9, 502.0], [25.0, 502.0], [25.1, 502.0], [25.2, 502.0], [25.3, 502.0], [25.4, 502.0], [25.5, 502.0], [25.6, 502.0], [25.7, 502.0], [25.8, 502.0], [25.9, 502.0], [26.0, 502.0], [26.1, 502.0], [26.2, 502.0], [26.3, 502.0], [26.4, 502.0], [26.5, 502.0], [26.6, 502.0], [26.7, 502.0], [26.8, 502.0], [26.9, 502.0], [27.0, 503.0], [27.1, 503.0], [27.2, 503.0], [27.3, 503.0], [27.4, 503.0], [27.5, 503.0], [27.6, 503.0], [27.7, 503.0], [27.8, 503.0], [27.9, 503.0], [28.0, 504.0], [28.1, 504.0], [28.2, 504.0], [28.3, 504.0], [28.4, 504.0], [28.5, 504.0], [28.6, 504.0], [28.7, 504.0], [28.8, 504.0], [28.9, 504.0], [29.0, 505.0], [29.1, 505.0], [29.2, 505.0], [29.3, 505.0], [29.4, 505.0], [29.5, 505.0], [29.6, 505.0], [29.7, 505.0], [29.8, 505.0], [29.9, 505.0], [30.0, 506.0], [30.1, 506.0], [30.2, 506.0], [30.3, 506.0], [30.4, 506.0], [30.5, 506.0], [30.6, 506.0], [30.7, 506.0], [30.8, 506.0], [30.9, 506.0], [31.0, 513.0], [31.1, 513.0], [31.2, 513.0], [31.3, 513.0], [31.4, 513.0], [31.5, 513.0], [31.6, 513.0], [31.7, 513.0], [31.8, 513.0], [31.9, 513.0], [32.0, 518.0], [32.1, 518.0], [32.2, 518.0], [32.3, 518.0], [32.4, 518.0], [32.5, 518.0], [32.6, 518.0], [32.7, 518.0], [32.8, 518.0], [32.9, 518.0], [33.0, 528.0], [33.1, 528.0], [33.2, 528.0], [33.3, 528.0], [33.4, 528.0], [33.5, 528.0], [33.6, 528.0], [33.7, 528.0], [33.8, 528.0], [33.9, 528.0], [34.0, 539.0], [34.1, 539.0], [34.2, 539.0], [34.3, 539.0], [34.4, 539.0], [34.5, 539.0], [34.6, 539.0], [34.7, 539.0], [34.8, 539.0], [34.9, 539.0], [35.0, 547.0], [35.1, 547.0], [35.2, 547.0], [35.3, 547.0], [35.4, 547.0], [35.5, 547.0], [35.6, 547.0], [35.7, 547.0], [35.8, 547.0], [35.9, 547.0], [36.0, 554.0], [36.1, 554.0], [36.2, 554.0], [36.3, 554.0], [36.4, 554.0], [36.5, 554.0], [36.6, 554.0], [36.7, 554.0], [36.8, 554.0], [36.9, 554.0], [37.0, 556.0], [37.1, 556.0], [37.2, 556.0], [37.3, 556.0], [37.4, 556.0], [37.5, 556.0], [37.6, 556.0], [37.7, 556.0], [37.8, 556.0], [37.9, 556.0], [38.0, 561.0], [38.1, 561.0], [38.2, 561.0], [38.3, 561.0], [38.4, 561.0], [38.5, 561.0], [38.6, 561.0], [38.7, 561.0], [38.8, 561.0], [38.9, 561.0], [39.0, 562.0], [39.1, 562.0], [39.2, 562.0], [39.3, 562.0], [39.4, 562.0], [39.5, 562.0], [39.6, 562.0], [39.7, 562.0], [39.8, 562.0], [39.9, 562.0], [40.0, 573.0], [40.1, 573.0], [40.2, 573.0], [40.3, 573.0], [40.4, 573.0], [40.5, 573.0], [40.6, 573.0], [40.7, 573.0], [40.8, 573.0], [40.9, 573.0], [41.0, 574.0], [41.1, 574.0], [41.2, 574.0], [41.3, 574.0], [41.4, 574.0], [41.5, 574.0], [41.6, 574.0], [41.7, 574.0], [41.8, 574.0], [41.9, 574.0], [42.0, 580.0], [42.1, 580.0], [42.2, 580.0], [42.3, 580.0], [42.4, 580.0], [42.5, 580.0], [42.6, 580.0], [42.7, 580.0], [42.8, 580.0], [42.9, 580.0], [43.0, 582.0], [43.1, 582.0], [43.2, 582.0], [43.3, 582.0], [43.4, 582.0], [43.5, 582.0], [43.6, 582.0], [43.7, 582.0], [43.8, 582.0], [43.9, 582.0], [44.0, 582.0], [44.1, 582.0], [44.2, 582.0], [44.3, 582.0], [44.4, 582.0], [44.5, 582.0], [44.6, 582.0], [44.7, 582.0], [44.8, 582.0], [44.9, 582.0], [45.0, 586.0], [45.1, 586.0], [45.2, 586.0], [45.3, 586.0], [45.4, 586.0], [45.5, 586.0], [45.6, 586.0], [45.7, 586.0], [45.8, 586.0], [45.9, 586.0], [46.0, 589.0], [46.1, 589.0], [46.2, 589.0], [46.3, 589.0], [46.4, 589.0], [46.5, 589.0], [46.6, 589.0], [46.7, 589.0], [46.8, 589.0], [46.9, 589.0], [47.0, 593.0], [47.1, 593.0], [47.2, 593.0], [47.3, 593.0], [47.4, 593.0], [47.5, 593.0], [47.6, 593.0], [47.7, 593.0], [47.8, 593.0], [47.9, 593.0], [48.0, 595.0], [48.1, 595.0], [48.2, 595.0], [48.3, 595.0], [48.4, 595.0], [48.5, 595.0], [48.6, 595.0], [48.7, 595.0], [48.8, 595.0], [48.9, 595.0], [49.0, 600.0], [49.1, 600.0], [49.2, 600.0], [49.3, 600.0], [49.4, 600.0], [49.5, 600.0], [49.6, 600.0], [49.7, 600.0], [49.8, 600.0], [49.9, 600.0], [50.0, 604.0], [50.1, 604.0], [50.2, 604.0], [50.3, 604.0], [50.4, 604.0], [50.5, 604.0], [50.6, 604.0], [50.7, 604.0], [50.8, 604.0], [50.9, 604.0], [51.0, 604.0], [51.1, 604.0], [51.2, 604.0], [51.3, 604.0], [51.4, 604.0], [51.5, 604.0], [51.6, 604.0], [51.7, 604.0], [51.8, 604.0], [51.9, 604.0], [52.0, 606.0], [52.1, 606.0], [52.2, 606.0], [52.3, 606.0], [52.4, 606.0], [52.5, 606.0], [52.6, 606.0], [52.7, 606.0], [52.8, 606.0], [52.9, 606.0], [53.0, 607.0], [53.1, 607.0], [53.2, 607.0], [53.3, 607.0], [53.4, 607.0], [53.5, 607.0], [53.6, 607.0], [53.7, 607.0], [53.8, 607.0], [53.9, 607.0], [54.0, 612.0], [54.1, 612.0], [54.2, 612.0], [54.3, 612.0], [54.4, 612.0], [54.5, 612.0], [54.6, 612.0], [54.7, 612.0], [54.8, 612.0], [54.9, 612.0], [55.0, 614.0], [55.1, 614.0], [55.2, 614.0], [55.3, 614.0], [55.4, 614.0], [55.5, 614.0], [55.6, 614.0], [55.7, 614.0], [55.8, 614.0], [55.9, 614.0], [56.0, 615.0], [56.1, 615.0], [56.2, 615.0], [56.3, 615.0], [56.4, 615.0], [56.5, 615.0], [56.6, 615.0], [56.7, 615.0], [56.8, 615.0], [56.9, 615.0], [57.0, 616.0], [57.1, 616.0], [57.2, 616.0], [57.3, 616.0], [57.4, 616.0], [57.5, 616.0], [57.6, 616.0], [57.7, 616.0], [57.8, 616.0], [57.9, 616.0], [58.0, 617.0], [58.1, 617.0], [58.2, 617.0], [58.3, 617.0], [58.4, 617.0], [58.5, 617.0], [58.6, 617.0], [58.7, 617.0], [58.8, 617.0], [58.9, 617.0], [59.0, 622.0], [59.1, 622.0], [59.2, 622.0], [59.3, 622.0], [59.4, 622.0], [59.5, 622.0], [59.6, 622.0], [59.7, 622.0], [59.8, 622.0], [59.9, 622.0], [60.0, 622.0], [60.1, 622.0], [60.2, 622.0], [60.3, 622.0], [60.4, 622.0], [60.5, 622.0], [60.6, 622.0], [60.7, 622.0], [60.8, 622.0], [60.9, 622.0], [61.0, 622.0], [61.1, 622.0], [61.2, 622.0], [61.3, 622.0], [61.4, 622.0], [61.5, 622.0], [61.6, 622.0], [61.7, 622.0], [61.8, 622.0], [61.9, 622.0], [62.0, 625.0], [62.1, 625.0], [62.2, 625.0], [62.3, 625.0], [62.4, 625.0], [62.5, 625.0], [62.6, 625.0], [62.7, 625.0], [62.8, 625.0], [62.9, 625.0], [63.0, 627.0], [63.1, 627.0], [63.2, 627.0], [63.3, 627.0], [63.4, 627.0], [63.5, 627.0], [63.6, 627.0], [63.7, 627.0], [63.8, 627.0], [63.9, 627.0], [64.0, 627.0], [64.1, 627.0], [64.2, 627.0], [64.3, 627.0], [64.4, 627.0], [64.5, 627.0], [64.6, 627.0], [64.7, 627.0], [64.8, 627.0], [64.9, 627.0], [65.0, 630.0], [65.1, 630.0], [65.2, 630.0], [65.3, 630.0], [65.4, 630.0], [65.5, 630.0], [65.6, 630.0], [65.7, 630.0], [65.8, 630.0], [65.9, 630.0], [66.0, 635.0], [66.1, 635.0], [66.2, 635.0], [66.3, 635.0], [66.4, 635.0], [66.5, 635.0], [66.6, 635.0], [66.7, 635.0], [66.8, 635.0], [66.9, 635.0], [67.0, 636.0], [67.1, 636.0], [67.2, 636.0], [67.3, 636.0], [67.4, 636.0], [67.5, 636.0], [67.6, 636.0], [67.7, 636.0], [67.8, 636.0], [67.9, 636.0], [68.0, 638.0], [68.1, 638.0], [68.2, 638.0], [68.3, 638.0], [68.4, 638.0], [68.5, 638.0], [68.6, 638.0], [68.7, 638.0], [68.8, 638.0], [68.9, 638.0], [69.0, 638.0], [69.1, 638.0], [69.2, 638.0], [69.3, 638.0], [69.4, 638.0], [69.5, 638.0], [69.6, 638.0], [69.7, 638.0], [69.8, 638.0], [69.9, 638.0], [70.0, 640.0], [70.1, 640.0], [70.2, 640.0], [70.3, 640.0], [70.4, 640.0], [70.5, 640.0], [70.6, 640.0], [70.7, 640.0], [70.8, 640.0], [70.9, 640.0], [71.0, 643.0], [71.1, 643.0], [71.2, 643.0], [71.3, 643.0], [71.4, 643.0], [71.5, 643.0], [71.6, 643.0], [71.7, 643.0], [71.8, 643.0], [71.9, 643.0], [72.0, 645.0], [72.1, 645.0], [72.2, 645.0], [72.3, 645.0], [72.4, 645.0], [72.5, 645.0], [72.6, 645.0], [72.7, 645.0], [72.8, 645.0], [72.9, 645.0], [73.0, 649.0], [73.1, 649.0], [73.2, 649.0], [73.3, 649.0], [73.4, 649.0], [73.5, 649.0], [73.6, 649.0], [73.7, 649.0], [73.8, 649.0], [73.9, 649.0], [74.0, 650.0], [74.1, 650.0], [74.2, 650.0], [74.3, 650.0], [74.4, 650.0], [74.5, 650.0], [74.6, 650.0], [74.7, 650.0], [74.8, 650.0], [74.9, 650.0], [75.0, 658.0], [75.1, 658.0], [75.2, 658.0], [75.3, 658.0], [75.4, 658.0], [75.5, 658.0], [75.6, 658.0], [75.7, 658.0], [75.8, 658.0], [75.9, 658.0], [76.0, 670.0], [76.1, 670.0], [76.2, 670.0], [76.3, 670.0], [76.4, 670.0], [76.5, 670.0], [76.6, 670.0], [76.7, 670.0], [76.8, 670.0], [76.9, 670.0], [77.0, 680.0], [77.1, 680.0], [77.2, 680.0], [77.3, 680.0], [77.4, 680.0], [77.5, 680.0], [77.6, 680.0], [77.7, 680.0], [77.8, 680.0], [77.9, 680.0], [78.0, 680.0], [78.1, 680.0], [78.2, 680.0], [78.3, 680.0], [78.4, 680.0], [78.5, 680.0], [78.6, 680.0], [78.7, 680.0], [78.8, 680.0], [78.9, 680.0], [79.0, 682.0], [79.1, 682.0], [79.2, 682.0], [79.3, 682.0], [79.4, 682.0], [79.5, 682.0], [79.6, 682.0], [79.7, 682.0], [79.8, 682.0], [79.9, 682.0], [80.0, 686.0], [80.1, 686.0], [80.2, 686.0], [80.3, 686.0], [80.4, 686.0], [80.5, 686.0], [80.6, 686.0], [80.7, 686.0], [80.8, 686.0], [80.9, 686.0], [81.0, 691.0], [81.1, 691.0], [81.2, 691.0], [81.3, 691.0], [81.4, 691.0], [81.5, 691.0], [81.6, 691.0], [81.7, 691.0], [81.8, 691.0], [81.9, 691.0], [82.0, 692.0], [82.1, 692.0], [82.2, 692.0], [82.3, 692.0], [82.4, 692.0], [82.5, 692.0], [82.6, 692.0], [82.7, 692.0], [82.8, 692.0], [82.9, 692.0], [83.0, 695.0], [83.1, 695.0], [83.2, 695.0], [83.3, 695.0], [83.4, 695.0], [83.5, 695.0], [83.6, 695.0], [83.7, 695.0], [83.8, 695.0], [83.9, 695.0], [84.0, 696.0], [84.1, 696.0], [84.2, 696.0], [84.3, 696.0], [84.4, 696.0], [84.5, 696.0], [84.6, 696.0], [84.7, 696.0], [84.8, 696.0], [84.9, 696.0], [85.0, 698.0], [85.1, 698.0], [85.2, 698.0], [85.3, 698.0], [85.4, 698.0], [85.5, 698.0], [85.6, 698.0], [85.7, 698.0], [85.8, 698.0], [85.9, 698.0], [86.0, 700.0], [86.1, 700.0], [86.2, 700.0], [86.3, 700.0], [86.4, 700.0], [86.5, 700.0], [86.6, 700.0], [86.7, 700.0], [86.8, 700.0], [86.9, 700.0], [87.0, 700.0], [87.1, 700.0], [87.2, 700.0], [87.3, 700.0], [87.4, 700.0], [87.5, 700.0], [87.6, 700.0], [87.7, 700.0], [87.8, 700.0], [87.9, 700.0], [88.0, 706.0], [88.1, 706.0], [88.2, 706.0], [88.3, 706.0], [88.4, 706.0], [88.5, 706.0], [88.6, 706.0], [88.7, 706.0], [88.8, 706.0], [88.9, 706.0], [89.0, 706.0], [89.1, 706.0], [89.2, 706.0], [89.3, 706.0], [89.4, 706.0], [89.5, 706.0], [89.6, 706.0], [89.7, 706.0], [89.8, 706.0], [89.9, 706.0], [90.0, 707.0], [90.1, 707.0], [90.2, 707.0], [90.3, 707.0], [90.4, 707.0], [90.5, 707.0], [90.6, 707.0], [90.7, 707.0], [90.8, 707.0], [90.9, 707.0], [91.0, 710.0], [91.1, 710.0], [91.2, 710.0], [91.3, 710.0], [91.4, 710.0], [91.5, 710.0], [91.6, 710.0], [91.7, 710.0], [91.8, 710.0], [91.9, 710.0], [92.0, 719.0], [92.1, 719.0], [92.2, 719.0], [92.3, 719.0], [92.4, 719.0], [92.5, 719.0], [92.6, 719.0], [92.7, 719.0], [92.8, 719.0], [92.9, 719.0], [93.0, 725.0], [93.1, 725.0], [93.2, 725.0], [93.3, 725.0], [93.4, 725.0], [93.5, 725.0], [93.6, 725.0], [93.7, 725.0], [93.8, 725.0], [93.9, 725.0], [94.0, 728.0], [94.1, 728.0], [94.2, 728.0], [94.3, 728.0], [94.4, 728.0], [94.5, 728.0], [94.6, 728.0], [94.7, 728.0], [94.8, 728.0], [94.9, 728.0], [95.0, 758.0], [95.1, 758.0], [95.2, 758.0], [95.3, 758.0], [95.4, 758.0], [95.5, 758.0], [95.6, 758.0], [95.7, 758.0], [95.8, 758.0], [95.9, 758.0], [96.0, 761.0], [96.1, 761.0], [96.2, 761.0], [96.3, 761.0], [96.4, 761.0], [96.5, 761.0], [96.6, 761.0], [96.7, 761.0], [96.8, 761.0], [96.9, 761.0], [97.0, 768.0], [97.1, 768.0], [97.2, 768.0], [97.3, 768.0], [97.4, 768.0], [97.5, 768.0], [97.6, 768.0], [97.7, 768.0], [97.8, 768.0], [97.9, 768.0], [98.0, 771.0], [98.1, 771.0], [98.2, 771.0], [98.3, 771.0], [98.4, 771.0], [98.5, 771.0], [98.6, 771.0], [98.7, 771.0], [98.8, 771.0], [98.9, 771.0], [99.0, 774.0], [99.1, 774.0], [99.2, 774.0], [99.3, 774.0], [99.4, 774.0], [99.5, 774.0], [99.6, 774.0], [99.7, 774.0], [99.8, 774.0], [99.9, 774.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 6.0, "minX": 200.0, "maxY": 37.0, "series": [{"data": [[300.0, 10.0], [600.0, 37.0], [700.0, 14.0], [200.0, 6.0], [400.0, 7.0], [500.0, 26.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 24.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 76.0, "series": [{"data": [[0.0, 24.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 76.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 12.782608695652174, "minX": 1.6677195916E12, "maxY": 82.0, "series": [{"data": [[1.667719592E12, 77.0], [1.6677195918E12, 71.0], [1.6677195923E12, 27.142857142857142], [1.6677195917E12, 69.11111111111111], [1.6677195922E12, 39.05882352941177], [1.6677195919E12, 82.0], [1.6677195924E12, 12.782608695652174], [1.6677195916E12, 59.0], [1.6677195921E12, 60.31999999999999]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195924E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 213.0, "minX": 3.0, "maxY": 771.0, "series": [{"data": [[3.0, 633.5], [4.0, 743.0], [6.0, 706.0], [8.0, 561.0], [9.0, 587.5], [10.0, 686.0], [13.0, 673.5], [14.0, 624.5], [15.0, 582.0], [17.0, 662.5], [19.0, 630.0], [20.0, 506.0], [22.0, 561.0], [23.0, 758.0], [24.0, 771.0], [26.0, 527.0], [27.0, 636.0], [28.0, 504.0], [29.0, 580.0], [30.0, 502.0], [31.0, 505.0], [33.0, 528.0], [32.0, 728.0], [35.0, 502.0], [34.0, 670.0], [37.0, 617.0], [36.0, 471.0], [39.0, 503.0], [38.0, 593.0], [41.0, 547.0], [40.0, 500.0], [43.0, 518.0], [42.0, 539.0], [45.0, 638.0], [44.0, 630.0], [47.0, 598.0], [49.0, 513.0], [48.0, 574.0], [51.0, 606.0], [50.0, 604.0], [52.0, 650.0], [55.0, 707.0], [54.0, 698.0], [57.0, 213.0], [56.0, 590.5], [58.0, 447.25], [59.0, 458.0], [61.0, 663.5], [63.0, 525.0], [65.0, 289.0], [66.0, 562.0], [67.0, 643.0], [64.0, 695.0], [68.0, 445.3333333333333], [70.0, 421.8], [71.0, 415.2], [69.0, 686.0], [72.0, 517.0], [74.0, 526.5], [75.0, 562.0], [73.0, 649.0], [79.0, 622.0], [78.0, 627.0], [77.0, 625.0], [76.0, 640.0], [82.0, 502.0], [81.0, 595.0], [80.0, 607.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[46.43000000000001, 563.7900000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 82.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4790.0, "minX": 1.6677195916E12, "maxY": 236140.0, "series": [{"data": [[1.667719592E12, 76820.0], [1.6677195918E12, 47080.0], [1.6677195923E12, 60870.0], [1.6677195917E12, 80500.0], [1.6677195922E12, 148980.0], [1.6677195919E12, 10520.0], [1.6677195924E12, 201330.0], [1.6677195916E12, 37000.0], [1.6677195921E12, 236140.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.667719592E12, 43110.0], [1.6677195918E12, 23950.0], [1.6677195923E12, 33530.0], [1.6677195917E12, 43110.0], [1.6677195922E12, 81430.0], [1.6677195919E12, 4790.0], [1.6677195924E12, 110170.0], [1.6677195916E12, 19160.0], [1.6677195921E12, 119750.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195924E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 223.5, "minX": 1.6677195916E12, "maxY": 641.8000000000001, "series": [{"data": [[1.667719592E12, 615.4444444444446], [1.6677195918E12, 393.4], [1.6677195923E12, 578.1428571428571], [1.6677195917E12, 331.5555555555556], [1.6677195922E12, 569.7058823529412], [1.6677195919E12, 502.0], [1.6677195924E12, 639.8260869565217], [1.6677195916E12, 223.5], [1.6677195921E12, 641.8000000000001]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195924E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 220.25, "minX": 1.6677195916E12, "maxY": 641.12, "series": [{"data": [[1.667719592E12, 615.0], [1.6677195918E12, 393.2], [1.6677195923E12, 577.4285714285714], [1.6677195917E12, 331.5555555555556], [1.6677195922E12, 569.6470588235295], [1.6677195919E12, 499.0], [1.6677195924E12, 639.7826086956522], [1.6677195916E12, 220.25], [1.6677195921E12, 641.12]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195924E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.1428571428571428, "minX": 1.6677195916E12, "maxY": 46.25, "series": [{"data": [[1.667719592E12, 31.222222222222225], [1.6677195918E12, 42.8], [1.6677195923E12, 1.1428571428571428], [1.6677195917E12, 44.55555555555556], [1.6677195922E12, 1.3529411764705885], [1.6677195919E12, 17.0], [1.6677195924E12, 1.3913043478260871], [1.6677195916E12, 46.25], [1.6677195921E12, 22.320000000000004]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195924E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 205.0, "minX": 1.6677195916E12, "maxY": 774.0, "series": [{"data": [[1.667719592E12, 649.0], [1.6677195918E12, 441.0], [1.6677195923E12, 771.0], [1.6677195917E12, 367.0], [1.6677195922E12, 728.0], [1.6677195919E12, 502.0], [1.6677195924E12, 774.0], [1.6677195916E12, 268.0], [1.6677195921E12, 719.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.667719592E12, 649.0], [1.6677195918E12, 441.0], [1.6677195923E12, 771.0], [1.6677195917E12, 367.0], [1.6677195922E12, 681.5999999999999], [1.6677195919E12, 502.0], [1.6677195924E12, 765.2], [1.6677195916E12, 268.0], [1.6677195921E12, 702.8000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.667719592E12, 649.0], [1.6677195918E12, 441.0], [1.6677195923E12, 771.0], [1.6677195917E12, 367.0], [1.6677195922E12, 728.0], [1.6677195919E12, 502.0], [1.6677195924E12, 774.0], [1.6677195916E12, 268.0], [1.6677195921E12, 719.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.667719592E12, 649.0], [1.6677195918E12, 441.0], [1.6677195923E12, 771.0], [1.6677195917E12, 367.0], [1.6677195922E12, 728.0], [1.6677195919E12, 502.0], [1.6677195924E12, 772.8], [1.6677195916E12, 268.0], [1.6677195921E12, 715.4]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.667719592E12, 562.0], [1.6677195918E12, 356.0], [1.6677195923E12, 498.0], [1.6677195917E12, 286.0], [1.6677195922E12, 471.0], [1.6677195919E12, 502.0], [1.6677195924E12, 484.0], [1.6677195916E12, 205.0], [1.6677195921E12, 458.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.667719592E12, 622.0], [1.6677195918E12, 390.0], [1.6677195923E12, 556.0], [1.6677195917E12, 339.0], [1.6677195922E12, 547.0], [1.6677195919E12, 502.0], [1.6677195924E12, 622.0], [1.6677195916E12, 210.5], [1.6677195921E12, 680.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195924E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 345.0, "minX": 19.0, "maxY": 622.0, "series": [{"data": [[19.0, 345.0], [81.0, 622.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 345.0, "minX": 19.0, "maxY": 621.0, "series": [{"data": [[19.0, 345.0], [81.0, 621.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 81.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 50.0, "minX": 1.6677195914E12, "maxY": 430.0, "series": [{"data": [[1.6677195915E12, 110.0], [1.6677195918E12, 120.0], [1.6677195917E12, 160.0], [1.6677195919E12, 50.0], [1.6677195914E12, 430.0], [1.6677195916E12, 130.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195919E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6677195916E12, "maxY": 250.0, "series": [{"data": [[1.667719592E12, 90.0], [1.6677195918E12, 50.0], [1.6677195923E12, 70.0], [1.6677195917E12, 90.0], [1.6677195922E12, 170.0], [1.6677195919E12, 10.0], [1.6677195924E12, 230.0], [1.6677195916E12, 40.0], [1.6677195921E12, 250.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 100, "maxX": 1.6677195924E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6677195916E12, "maxY": 250.0, "series": [{"data": [[1.667719592E12, 90.0], [1.6677195918E12, 50.0], [1.6677195923E12, 70.0], [1.6677195917E12, 90.0], [1.6677195922E12, 170.0], [1.6677195919E12, 10.0], [1.6677195924E12, 230.0], [1.6677195916E12, 40.0], [1.6677195921E12, 250.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195924E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6677195916E12, "maxY": 250.0, "series": [{"data": [[1.667719592E12, 90.0], [1.6677195918E12, 50.0], [1.6677195923E12, 70.0], [1.6677195917E12, 90.0], [1.6677195922E12, 170.0], [1.6677195919E12, 10.0], [1.6677195924E12, 230.0], [1.6677195916E12, 40.0], [1.6677195921E12, 250.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1.6677195924E12, "title": "Total Transactions Per Second"}},
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

