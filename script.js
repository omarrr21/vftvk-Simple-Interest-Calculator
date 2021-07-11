  
function compute() {
  // Get references and values
  const principalInput = document.getElementById("principal");
  const principal = principalInput.value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;
  const result = document.getElementById("result");
  // Compute interest
  const interest = (principal * years * rate) / 100;
  // Get years
  const year = new Date().getFullYear() + parseInt(years);
  // Validate principal input
  if (principal <= 0) {
    alert("Enter a positive number");
    principalInput.value = "";
    principalInput.focus();
    return;
  }
  // Update result HTML
  result.innerHTML = `If you deposit <mark>${principal}</mark>, <br /> at an interest rate of <mark>${rate}%</mark>. <br /> You will receive an amount of <mark>${interest}</mark>, <br /> in the year <mark>${year}</mark>`;
}

function updateRate() {
  const rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}

const rateSlider = document.getElementById("rate");

// Listen for change event in the slider
rateSlider.addEventListener("change", updateRate);



// var principal = document.getElementById("principal").value;
// var rate = document.getElementById("rate").value;
// var years = document.getElementById("years").value;
// var interest = principal * years * rate /100;
// var year = new Date().getFullYear()+parseInt(years);

// function compute()
// {
//     p = document.getElementById("principal").value;
    
// }
        
// function updateRate() 
// {
//     var rateval = document.getElementById("rate").value;
//     document.getElementById("rate_val").innerText=rateval;
}
