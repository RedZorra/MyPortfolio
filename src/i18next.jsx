import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



i18next
.use(initReactI18next)
.use(LanguageDetector)
.init({
    debug: true,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                slogan: "Web Design with an Aura of Sophistication ",
                projects: "Projects",
                about: "About me",
                contact: "Contact",
                webDesign: "Web Design",
                with: "with",
                an: "an",
                aura: "Aura",
                of: "of",
                sophistication: "Sophistication",
                mySkills: "My Skills",
                aboutMe: "About Me",
                aboutGreeting: "Hello, I'm Sophie",
                aboutIntro: "I'm a passionate Web Developer based in Merseburg, Germany, with a strong foundation in both frontend and backend technologies. I channel my enthusiasm and expertise into crafting digital products and experiences that make a difference.",
                aboutSpecialization: "My focus lies in creating modern, responsive websites that are not only functional but also visually captivating. I'm constantly expanding my skills, with a particular emphasis on deepening my knowledge of JavaScript frameworks like React to develop user-centric interfaces.",
                aboutExpertise: "With a commitment to continuous learning, I strive to stay at the forefront of web development trends and best practices. My goal is to specialize in creating intuitive and engaging user experiences that seamlessly blend form and function.",
                aboutInterests: "Beyond coding, I'm drawn to minimal and brutalist design aesthetics. My love for music, nature, and spiritual life infuses creativity into my work and approach to problem-solving.",
                aboutImageAlt: "Sophie - Fullstack Web Developer",
                backToHome: "Back to Home",
                projects: "Projects",
                recipeAppTitle: "Recipe App",
                RecipeAppAlt: "Screenshot of Recipe App",
                WebDevelopmentCategory: "Web Development",
                recipeAppDescription: "Discover culinary delights with our Recipe App. This user-friendly web application allows you to explore, save, and share your favorite recipes. With an intuitive interface and a vast database of dishes, cooking has never been easier or more enjoyable.",
                aviationGinTitle: "Aviation Gin",
                aviationGinAlt: "Screenshot of Aviation Gin",
                ReactTailwindCSSCategory: "React/Tailwind CSS",
                aviationGinDescription: "Experience the smooth taste of Aviation Gin, now with a superhero twist. Our latest project showcases the Ryan Reynolds-owned brand, featuring a limited edition Deadpool and Wolverine series to celebrate the upcoming film release. This sleek design captures the essence of both the premium gin and the beloved Marvel characters.",
                scansageTitle: "Scansage",
                scansageAlt: "Screenshot of Scansage",
                FullstackCategory: "Fullstack",
                scansageDescription: "Scansage revolutionizes inventory management. As the frontend developer for this final project, I created an efficient and user-friendly interface that streamlines the entire warehouse process. From receiving to shipping, Scansage offers a seamless experience, enhancing productivity and accuracy in inventory control.",
                wordpressSiteTitle: "WordPress Site",
                wordpressSiteAlt: "Eve Champagne WordPress site screenshot",
                wordpressDescription: "Elevate your online presence with our custom WordPress solution for Eve Champagne. This e-commerce site, powered by WooCommerce, offers a seamless shopping experience for champagne enthusiasts. The integrated ticket system ensures top-notch customer support, making every interaction as bubbly as the product itself.",
                portfolioTitle: "IT Consulting Portfolio",
                portfolioAlt: "Screenshot of IT Consulting Portfolio",
                UXUIDesignCategory: "UX/UI Design",
                portfolioDescription: "Currently in progress, this portfolio showcases the expertise of Linteco IT Consulting. The design emphasizes professionalism and technical prowess, highlighting key projects and services. This sleek, responsive website will serve as a powerful tool for attracting clients and demonstrating Linteco's capabilities in the IT consulting sphere.",
                contactAndMore: "Contact & More",
                letsConnect: "Let's Connect",
                alwaysInterestedIn: "Passionate about exploring new ideas and opportunities. Contact me!",
                uxuiDesign: "UX/UI Design",
                frontendDevelopment: "Frontend Development",
                webflowDevelopment: "Webflow Development",
                newBusiness: "New Business ",
                yourName: "Your Name",
                yourEmail: "Your Email",
                yourMessage: "Your Message",
                sendMessage: "Send Message",



                projectQuestion: "Are you Minding a Project?",
                contactInvitation: "Feel free to reach out. I'm always open to discussing new projects and ideas.",
                allRightsReserved: "All rights reserved."
            }
        },
        de: {
            translation: {
                slogan: "Webdesign mit einer Aura von Raffinesse",
                projects: "Projekten",
                about: "Über mich",
                contact: "Kontakt",
                webDesign: "Webdesign",
                with: "mit",
                an: "einer",
                aura: "Aura",
                of: "von",
                sophistication: "Raffinesse",
                mySkills: "Meine Fähigkeiten",
                aboutMe: "Über mich",
                aboutGreeting: "Hallo, ich bin Sophie", 
                aboutIntro: "Ich bin eine leidenschaftliche Webentwicklerin mit Sitz in Merseburg, Deutschland, und einem soliden Fundament in Frontend- und Backend-Technologien. Ich kanalisiere meine Begeisterung und Expertise in die Gestaltung digitaler Produkte und Erlebnisse, die einen Unterschied machen.",
                aboutSpecialization: "Mein Schwerpunkt liegt auf der Erstellung moderner, responsiver Websites, die nicht nur funktional, sondern auch visuell ansprechend sind. Ich erweitere ständig meine Fähigkeiten, wobei ich besonderen Wert darauf lege, mein Wissen über JavaScript-Frameworks wie React zu vertiefen, um benutzerzentrierte Schnittstellen zu entwickeln.",
                aboutExpertise: "Mit dem Engagement für kontinuierliches Lernen strebe ich danach, an vorderster Front der Webentwicklungstrends und -best practices zu bleiben. Mein Ziel ist es, sich auf die Erstellung intuitiver und ansprechender Benutzererlebnisse zu spezialisieren, die Form und Funktion nahtlos miteinander verbinden.",
                aboutInterests: "Über das Coden hinaus ziehen mich minimalistische und brutalistische Designästhetiken an. Meine Liebe zur Musik, zur Natur und zum spirituellen Leben bringt Kreativität in meine Arbeit und meinen Ansatz zur Problemlösung.",
                aboutImageAlt: "Sophie - Fullstack Webentwicklerin",
                backToHome: "Zurück zur Startseite",
                projects: "Projekte",
                recipeAppTitle: "Rezept-App",
                recipeAppAlt: "Screenshot der Rezept-App",
                WebDevelopmentCategory: "Webentwicklung",
                recipeAppDescription: "Entdecken Sie kulinarische Köstlichkeiten mit unserer Rezept-App. Diese benutzerfreundliche Webanwendung ermöglicht es Ihnen, Ihre Lieblingsrezepte zu erkunden, zu speichern und zu teilen. Mit einer intuitiven Benutzeroberfläche und einer umfangreichen Datenbank an Gerichten war Kochen noch nie einfacher oder unterhaltsamer.",
                aviationGinTitle: "Aviation Gin",
                aviationGinAlt: "Screenshot von Aviation Gin",
                ReactTailwindCSSCategory: "React/Tailwind CSS",
                aviationGinDescription: "Erleben Sie den sanften Geschmack von Aviation Gin, jetzt mit einem Superhelden-Twist. Unser neuestes Projekt präsentiert die von Ryan Reynolds besessene Marke und zeigt eine Deadpool- und Wolverine-Serie zur Feier des bevorstehenden Filmstarts. Dieses elegante Design fängt die Essenz sowohl des Premium-Gins als auch der beliebten Marvel-Charaktere ein.",
                scansageTitle: "Scansage",
                scansageAlt: "Screenshot von Scansage",
                FullstackCategory: "Fullstack",
                scansageDescription: "Scansage revolutioniert das Bestandsmanagement. Als Frontend-Entwicklerin für dieses Abschlussprojekt habe ich eine effiziente und benutzerfreundliche Schnittstelle erstellt, die den gesamten Lagerprozess optimiert. Von der Annahme bis zum Versand bietet Scansage ein nahtloses Erlebnis, das die Produktivität und Genauigkeit in der Bestandskontrolle verbessert.",
                wordpressSiteTitle: "WordPress-Seite",
                wordpressSiteAlt: "Screenshot der Eve Champagne WordPress-Seite",
                wordpressDescription: "Steigern Sie Ihre Online-Präsenz mit unserer maßgeschneiderten WordPress-Lösung für Eve Champagne. Diese E-Commerce-Website, betrieben von WooCommerce, bietet ein nahtloses Einkaufserlebnis für Champagner-Enthusiasten. Das integrierte Ticketsystem garantiert erstklassigen Kundensupport und macht jede Interaktion so sprudelnd wie das Produkt selbst.",
                portfolioTitle: "IT-Beratungsportfolio",
                portfolioAlt: "Screenshot des IT-Beratungsportfolios",
                UXUIDesignCategory: "UX/UI-Design",
                portfolioDescription: "Derzeit in Arbeit, zeigt dieses Portfolio die Expertise von Linteco IT Consulting. Das Design betont Professionalität und technische Kompetenz und hebt Schlüsselprojekte und -dienstleistungen hervor. Diese elegante, responsive Website wird ein leistungsstarkes Tool sein, um Kunden anzuziehen und Lintecos Fähigkeiten im IT-Beratungsbereich zu demonstrieren.",
                contactAndMore: "Kontakt & Mehr",
                letsConnect: "Lassen Sie uns in Verbindung bleiben",
                alwaysInterestedIn: "Leidenschaftlich daran interessiert, neue Ideen und Möglichkeiten zu erkunden. Kontaktieren Sie mich!",
                uxuiDesign: "UX/UI-Design",
                frontendDevelopment: "Frontend-Entwicklung",
                webflowDevelopment: "Webflow-Entwicklung",
                newBusiness: "Neue Geschäftsideen",
                yourName: "Ihr Name",
                yourEmail: "Ihre E-Mail",
                yourMessage: "Ihre Nachricht",
                sendMessage: "Nachricht senden",

                projectQuestion: "Haben Sie ein Projekt im Sinn?",
                contactInvitation: "Zögern Sie nicht, mich zu kontaktieren. Ich bin immer offen für  neue Projekte und Ideen.",
                allRightsReserved: "Alle Rechte vorbehalten."
            }
        }
    }
})

export default i18next;