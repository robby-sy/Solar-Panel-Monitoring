
class Model{
    static getData(date,callback) {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
          let sensorData = JSON.parse(this.responseText).map(Element =>{
            let data = Factory.createData(+Element.Menit,+Element.Intensitas,+Element.Tegangan,+Element.Arus,+Element.Kelembapan,+Element.Suhu)
            return data;
          })
          callback(sensorData);
          }
        xhttp.open("GET",`http://solardata.my.id/readData.php?date=${date}`, true);
        xhttp.send();
      }
    
    static getTegangan(date,callback){
        this.getData(date,(dataSensor)=>{
            let tegangan = [];
            dataSensor.forEach(element => {
                tegangan.push(element.tegangan)
            });
            callback(tegangan)
        })
    }
}
