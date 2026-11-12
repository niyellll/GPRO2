# PROMPT PEMBUATAN WEBSITE GPRO2 — LANDING PAGE PROMOSI STATIS

Kamu adalah senior frontend engineer sekaligus UI/UX designer. Bangun website baru untuk **GPRO2 — Global Pro-eksistensi (Pusat Kajian Strategis)** menggunakan Next.js 16 App Router, React 19, TypeScript, dan CSS sederhana. Kode harus mandiri di repository `niyellll/GPRO2`, tanpa mengubah `niyellll/GPRO`.

## TUJUAN
Website company/organization profile satu halaman yang profesional, premium, bersih, mudah dibaca, serta berfungsi **hanya sebagai media promosi dan pengenalan lembaga**, bukan aplikasi interaktif.

## BATASAN MUTLAK
- **Tidak ada interaksi pengunjung**: hapus form, modal, login, registrasi, filter, search, tabs, accordion, carousel, toggle dark mode, hamburger menu, toast, popup, live chat, chatbot, animasi yang bergantung pada JavaScript, dan tombol untuk mengirim data.
- Tidak perlu `"use client"`, `useState`, `useEffect`, event handler, API route, database, autentikasi, state management, atau dependensi UI berat.
- Informasi kontak hanya sebagai **teks statis**, tanpa tombol WhatsApp, mailto, link media sosial, dan CTA yang harus diklik. Elemen navigasi interaktif juga tidak diperlukan.
- Komponen yang digunakan adalah Server Components; halaman dapat diprerender secara statis.
- Gambar, logo, foto tim, dan cover yang belum tersedia **tidak boleh diganti foto stok, logo lembaga lain, atau konten karangan**. Gunakan dekorasi CSS noninteraktif yang relevan dengan identitas GPro. Jangan tampilkan teks placeholder atau instruksi untuk pemilik.
- Tidak boleh mengklaim kemitraan resmi dengan lembaga internasional kecuali memiliki bukti.
- Bahasa konten utama: **Bahasa Indonesia**, dengan moto asli berbahasa Inggris.

## IDENTITAS VISUAL
- Merah: `#D00705`, biru: `#7DB4CE`, ink/ungu gelap: `#493D58`, latar: `#F8FAFD`.
- Tipografi modern, hierarchy kuat, ukuran isi desktop minimal 16px.
- Header dengan wordmark GPRO, Global Pro-eksistensi, Pusat Kajian Strategis.
- Desain rapi dan lapang, max-width konten 1260–1320px, section spacing 80–110px.
- Responsif 360, 768, 1280, 1440, 1920px; tanpa horizontal overflow.
- Jangan menambahkan animasi berlebihan atau efek yang mengalihkan fokus.

## STRUKTUR WEBSITE
1. **Hero**: tagline `Membaca Tantangan. Merumuskan Arah. Menciptakan Dampak.`, deskripsi singkat lembaga, moto `Research More · Do More · Teach More`, dekorasi geometris CSS.
2. **Tentang GPro**: organisasi kajian strategis yang menghubungkan penelitian, analisis kebijakan, serta rekomendasi untuk implementasi nyata.
3. **Fokus kajian**: Kebijakan Publik & Pembangunan, Logistik & Rantai Pasok, Ekonomi & Fiskal, Pendidikan & Penguatan SDM.
4. **Filosofi kerja**: Research More / Do More / Teach More, masing-masing deskripsi singkat.
5. **Sorotan kajian**: Kediri sebagai Hub Logistik 2045; Infrastruktur Strategis dan Biaya Logistik; Indonesia Kaya, Tax Ratio Lemah. Tampilkan sebagai tema kajian, jangan mengklaim status publikasi yang tidak terverifikasi.
6. **Pesan penutup**: `Pengetahuan untuk tindakan. Riset untuk masa depan.`
7. **Informasi kontak statis**: Global Pro-eksistensi, `pksgpro@gmail.com`, `+62 858-9999-3742`.
8. **Footer**: identitas, moto, dan hak cipta.

## IMPLEMENTASI TEKNIS
- File inti: `app/page.tsx`, `app/layout.tsx`, `app/globals.css`.
- SEO metadata nyata, HTML `lang="id"`, Open Graph title dan description.
- Semantik HTML: `header`, `main`, `section`, `article`, `footer`.
- Tidak perlu Tailwind apabila CSS biasa cukup; minimalkan kompleksitas.
- Jangan menambahkan data capaian, statistik, tanggal, testimoni, ataupun prestasi tanpa sumber terverifikasi.
- Jalankan `npm run lint` dan `npm run build`, pastikan build lulus dan halaman `/` diprerender sebagai Static.
- Periksa mode desktop dan mobile, keterbacaan, kontras, serta tidak adanya tombol/fitur interaktif.
- Hasil akhirnya berupa **website profil lembaga statis** yang meyakinkan dan mudah dipelihara.

**Catatan penting:** Repository GPRO2 berdiri terpisah dari GPRO. Jangan menghapus maupun mengubah repository lama.
