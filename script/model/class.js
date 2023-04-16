class SensorData{
    constructor(menit,intensitas,tegangan,arus,suhu,kelembapan){
        this.menit = menit
        this.intensitas = intensitas
        this.tegangan = tegangan
        this.arus = arus
        this.suhu = suhu
        this.kelembapan = kelembapan
    }
}

class Factory{
    static createData(menit,intensitas,tegangan,arus,suhu,kelembapan){
        let data = new SensorData(menit,intensitas,tegangan,arus,suhu,kelembapan);
        return data;
    }
}

module.exports = Factory;