import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="max-w-4xl mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Información de Contacto
      </h2>

      <p-card class="bg-white shadow-lg border border-gray-200">
        <div class="space-y-4">
          <div class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div class="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
              <i class="pi pi-map-marker"></i>
            </div>
            <span class="text-gray-800 font-medium">Quito, Ecuador</span>
          </div>

          <div class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
              <i class="pi pi-envelope"></i>
            </div>
            <a
              href="mailto:admin@programacion-ecuador.com"
              class="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline"
              >admin&#64;programacion-ecuador.com</a>
          </div>

          <div class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div class="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white">
              <i class="pi pi-linkedin"></i>
            </div>
            <a
              href="https://www.linkedin.com/in/vladimir-miranda-145181b0/"
              target="_blank"
              class="text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-200 hover:underline"
              >linkedin.com/in/vladimir-miranda-145181b0</a>
          </div>

          <div class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white">
              <i class="pi pi-github"></i>
            </div>
            <a
              href="https://github.com/vladimirandavs19"
              target="_blank"
              class="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 hover:underline"
              >github.com/vladimirandavs19</a>
          </div>
        </div>
      </p-card>
    </section>
  `,
  imports: [CardModule],
  providers: [],
})
export class ContactComponent {}
