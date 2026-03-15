import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SocialCard = ({
  platform,
  handle,
  url,
  icon,
  color,
  index,
}: {
  platform: string;
  handle: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  index: number;
}) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.4 }}
    whileHover={{ y: -4 }}
    className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-shadow duration-200 hover:glow-blue group"
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
      {icon}
    </div>
    <div className="flex-1">
      <p className="font-display text-sm text-foreground">{platform}</p>
      <p className="text-sm text-muted-foreground">@{handle}</p>
    </div>
    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.a>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.97a8.35 8.35 0 004.76 1.49V7.01a4.85 4.85 0 01-1-.32z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const SocialsSection = () => (
  <section id="socials" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl font-display mb-2">
          <span className="text-primary">&gt;</span> social
        </h2>
        <p className="text-muted-foreground text-sm">Me siga nas redes sociais</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <SocialCard
          platform="Instagram"
          handle="novanest_oficial"
          url="https://www.instagram.com/novanest_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          icon={<InstagramIcon />}
          color="bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-400"
          index={0}
        />
        <SocialCard
          platform="TikTok"
          handle="davidxx_olv"
          url="https://www.tiktok.com/@davidxx_olv?is_from_webapp=1&sender_device=pc"
          icon={<TikTokIcon />}
          color="bg-card text-foreground"
          index={1}
        />
      </div>
    </div>
  </section>
);

export default SocialsSection;
