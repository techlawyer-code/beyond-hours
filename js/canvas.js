/**
 * 🌙 Beyond Hours — Ambient Nightlife Canvas (Pink, Purple & Electric Gold)
 * Creates floating dreamy bokeh orbs and neon embers matching the Instagram brand aesthetic.
 */

class NightlifeAtmosphere {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.orbs = [];
    this.mouse = { x: null, y: null, radius: 160 };
    
    // Luxury Pink, Purple, Violet & Warm Gold palette
    this.colors = [
      'rgba(255, 46, 147, ',   // Neon Party Pink
      'rgba(157, 78, 221, ',   // Electric Violet
      'rgba(199, 125, 255, ',  // Soft Lavender Pink
      'rgba(255, 215, 0, ',    // Champagne Gold
      'rgba(255, 83, 161, ',   // Hot Pink
      'rgba(123, 44, 191, '    // Deep Cyber Purple
    ];

    this.init();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    window.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  init() {
    this.resize();
    this.createOrbs();
    this.createParticles();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  createOrbs() {
    this.orbs = [];
    const orbCount = Math.max(4, Math.floor(window.innerWidth / 350));
    for (let i = 0; i < orbCount; i++) {
      this.orbs.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        radius: Math.random() * 220 + 160,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: this.colors[i % this.colors.length],
        alpha: Math.random() * 0.09 + 0.05
      });
    }
  }

  createParticles() {
    this.particles = [];
    const count = Math.min(70, Math.floor(window.innerWidth / 22));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2.8 + 0.8,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.7 - 0.2, // Float upwards
        alpha: Math.random() * 0.65 + 0.25,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        pulsing: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw ambient background orbs (large dreamy bokeh)
    for (let orb of this.orbs) {
      orb.x += orb.vx;
      orb.y += orb.vy;

      if (orb.x < -orb.radius) orb.x = this.width + orb.radius;
      if (orb.x > this.width + orb.radius) orb.x = -orb.radius;
      if (orb.y < -orb.radius) orb.y = this.height + orb.radius;
      if (orb.y > this.height + orb.radius) orb.y = -orb.radius;

      const grad = this.ctx.createRadialGradient(
        orb.x, orb.y, 0,
        orb.x, orb.y, orb.radius
      );
      grad.addColorStop(0, `${orb.color}${orb.alpha})`);
      grad.addColorStop(1, `${orb.color}0)`);

      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Draw glowing party dust / embers
    for (let p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.pulsing += p.pulseSpeed;

      if (p.y < -10) {
        p.y = this.height + 10;
        p.x = Math.random() * this.width;
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = p.x - this.mouse.x;
        const dy = p.y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.mouse.radius) {
          const force = (this.mouse.radius - dist) / this.mouse.radius;
          p.x += (dx / dist) * force * 3;
          p.y += (dy / dist) * force * 3;
        }
      }

      const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulsing));

      this.ctx.fillStyle = `${p.color}${currentAlpha})`;
      this.ctx.shadowBlur = 12;
      this.ctx.shadowColor = `${p.color}0.8)`;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fill();
    }

    this.ctx.shadowBlur = 0;
    requestAnimationFrame(this.animate);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new NightlifeAtmosphere('atmosphereCanvas');
});
