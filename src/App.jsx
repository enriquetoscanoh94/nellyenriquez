import './App.css'
import nellyFoto from './assets/nelly.jpg'

const TELEFONO = '209-405-5038'
const WHATSAPP = 'https://wa.me/12094055038?text=Hola%20Nelly%2C%20me%20interesa%20informaci%C3%B3n%20sobre%20bienes%20ra%C3%ADces'
const EMAIL = 'nellyenriquezrealtor@gmail.com'
const DRE = 'DRE #01972958'

const SMS = 'sms:+12094055038'
const FACEBOOK = 'https://www.facebook.com/Marelly1024'
const ZILLOW = 'https://www.zillow.com/profile/Enriquez-Nelly#reviews'
const YOUTUBE = 'https://www.youtube.com/@nellyenriquez5055'
const INSTAGRAM = 'https://www.instagram.com/nellyenriquezrealtor1'

const SERVICIOS = [
  { titulo: 'Comprar', detalle: 'La casa ideal para ti y tu familia.' },
  { titulo: 'Vender', detalle: 'Tu propiedad al mejor precio del mercado.' },
  { titulo: 'Invertir', detalle: 'Con seguridad y visión a largo plazo.' },
  {
    titulo: 'Acompañarte',
    detalle: 'Un servicio profesional y personalizado, de principio a fin.',
  },
]

const PASOS = [
  {
    numero: '1',
    titulo: 'Hablamos de tus metas',
    detalle:
      'Una llamada o un café. Me cuentas qué buscas, tu presupuesto y tus tiempos.',
  },
  {
    numero: '2',
    titulo: 'Creamos la estrategia',
    detalle:
      'Con más de 24 años de experiencia, armo el plan para comprar, vender o invertir con los mejores resultados.',
  },
  {
    numero: '3',
    titulo: 'Cierras con confianza',
    detalle:
      'Te acompaño en cada firma y cada detalle hasta entregarte las llaves.',
  },
]

function IconoWhatsApp() {
  return (
    <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.6.8 5 2.3 7L4 29l7.2-2.2c1.9 1 4 1.6 6 1.6h.1c6.6 0 12-5.4 12-12S22.6 3 16 3zm0 22.4c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.3 1.3 1.3-4.1-.3-.4C5.9 19 5.4 17 5.4 15 5.4 9.2 10.2 4.4 16 4.4S26.6 9.2 26.6 15 21.8 25.4 16 25.4zm5.8-7.8c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.9-1.7-2.2s0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6s0-.5 0-.6c0-.2-.7-1.7-1-2.4-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1.1-1.1 2.7 1.2 3.1 1.3 3.3c.2.2 2.3 3.5 5.5 4.9.8.3 1.4.5 1.9.7.8.2 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5c-.1-.2-.3-.3-.6-.4z" />
    </svg>
  )
}

function IconoYouTube() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2-5.2 3.2z" />
    </svg>
  )
}

function IconoZillow() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 2 2 10.5h3V21h14V10.5h3L12 2zm3.6 8.2-4.5 5.6h4.5V18H8.4v-1.7l4.5-5.6H8.6V8.5h7v1.7z" />
    </svg>
  )
}

function IconoSms() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.7 2 11.3c0 2.6 1.4 4.9 3.6 6.4-.1.9-.5 2.2-1.5 3.3 0 0 2.4-.3 4.3-1.6.5-.3.8-.5 1-.6.8.2 1.7.3 2.6.3 5.5 0 10-3.7 10-8.3S17.5 3 12 3zM7.5 12.6a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm4.5 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6zm4.5 0a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6z" />
    </svg>
  )
}

function IconoFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H7.8V13h2.7v8h3z" />
    </svg>
  )
}

function IconoInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 4.3c2.5 0 2.8 0 3.8.1 1 0 1.5.2 1.8.3.5.2.8.4 1.1.7.3.3.5.6.7 1.1.1.3.3.8.3 1.8.1 1 .1 1.3.1 3.8s0 2.8-.1 3.8c0 1-.2 1.5-.3 1.8-.2.5-.4.8-.7 1.1-.3.3-.6.5-1.1.7-.3.1-.8.3-1.8.3-1 .1-1.3.1-3.8.1s-2.8 0-3.8-.1c-1 0-1.5-.2-1.8-.3-.5-.2-.8-.4-1.1-.7-.3-.3-.5-.6-.7-1.1-.1-.3-.3-.8-.3-1.8-.1-1-.1-1.3-.1-3.8s0-2.8.1-3.8c0-1 .2-1.5.3-1.8.2-.5.4-.8.7-1.1.3-.3.6-.5 1.1-.7.3-.1.8-.3 1.8-.3 1-.1 1.3-.1 3.8-.1zm0-1.7c-2.5 0-2.9 0-3.9.1-1 0-1.7.2-2.3.4-.6.3-1.2.6-1.7 1.1-.5.5-.9 1.1-1.1 1.7-.2.6-.4 1.3-.4 2.3-.1 1-.1 1.4-.1 3.9s0 2.9.1 3.9c0 1 .2 1.7.4 2.3.3.6.6 1.2 1.1 1.7.5.5 1.1.9 1.7 1.1.6.2 1.3.4 2.3.4 1 .1 1.4.1 3.9.1s2.9 0 3.9-.1c1 0 1.7-.2 2.3-.4.6-.3 1.2-.6 1.7-1.1.5-.5.9-1.1 1.1-1.7.2-.6.4-1.3.4-2.3.1-1 .1-1.4.1-3.9s0-2.9-.1-3.9c0-1-.2-1.7-.4-2.3-.3-.6-.6-1.2-1.1-1.7-.5-.5-1.1-.9-1.7-1.1-.6-.2-1.3-.4-2.3-.4-1-.1-1.4-.1-3.9-.1zm0 4.6a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
    </svg>
  )
}

function Redes() {
  return (
    <div className="redes">
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="red-wa">
        <IconoWhatsApp />
      </a>
      <a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook" className="red-fb">
        <IconoFacebook />
      </a>
      <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="red-ig">
        <IconoInstagram />
      </a>
      <a href={YOUTUBE} target="_blank" rel="noreferrer" aria-label="YouTube" className="red-yt">
        <IconoYouTube />
      </a>
      <a href={ZILLOW} target="_blank" rel="noreferrer" aria-label="Zillow" className="red-zw">
        <IconoZillow />
      </a>
    </div>
  )
}

function App() {
  function enviarFormulario(evento) {
    evento.preventDefault()
    const datos = new FormData(evento.target)
    const texto =
      `Hola Nelly, soy ${datos.get('nombre')}.\n` +
      `Mi teléfono: ${datos.get('telefono')}\n` +
      `Me interesa: ${datos.get('interes')}\n\n` +
      `${datos.get('mensaje')}`

    if (evento.nativeEvent.submitter.value === 'whatsapp') {
      window.open(
        `https://wa.me/12094055038?text=${encodeURIComponent(texto)}`,
        '_blank',
      )
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        'Contacto desde tu página web',
      )}&body=${encodeURIComponent(texto)}`
    }
  }

  return (
    <>
      <header className="nav">
        <a href="#inicio" className="nav-logo">
          <span className="nav-script">Nelly</span>
          <span className="nav-apellido">Enríquez</span>
        </a>
        <nav className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
          <a href={`tel:${TELEFONO}`} className="nav-tel">
            {TELEFONO}
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-texto">
            <p className="hero-script">Yo no solo vendo casas…</p>
            <h1>
              Hago realidad
              <br />
              <em>tus sueños.</em>
            </h1>
            <p className="hero-parrafo">
              Más de <strong>24 años</strong> guiando a familias del Valle
              Central con honestidad, dedicación y estrategia para lograr los
              mejores resultados en Bienes Raíces.
            </p>
            <div className="hero-botones">
              <a href={`tel:${TELEFONO}`} className="btn-cta">
                ¡Hablemos!
              </a>
              <a href="#servicios" className="enlace-dorado">
                Conoce mis servicios
              </a>
            </div>
            <div className="hero-redes">
              <Redes />
            </div>
          </div>

          <figure className="hero-retrato">
            <img src={nellyFoto} alt="Nelly Enríquez, Realtor®" />
            <figcaption>
              <span className="retrato-nombre">Nelly Enríquez</span>
              <span className="retrato-titulo">Realtor® · {DRE}</span>
            </figcaption>
          </figure>
        </section>

        <div className="cinta">
          <span>Compra</span>
          <i>·</i>
          <span>Venta</span>
          <i>·</i>
          <span>Inversión</span>
          <i>·</i>
          <span>Stockton — Modesto — Manteca — Valle Central</span>
        </div>

        <section id="servicios" className="servicios">
          <h2>
            Te ayudo a<span className="titulo-script"> dar el siguiente paso</span>
          </h2>
          <ul className="servicios-lista">
            {SERVICIOS.map((s) => (
              <li key={s.titulo}>
                <h3>{s.titulo}</h3>
                <p>{s.detalle}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="proceso" className="proceso">
          <h2>
            ¿Cómo <em>trabajamos?</em>
          </h2>
          <ol className="proceso-pasos">
            {PASOS.map((p) => (
              <li key={p.numero}>
                <span className="paso-numero">{p.numero}</span>
                <h3>{p.titulo}</h3>
                <p>{p.detalle}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="compromiso" className="compromiso">
          <p className="compromiso-script">Tu confianza</p>
          <h2>es mi mayor compromiso</h2>
          <div className="compromiso-resultados">
            <p>Cientos de familias felices</p>
            <p>Negociación inteligente</p>
            <p>Atención que te hace sentir en familia</p>
          </div>
          <a
            href={ZILLOW}
            target="_blank"
            rel="noreferrer"
            className="btn-resenas"
          >
            Lee las reseñas de mis clientes en Zillow
          </a>
        </section>

        <section id="contacto" className="contacto">
          <div className="contacto-info">
            <p className="contacto-script">¿Listo para dar el siguiente paso?</p>
            <h2>¡Hablemos!</h2>
            <a href={`tel:${TELEFONO}`} className="contacto-tel">
              {TELEFONO}
            </a>
            <div className="contacto-extra">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <p>Sirviendo a Stockton, Modesto, Manteca y el Valle Central</p>
            </div>
            <Redes />
          </div>

          <form className="formulario" onSubmit={enviarFormulario}>
            <label>
              Nombre
              <input type="text" name="nombre" required placeholder="Tu nombre" />
            </label>
            <label>
              Teléfono
              <input type="tel" name="telefono" required placeholder="(209) 000-0000" />
            </label>
            <label>
              ¿Qué te interesa?
              <select name="interes" defaultValue="Comprar">
                <option>Comprar</option>
                <option>Vender</option>
                <option>Invertir</option>
                <option>Otro</option>
              </select>
            </label>
            <label>
              Mensaje
              <textarea
                name="mensaje"
                rows="4"
                placeholder="Cuéntame qué estás buscando…"
              ></textarea>
            </label>
            <div className="form-botones">
              <button type="submit" value="whatsapp" className="btn-form-wa">
                <IconoWhatsApp />
                Enviar por WhatsApp
              </button>
              <button type="submit" value="correo" className="btn-form-correo">
                ✉ Enviar por correo
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-marca">
          <span className="nav-script">Nelly</span> Enríquez · Realtor®
        </p>
        <p>{DRE} · Tu agente de confianza en Bienes Raíces</p>
      </footer>

      <div className="flotantes">
        <a
          href={SMS}
          className="sms-flotante"
          aria-label="Envíame un mensaje de texto"
        >
          <IconoSms />
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="whats-flotante"
          aria-label="Escríbeme por WhatsApp"
        >
          <IconoWhatsApp />
        </a>
      </div>
    </>
  )
}

export default App
