var ctx = document.getElementById('lineLineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jun", "Ago", "Set", "Out", "Nov", "Dez"],
        datasets: [{
            label: "TAXA DE OPERAÇÕES - 2022",
            data: [5,10,20,35,15,8,12,11,9,5,18],
            borderWidth: 6,
            borderColor: 'rgba(77,166,253,0,85)',
            backgroundColor:'transparent'
        }]
    }
});