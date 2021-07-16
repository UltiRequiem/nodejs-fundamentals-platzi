function inicio(callback){
    setTimeout(function(){
        console.log("1.-Abrir la puerta del auto")
        callback();
    },1000);

}


function entar(call){
    setTimeout(() => {
        console.log("2.-Entrando al auto");
        call()
    }, 1000);
}

function cerrar(coll){
    setTimeout(() => {
        console.log("3.-Cerrar la puerta del auto");
        coll();
    }, 1000);
}

function encender(callba){
    setTimeout(() => {
        console.log("4.-Encender auto");
        callba();
    }, 1000);
}

function cinturon(callbackx){
    setTimeout(() => {
        console.log("5.-Ponerse cinturon de seguridad");
        callbackx();
    }, 1000);
}

function avanzar(callbackq){
    setTimeout(() => {
        console.log("6.-Poner en marcha el auto.....");
        callbackq();
    }, 1000);
}

function finalizado(){
    setTimeout(() => {
        console.log("7.-Proceso termindao con exito ahora usated sabra lo que ara con el auto que la fuerza lo acompañe :) ")
    }, 1000);
}

inicio(function(){
    entar(function(){
        cerrar(function(){
            encender(function(){
                cinturon(function(){
                    avanzar(function(){
                        finalizado()

                    })
                })
            })
        })
    })
})
