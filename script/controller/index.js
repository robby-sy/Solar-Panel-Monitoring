let Model = require('./model/index.js');
let View = require('./view')

class controller{
    static buatGrafikTegangan(date){
        Model.getTegangan(date,(Tegangan)=>{
            View.buatGrafik(Tegangan);
        })
    }
}