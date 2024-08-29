import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { SharedModules } from '../../shared.module';
import { BaseComponent } from '../base/base.component';
import { Mensajes } from '../../recursos/mensajes';
import { Noticia } from '../../model/noticia';

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

  title = Mensajes.TITULO_PANTALLA;

  noticias: Noticia[] = [
    {
      titulo: 'Noticia 1',
      descripcion: 'Descripción de la noticia 1...',
      linkFoto: 'https://e.rpp-noticias.io/xlarge/2024/08/12/373937_1625762.webp'
    },
    {
      titulo: 'Noticia 2',
      descripcion: 'Descripción de la noticia 2...',
      linkFoto: 'https://e.rpp-noticias.io/xlarge/2024/08/10/374337_1625022.webp'
    },
    {
      titulo: 'Noticia 3',
      descripcion: 'Descripción de la noticia 3...',
      linkFoto: 'https://e.rpp-noticias.io/xlarge/2024/08/10/360336_1624975.webp'
    }
  ];

  cardNoticia: any = {
    width: '360px'
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
  public estilosNavbar: any = {
    'background-image': 'linear-gradient(to right, #e6e6e6, var(--orange-100))',
    'background-attachment': 'fixed',
    'position': 'fixed',
    'top': 0,
    'width': '100%',
    'z-index': 40
  };

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    super();
  }

  ngOnInit(): void {

    const cardJ = this.elementRef.nativeElement.querySelector('#card-estudio-juridico-img');
    const cardC = this.elementRef.nativeElement.querySelector('#card-estudio-contable-img');

    if (cardJ && cardC) {

      this.renderer.setStyle(cardJ, 'opacity', '0');
      this.renderer.setStyle(cardJ, 'visibility', 'hidden');
      this.renderer.setStyle(cardC, 'opacity', '0');
      this.renderer.setStyle(cardC, 'visibility', 'hidden');

      const botonJ = this.elementRef.nativeElement.querySelector('#btn-mas-juridico');
      const botonC = this.elementRef.nativeElement.querySelector('#btn-mas-contable');

      if (botonJ && botonC) {
        this.renderer.setStyle(botonJ, 'opacity', '0');
        this.renderer.setStyle(botonJ, 'visibility', 'hidden');
        this.renderer.setStyle(botonC, 'opacity', '0');
        this.renderer.setStyle(botonC, 'visibility', 'hidden');
      }
    }
  }

  public scrollear(seccion: string) {
    
    // switch (seccion) {
    //   case 'inicio':


    //     break;
    //   case 'contabilidad':


    //     break;
    //   case 'juridica':


    //     break;
    //   case 'nosotros':


    //     break;
    // }
  }

  hoverIn(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    this.renderer.setStyle(card, 'transform', 'scale(1.05)');
    this.renderer.setStyle(card, 'transition', 'transform 0.3s');

    const boton = card.querySelector('.card-button') as HTMLElement;
    this.renderer.setStyle(boton, 'opacity', '1');
    this.renderer.setStyle(boton, 'visibility', 'visible');
  }

  hoverOut(event: MouseEvent) {
    const card = event.currentTarget as HTMLElement;
    this.renderer.setStyle(card, 'transform', 'scale(1)');
    this.renderer.setStyle(card, 'transition', 'transform 0.3s');

    const boton = card.querySelector('.card-button') as HTMLElement;
    this.renderer.setStyle(boton, 'opacity', '0');
    this.renderer.setStyle(boton, 'visibility', 'hidden');
  }


  scrollearAbajo() {
    if (this.siguienteSeccion.nativeElement) {
      this.siguienteSeccion.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  verNoticia(noticia: Noticia) {
    console.log(noticia);
  }
}

