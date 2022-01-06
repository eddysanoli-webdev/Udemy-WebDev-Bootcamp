# Web Development Notes

## CSS

**Jerarquía CSS**. Se aplica en el siguiente orden:

1. CSS inyectado en un tag
2. CSS declarado en un tag de "style" dentro de "head"
3. CSS externo (Archivo .css)

**IDs VS Clases**:

- Ambas permiten asignar propiedades a un elemento específico
- IDs solo se pueden asignar a un único elemento en una página. Las clases se pueden asignar a tantos elementos como se deseen.
- Tienen prioridad sobre los tag selectors.
- Un elemento puede tener más de una clase a la vez.

**Pseudo clase**: Aplica diferentes estilos según el estado del sitio web.

**Blocking elements**: Bloquean a otros elementos de posicionarse a sus lados. Ejemplos:

- Párrafos
- Headers
- Divisiones
- Listas
- Forms

**Display (Property)**:

- "display: inline": Permite que las cosas se acumulen a los lados (no se puede cambiar el ancho)
- "display: block": Evita que otras cosas se pongan a los lados (se puede cambiar el ancho)
- "display: inline-block": Los elementos pueden acumularse (se puede cambiar el ancho)
- "display: none": No muestra nada. Elimina el elemento

**Visibility (Property)**: Desaparece el elemento, pero continúa ocupando el mismo espacio. Simplemente no es visible

**Eje Z**: CSS tiene una especie de sistema de capas. El contenido de un padre va encima del padre. Los spans van encima del contenido.

![absolute](/Notes/imgs/z-axis.PNG)

**Posición (Property)**:

- Static: Usar el default de HTML
- Absolute: Los márgenes están dados con respecto al padre del elemento. Si el elemento no está contenido en ningún contenedor (div por ejemplo) entonces el padre es la pantalla completa. 

    Por ejemplo, si una imagen se coloca como "absolute" con un "right: 30px" entonces esta se va pegar a la derecha y va a dejar un margen de 30px entre la orilla derecha de la pantalla y la orilla derecha de la imagen.

    ![absolute](/Notes/imgs/absolute-positioning.PNG)

- Relative: Posicionar elemento relativo a la posición que hubiera tenido si hubiera estado estático. El elemento movido no empuja nada. Parece que deja un fantasma ocupando su posición original

    ![absolute](/Notes/imgs/relative-positioning.PNG)

- Fixed: Aunque scroleemos en el sitio web, la figura se va a quedar en su posición con respecto a la pantalla como tal.

**Tamaño Heredado**: El tamaño de una font se hereda. Si en el "body" se establece que el tamaño de la font es de 200%, y luego en el "h1" se coloca que el tamaño es 200%, entonces el 200% del "h1" se aplica una vez ya fue escalado el texto en el "body". Es un efecto acumulativo. Si se quiere evitar este efecto se puede utilizar la unidad "rem" en lugar de "em". En este caso la unidad ignora el tamaño del padre y solo aplica el último.

----------

## Web Design (UI & UX)

### Color Theory

**Mood**: Se debe considerar el "mood" de los colores

- Rojo: Amor, energía, intensidad
- Amarillo: Felicidad, inteligencia, atención (con cuidado, es muy fuerte)
- Verde: Frescura, seguridad, crecimiento
- Azul: Estabilidad, confianza, serenidad
- Morado: Realeza, riqueza, feminidad

**Paletas de color**:

- Análoga: Un color a la par del otro en la rueda de colores. 
  - Harmoniosos juntos.
  - Para cosas que van juntas como la barra de navegación y el cuerpo. O el fondo y el objeto de un logo
  - No sobresale

- Complementaria: Un color en la dirección contraria en la rueda de colores
  - Hace que los colores sobresalten
  - No usarlo en texto y su fondo.
  - Solo para logos e íconos

**Fonts**:

- Serif: Tienen piesitos
  - Es más serio y con autoridad
  - Existen variaciones: Mientras más vieja es la font, más autoritaria y antigua se mira. Moderna para cosas más nuevas
  - Vogue por ejemplo es una font serif moderna

- Sans Serif: Mismo tipo de letra, pero sin piesitos
  - Amigable, contemporario, s ensible, simple
  - Más fácil de leer, utilizado para cuerpos de texto
  - Diferentes tipos: Humanista y grotesca. La grotesca es menos legible

- Otros tipos:
  - Script: Personal, creativo, elegante
  - Display: Amigable, loud, amusing
  - Modern: Stylish, chic, smart

**Legibilidad**: Existe mejor legibilidad si

- Se usan formas abiertas
- Espacios amplios entre caracteres
- Formas sin ambigüedad (la "g" no se parece al "9")
- Proporciones variables

**Tips Combinación Fonts**: 
- No usar más de 2 fonts. Se mira muy cargado
- Que el "mood" combine
- Generalmente se combina serif y sans serif
- Variar el grosor de la letra entre título y texto para que sobresalte

**User Interface (UI)**:

- Color: Colores contrastantes llaman más la atención
- Tamaño: Lo más grande siempre se percibe como "más importante".
- Largo de texto: No hay que hacer líneas de texto tan largas. Es mejor si hay entre 40 a 60 caracteres por línea
- Alineación: Lo mejor es eliminar la mayor cantidad de líneas de alineación. Es mejor si más cosas están alineadas entre sí
- Whitespace: Incluir la mayor cantidad de espacio vacío posible para que los elementos sobresalgan y se vean más exclusivos
- Audiencia: Diseñar basado en la audiencia objetivo y lo que se desea transmitir

**User Experience (UX)**:

Diseñar experiencias que se sientan bien y que no molesten al usuario

- Simplicidad: No sobrecargar la vista, mejor si se mira simple.
- Consistencia: No variar el diseño y funcionalidad entre diferentes partes de un mismo sitio
- Patrones de lectura: 
  - "F": El más común. Incluir las partes más importantes a la izquierda y bajar en prioridad.
  - "Z": Arriba, derecha, abajo, derecha de nuevo.

- All-platform design: Mobile responsive. Un sitio que se redimensione bien cuando se abra en teléfono.
- Prueba e Iteración: Prueba para que den feedback y mejorar el diseño
