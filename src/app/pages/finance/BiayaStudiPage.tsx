import React, { useState } from "react";
import MaskText from "../../components/animations/MaskText";
import { Button } from "../../components/homepage_v1_1/ui/button";
import { ChevronRight } from "lucide-react";

const FinanceTable = ({ title, data, note, subTableTitle, subTableData, subTableNote }: any) => (
  <div className="mt-6 animate-fadeIn">

    <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
      {title}
    </h3>

    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#0b3f82] text-white">
            <th className="px-6 py-4 text-xs font-bold uppercase w-12 text-center">No</th>
            <th className="px-6 py-4 text-xs font-bold uppercase">Jenis</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-right">Nominal</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {data.map((item: any, idx: number) => (
            <tr key={idx} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 text-sm text-gray-500 text-center">{item.no}</td>
              <td className="px-6 py-4 text-sm font-medium text-slate-700">{item.label}</td>
              <td className="px-6 py-4 text-sm font-bold text-[#0b3f82] text-right">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {note && (
      <div className="mt-6 p-6 bg-[#FFFBEB] rounded-xl border border-yellow-100">
        <h4 className="text-sm font-bold mb-3">Catatan:</h4>
        <ul className="space-y-2">
          {note.map((item: string, idx: number) => (
            <li key={idx} className="text-xs text-slate-600 flex items-start">
              <span className="mr-2 mt-1 text-[#E31D1A]">•</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </div>
    )}

    {subTableData && (
      <div className="mt-8">

        <h4 className="text-sm font-bold text-slate-900 mb-4 mt-6">
          Biaya Studi Matrikulasi:
        </h4>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b3f82] text-white">
                <th className="px-6 py-4 text-xs font-bold uppercase w-12 text-center">No</th>
                <th className="px-6 py-4 text-xs font-bold uppercase">Jenis</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-right">Nominal</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {subTableData.map((item: any, idx: number) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-500 text-center">{item.no}</td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-700">{item.label}</td>
                  <td className="px-6 py-4 text-sm font-bold text-[#0b3f82] text-right">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {subTableNote && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <ul className="space-y-1">
              {subTableNote.map((item: string, idx: number) => (
                <li key={idx} className="text-xs text-slate-500 italic flex items-start">
                  <span className="mr-2">**</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    )}

    <div className="mt-8 flex justify-end">
      <Button className="bg-[#E31D1A] text-white hover:bg-[#b91815] px-8 py-3 rounded-full shadow-lg group">
        INFO SELENGKAPNYA
        <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>

  </div>
);


export default function BiayaStudiPage() {

  const programs = [
    {
      id: 1,
      short: "S.Th",
      title: "PROGRAM SARJANA TEOLOGI (S.Th.)",
      description: "Program sarjana teologi untuk pelayanan gereja dan kepemimpinan rohani.",
      data: [
        { no: "1", label: "Administrasi", price: "" },
        { no: "2", label: "Pendaftaran & Tes Masuk", price: "Rp 500.000,-" },
        { no: "3", label: "Administrasi Per Semester", price: "Rp 500.000,-" },
        { no: "4", label: "Kuliah/Bimbingan Khusus", price: "" },
        { no: "5", label: "Pendidikan (Biaya Kuliah) Per Semester", price: "Rp 9.000.000,-" },
        { no: "6", label: "Bimbingan Tugas Akhir", price: "Rp 1.500.000,-" },
        { no: "7", label: "Lain-lain", price: "" },
        { no: "8", label: "Wisuda", price: "Rp 2.000.000,-" },
        { no: "9", label: "Cuti Akademik (bila mengambil cuti) Per Semester", price: "Rp 500.000,-" },
      ],
      note: [
        "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 dengan jumlah sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "STTB memberikan subsidi untuk biaya akomodasi & konsumsi",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ]
    },
    {
      id: 2,
      short: "S.Pd",
      title: "PROGRAM SARJANA PENDIDIKAN (S.Pd.)",
      description: "Program pendidikan untuk melatih pemimpin pendidikan Kristen.",
      data: [
        { no: "1", label: "Administrasi", price: "" },
        { no: "2", label: "Pendaftaran & Tes Masuk", price: "Rp 500.000,-" },
        { no: "3", label: "Administrasi Per Semester", price: "Rp 500.000,-" },
        { no: "4", label: "Kuliah/Bimbingan Khusus", price: "" },
        { no: "5", label: "Pendidikan (Biaya Kuliah) Per Semester", price: "Rp 9.000.000,-" },
        { no: "6", label: "Bimbingan Tugas Akhir", price: "Rp 1.500.000,-" },
        { no: "7", label: "Lain-lain", price: "" },
        { no: "8", label: "Wisuda", price: "Rp 2.000.000,-" },
        { no: "9", label: "Cuti Akademik (bila mengambil cuti) Per Semester", price: "Rp 500.000,-" },
      ],
      note: [
        "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 dengan jumlah sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "STTB memberikan subsidi untuk biaya akomodasi & konsumsi",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ]
    },
    {
      id: 3,
      short: "M.Th",
      title: "PROGRAM MAGISTER TEOLOGI (M.Th.)",
      description: "Program magister untuk penelitian teologi dan kepemimpinan gereja.",
      data: [
        { no: "1", label: "Administrasi", price: "" },
        { no: "2", label: "Pendaftaran & Tes Masuk", price: "Rp 500.000,-" },
        { no: "3", label: "Administrasi Per Semester", price: "Rp 500.000,-" },
        { no: "4", label: "Kuliah/Bimbingan Khusus", price: "" },
        { no: "5", label: "Pendidikan (Kuliah) Per Mata Kuliah", price: "Rp 1.500.000,-" },
        { no: "6", label: "Bimbingan & Ujian Proposal Tesis", price: "Rp 2.000.000,-" },
        { no: "7", label: "Bimbingan & Sidang Tesis", price: "Rp 5.000.000,-" },
        { no: "8", label: "Lain-lain", price: "" },
        { no: "9", label: "Wisuda", price: "Rp 2.500.000,-" },
        { no: "10", label: "Cuti Akademik (bila mengambil cuti) Per Semester", price: "Rp 500.000,-" },
      ],
      note: [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)",
        "Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar S.Th. maka wajib mengikuti program matrikulasi terlebih dahulu selama 4 semester (2 tahun) dengan biaya studi sbb:"
      ],
      // Matrikulasi Data
      subTableData: [
        { no: "1", label: "Biaya kuliah selama matrikulasi M.Th.", price: "" },
        { no: "2", label: "Pendidikan (Biaya Kuliah) Per Semester", price: "Rp 7.800.000,-" },
        { no: "3", label: "Biaya Administrasi Per Semester", price: "Rp 500.000,-" },
      ],
      subTableNote: [
        "Pembayaran biaya pendidikan program matrikulasi selama 1 semester (poin no. 1 dengan jumlah sebesar Rp.7.800.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.300.000,-/bulan"
      ]
    },
    {
      id: 4,
      short: "M.Pd",
      title: "PROGRAM MAGISTER PENDIDIKAN (M.Pd.)",
      description: "Program magister pendidikan untuk kepemimpinan akademik Kristen.",
      data: [
        { no: "1", label: "Administrasi", price: "" },
        { no: "2", label: "Pendaftaran & Tes Masuk", price: "Rp 500.000,-" },
        { no: "3", label: "Administrasi Per Semester", price: "Rp 500.000,-" },
        { no: "4", label: "Kuliah/Bimbingan Khusus", price: "" },
        { no: "5", label: "Pendidikan (Kuliah) Per Mata Kuliah", price: "Rp 1.500.000,-" },
        { no: "6", label: "Bimbingan & Ujian Proposal Tesis", price: "Rp 2.000.000,-" },
        { no: "7", label: "Bimbingan & Sidang Tesis", price: "Rp 5.000.000,-" },
        { no: "8", label: "Lain-lain", price: "" },
        { no: "9", label: "Wisuda", price: "Rp 2.500.000,-" },
        { no: "10", label: "Cuti Akademik (bila mengambil cuti) Per Semester", price: "Rp 500.000,-" },
      ],
      note: [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ]
    },
    {
      id: 5,
      short: "M.Min",
      title: "PROGRAM MAGISTER MINISTRI (M.Min.)",
      subtitle: "Dalam Pelayanan Marketplace",
      description: "Program magister ministri untuk pelayanan di tempat kerja.",
      data: [
        { no: "1", label: "Administrasi", price: "" },
        { no: "2", label: "Pendaftaran & Tes Masuk", price: "Rp 500.000,-" },
        { no: "3", label: "Administrasi Per Semester", price: "Rp 500.000,-" },
        { no: "4", label: "Kuliah/Bimbingan Khusus", price: "" },
        { no: "5", label: "Pendidikan (Kuliah) Per Mata Kuliah", price: "Rp 1.500.000,-" },
        { no: "6", label: "Tugas Akhir (Proyek)", price: "Rp 2.500.000,-" },
        { no: "7", label: "Lain-lain", price: "" },
        { no: "8", label: "Wisuda", price: "Rp 2.500.000,-" },
        { no: "9", label: "Cuti Akademik (bila mengambil cuti) Per Semester", price: "Rp 500.000,-" },
      ],
      note: [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ]
    }
  ];

  const [activeProgram, setActiveProgram] = useState(programs[0]);

  return (
    <div className="bg-white min-h-screen pt-16 pb-24">

      <div className="container mx-auto px-6 lg:px-12">

        {/* HERO TITLE */}
        <div className="mb-20 text-center">

          <span className="text-[#E31D1A] uppercase tracking-[0.35em] font-extrabold text-xs block mb-4">
            Biaya
          </span>

          <MaskText type="lines">
            <h1 className="text-7xl md:text-8xl font-black text-[#0b3f82] leading-[0.85] tracking-tight">
              STUDI
            </h1>
          </MaskText>

          <div className="mt-6 flex justify-center">
            <div className="h-[4px] w-24 bg-gradient-to-r from-[#E31D1A] to-[#0b3f82] rounded-full"></div>
          </div>

        </div>


        {/* PROGRAM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-10xl mx-auto">

          {programs.map(program => (

            <div
              key={program.id}
              onClick={() => setActiveProgram(program)}
              className={`
                cursor-pointer rounded-2xl p-6 transition-all duration-300 relative overflow-hidden
                backdrop-blur-lg
                border border-white/30
                bg-white/70
                shadow-lg shadow-slate-200/50
                hover:shadow-xl hover:shadow-[#0b3f82]/10
                hover:-translate-y-1 hover:scale-[1.03]

                ${activeProgram.id === program.id
                  ? "ring-2 ring-[#E31D1A] shadow-xl shadow-red-500/20"
                  : ""
                }
              `}
            >

              {/* glass highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/10 opacity-40 pointer-events-none"></div>

              <div className="relative z-10">

                <div className="flex justify-between items-start mb-4">

                  <div className="text-sm text-gray-500 font-bold bg-gray-100 px-3 py-1 rounded-full">
                    {program.short}
                  </div>

                  {activeProgram.id === program.id && (
                    <div className="w-3 h-3 bg-[#E31D1A] rounded-full animate-pulse"></div>
                  )}

                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  {program.title}
                </h3>

                {program.subtitle && (
                  <p className="text-xs text-[#E31D1A] font-bold uppercase tracking-wider mb-2">
                    {program.subtitle}
                  </p>
                )}

                <p className="text-sm text-gray-600 leading-relaxed">
                  {program.description}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* PROGRAM TABLE */}
        <FinanceTable
          title={activeProgram.title}
          data={activeProgram.data}
          note={activeProgram.note}
          subTableData={activeProgram.subTableData}
          subTableNote={activeProgram.subTableNote}
        />

      </div>

    </div>
  );
}