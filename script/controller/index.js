class Controller{
    static buatGrafikTegangan(date){
        Model.getTegangan(date,(Tegangan)=>{
            View.buatGrafik(Tegangan);
        })
    }
}