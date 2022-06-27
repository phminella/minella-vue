import { createI18n } from 'vue-i18n';
//
// Multi Language plugin (English and Japanese translation)
//
const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'ja',
    messages: {
        en: {
            message: {
                // Index
                explanation: "You can change the color and switch to dark mode here!",
                // Menu
                menu: "menu",
                home: "home",
                about: "about",
                about2: "About",
                work: "work",
                education: "education",
                education2: "Education History",
                contact: "contact",
                // About Component
                password: "Type the password here to see the image",
                passwordError: "The password is incorrect.",
                showCard: "Show residence card",
                // Work Component
                workExperience: "Work Experience",
                // Education Component
                business: "Business School",
                it: "Bachelor in Information Systems",
                language: "Japanese Language Course (JLPT N2)",
                // Contact Form
                contactForm: "Contact Form",
                formName: "Name*",
                formCompany: "Company*",
                formEmail: "E-Mail*",
                formComments: "Any additional comments?*",
                requiredFields: "*Required fields",
                formSend: "Send",
                formThanks1: "Thanks for your message!",
                formThanks2: "I will reply as soon as I can.",
                // Contact Calendar
                march: "March",
                april: "April",
                sun: "Sun",
                mon: "Mon",
                tue: "Tue",
                wed: "Wed",
                thu: "Thu",
                fri: "Fri",
                sat: "Sat",
                available: "Available for Interview.",
                waiting: "Waiting for the schedule."
            }
        },
        ja: {
            message: {
                // Index
                explanation: "こちらで色の変更とダークモードの切り替えが可能！",
                // Menu
                menu: "メニュー",
                home: "ホーム",
                about: "私について",
                about2: "私について",
                work: "履歴書",
                education: "学歴",
                education2: "学歴",
                contact: "お問い合わせ",
                // About Component
                password: "こちらにパスワードを入力してください",
                passwordError: "パスワードが間違っている。",
                showCard: "在留カードを表示",
                // Work Component
                workExperience: "履歴書",
                // Education Component
                business: "ビジネススクール",
                it: "情報システム",
                language: "日本語学校 (JLPT N2)",
                // Contact Form
                contactForm: "問い合わせフォーム",
                formName: "名前*",
                formCompany: "会社*",
                formEmail: "電子メール*",
                formComments: "その他なコメント*",
                requiredFields: "*必要事項",
                formSend: "送信",
                formThanks1: "ご連絡ありがとうございます！",
                formThanks2: "出来るだけ早くお返事致します。",
                // Contact Calendar
                march: "3月",
                april: "4月",
                sun: "日",
                mon: "月",
                tue: "火",
                wed: "水",
                thu: "木",
                fri: "金",
                sat: "土",
                available: "面接可。",
                waiting: "予定待ち。"
            }
        },
    }
});

if (localStorage.getItem('language')) {
    // @ts-ignore
    i18n.global.locale = localStorage.getItem('language');
}

export default i18n;