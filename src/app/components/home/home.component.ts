import { Component, ElementRef, OnInit, Renderer2, ViewChild, HostListener } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { BaseComponent } from '../base/base.component';
import { Mensajes } from '../../recursos/mensajes';
import { Noticia } from '../../model/noticia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModules],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent extends BaseComponent implements OnInit {

  @ViewChild('siguienteSeccion')
  siguienteSeccion!: ElementRef;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.verCards(scrollPosition > 50);
  }


  title = Mensajes.TITULO_PANTALLA;

  noticias: Noticia[] = [
    {
      titulo: 'Temporal Santa Rosa: Inumet advirtió por lluvias, tormentas y vientos fuertes durante este fin de semana',
      descripcion: 'El fenómeno sobre el que advirtió Inumet es el que otros meteorólogos han conectado con el temporal de San Rosa, esperado cada año para el 30 de agosto',
      linkFoto: 'https://media.elobservador.com.uy/p/d842de87e438fc4c568869ceec07b86c/adjuntos/362/imagenes/100/469/0100469627/1000x0/smart/-ine7266-jpgwebp.webp'
    },
    {
      titulo: '"Tendremos Santa Rosa": el meteorólogo Mario Bidegain pronosticó un temporal para esta semana',
      descripcion: 'Al igual que Bidegain, el meteorólogo Nubel Cisneros había previsto un ciclón extratropical para el viernes',
      linkFoto: 'https://media.elobservador.com.uy/p/a73ede29230c3a542ab2a5c821fd5e20/adjuntos/362/imagenes/100/469/0100469846/1000x0/smart/_ine7873-awebp.webp'
    },
    {
      titulo: 'Meteorólogos sobre el temporal de Santa Rosa: cuándo es y cómo estará el clima',
      descripcion: 'Este fenómeno se debe a la "alta variabilidad atmosférica en este periodo estacional de transición de una más fría a una estación más templada"',
      linkFoto: 'https://media.elobservador.com.uy/p/23ecddf4e74d7faeeb1c749bb6c2c42f/adjuntos/362/imagenes/100/508/0100508873/1000x0/smart/tormentas-clima-el-tiempo.jpg'
    }
  ];

  cardNoticia: any = {
    width: '33%'
  }

  public descripcionEmpresa: string = Mensajes.TEXTO_DESCRIPCION_EMPRESA;
  public tituloSolucionContable: string = Mensajes.TITULO_SOLUCION_CONTABLE;
  public tituloSolucionJuridica: string = Mensajes.TITULO_SOLUCION_JURIDICA;
  public botonMas: string = Mensajes.BOTON_MAS;
  public tituloSobreNosotros: string = Mensajes.TITULO_SOBRE_NOSOTROS;
  public tituloPantalla: string = Mensajes.TITULO_PANTALLA;
  public frase1: string = Mensajes.FRASE_STEVE_JOBS1;
  public frase2: string = Mensajes.FRASE_STEVE_JOBS2;
  public sobreNosotros: string = Mensajes.SOBRE_NOSOTROS;
  public estilosNavbar: any;
  botones: any[] = [{ titulo: 'Inicio', valor: 'inicio' }, { titulo: 'Nosotros', valor: 'nosotros' }, { titulo: 'Noticias', valor: 'noticias' },
  { titulo: 'Legal', valor: 'legal' }, { titulo: 'Contable', valor: 'contable' }, { titulo: 'Contacto', valor: 'contacto' }];

  constructor(private router: Router, private renderer: Renderer2, private elementRef: ElementRef) {
    super();
  }

  ngOnInit(): void {

    const color1 = '#e6e6e6';
    const color2 = 'var(--orange-100)';
    this.estilosNavbar = {
      'background-image': 'linear-gradient(to right, ' + color1 + ', ' + color2 + ')',
      'position': 'fixed',
      'top': 0,
      'left': 0,
      'width': '100%',
      'z-index': 40
    };

    this.verCards(true);
  }

  verCards(ver: boolean) {

    const cardJ = this.elementRef.nativeElement.querySelector('#card-estudio-juridico-img');
    const cardC = this.elementRef.nativeElement.querySelector('#card-estudio-contable-img');

    if (cardJ && cardC) {
      this.renderer.setStyle(cardJ, 'opacity', ver ? '1' : '0');
      this.renderer.setStyle(cardJ, 'visibility', ver ? 'visible' : 'hidden');
      this.renderer.setStyle(cardC, 'opacity', ver ? '1' : '0');
      this.renderer.setStyle(cardC, 'visibility', ver ? 'visible' : 'hidden');

      const botonJ = this.elementRef.nativeElement.querySelector('#btn-mas-juridico');
      const botonC = this.elementRef.nativeElement.querySelector('#btn-mas-contable');

      if (botonJ && botonC) {
        this.renderer.setStyle(botonJ, 'opacity', ver ? '1' : '0');
        this.renderer.setStyle(botonJ, 'visibility', ver ? 'visible' : 'hidden');
        this.renderer.setStyle(botonC, 'opacity', ver ? '1' : '0');
        this.renderer.setStyle(botonC, 'visibility', ver ? 'visible' : 'hidden');
      }
    }
  }

  public scrollear(seccion: string) {
    const element = document.getElementById(seccion);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // hoverIn(event: MouseEvent) {

  //   const card = event.currentTarget as HTMLElement;
  //   if (card) {

  //     this.renderer.setStyle(card, 'transform', 'scale(1.05)');
  //     this.renderer.setStyle(card, 'transition', 'transform 0.3s');

  //     const boton = card.querySelector('.card-button') as HTMLElement;
  //     this.renderer.setStyle(boton, 'opacity', '1');
  //     this.renderer.setStyle(boton, 'visibility', 'visible');
  //   }
  // }

  // hoverOut(event: MouseEvent) {
  //   const card = event.currentTarget as HTMLElement;
  //   if (card) {

  //     this.renderer.setStyle(card, 'transform', 'scale(1)');
  //     this.renderer.setStyle(card, 'transition', 'transform 0.3s');

  //     const boton = card.querySelector('.card-button') as HTMLElement;
  //     this.renderer.setStyle(boton, 'opacity', '0');
  //     this.renderer.setStyle(boton, 'visibility', 'hidden');
  //   }
  // }


  scrollearAbajo() {
    if (this.siguienteSeccion.nativeElement) {
      this.siguienteSeccion.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  verNoticia(noticia: Noticia) {
    console.log(noticia);
    this.router.navigate(['noticias'], { state: { data: noticia } });
  }

  verSolucion(tipo: string) {
    if (tipo == 'contable') {
      console.log('Ver solución contable');
    }
    else if (tipo == 'juridica') {
      console.log('Ver solución jurídica');
    }
  }
}

