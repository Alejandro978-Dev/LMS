import { defineField, defineType } from "sanity";

export const moduleType = defineType({
  name: "module",
  title: "Moduló",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo de Modulo",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lessons",
      title: "Sesiones",
      type: "array",
      of: [{ type: "reference", to: { type: "lesson" } }],
    }),
  ],
});