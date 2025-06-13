"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
];

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const currentLanguage = languages.find((lang) => lang.code === locale);

  return (
    <Select value={locale} onValueChange={handleLanguageChange} name="language">
      <SelectTrigger
        name="language-trigger"
        className="w-[50px] h-8 bg-transparent border-0 shadow-none focus:ring-0 focus:outline-none p-0 flex items-center justify-center"
      >
        <div className="flex items-center">
          <SelectValue>
            <span className="text-xl">{currentLanguage?.flag}</span>
          </SelectValue>
        </div>
      </SelectTrigger>

      <SelectContent>
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            <div className="flex items-center gap-2">
              <span className="text-xl">{language.flag}</span>
              <span>{language.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
