<script>
  function toggleMenu() {
    const menu = document.getElementById('menuList');
    menu.classList.toggle('active');
  }

  function registrarConsultor(event) {
    event.preventDefault();

    // Aquí podrías validar si se subieron archivos si lo deseas
    alert('¡Registro exitoso! Nos pondremos en contacto contigo.');
    event.target.reset();
  }
</script>