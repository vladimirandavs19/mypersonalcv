import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-education',
  standalone: true,
  template: `
    <section id="education" class="max-w-4xl mx-auto px-4 mt-8 mb-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Educación
      </h2>
      
      <p-card class="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <p-timeline
          [value]="educacion"
          layout="vertical"
          align="alternate"
          class="custom-timeline"
        >
          <ng-template pTemplate="content" let-ed>
            <div class="bg-white border border-green-100 shadow-md p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div class="mb-4">
                <h3 class="text-lg font-bold text-green-700 mb-2">
                  {{ ed.titulo }}
                </h3>
                <span class="text-xs text-green-600 bg-green-50 px-3 py-1 rounded-md font-medium">
                  {{ ed.periodo }}
                </span>
              </div>
              <p class="text-sm font-medium text-gray-600 mb-3">{{ ed.institucion }}</p>
              <p class="text-sm text-gray-700 leading-relaxed">
                {{ ed.descripcion }}
              </p>
            </div>
          </ng-template>
        </p-timeline>
      </p-card>
    </section>
  `,
  styles: [
    `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fadeIn {
        animation: fadeIn 0.6s ease-out;
      }
      .custom-timeline ::ng-deep .p-timeline-event-marker {
        background-color: #16a34a !important; /* verde-600 */
      }
    `,
  ],
  imports: [TimelineModule, CardModule],
  providers: [],
})
export class EducationComponent {
  educacion = [
    {
      titulo: 'Ingeniería en Tecnologías de la Información',
      institucion: 'Universidad Técnica Particular de Loja',
      periodo: '2022 – En curso',
      descripcion:
        'Formación en arquitectura de software, gestión de proyectos, bases de datos y tecnologías emergentes.',
    },
    {
      titulo: 'Analista de Sistemas',
      institucion: 'Instituto Tecnológico Superior Cordillera',
      periodo: 'Graduado 2019',
      descripcion:
        'Titulación técnica con enfoque práctico en desarrollo de software, programación orientada a objetos y administración de sistemas.',
    },
  ];
}
