'use client';

import { motion } from 'framer-motion';

interface ImageDividerProps {
  image: string;
  title?: string;
  subtitle?: string;
  height?: string;
}

export function ImageDivider({
  image,
  title,
  subtitle,
  height = 'h-[400px]',
}: ImageDividerProps) {
  return (
    <section className={`relative ${height} overflow-hidden bg-background`}>
      {/* Subtle Background Image - Very Light */}
      <div className="absolute inset-0 z-0 opacity-[0.03]">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>

      {/* Optional Content */}
      {(title || subtitle) && (
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="container mx-auto px-6 text-center lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {title && (
                <h2 className="heading-lg mb-4 text-foreground">{title}</h2>
              )}
              {subtitle && (
                <p className="body-lg mx-auto max-w-3xl text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}
