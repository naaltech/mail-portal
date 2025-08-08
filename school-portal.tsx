"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Globe, Users, Languages } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const translations = {
  tr: {
    schoolName: "Nevzat Ayaz Anadolu Lisesi",
    subtitle: "Aktif Öğrenci E-Posta Sistemi",
    emailRequest: {
      title: "E-posta Talebi",
      description: "Yeni öğrenci e-posta hesabı için başvuru yapın",
      button: "E-posta Talebi Oluştur"
    },
    website: {
      title: "Resmi Website",
      description: "Okulumuzun resmi web sitesini ziyaret edin",
      button: "Okul Resmi Websitesi"
    },
    network: {
      title: "Etkileşim Ağı",
      description: "Okul topluluğu ile bağlantı kurun",
      button: "Nevzat Ayaz Etkileşim Ağına Git"
    },
    footer: `© ${new Date().getFullYear()} Nevzat Ayaz Anadolu Lisesi - Tüm hakları saklıdır`
  },
  en: {
    schoolName: "Nevzat Ayaz Anatolian High School",
    subtitle: "Active Student Email System",
    emailRequest: {
      title: "Email Request",
      description: "Apply for a new student email account",
      button: "Create Email Request"
    },
    website: {
      title: "Official Website",
      description: "Visit our school's official website",
      button: "School Official Website"
    },
    network: {
      title: "Interaction Network",
      description: "Connect with the school community",
      button: "Go to Nevzat Ayaz Network"
    },
    footer: `© ${new Date().getFullYear()} Nevzat Ayaz Anatolian High School - All rights reserved`
  }
}

export default function Component() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr')
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Language Toggle */}
        <div className="flex justify-end pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
            className="flex items-center gap-2"
          >
            <Languages className="w-4 h-4" />
            {language === 'tr' ? 'EN' : 'TR'}
          </Button>
        </div>

        {/* Header Section */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {t.schoolName}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: '#00a5d4' }}>
            {t.subtitle}
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* E-posta Talebi Card */}
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300 flex flex-col h-full">
            <CardHeader className="text-center pb-4 flex-1">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#00a5d4' }}>
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                {t.emailRequest.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {t.emailRequest.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 mt-auto">
              <Button asChild className="w-full text-white font-medium py-3 h-12" style={{ backgroundColor: '#00a5d4' }}>
                <Link href="https://naal.org.tr/student-email">
                  {t.emailRequest.button}
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Okul Websitesi Card */}
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300 flex flex-col h-full">
            <CardHeader className="text-center pb-4 flex-1">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Globe className="w-8 h-8 text-gray-600" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                {t.website.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {t.website.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 mt-auto">
              <Button asChild className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 h-12">
                <Link href="https://nevzatayazal.meb.k12.tr/" target="_blank" rel="noopener noreferrer">
                  {t.website.button}
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Etkileşim Ağı Card */}
          <Card className="bg-white hover:shadow-lg transition-shadow duration-300 border border-gray-200 hover:border-gray-300 flex flex-col h-full">
            <CardHeader className="text-center pb-4 flex-1">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#00a5d4' }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-semibold text-gray-900">
                {t.network.title}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {t.network.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 mt-auto">
              <Button asChild className="w-full text-white font-medium py-3 h-12" style={{ backgroundColor: '#00a5d4' }}>
                <Link href="https://naal.org.tr" >
                  {t.network.button}
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-600 text-sm mt-12 pb-8">
          <p>{t.footer}</p>
        </div>

      </div>
    </div>
  )
}
