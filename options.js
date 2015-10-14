(function(){
  var radios = document.querySelectorAll('input[name=acct_type]');
  var domain_field = document.querySelector('#txt_domain');
  var apps_radio = null;

  // Add event listeners to radio buttons
  for (var i = 0; i < radios.length; i++) {
    var radio = radios[i];
    radio.addEventListener('change', function(e){
      domain_field.disabled = !apps_radio.checked;
      form_changed_event();
    });
    if (radio.value == 'apps'){
      apps_radio = radio;
    }
  };

  // Set up event listener to store domain
  var form_changed_event = function(){
    var domain = apps_radio.checked ? domain_field.value : null;
    chrome.storage.sync.set({'apps_domain': domain}, function() {
      // Settings saved
    });
  };
  domain_field.addEventListener('blur', form_changed_event);
})();
