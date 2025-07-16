import Image from "next/image";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.webp"
      className={`${className} w-full h-auto`}
      width={120}
      height={42}
      alt="logo"
      priority={true}
    />
  );
};
