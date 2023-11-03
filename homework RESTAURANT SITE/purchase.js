document.addEventListener("DOMContentLoaded", function () {
  const cardNumberInput = document.getElementById("cardNumber");
  const last3DigitsInput = document.getElementById("last3digits");
  const expYearInput = document.getElementById("expYear");

  cardNumberInput.addEventListener("input", function () {
      const sanitizedValue = cardNumberInput.value.replace(/\D/g, '');

      if (sanitizedValue.length > 16) {
          cardNumberInput.value = sanitizedValue.slice(0, 16);
      } else {
          cardNumberInput.value = sanitizedValue;
      }
  });

  last3DigitsInput.addEventListener("input", function () {
      const sanitizedValue = last3DigitsInput.value.replace(/\D/g, '');

      if (sanitizedValue.length > 3) {
          last3DigitsInput.value = sanitizedValue.slice(0, 3);
      } else {
          last3DigitsInput.value = sanitizedValue;
      }
  });

  expYearInput.addEventListener("input", function () {
      const sanitizedValue = expYearInput.value.replace(/\D/g, '');

      if (sanitizedValue.length > 4) {
          expYearInput.value = sanitizedValue.slice(0, 4);
      } else {
          expYearInput.value = sanitizedValue;
      }
  });

});

const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const pageURL = "index.html";
    window.location.href = pageURL;
});

document.getElementById("payButton").addEventListener("click", function() {
  var toast = document.getElementById("toast");
  toast.style.display = "block";
  setTimeout(function() {
      toast.style.display = "none"; 
  }, 3000); 

});
