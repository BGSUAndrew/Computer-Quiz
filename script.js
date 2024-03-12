        var pcTotal = 0;
        var macTotal = 0;

        function budget() {
            if(document.getElementById('lessThanThousand').checked) {
                pcTotal++
            }else if(document.getElementById('greaterThanThousand').checked) {
                macTotal++
            }
        }

        function hardwareType() {
            if(document.getElementById('desktop').checked) {
                pcTotal++
            }else if(document.getElementById('laptop').checked) {
                macTotal++
            }
        }

        function customization() {
            if(document.getElementById('customizeMuch').checked) {
                pcTotal++
            }else if(document.getElementById('customizeLittle').checked) {
                macTotal ++
            }
        }

        function result() {
            if (pcTotal > macTotal) {
                console.log("PC wins");
            } else if (macTotal > pcTotal) {
                console.log("Mac wins");
            } else {
                console.log("Tied");
            }
        }

        function formSubmit() {
            budget();
            hardwareType();
            customization();
            result();
            console.log("PC total is " + pcTotal);
            console.log("Mac total is " + macTotal);
        }