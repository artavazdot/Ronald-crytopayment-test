import { OTHER_PAGES, CLIENT_PAGES } from "../routes/paths";

export const OtherMenuItems = [
  {
    title: "404",
    path: OTHER_PAGES.page404,
  },
  {
    title: "500",
    path: OTHER_PAGES.page500,
  },
];

export const ClientMenuItems = [
  {
    title: "Accueil",
    path: CLIENT_PAGES.home
  },
  {
    title: "Ma formation",
    path: CLIENT_PAGES.formation
  },
  {
    title: "Se connecter",
    path: CLIENT_PAGES.signIn
  },
  {
    title: "S' inscrire",
    path: CLIENT_PAGES.signUp
  },
];

export const HeaderConfig = {
  HEIGHT: 80,
  MAX_HEIGHT: 90,
};
