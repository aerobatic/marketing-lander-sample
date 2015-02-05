$(document).ready(function() {
  ga('create', 'UA-59382049-1', 'auto');

  // Set the versionName as the first custom dimension
  ga('set', 'dimension1', __config__.versionName);
  ga('send', 'pageview');

  $("#signUpForm").submit(function(e) {
    var email = $("#email").val();
    if (email.length === 0)
      return false;

    ga('send', 'event', 'sign-up', 'submit');

    $("#signUpForm").hide();
    $("#signUpThankYou").show();

    e.preventDefault();
  });
});