import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function StartSection() {
    return (
        <section className="relative w-full bg-slate-950 border-t border-white/10 py-20">
            <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
                {/* Kiri: teks + CTA */}
                <div className="flex-1 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                        Mulai Sekarang
                    </p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                        Mulai perjalanan budidaya lele Anda
                    </h2>
                    <p className="text-sm md:text-base text-gray-300 mb-6 max-w-xl">
                        Gunakan template kolam, panduan pakan, dan monitoring sederhana
                        untuk memulai dari nol sampai panen pertama dengan lebih percaya
                        diri.
                    </p>

                    {/* Badge: warna-warni ala Next.js / shadcn */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-6">
                        <Badge
                            variant="outline"
                            className="border-purple-500/40 bg-purple-500/10 text-purple-200"
                        >
                            Starter
                        </Badge>
                        <Badge
                            variant="outline"
                            className="border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                        >
                            Pemula
                        </Badge>
                        <Badge
                            variant="outline"
                            className="border-sky-500/40 bg-sky-500/10 text-sky-200"
                        >
                            Monitoring
                        </Badge>
                        <Badge
                            variant="outline"
                            className="border-amber-500/40 bg-amber-500/10 text-amber-200"
                        >
                            Komunitas
                        </Badge>
                        <Badge
                            variant="outline"
                            className="border-pink-500/40 bg-pink-500/10 text-pink-200"
                        >
                            Event
                        </Badge>
                        <Badge
                            variant="outline"       
                            className="border-cyan-500/40 bg-cyan-500/10 text-cyan-200"                        
                        >
                            Panduan
                        </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button className="bg-linear-to-r from-emerald-500 via-emerald-400 to-cyan-400 text-slate-950 font-semibold rounded-xl px-6 py-2 hover:brightness-110">
                            Mulai dari Template
                        </Button>
                        <button className="text-sm text-gray-300 hover:text-white underline-offset-4 hover:underline">
                            Lihat panduan lengkap
                        </button>
                    </div>
                </div>

                {/* Kanan: kartu tumpuk ala Next.js */}
                <div className="flex-1 flex justify-center">
                    <div className="relative w-full max-w-sm h-72">
                        <div className="absolute inset-x-4 top-6 h-40 rounded-3xl bg-white/5 border border-white/10" />
                        <div className="absolute inset-x-2 top-3 h-44 rounded-3xl bg-linear-to-br from-emerald-500/20 via-cyan-500/10 to-transparent border border-emerald-400/40" />
                        <div className="relative h-full rounded-3xl bg-white/5 border border-white/15 backdrop-blur flex flex-col justify-between p-6">
                            <div>
                                <p className="text-xs font-medium text-emerald-300 mb-2">
                                    Dashboard Kolam
                                </p>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    Pantau budidaya dari satu tempat
                                </h3>
                                <p className="text-sm text-gray-300">
                                    Catat pakan, kualitas air, dan pertumbuhan ikan dalam tampilan
                                    sederhana yang mudah dipahami pemula.
                                </p>
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <span className="text-xs text-gray-400">
                                    Contoh tampilan dashboard
                                </span>
                                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/40">
                                    Live preview
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
