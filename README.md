# NgxIntro

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Bienvenido a NgxIntro, un proyecto basado en [Nx workspace](https://nx.dev) que incluye la librería `ngx-intro-js` para facilitar la integración de guías interactivas en aplicaciones Angular. ✨

## ¿Qué es `ngx-intro-js`?

`ngx-intro-js` es una librería Angular que proporciona una integración sencilla con [Intro.js](https://introjs.com/), una herramienta para crear recorridos interactivos y tutoriales en aplicaciones web. Esta librería permite a los desarrolladores agregar recorridos paso a paso en sus aplicaciones Angular de manera rápida y eficiente.

### Características principales

- Fácil integración con aplicaciones Angular.
- Soporte para personalización de estilos y configuraciones.
- Compatible con las últimas versiones de Angular.
- Basado en [Intro.js](https://introjs.com/) para una experiencia de usuario fluida.

## Uso de la librería

Para usar la librería `ngx-intro-js` en tu proyecto Angular, sigue estos pasos:

1. Instala la librería:

```sh
npm install ngx-intro-js
```

2. Importa el módulo en tu aplicación Angular:

```typescript
import { NgxIntroJsModule } from 'ngx-intro-js';

@NgModule({
  declarations: [
    // ...componentes
  ],
  imports: [
    NgxIntroJsModule,
    // ...otros módulos
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

3. Usa el componente en tu aplicación:

```html
<button (click)="startTour()">Iniciar Tour</button>

<ngx-intro-js [steps]="steps"></ngx-intro-js>
```

4. Define los pasos del recorrido en tu componente:

```typescript
steps = [
  {
    element: '#step1',
    intro: 'Este es el primer paso.',
  },
  {
    element: '#step2',
    intro: 'Este es el segundo paso.',
  },
];

startTour() {
  this.introJsService.start();
}
```

## Ejecución de tareas

Para ejecutar el servidor de desarrollo de tu aplicación, usa:

```sh
npx nx serve ngx-intro
```

Para crear un paquete de producción:

```sh
npx nx build ngx-intro
```

Para ver todos los objetivos disponibles para ejecutar en un proyecto, usa:

```sh
npx nx show project ngx-intro
```

## Contribuir

Si deseas contribuir a `ngx-intro-js`, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección de errores.
3. Envía un pull request con tus cambios.

## Enlaces útiles

- [Documentación de Nx](https://nx.dev)
- [Intro.js](https://introjs.com/)
- [Repositorio de ngx-intro-js](https://github.com/tu-repositorio/ngx-intro-js)

¡Gracias por usar `ngx-intro-js`!
