

     <script>
    
         //-----------------------------------------------------
        // This function populates the database
        //   "lockerinfo/NE/NE1"
        // Lockerinfo is a collection of documents.
        // Each document (NE, SW, etc.) has one key/value
        // pair to represent vacant lockers.
        // The "key" is the name of the building;
        // The "value" is an ARRAY of integers representing vacant lockers
        //-----------------------------------------------------
        function populateNE_VL() {
            var NEObj = { //define all the buildings an list of vacant ones
                NE1: [11, 12, 13, 14, 15, 16, 17, 18, 19],
                NE2: [11, 12, 13, 14, 15, 16, 17, 18, 19],
                NE3: [11, 12, 13, 14, 15, 16, 17, 18, 19]
                }
            
//            var NEFloorObj = {//define all the floors an list of vacant ones
//                f1: [11, 12, 13, 14, 15, 16, 17, 18, 19],
//                f2: [11, 12, 13, 14, 15, 16, 17, 18, 19],
//                f3: [11, 12, 13, 14, 15, 16, 17, 18, 19]
//            }
            
            
            console.log("in populate vacant lockers" + NEObj);
            db.collection("lockerinfo").doc("NE")
                .set(NEObj)
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
         
//            db.collection("lockerinfo").doc("NE").collection("floor")
//                .set(NEFloorObj)
//                .then(function () {
//                    console.log("Document successfully written!");
//                })
//                .catch(function (error) {
//                    console.error("Error writing document: ", error);
//                });
        };
        populateNE_VL();




--------------------------------//OTHER BUILDINGS---------------------------------------
         
//         function populateNW_VL() {
//            var NWObj = { //define all the buildings an list of vacant ones
//                NW3: [11, 22, 33],
//                NW1: [11, 22, 33],
//                NW2: [11, 22, 33]
//            }
//            console.log("in populate vacant lockers" + NWObj);
//            db.collection("lockerinfo").doc("NW")
//                .set(NWObj)
//                .then(function () {
//                    console.log("Document successfully written!");
//                })
//                .catch(function (error) {
//                    console.error("Error writing document: ", error);
//                });
//        };
//        populateNW_VL();
         
         
         
//         function populateSE_VL() {
//            var SEObj = { //define all the buildings an list of vacant ones
//                SE3: [11, 22, 33],
//                SE1: [11, 22, 33],
//                SE2: [11, 22, 33]
//            }
//            console.log("in populate vacant lockers" + SEObj);
//            db.collection("lockerinfo").doc("SE")
//                .set(SEObj)
//                .then(function () {
//                    console.log("Document successfully written!");
//                })
//                .catch(function (error) {
//                    console.error("Error writing document: ", error);
//                });
//        };
//        populateSE_VL();
         
         
//         function populateSW_VL() {
//            var SWObj = { //define all the buildings an list of vacant ones
//                SW3: [11, 22, 33],
//                SW1: [11, 22, 33],
//                SW2: [11, 22, 33]
//            }
//            console.log("in populate vacant lockers" + SWObj);
//            db.collection("lockerinfo").doc("SW")
//                .set(SWObj)
//                .then(function () {
//                    console.log("Document successfully written!");
//                })
//                .catch(function (error) {
//                    console.error("Error writing document: ", error);
//                });
//        };
//        populateSW_VL();
    </script>