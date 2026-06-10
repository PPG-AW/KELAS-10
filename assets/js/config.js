// ============================================
// CONFIG.JS
// Konfigurasi Global Website (No Emoji)
// ============================================

const CONFIG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbyZh09mfdiMEszzoeJxC-Ul6h0rf3oBlY3GunAypvbWnlQe7yMAq0jRmvADBsGUyTzDMQ/exec',
  
  APP_NAME: 'Bilangan Berpangkat',
  MATA_PELAJARAN: 'Matematika',
  KELAS: 'X SMK',
  KKTP: 78,
  
  LEVEL: {
    1: { nama: 'Dasar', warna: '#ef5350', range: '0-40' },
    2: { nama: 'Sedang', warna: '#ff9800', range: '41-70' },
    3: { nama: 'Mahir', warna: '#4caf50', range: '71-100' }
  },
  
  JADWAL: {
    1: {
      sesi1: 'Stasiun Guru',
      sesi2: 'Stasiun Online',
      sesi3: 'LKPD Dasar'
    },
    2: {
      sesi1: 'Stasiun Online',
      sesi2: 'Stasiun Guru',
      sesi3: 'LKPD Sedang'
    },
    3: {
      sesi1: 'LKPD HOTS',
      sesi2: 'Online Pengayaan',
      sesi3: 'Stasiun Guru'
    }
  },
  
  PERTEMUAN: {
    1: 'Pengertian & Bentuk Umum Bilangan Berpangkat',
    2: 'Sifat-Sifat Bilangan Berpangkat',
    3: 'Pangkat Nol dan Pangkat Negatif'
  },
  
  DURASI_SESI: 20,
  
  STORAGE: {
    NAMA: 'irm_nama',
    PERTEMUAN: 'irm_pertemuan',
    LEVEL: 'irm_level'
  }
};