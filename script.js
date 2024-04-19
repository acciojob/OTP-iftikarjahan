document.addEventListener('DOMContentLoaded', function() {
  const codeInputs = document.querySelectorAll('.code');
  
  codeInputs.forEach(function(input, index) {
    input.addEventListener('input', function() {
      if (this.value.length === 1) {
        if (index < codeInputs.length - 1) {
          codeInputs[index + 1].focus();
        }
      }
    });
    
    input.addEventListener('keydown', function(event) {
      if (event.key === 'Backspace') {
        if (this.value.length === 0) {
          if (index > 0) {
            codeInputs[index - 1].focus();
          }
        }
      }
    });
  });
});

