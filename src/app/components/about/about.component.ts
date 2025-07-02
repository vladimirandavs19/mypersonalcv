import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-about',
  standalone: true,
  template: ` 
  <section id="about" class="max-w-4xl mx-auto px-4 mb-8 mt-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Sobre mí
      </h2>
      
      <p-card class="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Foto de perfil -->
          <div class="flex-shrink-0">
            <img src="assets/me.png"
                 alt="Foto de Vladimir"
                 class="w-50 h-80 rounded-lg shadow-md object-cover border-2 border-gray-200">
          </div>

          <!-- Info personal -->
          <div class="space-y-4 flex-1">
            <div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">
                Vladimir Miranda
              </h3>
              <div class="w-16 h-1 bg-blue-600 rounded mb-4"></div>
            </div>
            
            <div class="space-y-3">
              <p class="text-gray-700 text-sm leading-relaxed">
                ¡Hola! Soy desarrollador full stack con más de <span class="font-semibold text-blue-600">10 años de experiencia</span> en el diseño e implementación de soluciones empresariales.
                A lo largo de mi carrera he trabajado con tecnologías como <span class="font-semibold text-gray-800">.NET (C# y VB)</span>, tanto en aplicaciones de escritorio como en plataformas web.
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                Actualmente me especializo en el desarrollo de <span class="font-semibold text-green-600">APIs con .NET 8</span>, interfaces modernas en <span class="font-semibold text-red-600">Angular</span>, y procesos automatizados mediante <span class="font-semibold text-blue-600">Azure DevOps</span>.
                Me apasiona la arquitectura limpia, la integración continua, y la mejora constante.
              </p>
              <p class="text-gray-700 text-sm leading-relaxed">
                Sigo explorando nuevas tecnologías como <span class="font-semibold text-purple-600">MAUI</span> y <span class="font-semibold text-indigo-600">microservicios</span> para llevar cada proyecto al siguiente nivel.
              </p>
            </div>

            <!-- Tecnologías clave -->
            <div class="mt-6">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Tecnologías principales:</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium">.NET</span>
                <span class="px-3 py-1 text-xs bg-red-100 text-red-800 rounded-full font-medium">Angular</span>
                <span class="px-3 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full font-medium">SQL Server</span>
                <span class="px-3 py-1 text-xs bg-indigo-100 text-indigo-800 rounded-full font-medium">DevOps</span>
              </div>
            </div>

            <!-- Botón descargar CV -->
            <div class="mt-6">
              <a href="assets/CV-VladimirMiranda.pdf" target="_blank"
                 class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                <i class="pi pi-download mr-2"></i> 
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
        </div>
      </p-card>
    </section>
    `,
    styles: [`
    /* Estilos minimalistas */
    .transition-shadow {
      transition: box-shadow 0.3s ease;
    }
  `],
  imports: [CardModule],
  providers:[]
})
export class AboutComponent {

}
