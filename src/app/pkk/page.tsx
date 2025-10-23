"use client";
import React, { useMemo, useState } from "react";

type EvidenItem = { kegiatan: string; img: string; uploadedAt?: string };
type SiswaProfile = { nama: string; nis?: string; jurusan?: string; foto?: string; prestasi?: string[] };

export default function Page() {
  const [page, setPage] = useState<"beranda" | "kelas" | "profil">("beranda");
  const [selectedLevel, setSelectedLevel] = useState<"X" | "XI" | "XII">("X");
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [dark, setDark] = useState(false);

  const [userProfile, setUserProfile] = useState({ nama: "Adney Jeconia", role: "Siswa", editing: false });

  //Halaman login 




  
  // Generate kelas tiap angkatan
  const kelasList = [
    { level: "X", nama: "X TJKT 1", wali: "Pak Budi" },
    { level: "X", nama: "X TJKT 2", wali: "Ibu Sari" },
    { level: "X", nama: "X RPL 1", wali: "Pak Andi" },
    { level: "X", nama: "X DKV 1", wali: "Ibu Lina" },
    { level: "XI", nama: "XI TJKT 1", wali: "Pak Joko" },
    { level: "XI", nama: "XI TJKT 2", wali: "Ibu Wati" },
    { level: "XI", nama: "XI RPL 1", wali: "Pak Rudi" },
    { level: "XI", nama: "XI DKV 1", wali: "Ibu Rina" },
    { level: "XII", nama: "XII TJKT 1", wali: "Pak Agus" },
    { level: "XII", nama: "XII TJKT 2", wali: "Ibu Maya" },
    { level: "XII", nama: "XII RPL 1", wali: "Pak Dedi" },
    { level: "XII", nama: "XII DKV 1", wali: "Ibu Dian" },
  ];

  // Generate nama siswa acak 30 orang per kelas
  function generateSiswa(jumlah: number): SiswaProfile[] {
    const firstNames = ["Adney","Rio","Gladwin","Nabil","Reza","Jamal","Deni","Fajar","Lia","Siti","Rina","Dina","Agus","Andi","Budi","Citra","Rudy","Raka","Dewi","Tika"];
    const lastNames = ["Pratama","Saputra","Wijaya","Hidayat","Kusuma","Santoso","Rahman","Putra","Wicaksono","Firmansyah"];
    const siswa: SiswaProfile[] = [];
    for (let i = 0; i < jumlah; i++) {
      const nama = `${firstNames[Math.floor(Math.random()*firstNames.length)]} ${lastNames[Math.floor(Math.random()*lastNames.length)]}`;
      siswa.push({ nama, nis: `${Math.floor(Math.random()*900+100)}`, jurusan: "TJKT" });
    }
    return siswa;
  }

  const [siswaMap, setSiswaMap] = useState<Record<string, SiswaProfile[]>>(
    Object.fromEntries(kelasList.map(k => [k.nama, generateSiswa(30)]))
  );

  const [evidenMap, setEvidenMap] = useState<Record<string, EvidenItem[]>>({
    "X TJKT 1": [{ kegiatan: "Pentas Seni", img: "https://images.unsplash.com/photo-1581094794329-c81e3e8b2e2e?auto=format&fit=crop&w=800&q=80", uploadedAt: "2024-10-15" }],
    "XI TJKT 1": [{ kegiatan: "Lomba IT", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80", uploadedAt: "2024-11-22" }],
  });

  const [detailSiswa, setDetailSiswa] = useState<SiswaProfile | null>(null);
  const [uploadKegiatan, setUploadKegiatan] = useState("");
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);

  const classesFiltered = kelasList.filter((k) => k.level === selectedLevel);
  const totalSiswa = useMemo(() => Object.values(siswaMap).reduce((s, arr) => s + arr.length, 0), [siswaMap]);
  const totalEviden = useMemo(() => Object.values(evidenMap).reduce((s, arr) => s + arr.length, 0), [evidenMap]);

  function handleFileInput(file?: File) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setUploadPreview(String(reader.result));
    reader.readAsDataURL(file);
  }

  function commitUploadToClass(targetClass: string) {
    if (!uploadPreview) return alert("Pilih foto eviden dulu.");
    const item: EvidenItem = {
      kegiatan: uploadKegiatan || "Foto Kegiatan",
      img: uploadPreview,
      uploadedAt: new Date().toISOString().slice(0, 10),
    };
    setEvidenMap((prev) => ({ ...prev, [targetClass]: [...(prev[targetClass] || []), item] }));
    setUploadKegiatan("");
    setUploadPreview(null);
    alert("Foto eviden ditambahkan (lokal).");
  }

  function addSiswaToClass(targetClass: string, profile: SiswaProfile) {
    setSiswaMap((prev) => ({ ...prev, [targetClass]: [...(prev[targetClass] || []), profile] }));
  }

  const Badge: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm text-white">{children}</span>
  );

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className="min-h-screen font-sans flex flex-col items-center text-white relative" style={{ backgroundColor: "#7B1E1E" }}>
        {/* NAVBAR */}
        <header className="w-full max-w-7xl px-6 py-4 flex items-center justify-between sticky top-0 z-40 bg-[#4E0E0E]/90 backdrop-blur text-white shadow-lg">
          <div onClick={() => { setPage("beranda"); setSelectedClass(null); }} className="cursor-pointer">
            <div className="text-2xl font-extrabold">STELK</div>
            <div className="text-xs opacity-80 -mt-1">SMK Telkom Makassar</div>
          </div>
          <nav className="flex gap-4 items-center">
            <button onClick={() => { setPage("beranda"); setSelectedClass(null); }} className={`px-3 py-1 rounded ${page === "beranda" ? "bg-white text-[#7B1E1E]" : "hover:bg-white/20"}`}>Beranda</button>
            <button onClick={() => { setPage("kelas"); setSelectedClass(null); }} className={`px-3 py-1 rounded ${page === "kelas" ? "bg-white text-[#7B1E1E]" : "hover:bg-white/20"}`}>Kelas</button>
            <button onClick={() => { setPage("profil"); setSelectedClass(null); }} className={`px-3 py-1 rounded ${page === "profil" ? "bg-white text-[#7B1E1E]" : "hover:bg-white/20"}`}>Profil</button>
          </nav>
          <button onClick={() => setDark((d) => !d)} className="px-3 py-1 rounded bg-white text-[#7B1E1E] text-sm">{dark ? "Light" : "Dark"}</button>
        </header>

        {/* MAIN */}
        <main className="w-full max-w-7xl px-6 py-10">
          {/* BERANDA */}
          {page === "beranda" && !selectedClass && (
            <section>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="col-span-2 bg-white/20 rounded-xl p-6 shadow-lg backdrop-blur">
                  <h1 className="text-3xl font-extrabold mb-3">STELK — Data & Jurnal Siswa</h1>
                  <p className="text-sm mb-4">Portal informasi siswa, kegiatan 2 semester, dan eviden foto tiap kelas.</p>
                  <div className="flex gap-3 flex-wrap">
                    <button onClick={() => { setPage("kelas"); setSelectedClass(null); }} className="px-4 py-2 bg-[#7B1E1E] text-white rounded">Lihat Kelas</button>
                    <button onClick={() => setPage("profil")} className="px-4 py-2 bg-[#FFDCDC] text-[#7B1E1E] rounded">Profil Sekolah</button>
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div className="bg-[#FFDCDC] p-4 rounded shadow">
                      <div className="text-sm text-gray-700">Total Siswa</div>
                      <div className="text-2xl font-bold text-[#7B1E1E]">{totalSiswa}</div>
                    </div>
                    <div className="bg-[#FFDCDC] p-4 rounded shadow">
                      <div className="text-sm text-gray-700">Total Foto Eviden</div>
                      <div className="text-2xl font-bold text-[#7B1E1E]">{totalEviden}</div>
                    </div>
                  </div>
                </div>

                <aside className="bg-white/20 rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold mb-3">Statistik Sederhana</h3>
                  <div className="space-y-3">
                    {kelasList.slice(0, 6).map((c, i) => {
                      const sCount = (siswaMap[c.nama] || []).length;
                      const eCount = (evidenMap[c.nama] || []).length;
                      const barWidth = Math.min(100, sCount * 3 + 10);
                      return (
                        <div key={i}>
                          <div className="flex justify-between text-xs">
                            <div>{c.nama}</div>
                            <div>{sCount} siswa • {eCount} eviden</div>
                          </div>
                          <div className="w-full bg-gray-200 h-2 rounded mt-1">
                            <div style={{ width: `${barWidth}%` }} className="h-2 bg-[#7B1E1E] rounded"></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </aside>
              </div>
            </section>
          )}

          {/* KELAS */}
          {page === "kelas" && (
            <section>
              <div className="mb-6 flex gap-3">
                {["X","XI","XII"].map(level => (
                  <button key={level} onClick={() => setSelectedLevel(level as any)} className={`px-4 py-2 rounded ${selectedLevel === level ? "bg-white text-[#7B1E1E]" : "bg-[#FFDCDC] text-[#7B1E1E]"}`}>{level}</button>
                ))}
              </div>

              {!selectedClass ? (
                <div className="grid md:grid-cols-3 gap-6">
                  {classesFiltered.map(k => (
                    <div key={k.nama} className="bg-white/20 p-4 rounded shadow cursor-pointer" onClick={() => setSelectedClass(k.nama)}>
                      <div className="font-semibold">{k.nama}</div>
                      <div className="text-sm mt-1">Wali Kelas: {k.wali}</div>
                      <div className="text-xs mt-2">{(siswaMap[k.nama] || []).length} Siswa</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  <button onClick={() => setSelectedClass(null)} className="mb-4 px-3 py-1 bg-[#FFDCDC] text-[#7B1E1E] rounded">Kembali</button>
                  <h2 className="font-bold text-xl mb-2">{selectedClass} — Wali: {kelasList.find(k=>k.nama===selectedClass)?.wali}</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {(siswaMap[selectedClass] || []).map((s, i) => (
                      <div key={i} className="bg-white/30 p-3 rounded shadow text-black">
                        <div className="font-semibold">{s.nama}</div>
                        <div className="text-xs">{s.jurusan} • NIS: {s.nis}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* PROFIL */}
          {page === "profil" && (
            <section>
              <div className="bg-white/90 text-[#7B1E1E] rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-3">Profil Sekolah</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="text-sm mb-4">
                      SMK Telkom Makassar — Sekolah vokasi unggulan di bidang teknologi dan desain.
                    </p>
                    <ul className="list-disc ml-5 text-sm">
                      <li>Didirikan: 1992</li>
                      <li>Jurusan: TJKT, RPL, DKV</li>
                      <li>Fasilitas: Lab komputer, workshop jaringan, studio desain</li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" className="w-44 h-44 rounded-lg object-cover shadow-lg" />
                    <div className="mt-3 text-sm">SMK Telkom Makassar</div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>

        <footer className="w-full max-w-7xl px-6 py-6 text-xs text-center opacity-90">
          © {new Date().getFullYear()} STELK Page • SMK Telkom Makassar
        </footer>
      </div>
    </div>
  );
}
