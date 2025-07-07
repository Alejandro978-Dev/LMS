import { defineField, defineType } from "sanity";

export const lessonType = defineType({
  name: "lesson",
  title: "Lección",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripción",
      type: "text",
    }),
    defineField({
      name: "videoUrl",
      title: "Video URL",
      type: "url",
      description: "The URL for the video player (e.g. YouTube, Vimeo)",
    }),
    defineField({
      name: "loomUrl",
      title: "URL de la Lección",
      type: "url",
      description:
        "URL completo de la lección (e.g., https://www.loom.com/share/...)",
      validation: (rule) =>
        rule.custom((value) => {
          if (!value) return true; // Allow empty value
          try {
            const url = new URL(value);
            if (!url.hostname.endsWith("loom.com")) {
              return "La URL debe ser de loom.com";
            }
            if (!url.pathname.startsWith("/share/")) {
              return "Debe ser una URL para compartir de Loom";
            }
            const videoId = url.pathname.split("/share/")[1];
            if (!/^[a-f0-9-]{32,36}/.test(videoId)) {
              return "ID de video de Loom no válido en la URL";
            }
            return true;
          } catch {
            return "Por favor, introduzca una URL válida";
          }
        }),
    }),
    defineField({
      name: "content",
      title: "Contenido",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});