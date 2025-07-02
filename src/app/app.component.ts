import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { AboutComponent } from "./components/about/about.component";
import { GithubComponent } from "./components/github/github.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { EducationComponent } from "./components/education/education.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { CertificationComponent } from './components/certification/certification.component';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutComponent, GithubComponent, ExperienceComponent, EducationComponent, SkillsComponent, ContactComponent, CertificationComponent, ButtonModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'mihv';
  showScrollButton = false;
  isScrolling = false;
  private scrollTimeout: any;

  ngOnInit() {
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }

  onScroll() {
    const shouldShow = window.pageYOffset > 300;
    
    if (shouldShow !== this.showScrollButton) {
      // Limpiar timeout anterior si existe
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      
      if (shouldShow) {
        // Mostrar inmediatamente
        this.showScrollButton = true;
      } else {
        // Esperar un poco antes de ocultar para suavizar la transición
        this.scrollTimeout = setTimeout(() => {
          this.showScrollButton = false;
        }, 150);
      }
    }
  }

  scrollToTop() {
    // Activar efecto visual del botón
    this.isScrolling = true;
    
    // Agregar clase al body para efecto visual
    document.body.classList.add('scrolling');
    
    // Scroll suave personalizado con easing
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 1000; // 1 segundo
    
    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOutCubic(progress);
      
      const currentPosition = startPosition * (1 - easedProgress);
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Limpiar efectos cuando termine el scroll
        this.isScrolling = false;
        document.body.classList.remove('scrolling');
      }
    };
    
    requestAnimationFrame(animateScroll);
  }
}
