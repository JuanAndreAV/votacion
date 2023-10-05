

async function obtenerVotos(){
    try { fetch('http://34.200.251.81/api/votes',{
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
        },
    })
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error('Solicitud no exitosa')
        }
        return respuesta.json();
       
    })
    .then(data => {
        let tabla = document.getElementById('contenido');
       
        let datos = "";
        for(let elemento of data){
            
            datos += `

         <tr>
            <td>${elemento.restaurantId}</td>
            <td>${elemento.customerName}</td>
            <td>${elemento.customerId}</td>
            <td>${elemento.invoiceId}</td>
            <td>${elemento.attentionScore}</td> 
         </tr>

         `;
        }
        tabla.innerHTML = datos;
        
    });

    }catch(error){
        alert("Algo salió mal: ", error)

    }

}

async function buscar(){
    try { fetch('http://34.200.251.81/api/votes',{
        method: "GET",
        headers: {
          "Content-Type": "aplication/json",
        },
    })
    .then(respuesta => {
        if(!respuesta.ok){
            throw new Error('Solicitud no exitosa')
        }
        return respuesta.json();
       
    })
    .then(data => {
       let restaurante = document.getElementById('consultar').value;
        
        let buscador = data.filter(function(diccionario){
            return diccionario.restaurantId === restaurante
        });
        let puntos = buscador.map(function(diccionario){
            return diccionario.attentionScore
        });
        if(puntos.length > 0){
            var suma = puntos.reduce(function(a,b){
                return a + b;
            });
            let promedio = suma / puntos.length;
            let votos = document.getElementById('votos');
            votos.innerText = "Votación: ("+puntos+")"
            let numeroVotos = document.getElementById('numeroVotos');
            numeroVotos.innerText = "Número de votos: "+puntos.length

            let mostrarPromedio = document.getElementById("promedio");
            mostrarPromedio.innerText = "Promedio: "+ promedio

            
            
        }
       
    });

    }catch(error){
        alert("Algo salió mal: ", error)

    }

}



/*async function buscar(){
    try{
        let id = document.getElementById('inputConsulta').value;
        if (id === ''){
            alert('Ingresa un ID');
            return;
        }
        axios.get('http://34.200.251.81/api/votes'+id)
        .then(respuesta => {
            let res = respuesta.data;
            document.getElementById('restaurante').value = res.restaurantId

        })
        .catch(error => {throw new Error("Error: "+error)})


    }catch(error){
        console.error(error)
    }

}

buscar()*/