import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { GithubService } from '../../github.service';

@Component({
  selector: 'app-github',
  standalone: true,
  template: `
    <section id="github" class="max-w-4xl mx-auto px-4 mb-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">
        Proyectos en GitHub
      </h2>
      
      <p-card class="bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <div *ngIf="loading" class="text-center py-8">
          <i class="pi pi-spin pi-spinner text-2xl text-gray-500"></i>
          <p class="text-gray-600 mt-3">Cargando repositorios...</p>
        </div>

        <div *ngIf="error" class="text-center py-8">
          <i class="pi pi-exclamation-triangle text-2xl text-red-500"></i>
          <p class="text-red-600 mt-3">Error al cargar los repositorios</p>
          <button 
            (click)="loadRepos()"
            class="mt-3 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            Reintentar
          </button>
        </div>

        <div *ngIf="!loading && !error && repos.length > 0" class="grid gap-6 md:grid-cols-2">
          <div 
            *ngFor="let repo of repos.slice(0, 6)" 
            class="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg p-5 hover:shadow-md transition-all duration-300 hover:scale-105">
            
            <!-- Header del repositorio -->
            <div class="flex items-start justify-between mb-3">
              <h3 class="text-lg font-bold text-gray-800 truncate">
                {{ repo.name }}
              </h3>
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <i class="pi pi-star"></i>
                <span>{{ repo.stargazers_count }}</span>
              </div>
            </div>

            <!-- Descripción -->
            <p class="text-sm text-gray-600 mb-4 line-clamp-2" [title]="repo.description">
              {{ repo.description || 'Sin descripción disponible' }}
            </p>

            <!-- Lenguaje y estadísticas -->
            <div class="flex items-center justify-between mb-4">
              <div class="flex items-center gap-3">
                <span 
                  *ngIf="repo.language" 
                  class="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium">
                  {{ repo.language }}
                </span>
                <div class="flex items-center gap-1 text-xs text-gray-500">
                  <i class="pi pi-code-branch"></i>
                  <span>{{ repo.forks_count }} forks</span>
                </div>
              </div>
              <div class="text-xs text-gray-500">
                Actualizado: {{ formatDate(repo.updated_at) }}
              </div>
            </div>

            <!-- Enlaces -->
            <div class="flex gap-2">
              <a 
                [href]="repo.html_url" 
                target="_blank"
                class="flex-1 text-center px-3 py-2 bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium rounded-md transition-colors">
                <i class="pi pi-github mr-1"></i>
                Ver código
              </a>
              <a 
                *ngIf="repo.homepage" 
                [href]="repo.homepage" 
                target="_blank"
                class="flex-1 text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">
                <i class="pi pi-external-link mr-1"></i>
                Demo
              </a>
            </div>
          </div>
        </div>

        <!-- Enlace al perfil completo -->
        <div class="mt-8 text-center border-t border-gray-200 pt-6">
          <p class="text-sm text-gray-600 mb-4">
            Mostrando los {{ Math.min(repos.length, 6) }} repositorios más destacados
          </p>
          <a 
            href="https://github.com/vladimirandavs19" 
            target="_blank"
            class="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
            <i class="pi pi-github mr-2"></i>
            <span>Ver todos los proyectos</span>
          </a>
        </div>
      </p-card>
    </section>
  `,
  styles: [`
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .transition-shadow {
      transition: box-shadow 0.3s ease;
    }
  `],
  imports: [CommonModule, CardModule],
  providers: []
})
export class GithubComponent implements OnInit {
  repos: any[] = [];
  loading = true;
  error = false;
  Math = Math; // Hacer Math accesible en el template

  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.loadRepos();
  }

  loadRepos() {
    this.loading = true;
    this.error = false;
    
    this.githubService.getRepos().subscribe({
      next: (repos) => {
        this.repos = repos;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading GitHub repos:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'hace 1 día';
    if (diffDays < 30) return `hace ${diffDays} días`;
    if (diffDays < 365) return `hace ${Math.floor(diffDays / 30)} meses`;
    return `hace ${Math.floor(diffDays / 365)} años`;
  }
}
