import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Peternak Lele, Bandung",
    text: "“Kelasnya praktis banget, survival rate panen pertama saya naik 20%.”",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Siti Aminah",
    role: "Pemula, Yogyakarta",
    text: "“Penjelasan step‑by‑step dari pakan sampai panen bikin saya berani mulai.”",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Andi Pratama",
    role: "Pelaku UMKM, Surabaya",
    text: "“Template monitoring kolam membantu saya lebih rapi dan efisien.”",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-slate-950 py-10 border-t border-white/10">
      <motion.div
        className="max-w-5xl mx-auto px-4 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
          Apa kata member Ternak Lele Club🦈?
        </h2>
        <p className="text-sm text-gray-400 mt-4 mb-10">
          Testimoni dari peternak yang belajar di Ternak Lele Club.
        </p>

        <motion.div
          className="grid gap-6 md:grid-cols-3 text-left"
          variants={container}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
              variants={card}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="text-sm text-gray-300 mb-4">{item.text}</p>
                </div>
                <div className="font-bold text-white">{item.name}</div>
              <div className="text-xs text-gray-400">{item.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}