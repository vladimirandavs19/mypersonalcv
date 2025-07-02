import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-experience',
  standalone: true,
  template: `
    <section id="experience" class="max-w-4xl mx-auto px-4 mt-8 mb-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Experiencia Laboral
      </h2>
      
      <p-card class="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <p-timeline
          [value]="experiencia"
          layout="vertical"
          align="alternate"
          class="custom-timeline"
        >
          <ng-template pTemplate="content" let-exp>
            <div class="bg-white border border-blue-100 shadow-md p-6 rounded-lg hover:shadow-lg transition-all duration-300">
              <div class="mb-4">
                <h3 class="text-lg font-bold text-blue-700 mb-2">
                  {{ exp.cargo }}
                </h3>
                <span class="text-xs text-blue-600 bg-blue-50 px-3 py-1 rounded-md font-medium">
                  {{ exp.periodo }}
                </span>
              </div>
              <p class="text-sm font-medium text-gray-600 mb-3">{{ exp.empresa }}</p>
              <p class="text-sm text-gray-700 leading-relaxed">
                {{ exp.descripcion }}
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
        background-color: #2563eb !important; /* azul-600 */
      }
    `,
  ],
  imports: [TimelineModule, CardModule],
  providers: [],
})
export class ExperienceComponent {
  experiencia = [
    {
      cargo: 'Analista de Proyectos',
      empresa: 'Maresa',
      periodo: 'Julio 2024 – Actualidad',
      descripcion: `Responsable de liderar proyectos de modernización tecnológica en el área de Arquitectura Empresarial, enfocándome en la migración de aplicaciones a .NET 8 y Angular, optimización de procesos y alineación con estrategias de negocio.`,
    },
    {
      cargo: 'Analista de Sistemas',
      empresa: 'Automotores Continental S.A.S.',
      periodo: 'Noviembre 2013 - Julio 2024',
      descripcion:
        'Brindé soporte a sistemas internos y desarrollé soluciones personalizadas según requerimientos de distintos departamentos. Aseguré el cumplimiento de estándares de calidad y alineación con políticas corporativas.',
    },
    {
      cargo: 'Asistente de Sistemas',
      empresa: 'ADESA',
      periodo: 'Enero 2013 - Noviembre 2013',
      descripcion:
        'Desarrollé soluciones a medida para distintos departamentos, enfocadas en mejorar procesos internos. Utilicé C#, .NET y SQL Server para aplicaciones robustas.',
    },
    {
      cargo: 'Asistente de Sistemas',
      empresa: 'ATDI',
      periodo: 'Diciembre 2009 - Enero 2013',
      descripcion: `Desarrollé software con C#, .NET y SQL Server, y realicé mantenimiento preventivo y correctivo de equipos de TI.`,
    },
  ];
}
