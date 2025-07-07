import { StructureBuilder } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
  S.list()
    .title("Panel de Administración")
    .items([
      // Course Content
      S.listItem()
        .title("Contenido del Curso")
        .child(
          S.documentTypeList("course")
            .title("Cursos")
            .child((courseId) =>
              S.list()
                .title(" Opciones del Curso")
                .items([
                  // Option to edit course content
                  S.listItem()
                    .title("Editar Contenido del Curso")
                    .child(
                      S.document().schemaType("course").documentId(courseId)
                    ),
                  // Option to view course enrollments
                  S.listItem()
                    .title("Ver Estudiantes Inscritos")
                    .child(
                      S.documentList()
                        .title("Inscripciones del Curso")
                        .filter(
                          '_type == "enrollment" && course._ref == $courseId'
                        )
                        .params({ courseId })
                    ),
                ])
            )
        ),

      S.divider(),

      // Users
      S.listItem()
        .title("Administración de Usuarios")
        .child(
          S.list()
            .title("Selección de Tipos de Usuario")
            .items([
              // Instructors with options
              S.listItem()
                .title("Instructores")
                .schemaType("instructor")
                .child(
                  S.documentTypeList("instructor")
                    .title("Instructores")
                    .child((instructorId) =>
                      S.list()
                        .title("Opciones")
                        .items([
                          // Option to edit instructor details
                          S.listItem()
                            .title("Editar Detalles del Instructor")
                            .child(
                              S.document()
                                .schemaType("instructor")
                                .documentId(instructorId)
                            ),
                          // Option to view instructor's courses
                          S.listItem()
                            .title("Ver Cursos")
                            .child(
                              S.documentList()
                                .title("Cursos del Instructor")
                                .filter(
                                  '_type == "course" && instructor._ref == $instructorId'
                                )
                                .params({ instructorId })
                            ),
                        ])
                    )
                ),
              // Students with options
              S.listItem()
                .title("Estudiantes")
                .schemaType("student")
                .child(
                  S.documentTypeList("student")
                    .title("Estudiantes")
                    .child((studentId) =>
                      S.list()
                        .title("Opciones")
                        .items([
                          // Option to edit student details
                          S.listItem()
                            .title("Editar Detalles del Estudiante")
                            .child(
                              S.document()
                                .schemaType("student")
                                .documentId(studentId)
                            ),
                          // Option to view enrollments
                          S.listItem()
                            .title("Ver Inscripciones")
                            .child(
                              S.documentList()
                                .title("Inscripciones del Estudiante")
                                .filter(
                                  '_type == "enrollment" && student._ref == $studentId'
                                )
                                .params({ studentId })
                            ),
                          // Option to view completed lessons
                          S.listItem()
                            .title("Lecciones Completadas")
                            .child(
                              S.documentList()
                                .title("Lecciones Completadas del Estudiante")
                                .schemaType("lessonCompletion")
                                .filter(
                                  '_type == "lessonCompletion" && student._ref == $studentId'
                                )
                                .params({ studentId })
                                .defaultOrdering([
                                  { field: "completedAt", direction: "desc" },
                                ])
                            ),
                        ])
                    )
                ),
            ])
        ),

      S.divider(),

      // System Management
      S.listItem()
        .title("Administración del Sistema")
        .child(
          S.list()
            .title("Administración del Sistema")
            .items([S.documentTypeListItem("category").title("Categorias")])
        ),
    ]);