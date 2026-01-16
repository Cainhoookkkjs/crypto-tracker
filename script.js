// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.body.classList.toggle('light-theme');
    themeIcon.textContent = isDark ? '🌙' : '☀️';

    // Update charts with new theme
    updateChartColors();
});

// Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString('pt-BR');
    }, 16);
}

// Initialize counters
window.addEventListener('load', () => {
    document.querySelectorAll('[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        animateCounter(el, target);
    });
});

// Navigation Active State with feedback
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Smooth scroll to section
        const targetId = link.getAttribute('href');
        const linkText = link.textContent;

        // Handle News section (doesn't exist in HTML, show toast)
        if (targetId === '#news') {
            showToast('📰 Seção de Notícias em breve! Fique ligado para as últimas novidades cripto.');
            return;
        }

        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            showToast(`📍 Navegando para: ${linkText}`);
        }
    });
});

// Crypto Price Data (Simulated)
const cryptoData = {
    btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 324580,
        history: [310000, 315000, 312000, 318000, 320000, 322000, 324580]
    },
    eth: {
        name: 'Ethereum',
        symbol: 'ETH',
        price: 12450,
        history: [11800, 11900, 12000, 12100, 12200, 12300, 12450]
    },
    ada: {
        name: 'Cardano',
        symbol: 'ADA',
        price: 2.85,
        history: [3.2, 3.1, 3.0, 2.95, 2.90, 2.87, 2.85]
    },
    sol: {
        name: 'Solana',
        symbol: 'SOL',
        price: 580.50,
        history: [520, 535, 545, 555, 565, 575, 580.50]
    },
    dot: {
        name: 'Polkadot',
        symbol: 'DOT',
        price: 42.30,
        history: [40.0, 40.5, 41.0, 41.5, 42.0, 42.2, 42.30]
    },
    link: {
        name: 'Chainlink',
        symbol: 'LINK',
        price: 85.60,
        history: [88.0, 87.5, 87.0, 86.5, 86.0, 85.8, 85.60]
    }
};

// Create Mini Charts
function createMiniChart(canvasId, data, isPositive) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

    const color = isPositive ? 'rgba(0, 184, 148, 1)' : 'rgba(255, 118, 117, 1)';
    const bgColor = isPositive ? 'rgba(0, 184, 148, 0.1)' : 'rgba(255, 118, 117, 0.1)';

    gradient.addColorStop(0, bgColor);
    gradient.addColorStop(1, 'transparent');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array(data.length).fill(''),
            datasets: [{
                data: data,
                borderColor: color,
                backgroundColor: gradient,
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 4,
                pointHoverBackgroundColor: color,
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            scales: {
                x: { display: false },
                y: { display: false }
            },
            interaction: {
                intersect: false
            }
        }
    });
}

// Initialize all mini charts
setTimeout(() => {
    createMiniChart('chartBtc', cryptoData.btc.history, true);
    createMiniChart('chartEth', cryptoData.eth.history, true);
    createMiniChart('chartAda', cryptoData.ada.history, false);
    createMiniChart('chartSol', cryptoData.sol.history, true);
    createMiniChart('chartDot', cryptoData.dot.history, true);
    createMiniChart('chartLink', cryptoData.link.history, false);
}, 100);

// Portfolio Calculator
const calculateBtn = document.getElementById('calculateBtn');
const cryptoSelect = document.getElementById('cryptoSelect');
const investAmount = document.getElementById('investAmount');
const timeframe = document.getElementById('timeframe');
const resultSection = document.getElementById('calculatorResult');

calculateBtn.addEventListener('click', () => {
    const crypto = cryptoSelect.value;
    const amount = parseFloat(investAmount.value);
    const days = parseInt(timeframe.value);

    if (!amount || amount <= 0) {
        alert('Por favor, insira um valor válido');
        return;
    }

    // Simulate return based on timeframe (random for demo)
    const returnRates = {
        7: 0.03,
        30: 0.12,
        90: 0.28,
        365: 0.85
    };

    const baseReturn = returnRates[days] || 0.12;
    const variance = (Math.random() - 0.5) * 0.1; // +/- 5% variance
    const finalRate = baseReturn + variance;
    const finalAmount = amount * (1 + finalRate);
    const profit = finalAmount - amount;
    const profitPercent = (profit / amount) * 100;

    // Update result display
    document.querySelector('.result-value.initial').textContent =
        'R$ ' + amount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.querySelector('.result-value.final').textContent =
        'R$ ' + finalAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    const profitElement = document.querySelector('.result-profit');
    const profitValueElement = document.querySelector('.profit-value');

    if (profit >= 0) {
        profitElement.className = 'result-profit positive';
        profitElement.style.background = 'rgba(0, 184, 148, 0.1)';
        profitElement.style.borderColor = 'rgba(0, 184, 148, 0.3)';
        profitElement.style.color = 'var(--secondary-color)';
        profitValueElement.textContent =
            `+R$ ${profit.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (+${profitPercent.toFixed(2)}%)`;
        document.querySelector('.profit-icon').textContent = '📈';
    } else {
        profitElement.className = 'result-profit negative';
        profitElement.style.background = 'rgba(255, 118, 117, 0.1)';
        profitElement.style.borderColor = 'rgba(255, 118, 117, 0.3)';
        profitElement.style.color = '#ff7675';
        profitValueElement.textContent =
            `R$ ${profit.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${profitPercent.toFixed(2)}%)`;
        document.querySelector('.profit-icon').textContent = '📉';
    }

    // Update badge
    const timeframeText = {
        7: '7 dias',
        30: '30 dias',
        90: '90 dias',
        365: '1 ano'
    };
    document.querySelector('.result-badge').textContent = timeframeText[days];

    // Animation
    resultSection.style.transform = 'scale(0.95)';
    setTimeout(() => {
        resultSection.style.transform = 'scale(1)';
    }, 100);
});

// Real-time price updates (simulated)
function updatePrices() {
    document.querySelectorAll('.crypto-card').forEach(card => {
        const crypto = card.dataset.crypto;
        if (!cryptoData[crypto]) return;

        // Simulate price change (-2% to +2%)
        const change = (Math.random() - 0.5) * 0.04;
        const oldPrice = cryptoData[crypto].price;
        const newPrice = oldPrice * (1 + change);
        cryptoData[crypto].price = newPrice;

        // Update price display
        const priceElement = card.querySelector('.crypto-price');
        if (priceElement) {
            priceElement.textContent = 'R$ ' + newPrice.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        // Update change indicator (subtle animation)
        const changeElement = card.querySelector('.price-change');
        if (change > 0) {
            changeElement.classList.remove('negative');
            changeElement.classList.add('positive');
            card.style.borderColor = 'rgba(0, 184, 148, 0.2)';
        } else if (change < 0) {
            changeElement.classList.remove('positive');
            changeElement.classList.add('negative');
            card.style.borderColor = 'rgba(255, 118, 117, 0.2)';
        }

        setTimeout(() => {
            card.style.borderColor = '';
        }, 1000);
    });
}

// Update prices every 5 seconds
setInterval(updatePrices, 5000);

// Control buttons functionality
document.querySelectorAll('.control-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        // Remove active class from all buttons in the same group
        this.parentElement.querySelectorAll('.control-btn').forEach(b => {
            b.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.crypto-card, .feature-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Chart colors update for theme
function updateChartColors() {
    // This would require recreating charts with new colors
    // For simplicity, we'll reload the page when theme changes
    // In production, you'd want to update chart instances
}

// Crypto card click to show more details (for future enhancement)
document.querySelectorAll('.crypto-card').forEach(card => {
    card.addEventListener('click', () => {
        // Could open a modal with detailed charts and information
        console.log('Clicked on:', card.dataset.crypto);
    });
});

// Conectar Carteira button
const walletBtn = document.querySelector('.btn-primary');
if (walletBtn) {
    walletBtn.addEventListener('click', () => {
        showToast('🔗 Conectar Carteira - Em breve! Integração Web3 será adicionada.', 3000);

        // Animation feedback
        walletBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            walletBtn.style.transform = 'scale(1)';
        }, 100);
    });
}

// Toast notification function
function showToast(message, duration = 2500) {
    // Remove any existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) existingToast.remove();

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #6c5ce7 0%, #764ba2 100%);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        font-weight: 600;
        font-size: 0.95rem;
        max-width: 400px;
    `;

    document.body.appendChild(toast);

    // Remove after duration
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Add CSS animations for toast
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(toastStyle);

console.log('🚀 CryptoTrack carregado com sucesso!');
console.log('💰 Rastreador desenvolvido por Caio Oliveira');

