import { defineType} from "sanity";

    export const blockContent = defineType({
    name: "blockContent",
    title: "Contenido de Bloque",
    type: "array",
    of: [{ type: "block" }],
    });