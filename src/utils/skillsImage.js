import css from "../assets/svg/skills/css.svg";
import express from "../assets/svg/skills/express.svg";

import git from "../assets/svg/skills/git.svg";

import html from "../assets/svg/skills/html.svg";

import javascript from "../assets/svg/skills/javascript.svg";

import nextJS from "../assets/svg/skills/nextJS.svg";
import nodeJS from "../assets/svg/skills/nodeJS.svg";

import photoshop from "../assets/svg/skills/photoshop.svg";

import postgresql from "../assets/svg/skills/postgresql.svg";

import react from "../assets/svg/skills/react.svg";
import redux from "../assets/svg/skills/redux.svg";
import sequelize from "../assets/svg/skills/sequelize.svg";

import tailwind from "../assets/svg/skills/tailwind.svg";

import typescript from "../assets/svg/skills/typescript.svg";
import vitejs from "../assets/svg/skills/vitejs.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "photoshop":
      return photoshop;

    case "css":
      return css;
    case "express js":
      return express;

    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "node js":
      return nodeJS;

    case "react":
      return react;
    case "redux":
      return redux;
    case "sequelize":
      return sequelize;

    case "typescript":
      return typescript;

    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;

    case "git":
      return git;

    default:
      break;
  }
};
