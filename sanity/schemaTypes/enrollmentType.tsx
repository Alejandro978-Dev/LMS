import Image from "next/image";
import { defineField, defineType } from "sanity";

export const enrollmentType = defineType({
  name: "enrollment",
  title: "Inscripción",
  type: "document",
  fields: [
    defineField({
      name: "student",
      title: "Estudiante",
      type: "reference",
      to: [{ type: "student" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "course",
      title: "Curso",
      type: "reference",
      to: [{ type: "course" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "amount",
      title: "Cantidad",
      type: "number",
      validation: (rule) => rule.required().min(0),
      description: "The amount paid for the course enrollment in cents",
    }),
    defineField({
      name: "paymentId",
      title: "Código de Pago",
      type: "string",
      validation: (rule) => rule.required(),
      description: "El ID de la sesión de pago de Stripe",
    }),
    defineField({
      name: "enrolledAt",
      title: "Registrado en",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      courseTitle: "course.title",
      studentFirstName: "student.firstName",
      studentLastName: "student.lastName",
      studentImage: "student.imageUrl",
    },
    prepare({ courseTitle, studentFirstName, studentLastName, studentImage }) {
      return {
        title: `${studentFirstName} ${studentLastName}`,
        subtitle: courseTitle,
        media: (
          <Image
            src={studentImage}
            alt={`${studentFirstName} ${studentLastName}`}
            width={100}
            height={100}
          />
        ),
      };
    },
  },
});