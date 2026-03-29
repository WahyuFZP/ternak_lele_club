export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-slate-950 ">
            <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between gap-8 ">
                {/* Logo */}
                <div className="flex  gap-2 items-start ">
                    <img src="src/assets/lele.png" alt="logo" className="w-25 h-15" />
                </div>
                {/* Company Info */}
                <div className="flex flex-col items-start text-left space-y-1 text-white">
                    <h4 className="font-medium text-white">About Us</h4>
                    <p className="text-sm text-muted-foreground">Tentang Kami</p>
                    <p className="text-sm text-muted-foreground">Sejarah</p>
                    <p className="text-sm text-muted-foreground">Tim Kami</p>
                    <p className="text-sm text-muted-foreground">Visi & Misi</p>
                </div>
                {/* Contact */}
                <div className="flex flex-col items-start text-left space-y-1">
                    <h4 className="font-medium text-white">Contact</h4>
                    <p className="text-sm text-muted-foreground">Email: wahyufikri@example.com</p>
                </div>
                {/* Legal */}
                <div className="flex flex-col items-start text-left space-y-1">
                    <h4 className="font-medium text-white">Legal</h4>
                    <p className="text-sm text-muted-foreground">Privacy Policy / Terms of Service</p>
                </div>
                {/* Social & Community */}
                <div className="flex flex-col items-start text-left space-y-1">
                    <h4 className="font-medium text-white">Social & Community</h4>
                    <p className="text-sm text-muted-foreground">Instagram: @ladoo_sir_gaya</p>
                    <p className="text-sm text-muted-foreground">Tiktok: @ladoo_sir_gaya</p>
                    <p className="text-sm text-muted-foreground">Youtube: @ladoo_sir_gaya</p>
                </div>
            </div>
            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground pb-6">
                © 2026 Wahyu Fikri. All rights reserved.
            </div>
        </footer>
    )
}