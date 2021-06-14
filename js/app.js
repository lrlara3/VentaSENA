var app = new Vue({

  el: '#app',
  data: {
      cant:"",
      opcion: 1,
      tipoRb: "",
      tipoRb2: "",
      prManz: 1300,
      prPera: 1600,
      precio: 0,
      tDcto: 0,
      tPagar: 0,

  },

 
  methods: {
        concatenar: function() {
             this.nomConcat = `${this.nombre}${this.apellido}`;
        },
        opcionContar: function() {
            if (this.opcion == 0) {
                this.opcion = 1;  
            } else {
                this.opcion = 0;
            }
           
        },
        precioProd: function() {
              if (this.tipoRb == "0") {
            this.precio=this.prManz;
          } else {
            this.precio=this.prPera;
          }

        },
        calcularDcto: function() {
              if (this.tipoRb2 == "1") {
            this.tDcto = 0.10;
          } else {
            this.tDcto= 0;
          }
        },
        total: function() {
          this.tPagar = (this.cant * this.precio) - ((this.cant * this.precio)*this.tDcto);
          this.opcionContar();
        }
           
  },    
  
})
