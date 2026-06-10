// ============================================
// MAIN.JS
// Mobile-First, No Emoji
// ============================================

const APP = {

  // SESSION
  getSiswa() {
    return localStorage.getItem(CONFIG.STORAGE.NAMA);
  },
  setSiswa(nama) {
    localStorage.setItem(CONFIG.STORAGE.NAMA, nama);
  },
  clearSiswa() {
    Object.values(CONFIG.STORAGE).forEach(k =>
      localStorage.removeItem(k));
  },
  getPertemuan() {
    return localStorage.getItem(CONFIG.STORAGE.PERTEMUAN);
  },
  setPertemuan(p) {
    localStorage.setItem(CONFIG.STORAGE.PERTEMUAN, p);
  },
  getLevel() {
    return localStorage.getItem(CONFIG.STORAGE.LEVEL);
  },
  setLevel(l) {
    localStorage.setItem(CONFIG.STORAGE.LEVEL, l);
  },

  // NAVIGASI
  goTo(page) {
    window.location.href = page;
  },
  requireLogin() {
    if (!this.getSiswa()) {
      this.goTo('index.html');
      return false;
    }
    return true;
  },
  logout() {
    if (confirm('Yakin ingin keluar?')) {
      this.clearSiswa();
      this.goTo('index.html');
    }
  },

  // UI
  showLoading(id, text = 'Memuat...') {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = `
        <div class="loading">
          <div class="spinner"></div>
          <div class="loading-text">${text}</div>
        </div>`;
    }
  },

  showError(id, msg) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = `
        <div class="alert alert-error">
          <div class="alert-icon">!</div>
          <div>${msg}</div>
        </div>`;
    }
  },

  showSuccess(id, msg) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = `
        <div class="alert alert-success">
          <div class="alert-icon">V</div>
          <div>${msg}</div>
        </div>`;
    }
  },

  showToast(msg, type = 'success') {
    const old = document.querySelector('.toast');
    if (old) old.remove();

    const t = document.createElement('div');
    t.className = `toast toast-${type}`;
    t.textContent = msg;
    document.body.appendChild(t);
    
    requestAnimationFrame(() => {
      requestAnimationFrame(() => t.classList.add('show'));
    });
    
    setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.remove(), 300);
    }, 2500);
  },

  // BADGES
  getLevelBadge(level) {
    const l = CONFIG.LEVEL[level];
    if (!l) return '<span class="badge badge-gray">-</span>';
    return `<span class="badge" style="background:${l.warna}15;color:${l.warna}">Level ${level} - ${l.nama}</span>`;
  },

  getStatusBadge(status) {
    if (status === 'Selesai') 
      return '<span class="badge badge-success">Selesai</span>';
    if (status === 'Sedang') 
      return '<span class="badge badge-warning">Sedang</span>';
    return '<span class="badge badge-gray">Belum</span>';
  },

  getTuntasBadge(skor) {
    if (!skor || skor === '-' || skor === '') return '-';
    const s = parseInt(skor);
    return s >= CONFIG.KKTP
      ? `<span class="badge badge-success">Tuntas (${s})</span>`
      : `<span class="badge badge-error">Belum (${s})</span>`;
  },

  getPertemuanIcon(status, isAktif, isSelesai) {
    if (isSelesai) return 'done';
    if (isAktif && status === 'Buka') return 'active';
    if (status === 'Buka') return 'open';
    return 'locked';
  },

  getPertemuanLabel(iconType) {
    const map = {
      done: 'V',
      active: 'P',
      open: 'O',
      locked: 'X'
    };
    return map[iconType] || '?';
  }
};