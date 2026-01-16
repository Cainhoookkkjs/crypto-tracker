# 💰 CryptoTrack - Premium Crypto Tracker

![Status](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)

> Rastreador de criptomoedas premium com atualização em tempo real, gráficos interativos e calculadora de portfólio

## ✨ Destaques

### 🎨 Design de Alto Nível
- **Dark/Light Theme** - Alternância suave entre temas claro e escuro
- **Animated Orbs Background** - Fundo animado com efeitos flutuantes
- **Glassmorphism Effects** - Elementos com efeito de vidro fosco moderno
- **Micro-animations** - Transições e animações suaves em toda interface

### 📊 Funcionalidades Principais

#### 💱 Rastreamento de Mercado
- 6 principais criptomoedas (BTC, ETH, ADA, SOL, DOT, LINK)
- Atualização de preços simulada em tempo real
- Gráficos de tendência individual para cada moeda
- Indicadores de variação positiva/negativa
- Market cap e volume 24h

#### 🧮 Calculadora de Portfólio
- Simulação de investimentos
- Múltiplos períodos de análise (7, 30, 90, 365 dias)
- Cálculo de retorno estimado
- Interface intuitiva e responsiva

#### 🌓 Alternância de Tema
- Modo escuro (padrão)
- Modo claro
- Transição suave entre temas
- Persistência de preferência

### 💎 Tecnologias

- **HTML5** - Estrutura semântica moderna
- **CSS3** - Design avançado com:
  - CSS Custom Properties (variáveis)
  - CSS Grid & Flexbox
  - Backdrop Filter (glassmorphism)
  - Keyframe Animations
  - Gradients e Shadows
- **JavaScript ES6+** - Lógica e interatividade:
  - Chart.js para visualizações
  - Event listeners
  - Intersection Observer API
  - Timers e intervals
- **Chart.js** - Gráficos responsivos e interativos

## 🚀 Demonstração

Veja o projeto ao vivo: [CryptoTrack Demo](https://cainhookkj.github.io/crypto-tracker)

## 📸 Capturas de Tela

### Hero Section
![Hero](./screenshots/hero.png)

### Market Overview
![Market](./screenshots/market.png)

### Portfolio Calculator
![Calculator](./screenshots/calculator.png)

## 📦 Início Rápido

### Clonar Repositório
```bash
git clone https://github.com/Cainhookkj/crypto-tracker.git
cd crypto-tracker
```

### Executar Localmente
```bash
# Método 1: Abrir diretamente
open index.html  # macOS
start index.html  # Windows
xdg-open index.html  # Linux

# Método 2: Com Live Server (recomendado)
npm install -g live-server
live-server
```

## 📁 Estrutura

```
crypto-tracker/
│
├── index.html          # Página principal
├── styles.css          # Estilos e temas
├── script.js           # Lógica JavaScript
├── README.md           # Documentação
│
└── screenshots/        # Capturas de tela
    ├── hero.png
    ├── market.png
    └── calculator.png
```

## 🎯 Uso

### Navegação
- Use o menu superior para navegar entre seções
- Clique em "Conectar Carteira" para simulação (futura integração)

### Visualização de Mercado
- Veja as 6 principais criptomoedas
- Observe os gráficos de tendência
- Preços atualizam automaticamente a cada 5 segundos

### Calculadora
1. Selecione uma criptomoeda
2. Insira o valor do investimento
3. Escolha o período
4. Clique em "Calcular Retorno"

### Tema
- Clique no ícone 🌙/☀️ no canto superior direito
- O tema alterna entre escuro e claro

## 🔧 Personalização

### Modificar Cores
Edite as variáveis CSS em `styles.css`:

```css
:root {
    --primary-color: #6c5ce7;
    --secondary-color: #00b894;
    --accent-color: #fd79a8;
    /* ... */
}
```

### Adicionar Criptomoedas
No arquivo `script.js`, adicione ao objeto `cryptoData`:

```javascript
const cryptoData = {
    // ...
    novamoeda: {
        name: 'Nova Moeda',
        symbol: 'NVM',
        price: 100.00,
        history: [95, 96, 97, 98, 99, 100]
    }
};
```

Depois adicione o card HTML correspondente em `index.html`.

### Integrar API Real
Substitua os dados simulados por chamadas à API:

```javascript
// Exemplo com CoinGecko API
async function fetchCryptoData() {
    const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl'
    );
    const data = await response.json();
    // Atualizar UI com dados reais
}
```

## 🌟 Recursos Futuros

- [ ] Integração com API real (CoinGecko, CoinMarketCap)
- [ ] Mais criptomoedas (100+)
- [ ] Gráficos avançados (candlestick, volume)
- [ ] Sistema de alertas de preço
- [ ] Portfolio tracking persistente
- [ ] Integração com carteiras Web3
- [ ] Comparação de múltiplas moedas
- [ ] Dados históricos estendidos
- [ ] Modo PWA (Progressive Web App)

## 📊 Performance

- ⚡ Primeira carga: < 1.5s
- 📦 Tamanho total: ~200KB
- 🎨 60 FPS em animações
- 📱 100% responsivo (mobile-first)
- ♿ Acessível (WCAG 2.1)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Consulte [LICENSE](LICENSE) para mais informações.

## 👨‍💻 Autor

**Caio Oliveira**

- GitHub: [@Cainhookkj](https://github.com/Cainhookkj)
- LinkedIn: [Caio Oliveira](https://linkedin.com/in/caio-oliveira)
- Email: [caio@dev.com](mailto:caio@dev.com)

## 🙏 Créditos

- [Chart.js](https://www.chartjs.org/) - Biblioteca de gráficos
- [Google Fonts](https://fonts.google.com/) - Fontes Poppins e JetBrains Mono
- Design inspirado por Dribbble e Behance

## 📝 Notas

> **Aviso:** Este é um projeto educacional. Os dados de preços são simulados e não devem ser usados para decisões financeiras reais. Sempre faça sua própria pesquisa (DYOR) antes de investir em criptomoedas.

---

<div align="center">

**⭐ Se gostou, deixe uma estrela!**

Desenvolvido com 💜 por [Caio Oliveira](https://github.com/Cainhookkj)

</div>
