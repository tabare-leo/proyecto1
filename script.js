function guardarFecha() {
  const fechaSeleccionada = document.getElementById('miCalendario').value;

  if(!fechaSeleccionada || fechaSeleccionada==""){
    alert("Por favor elige Fecha");
  }else{

      alert('Fecha guardada: ' + fechaSeleccionada);
  }


}