function carrega_dados () {
  document.addEventListener("deviceready", function() {
    var $deviceId = device.uuid || 1337;
    $.post( "https://eventosdermatologicos.com.br/apps/sbdrj/recebepost.php", { form: "carrega_login", device: $deviceId })
      .done(function( data ) {
        if (data==='AUTORIZADO') window.location.href = "principal.html?logado";
        else $("#app").show();
      });
  });
}