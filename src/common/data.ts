import { AdvantagesModel } from "../models/AdvantageModel";
import { FaqQuestionModel } from "../models/FaqQuestionModel";

export const advantages:Array<AdvantagesModel> = [
    {
        title: "Une Formation Complète",
        image: "formation",
        subAdvantages: [
            "Smart money",
            "Price action avancé",
            "Accès à vie aux futures mise à jour",
        ]
    },
    {
        title: "Une Communauté Privée",
        image: "communaute",
        subAdvantages: [
            "Accès à vie au groupe privé discord",
            "Webinaire membre",
            "Mes analyses",
        ]
    },
    {
        title: "Un Coaching Privé",
        image: "coaching",
        subAdvantages: [
            "Suivi personnalisé",
            "Suivi à vie",
            "Accès direct au Mentor",
        ]
    },
];

export const faq:Array<FaqQuestionModel> = [
    {
        question: "Comment va se dérouler la formation ?",
        answer: "La formation et le coaching se feront 100% en ligne. Quelle que soit votre situation géographique dans le monde, il vous suffit d’avoir un ordinateur et une bonne connexion internet et vous êtes tout bon."
    },
    {
        question: "A qui s'adresse cette formation ?",
        answer: "Si tu es passionné de trading, tu as les bases et tu veux passer à un niveau supérieur, alors cette formation est faite pour toi."
    },
    {
        question: "La formation est-elle pour les débutants sans connaissances en trading ?",
        answer: "Non, avant de suivre cette formation vous devez déjà avoir les connaissances de base en trading."
    },
    {
        question: "Pendant combien de temps ai-je accès à la formation ?",
        answer: "La formation est une plateforme avec des vidéos enregistrées et mise à jour régulièrement en fonction des évolutions du marché. Vous avez accès à ce contenu à vie; 7 jours sur 7 et 24h sur 24."
    },
    {
        question: "Quelle est la durée de la formation ?",
        answer: "Cela  dépend de vous; de votre disponibilité  et de votre détermination. Les vidéos étant déjà enregistrées sur la plateforme vous avez la possibilité d'aller à votre rythme."
    },
    {
        question: "Pourrais-je appliquer cette stratégie sur les indices synthétiques ?",
        answer: "Oui bien sûr. Il y a même une section de discussion spéciale indices synthétiques dans le groupe privé discord."
    },
];
