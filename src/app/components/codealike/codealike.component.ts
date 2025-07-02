import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-codealike',
  standalone: true,
  template: `
    <section id="codealike" class="max-w-4xl mx-auto px-4 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Estadísticas de Codificación
      </h2>
      
      <p-card class="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <!-- Alternativa mientras se resuelve el iframe -->
        <div class="text-center">
          <div class="bg-gradient-to-r from-slate-50 to-gray-100 rounded-lg p-8 mb-6">
            <div class="flex justify-center mb-4">
              <img src="assets/codealike-logo.png" alt="CodeAlike" class="h-12 opacity-70" onerror="this.style.display='none'">
            </div>
            <h3 class="text-xl font-semibold text-gray-700 mb-3">Estadísticas de Desarrollo</h3>
            <p class="text-gray-600 mb-4">
              Monitoreo y análisis de mi actividad de codificación diaria
            </p>
            
            <!-- Stats simuladas mientras se resuelve el iframe -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div class="bg-white rounded-lg p-4 shadow-sm">
                <div class="text-2xl font-bold text-blue-600">8.5h</div>
                <div class="text-sm text-gray-500">Promedio diario</div>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-sm">
                <div class="text-2xl font-bold text-green-600">95%</div>
                <div class="text-sm text-gray-500">Tiempo codificando</div>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-sm">
                <div class="text-2xl font-bold text-purple-600">C#</div>
                <div class="text-sm text-gray-500">Lenguaje principal</div>
              </div>
              <div class="bg-white rounded-lg p-4 shadow-sm">
                <div class="text-2xl font-bold text-orange-600">VS</div>
                <div class="text-sm text-gray-500">IDE favorito</div>
              </div>
            </div>
            
            <!-- Iframe oculto por el error CSP -->
            
              <iframe 
                src='https://codealike.com/Profile/FactsWidget/weak-8333275096' 
                frameborder='0' 
                scrolling='no' 
                marginheight='0' 
                marginwidth='0' 
                width='600px' 
                height='370px'
                title="CodeAlike Statistics">
              </iframe>
            
          </div>
        </div>
        
        <!-- Información adicional -->
        <div class="text-center">
          <p class="text-sm text-gray-600 mb-4">
            Para ver las estadísticas completas y en tiempo real, visita mi perfil público
          </p>
          <div class="flex justify-center gap-3">
            <a 
              href="https://codealike.com/Profile/weak-8333275096" 
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <i class="pi pi-external-link mr-2"></i>
              <span>Ver perfil completo</span>
            </a>
            <a 
              href="https://codealike.com/Profile/FactsWidget/weak-8333275096" 
              target="_blank"
              class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <i class="pi pi-chart-bar mr-2"></i>
              <span>Ver estadísticas</span>
            </a>
          </div>
        </div>
      </p-card>
    </section>
  `,
  styles: [`
    /* Estilos para el iframe */
    iframe {
      border: none;
      background: transparent;
    }
    
    .transition-shadow {
      transition: box-shadow 0.3s ease;
    }
  `],
  imports: [CardModule],
  providers: []
})
export class CodealikeComponent {

}
