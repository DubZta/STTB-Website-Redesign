import React, { useState } from "react";
import MaskText from "../../components/animations/MaskText";
import { Button } from "../../components/homepage_v1_1/ui/button";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const FinanceTable = ({ title, data, note, subTableTitle, subTableData, subTableNote, language }: any) => (
  <div className="mt-6 animate-fadeIn">

    <h3 className="text-xl font-bold text-slate-900 mb-6 uppercase tracking-tight">
      {title}
    </h3>

    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#0b3f82] text-white">
            <th className="px-6 py-4 text-xs font-bold uppercase w-12 text-center">{language === 'id' ? 'No' : 'No'}</th>
            <th className="px-6 py-4 text-xs font-bold uppercase">{language === 'id' ? 'Jenis' : 'Type'}</th>
            <th className="px-6 py-4 text-xs font-bold uppercase text-right">{language === 'id' ? 'Nominal' : 'Amount'}</th>
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
        <h4 className="text-sm font-bold mb-3">{language === 'id' ? 'Catatan:' : 'Notes:'}</h4>
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
          {subTableTitle || (language === 'id' ? 'Biaya Studi Matrikulasi:' : 'Matriculation Study Costs:')}
        </h4>

        <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0b3f82] text-white">
                <th className="px-6 py-4 text-xs font-bold uppercase w-12 text-center">{language === 'id' ? 'No' : 'No'}</th>
                <th className="px-6 py-4 text-xs font-bold uppercase">{language === 'id' ? 'Jenis' : 'Type'}</th>
                <th className="px-6 py-4 text-xs font-bold uppercase text-right">{language === 'id' ? 'Nominal' : 'Amount'}</th>
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
      <Button className="bg-[#E31D1A] text-white hover:bg-[#b91815] px-12 py-3 rounded-full shadow-lg group min-w-[200px]">
        <a href="/academics" className="flex items-center justify-center whitespace-nowrap">
          {language === 'id' ? 'INFO SELENGKAPNYA' : 'MORE INFORMATION'}
          <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </Button>
    </div>

  </div>
);


export default function BiayaStudiPage() {
  const { language } = useLanguage();

  const programs = [
    {
      id: 1,
      short: "S.Th",
      title: language === 'id' ? "PROGRAM SARJANA TEOLOGI (S.Th.)" : "BACHELOR OF THEOLOGY (S.Th.)",
      description: language === 'id'
        ? "Program sarjana teologi untuk pelayanan gereja dan kepemimpinan rohani."
        : "Bachelor program in theology for church ministry and spiritual leadership.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Biaya Kuliah) Per Semester" : "Education (Tuition Fee) Per Semester", price: "Rp 9.000.000,-" },
        { no: "6", label: language === 'id' ? "Bimbingan Tugas Akhir" : "Final Assignment Guidance", price: "Rp 1.500.000,-" },
        { no: "7", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "8", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.000.000,-" },
        { no: "9", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 dengan jumlah sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "STTB memberikan subsidi untuk biaya akomodasi & konsumsi",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ] : [
        "Education cost payment for 1 semester (point no. 3 total Rp.9,000,000) can be paid in full per semester or in 6-month installments (January-June or July-December) of Rp.1,500,000/month",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "STTB provides subsidies for accommodation & consumption costs",
        "Fees are subject to change (with prior notice)"
      ]
    },
    {
      id: 2,
      short: "S.Pd",
      title: language === 'id' ? "PROGRAM SARJANA PENDIDIKAN KRISTEN (S.Pd.)" : "BACHELOR OF CHRISTIAN EDUCATION (S.Pd.)",
      description: language === 'id'
        ? "Program pendidikan untuk melatih pemimpin pendidikan Kristen."
        : "Educational program to train Christian education leaders.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Biaya Kuliah) Per Semester" : "Education (Tuition Fee) Per Semester", price: "Rp 9.000.000,-" },
        { no: "6", label: language === 'id' ? "Bimbingan Tugas Akhir" : "Final Assignment Guidance", price: "Rp 1.500.000,-" },
        { no: "7", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "8", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.000.000,-" },
        { no: "9", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Pembayaran biaya pendidikan selama 1 semester (poin no. 3 dengan jumlah sebesar Rp.9.000.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.500.000,-/bulan",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "STTB memberikan subsidi untuk biaya akomodasi & konsumsi",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ] : [
        "Education cost payment for 1 semester (point no. 3 total Rp.9,000,000) can be paid in full per semester or in 6-month installments (January-June or July-December) of Rp.1,500,000/month",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "STTB provides subsidies for accommodation & consumption costs",
      ]
    },
    {
      id: 3,
      short: "M.Th",
      title: language === 'id' ? "MAGISTER TEOLOGI PELAYANAN PASTORAL GEREJA URBAN (M.Th.)" : "MASTER OF THEOLOGY IN URBAN CHURCH PASTORAL MINISTRY (M.Th.)",
      description: language === 'id'
        ? "Program magister untuk penelitian teologi dan kepemimpinan gereja di konteks urban."
        : "Master program for theological research and church leadership in urban contexts.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Kuliah) Per Mata Kuliah" : "Education (Lecture) Per Course", price: "Rp 1.500.000,-" },
        { no: "6", label: language === 'id' ? "Bimbingan & Ujian Proposal Tesis" : "Thesis Proposal Guidance & Exam", price: "Rp 2.000.000,-" },
        { no: "7", label: language === 'id' ? "Bimbingan & Sidang Tesis" : "Thesis Guidance & Defense", price: "Rp 5.000.000,-" },
        { no: "8", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "9", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.500.000,-" },
        { no: "10", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)",
        "Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar S.Th. maka wajib mengikuti program matrikulasi terlebih dahulu selama 4 semester (2 tahun) dengan biaya studi sbb:"
      ] : [
        "Education costs/tuition are paid at least 2 (two) weeks before lectures begin",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "Fees are subject to change (with prior notice)",
        "For new M.Th students without a B.Th degree, matriculation program is mandatory for 4 semesters (2 years) with costs as follows:"
      ],
      subTableData: [
        { no: "1", label: language === 'id' ? "Biaya kuliah selama matrikulasi M.Th." : "Tuition during M.Th matriculation", price: "" },
        { no: "2", label: language === 'id' ? "Pendidikan (Biaya Kuliah) Per Semester" : "Education (Tuition Fee) Per Semester", price: "Rp 7.800.000,-" },
        { no: "3", label: language === 'id' ? "Biaya Administrasi Per Semester" : "Administration Fee Per Semester", price: "Rp 500.000,-" },
      ],
      subTableNote: language === 'id' ? [
        "Pembayaran biaya pendidikan program matrikulasi selama 1 semester (poin no. 1 dengan jumlah sebesar Rp.7.800.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.300.000,-/bulan"
      ] : [
        "Matriculation program education costs for 1 semester (point no. 1 total Rp.7,800,000) can be paid in full per semester or in 6-month installments of Rp.1,300,000/month"
      ]
    },
    {
      id: 4,
      short: "M.Th",
      title: language === 'id' ? "MAGISTER TEOLOGI TRANSFORMASI BUDAYA & MASYARAKAT (M.Th.)" : "MASTER OF THEOLOGY IN CULTURAL & SOCIETAL TRANSFORMATION (M.Th.)",
      description: language === 'id'
        ? "Program magister untuk penelitian teologi dan transformasi budaya."
        : "Master program for theological research and cultural transformation.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Kuliah) Per Mata Kuliah" : "Education (Lecture) Per Course", price: "Rp 1.500.000,-" },
        { no: "6", label: language === 'id' ? "Bimbingan & Ujian Proposal Tesis" : "Thesis Proposal Guidance & Exam", price: "Rp 2.000.000,-" },
        { no: "7", label: language === 'id' ? "Bimbingan & Sidang Tesis" : "Thesis Guidance & Defense", price: "Rp 5.000.000,-" },
        { no: "8", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "9", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.500.000,-" },
        { no: "10", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)",
        "Bagi mahasiswa baru Prodi M.Th. yang tidak memiliki gelar S.Th. maka wajib mengikuti program matrikulasi terlebih dahulu selama 4 semester (2 tahun) dengan biaya studi sbb:"
      ] : [
        "Education costs/tuition are paid at least 2 (two) weeks before lectures begin",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "Fees are subject to change (with prior notice)",
        "For new M.Th students without a B.Th degree, matriculation program is mandatory for 4 semesters (2 years) with costs as follows:"
      ],
      subTableData: [
        { no: "1", label: language === 'id' ? "Biaya kuliah selama matrikulasi M.Th." : "Tuition during M.Th matriculation", price: "" },
        { no: "2", label: language === 'id' ? "Pendidikan (Biaya Kuliah) Per Semester" : "Education (Tuition Fee) Per Semester", price: "Rp 7.800.000,-" },
        { no: "3", label: language === 'id' ? "Biaya Administrasi Per Semester" : "Administration Fee Per Semester", price: "Rp 500.000,-" },
      ],
      subTableNote: language === 'id' ? [
        "Pembayaran biaya pendidikan program matrikulasi selama 1 semester (poin no. 1 dengan jumlah sebesar Rp.7.800.000,-) dapat dilakukan sekaligus per 1 semester atau dengan mencicil selama 6 bulan (Januari-Juni atau Juli-Desember) sebesar Rp.1.300.000,-/bulan"
      ] : [
        "Matriculation program education costs for 1 semester (point no. 1 total Rp.7,800,000) can be paid in full per semester or in 6-month installments of Rp.1,300,000/month"
      ]
    },
    {
      id: 5,
      short: "M.Pd",
      title: language === 'id' ? "MAGISTER PENDIDIKAN KRISTEN (M.Pd.)" : "MASTER OF CHRISTIAN EDUCATION (M.Pd.)",
      description: language === 'id'
        ? "Program magister pendidikan untuk kepemimpinan akademik Kristen."
        : "Master program in education for Christian academic leadership.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Kuliah) Per Mata Kuliah" : "Education (Lecture) Per Course", price: "Rp 1.500.000,-" },
        { no: "6", label: language === 'id' ? "Bimbingan & Ujian Proposal Tesis" : "Thesis Proposal Guidance & Exam", price: "Rp 2.000.000,-" },
        { no: "7", label: language === 'id' ? "Bimbingan & Sidang Tesis" : "Thesis Guidance & Defense", price: "Rp 5.000.000,-" },
        { no: "8", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "9", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.500.000,-" },
        { no: "10", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ] : [
        "Education costs/tuition are paid at least 2 (two) weeks before lectures begin",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "Fees are subject to change (with prior notice)"
      ]
    },
    {
      id: 6,
      short: "M.Min",
      title: language === 'id' ? "MAGISTER MINISTRI MARKETPLACE (M.Min.)" : "MASTER OF MINISTRY IN MARKETPLACE (M.Min.)",
      description: language === 'id'
        ? "Program magister ministri untuk kepemimpinan Kristen di dunia kerja."
        : "Master of Ministry program for Christian leadership in the workplace.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Kuliah) Per Mata Kuliah" : "Education (Lecture) Per Course", price: "Rp 1.500.000,-" },
        { no: "6", label: language === 'id' ? "Tugas Akhir (Proyek)" : "Final Assignment (Project)", price: "Rp 2.500.000,-" },
        { no: "7", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "8", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.500.000,-" },
        { no: "9", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ] : [
        "Education costs/tuition are paid at least 2 (two) weeks before lectures begin",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "Fees are subject to change (with prior notice)"
      ]
    },
    {
      id: 7,
      short: "M.Min",
      title: language === 'id' ? "MAGISTER MINISTRI KEPEMIMPINAN PASTORAL (M.Min.)" : "MASTER OF MINISTRY IN PASTORAL LEADERSHIP (M.Min.)",
      description: language === 'id'
        ? "Program magister ministri untuk kepemimpinan pastoral dan gereja."
        : "Master of Ministry program for pastoral and church leadership.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Kuliah) Per Mata Kuliah" : "Education (Lecture) Per Course", price: "Rp 1.500.000,-" },
        { no: "6", label: language === 'id' ? "Tugas Akhir (Proyek)" : "Final Assignment (Project)", price: "Rp 2.500.000,-" },
        { no: "7", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "8", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.500.000,-" },
        { no: "9", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ] : [
        "Education costs/tuition are paid at least 2 (two) weeks before lectures begin",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "Fees are subject to change (with prior notice)"
      ]
    },
    {
      id: 8,
      short: "M.Min",
      title: language === 'id' ? "MAGISTER MINISTRI TEOLOGI PELAYANAN GEREJAWI (M.Min.)" : "MASTER OF MINISTRY IN ECCLESIAL MINISTRY THEOLOGY (M.Min.)",
      description: language === 'id'
        ? "Program magister ministri untuk teologi pelayanan dan organisasi gereja."
        : "Master of Ministry program for ministry theology and church organization.",
      data: [
        { no: "1", label: language === 'id' ? "Administrasi" : "Administration", price: "" },
        { no: "2", label: language === 'id' ? "Pendaftaran & Tes Masuk" : "Registration & Entrance Test", price: "Rp 500.000,-" },
        { no: "3", label: language === 'id' ? "Administrasi Per Semester" : "Semester Administration", price: "Rp 500.000,-" },
        { no: "4", label: language === 'id' ? "Kuliah/Bimbingan Khusus" : "Lectures/Special Guidance", price: "" },
        { no: "5", label: language === 'id' ? "Pendidikan (Kuliah) Per Mata Kuliah" : "Education (Lecture) Per Course", price: "Rp 1.500.000,-" },
        { no: "6", label: language === 'id' ? "Tugas Akhir (Proyek)" : "Final Assignment (Project)", price: "Rp 2.500.000,-" },
        { no: "7", label: language === 'id' ? "Lain-lain" : "Others", price: "" },
        { no: "8", label: language === 'id' ? "Wisuda" : "Graduation", price: "Rp 2.500.000,-" },
        { no: "9", label: language === 'id' ? "Cuti Akademik (bila mengambil cuti) Per Semester" : "Academic Leave (if taken) Per Semester", price: "Rp 500.000,-" },
      ],
      note: language === 'id' ? [
        "Biaya pendidikan/kuliah dibayarkan selambat-lambatnya 2 (dua) minggu sebelum perkuliahan dimulai",
        "Biaya administrasi semester dibayarkan di awal semester (bulan Januari & Juli) selama mahasiswa berstatus mahasiswa aktif (hingga wisuda)",
        "Biaya sewaktu-waktu dapat berubah (dengan pemberitahuan sebelumnya)"
      ] : [
        "Education costs/tuition are paid at least 2 (two) weeks before lectures begin",
        "Semester administration fees are paid at the beginning of the semester (January & July) as long as the student is active (until graduation)",
        "Fees are subject to change (with prior notice)"
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
            {language === 'id' ? 'Biaya' : 'Costs'}
          </span>

          <MaskText type="lines">
            <h1 className="text-7xl md:text-8xl font-black text-[#0b3f82] leading-[0.85] tracking-tight">
              {language === 'id' ? 'STUDI' : 'STUDY'}
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
          language={language}
        />

      </div>

    </div>
  );
}