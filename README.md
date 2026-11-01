# Tugas Web Programming - Soapboyz Laundry

**Nama:** Muh. Dzaky Mushaddaq
**NIM:** 1302223082

## Deskripsi Proyek
Proyek ini adalah sistem antarmuka (UI) untuk manajemen operasional "Soapboyz Laundry". Pada tugas ini, struktur proyek telah dimigrasikan dari HTML/CSS statis menjadi aplikasi modern berbasis **React (Vite)**.

## Alasan Pemilihan Tailwind CSS
Dalam proyek ini, saya memilih menggunakan **Tailwind CSS** sebagai *framework* penataan gaya (*styling*) dengan alasan utama berikut:
1. **Utility-First & Kecepatan:** Tailwind memungkinkan pembuatan desain secara langsung di dalam file HTML/JSX tanpa perlu bolak-balik membuat *class* di file CSS terpisah. Ini sangat mempercepat proses *development*.
2. **Responsivitas yang Mudah:** Pembuatan desain yang responsif untuk berbagai ukuran layar (Desktop dan Mobile) menjadi sangat praktis hanya dengan menambahkan *prefix* seperti `md:` atau `lg:` pada *class* utilitasnya.
3. **Desain Konsisten:** Tailwind menyediakan sistem ukuran, warna, dan spasi yang sudah terstandarisasi, sehingga hasil antarmuka (UI) terlihat jauh lebih konsisten, rapi, dan modern.

## Cara Menjalankan Proyek (Lokal)
1. Pastikan Node.js sudah terinstal.
2. Buka terminal di direktori proyek ini.
3. Jalankan perintah `npm install` untuk mengunduh semua *dependencies*.
4. Jalankan perintah `npm run dev` untuk menyalakan *server* lokal.
5. Buka tautan `http://localhost:5173/` di *browser*.

## Implementasi AJAX dan API Eksternal (Tugas Pekan 7)

**1. Endpoint API yang Dipakai:**
Saya menggunakan API *mock* publik dari JSONPlaceholder dengan *endpoint* `https://jsonplaceholder.typicode.com/users`. Alasan pemilihan *endpoint* ini adalah karena struktur datanya (berisi objek profil, nama, email, dan alamat kota) sangat relevan untuk disimulasikan sebagai "Data Member Loyal" pada sistem manajemen Soapboyz Laundry.

**2. Pola Penanganan Loading & Error:**
Saya menggunakan 3 *state* React untuk mengontrol siklus *fetch* data, yaitu `members` (untuk menyimpan data), `loading` (boolean), dan `error` (menyimpan pesan *error*). 
- **Fungsi Penanganan:** Saya menempatkan logika `fetch()` asinkron di dalam fungsi `fetchMembers()`. 
- **Loading:** Pada awal fungsi, `setLoading(true)` dipanggil. Di UI, ini direspons dengan merender komponen indikator "*Sedang memuat data...*".
- **Error & Interaksi:** Jika *response* tidak ok atau koneksi gagal, blok `catch (err)` akan menangkap *error* dan menyimpannya di *state* `error`. Hal ini memicu *conditional rendering* yang menampilkan pesan kegagalan beserta tombol **"Coba Lagi"**. Tombol ini diberi *event handler* `onClick={fetchMembers}` untuk memanggil ulang API jika ditekan.
- **Pembersihan:** Blok `finally` memastikan `setLoading(false)` dijalankan apapun hasil akhirnya.