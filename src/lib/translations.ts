export type Language = "tr" | "en"

export const translations = {
  tr: {
    toggle: "EN",
    schoolName: "Nevzat Ayaz Anadolu Lisesi",
    subtitle: "Aktif Öğrenci E-Posta Sistemi",
    websiteTitle: "Resmi Website",
    websiteDescription: "Okulumuzun resmi web sitesini ziyaret edin",
    websiteButton: "Okul Resmi Websitesi",
    networkTitle: "Etkileşim Ağı",
    networkDescription: "Okul topluluğu ile bağlantı kurun",
    networkButton: "Nevzat Ayaz Etkileşim Ağına Git",
    footer: `© ${new Date().getFullYear()} Nevzat Ayaz Anadolu Lisesi - Bu proje GPLv3 ile lisanslanmıştır.`,
    opensource: "Açık Kaynak",
  },
  en: {
    toggle: "TR",
    schoolName: "Nevzat Ayaz Anatolian High School",
    subtitle: "Active Student Email System",
    websiteTitle: "Official Website",
    websiteDescription: "Visit our school's official website",
    websiteButton: "School Official Website",
    networkTitle: "Interaction Network",
    networkDescription: "Connect with the school community",
    networkButton: "Go to Nevzat Ayaz Network",
    footer: `© ${new Date().getFullYear()} Nevzat Ayaz Anatolian High School - This project is licensed under GPLv3.`,
    opensource: "Open Source",
  },
}

export type TranslationKey = keyof (typeof translations)["tr"]
