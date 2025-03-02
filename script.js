fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);

        const ctx = document.getElementById('myChart').getContext('2d');
        new Chart(ctx, {
            type: 'line', // You can change to 'line', 'pie', etc.
            data: {
                labels: labels,
                datasets: [{
                    label: 'Value',
                    data: values,
                    backgroundColor: 'rgba(75, 192, 192, 0.5)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading JSON:', error));
