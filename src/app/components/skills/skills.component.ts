import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
  <section id="skills" class="max-w-4xl mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Habilidades
      </h2>
      
      <p-card class="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <!-- Lenguajes y Frameworks -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Lenguajes y Frameworks</h3>
          <div class="space-y-4">
            @for (skill of lenguajesFrameworks; track skill.nombre) {
              <div>
                <div class="flex justify-between text-sm text-gray-600 mb-2">
                  <span class="font-medium">{{ skill.nombre }}</span>
                  <span class="text-gray-500">{{ skill.porcentaje }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                  <div class="h-3 rounded-full transition-all duration-500 ease-out shadow-sm" 
                       [class]="skill.color" 
                       [style.width.%]="skill.porcentaje"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Bases de datos -->
        <div class="mb-8">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">Bases de Datos</h3>
          <div class="space-y-4">
            @for (skill of basesDatos; track skill.nombre) {
              <div>
                <div class="flex justify-between text-sm text-gray-600 mb-2">
                  <span class="font-medium">{{ skill.nombre }}</span>
                  <span class="text-gray-500">{{ skill.porcentaje }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                  <div class="h-3 rounded-full transition-all duration-500 ease-out shadow-sm" 
                       [class]="skill.color" 
                       [style.width.%]="skill.porcentaje"></div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- DevOps -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-700 mb-4">DevOps & Herramientas</h3>
          <div class="space-y-4">
            @for (skill of devopsHerramientas; track skill.nombre) {
              <div>
                <div class="flex justify-between text-sm text-gray-600 mb-2">
                  <span class="font-medium">{{ skill.nombre }}</span>
                  <span class="text-gray-500">{{ skill.porcentaje }}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                  <div class="h-3 rounded-full transition-all duration-500 ease-out shadow-sm" 
                       [class]="skill.color" 
                       [style.width.%]="skill.porcentaje"></div>
                </div>
              </div>
            }
          </div>
        </div>
      </p-card>
    </section>
  `,
  imports: [CardModule],
  providers: [],
})
export class SkillsComponent {
  lenguajesFrameworks = [
    { nombre: 'C#', porcentaje: 90, color: 'bg-blue-600' },
    { nombre: 'VB.NET', porcentaje: 80, color: 'bg-slate-600' },
    { nombre: 'Angular', porcentaje: 85, color: 'bg-red-600' },
    { nombre: 'TypeScript', porcentaje: 80, color: 'bg-indigo-600' },
    { nombre: 'MAUI', porcentaje: 60, color: 'bg-violet-600' },
    { nombre: 'JavaScript', porcentaje: 85, color: 'bg-amber-600' }
  ];

  basesDatos = [
    { nombre: 'SQL Server', porcentaje: 85, color: 'bg-orange-600' },
    { nombre: 'MySQL', porcentaje: 60, color: 'bg-teal-600' },
    { nombre: 'MongoDB', porcentaje: 50, color: 'bg-green-600' },
    { nombre: 'PostgreSQL', porcentaje: 55, color: 'bg-blue-700' }
  ];

  devopsHerramientas = [
    { nombre: 'Azure DevOps', porcentaje: 90, color: 'bg-sky-600' },
    { nombre: 'Git / GitHub', porcentaje: 85, color: 'bg-gray-700' },
    { nombre: 'CI/CD', porcentaje: 80, color: 'bg-emerald-600' },
    { nombre: 'Docker', porcentaje: 65, color: 'bg-cyan-600' },
    { nombre: 'Visual Studio', porcentaje: 95, color: 'bg-purple-600' }
  ];
}
