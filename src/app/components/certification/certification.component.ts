import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-certification',
  standalone: true,
  template: `
    <section id="certification" class="max-w-4xl mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Cursos & Certificaciones
      </h2>

      <div class="grid gap-6 md:grid-cols-2">
        @for (cert of certificaciones; track cert.credencial || cert.nombre) {
        <div class="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
          <!-- Header con gradiente sutil -->
          <div class="bg-gradient-to-r from-slate-700 to-slate-800 p-4">
            <div class="flex items-center gap-3">
              <img
                [src]="cert.logoInstitucion"
                [alt]="cert.institucion"
                class="w-10 h-10 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 class="text-sm font-bold text-white">
                  {{ cert.nombre }}
                </h3>
                <p class="text-xs text-slate-200">
                  {{ cert.institucion }}
                </p>
              </div>
            </div>
          </div>

          <!-- Contenido -->
          <div class="p-4">
            <div class="flex justify-between items-center mb-3">
              <span class="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded-md font-medium">
                {{ cert.fechaExpedicion }}
              </span>
              @if (cert.credencial) {
              <span class="text-xs text-gray-500 font-mono">
                ID: {{ cert.credencial }}
              </span>
              }
            </div>

            @if (cert.aptitudes) {
            <div class="mb-3">
              <p class="text-xs font-semibold text-gray-600 mb-1">Aptitudes:</p>
              <p class="text-xs text-gray-700">{{ cert.aptitudes }}</p>
            </div>
            }

            <!-- Thumbnails y enlaces -->
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <img
                  [src]="cert.thumbnail"
                  [alt]="'Certificado ' + cert.nombre"
                  class="w-12 h-12 object-cover rounded-md border border-slate-300 cursor-pointer hover:scale-105 transition-transform shadow-sm"
                  (click)="openPdf(cert.pdfUrl)"
                />
              </div>
              
              <div class="flex gap-2">
                @if (cert.pdfUrl) {
                <a
                  [href]="cert.pdfUrl"
                  target="_blank"
                  class="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-md hover:bg-slate-200 transition-colors font-medium"
                >
                  Ver PDF
                </a>
                }
                @if (cert.urlVerificacion) {
                <a
                  [href]="cert.urlVerificacion"
                  target="_blank"
                  class="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-md hover:bg-blue-100 transition-colors font-medium"
                >
                  Verificar
                </a>
                }
              </div>
            </div>
          </div>
        </div>
        }
      </div>
    </section>
  `,
  imports: [CardModule],
  providers: [],
})
export class CertificationComponent {
  openPdf(pdfUrl: string) {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  }

  certificaciones = [
    {
      nombre: 'PL-900T00-AC Microsoft Power Platform Fundamentals',
      institucion: 'Business IT',
      fechaExpedicion: 'ene. 2025',
      credencial: '17380-56-14-7626',
      aptitudes: 'Microsoft Power Platform',
      logoInstitucion: 'assets/bit.webp',
      thumbnail: 'assets/thumbnails/cert-pl900-thumb.png',
      pdfUrl: 'assets/files/Cert_17380_56_14_7626.pdf',
      urlVerificacion: '',
    },
    {
      nombre:
        'AZ-400T00-AC: Designing and Implementing Microsoft DevOps Solutions',
      institucion: 'Business IT',
      fechaExpedicion: 'dic. 2024',
      credencial: '14483-51-23-7024',
      aptitudes: 'Azure DevOps, CI/CD',
      logoInstitucion: 'assets/bit.webp',
      thumbnail: 'assets/thumbnails/cert-az400-thumb.png',
      pdfUrl: 'assets/files/Cert_14483_51_23_7024.pdf',
      urlVerificacion: '',
    },
    {
      nombre: 'JSE – Certified Entry-Level JavaScript Programmer',
      institucion: 'JS Institute',
      fechaExpedicion: 'abr. 2024',
      credencial: 'gkii.BeSN.mSQo',
      aptitudes: 'JavaScript Programming',
      logoInstitucion: 'assets/jsi.png',
      thumbnail: 'assets/thumbnails/cert-jse-thumb.png',
      pdfUrl: 'assets/files/certificate_gkii.BeSN.mSQo.pdf',
      urlVerificacion: 'https://verify.openedg.org/?id=gkii.BeSN.mSQo',
    },
    {
      nombre: '.NET 5: Entity Framework Core Esencial',
      institucion: 'LinkedIn Learning',
      fechaExpedicion: 'ene. 2023',
      credencial: 'AfVF6LB_e_Su8-dutZP2HvY9tmwW',
      aptitudes: 'Web Services API · .NET Core · Entity Framework · LINQ · Programación · ASP.NET · ASP.NET Web API',
      logoInstitucion: 'assets/lkl.png',
      thumbnail: 'assets/thumbnails/cert-net5-thumb.png',
      pdfUrl: '',
      urlVerificacion:
        'https://www.linkedin.com/learning/certificates/a0578789584e20dd182713b0dcd06abef5fbfb9af5068c3dd8cacc31545eed08',
    },
    {
      nombre: 'JavaScript Avanzado 1',
      institucion: 'LinkedIn Learning',
      fechaExpedicion: 'ene. 2023',
      credencial: 'AQvSrh9FQMJ6UTno9ONPIpg7mTZM',
      aptitudes: 'Programación',
      logoInstitucion: 'assets/lkl.png',
      thumbnail: 'assets/thumbnails/cert-jsa-thumb.png',
      pdfUrl: '',
      urlVerificacion: 'https://www.linkedin.com/learning/certificates/de0204e90cecd97984bcacbe5a72a3600091a9e02733cb9980f5f9304707df0f',
    },
  ];
}
