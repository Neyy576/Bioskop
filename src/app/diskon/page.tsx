"use client";

import React, { useState } from "react";

const DiskonForm: React.FC = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [kategoriBarang, setKategoriBarang] = useState("");
  const [harga, setHarga] = useState<number | "">("");
  const [diskon, setDiskon] = useState<number | "">("");

  const [showResult, setShowResult] = useState(false);
  const [nilaiDiskon, setNilaiDiskon] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  const hitungDiskon = () => {
    if (
      !namaBarang.trim() ||
      !kategoriBarang.trim() ||
      harga === "" ||
      diskon === "" ||
      Number(harga) <= 0 ||
      Number(diskon) < 0 ||
      Number(diskon) > 100
    ) {
      alert("Masukkan data yang valid, termasuk harga dan diskon antara 0-100");
      return;
    }

    const nilai = Number(harga) * (Number(diskon) / 100);
    const total = Number(harga) - nilai;

    setNilaiDiskon(nilai);
    setTotalHarga(total);
    setShowResult(true);
  };

  const kembali = () => {
    setShowResult(false);
  };

  const bersih = () => {
    setNamaBarang("");
    setKategoriBarang("");
    setHarga("");
    setDiskon("");
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br text-black from-blue-50 via-white to-blue-100">
      {/* 🔹 Bungkus form dan hasil jadi sejajar */}
      <div className="flex flex-col md:flex-row gap-6 bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 w-full max-w-5xl">
        {/* FORM */}
        <div className="w-full md:w-1/2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              hitungDiskon();
            }}
            className="space-y-5"
          >
            <h2 className="text-2xl font-extrabold text-center text-blue-600">
              Harga barang
            </h2>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Nama Barang
              </label>
              <input
                type="text"
                value={namaBarang}
                onChange={(e) => setNamaBarang(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Kategori Barang
              </label>
              <input
                type="text"
                value={kategoriBarang}
                onChange={(e) => setKategoriBarang(e.target.value)}
                className="w-full px-4 py-2 border  rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Harga
              </label>
              <input
                type="number"
                value={harga}
                onChange={(e) => setHarga(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Diskon (%)
              </label>
              <input
                type="number"
                value={diskon}
                onChange={(e) => setDiskon(Number(e.target.value))}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-5 justify-between mt-6">
              <button
                type="submit"
                className="flex-1 mr-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
              >
                Hitung
              </button>
              <button
                type="button"
                onClick={bersih}
                className="flex-1 mr-2 px-4 py-2 bg-red-700 text-white font-semibold rounded-lg shadow hover:bg-red-500 transition"
              >
                Bersih
              </button>
            </div>
          </form>
        </div>

        {/* HASIL di samping */}
        {showResult && (
          <div className="w-full md:w-1/2 text-center space-y-4">
            <h2 className="text-2xl font-extrabold text-blue-800">
              Hasil Perhitungan
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg text-left shadow-inner">
              <p>
                <strong>Nama Barang:</strong> {namaBarang}
              </p>
              <p>
                <strong>Kategori:</strong> {kategoriBarang}
              </p>
              <p>
                <strong>Nilai Diskon:</strong> Rp {nilaiDiskon.toFixed(2)}
              </p>
              <p>
                <strong>Total Harga:</strong> Rp {totalHarga.toFixed(2)}
              </p>
            </div>

            <button
              onClick={kembali}
              className="mt-6 w-full px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow hover:bg-yellow-600 transition"
            >
              Kembali
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiskonForm;
