class Producto{

    static item = 0;

    constructor(){
        this.persona = [];
        this.objeto = [];

    }

    crear(title, price, thumbnail){
        const persona = {
            title: title,
            price: price,
            thumbnail: thumbnail,
            id : Producto.item+1
        }
        this.objeto.push(persona);
        Producto.item ++;
        return persona;
    }

    buscar(id){
        let persona = {error:'Producto no encontrado'};
        if(this.objeto.length>0){
            for(let i =0; this.objeto.length>=i; i++){
                if (this.objeto[i].id==id){
                    persona = this.objeto[i];
                }
            }
        }
        return persona;
    }

    editar(id, title, price, thumbnail){
        const persona = {};
        if (this.objeto.length>0){
            for (let i = 0; this.objeto.length>=i;i++){
                if(this.objeto[i].id == id){
                    this.objeto[i].title = title;
                    this.objeto[i].price = price;
                    this.objeto[i].thumbnail = thumbnail;
                    persona = this.objeto[i];
                }
            }
        }
    }

    borra(id){
        let estado = false;
        if (this.objeto.length>0){
            for(let i = 0; this.objeto.length>i;i++){
                if (this.objeto[i].id==id){
                    this.objeto.splice(i, 1);
                    estado = true;
                }
            }
        }
        console.log('estado de borrar: '+ estado);
        return estado;
    }

    obtenerTodo(){
        return this.objeto;
    }

}

module.exports = Producto;
