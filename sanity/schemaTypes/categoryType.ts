import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Categoría",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
    }),
    defineField({
      name: "icon",
      title: "Icono",
      type: "string",
      description: "Icon identifier (e.g., for using with icon libraries)",
    }),
    defineField({
      name: "color",
      title: "Color",
      type: "string",
      description: "Color code for the category (e.g., #FF0000)",
    }),
  ],
});