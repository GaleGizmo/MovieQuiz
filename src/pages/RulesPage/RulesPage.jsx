
import './RulesPage.css';

const RulesPage = () => {
  return (
    <div className="rules-container">
    
    <div className="rules-header">
        <h1>Reglas del Juego</h1>
      </div>
      
      <div className='rules-content'><section>
        <h2>Objetivo</h2>
        <p>¡Hola cinéfilo! El objetivo de este juego es descubrir la cita de una película en el menor número de intentos posible.</p>
      </section>

      <section>
        <h2>Cómo Jugar</h2>
        <ol>
          <li>Cada día a las 9AM se presenta una nueva cita de una película con sus letras ocultas.</li>
          <li>Tienes un máximo de intentos para adivinar la cita completa. El número de intentos dependerá de la dificultad de la cita.</li>
          <li>En cada intento, debes introducir una palabra de cinco letras.</li>
          <li>Puedes usar el teclado físico o el teclado en pantalla para enviar tu intento.</li>
          <li>Después de cada intento, se mostrarán las letras de la palabra introducida que están en la cita oculta:</li>
          <ul>
            <li><span className="correct">Verde</span>: La letra está en la cita.</li>
            
            <li><span className="absent">Gris</span>: La letra no está en la cita.</li>
          </ul>
          <li>Si empiezas a jugar una cita y no terminas antes de las 9AM del día siguiente, se considerará cita NO DESCUBIERTA. </li>
          <li>Si descubres la cita, al final podrás acceder a la información detallada de la misma: película, personaje, contexto, etc.</li>
        </ol>
      </section>

      <section>
        <h2>Consejos</h2>
        <ul>
          <li>Intenta usar palabras con letras lo más comunes posible.</li>
          <li>Presta atención a las letras que ya has usado.</li>
          
        </ul>
      </section>

      

      <section>
        <h2>Frases Antiguas</h2>
        <p>Puedes acceder a citas de días anteriores desde el calendario en la parte superior de la pantalla.</p>
        <p>Si hay citas anteriores que no has jugado, puedes intentar adivinarlas; eso sí, una vez que empieces se aplica la misma regla de las 9AM que para la cita del día.</p>
        <p>Para volver a la cita del día, usa el icono de la casa en la parte superior.</p>
      </section>

      <footer>
        <p>¡Diviértete jugando y mejora tus habilidades de deducción cada día!</p>
      </footer> </div>
    </div>
  );
};

export default RulesPage;