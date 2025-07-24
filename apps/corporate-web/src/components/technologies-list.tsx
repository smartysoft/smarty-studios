"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import Image from "next/image";

type Technology = {
  name: string;
  logo: string;
};

type Props = {
  techStack: Technology[];
};

export default function TechnologiesList({ techStack }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <Tooltip.Provider>
        {techStack.map((tech) => (
          <Tooltip.Root key={tech.name}>
            <Tooltip.Trigger asChild>
              <div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 rounded-xl border border-neutral-800 bg-neutral-900 shadow-md hover:shadow-lg transition-transform duration-200 flex items-center justify-center"
                  style={{ backgroundColor: "#FFF", width: 92, height: 92 }}
                  transition={{ duration: 0.1 }}
                >
                  <Image
                    src={tech.logo}
                    alt={`${tech.name} logo`}
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                  />
                </motion.div>
              </div>
            </Tooltip.Trigger>

            <Tooltip.Content
              side="top"
              className="rounded bg-black text-white px-3 py-1 text-sm shadow"
            >
              {tech.name}
            </Tooltip.Content>
          </Tooltip.Root>
        ))}
      </Tooltip.Provider>
    </div>
  );
}
