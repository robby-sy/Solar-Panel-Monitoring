class View{
    static buatGrafik(dataArray){
        let dataPoints = dataArray.map(element=>{
            return {y:element};
        })
        var chart = new CanvasJS.Chart("chartContainer", { 
            title: {
                text: "Adding & Updating dataPoints"
            },
            data: [
            {
                type: "spline",
                dataPoints: dataPoints
            }
            ]
        });
        chart.render();	
    }
}