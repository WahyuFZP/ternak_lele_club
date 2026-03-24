import { Components } from 'react';
import { Button } from "@/components/ui/button"


function Header() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#111827] to-[#1e1b4b] py-24">
      {/* Glow/background effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#22c55e33,_transparent_60%),_radial-gradient(circle_at_bottom,_#3b82f633,_transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Small label */}
        <p className="text-sm font-medium text-green-400 mb-4">
          Ternak Lele Club
        </p>

        {/* Big heading seperti Next.js */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 ">
          Dibangun di atas fondasi
          <br className="hidden md:block" />
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-300">
            ternak lele modern & efisien
          </span>
        </h1>

        {/* Subheading */}
        <div className='inline-flex items-centers'>
        <p className="max-w-3xl mx-auto text-center text-sm md:text-base text-gray-300 mb-10">
          Belajar budidaya lele dengan komunitas, panduan praktis, dan tools
          yang siap membantu dari kolam sampai panen.
        </p>
        </div>

        {/* Badge "Powered by" ala Next.js */}
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur mt-6 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-300">
            Powered By Community 
          </span>
        </div>

        {/* Grid cards (bisa jadi fitur utama) */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold mb-2">Kelas Online</h3>
            <p className="text-sm text-gray-300">
              Belajar dari peternak berpengalaman dengan kurikulum terstruktur.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold mb-2">Monitoring Kolam</h3>
            <p className="text-sm text-gray-300">
              Template catatan pakan, kualitas air, dan pertumbuhan.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold mb-2">Komunitas Aktif</h3>
            <p className="text-sm text-gray-300">
              Diskusi harian, tanya jawab, dan sharing studi kasus nyata.
            </p>
          </div>
        </div>
      </div>

    {/* Testimoni */}
    
    </section>
  );
}
export default Header