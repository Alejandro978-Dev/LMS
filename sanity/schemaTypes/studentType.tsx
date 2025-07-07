import Image from "next/image";
import { defineType, defineField } from "sanity";

// Define el tipo de documento 'student'
export const studentType = defineType({
    name: "student",
    title: "Estudiante",
    type: "document",
    fields: [
        // Campo para el nombre
        defineField({
            title: "Nombre",
            name: "firstName",
            type: "string",
        }),
        // Campo para el apellido
        defineField({
            title: "Apellido",
            name: "lastName",
            type: "string",
        }),
        // Campo para el correo electrónico - obligatorio
        defineField({
            title: "Correo Electrónico",
            name: "email",
            type: "string",
            validation: (Rule) => Rule.required().error("El correo es obligatorio"),
        }),
        // ID obligatorio de usuario proporcionado por clerk
        defineField({
            title: "ID de Clerk",
            name: "clerkId",
            type: "string",
            validation: (Rule) => Rule.required().error("El ID de clerk es obligatorio"),
        }),
        // Campo para la foto del perfil
        defineField({
            title: "Foto de Perfil",
            name: "imageUrl",
            type: "url",
        }),
    ],
    // Configuración de la vista previa para mostrar wl documento de studio
    preview: {
        select: {
            firstName: "firstName",
            lastName: "lastName",
            imageUrl: "imageUrl",
        },
        // La funcion permite personalizar como se muestra el documento
        prepare({ firstName, lastName, imageUrl }) {
            // Funcionpara capitalizar la primera y las demas en minúscula
            const capitalize = (word) => {
                if (!word) return "";
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

            };
            return {
                title: `${capitalize(firstName)} ${capitalize(lastName)}`,

                // Se renderiza la imagen de perfil
                media: () => (
                    <Image
                        src={imageUrl}
                        alt={`${firstName} ${lastName}`}
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                    />

                )
            }
        }
    },


});