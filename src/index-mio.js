//Tarea 1
import { Tarjeta } from './tarea/Tarea1.js';

ReactDOM.render(
  <Tarjeta
    nombre="Santiago Luna"
    titulo="Programador Front End"
    imagen="https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
  />,
  document.getElementById('react-app')
);

import { BlogPost } from './tarea/Tarea1.js';

ReactDOM.render(
<BlogPost
  titulo="Ardillas"
  parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
  autor={{
    nombre: "Santiago Luna",
    titulo: "Programador Front End",
    imagen: "https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
  }}
  />,
  document.getElementById('react-app1')
);

//Tarea 2
import { MatchNombre, PasswordInput, ValidationInput } from './tarea/Tarea2.js';

ReactDOM.render(
  <div>
    <MatchNombre nombre="Santiago" />
    <PasswordInput minLength={8} />
    <ValidationInput validation={value => value === 'Tarea 2'} />
  </div>,
  document.getElementById('react-app2')
);

//Tarea 3
import { CheckboxList} from './tarea/Tarea3.js';

ReactDOM.render(
<CheckboxList
  items={{
    uno: false,
    dos: true,
    tres: false,
  }}
/>,
  document.getElementById('react-app3')
);


//Tarea 4
import { CheckboxListWithState } from './tarea/Tarea4.js';

ReactDOM.render(
  <CheckboxListWithState
    items={{
      uno: false,
      dos: true,
      tres: false,
    }}
  />,
  document.getElementById('react-app4')
);