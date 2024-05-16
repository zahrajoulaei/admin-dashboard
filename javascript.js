const pieChart = document.getElementById('pie-chart');
const doughnutChart = document.getElementById('doughnut-chart');
const bar = document.getElementById('myChart');






  new Chart(pieChart, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Orders',
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#0D6EFD', '#FFCE56'],
          hoverOffset: 4,
        },
      ],
    },
  });

  new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
      labels: ['Red', 'Blue', 'Yellow'],
      datasets: [
        {
          label: 'Orders',
          data: [300, 50, 100],
          backgroundColor: ['#FF6384', '#0D6EFD', '#FFCE56'],
          hoverOffset: 4,
        },
      ],
    },
  });


            
  
    new Chart(bar, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
 