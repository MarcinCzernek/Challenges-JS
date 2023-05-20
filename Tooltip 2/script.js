// const square = document.querySelectorAll('.square');


// square.addEventListener('click', ()=>{
//   tooltip.classList.add("active");
// });

// square.forEach(square => {
//   square.addEventListener('click', () => {
    
//     const tooltip = square.nextElementSibling;
    
//     if(tooltip && tooltip.classList.contains('tooltip')) {
      
//       const isVisible = tooltip.style.display !== none;
      
//       if(isVisible){
        
//         tooltip.style.display = 'none';
//       }else{
//         tooltip.style.display = 'block';
//       }
//     }
//   })
// })

const squares = document.querySelectorAll('.square');

  // Iterujemy po każdym elemencie
  squares.forEach(square => {
    // Dodajemy obsługę zdarzenia 'click'
    square.addEventListener('click', () => {
      // Znajdujemy tooltip dla danego kwadratu
      const tooltip = square.nextElementSibling;

      // Sprawdzamy, czy tooltip istnieje
      if (tooltip && tooltip.classList.contains('tooltip')) {
        // Sprawdzamy, czy tooltip jest widoczny
        const isVisible = tooltip.style.display !== 'none';

        // Jeśli tooltip jest widoczny, ukrywamy go
        if (isVisible) {
          tooltip.style.display = 'none';
        } else {
          // Jeśli tooltip jest ukryty, pokazujemy go
          tooltip.style.display = 'block';
        }
      }
    });
  });