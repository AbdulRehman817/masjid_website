import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        home: 'Home',
                        prayers: 'Prayer Times',
                        announcements: 'New',
                        about: 'About Us',
                        contact: 'Contact'
                    },
                    hero: {
                        welcome: 'Welcome to Our Masjid',
                        subtitle: 'A place of peace, prayer, and community.'
                    }
                }
            },
            ar: {
                translation: {
                    nav: {
                        home: 'الرئيسية',
                        prayers: 'أوقات الصلاة',
                        announcements: 'الإعلانات',
                        about: 'من نحن',
                        contact: 'اتصل بنا'
                    },
                    hero: {
                        welcome: 'مرحباً بكم في مسجد النور',
                        subtitle: 'ملاذ للسلام والصلاة والتواصل المجتمعي.'
                    }
                }
            }
        }
    });

export default i18n;
