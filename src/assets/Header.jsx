import { Components } from 'react';
import { Button } from "@/components/ui/button"


function Header() {
  return (
  <section className="relative w-full overflow-hidden bg-slate-950 py-24">
      {/* Glow/background effect (hanya di atas heading) */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#22c55e33,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        {/* Small label */}
        <h1 className="text-sm font-medium text-green-400 mb-4">
          Ternak Lele Club
        </h1>

        {/* Big heading seperti Next.js */}
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 ">
          Dibangun di atas fondasi
          <br className="hidden md:block" />
          <span className="block mt-1 text-transparent bg-clip-text bg-linear-to-r from-green-400 via-emerald-300 to-cyan-300">
            ternak lele modern & efisien
          </span>
        </h1>

        {/* Subheading */}
        <div className='max-w-3xl mx-auto text-center'>
          <p className="max-w-3xl mx-auto text-center text-sm md:text-base text-gray-300 mb-6">
            Belajar budidaya lele dengan komunitas, panduan praktis, dan tools
            yang siap membantu dari kolam sampai panen.
          </p>
          <div className="flex items-center justify-center gap-4 mt-3">
            <Button className="bg-linear-to-r from-emerald-500 via-emerald-400 to-cyan-400 text-slate-950 font-semibold rounded-xl px-6 py-5 hover:brightness-110">
              Join Now
            </Button>
            <Button className="border border-emerald-400 text-emerald-200 bg-transparent rounded-xl px-6 py-5 hover:bg-emerald-500/10">
              Learn More
            </Button>
          </div>
        </div>
        

        {/* Badge "Powered by" ala Next.js */}
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-5 backdrop-blur mt-10 mb-10">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-300">
            Powered By Community 
          </span>
        </div>

        {/* Grid cards (bisa jadi fitur utama) */}
        <div className="grid gap-4 md:grid-cols-3 text-white">
          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold mb-2">Kelas Online</h3>
            <p className="text-sm text-gray-300">
              Belajar dari peternak berpengalaman dengan kurikulum terstruktur.
            </p>
          </div>
          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold mb-2">Monitoring Kolam</h3>
            <p className="text-sm text-gray-300">
              Template catatan pakan, kualitas air, dan pertumbuhan.
            </p>
          </div>
            {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-left">
            <h3 className="font-semibold mb-2">Komunitas Aktif</h3>
            <p className="text-sm text-gray-300">
              Diskusi harian, tanya jawab, dan sharing studi kasus nyata.
            </p>
          </div>
          {/* Card 4 */}
          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 text-left'>
            <h3 className="font-semibold mb-2">Panduan Praktis</h3>
            <p className="text-sm text-gray-300">
              Artikel, video, dan tips langsung dari peternak sukses.
            </p>
          </div>
          {/* Card 5 */}
          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 text-left'>
            <h3 className="font-semibold mb-2">Event & Workshop</h3>
            <p className="text-sm text-gray-300">
              Webinar rutin, workshop offline, dan meet-up komunitas.
            </p>
          </div>
          {/* Card 6 */}
          <div className='rounded-2xl border border-white/10 bg-white/5 p-5 text-left'>
            <h3 className="font-semibold mb-2">Akses ke Ahli</h3>
            <p className="text-sm text-gray-300">
              Sesi tanya jawab langsung dengan peternak dan ahli budidaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Header