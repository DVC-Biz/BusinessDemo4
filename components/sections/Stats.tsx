"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Stats() {
  const stats = [
    { value: 500, suffix: "+", label: "Enterprise Clients" },
    { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
    { value: 10, suffix: "M+", label: "Users Worldwide" },
    { value: 24, suffix: "/7", label: "Support Available" },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 overflow-hidden relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60"></div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
