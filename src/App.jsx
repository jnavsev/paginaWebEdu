import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from "react-router-dom";
import heroImage from "./assets/puerto-calpe-hero-edited.png";
import recyclingImage from "./assets/contenedores-reciclaje.png";
import educationImage from "./assets/educacion-ambiental.png";
import smartPortImage from "./assets/smart-port-dashboard.png";
import cleanupBoatImage from "./assets/limpieza-superficial.png";
import portMapImage from "./assets/mapa-puerto-calpe-puntos.png";
import groupImage from "./assets/grupo-investigacion-c2.png";

const navItems = [
  ["Inicio", "/"],
  ["Problema", "/problema"],
  ["Propuesta", "/propuesta"],
  ["Actuaciones", "/actuaciones"],
  ["Smart Port", "/smart-port"],
  ["Impacto", "/impacto"],
  ["Grupo", "/grupo"]
];

const contextCards = [
  ["Actividad pesquera", "Genera redes, cabos, cajas, restos de aparejos y materiales asociados al trabajo diario.", "fish"],
  ["Actividad urbana y turística", "Puede aportar plásticos, envases, botellas, colillas y otros residuos de origen humano.", "people"],
  ["Brut d'Ifac y residuos arrastrados", "La dinámica marina y los temporales desplazan residuos hacia el entorno portuario.", "waves"],
  ["Fondos marinos vulnerables", "Los residuos sedimentados alteran hábitats, fauna bentónica y calidad ecológica.", "biodiversity"]
];

const problemImpacts = [
  ["Impacto sobre la fauna", "Riesgo de ingestión, atrapamiento o alteración del comportamiento de especies marinas."],
  ["Impacto sobre los fondos", "Acumulación de materiales sobre comunidades bentónicas y pérdida de calidad del hábitat."],
  ["Impacto sobre la imagen del municipio", "Un puerto con residuos reduce el valor paisajístico, turístico y ambiental de Calpe."],
  ["Impacto sobre la gestión pública", "La retirada tardía de residuos puede ser más costosa que una gestión preventiva."]
];

const objectives = [
  "Reducir la acumulación de residuos en el entorno portuario.",
  "Aumentar la tasa de reciclaje mediante contenedores específicos.",
  "Implicar al sector pesquero y a los operadores portuarios.",
  "Recompensar las buenas prácticas ambientales.",
  "Concienciar a ciudadanía, visitantes y centros educativos.",
  "Incorporar herramientas inteligentes para medir y mejorar la gestión."
];

const actionLines = [
  ["Gestión inteligente de residuos", "Contenedores específicos, señalización clara y puntos de recogida selectiva.", "recycle"],
  ["Bonificaciones verdes", "Incentivos económicos y reconocimientos para quienes demuestren buenas prácticas.", "award"],
  ["Educación y acción ciudadana", "Campañas, voluntariado, colegios y programas de sensibilización ambiental.", "education"]
];

const wasteTypes = [
  ["Redes y aparejos", "fish"],
  ["Cabos y cuerdas", "anchor"],
  ["Plásticos y envases", "recycle"],
  ["Metales", "gear"],
  ["Cristales", "spark"],
  ["Orgánicos y rechazo", "leaf"],
  ["Aceites, pinturas o baterías", "warning"]
];

const incentiveItems = [
  "Reducción parcial de tasas portuarias.",
  "Bonificaciones por entregar residuos clasificados.",
  "Distintivos verdes para embarcaciones sostenibles.",
  "Reconocimiento público anual a mejores prácticas.",
  "Sistema de puntos ambientales acumulables.",
  "Registro de residuos entregados para medir participación."
];

const educationActions = [
  ["Colegios e institutos", "Charlas, talleres y actividades sobre residuos marinos.", "education"],
  ["Voluntariado local", "Limpiezas de fondos y jornadas participativas.", "people"],
  ["Clubes de buceo", "Apoyo técnico en campañas de retirada de residuos.", "waves"],
  ["Ciudadanía y turistas", "Paneles claros y mensajes sencillos en el puerto.", "heart"]
];

const smartIdeas = [
  ["Sensores de llenado", "Avisos cuando un contenedor esté lleno.", "sensor"],
  ["Códigos QR", "Incidencias, información y participación rápida.", "qr"],
  ["Registro digital", "Trazabilidad de residuos entregados por embarcación.", "database"],
  ["Dashboard ambiental", "Evolución por tipo de residuo, fecha y zona.", "chart"],
  ["Mapa de puntos", "Ubicación clara de contenedores y zonas prioritarias.", "map"],
  ["Informes periódicos", "Datos para ajustar decisiones y comunicar avances.", "file"]
];

const actorBenefits = [
  ["Pescadores", "Menos residuos en zonas de trabajo, bonificaciones y reconocimiento de buenas prácticas.", "fish"],
  ["Operadores portuarios", "Mejor organización, menor coste de limpiezas descontroladas y más control ambiental.", "anchor"],
  ["Ciudadanía", "Mayor conciencia ambiental, participación y mejora del entorno costero.", "people"],
  ["Turismo", "Puerto más limpio, paisaje atractivo y Calpe como destino sostenible.", "spark"],
  ["Biodiversidad marina", "Menos residuos en fondos y reducción de riesgos para fauna y hábitats.", "biodiversity"],
  ["Administración local", "Datos para decidir mejor y reputación ambiental como ciudad costera inteligente.", "database"]
];

const kpis = [
  ["1.200 kg", "residuos recogidos"],
  ["35", "embarcaciones participantes"],
  ["8", "campañas educativas"],
  ["120", "voluntarios implicados"],
  ["6", "puntos de recogida selectiva"]
];

const indicators = [
  "Kilogramos recogidos por tipo de material.",
  "Número de embarcaciones participantes.",
  "Uso mensual de puntos de recogida.",
  "Reducción de residuos en limpiezas de fondos.",
  "Campañas educativas realizadas.",
  "Bonificaciones verdes concedidas.",
  "Evolución anual de la tasa de reciclaje.",
  "Incidencias registradas mediante QR."
];

const phases = [
  ["Diagnóstico inicial", "Puntos de acumulación, materiales frecuentes y necesidades reales del puerto."],
  ["Instalación de puntos", "Contenedores específicos, señalización y paneles informativos."],
  ["Incentivos verdes", "Bonificaciones, distintivos sostenibles y registro de buenas prácticas."],
  ["Educación y voluntariado", "Campañas en colegios, jornadas en puerto y limpiezas de fondos."],
  ["Medición de resultados", "Indicadores ambientales, participación y evolución de residuos."],
  ["Innovación futura", "Sensores, dashboard, QR y embarcaciones de recogida superficial."]
];

const expectedImpact = [
  ["Mayor tasa de reciclaje", "La separación específica facilitará la gestión y aumentará los materiales recuperados.", "recycle"],
  ["Reducción de residuos en el mar", "Actuar en el puerto reduce la probabilidad de llegada a superficie o fondos.", "waves"],
  ["Protección de la biodiversidad", "Menos residuos contribuyen a proteger fauna, comunidades bentónicas y hábitats.", "biodiversity"],
  ["Participación pesquera", "Los incentivos implican al sector como agente activo de la solución.", "fish"],
  ["Conciencia ciudadana", "La educación y el voluntariado generan cultura ambiental duradera.", "heart"],
  ["Mejora turística", "Un puerto limpio refuerza la imagen de Calpe ante visitantes.", "spark"],
  ["Gestión basada en datos", "Las herramientas inteligentes permiten evaluar el progreso y decidir mejor.", "chart"]
];

const pageLinks = [
  ["/problema", "Comprender el problema", "Contexto del puerto, residuos marinos e impactos ambientales.", "waves"],
  ["/propuesta", "Ver la propuesta", "Objetivo general, principios, beneficios y mapa de puntos.", "map"],
  ["/actuaciones", "Líneas de actuación", "Reciclaje portuario, incentivos verdes y educación ambiental.", "recycle"],
  ["/smart-port", "Smart Port", "Sensores, QR, registro digital, dashboard e indicadores.", "sensor"],
  ["/impacto", "Impacto y fases", "KPIs, fases de implantación y visión de futuro.", "chart"],
  ["/grupo", "Grupo de investigación", "Componentes del Grupo de Investigación C2.", "people"]
];

const teamMembers = [
  "Eduardo Sirgado Soler",
  "Lucia Martín González",
  "Rebeca Estellés Bordanova",
  "Andrea Cabeza Roche",
  "Luna Wolfmeir De",
  "Cristina Monferrer Llamas"
];

function Icon({ name }) {
  const icons = {
    recycle: "M7 7h5l-1.4-1.4L12 4l4 4-4 4-1.4-1.4L12 9H7a3 3 0 0 0-2.7 4.3l-1.8-.8A5 5 0 0 1 7 7Zm10 10h-5l1.4 1.4L12 20l-4-4 4-4 1.4 1.4L12 15h5a3 3 0 0 0 2.7-4.3l1.8-.8A5 5 0 0 1 17 17Z",
    fish: "M3 12s4-6 10-6c3.2 0 5.7 1.6 7.5 3.4L23 7v10l-2.5-2.4C18.7 16.4 16.2 18 13 18 7 18 3 12 3 12Zm9 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",
    people: "M8 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm8-1a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7ZM2 21c.5-4.3 2.7-7 6-7s5.5 2.7 6 7H2Zm11.5 0c-.2-2.2-.9-4-2-5.4 1-.7 2.2-1.1 3.6-1.1 3 0 5 2.5 5.5 6.5h-7.1Z",
    waves: "M3 8c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1v2c-2 0-2-1-4-1s-2 1-4 1-2-1-4-1-2 1-4 1V8Zm0 6c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1v2c-2 0-2-1-4-1s-2 1-4 1-2-1-4-1-2 1-4 1v-2Z",
    biodiversity: "M12 21c-4-2.4-7-5.5-7-10a7 7 0 0 1 14 0c0 4.5-3 7.6-7 10Zm0-5a5 5 0 0 0 4.9-4.1c-2.6-.3-4.9-1.8-6.3-4A5 5 0 0 0 12 16Z",
    award: "M12 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm-4 12 2.5 1.2L12 22l1.5-6.8L16 14v7l-4-2-4 2v-7Z",
    education: "M12 3 2 8l10 5 10-5-10-5Zm-6 8v4c2 2 4 3 6 3s4-1 6-3v-4l-6 3-6-3Z",
    anchor: "M12 3a3 3 0 0 1 1 5.8V16h3l-2-2 1.4-1.4L20 17.2 15.4 22 14 20.6l2.5-2.6H13v4h-2v-4H7.5L10 20.6 8.6 22 4 17.2l4.6-4.6L10 14l-2 2h3V8.8A3 3 0 0 1 12 3Z",
    gear: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm8 5-2 .7a6 6 0 0 1-.7 1.7l1 1.9-2 2-1.9-1a6 6 0 0 1-1.7.7L12 22h-2l-.7-2a6 6 0 0 1-1.7-.7l-1.9 1-2-2 1-1.9a6 6 0 0 1-.7-1.7L2 14v-3l2-.7a6 6 0 0 1 .7-1.7l-1-1.9 2-2 1.9 1a6 6 0 0 1 1.7-.7L10 2h2l.7 2a6 6 0 0 1 1.7.7l1.9-1 2 2-1 1.9a6 6 0 0 1 .7 1.7l2 .7v3Z",
    spark: "M12 2 14 9l7 3-7 3-2 7-2-7-7-3 7-3 2-7Z",
    leaf: "M20 4c-8.4.4-13.6 4.1-15.4 11.2C7.7 13 11 11.6 15 11c-4.3 1.8-7.2 4.5-8.7 8H4C4.9 9.9 10.2 4.8 20 4Z",
    warning: "M12 3 2 21h20L12 3Zm1 13h-2v2h2v-2Zm0-7h-2v5h2V9Z",
    heart: "M12 21S4 16.2 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 16.2 12 21 12 21Z",
    sensor: "M12 8a4 4 0 0 1 4 4h-2a2 2 0 0 0-2-2V8Zm0-4a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6V4Zm0 8 8 8-2 2-8-8 2-2ZM4 12a8 8 0 0 1 8-8v2a6 6 0 0 0-6 6H4Z",
    qr: "M4 4h7v7H4V4Zm2 2v3h3V6H6Zm7-2h7v7h-7V4Zm2 2v3h3V6h-3ZM4 13h7v7H4v-7Zm2 2v3h3v-3H6Zm9-2h2v2h-2v-2Zm3 0h2v4h-4v-2h2v-2Zm-5 5h2v2h-2v-2Zm4 0h3v2h-3v-2Z",
    database: "M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm-8 6c0 1.7 3.6 3 8 3s8-1.3 8-3v3c0 1.7-3.6 3-8 3s-8-1.3-8-3V9Zm0 6c0 1.7 3.6 3 8 3s8-1.3 8-3v3c0 1.7-3.6 3-8 3s-8-1.3-8-3v-3Z",
    chart: "M4 19h16v2H4V3h2v16Zm4-2V9h3v8H8Zm5 0V5h3v12h-3Zm5 0v-6h3v6h-3Z",
    map: "M9 4 15 2l6 2v17l-6-2-6 2-6-2V2l6 2Zm1 2v12l4-1.3V4.7L10 6Z",
    file: "M6 2h9l5 5v15H6V2Zm8 1.5V8h4.5L14 3.5ZM8 12h8v2H8v-2Zm0 4h8v2H8v-2Z"
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
      <path d={icons[name] || icons.leaf} />
    </svg>
  );
}

function Layout() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <main>
      <header className="siteNav">
        <NavLink className="brand" to="/">
          <span>Calpe</span>
          <strong>Smart Coast</strong>
        </NavLink>
        <nav className="desktopNav" aria-label="Navegación principal">
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button
          className={`menuToggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <div className={`mobileMenu ${menuOpen ? "open" : ""}`}>
        <nav aria-label="Navegación móvil">
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/problema" element={<ProblemPage />} />
        <Route path="/propuesta" element={<ProposalPage />} />
        <Route path="/actuaciones" element={<ActionsPage />} />
        <Route path="/smart-port" element={<SmartPortPage />} />
        <Route path="/impacto" element={<ImpactPage />} />
        <Route path="/grupo" element={<GroupPage />} />
      </Routes>
    </main>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function PageHero({ eyebrow, title, text, image, compact = false, children }) {
  return (
    <section className={`pageHero ${compact ? "compactHero" : ""}`} style={{ backgroundImage: image ? `url(${image})` : undefined }}>
      <div className="pageHeroContent reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {text && <p className="lead">{text}</p>}
        {children}
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={`sectionIntro ${align === "center" ? "center" : ""}`}>
      <p className="sectionLabel">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function InfoCard({ icon, title, text, to }) {
  const body = (
    <>
      <div className="iconBubble"><Icon name={icon} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </>
  );

  if (to) {
    return <Link className="infoCard routeCard reveal" to={to}>{body}<span>Entrar</span></Link>;
  }

  return <article className="infoCard reveal">{body}</article>;
}

function ImagePanel({ src, alt, label, title, text }) {
  return (
    <figure className="imagePanel reveal">
      <img src={src} alt={alt} />
      <figcaption>
        <span>{label}</span>
        <strong>{title}</strong>
        {text && <p>{text}</p>}
      </figcaption>
    </figure>
  );
}

function BulletList({ items }) {
  return (
    <ul className="checkList">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="Propuesta ambiental y tecnológica"
        title="Puerto de Calpe: hacia un modelo costero sostenible e inteligente"
        text="Una propuesta para reducir residuos marinos, mejorar la gestión del puerto y proteger la biodiversidad del entorno del Peñón de Ifach."
        image={heroImage}
      >
        <p className="heroNote">
          Un plan diseñado para reducir la presencia de residuos marinos, proteger los fondos del puerto y reforzar el compromiso de Calpe con el Mediterráneo.
        </p>
        <div className="heroActions">
          <Link className="button primary" to="/propuesta">Ver propuesta</Link>
          <Link className="button secondary" to="/actuaciones">Líneas de actuación</Link>
          <Link className="button ghost" to="/impacto">Impacto esperado</Link>
        </div>
      </PageHero>

      <section className="section">
        <SectionIntro
          eyebrow="Resumen de la iniciativa"
          title="Del problema ambiental a la acción"
          text="Cada sección muestra una parte del plan: entender el origen de los residuos, actuar sobre su gestión, implicar a la ciudadanía y medir los resultados."
          align="center"
        />
        <div className="cardGrid routeGrid">
          {pageLinks.map(([to, title, text, icon]) => (
            <InfoCard key={to} to={to} title={title} text={text} icon={icon} />
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="kpiStrip">
          {kpis.map(([value, label]) => (
            <article className="kpi reveal" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProblemPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Problema ambiental"
        title="El puerto como punto crítico para prevenir residuos marinos"
        text="La concentración de usos pesqueros, náuticos y turísticos genera presión sobre el entorno marino."
        image={heroImage}
      />
      <section className="section">
        <SectionIntro
          eyebrow="Contexto del puerto"
          title="¿Por qué actuar en el puerto de Calpe?"
          text="El puerto concentra actividad humana y, al mismo tiempo, capacidad de prevención ambiental. Actuar aquí permite evitar que muchos residuos lleguen al mar."
        />
        <div className="twoColumn">
          <div className="textBlock reveal">
            <p>En el área portuaria pueden acumularse redes, cabos, plásticos, envases, metales, cristales y materiales de difícil degradación.</p>
            <p>Cuando no se gestionan correctamente, pueden flotar, sedimentar en fondos o dispersarse por temporales y corrientes.</p>
            <ImagePanel
              src={recyclingImage}
              alt="Contenedores de reciclaje en un puerto mediterráneo"
              label="Prevención en origen"
              title="Puntos visibles y fáciles de usar"
              text="La gestión empieza donde se genera el residuo."
            />
          </div>
          <div className="cardGrid compact">
            {contextCards.map(([title, text, icon]) => <InfoCard key={title} title={title} text={text} icon={icon} />)}
          </div>
        </div>
      </section>
      <section className="section alt">
        <SectionIntro
          eyebrow="Impactos"
          title="Un problema que va más allá de la limpieza visual"
          text="Los residuos pueden afectar a fauna, fondos, usuarios, paisaje y gestión pública."
        />
        <div className="impactGrid">
          {problemImpacts.map(([title, text]) => (
            <article className="impactCard reveal" key={title}><span></span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>
    </>
  );
}

function ProposalPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Objetivo general"
        title="Transformar el puerto en un espacio limpio, sostenible e inteligente"
        text="La propuesta combina prevención, separación de residuos, incentivos ambientales, participación ciudadana y datos."
        image={portMapImage}
      />
      <section className="section">
        <div className="goalLayout">
          <div>
            <SectionIntro
              eyebrow="Propuesta"
              title="De limpiar tarde a prevenir, medir y mejorar"
              text="No se plantea una limpieza puntual, sino un cambio progresivo en la forma de gestionar residuos y de implicar a los usuarios del puerto."
            />
            <blockquote>La clave no es solo retirar residuos, sino evitar que vuelvan al mar.</blockquote>
          </div>
          <div className="objectivePanel reveal">
            <h3>Objetivos específicos</h3>
            <BulletList items={objectives} />
          </div>
        </div>
      </section>
      <section className="section alt">
        <SectionIntro
          eyebrow="Mapa de actuación"
          title="Puntos de recogida selectiva en zonas estratégicas"
          text="El plano resume una distribución orientativa cerca de muelles, lonja, accesos y zonas de tránsito."
        />
        <div className="portMap reveal">
          <img src={portMapImage} alt="Plano superior del puerto de Calpe con puntos de recogida selectiva" />
          <div className="mapLegend">
            <strong>Mapa visual del puerto</strong>
            <p>Puntos de recogida selectiva cerca de muelles, lonja, accesos y zonas de tránsito.</p>
            <div className="legendList">
              <span><i className="turquoise"></i> Contenedores reciclables</span>
              <span><i className="green"></i> Redes y aparejos</span>
              <span><i className="orange"></i> Residuos especiales</span>
            </div>
          </div>
        </div>
      </section>
      <BenefitsSection />
    </>
  );
}

function ActionsPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Líneas de actuación"
        title="Tres líneas para cambiar hábitos sin saturar la vida del puerto"
        text="Gestión de residuos, incentivos verdes y educación ambiental trabajan como un mismo sistema."
        image={recyclingImage}
      />
      <section className="section">
        <div className="lineCards">
          {actionLines.map(([title, text, icon], index) => (
            <article className="lineCard reveal" key={title}>
              <span className="lineNumber">0{index + 1}</span>
              <div className="iconBubble"><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="detailHeader">
          <span className="pill">Separación en origen</span>
          <span className="pill">Reciclaje portuario</span>
          <span className="pill">Prevención de vertidos</span>
        </div>
        <div className="twoColumn">
          <div className="textBlock reveal">
            <p className="sectionLabel">Línea 1</p>
            <h2>Contenedores específicos y puntos de recogida selectiva</h2>
            <p>La primera línea propone instalar contenedores para cada tipo de residuo en muelles, lonja, áreas de carga y descarga, accesos principales y zonas de actividad pesquera.</p>
          </div>
          <div className="visualStack">
            <ImagePanel src={recyclingImage} alt="Contenedores reciclables de colores colocados en el puerto" label="Reciclaje portuario" title="Contenedores para cada tipo de residuo" />
            <div className="wasteGrid">
              {wasteTypes.map(([label, icon]) => <article className="miniCard reveal" key={label}><Icon name={icon} /><span>{label}</span></article>)}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="twoColumn reversed">
          <div className="textBlock reveal">
            <p className="sectionLabel">Línea 2</p>
            <h2>Premiar a quienes cuidan el puerto</h2>
            <p>La sostenibilidad no debe percibirse solo como obligación administrativa. Las bonificaciones verdes reconocen a quienes colaboran activamente.</p>
            <p className="keyMessage">No basta con sancionar a quien contamina; también hay que premiar a quien protege el mar.</p>
          </div>
          <div className="rewardPanel reveal">
            <div className="badgeCard"><Icon name="award" /><strong>Distintivo sostenible</strong><span>Bronce · Plata · Oro</span></div>
            <div className="points">
              <div><span>+10</span> Entrega de residuos separados</div>
              <div><span>+20</span> Campaña de limpieza</div>
              <div><span>+30</span> Buenas prácticas verificadas</div>
            </div>
          </div>
        </div>
        <div className="listGrid">
          {incentiveItems.map((item) => <article className="listCard reveal" key={item}>{item}</article>)}
        </div>
      </section>
      <section className="section alt">
        <div className="twoColumn mediaFirst">
          <ImagePanel src={educationImage} alt="Voluntarios y estudiantes participando en una actividad ambiental junto al puerto" label="Educación ambiental" title="Aprender participando" />
          <SectionIntro eyebrow="Línea 3" title="Concienciación, voluntariado y educación ambiental" text="Un puerto sostenible no se construye solo con infraestructuras, sino con conciencia colectiva." />
        </div>
        <div className="cardGrid four">
          {educationActions.map(([title, text, icon]) => <InfoCard key={title} title={title} text={text} icon={icon} />)}
        </div>
      </section>
    </>
  );
}

function SmartPortPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Smart Port"
        title="Gestión ambiental basada en datos"
        text="Sensores, QR, registro digital e indicadores para saber qué residuos se generan, dónde y cuándo."
        image={smartPortImage}
      />
      <section className="section">
        <div className="smartGrid">
          <Dashboard />
          <div className="cardGrid compact">
            {smartIdeas.map(([title, text, icon]) => <InfoCard key={title} title={title} text={text} icon={icon} />)}
          </div>
        </div>
        <p className="centerQuote reveal">Lo que se mide, se puede mejorar.</p>
      </section>
      <IndicatorsSection />
    </>
  );
}

function ImpactPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Impacto y futuro"
        title="Un puerto más limpio, una costa más resiliente"
        text="La propuesta se mide con indicadores, se implanta por fases y evoluciona hacia soluciones más preventivas."
        image={cleanupBoatImage}
      />
      <section className="section">
        <div className="cardGrid impactCards">
          {expectedImpact.map(([title, text, icon]) => <InfoCard key={title} title={title} text={text} icon={icon} />)}
        </div>
      </section>
      <section className="section alt">
        <SectionIntro eyebrow="Fases" title="Fases de implantación" align="center" />
        <div className="timeline">
          {phases.map(([title, text], index) => (
            <article className="timelineItem reveal" key={title}><span>{index + 1}</span><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>
      <section className="future section">
        <div className="futureCard reveal">
          <div>
            <p className="sectionLabel">Visión de futuro</p>
            <h2>Embarcaciones especializadas de limpieza superficial</h2>
            <p>Una fase futura incorporaría embarcaciones capaces de retirar residuos flotantes antes de que se fragmenten, se dispersen o sedimenten en los fondos.</p>
            <p className="keyMessage">Cuanto antes se retira un residuo, menor es su impacto ambiental.</p>
          </div>
          <ImagePanel src={cleanupBoatImage} alt="Embarcación especializada retirando residuos flotantes en una marina" label="Recogida preventiva" title="Actuar antes de que el residuo se disperse" />
        </div>
      </section>
      <FinalCta />
    </>
  );
}

function GroupPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Equipo del proyecto"
        title="Grupo de Investigación C2"
        text="Componentes del equipo responsable de la propuesta Puerto de Calpe sostenible e inteligente."
        image={groupImage}
      />
      <section className="section teamSection">
        <SectionIntro
          eyebrow="Componentes"
          title="Equipo de trabajo"
          text="Una propuesta ambiental seria también necesita un equipo visible, organizado y reconocible."
          align="center"
        />
        <figure className="teamPhoto reveal">
          <img src={groupImage} alt="Foto de los componentes del Grupo de Investigación C2" />
        </figure>
        <div className="teamGrid">
          {teamMembers.map((member, index) => (
            <article className="teamCard reveal" key={member}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{member}</h3>
              <p>Grupo de Investigación C2</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Dashboard() {
  return (
    <div className="dashboard reveal">
      <img className="dashboardPhoto" src={smartPortImage} alt="Pantalla con indicadores ambientales y mapa de puntos de recogida del puerto" />
      <div className="dashboardTop"><span>Panel ambiental</span><strong>Gestión basada en datos</strong></div>
      <div className="bars">
        <span style={{ "--h": "72%" }}>Plástico</span>
        <span style={{ "--h": "46%" }}>Redes</span>
        <span style={{ "--h": "58%" }}>Metal</span>
        <span style={{ "--h": "32%" }}>Vidrio</span>
      </div>
      <div className="dashboardMetrics">
        <div><strong>84%</strong><span>capacidad media</span></div>
        <div><strong>12</strong><span>avisos QR</span></div>
        <div><strong>+18%</strong><span>reciclaje anual</span></div>
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="section">
      <SectionIntro eyebrow="Beneficios por actor" title="Una propuesta que beneficia a todo el entorno portuario" align="center" />
      <div className="cardGrid three">
        {actorBenefits.map(([title, text, icon]) => <InfoCard key={title} title={title} text={text} icon={icon} />)}
      </div>
    </section>
  );
}

function IndicatorsSection() {
  return (
    <section className="section alt">
      <SectionIntro eyebrow="Medición del éxito" title="¿Cómo sabremos si la propuesta funciona?" text="Los indicadores permiten evaluar si las acciones reducen residuos y aumentan la implicación portuaria." />
      <div className="kpiStrip">
        {kpis.map(([value, label]) => <article className="kpi reveal" key={label}><strong>{value}</strong><span>{label}</span></article>)}
      </div>
      <div className="indicatorLayout">
        <div className="indicatorList reveal">{indicators.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="donutCard reveal"><div className="donut"></div><strong>Reciclaje por tipo</strong><p>Plásticos, redes, metales, vidrio y residuos especiales.</p></div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="finalCta">
      <div className="reveal">
        <p className="sectionLabel">Referente de sostenibilidad costera</p>
        <h2>Calpe puede pasar de limpiar residuos a prevenirlos, medirlos y convertir a toda la comunidad portuaria en parte de la solución.</h2>
        <p>Esta propuesta beneficia a la biodiversidad marina, a la actividad pesquera, al turismo, a la ciudadanía y a la imagen futura de Calpe como ciudad costera sostenible.</p>
        <strong>Un puerto más limpio es también una ciudad más responsable con el mar.</strong>
      </div>
      <Link className="button primary" to="/">Volver al inicio</Link>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
