/**
 * 🌙 Beyond Hours — Master Application Logic
 * Real Instagram Profile Hub & Symmetrical Real Instagram Drops Cards.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Part 1
  initBrandData();
  initInstagramProfileHub();
  initMarquee();
  initExperiences();
  initNavScroll();
  initCard3DTilt();
  initQuickModals();
  initAudioVibe();

  // Part 2
  initLatestDrops();
  initUpcomingEvents();
  initGalleryAndLightbox();

  // Part 3
  initVipBookingForm();
  initVibeFeedback();
  initWallOfLove();
  initNewsletter();
});

/**
 * 1. Brand Data Populator
 */
function initBrandData() {
  const config = window.BEYOND_CONFIG;
  if (!config) return;

  document.querySelectorAll('[data-brand="handle"]').forEach(el => {
    el.textContent = config.brand.handle;
  });
  document.querySelectorAll('[data-brand="tagline"]').forEach(el => {
    el.textContent = `"${config.brand.tagline}"`;
  });
  document.querySelectorAll('[data-brand="subtagline"]').forEach(el => {
    el.textContent = config.brand.subTagline;
  });
  document.querySelectorAll('[data-brand="location"]').forEach(el => {
    el.textContent = config.brand.location;
  });
  document.querySelectorAll('[data-brand="ig-link"]').forEach(el => {
    el.href = config.brand.instagramUrl;
  });
}

/**
 * 2. Real Instagram Profile Hub & Direct Connection
 */
function initInstagramProfileHub() {
  const config = window.BEYOND_CONFIG;
  const container = document.getElementById('instagramHubContainer');
  if (!config || !config.instagramStats || !container) return;

  const stats = config.instagramStats;

  container.innerHTML = `
    <div class="ig-profile-card glass-panel">
      <div class="ig-profile-top">
        <div class="ig-avatar-ring">
          <img src="assets/images/beyond_hours_logo.png" alt="Beyond Hours Instagram Profile" class="ig-avatar-img" />
          <div class="ig-badge-pulse"></div>
        </div>

        <div class="ig-info-col">
          <div class="ig-handle-row">
            <h3 class="ig-handle-text">beyondhours_</h3>
            <span class="ig-verified-pill">Official Page ✓</span>
          </div>
          <p class="ig-category-text">Nightlife & Event Planning Collective • 📍 Udaipur</p>
          <p class="ig-bio-text">"we make plans you didn't know you needed." Where plans end, stories begin ♡</p>
        </div>

        <div class="ig-action-col">
          <a href="${config.brand.instagramUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary-gradient ig-follow-btn">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>

      <div class="ig-metrics-bar">
        <div class="ig-metric-item">
          <div class="ig-metric-num">${stats.posts}</div>
          <div class="ig-metric-label">Posts</div>
        </div>
        <div class="ig-metric-divider"></div>
        <div class="ig-metric-item">
          <div class="ig-metric-num">${stats.followers}</div>
          <div class="ig-metric-label">Followers</div>
        </div>
        <div class="ig-metric-divider"></div>
        <div class="ig-metric-item">
          <div class="ig-metric-num">${stats.following}</div>
          <div class="ig-metric-label">Following</div>
        </div>
        <div class="ig-metric-divider"></div>
        <div class="ig-metric-item">
          <div class="ig-metric-num" style="color: var(--champagne-gold);">📍 Udaipur</div>
          <div class="ig-metric-label">Home Base</div>
        </div>
      </div>

      <div class="ig-live-footer">
        <div class="ig-sync-status">
          <span class="pulse-dot"></span>
          <span>Official Instagram Profile @beyondhours_ • Connect for latest drops</span>
        </div>
        <a href="${config.brand.instagramUrl}" target="_blank" rel="noopener noreferrer" class="ig-open-link">
          Open Instagram App ↗
        </a>
      </div>
    </div>
  `;
}

/**
 * 3. Infinite Marquee Ticker
 */
function initMarquee() {
  const config = window.BEYOND_CONFIG;
  const track = document.getElementById('marqueeTrack');
  if (!config || !track) return;

  const content = config.marquee.map(text => `
    <span class="marquee-item">
      <span class="marquee-dot">◆</span>
      <span>${text}</span>
    </span>
  `).join('');

  track.innerHTML = content + content + content;
}

/**
 * 4. Populate Flagship Party Experiences
 */
function initExperiences() {
  const config = window.BEYOND_CONFIG;
  const grid = document.getElementById('experiencesGrid');
  if (!config || !grid) return;

  grid.innerHTML = config.experiences.map((exp) => `
    <div class="exp-card glass-panel" data-tilt>
      <div class="exp-image-wrap">
        <img src="${exp.image}" alt="${exp.title}" class="exp-img" loading="lazy" />
        <div class="exp-tag">${exp.tag}</div>
        <div class="exp-badge">${exp.badge}</div>
        <div class="exp-gradient-overlay"></div>
      </div>
      <div class="exp-content">
        <div class="exp-vibe">${exp.vibe}</div>
        <h3 class="exp-title">${exp.title}</h3>
        <p class="exp-subtitle">${exp.subtitle}</p>
        <p class="exp-desc">${exp.description}</p>
        <div class="exp-footer">
          <button class="btn-ghost-sm" onclick="openVipModal('${exp.title}')">
            <span>Inquire Vibe</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * 5. Latest Real Instagram Drops (Both Reel & Post in Equal Symmetrical Size)
 */
function initLatestDrops() {
  const config = window.BEYOND_CONFIG;
  const dropsContainer = document.getElementById('latestDropsContainer');
  if (!config || !config.latestDrops || !dropsContainer) return;

  const { reel, post } = config.latestDrops;

  dropsContainer.innerHTML = `
    <!-- Slot 1: Real Reel Card (Same Symmetrical Size as Post) -->
    <div class="drop-slot glass-panel">
      <div class="slot-header-bar">
        <div class="slot-tag-badge"><span class="pulse-dot"></span> ${reel.tag}</div>
        <a href="${reel.instagramUrl}" target="_blank" rel="noopener noreferrer" class="ig-direct-badge">
          <span>Watch on IG ↗</span>
        </a>
      </div>

      <div class="post-card-frame">
        <div class="post-card-header">
          <div class="post-user-box">
            <img src="assets/images/beyond_hours_logo.png" alt="Beyond Hours" class="post-avatar" />
            <div>
              <div class="post-username">beyondhours_</div>
              <div class="post-time">Recent Reel • Udaipur</div>
            </div>
          </div>
          <span class="post-carousel-badge" style="background: rgba(255, 46, 147, 0.2); color: var(--neon-pink);">▶ REEL</span>
        </div>

        <div class="post-image-box">
          <a href="${reel.instagramUrl}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%; position: relative;">
            <img src="${reel.videoPoster}" alt="${reel.title}" class="post-main-img" />
            <div class="reel-center-play-overlay">
              <div class="reel-circle-icon">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              </div>
            </div>
          </a>
        </div>

        <div class="post-card-body">
          <div class="post-action-bar">
            <div class="left-actions">
              <a href="${reel.instagramUrl}" target="_blank" rel="noopener noreferrer" class="post-act-btn liked">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </a>
              <a href="${reel.instagramUrl}" target="_blank" rel="noopener noreferrer" class="post-act-btn" style="color: #FFF;">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="${reel.instagramUrl}" target="_blank" rel="noopener noreferrer" class="post-act-btn" style="color: #FFF;">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </div>
            <span class="post-likes-count"><strong>${reel.likes}</strong> likes</span>
          </div>

          <p class="post-caption-text">
            <strong>beyondhours_</strong> ${reel.caption}
          </p>

          <a href="${reel.instagramUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gradient post-explore-btn">
            <span>Watch Full Reel on Instagram</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Slot 2: Real Post Card -->
    <div class="drop-slot glass-panel">
      <div class="slot-header-bar">
        <div class="slot-tag-badge" style="background: rgba(157, 78, 221, 0.15); color: var(--soft-lavender); border-color: rgba(157, 78, 221, 0.35);">
          ${post.tag}
        </div>
        <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="ig-direct-badge">
          <span>View on Instagram ↗</span>
        </a>
      </div>

      <div class="post-card-frame">
        <div class="post-card-header">
          <div class="post-user-box">
            <img src="assets/images/beyond_hours_logo.png" alt="Beyond Hours" class="post-avatar" />
            <div>
              <div class="post-username">beyondhours_</div>
              <div class="post-time">${post.postedDate} • Udaipur</div>
            </div>
          </div>
          <span class="post-carousel-badge">${post.slideCount}</span>
        </div>

        <div class="post-image-box">
          <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" style="display: block; width: 100%; height: 100%;">
            <img src="${post.image}" alt="${post.title}" class="post-main-img" />
          </a>
        </div>

        <div class="post-card-body">
          <div class="post-action-bar">
            <div class="left-actions">
              <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="post-act-btn liked">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </a>
              <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="post-act-btn" style="color: #FFF;">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="post-act-btn" style="color: #FFF;">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </a>
            </div>
            <span class="post-likes-count"><strong>${post.likes}</strong> likes</span>
          </div>

          <p class="post-caption-text">
            <strong>beyondhours_</strong> ${post.caption}
          </p>

          <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary-gradient post-explore-btn">
            <span>View Original Post on Instagram</span>
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * 6. Upcoming Events & Passes Section
 */
function initUpcomingEvents() {
  const config = window.BEYOND_CONFIG;
  const grid = document.getElementById('eventsGrid');
  if (!config || !config.upcomingEvents || !grid) return;

  grid.innerHTML = config.upcomingEvents.map(ev => {
    let badgeStyle = "status-active";
    if (ev.statusType === "hot") badgeStyle = "status-hot";
    if (ev.statusType === "vip") badgeStyle = "status-vip";

    return `
      <div class="event-card glass-panel" data-tilt>
        <div class="event-image-container">
          <img src="${ev.image}" alt="${ev.title}" class="event-img" loading="lazy" />
          <div class="event-date-badge">
            <span class="event-date-month">${ev.dateBadge.month}</span>
            <span class="event-date-day">${ev.dateBadge.day}</span>
            <span class="event-date-week">${ev.dateBadge.weekday}</span>
          </div>
          <div class="event-edition-tag">${ev.edition}</div>
          <div class="event-status-pill ${badgeStyle}">${ev.status}</div>
          <div class="event-overlay-grad"></div>
        </div>

        <div class="event-details-content">
          <div class="event-meta-row">
            <span class="event-genre">${ev.genre}</span>
            <span class="event-time">⏰ ${ev.time}</span>
          </div>

          <h3 class="event-title">${ev.title}</h3>
          
          <div class="event-venue-row">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <span>${ev.venue}</span>
          </div>

          <p class="event-desc">${ev.description}</p>

          <div class="event-footer-bar">
            <div class="event-pricing-box">
              <span class="price-label">ENTRY PASSES</span>
              <span class="price-val">${ev.pricing}</span>
            </div>
            
            <button class="btn btn-primary-gradient event-book-btn" onclick="openVipModal('${ev.title} (${ev.dateBadge.month} ${ev.dateBadge.day})')">
              <span>Book Pass</span>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/**
 * 7. Dynamic Nightlife Gallery & Lightbox Modal
 */
function initGalleryAndLightbox() {
  const config = window.BEYOND_CONFIG;
  const filterTabsContainer = document.getElementById('galleryFilterTabs');
  const galleryGrid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('galleryLightbox');

  if (!config || !config.galleryItems || !galleryGrid) return;

  if (filterTabsContainer && config.galleryCategories) {
    filterTabsContainer.innerHTML = config.galleryCategories.map((cat, idx) => `
      <button class="gallery-tab-btn ${idx === 0 ? 'active' : ''}" data-filter="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    filterTabsContainer.querySelectorAll('.gallery-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        filterTabsContainer.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        filterGalleryItems(filter);
      });
    });
  }

  galleryGrid.innerHTML = config.galleryItems.map((item, index) => `
    <div class="gallery-item-card" data-category="${item.category}" data-index="${index}" onclick="openLightbox(${index})">
      <div class="gallery-img-wrapper">
        <img src="${item.image}" alt="${item.title}" class="gallery-img" loading="lazy" />
        <div class="gallery-card-hover-overlay">
          <div class="gallery-hover-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
          </div>
          <h4 class="gallery-hover-title">${item.title}</h4>
          <span class="gallery-hover-loc">📍 ${item.location}</span>
        </div>
      </div>
    </div>
  `).join('');

  function filterGalleryItems(category) {
    const cards = galleryGrid.querySelectorAll('.gallery-item-card');
    cards.forEach(card => {
      const itemCat = card.getAttribute('data-category');
      if (category === 'all' || itemCat === category) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 200);
      }
    });
  }

  window.openLightbox = function(index) {
    const item = config.galleryItems[index];
    if (!item || !lightbox) return;

    document.getElementById('lightboxImg').src = item.image;
    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxLocation').textContent = `📍 ${item.location}`;
    document.getElementById('lightboxDesc').textContent = item.description;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
      closeVipModal();
    }
  });
}

/**
 * 8. VIP / Party Inquiry Form Booking Engine
 */
function initVipBookingForm() {
  const form = document.getElementById('vipBookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const config = window.BEYOND_CONFIG;

    const name = document.getElementById('bookName').value;
    const phone = document.getElementById('bookPhone').value;
    const igHandle = document.getElementById('bookIg').value || 'N/A';
    const eventType = document.getElementById('bookEventType').value;
    const date = document.getElementById('bookDate').value || 'Upcoming Weekend';
    const guests = document.getElementById('bookGuests').value;
    const vibePref = document.getElementById('bookVibe').value;
    const notes = document.getElementById('bookNotes').value || 'None';

    const message = encodeURIComponent(
      `🌙 *BEYOND HOURS — VIP BOOKING & PARTY INQUIRY*\n\n` +
      `👤 *Client Name:* ${name}\n` +
      `📱 *WhatsApp/Phone:* ${phone}\n` +
      `📷 *Instagram Handle:* ${igHandle}\n` +
      `✨ *Event Type:* ${eventType}\n` +
      `📅 *Expected Date:* ${date}\n` +
      `👥 *Estimated Guests:* ${guests}\n` +
      `🎵 *Music/Vibe Preference:* ${vibePref}\n` +
      `📝 *Special Requests:* ${notes}\n\n` +
      `📍 *Location:* Udaipur, Rajasthan\n\n` +
      `_Please confirm availability and share packages!_`
    );

    const waNum = config?.brand?.whatsappNumber ? config.brand.whatsappNumber.replace(/[^0-9]/g, '') : '919876543210';
    window.open(`https://wa.me/${waNum}?text=${message}`, '_blank');

    showToast('VIP Request Sent! 🍾', 'Your inquiry has been opened in WhatsApp. The Beyond Hours team will respond promptly!');
    form.reset();
  });
}

/**
 * 9. Interactive Vibe Rating & Attendee Review System
 */
function initVibeFeedback() {
  const stars = document.querySelectorAll('.vibe-star-btn');
  const ratingInput = document.getElementById('ratingValue');
  const reviewForm = document.getElementById('vibeReviewForm');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const val = parseInt(star.getAttribute('data-val'), 10);
      if (ratingInput) ratingInput.value = val;

      stars.forEach((s, idx) => {
        if (idx < val) {
          s.classList.add('active');
        } else {
          s.classList.remove('active');
        }
      });
    });
  });

  ['sliderMusic', 'sliderCrowd', 'sliderAmbience'].forEach(id => {
    const slider = document.getElementById(id);
    const badge = document.getElementById(`${id}Val`);
    if (slider && badge) {
      slider.addEventListener('input', () => {
        badge.textContent = `${slider.value}%`;
      });
    }
  });

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('revName').value;
      const handle = document.getElementById('revHandle').value || `@${name.toLowerCase().replace(/\s+/g, '_')}`;
      const eventName = document.getElementById('revEvent').value;
      const rating = parseInt(ratingInput ? ratingInput.value : 5, 10);
      const musicVal = document.getElementById('sliderMusic') ? `${document.getElementById('sliderMusic').value}%` : '100%';
      const crowdVal = document.getElementById('sliderCrowd') ? `${document.getElementById('sliderCrowd').value}%` : '100%';
      const ambienceVal = document.getElementById('sliderAmbience') ? `${document.getElementById('sliderAmbience').value}%` : '100%';
      const quote = document.getElementById('revQuote').value;

      const newReview = {
        id: `rev-${Date.now()}`,
        name,
        handle,
        event: eventName,
        rating,
        vibes: { music: musicVal, crowd: crowdVal, ambience: ambienceVal },
        quote,
        date: 'Just now',
        verified: true
      };

      const wallGrid = document.getElementById('wallOfLoveGrid');
      if (wallGrid) {
        const reviewEl = document.createElement('div');
        reviewEl.className = 'review-card glass-panel new-item-glow';
        reviewEl.innerHTML = createReviewCardHTML(newReview);
        wallGrid.prepend(reviewEl);
      }

      showToast('Vibe Rating Submitted! 🔥', 'Thank you for sharing your nightlife story. Your review is now live on the Wall of Love!');
      reviewForm.reset();
      
      stars.forEach(s => s.classList.add('active'));
      if (ratingInput) ratingInput.value = 5;
    });
  }
}

/**
 * 10. Wall of Love Renderer
 */
function initWallOfLove() {
  const config = window.BEYOND_CONFIG;
  const grid = document.getElementById('wallOfLoveGrid');
  if (!config || !config.testimonials || !grid) return;

  grid.innerHTML = config.testimonials.map(item => `
    <div class="review-card glass-panel" data-tilt>
      ${createReviewCardHTML(item)}
    </div>
  `).join('');
}

function createReviewCardHTML(item) {
  const starIcons = '★'.repeat(item.rating) + '☆'.repeat(Math.max(0, 5 - item.rating));

  return `
    <div class="review-card-header">
      <div class="review-user-info">
        <div class="review-avatar-wrap">
          <span>${item.name.charAt(0)}</span>
        </div>
        <div>
          <div class="review-user-name">${item.name} ${item.verified ? '<span class="verified-badge" title="Verified Party-Goer">✓</span>' : ''}</div>
          <div class="review-user-handle">${item.handle} • <span class="review-date">${item.date}</span></div>
        </div>
      </div>
      <div class="review-stars">${starIcons}</div>
    </div>

    <div class="review-event-pill">
      <span>🎉 Attended:</span> <strong>${item.event}</strong>
    </div>

    <p class="review-quote-text">"${item.quote}"</p>

    <div class="review-vibes-row">
      <span class="vibe-chip">🎵 Sound: ${item.vibes.music}</span>
      <span class="vibe-chip">👥 Crowd: ${item.vibes.crowd}</span>
      <span class="vibe-chip">✨ Ambience: ${item.vibes.ambience}</span>
    </div>
  `;
}

/**
 * 11. Drop Alert Newsletter
 */
function initNewsletter() {
  const form = document.getElementById('dropAlertForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('alertContactInput');
    const contact = input ? input.value : '';

    showToast('You are on the VIP Drop List! ⚡', `We will notify ${contact} 24 hours before next tickets go live!`);
    form.reset();
  });
}

/**
 * Toast Notification Popups
 */
function showToast(title, message) {
  let container = document.getElementById('beyondToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'beyondToastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'beyond-toast glass-panel';
  toast.innerHTML = `
    <div class="toast-icon">✨</div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${message}</div>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 5000);
}

/**
 * Navigation Scroll Effects
 */
function initNavScroll() {
  const nav = document.getElementById('mainNav');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }
}

/**
 * 3D Tilt for Cards
 */
function initCard3DTilt() {
  const cards = document.querySelectorAll('[data-tilt]');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/**
 * Quick VIP Modal
 */
function initQuickModals() {
  window.openVipModal = function(experienceName = "Exclusive Nightlife") {
    const modal = document.getElementById('quickVipModal');
    const titleEl = document.getElementById('modalPartyTitle');
    if (titleEl) titleEl.textContent = experienceName;
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeVipModal = function() {
    const modal = document.getElementById('quickVipModal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  window.sendQuickVipInquiry = function(e) {
    if (e) e.preventDefault();
    const config = window.BEYOND_CONFIG;
    const name = document.getElementById('vipInputName')?.value || 'Guest';
    const guests = document.getElementById('vipInputGuests')?.value || '2-4';
    const party = document.getElementById('modalPartyTitle')?.textContent || 'Nightlife Party';

    const text = encodeURIComponent(
      `🌙 *Beyond Hours VIP Inquiry*\n\n` +
      `Hey Beyond Hours Team!\n` +
      `👤 *Name:* ${name}\n` +
      `✨ *Interested In:* ${party}\n` +
      `👥 *Guest Count:* ${guests}\n` +
      `📍 *Location:* Udaipur\n\n` +
      `Please let me know entry passes and VIP table availability!`
    );

    const waNum = config?.brand?.whatsappNumber ? config.brand.whatsappNumber.replace(/[^0-9]/g, '') : '919876543210';
    window.open(`https://wa.me/${waNum}?text=${text}`, '_blank');
    closeVipModal();
  };
}

/**
 * Ambient Sound Synthesizer
 */
function initAudioVibe() {
  const toggleBtn = document.getElementById('vibeAudioToggle');
  if (!toggleBtn) return;

  let isPlaying = false;
  let audioCtx = null;
  let gainNode = null;
  let osc1 = null;
  let osc2 = null;

  toggleBtn.addEventListener('click', () => {
    if (!isPlaying) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime);

        osc1 = audioCtx.createOscillator();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, audioCtx.currentTime);

        osc2 = audioCtx.createOscillator();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(164.81, audioCtx.currentTime);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        osc1.start();
        osc2.start();

        isPlaying = true;
        toggleBtn.classList.add('playing');
        toggleBtn.innerHTML = `
          <span class="sound-wave active"><span></span><span></span><span></span></span>
          <span>Vibe Audio ON</span>
        `;
      } catch (err) {
        console.warn('Web Audio could not be started', err);
      }
    } else {
      if (audioCtx) {
        audioCtx.close();
      }
      isPlaying = false;
      toggleBtn.classList.remove('playing');
      toggleBtn.innerHTML = `
        <span class="sound-wave"><span></span><span></span><span></span></span>
        <span>Soundtrack Vibe</span>
      `;
    }
  });
}
