import React from "react";

export default function Page() {
  return (
    <>
      {/* 🔹 Navbar */}
      <nav className="bg-[#001B3A] text-white px-6 py-4 shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <span className="text-white">Frontend</span>
            <span className="text-[#ffd700] transition">Official</span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <a href="#home" className="hover:text-[#ffd700] transition">
                Home
              </a>
            </li>
            <li>
              <a href="#movies" className="hover:text-[#ffd700] transition">
                Now Playing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#ffd700] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* 🔹 Halaman Home */}
      <section
        id="home"
        className="min-h-screen bg-[#001124] text-white px-8 pt-24 md:px-24 flex flex-col md:flex-row items-center justify-center gap-12"
      >
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#ffd700] mb-6 leading-snug">
            Selamat Datang di Frontend Official
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 leading-snug">
            Nikmati pengalaman menonton terbaik anda dengan suasana modern, nyaman,
            dan layar berkualitas tinggi.
          </p>
          <a
            href="#movies"
            className="bg-[#ffd700] hover:bg-[#ffd700] text-black px-6 py-3 rounded-lg font-semibold transition"
          >
            Film Sedang Tayang
          </a>
        </div>

        {/* 🔹 Gambar di kanan */}
        <div className="flex justify-center relative">
          <img
            src="./pegawai.png"
            alt="Profile Pegawai"
            className="w-[500px] md:w-[800px] drop-shadow-[0_0_35px_rgba(34,211,238,0.9)] object-cover"
          />
        </div>
      </section>

      {/* 🔹 Halaman Kedua - Daftar Film */}
<section id="movies" className="bg-[#001b3a] text-white py-20 px-6 md:px-16">
  <h2 className="text-4xl font-bold mb-12 text-[#ffd700] text-center">
    Film Sedang Tayang
  </h2>

  <div
    className="grid gap-8 justify-center"
    style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
  >
    {/* Film 1 */}
    <div className="bg-[#002a57] shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300">
      <img
        src="/Teka Teki Tika.jpg"
        alt="Teka Teki Tika"
        className="w-full h-[420px] object-cover" // lebih tinggi
      />
      <div className="p-3 text-left space-y-1">
        <h3 className="text-lg font-semibold text-[#ffd700]">Teka-Teki Tika</h3>
        <p className="text-[#dcdcdc] text-sm italic">Drama, Misteri</p>
        <p className="text-[#ffd700]">8.2/10</p>
        <button className="bg-[#ffd700] hover:bg-[#ffdb4d] text-[#001b3a] px-4 py-2 rounded transition font-semibold">
          Pesan Tiket
        </button>
      </div>
    </div>

    {/* Film 2 */}
    <div className="bg-[#002a57] shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300">
      <img
        src="/Mencuri Raden Saleh.jpg"
        alt="Mencuri Raden Saleh"
        className="w-full h-[420px] object-cover"
      />
      <div className="p-3 text-left space-y-1">
        <h3 className="text-lg font-semibold text-[#ffd700]">Mencuri Raden Saleh</h3>
        <p className="text-[#dcdcdc] text-sm italic">Aksi, Thriller</p>
        <p className="text-[#ffd700]">8.7/10</p>
        <button className="bg-[#ffd700] hover:bg-[#ffdb4d] text-[#001b3a] px-4 py-2 rounded transition font-semibold">
          Pesan Tiket
        </button>
      </div>
    </div>

    {/* Film 3 */}
    <div className="bg-[#002a57] shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300">
      <img
        src="/1 Kakak 7 Ponakan.jpg"
        alt="1 Kakak 7 Ponakan"
        className="w-full h-[420px] object-cover"
      />
      <div className="p-3 text-left space-y-1">
        <h3 className="text-lg font-semibold text-[#ffd700]">1 Kakak 7 Ponakan</h3>
        <p className="text-[#dcdcdc] text-sm italic">Komedi, Keluarga</p>
        <p className="text-[#ffd700]">7.8/10</p>
        <button className="bg-[#ffd700] hover:bg-[#ffdb4d] text-[#001b3a] px-4 py-2 rounded transition font-semibold">
          Pesan Tiket
        </button>
      </div>
    </div>

    {/* Film 4 */}
    <div className="bg-[#002a57] shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300">
      <img
        src="/Siksa Kubur.jpg"
        alt="Siksa Kubur"
        className="w-full h-[420px] object-cover"
      />
      <div className="p-3 text-left space-y-1">
        <h3 className="text-lg font-semibold text-[#ffd700]">Siksa Kubur</h3>
        <p className="text-[#dcdcdc] text-sm italic">Horor, Misteri, Religi</p>
        <p className="text-[#ffd700]">8.5/10</p>
        <button className="bg-[#ffd700] hover:bg-[#ffdb4d] text-[#001b3a] px-4 py-2 rounded transition font-semibold">
          Pesan Tiket
        </button>
      </div>
    </div>
  </div>
</section>


      {/* 🔹 Footer */}
      <footer className="bg-[#000C1F] text-gray-300 py-6 text-center">
        <p>© 2025 XXI Studio. All Rights Reserved.</p>
        <p className="text-blue-300 mt-1">Follow us: @XXIStudioOfficial</p>
      </footer>
    </>
  );
}
