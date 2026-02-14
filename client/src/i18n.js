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
            ur: {
                translation: {
                    nav: {
                        home: 'گھر',
                        prayers: 'نماز کے اوقات',
                        announcements: 'خبریں',
                        about: 'ہمارے بارے میں',
                        contact: 'رابطہ'
                    },
                    hero: {
                        welcome: 'ہماری مسجد میں خوش آمدید',
                        subtitle: 'امن، دعا اور برادری کی جگہ۔'
                    }
                }
            }
        }
    });

export default i18n;
