// Simulação de dados iniciais do dashboard
const producaoTotal = document.getElementById("producao-total");
const custos = document.getElementById("custos");
const eficiencia = document.getElementById("eficiencia");

// Dados de exemplo
let dadosDashboard = {
    producao: 1250,
    custos: 85000,
    eficiencia: 92
};

// Função para atualizar dashboard
function atualizarDashboard(dados) {
    producaoTotal.textContent = dados.producao;
    custos.textContent = `R$ ${dados.custos.toLocaleString('pt-BR')}`;
    eficiencia.textContent = `${dados.eficiencia}%`;
}

// Atualiza ao carregar
window.onload = () => {
    atualizarDashboard(dadosDashboard);
};
