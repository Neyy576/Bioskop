import React from "react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-gray-900 text-white flex flex-col overflow-y-auto scroll-smooth">
      {/* Navbar */}
      <nav className="bg-blue-950 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Portfolio</h1>
          <ul className="flex space-x-6 text-white font-medium">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
            <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Hai Ini Aku !</h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mt-2">
              Adney Jeconia Mangalla Pangiluan
            </h1>
            <h2 className="text-3xl font-bold mt-4">Siswa SMK Telkom Makassar</h2>
            <h3 className="text-2xl font-medium">RPL (Rekayasa Perangkat Lunak)</h3>

            <div className="flex space-x-4 mt-6">
              {[{ src: "/ig.png", alt: "Instagram" }, { src: "/wa.png", alt: "WhatsApp" }, { src: "/tiktok.png", alt: "TikTok" }, { src: "/link.png", alt: "LinkedIn" }].map((icon) => (
                <div
                  key={icon.alt}
                  className="w-10 h-10 rounded-full border-2 border-cyan-400 text-cyan-400 bg-transparent overflow-hidden flex items-center justify-center transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                >
                  <img src={icon.src} alt={icon.alt} className="w-6 h-6 object-contain" />
                </div>
              ))}
            </div>

            <button className="mt-6 px-6 py-3 bg-cyan-400 text-white font-semibold rounded-full hover:bg-gray-200 hover:text-black transition">
              Tentang Saya
            </button>
          </div>

          <div className="flex justify-center relative">
            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-cyan-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.9)]">
              <img src="ney.png" alt="Profile Ney" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Halaman Kedua */}
      <section id="about" className="px-6 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center relative">
            <div className="w-[400px] h-[400px] md:w-[600px] drop-shadow-[0_0_35px_rgba(34,211,238,0.9)]">
              <img src="Glad.png" alt="Profile Ney" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Tentang Saya</h2>
            <p className="text-base font-medium">
              Halo Semua Nama Saya Adney Jeconia Mangalla Pangiluan 
              Saya Lahir Pada tanggal 10 Oktober 2009 & saat Ini Saya Berumur 16 Tahun 
              Saya Anak Pertama dari 2 Bersaudara. Saat ini saya Tinggal di Kota Makassar
              Papa Saya Namanya Marthinus Manggala, ST pekerjaannya sebagai Karyawan Swasta 
              Mama Saya Namanya Serlina Pangiluan, ST pekerjaannya sebagai Ibu Rumah Tangga
              Adik Saya saat ini Bersekolah di SMP Telkom Makassar Kelas 2 SMP
              Kami sekeluarga Beragama Kristen Protestan Suku Toraja
            </p>
          </div>
        </div>
      </section>

      {/* Halaman Ketiga */}
      <section id="skills" className="px-6 py-32">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400">Kemampuan Saya</h2>
          <p className="text-base font-medium mt-4">
            Berikut beberapa layanan dan keahlian saya dalam bidang teknologi desain & Public Speaking.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["UI/UX Design", "Frontend Dev", "Public Speaking"].map((skill) => (
            <div
              key={skill}
              className="bg-transparent p-8 rounded-2xl shadow-lg border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)]"
            >
              <h3 className="text-2xl font-bold mb-4">{skill}</h3>
              <p className="text-gray-300 mb-6">
                Iyqsdiwbdjijbdeduiwhdei...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Halaman Keempat */}
      <section id="portfolio" className="px-6 py-32">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-cyan-400">Keahlian Saya</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="p-10 rounded-2xl bg-transparent border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition">
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            <div className="flex justify-center">
              <img src="data.png" alt="Technical Skills" className="max-w-xs h-auto object-contain" />
            </div>
          </div>

          <div className="p-10 rounded-2xl bg-transparent border-4 border-cyan-400 text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.8)] hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,1)] transition">
            <h3 className="text-2xl font-bold mb-4">Profesional Skills</h3>
            <div className="flex justify-center">
              <img 
                src="lingkaran.png" 
                alt="Profesional Skills" 
                className="max-w-xs h-auto object-contain" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Halaman Kelima */}
      <section id="contact" className="px-6 py-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <div className="w-[400px] h-[400px] md:w-[500px] 
            drop-shadow-[0_0_35px_rgba(34,211,238,0.9)]">
              <img 
              src="ney.png" 
              alt="Gambar Ney" 
              className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-left mb-6">
              <h2 className="text-4xl font-bold text-white mb-4">Hubungi Saya</h2>
              <p className="text-base font-medium leading-relaxed text-white">
                Dengan latar belakang pendidikan di bidang 
                <span className="text-cyan-400 font-semibold"> Rekayasa Perangkat Lunak (RPL)</span>, 
                saya memiliki keahlian dalam <span className="text-cyan-400">UI/UX Design</span>, 
                <span className="text-cyan-400"> Frontend Development</span>, serta 
                <span className="text-cyan-400"> Public Speaking</span>.  
                <br /><br />
                Jika Anda membutuhkan seseorang yang 
                <span className="text-cyan-400 font-semibold"> kreatif, berdedikasi, 
                dan mampu bekerja sama dengan baik</span>, saya siap membantu 
                mewujudkan ide Anda menjadi solusi nyata yang bernilai.
              </p>
            </div>

            {/* Email */}
            <input 
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full max-w-sm mb-4 p-3 rounded-lg bg-gray-700 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder="Tulis pesan Anda..."
              className="w-full max-w-sm mb-4 p-3 rounded-lg bg-gray-700 text-white border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button
              type="submit"
              className="w-full max-w-sm py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              submit
            </button>
          </div>
        </div>
        <div className="flex space-x-4 mt-6">
              {[{ src: "/ig.png", alt: "Instagram" }, { src: "/wa.png", alt: "WhatsApp" }, { src: "/tiktok.png", alt: "TikTok" }, { src: "/link.png", alt: "LinkedIn" }].map((icon) => (
                <div
                  key={icon.alt}
                  className="w-10 h-10 rounded-full border-2 border-cyan-400 text-cyan-400 bg-transparent overflow-hidden flex items-center justify-center transition duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                >
                  <img src={icon.src} alt={icon.alt} className="w-6 h-10 object-contain" />
                </div>
              ))}
            </div>
      </section>

      {/* Halaman Keenam */}
      <section id="portfolio" className="px-6 py-32">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-cyan-400">Aplikasi Perhitungan Diskon</h2>
          <p className="text-base mt-3 text-gray-300">
            Masukkan data barang dan hitung total harga setelah diskon 💰
          </p>
        </div>
      </section>

    </div>
  );
}
