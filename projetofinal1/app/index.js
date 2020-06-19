
//Dados utilizados para o trabalho final

let firstGrafic = document.getElementById('firstGrafic').getContext('2d')
let chart = new Chart(firstGrafic, {
	type: "line",
	data: {
        labels: ['2000', '2001', '2002', '2003', '2004', '2005'],                    
        datasets: [
            {
                label: 'Teste do Mestrado - crescimento populacional',
                data: [173448346, 175885229, 178276128, 180619108, 182911487, 185150806],
                backgroundColor:"rgba(255, 34, 0, 0.3)",
                borderColor:"#0000ff"
            },
            {
                label: 'Teste do Mestrado - exemplo comparativo',
                data: [173448346, 185150806, 175885229, 182911487, 178276128, 180619108],
                backgroundColor:"rgba(0, 255, 0, 0.3)",
                borderColor:"#002200"
            }
        ]
    }
})