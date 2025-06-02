<script>
  function mostrarFormularioCompra(nombreProducto) {
    document.getElementById('formulario-compra').classList.remove('oculto');
    document.getElementById('producto').value = nombreProducto;
  }

  function enviarPedidoWhatsApp() {
    const producto = document.getElementById('producto').value;
    const nombre = document.getElementById('nombre').value;
    const domicilio = document.getElementById('domicilio').value;
    const telefono = document.getElementById('telefono').value;
    const pago = document.getElementById('pago').value;

    // Valida que no estén vacíos los campos requeridos
    if (!nombre || !domicilio || !telefono || !pago) {
      alert('Por favor completa todos los campos');
      return;
    }

    // Cambia el número por tu WhatsApp con código de país y sin espacios
    const numero = "527711253543";

    const mensaje = `Hola, quiero realizar un pedido:\n\n🛍 Producto: ${producto}\n👤 Nombre: ${nombre}\n🏠 Domicilio: ${domicilio}\n📞 Teléfono: ${telefono}\n💳 Forma de pago: ${pago}`;

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
  }
</script>