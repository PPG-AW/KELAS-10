// ============================================
// API.JS
// Komunikasi dengan Google Apps Script
// ============================================

const API = {
  
  // ==========================================
  // GET REQUEST
  // ==========================================
  
  async get(action, params = {}) {
    const url = new URL(CONFIG.API_URL);
    url.searchParams.set('action', action);
    
    Object.keys(params).forEach(key => {
      url.searchParams.set(key, params[key]);
    });
    
    try {
      const response = await fetch(url.toString(), {
        method: 'GET',
        redirect: 'follow'
      });
      
      const data = await response.json();
      return data;
      
    } catch(error) {
      console.error('API GET Error:', error);
      return {
        status: 'error',
        message: 'Koneksi bermasalah. Coba lagi.'
      };
    }
  },
  
  // ==========================================
  // POST REQUEST
  // ==========================================
  
  async post(action, body = {}) {
    try {
      const response = await fetch(CONFIG.API_URL, {
        method: 'POST',
        redirect: 'follow',
        headers: {
          'Content-Type': 'text/plain'
        },
        body: JSON.stringify({
          action: action,
          ...body
        })
      });
      
      const data = await response.json();
      return data;
      
    } catch(error) {
      console.error('API POST Error:', error);
      return {
        status: 'error',
        message: 'Koneksi bermasalah. Coba lagi.'
      };
    }
  },
  
  // ==========================================
  // FUNGSI SPESIFIK
  // ==========================================
  
  // Cari siswa
  async cariSiswa(nama) {
    return await this.get('cariSiswa', { nama });
  },
  
  // Daftar siswa baru
  async daftarSiswa(nama) {
    return await this.post('daftarSiswa', { nama });
  },
  
  // Get semua siswa
  async getDaftarSiswa() {
    return await this.get('getDaftarSiswa');
  },
  
  // Dashboard siswa
  async getDashboard(nama) {
    return await this.get('getDashboardSiswa', { nama });
  },
  
  // Dashboard guru
  async getDashboardGuru(pertemuan) {
    return await this.get('getDashboardGuru', { pertemuan });
  },
  
  // Get status pertemuan
  async getStatusPertemuan() {
    return await this.get('getStatusPertemuan');
  },
  
  // Simpan asesmen
  async simpanAsesmen(nama, pertemuan, jawaban) {
    return await this.post('simpanAsesmen', {
      nama, pertemuan, jawaban
    });
  },
  
  // Simpan post-test
  async simpanPostTest(nama, pertemuan, jawaban) {
    return await this.post('simpanPostTest', {
      nama, pertemuan, jawaban
    });
  },
  
  // Simpan LKPD
  async simpanLKPD(nama, pertemuan, level, jawaban) {
    return await this.post('simpanLKPD', {
      nama, pertemuan, level, jawaban
    });
  },
  
  // Update progress
  async updateProgress(nama, pertemuan, sesi, status) {
    return await this.post('updateProgress', {
      nama, pertemuan, sesi, status
    });
  },
  
  // Simpan refleksi
  async simpanRefleksi(nama, pertemuan, data) {
    return await this.post('simpanRefleksi', {
      nama, pertemuan, data
    });
  },
  
  // Buka pertemuan (guru)
  async bukaPertemuan(pertemuan) {
    return await this.post('bukaPertemuan', { pertemuan });
  },
  
  // Tutup pertemuan (guru)
  async tutupPertemuan(pertemuan) {
    return await this.post('tutupPertemuan', { pertemuan });
  },
  
  // Update sesi guru
  async updateSesiGuru(nama, pertemuan, sesi) {
    return await this.post('updateSesiGuru', {
      nama, pertemuan, sesi
    });
  }
};