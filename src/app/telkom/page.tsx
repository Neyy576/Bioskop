"use client";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Bagian Atas */}
      <div className="flex justify-between items-center px-6 py-3">
        <div className="flex items-center space-x-3">
          <img
            src="/telkom.png"
            alt="Telkom Logo"
            className="h-12 w-auto object-contain"
          />
          <img
            src="/ultah.png"
            alt="Ultah Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Profil */}
        <div className="flex items-center space-x-3">
          <span className="font-semibold text-black">ADNEY JECONIA</span>
          <img
            src="/ney.png"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover filter drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]"
          />
        </div>
      </div>

      <div className="p-6 flex gap-6">
        {/* Bagian Kiri */}
        <div className="flex flex-col flex-1 space-y-6">
          {/* Jurnal Mengajar */}
          <div className="flex flex-col w-full">
            <div className="h-7 shadow p-1 mb-0 rounded-t-lg bg-blue-100 flex justify-between items-center">
              <h2 className="font-bold text-black">Jurnal Mengajar</h2>
            </div>
            <div className="bg-white rounded-b-lg shadow p-4">
              <div className="flex gap-4 divide-x divide-gray-300">
                {/* Status Kehadiran */}
                <div className="flex-1 flex flex-col justify-center p-3">
                  <h3 className="font-semibold text-gray-700 mb-3 text-center">
                    Status Kehadiran
                  </h3>
                  <div className="flex justify-around">
                    <div className="text-center">
                      <h2 className="font-semibold text-blue-800">78</h2>
                      <p className="text-sm text-gray-600">Hadir</p>
                    </div>
                    <div className="text-center">
                      <h2 className="text-bold text-red-600">1</h2>
                      <p className="text-sm text-gray-600">Tidak Hadir</p>
                    </div>
                  </div>
                </div>

                {/* Status Jurnal */}
                <div className="flex-1 flex flex-col justify-center p-3">
                  <h3 className="font-semibold text-gray-700 mb-3 text-center">
                    Status Jurnal
                  </h3>
                  <div className="flex justify-around">
                    <div className="text-center">
                      <h2 className="text-semibold text-red-600">0</h2>
                      <p className="text-sm text-gray-600">Belum</p>
                    </div>
                    <div className="text-center">
                      <h2 className="text-semibold text-red-600">0</h2>
                      <p className="text-sm text-gray-600">Draft</p>
                    </div>
                    <div className="text-center">
                      <h2 className="text-semibold text-red-600">0</h2>
                      <p className="text-sm text-gray-600">Simpan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Aplikasi */}
          <div className="flex flex-col w-[550px]">
            <div className="h-7 shadow p-0.5 mb-0 rounded-t-lg bg-blue-100">
              <h2 className="font-semibold text-black">Aplikasi</h2>
            </div>
            <div className="bg-white h-70 p-4 shadow flex items-center justify-around">
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-800 w-10 h-10 rounded"></div>
                <div className="text-black font-normal mt-2 text-center">JURNAL</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-800 w-10 h-10 rounded"></div>
                <div className="text-black font-normal mt-2 text-center">NILAI</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-800 w-10 h-10 rounded"></div>
                <div className="text-black font-normal mt-2 text-center">AKADEMIK</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-800 w-10 h-10 rounded"></div>
                <div className="text-black font-normal mt-2 text-center">PRESENSI</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="bg-blue-800 w-10 h-10 rounded"></div>
                <div className="text-black font-normal mt-2 text-center">RAPORT</div>
              </div>
            </div>
          </div>

          {/* Jadwal Mengajar */}
          <div className="flex flex-col w-[550px]">
            <div className="h-7 shadow p-1 mb-0 rounded-t-lg bg-blue-100">
              <h2 className="font-semibold text-black">Jadwal Mengajar Anda</h2>
            </div>

            <div className="bg-white h-70 rounded-b-lg shadow overflow-auto flex flex-col p-4">
              <div className="bg-yellow-100 w-96 h-15"></div>
            </div>
          </div>
        </div>

        {/* Guru Terbaik */}
        <div className="flex gap-6 w-[650px]">
          <div className="flex flex-col gap-6 w-72">
            <div className="bg-white shadow rounded-lg h-41 w-full p-4 flex flex-row items-center justify-between text-left">
              <div className="flex flex-col">
                <h2 className="font-semibold text-black mb-2">Guru Terbaik</h2>
                <p className="text-sm text-gray-800">Mr.Adney Jeconia</p>
                <p className="text-sm text-gray-600">(Guru Bahasa Indonesia)</p>
              </div>
              <img
                src="/ney.png"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover filter drop-shadow-[0_0_5px_rgba(255,0,0,0.5)] ml-4"
              />
            </div>

            {/* News */}
            <div className="flex flex-col w-full">
              <div className="h-7 shadow p-1 mb-0 rounded-t-lg bg-blue-100">
                <h2 className="font-semibold text-black">News</h2>
              </div>
              <div className="bg-white h-70 rounded-b-lg shadow overflow-hidden flex flex-col items-center">
                <img
                  src="./cuti.png"
                  alt="News"
                  className="w-[80%] h-[80%] object-contain mt-4"
                />
                <div className="text-black font-normal">aplikasi cuti</div>
              </div>
            </div>
          </div>


        {/* Sapa Guru */}
        <div className="flex flex-col flex-1 ml-4">
          <div className="rounded-t-lg shadow p-1 mb-0 bg-blue-100">
            <h2 className="font-semibold text-black">Sapa Guru</h2>
          </div>

          <div className="bg-white shadow rounded-b-lg flex-1 flex flex-col p-4">
            <div className="flex-1 flex flex-col space-y-3 overflow-y-auto pr-2">
              <div className="bg-gray-200 rounded-lg h-14 p-2">
              <div className="font-bold text-gray-800 text-sm">Mr.Adney</div>
              <div className="font-normal text-gray-700 text-xs mt-1">Adakah Seratus?</div>
          </div>

          <div className="bg-gray-200 rounded-lg h-14 p-2">
            <div className="font-bold text-gray-800 text-sm">Mr.Obama</div>
            <div className="font-normal text-gray-700 text-xs mt-1">iye ada</div>
          </div>

          <div className="bg-gray-200 rounded-lg h-14 p-2">
            <div className="font-bold text-gray-800 text-sm">Mr.Qismat</div>
            <div className="font-normal text-gray-700 text-xs mt-1">iye ada</div>
          </div>

        <div className="bg-gray-200 rounded-lg h-14 p-2">
          <div className="font-bold text-gray-800 text-sm">Mr.Adney</div>
          <div className="font-normal text-gray-700 text-xs mt-1">dmn saya bisa ambil pak?</div>
        </div>

        <div className="bg-gray-200 rounded-lg h-14 p-2">
          <div className="font-bold text-gray-800 text-sm">Mr.Qismat</div>
          <div className="font-normal text-gray-700 text-xs mt-1">Siapa?</div>
        </div>

        <div className="bg-gray-200 rounded-lg h-14 p-2">
          <div className="font-bold text-gray-800 text-sm">Mr.Adney</div>
          <div className="font-normal text-gray-700 text-xs mt-1">yang nanya</div>
        </div>

        <div className="bg-gray-200 rounded-lg h-14 p-2">
          <div className="font-bold text-gray-800 text-sm">Mr.Adney</div>
          <div className="font-normal text-gray-700 text-xs mt-1">Cemas ko dek</div>
        </div>

        <div className="bg-gray-200 rounded-lg h-14 p-2">
          <div className="font-bold text-gray-800 text-sm">Mr.Obama</div>
          <div className="font-normal text-gray-700 text-xs mt-1">HAHAHAHHAHAHAHAHA Gile lu @Mr.Adney</div>
        </div>
      </div>

      {/* Input Chat */}
        <div className="mt-3 flex items-center">
          <input
          type="text"
          placeholder="Ketik sesuatu..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-black shadow-sm focus:ring-2"
          />
          <button className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full shadow transition">=</button>
        </div>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}
