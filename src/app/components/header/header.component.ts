import { Component, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { Menu } from 'primeng/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo/Nombre -->
          <div class="flex items-center">
            @if(isMobile) {
              <span class="text-2xl font-bold text-gray-800">VM</span>
            } @else {
              <div class="flex flex-col">
                <span class="text-xl font-bold text-gray-800">Vladimir Miranda</span>
                <span class="text-xs text-gray-600">Desarrollador Full Stack</span>
              </div>
            }
          </div>

          <!-- Menú Desktop -->
          <nav *ngIf="!isMobile" class="hidden md:flex items-center space-x-4">
            <button 
              class="nav-button px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-200"
              (click)="scrollToSection('about')">
              Sobre mí
            </button>
            <button 
              class="nav-button px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-200"
              (click)="scrollToSection('github')">
              Proyectos
            </button>
            <button 
              class="nav-button px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-200"
              (click)="scrollToSection('experience')">
              Experiencia
            </button>
            <button 
              class="nav-button px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-200"
              (click)="scrollToSection('education')">
              Educación
            </button>
            <button 
              class="nav-button px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-200"
              (click)="scrollToSection('certification')">
              Certificaciones
            </button>
            <button 
              class="nav-button px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-200"
              (click)="scrollToSection('skills')">
              Habilidades
            </button>
            <button 
              class="nav-button px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-all duration-200"
              (click)="scrollToSection('contact')">
              Contacto
            </button>
            <a 
              href="assets/CV_VladimirMiranda_24.pdf" 
              target="_blank"
              class="ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              <i class="pi pi-download mr-1"></i> CV
            </a>
          </nav>

          <!-- Menú Móvil -->
          <div *ngIf="isMobile" class="md:hidden">
            <button
              class="p-2 rounded-md text-gray-600 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              (click)="toggleMobileMenu($event)">
              <i class="pi pi-bars text-lg"></i>
            </button>
            
            <p-menu
              #menu
              [model]="menuItems"
              [popup]="true">
            </p-menu>
          </div>
        </div>
      </div>
    </header>
  `,
  imports: [CommonModule, MenuModule],
  providers: [],
  styles: [
    `
    header {
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
    
    .nav-button {
      cursor: pointer;
      border: none;
      background: none;
    }
    
    .nav-button:hover {
      transform: translateY(-1px);
    }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menu') menu!: Menu;
  isMobile = false;
  menuOpen = false;
  menuItems: MenuItem[] = [];

  constructor() {
    this.initializeComponent();
  }

  ngOnInit() {
    this.initializeComponent();
  }

  private initializeComponent() {
    this.isMobile = window.innerWidth < 768;

    // Definir los elementos del menú
    this.menuItems = [
      {
        label: 'Sobre mí',
        icon: 'pi pi-user',
        command: () => {
          this.scrollToSection('about');
        }
      },
      {
        label: 'Proyectos',
        icon: 'pi pi-github',
        command: () => {
          this.scrollToSection('github');
        }
      },
      {
        label: 'Experiencia',
        icon: 'pi pi-briefcase',
        command: () => {
          this.scrollToSection('experience');
        }
      },
      {
        label: 'Educación',
        icon: 'pi pi-book',
        command: () => {
          this.scrollToSection('education');
        }
      },
      {
        label: 'Certificaciones',
        icon: 'pi pi-certificate',
        command: () => {
          this.scrollToSection('certification');
        }
      },
      {
        label: 'Habilidades',
        icon: 'pi pi-cog',
        command: () => {
          this.scrollToSection('skills');
        }
      },
      {
        label: 'Contacto',
        icon: 'pi pi-envelope',
        command: () => {
          this.scrollToSection('contact');
        }
      },
      {
        separator: true
      },
      {
        label: 'Descargar CV',
        icon: 'pi pi-download',
        command: () => {
          window.open('assets/CV_VladimirMiranda_24.pdf', '_blank');
        }
      }
    ];

    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth < 768;
      if (!this.isMobile) this.menuOpen = false;
    });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleMobileMenu(event: Event) {
    this.menu.toggle(event);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 85; // Altura aproximada del header
      const elementPosition = element.offsetTop - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = elementPosition - startPosition;
      const duration = 800; // Duración de la animación en ms
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      // Función de easing para una animación más suave
      function ease(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  }
}
