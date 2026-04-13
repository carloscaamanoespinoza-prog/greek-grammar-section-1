export interface Lesson {
  id: string;
  number: number;
  title: string;
  introduction: string;
  sections: Section[];
  vocabulary: VocabularyItem[];
  exercises: Exercise[];
}

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: Subsection[];
}

export interface Subsection {
  title: string;
  content: string;
  items?: string[];
}

export interface VocabularyItem {
  greek: string;
  type: string;
  spanish: string;
  frequency?: number;
}

export interface Exercise {
  id: string;
  type: 'flashcard' | 'multiple-choice' | 'true-false' | 'matching' | 'fill-blank' | 'translation';
  title: string;
  description?: string;
  items: ExerciseItem[];
}

export interface ExerciseItem {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  pairs?: { left: string; right: string }[];
}

// LECCIÓN 1: EL ALFABETO GRIEGO

export const lesson1: Lesson = {
  id: 'lesson-1',
  number: 1,
  title: 'El Alfabeto Griego - Escritura y Pronunciación',
  introduction: `Este es un manual de gramática griega del Nuevo Testamento enfocado en la morfología. 
  El libro está diseñado para estudiantes que desean leer y entender textos del Nuevo Testamento en su lengua original (griego helenístico o koiné).
  El enfoque es progresivo: comienza con fonética y alfabeto, luego morfología, y posteriormente sintaxis. 
  Cada lección incluye teoría gramatical clara y sencilla, vocabulario ordenado por frecuencia en el NT, y práctica con versículos del NT.`,
  
  sections: [
    {
      id: 'sec-1-1',
      title: '1.1 Las 24 Letras Griegas',
      content: `El alfabeto griego tiene 24 letras. Ambos alfabetos (griego y latino) derivan del alfabeto fenicio.
      Cada letra tiene un nombre específico en griego que facilita su memorización. La pronunciación sigue las normas erasmianas, 
      establecidas por Nebrija y Erasmo de Rotterdam en el siglo XVI.`,
      subsections: [
        {
          title: 'Tabla del Alfabeto',
          content: 'Las 24 letras del alfabeto griego con sus nombres, transcripciones y sonidos en castellano.',
          items: [
            'Α α - alfa - a - a larga o breve',
            'Β β - beta - b - b',
            'Γ γ - gamma - g - g suave',
            'Δ δ - delta - d - d',
            'Ε ε - épsilon - e - e siempre breve',
            'Ζ ζ - dseta - z - z',
            'Η η - eta - e - e siempre larga',
            'Θ θ - zeta - th - th',
            'Ι ι - iota - i - i',
            'Κ κ - cappa - c, k - c, k fuerte',
            'Λ λ - lambda - l - l',
            'Μ μ - my - m - m',
            'Ν ν - ny - n - n',
            'Ξ ξ - xi - x - x',
            'Ο ο - ómicron - o - o siempre breve',
            'Π π - pi - p - p',
            'Ρ ρ - rho - r - r',
            'Σ σ/ς - sigma - s - s',
            'Τ τ - tau - t - t',
            'Υ υ - ípsilon - y - u francesa',
            'Φ φ - phi - ph - ph',
            'Χ χ - chi - ch - ch',
            'Ψ ψ - psi - ps - ps',
            'Ω ω - omega - o - o siempre larga'
          ]
        }
      ]
    },
    {
      id: 'sec-1-2',
      title: '1.2 Clasificación de Sonidos',
      content: `Los sonidos del griego se clasifican en vocales y consonantes. Las vocales tienen características especiales de cantidad (breve/larga) 
      y cualidad (abierta/cerrada). Los diptongos son combinaciones de vocales que funcionan como una sola unidad sonora.`,
      subsections: [
        {
          title: 'Vocales (7 vocales)',
          content: 'Las vocales griegas se clasifican por cantidad y cualidad.',
          items: [
            'Por cantidad: Breves (ε, ο), Largas (η, ω), Ambivalentes (α, ι, υ)',
            'Por cualidad: Abiertas (ε, ο, η, ω, α), Cerradas (ι, υ)'
          ]
        },
        {
          title: 'Diptongos',
          content: 'Combinación de una vocal abierta con otra cerrada.',
          items: [
            'Propios: ai, ei, oi, au, eu, ou (pronuncia como u)',
            'Impropios: ᾳ, ῃ, ῳ (iota suscrita, no se pronuncia)'
          ]
        }
      ]
    },
    {
      id: 'sec-1-3',
      title: '1.3 Reglas de Pronunciación (Erasmiana)',
      content: `La pronunciación erasmiana es el estándar moderno para el griego antiguo. Cada letra tiene un sonido específico 
      que corresponde a las letras iniciales de su nombre en castellano, con algunas excepciones importantes.`,
      subsections: [
        {
          title: 'Reglas Principales',
          content: 'Normas para la pronunciación correcta del griego antiguo.',
          items: [
            'Vocales: suenan como en castellano, excepto υ (u francesa)',
            'Diptongos: se pronuncian como están escritos',
            'Consonantes aspiradas (c, f, q): en griego clásico son sordas aspiradas (kh, ph, th)',
            'Gamma (γ): siempre suave, pero ante otra γ, κ, χ, ξ suena nasal (como n)',
            'Kappa (κ): siempre fuerte',
            'Doble lambda (λλ): se pronuncian como dos l separadas',
            'Sigma (σ/ς): σ al inicio o medio de palabra; ς al final',
            'Consonantes dobles (x, ψ, ζ): representan ks, ps, ds/z'
          ]
        }
      ]
    },
    {
      id: 'sec-1-4',
      title: '1.4 Escritura Histórica',
      content: `El griego ha tenido diferentes estilos de escritura a lo largo de la historia. Los manuscritos más antiguos del Nuevo Testamento 
      utilizaban letras unciales (mayúsculas), mientras que posteriormente se desarrolló la escritura minúscula.`,
      subsections: [
        {
          title: 'Tipos de Escritura',
          content: 'Evolución de la escritura griega en los manuscritos.',
          items: [
            'Letras unciales: mayúsculas antiguas, usadas en los más antiguos manuscritos del NT',
            'Letras minúsculas/cursivas: desarrolladas alrededor del siglo IX d.C., permiten escritura sin levantar el lápiz'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    { greek: 'ἀπό', type: 'preposición + gen.', spanish: 'de, a partir de', frequency: 646 },
    { greek: 'διά', type: 'preposición', spanish: 'a causa de, por (acusativo); por, por medio de, durante (genitivo)', frequency: 667 },
    { greek: 'εἰ', type: 'conjunción', spanish: 'si (condicional)', frequency: 679 },
    { greek: 'ἐκ/ἐξ', type: 'preposición + gen.', spanish: 'desde, de', frequency: 914 }
  ],

  exercises: [
    {
      id: 'ex-1-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis del Alfabeto Griego',
      description: 'Traduce y analiza las letras griegas. Identifica nombre, pronunciación y clasificación de cantidad (breve/larga).',
      items: [
        { id: 'fc-1', question: 'Α α', correctAnswer: 'alfa (a larga o breve)', explanation: 'Α α = alfa: primera letra del alfabeto. Cantidad variable (breve o larga según contexto).' },
        { id: 'fc-2', question: 'Β β', correctAnswer: 'beta (b)', explanation: 'Β β = beta: segunda letra. Pronunciación: b oclusiva sonora.' },
        { id: 'fc-3', question: 'Γ γ', correctAnswer: 'gamma (g suave)', explanation: 'Γ γ = gamma: tercera letra. Pronunciación: g suave (ante consonantes velares: n nasal).' },
        { id: 'fc-4', question: 'Δ δ', correctAnswer: 'delta (d)', explanation: 'Δ δ = delta: cuarta letra. Pronunciación: d oclusiva sonora.' },
        { id: 'fc-5', question: 'Ε ε', correctAnswer: 'épsilon (e siempre breve)', explanation: 'Ε ε = épsilon: quinta letra. Cantidad: SIEMPRE breve (contrasta con η).' },
        { id: 'fc-6', question: 'Ζ ζ', correctAnswer: 'dseta (z)', explanation: 'Ζ ζ = dseta: sexta letra. Pronunciación: z (oclusiva fricativa sonora).' },
        { id: 'fc-7', question: 'Η η', correctAnswer: 'eta (e siempre larga)', explanation: 'Η η = eta: séptima letra. Cantidad: SIEMPRE larga (contrasta con ε).' },
        { id: 'fc-8', question: 'Θ θ', correctAnswer: 'zeta (th)', explanation: 'Θ θ = zeta: octava letra. Pronunciación: th (fricativa sorda).' },
        { id: 'fc-9', question: 'Ι ι', correctAnswer: 'iota (i)', explanation: 'Ι ι = iota: novena letra. Pronunciación: i (vocal cerrada anterior).' },
        { id: 'fc-10', question: 'Κ κ', correctAnswer: 'cappa (c, k fuerte)', explanation: 'Κ κ = cappa: décima letra. Pronunciación: k fuerte (oclusiva sorda velar).' },
        { id: 'fc-11', question: 'Λ λ', correctAnswer: 'lambda (l)', explanation: 'Λ λ = lambda: undécima letra. Pronunciación: l (consonante lateral).' },
        { id: 'fc-12', question: 'Μ μ', correctAnswer: 'my (m)', explanation: 'Μ μ = my: duodécima letra. Pronunciación: m (consonante nasal labial).' },
        { id: 'fc-13', question: 'Ν ν', correctAnswer: 'ny (n)', explanation: 'Ν ν = ny: decimotercera letra. Pronunciación: n (consonante nasal alveolar).' },
        { id: 'fc-14', question: 'Ξ ξ', correctAnswer: 'xi (x)', explanation: 'Ξ ξ = xi: decimocuarta letra. Pronunciación: x (fricativa sorda velar).' },
        { id: 'fc-15', question: 'Ο ο', correctAnswer: 'ómicron (o siempre breve)', explanation: 'Ο ο = ómicron: decimoquinta letra. Cantidad: SIEMPRE breve (contrasta con ω).' },
        { id: 'fc-16', question: 'Π π', correctAnswer: 'pi (p)', explanation: 'Π π = pi: decimosexta letra. Pronunciación: p (oclusiva sorda labial).' },
        { id: 'fc-17', question: 'Ρ ρ', correctAnswer: 'rho (r)', explanation: 'Ρ ρ = rho: decimoséptima letra. Pronunciación: r (consonante vibrante).' },
        { id: 'fc-18', question: 'Σ σ/ς', correctAnswer: 'sigma (s)', explanation: 'Σ σ/ς = sigma: decimoctava letra. Pronunciación: s. Formas: σ (inicio/medio), ς (final).' },
        { id: 'fc-19', question: 'Τ τ', correctAnswer: 'tau (t)', explanation: 'Τ τ = tau: decimonona letra. Pronunciación: t (oclusiva sorda alveolar).' },
        { id: 'fc-20', question: 'Υ υ', correctAnswer: 'ípsilon (u francesa)', explanation: 'Υ υ = ípsilon: vigésima letra. Pronunciación: u francesa/ü alemana (excepto en diptongos).' },
        { id: 'fc-21', question: 'Φ φ', correctAnswer: 'phi (ph)', explanation: 'Φ φ = phi: vigésima primera letra. Pronunciación: ph (fricativa sorda labial).' },
        { id: 'fc-22', question: 'Χ χ', correctAnswer: 'chi (ch)', explanation: 'Χ χ = chi: vigésima segunda letra. Pronunciación: ch (fricativa sorda velar).' },
        { id: 'fc-23', question: 'Ψ ψ', correctAnswer: 'psi (ps)', explanation: 'Ψ ψ = psi: vigésima tercera letra. Pronunciación: ps (fricativa sorda labial + s).' },
        { id: 'fc-24', question: 'Ω ω', correctAnswer: 'omega (o siempre larga)', explanation: 'Ω ω = omega: vigésima cuarta letra. Cantidad: SIEMPRE larga (contrasta con ο).' }
      ]
    },
    {
      id: 'ex-1-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Pronunciación',
      description: 'Identifica la pronunciación correcta de las letras griegas.',
      items: [
        {
          id: 'mc-1',
          question: '¿Cuál es la pronunciación correcta de la letra Γ γ?',
          options: ['g fuerte (como en "gato")', 'g suave (como en "gente")', 'j (como en "jota")'],
          correctAnswer: 1,
          explanation: 'La letra gamma (Γ γ) se pronuncia como g suave, excepto ante otras consonantes velares donde suena nasal.'
        },
        {
          id: 'mc-2',
          question: '¿Cuál es la diferencia entre ε (épsilon) y η (eta)?',
          options: ['La cantidad: ε es breve, η es larga', 'La pronunciación: ε suena como e, η suena como a', 'No hay diferencia'],
          correctAnswer: 0,
          explanation: 'Ambas se pronuncian como "e", pero ε es siempre breve y η es siempre larga. Esta distinción es importante en la morfología griega.'
        },
        {
          id: 'mc-3',
          question: '¿Cuál es la pronunciación correcta de la letra Υ υ?',
          options: ['u española (como en "uva")', 'u francesa o ü alemana', 'i (como en "sí")'],
          correctAnswer: 1,
          explanation: 'La letra ípsilon (Υ υ) se pronuncia como la u francesa o ü alemana, excepto en los diptongos donde se pronuncia como la u española.'
        },
        {
          id: 'mc-4',
          question: '¿Cómo se pronuncia la letra Σ σ/ς?',
          options: ['z (como en "zapato")', 's (como en "sí")', 'x (como en "taxi")'],
          correctAnswer: 1,
          explanation: 'La letra sigma se pronuncia siempre como "s". La diferencia entre σ y ς es solo de posición: σ se usa al inicio o medio de palabra, ς al final.'
        },
        {
          id: 'mc-5',
          question: '¿Qué sucede con la pronunciación de Γ cuando va seguida de κ?',
          options: ['Se pronuncia como g suave', 'Se pronuncia como n nasal', 'Se pronuncia como j'],
          correctAnswer: 1,
          explanation: 'Cuando gamma (Γ) va seguida de otra consonante velar (κ, χ, ξ, γ), suena como n nasal.'
        }
      ]
    },
    {
      id: 'ex-1-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Conceptos del Alfabeto',
      description: 'Determina si las afirmaciones sobre el alfabeto griego son correctas o incorrectas.',
      items: [
        {
          id: 'tf-1',
          question: 'El alfabeto griego tiene 26 letras, igual que el alfabeto latino.',
          correctAnswer: 0,
          explanation: 'Falso. El alfabeto griego tiene 24 letras, mientras que el latino tiene 26. Ambos derivan del alfabeto fenicio.'
        },
        {
          id: 'tf-2',
          question: 'La letra ε (épsilon) es siempre breve, mientras que η (eta) es siempre larga.',
          correctAnswer: 1,
          explanation: 'Verdadero. Esta es una distinción importante en griego: ε y η se pronuncian ambas como "e", pero tienen diferentes cantidades.'
        },
        {
          id: 'tf-3',
          question: 'Los diptongos propios están formados por una vocal abierta seguida de i o u.',
          correctAnswer: 1,
          explanation: 'Verdadero. Los diptongos propios (ai, ei, oi, au, eu, ou) combinan una vocal abierta con una cerrada.'
        },
        {
          id: 'tf-4',
          question: 'La pronunciación erasmiana es la única forma correcta de pronunciar el griego antiguo.',
          correctAnswer: 0,
          explanation: 'Falso. La pronunciación erasmiana es el estándar moderno, pero no sabemos con certeza cómo pronunciaban los griegos antiguos.'
        },
        {
          id: 'tf-5',
          question: 'Las letras unciales son las mayúsculas antiguas usadas en los manuscritos más antiguos del Nuevo Testamento.',
          correctAnswer: 1,
          explanation: 'Verdadero. Los manuscritos unciales están escritos completamente en mayúsculas. Las minúsculas se desarrollaron alrededor del siglo IX d.C.'
        }
      ]
    },
    {
      id: 'ex-1-4',
      type: 'matching',
      title: 'Columnas Paralelas: Letras y Nombres',
      description: 'Empareja cada letra griega con su nombre correcto.',
      items: [
        {
          id: 'match-1',
          description: 'Empareja las letras con sus nombres',
          correctAnswer: 0,
          pairs: [
            { left: 'Α α', right: 'alfa' },
            { left: 'Β β', right: 'beta' },
            { left: 'Γ γ', right: 'gamma' },
            { left: 'Δ δ', right: 'delta' },
            { left: 'Ε ε', right: 'épsilon' },
            { left: 'Ζ ζ', right: 'dseta' },
            { left: 'Η η', right: 'eta' },
            { left: 'Θ θ', right: 'zeta' }
          ]
        }
      ]
    },
    {
      id: 'ex-1-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Conceptos Clave',
      description: 'Completa las oraciones con las palabras correctas sobre el alfabeto griego.',
      items: [
        {
          id: 'fb-1',
          question: 'El alfabeto griego tiene _____ letras.',
          options: ['22', '24', '26'],
          correctAnswer: 1,
          explanation: 'El alfabeto griego tiene exactamente 24 letras.'
        },
        {
          id: 'fb-2',
          question: 'La letra ε (épsilon) es siempre _____, mientras que η (eta) es siempre larga.',
          options: ['abierta', 'breve', 'cerrada'],
          correctAnswer: 1,
          explanation: 'La cantidad de ε es siempre breve, a diferencia de η que es siempre larga.'
        },
        {
          id: 'fb-3',
          question: 'Los diptongos _____ están formados por una vocal abierta seguida de i o u.',
          options: ['impropios', 'propios', 'ambivalentes'],
          correctAnswer: 1,
          explanation: 'Los diptongos propios combinan una vocal abierta con una cerrada.'
        },
        {
          id: 'fb-4',
          question: 'La pronunciación _____ es el estándar moderno para el griego antiguo.',
          options: ['ática', 'erasmiana', 'jónica'],
          correctAnswer: 1,
          explanation: 'La pronunciación erasmiana, establecida por Nebrija y Erasmo de Rotterdam, es el estándar moderno.'
        },
        {
          id: 'fb-5',
          question: 'Las letras _____ son las mayúsculas antiguas usadas en los manuscritos más antiguos del Nuevo Testamento.',
          options: ['minúsculas', 'cursivas', 'unciales'],
          correctAnswer: 2,
          explanation: 'Las letras unciales son mayúsculas antiguas. Las minúsculas se desarrollaron posteriormente alrededor del siglo IX d.C.'
        }
      ]
    },
    {
      id: 'ex-1-6',
      type: 'translation',
      title: 'Traducción: Preposiciones del Nuevo Testamento',
      description: 'Traduce las preposiciones griegas al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-1',
          question: 'ἀπό (apo)',
          options: ['hacia', 'de, a partir de', 'con'],
          correctAnswer: 1,
          explanation: 'La preposición ἀπό significa "de" o "a partir de" y rige genitivo. Es muy frecuente en el Nuevo Testamento (646 veces).'
        },
        {
          id: 'tr-2',
          question: 'διά (dia)',
          options: ['a través de', 'a causa de, por (acusativo); por, por medio de, durante (genitivo)', 'sin'],
          correctAnswer: 1,
          explanation: 'La preposición διά tiene diferentes significados según el caso: con acusativo significa "a causa de, por"; con genitivo significa "por, por medio de, durante".'
        },
        {
          id: 'tr-3',
          question: 'εἰ (ei)',
          options: ['y', 'si (condicional)', 'o'],
          correctAnswer: 1,
          explanation: 'La conjunción εἰ significa "si" y se usa para introducir oraciones condicionales.'
        },
        {
          id: 'tr-4',
          question: 'ἐκ/ἐξ (ek/ex)',
          options: ['dentro de', 'desde, de', 'entre'],
          correctAnswer: 1,
          explanation: 'La preposición ἐκ (que se convierte en ἐξ ante vocales) significa "desde" o "de" y rige genitivo. Es muy frecuente en el NT (914 veces).'
        },
        {
          id: 'tr-5',
          question: '¿Cuál es la forma de la preposición ἐκ ante una vocal?',
          options: ['ἐκα', 'ἐξ', 'ἐκο'],
          correctAnswer: 1,
          explanation: 'Ante vocales, la preposición ἐκ se convierte en ἐξ para facilitar la pronunciación.'
        }
      ]
    }
  ]
};

export const lesson2: Lesson = {
  id: 'lesson-2',
  number: 2,
  title: 'Principales Leyes Fonéticas',
  introduction: `Las leyes fonéticas del griego son los cambios regulares que ocurren en los sonidos cuando se combinan palabras o cuando se forman palabras derivadas. Comprender estas leyes es fundamental para reconocer la morfología y sintaxis del griego del Nuevo Testamento. Este tema cubre la clasificación de sonidos (vocales, diptongos y consonantes), los signos ortográficos especiales (apóstrofo, coronis, diéresis) y las principales transformaciones fonéticas que ocurren en la lengua griega. El dominio de estas leyes permite al estudiante entender cómo se transforman las palabras y reconocer sus raíces etimológicas.`,

  sections: [
    {
      id: 'sec-2-1',
      title: '2.1 Clasificación de Vocales',
      content: `El griego tiene siete vocales que se clasifican según su cantidad (duración) y cualidad (apertura). Las vocales breves son ε y ο, mientras que las largas son η y ω. Las vocales ambivalentes (α, ι, υ) pueden ser breves o largas según el contexto. Esta distinción es fundamental para entender la pronunciación y la formación de palabras en griego.`,
      subsections: [
        {
          title: 'Vocales Breves',
          content: 'Las vocales breves tienen una duración corta en la pronunciación.',
          items: [
            'ε (épsilon): siempre breve, sonido como "e" en "peso"',
            'ο (ómicron): siempre breve, sonido como "o" en "poco"'
          ]
        },
        {
          title: 'Vocales Largas',
          content: 'Las vocales largas tienen una duración más larga en la pronunciación.',
          items: [
            'η (eta): siempre larga, sonido como "e" en "mesa"',
            'ω (omega): siempre larga, sonido como "o" en "cosa"'
          ]
        },
        {
          title: 'Vocales Ambivalentes',
          content: 'Estas vocales pueden ser breves o largas según el contexto.',
          items: [
            'α (alfa): puede ser breve o larga',
            'ι (iota): puede ser breve o larga',
            'υ (ípsilon): puede ser breve o larga'
          ]
        }
      ]
    },
    {
      id: 'sec-2-2',
      title: '2.2 Diptongos y Consonantes',
      content: `Los diptongos son combinaciones de una vocal abierta con una vocal cerrada. El griego distingue entre diptongos propios (donde el primer elemento es breve) e impropios (donde el primer elemento es largo). Las consonantes se clasifican en mudas u oclusivas (que no pueden pronunciarse sin vocal), líquidas, espirante y consonantes dobles.`,
      subsections: [
        {
          title: 'Diptongos Propios',
          content: 'Diptongos donde el primer elemento es breve más una vocal cerrada.',
          items: [
            'αι, ει, οι: combinaciones con iota',
            'αυ, ευ, ου: combinaciones con ípsilon (ου se pronuncia [u])'
          ]
        },
        {
          title: 'Diptongos Impropios',
          content: 'Diptongos donde el primer elemento es largo más una vocal cerrada.',
          items: [
            'αι, ηι, ωι: con iota adscrita en mayúsculas',
            'La iota adscrita se escribe al lado en mayúsculas (Α, Η, Ω)'
          ]
        },
        {
          title: 'Consonantes Mudas',
          content: 'Consonantes que no pueden pronunciarse sin la ayuda de una vocal.',
          items: [
            'Labiales: β (sonora), π (sorda), φ (aspirada)',
            'Dentales: δ (sonora), τ (sorda), θ (aspirada)',
            'Guturales: γ (sonora), κ (sorda), χ (aspirada)'
          ]
        },
        {
          title: 'Consonantes Líquidas y Dobles',
          content: 'Otras consonantes importantes en el griego.',
          items: [
            'Líquidas: λ, ρ, μ (nasal labial), ν (nasal dental)',
            'Espirante: ζ',
            'Dobles: ξ (= γσ, κσ, χσ), ψ (= βσ, πσ, φσ)'
          ]
        }
      ]
    },
    {
      id: 'sec-2-3',
      title: '2.3 Signos Ortográficos Especiales',
      content: `El griego utiliza varios signos ortográficos especiales para indicar cambios fonéticos y transformaciones en las palabras. El apóstrofo marca la elisión de una vocal breve o diptongo final. La coronis indica la fusión o contracción de vocales. La diéresis señala la separación de vocales que normalmente forman diptongo. Estos signos son esenciales para la correcta lectura e interpretación de textos griegos.`,
      subsections: [
        {
          title: 'Apóstrofo',
          content: 'Signo de elisión (supresión de una vocal breve o diptongo final cuando la siguiente palabra comienza por vocal o diptongo).',
          items: [
            'Ejemplo: ὑπ αὐτοῦ por ὑπό αὐτοῦ ("por él")',
            'Se usa principalmente en adverbios, preposiciones, conjunciones y partículas'
          ]
        },
        {
          title: 'Coronis',
          content: 'Signo de crasis (fusión o contracción de una vocal o diptongo final con la vocal o diptongo inicial de la palabra siguiente).',
          items: [
            'Ejemplo: κάκει por καί εἰκεί ("y allí")',
            'Ocurre principalmente con el artículo y la conjunción καί'
          ]
        },
        {
          title: 'Diéresis',
          content: 'Signo que indica la separación de dos vocales que habitualmente forman diptongo, pronunciándose por separado.',
          items: [
            'Ejemplo: ἀρχαϊκός se pronuncia [ar-ja-i-cós] en lugar de [ar-jai-cós]',
            'Se marca con dos puntos sobre la segunda vocal'
          ]
        }
      ]
    },
    {
      id: 'sec-2-4',
      title: '2.4 Principales Transformaciones Fonéticas',
      content: `Las leyes fonéticas del griego incluyen cambios regulares como la asimilación de consonantes, la desaparición de consonantes en ciertas posiciones, la formación de consonantes dobles, y las restricciones sobre consonantes finales de palabra. Estas transformaciones ocurren cuando se combinan morfemas o cuando se forman palabras derivadas. El conocimiento de estas leyes permite al estudiante reconocer raíces y entender la estructura morfológica de las palabras.`,
      subsections: [
        {
          title: 'Asimilación de Consonantes',
          content: 'Cambio de una consonante para que se parezca a otra consonante adyacente.',
          items: [
            'Una dental más otra dental se convierte en σ en la primera: π.e. πείσθησομαι por πείθ-θ-σομαι',
            'Cambios regulares que facilitan la pronunciación'
          ]
        },
        {
          title: 'Desaparición de Consonantes',
          content: 'Eliminación de consonantes en ciertas posiciones o contextos.',
          items: [
            'Las dentales y ν ante σ y κ desaparecen',
            'Los grupos νt, νθ, νφ se transforman por compensación de la vocal anterior'
          ]
        },
        {
          title: 'Consonantes Finales de Palabra',
          content: 'Restricciones sobre qué consonantes pueden aparecer al final de una palabra griega.',
          items: [
            'Las palabras griegas terminan en vocal o en ν, ρ, ς, ψ, ξ',
            'Todas las demás consonantes finales desaparecen, excepto μ que se transforma en ν'
          ]
        },
        {
          title: 'Consonantes Móviles',
          content: 'Consonantes que aparecen o desaparecen según el contexto fonético.',
          items: [
            'La ν eufónica o efelcística se utiliza ante vocal para evitar el hiato',
            'La κ se añade al adverbio de negación οὐ ante vocal aspirada',
            'La ς se añade al adverbio οὗτος y a la preposición ἐκ delante de vocal'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'ἡ φωνή',
      type: 'sustantivo femenino',
      spanish: 'sonido, voz',
      frequency: 143
    },
    {
      greek: 'ἡ φωνητική',
      type: 'adjetivo femenino',
      spanish: 'fonética',
      frequency: 0
    },
    {
      greek: 'ὁ δίφθογγος',
      type: 'sustantivo masculino',
      spanish: 'diptongo',
      frequency: 0
    },
    {
      greek: 'ἡ σύμφωνος',
      type: 'sustantivo femenino',
      spanish: 'consonante',
      frequency: 0
    },
    {
      greek: 'ἡ ἀφαίρεσις',
      type: 'sustantivo femenino',
      spanish: 'elisión',
      frequency: 0
    },
    {
      greek: 'ἡ κρᾶσις',
      type: 'sustantivo femenino',
      spanish: 'crasis, fusión',
      frequency: 0
    }
  ],

  exercises: [
    {
      id: 'ex-2-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Vocales y Diptongos',
      description: 'Traduce y analiza vocales y diptongos. Identifica cantidad (breve/larga) y clasificación fonética.',
      items: [
        {
          id: 'fc-2-1',
          question: 'ε',
          options: ['Vocal breve'],
          correctAnswer: 0,
          explanation: 'ε = épsilon: vocal SIEMPRE breve. Pronunciación: e (como en "peso"). Contrasta con η (larga).'
        },
        {
          id: 'fc-2-2',
          question: 'η',
          options: ['Vocal larga'],
          correctAnswer: 0,
          explanation: 'η = eta: vocal SIEMPRE larga. Pronunciación: e (como en "mesa"). Contrasta con ε (breve).'
        },
        {
          id: 'fc-2-3',
          question: 'ο',
          options: ['Vocal breve'],
          correctAnswer: 0,
          explanation: 'ο = ómicron: vocal SIEMPRE breve. Pronunciación: o (como en "poco"). Contrasta con ω (larga).'
        },
        {
          id: 'fc-2-4',
          question: 'ω',
          options: ['Vocal larga'],
          correctAnswer: 0,
          explanation: 'ω = omega: vocal SIEMPRE larga. Pronunciación: o (como en "cosa"). Contrasta con ο (breve).'
        },
        {
          id: 'fc-2-5',
          question: 'αι, ει, οι',
          options: ['Diptongos propios'],
          correctAnswer: 0,
          explanation: 'αι, ει, οι = diptongos propios: vocal breve + iota. Clasificación: αι (labial), ει (dental), οι (velar).'
        }
      ]
    },
    {
      id: 'ex-2-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Leyes Fonéticas',
      description: 'Identifica correctamente las leyes fonéticas y transformaciones del griego.',
      items: [
        {
          id: 'mc-2-1',
          question: '¿Cuántas vocales tiene el griego?',
          options: ['Cinco', 'Seis', 'Siete'],
          correctAnswer: 2,
          explanation: 'El griego tiene siete vocales: ε, ο (breves), η, ω (largas), y α, ι, υ (ambivalentes).'
        },
        {
          id: 'mc-2-2',
          question: '¿Qué es un diptongo propio?',
          options: ['Una vocal larga más consonante', 'Una vocal abierta breve más vocal cerrada', 'Una vocal abierta larga más vocal cerrada'],
          correctAnswer: 1,
          explanation: 'Un diptongo propio es la combinación de una vocal abierta breve (ε, ο) con una vocal cerrada (ι, υ): αι, ει, οι, αυ, ευ, ου.'
        },
        {
          id: 'mc-2-3',
          question: '¿Cuál es la función del apóstrofo en griego?',
          options: ['Marcar la contracción de vocales', 'Marcar la elisión de una vocal', 'Marcar la separación de vocales'],
          correctAnswer: 1,
          explanation: 'El apóstrofo marca la elisión (supresión) de una vocal breve o diptongo final cuando la palabra siguiente comienza por vocal.'
        },
        {
          id: 'mc-2-4',
          question: '¿Qué es la crasis?',
          options: ['Elisión de una vocal', 'Fusión o contracción de vocales', 'Separación de vocales'],
          correctAnswer: 1,
          explanation: 'La crasis es la fusión o contracción de una vocal o diptongo final con la vocal o diptongo inicial de la palabra siguiente, marcada con coronis.'
        },
        {
          id: 'mc-2-5',
          question: '¿Cuáles son las consonantes mudas guturales?',
          options: ['β, δ, γ', 'γ, κ, χ', 'π, τ, κ'],
          correctAnswer: 1,
          explanation: 'Las consonantes mudas guturales son γ (sonora), κ (sorda) y χ (aspirada). Las mudas se dividen en labiales, dentales y guturales.'
        }
      ]
    },
    {
      id: 'ex-2-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Fonética Griega',
      description: 'Determina si las afirmaciones sobre leyes fonéticas son verdaderas o falsas.',
      items: [
        {
          id: 'tf-2-1',
          question: 'La ε (épsilon) es una vocal siempre breve.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La ε (épsilon) es una vocal siempre breve que suena como "e" en "peso".'
        },
        {
          id: 'tf-2-2',
          question: 'El diptongo αι es un diptongo impropio.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El diptongo αι es un diptongo propio (vocal breve + iota). Los impropios tienen vocal larga + iota (αι, ηι, ωι).'
        },
        {
          id: 'tf-2-3',
          question: 'El apóstrofo marca la fusión de vocales.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El apóstrofo marca la elisión (supresión) de una vocal. La coronis marca la fusión o crasis.'
        },
        {
          id: 'tf-2-4',
          question: 'Las consonantes mudas pueden pronunciarse sin la ayuda de una vocal.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Las consonantes mudas u oclusivas NO pueden pronunciarse sin la ayuda de una vocal. Por eso se llaman "mudas".'
        },
        {
          id: 'tf-2-5',
          question: 'La diéresis indica la separación de vocales que normalmente forman diptongo.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La diéresis (dos puntos) señala que dos vocales que normalmente forman diptongo se pronuncian por separado.'
        }
      ]
    },
    {
      id: 'ex-2-4',
      type: 'matching',
      title: 'Columnas Paralelas: Vocales y Consonantes',
      description: 'Empareja cada vocal o consonante con su clasificación.',
      items: [
        {
          id: 'match-2-1',
          description: 'Empareja las vocales y consonantes con sus clasificaciones',
          pairs: [
            { left: 'ε (épsilon)', right: 'Vocal breve' },
            { left: 'η (eta)', right: 'Vocal larga' },
            { left: 'ο (ómicron)', right: 'Vocal breve' },
            { left: 'ω (omega)', right: 'Vocal larga' },
            { left: 'α (alfa)', right: 'Vocal ambivalente' },
            { left: 'β, π, φ', right: 'Consonantes mudas labiales' },
            { left: 'δ, τ, θ', right: 'Consonantes mudas dentales' },
            { left: 'γ, κ, χ', right: 'Consonantes mudas guturales' }
          ],
          correctAnswer: 0,
          explanation: 'Las vocales breves son ε y ο, las largas son η y ω. Las consonantes mudas se dividen en labiales (β, π, φ), dentales (δ, τ, θ) y guturales (γ, κ, χ).'
        }
      ]
    },
    {
      id: 'ex-2-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología Fonética',
      description: 'Completa las oraciones con los términos correctos sobre fonética.',
      items: [
        {
          id: 'fb-2-1',
          question: 'El griego tiene _____ vocales que se clasifican según cantidad y cualidad.',
          options: ['cinco', 'seis', 'siete'],
          correctAnswer: 2,
          explanation: 'El griego tiene siete vocales: ε, ο (breves), η, ω (largas), y α, ι, υ (ambivalentes).'
        },
        {
          id: 'fb-2-2',
          question: 'Un _____ es la combinación de una vocal abierta con una vocal cerrada.',
          options: ['triptongo', 'diptongo', 'monoptongo'],
          correctAnswer: 1,
          explanation: 'Un diptongo es la combinación de una vocal abierta (breve o larga) con una vocal cerrada (ι o υ).'
        },
        {
          id: 'fb-2-3',
          question: 'El _____ marca la elisión de una vocal breve o diptongo final.',
          options: ['coronis', 'apóstrofo', 'diéresis'],
          correctAnswer: 1,
          explanation: 'El apóstrofo marca la elisión (supresión) de una vocal breve o diptongo final cuando la palabra siguiente comienza por vocal.'
        },
        {
          id: 'fb-2-4',
          question: 'Las consonantes _____ no pueden pronunciarse sin la ayuda de una vocal.',
          options: ['líquidas', 'mudas', 'espirantes'],
          correctAnswer: 1,
          explanation: 'Las consonantes mudas u oclusivas (β, π, φ, δ, τ, θ, γ, κ, χ) no pueden pronunciarse sin vocal.'
        },
        {
          id: 'fb-2-5',
          question: 'La _____ indica la separación de vocales que normalmente forman diptongo.',
          options: ['crasis', 'diéresis', 'elisión'],
          correctAnswer: 1,
          explanation: 'La diéresis (dos puntos sobre la segunda vocal) señala que dos vocales se pronuncian por separado.'
        }
      ]
    },
    {
      id: 'ex-2-6',
      type: 'translation',
      title: 'Traducción: Términos Fonéticos',
      description: 'Traduce los términos griegos al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-2-1',
          question: 'ἡ φωνή',
          options: ['la letra', 'la voz, el sonido', 'la palabra'],
          correctAnswer: 1,
          explanation: 'ἡ φωνή significa "la voz" o "el sonido". Es un término fundamental en fonética.'
        },
        {
          id: 'tr-2-2',
          question: 'ὁ δίφθογγος',
          options: ['la vocal', 'el diptongo', 'la consonante'],
          correctAnswer: 1,
          explanation: 'ὁ δίφθογγος significa "el diptongo", que es la combinación de una vocal abierta con una vocal cerrada.'
        },
        {
          id: 'tr-2-3',
          question: 'ἡ ἀφαίρεσις',
          options: ['la contracción', 'la elisión', 'la separación'],
          correctAnswer: 1,
          explanation: 'ἡ ἀφαίρεσις significa "la elisión", que es la supresión de una vocal breve o diptongo final.'
        },
        {
          id: 'tr-2-4',
          question: '¿Cuál es el signo que marca la elisión?',
          options: ['Coronis', 'Apóstrofo', 'Diéresis'],
          correctAnswer: 1,
          explanation: `El apóstrofo (') marca la elisión de una vocal breve o diptongo final cuando la palabra siguiente comienza por vocal.`
        },
        {
          id: 'tr-2-5',
          question: '¿Cuál es el signo que marca la fusión de vocales?',
          options: ['Diéresis', 'Coronis', 'Apóstrofo'],
          correctAnswer: 1,
          explanation: 'La coronis marca la crasis o fusión de una vocal o diptongo final con la vocal o diptongo inicial de la palabra siguiente.'
        }
      ]
    }
  ]
};

export const lesson3: Lesson = {
  id: 'lesson-3',
  number: 3,
  title: 'Generalidades de la Declinación: Género, Número y Casos',
  introduction: `La declinación es el sistema de variación de las palabras flexionadas nominales según género, número y caso. En griego, las palabras se clasifican en flexionadas (variables) e invariables. Las palabras flexionadas nominales incluyen sustantivos, adjetivos, pronombres, artículos y participios. El griego distingue tres géneros (masculino, femenino y neutro), tres números (singular, plural y dual), y cinco casos (nominativo, genitivo, dativo, acusativo y vocativo). Comprender estas categorías es fundamental para reconocer la función sintáctica de cada palabra en el texto del Nuevo Testamento.`,

  sections: [
    {
      id: 'sec-3-1',
      title: '3.1 Palabras Flexionadas e Invariables',
      content: `En griego se distinguen dos clases fundamentales de palabras: las flexionadas (o variables) y las invariables (o no flexivas). Las palabras flexionadas son aquellas que cambian su forma según su función gramatical. Se dividen en dos grupos: las declinadas (flexión nominal) y las conjugadas (flexión verbal). Las palabras invariables son aquellas que no cambian su forma y mantienen la misma estructura en cualquier contexto.`,
      subsections: [
        {
          title: 'Palabras Flexionadas - Flexión Nominal',
          content: 'Las palabras con flexión nominal son aquellas que se declinan según género, número y caso.',
          items: [
            'Sustantivos: palabras que designan personas, cosas o conceptos',
            'Adjetivos: palabras que modifican a los sustantivos',
            'Pronombres: palabras que sustituyen a los sustantivos',
            'Artículos: palabras que acompañan a los sustantivos',
            'Participios: formas verbales que funcionan como adjetivos'
          ]
        },
        {
          title: 'Palabras Flexionadas - Flexión Verbal',
          content: 'El verbo es la única palabra con flexión verbal, que varía según persona, número, tiempo, modo y voz.',
          items: [
            'Verbos: palabras que expresan acciones, estados o procesos'
          ]
        },
        {
          title: 'Palabras Invariables',
          content: 'Las palabras invariables no cambian su forma y mantienen la misma estructura en cualquier contexto.',
          items: [
            'Adverbios: modifican verbos, adjetivos u otros adverbios',
            'Preposiciones: indican relaciones entre palabras',
            'Conjunciones: unen palabras u oraciones',
            'Interjecciones: expresan emociones o exclamaciones',
            'Partículas: palabras funcionales que modifican el significado'
          ]
        }
      ]
    },
    {
      id: 'sec-3-2',
      title: '3.2 Los Tres Géneros',
      content: `El griego distingue tres géneros: masculino, femenino y neutro. El género es una categoría gramatical que afecta principalmente a sustantivos y adjetivos. En muchos casos, el género tiene una correspondencia semántica (los sustantivos que designan seres masculinos suelen ser masculinos), pero no siempre es así. El género neutro solo se opone al animado (masculino y femenino) en los casos nominativo, vocativo y acusativo del singular y plural. Es importante notar que no hay reglas precisas para determinar el género de una palabra, por lo que debe aprenderse junto con el sustantivo.`,
      subsections: [
        {
          title: 'Género Masculino',
          content: 'El género masculino se usa para designar seres o conceptos de género masculino, aunque no siempre corresponde a la realidad semántica.',
          items: [
            'Ejemplo: ὁ βίος (ho bios) - "la vida" (masculino en griego)',
            'Ejemplo: ὁ λόγος (ho logos) - "la palabra" (masculino en griego)',
            'Ejemplo: ὁ ἄνθρωπος (ho anthropos) - "el hombre"'
          ]
        },
        {
          title: 'Género Femenino',
          content: 'El género femenino se usa para designar seres o conceptos de género femenino.',
          items: [
            'Ejemplo: ἡ ἔρημος (he eremos) - "el desierto" (femenino en griego)',
            'Ejemplo: ἡ ψυχή (he psyche) - "el alma" (femenino en griego)',
            'Ejemplo: ἡ γυνή (he gyne) - "la mujer"'
          ]
        },
        {
          title: 'Género Neutro',
          content: 'El género neutro se opone al animado solo en nominativo, vocativo y acusativo del singular y plural.',
          items: [
            'Ejemplo: τὸ ὄνομα (to onoma) - "el nombre" (neutro en griego)',
            'Ejemplo: τὸ παιδίον (to paidion) - "el niño" (neutro en griego)',
            'Ejemplo: τὸ φῶς (to phos) - "la luz"'
          ]
        }
      ]
    },
    {
      id: 'sec-3-3',
      title: '3.3 Los Tres Números',
      content: `El griego distingue tres números: singular, plural y dual. El singular designa una persona u objeto, el plural designa múltiples personas u objetos. El dual es un número especial que designa exactamente dos personas u objetos, especialmente cuando se considera que forman una pareja natural e indisoluble. En el Nuevo Testamento, el dual es relativamente raro, pero es importante reconocerlo cuando aparece, ya que puede afectar la interpretación del texto.`,
      subsections: [
        {
          title: 'Número Singular',
          content: 'El singular designa una única persona, cosa o concepto.',
          items: [
            'Ejemplo: ὁ λόγος (ho logos) - "la palabra" (singular)',
            'Ejemplo: ἡ ψυχή (he psyche) - "el alma" (singular)',
            'Ejemplo: τὸ ὄνομα (to onoma) - "el nombre" (singular)'
          ]
        },
        {
          title: 'Número Plural',
          content: 'El plural designa múltiples personas, cosas o conceptos.',
          items: [
            'Ejemplo: οἱ λόγοι (hoi logoi) - "las palabras" (plural)',
            'Ejemplo: αἱ ψυχαί (hai psychai) - "las almas" (plural)',
            'Ejemplo: τὰ ὀνόματα (ta onomata) - "los nombres" (plural)'
          ]
        },
        {
          title: 'Número Dual',
          content: 'El dual designa exactamente dos personas u objetos, especialmente parejas naturales o indisolubles.',
          items: [
            'Ejemplo: τὼ ὀφθαλμώ (to ophthalmo) - "los dos ojos" (dual)',
            'Ejemplo: τὼ ὦτε (to ote) - "los dos oídos" (dual)',
            'Nota: El dual es muy raro en el Nuevo Testamento'
          ]
        }
      ]
    },
    {
      id: 'sec-3-4',
      title: '3.4 Los Cinco Casos',
      content: `El griego posee cinco casos principales que indican la función sintáctica de la palabra en la oración: nominativo, genitivo, dativo, acusativo y vocativo. Cada caso tiene funciones específicas y se usa con preposiciones particulares. El nominativo es el caso del sujeto, el genitivo expresa posesión o relación, el dativo indica el objeto indirecto o la ubicación, el acusativo es el caso del objeto directo, y el vocativo se usa para dirigirse a alguien. La comprensión de estos casos es esencial para analizar la sintaxis griega.`,
      subsections: [
        {
          title: 'Nominativo',
          content: 'El nominativo es el caso del sujeto de la oración. También se usa en predicados nominales después de verbos copulativos como εἰμί (ser).',
          items: [
            'Función: sujeto de la oración',
            'Ejemplo: ὁ λόγος ἐστὶν ἀγαθός - "La palabra es buena"',
            'Ejemplo: ὁ θεὸς ἀγαπᾷ τὸν κόσμον - "Dios ama al mundo"'
          ]
        },
        {
          title: 'Genitivo',
          content: 'El genitivo expresa posesión, relación, origen, causa o materia. Es el caso más versátil del griego.',
          items: [
            'Función: posesión, relación, origen',
            'Ejemplo: ὁ λόγος τοῦ θεοῦ - "la palabra de Dios"',
            'Ejemplo: ἡ ἀρχὴ τῆς ἱστορίας - "el principio de la historia"'
          ]
        },
        {
          title: 'Dativo',
          content: 'El dativo indica el objeto indirecto, la ubicación, el instrumento o el agente. En el Nuevo Testamento, el dativo es menos frecuente que en el griego clásico.',
          items: [
            'Función: objeto indirecto, ubicación, instrumento',
            'Ejemplo: δίδωμι τῷ μαθητῇ - "doy al discípulo"',
            'Ejemplo: γράφω τῇ χειρί - "escribo con la mano"'
          ]
        },
        {
          title: 'Acusativo',
          content: 'El acusativo es el caso del objeto directo. También se usa con ciertas preposiciones para indicar movimiento o dirección.',
          items: [
            'Función: objeto directo, movimiento',
            'Ejemplo: ἀγαπῶ τὸν θεόν - "amo a Dios"',
            'Ejemplo: πορεύομαι εἰς τὴν Ἱεροσόλυμα - "voy a Jerusalén"'
          ]
        },
        {
          title: 'Vocativo',
          content: 'El vocativo se usa para dirigirse directamente a una persona. En el Nuevo Testamento, es común en invocaciones y oraciones.',
          items: [
            'Función: dirigirse a alguien',
            'Ejemplo: ὦ κύριε - "¡Oh Señor!"',
            'Ejemplo: ὦ Θεὸς - "¡Oh Dios!"'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'ἡ δεκλινάσις',
      type: 'sustantivo femenino',
      spanish: 'declinación',
      frequency: 0
    },
    {
      greek: 'τὸ γένος',
      type: 'sustantivo neutro',
      spanish: 'género',
      frequency: 10
    },
    {
      greek: 'τὸ ὄνομα',
      type: 'sustantivo neutro',
      spanish: 'nombre',
      frequency: 231
    },
    {
      greek: 'ὁ ἀριθμός',
      type: 'sustantivo masculino',
      spanish: 'número',
      frequency: 18
    },
    {
      greek: 'ἡ πτῶσις',
      type: 'sustantivo femenino',
      spanish: 'caso',
      frequency: 0
    },
    {
      greek: 'ὁ λόγος',
      type: 'sustantivo masculino',
      spanish: 'palabra',
      frequency: 330
    }
  ],

  exercises: [
    {
      id: 'ex-3-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Casos Griegos',
      description: 'Traduce y analiza los casos griegos. Identifica funciones sintácticas y usos en el Nuevo Testamento.',
      items: [
        {
          id: 'fc-3-1',
          question: 'Nominativo',
          options: ['Caso del sujeto y predicado nominal'],
          correctAnswer: 0,
          explanation: 'Nominativo = caso del sujeto. Función: sujeto de la oración, predicado nominal. Ejemplo: ὁ λόγος ἐστιν ἀγαθός.'
        },
        {
          id: 'fc-3-2',
          question: 'Genitivo',
          options: ['Caso de posesión, relación y origen'],
          correctAnswer: 0,
          explanation: 'Genitivo = caso de posesión/relación. Funciones: posesión, origen, causa, materia. Ejemplo: ὁ λόγος τοῦ θεοῦ.'
        },
        {
          id: 'fc-3-3',
          question: 'Dativo',
          options: ['Caso del objeto indirecto, ubicación e instrumento'],
          correctAnswer: 0,
          explanation: 'Dativo = caso de objeto indirecto/ubicación. Funciones: objeto indirecto, ubicación, instrumento. Ejemplo: δίδωμι τῶ μαθητῇ.'
        },
        {
          id: 'fc-3-4',
          question: 'Acusativo',
          options: ['Caso del objeto directo y movimiento'],
          correctAnswer: 0,
          explanation: 'Acusativo = caso de objeto directo/movimiento. Funciones: objeto directo, movimiento, dirección. Ejemplo: ἀγαπῶ τὸν θεόν.'
        },
        {
          id: 'fc-3-5',
          question: 'Vocativo',
          options: ['Caso para dirigirse a alguien'],
          correctAnswer: 0,
          explanation: 'Vocativo = caso de invocación. Función: dirigirse directamente a una persona. Ejemplo: ὠ κύριε (Oh Señor).'
        }
      ]
    },
    {
      id: 'ex-3-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Categorías Gramaticales',
      description: 'Identifica correctamente las categorías gramaticales del griego.',
      items: [
        {
          id: 'mc-3-1',
          question: '¿Cuántos géneros tiene el griego?',
          options: ['Dos: masculino y femenino', 'Tres: masculino, femenino y neutro', 'Cuatro: masculino, femenino, neutro y común'],
          correctAnswer: 1,
          explanation: 'El griego distingue tres géneros: masculino, femenino y neutro. El neutro solo se opone al animado en nominativo, vocativo y acusativo.'
        },
        {
          id: 'mc-3-2',
          question: '¿Cuántos números tiene el griego?',
          options: ['Dos: singular y plural', 'Tres: singular, plural y dual', 'Cuatro: singular, plural, dual y colectivo'],
          correctAnswer: 1,
          explanation: 'El griego distingue tres números: singular (una unidad), plural (múltiples unidades) y dual (exactamente dos unidades).'
        },
        {
          id: 'mc-3-3',
          question: '¿Cuántos casos tiene el griego?',
          options: ['Tres: nominativo, acusativo y genitivo', 'Cuatro: nominativo, acusativo, genitivo y dativo', 'Cinco: nominativo, genitivo, dativo, acusativo y vocativo'],
          correctAnswer: 2,
          explanation: 'El griego posee cinco casos principales: nominativo (sujeto), genitivo (posesión), dativo (objeto indirecto), acusativo (objeto directo) y vocativo (invocación).'
        },
        {
          id: 'mc-3-4',
          question: '¿Cuál es la función principal del nominativo?',
          options: ['Expresar posesión', 'Ser el sujeto de la oración', 'Indicar el objeto directo'],
          correctAnswer: 1,
          explanation: 'El nominativo es el caso del sujeto de la oración. También se usa en predicados nominales después de verbos copulativos como εἰμί (ser).'
        },
        {
          id: 'mc-3-5',
          question: '¿Qué palabras tienen flexión nominal?',
          options: ['Solo sustantivos', 'Sustantivos, adjetivos y verbos', 'Sustantivos, adjetivos, pronombres, artículos y participios'],
          correctAnswer: 2,
          explanation: 'Las palabras con flexión nominal incluyen sustantivos, adjetivos, pronombres, artículos y participios. El verbo tiene flexión verbal.'
        }
      ]
    },
    {
      id: 'ex-3-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Conceptos de Declinación',
      description: 'Determina si las afirmaciones sobre declinación son verdaderas o falsas.',
      items: [
        {
          id: 'tf-3-1',
          question: 'El género neutro se opone al animado en todos los casos.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El género neutro solo se opone al animado (masculino y femenino) en nominativo, vocativo y acusativo del singular y plural.'
        },
        {
          id: 'tf-3-2',
          question: 'El dual designa exactamente dos personas u objetos.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El dual es un número especial que designa exactamente dos personas u objetos, especialmente parejas naturales e indisolubles.'
        },
        {
          id: 'tf-3-3',
          question: 'El genitivo es el caso del objeto directo.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El acusativo es el caso del objeto directo. El genitivo expresa posesión, relación, origen, causa y materia.'
        },
        {
          id: 'tf-3-4',
          question: 'Las palabras invariables incluyen adverbios, preposiciones y conjunciones.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Las palabras invariables son aquellas que no cambian su forma e incluyen adverbios, preposiciones, conjunciones, interjecciones y partículas.'
        },
        {
          id: 'tf-3-5',
          question: 'El vocativo se usa para expresar posesión.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El vocativo se usa para dirigirse directamente a una persona. El genitivo expresa posesión.'
        }
      ]
    },
    {
      id: 'ex-3-4',
      type: 'matching',
      title: 'Columnas Paralelas: Casos y Funciones',
      description: 'Empareja cada caso con su función principal.',
      items: [
        {
          id: 'match-3-1',
          description: 'Empareja los casos con sus funciones',
          pairs: [
            { left: 'Nominativo', right: 'Sujeto de la oración' },
            { left: 'Genitivo', right: 'Posesión y relación' },
            { left: 'Dativo', right: 'Objeto indirecto' },
            { left: 'Acusativo', right: 'Objeto directo' },
            { left: 'Vocativo', right: 'Dirigirse a alguien' },
            { left: 'Masculino', right: 'Género' },
            { left: 'Singular', right: 'Número' },
            { left: 'Sustantivo', right: 'Palabra declinable' }
          ],
          correctAnswer: 0,
          explanation: 'Cada caso tiene una función específica en la oración. El nominativo es el sujeto, el genitivo expresa posesión, el dativo es el objeto indirecto, el acusativo es el objeto directo, y el vocativo se usa para dirigirse a alguien.'
        }
      ]
    },
    {
      id: 'ex-3-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología de Declinación',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-3-1',
          question: 'El griego distingue _____ géneros: masculino, femenino y neutro.',
          options: ['dos', 'tres', 'cuatro'],
          correctAnswer: 1,
          explanation: 'El griego distingue tres géneros: masculino, femenino y neutro.'
        },
        {
          id: 'fb-3-2',
          question: 'El _____ es el caso del sujeto de la oración.',
          options: ['genitivo', 'nominativo', 'acusativo'],
          correctAnswer: 1,
          explanation: 'El nominativo es el caso del sujeto de la oración y se usa en predicados nominales.'
        },
        {
          id: 'fb-3-3',
          question: 'El _____ expresa posesión, relación y origen.',
          options: ['dativo', 'acusativo', 'genitivo'],
          correctAnswer: 2,
          explanation: 'El genitivo expresa posesión, relación, origen, causa y materia. Es el caso más versátil del griego.'
        },
        {
          id: 'fb-3-4',
          question: 'El _____ es el número que designa exactamente dos personas u objetos.',
          options: ['plural', 'dual', 'singular'],
          correctAnswer: 1,
          explanation: 'El dual es un número especial que designa exactamente dos personas u objetos.'
        },
        {
          id: 'fb-3-5',
          question: 'Las palabras _____ incluyen adverbios, preposiciones y conjunciones.',
          options: ['flexionadas', 'declinadas', 'invariables'],
          correctAnswer: 2,
          explanation: 'Las palabras invariables son aquellas que no cambian su forma e incluyen adverbios, preposiciones, conjunciones, interjecciones y partículas.'
        }
      ]
    },
    {
      id: 'ex-3-6',
      type: 'translation',
      title: 'Traducción: Términos de Declinación',
      description: 'Traduce los términos griegos al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-3-1',
          question: 'ἡ δεκλινάσις',
          options: ['la conjugación', 'la declinación', 'la flexión'],
          correctAnswer: 1,
          explanation: 'ἡ δεκλινάσις significa "la declinación", que es el sistema de variación de las palabras nominales según género, número y caso.'
        },
        {
          id: 'tr-3-2',
          question: 'τὸ γένος',
          options: ['el número', 'el género', 'el caso'],
          correctAnswer: 1,
          explanation: 'τὸ γένος significa "el género", una categoría gramatical que distingue entre masculino, femenino y neutro.'
        },
        {
          id: 'tr-3-3',
          question: 'ὁ ἀριθμός',
          options: ['el género', 'el número', 'el caso'],
          correctAnswer: 1,
          explanation: 'ὁ ἀριθμός significa "el número", que en griego puede ser singular, plural o dual.'
        },
        {
          id: 'tr-3-4',
          question: '¿Cuál es el caso que se usa para dirigirse a alguien?',
          options: ['Nominativo', 'Genitivo', 'Vocativo'],
          correctAnswer: 2,
          explanation: 'El vocativo es el caso que se usa para dirigirse directamente a una persona, común en invocaciones y oraciones.'
        },
        {
          id: 'tr-3-5',
          question: '¿Qué caso expresa la posesión en griego?',
          options: ['Nominativo', 'Genitivo', 'Acusativo'],
          correctAnswer: 1,
          explanation: 'El genitivo es el caso que expresa posesión, relación, origen, causa y materia en griego.'
        }
      ]
    }
  ]
};

export const lesson4: Lesson = {
  id: 'lesson-4',
  number: 4,
  title: 'Declinación Temática o 2ª Declinación',
  introduction: `La declinación temática, también llamada segunda declinación, es uno de los tres sistemas principales de declinación nominal en griego. Se caracteriza por tener un tema que termina en una vocal (ο/ε), de ahí el nombre "temática". Esta declinación es muy frecuente en el Nuevo Testamento y afecta a sustantivos masculinos, femeninos y neutros. Dominar esta declinación es fundamental para reconocer las formas nominales en el texto griego y comprender la función sintáctica de cada palabra en la oración.`,

  sections: [
    {
      id: 'sec-4-1',
      title: '4.1 Sustantivos Masculinos en -ος',
      content: `Los sustantivos masculinos de la segunda declinación terminan en -ος en nominativo singular. El tema se forma quitando la desinencia -ος. Por ejemplo, λόγος (palabra) tiene tema λόγ-. Las desinencias se añaden al tema para formar los diferentes casos y números. Los sustantivos masculinos de esta declinación son muy frecuentes en el Nuevo Testamento e incluyen palabras como θεός (Dios), κύριος (Señor), ἄνθρωπος (hombre) y muchas otras.`,
      subsections: [
        {
          title: 'Paradigma de λόγος (palabra)',
          content: 'Modelo de declinación para sustantivos masculinos en -ος',
          items: [
            'Nominativo singular: λόγος',
            'Genitivo singular: λόγου',
            'Dativo singular: λόγῳ',
            'Acusativo singular: λόγον',
            'Nominativo plural: λόγοι',
            'Genitivo plural: λόγων',
            'Dativo plural: λόγοις',
            'Acusativo plural: λόγους'
          ]
        },
        {
          title: 'Características Principales',
          content: 'Rasgos distintivos de los sustantivos masculinos temáticos',
          items: [
            'Tema termina en consonante o vocal breve (ο/ε)',
            'Nominativo singular: tema + ος',
            'Genitivo singular: tema + ου (vocal larga)',
            'Dativo singular: tema + ῳ (vocal larga)',
            'Acusativo singular: tema + ον',
            'Nominativo plural: tema + οι',
            'Genitivo plural: tema + ων',
            'Dativo plural: tema + οις',
            'Acusativo plural: tema + ους'
          ]
        }
      ]
    },
    {
      id: 'sec-4-2',
      title: '4.2 Sustantivos Neutros en -ον',
      content: `Los sustantivos neutros de la segunda declinación terminan en -ον en nominativo singular. El tema se forma quitando la desinencia -ον. Por ejemplo, τέκνον (hijo) tiene tema τέκν-. Una característica importante de los sustantivos neutros es que el nominativo, vocativo y acusativo tienen la misma forma en singular y plural. Los sustantivos neutros temáticos incluyen palabras como ἔργον (obra), ὄνομα (nombre) y δένδρον (árbol).`,
      subsections: [
        {
          title: 'Paradigma de τέκνον (hijo)',
          content: 'Modelo de declinación para sustantivos neutros en -ον',
          items: [
            'Nominativo singular: τέκνον',
            'Genitivo singular: τέκνου',
            'Dativo singular: τέκνῳ',
            'Acusativo singular: τέκνον (igual al nominativo)',
            'Nominativo plural: τέκνα',
            'Genitivo plural: τέκνων',
            'Dativo plural: τέκνοις',
            'Acusativo plural: τέκνα (igual al nominativo)'
          ]
        },
        {
          title: 'Características de Neutros',
          content: 'Rasgos distintivos de los sustantivos neutros temáticos',
          items: [
            'Nominativo y acusativo siempre idénticos',
            'Nominativo singular: tema + ον',
            'Nominativo plural: tema + α (vocal breve)',
            'Genitivo singular: tema + ου',
            'Genitivo plural: tema + ων',
            'Dativo singular: tema + ῳ',
            'Dativo plural: tema + οις',
            'Acusativo plural: tema + α (igual al nominativo)'
          ]
        }
      ]
    },
    {
      id: 'sec-4-3',
      title: '4.3 Sustantivos Femeninos en -α',
      content: `Los sustantivos femeninos de la segunda declinación terminan en -α en nominativo singular. El tema se forma quitando la desinencia -α. Por ejemplo, δόξα (gloria) tiene tema δόξ-. Los sustantivos femeninos temáticos son menos frecuentes que los masculinos, pero son importantes para el análisis gramatical. Incluyen palabras como ἀγάπη (amor), ἱστορία (historia) y ἐκκλησία (iglesia).`,
      subsections: [
        {
          title: 'Paradigma de δόξα (gloria)',
          content: 'Modelo de declinación para sustantivos femeninos en -α',
          items: [
            'Nominativo singular: δόξα',
            'Genitivo singular: δόξης',
            'Dativo singular: δόξῃ',
            'Acusativo singular: δόξαν',
            'Nominativo plural: δόξαι',
            'Genitivo plural: δοξῶν',
            'Dativo plural: δόξαις',
            'Acusativo plural: δόξας'
          ]
        },
        {
          title: 'Características de Femeninos',
          content: 'Rasgos distintivos de los sustantivos femeninos temáticos',
          items: [
            'Nominativo singular: tema + α',
            'Genitivo singular: tema + ης (vocal larga)',
            'Dativo singular: tema + ῃ (vocal larga)',
            'Acusativo singular: tema + αν',
            'Nominativo plural: tema + αι',
            'Genitivo plural: tema + ων (contracción)',
            'Dativo plural: tema + αις',
            'Acusativo plural: tema + ας'
          ]
        }
      ]
    },
    {
      id: 'sec-4-4',
      title: '4.4 Reglas de Formación y Variaciones',
      content: `La declinación temática sigue patrones regulares, pero hay algunas variaciones y excepciones importantes. Algunos sustantivos pueden tener formas contractas donde las vocales se contraen. Además, algunos sustantivos pueden tener formas alternativas o irregulares. Es importante reconocer estas variaciones para poder identificar correctamente las formas nominales en el Nuevo Testamento. La práctica constante con diferentes sustantivos ayudará a desarrollar la capacidad de reconocer rápidamente las formas declinadas.`,
      subsections: [
        {
          title: 'Variaciones Comunes',
          content: 'Cambios y variaciones en la declinación temática',
          items: [
            'Contracciones vocálicas: ο + α = α, ο + ε = ου',
            'Sustantivos con tema en consonante: cambios según reglas fonéticas',
            'Formas contractas: algunos sustantivos contraen vocales adyacentes',
            'Sustantivos irregulares: algunos no siguen el patrón regular',
            'Sustantivos con acento móvil: el acento cambia según el caso',
            'Sustantivos con tema en -ρ: pueden tener variaciones especiales'
          ]
        },
        {
          title: 'Consejos para el Reconocimiento',
          content: 'Estrategias para identificar formas declinadas',
          items: [
            'Identificar el tema eliminando las desinencias conocidas',
            'Reconocer las desinencias características de cada caso',
            'Observar el acento para ayudar a identificar el caso',
            'Comparar con paradigmas conocidos para verificar la forma',
            'Practicar con textos del Nuevo Testamento para familiarizarse',
            'Memorizar los paradigmas principales de cada tipo'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'ὁ λόγος',
      type: 'sustantivo masculino',
      spanish: 'palabra',
      frequency: 330
    },
    {
      greek: 'τὸ τέκνον',
      type: 'sustantivo neutro',
      spanish: 'hijo, niño',
      frequency: 99
    },
    {
      greek: 'ἡ δόξα',
      type: 'sustantivo femenino',
      spanish: 'gloria',
      frequency: 166
    },
    {
      greek: 'ὁ θεός',
      type: 'sustantivo masculino',
      spanish: 'Dios',
      frequency: 1317
    },
    {
      greek: 'ὁ κύριος',
      type: 'sustantivo masculino',
      spanish: 'Señor',
      frequency: 717
    },
    {
      greek: 'ὁ ἄνθρωπος',
      type: 'sustantivo masculino',
      spanish: 'hombre, persona',
      frequency: 141
    },
    {
      greek: 'τὸ ἔργον',
      type: 'sustantivo neutro',
      spanish: 'obra, trabajo',
      frequency: 169
    },
    {
      greek: 'ἡ ἀγάπη',
      type: 'sustantivo femenino',
      spanish: 'amor',
      frequency: 116
    }
  ],

  exercises: [
    {
      id: 'ex-4-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Formas Declinadas Temáticas',
      description: 'Traduce y analiza formas declinadas temáticas. Identifica tema, desinencia y caso.',
      items: [
        {
          id: 'fc-4-1',
          question: 'λόγος',
          options: ['palabra'],
          correctAnswer: 0,
          explanation: 'λόγος = palabra (nom. sg. m. temático: tema λογ- + desinencia -ος). Muy frecuente en NT.'
        },
        {
          id: 'fc-4-2',
          question: 'λόγου',
          options: ['de la palabra'],
          correctAnswer: 0,
          explanation: 'λόγου = de la palabra (gen. sg. m. temático: tema λογ- + desinencia -ου).'
        },
        {
          id: 'fc-4-3',
          question: 'τέκνα',
          options: ['hijos, niños'],
          correctAnswer: 0,
          explanation: 'τέκνα = hijos (nom. pl. n. temático: tema τεκν- + desinencia -α).'
        },
        {
          id: 'fc-4-4',
          question: 'δόξης',
          options: ['de la gloria'],
          correctAnswer: 0,
          explanation: 'δόξης = de la gloria (gen. sg. f. 1ª decl.: tema δοξ- + desinencia -ης).'
        },
        {
          id: 'fc-4-5',
          question: 'θεοῦ',
          options: ['de Dios'],
          correctAnswer: 0,
          explanation: 'θεοῦ = de Dios (gen. sg. m. temático: tema θεο- + desinencia -ῦ). Muy importante en NT.'
        }
      ]
    },
    {
      id: 'ex-4-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Declinación Temática',
      description: 'Identifica correctamente las características de la declinación temática.',
      items: [
        {
          id: 'mc-4-1',
          question: '¿Cuál es la característica principal de la declinación temática?',
          options: ['El tema termina en consonante', 'El tema termina en vocal ο/ε', 'El tema termina en vocal α/η'],
          correctAnswer: 1,
          explanation: 'La declinación temática se caracteriza por tener un tema que termina en vocal ο/ε, de ahí su nombre.'
        },
        {
          id: 'mc-4-2',
          question: '¿Cuál es la forma nominativa singular de un sustantivo masculino temático?',
          options: ['tema + α', 'tema + ος', 'tema + ον'],
          correctAnswer: 1,
          explanation: 'Los sustantivos masculinos temáticos forman el nominativo singular añadiendo -ος al tema.'
        },
        {
          id: 'mc-4-3',
          question: '¿Qué caracteriza a los sustantivos neutros temáticos?',
          options: ['Nominativo y acusativo siempre idénticos', 'Genitivo y dativo siempre idénticos', 'Nominativo y genitivo siempre idénticos'],
          correctAnswer: 0,
          explanation: 'Los sustantivos neutros tienen nominativo, vocativo y acusativo idénticos en singular y plural.'
        },
        {
          id: 'mc-4-4',
          question: '¿Cuál es la desinencia de genitivo singular en sustantivos masculinos temáticos?',
          options: ['-α', '-ου', '-ον'],
          correctAnswer: 1,
          explanation: 'La desinencia de genitivo singular en sustantivos masculinos temáticos es -ου (vocal larga).'
        },
        {
          id: 'mc-4-5',
          question: '¿Cuál es la forma de nominativo plural en sustantivos femeninos temáticos?',
          options: ['-αι', '-ες', '-α'],
          correctAnswer: 0,
          explanation: 'Los sustantivos femeninos temáticos forman el nominativo plural con la desinencia -αι.'
        }
      ]
    },
    {
      id: 'ex-4-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Características Temáticas',
      description: 'Determina si las afirmaciones sobre la declinación temática son verdaderas o falsas.',
      items: [
        {
          id: 'tf-4-1',
          question: 'El nominativo singular de sustantivos masculinos temáticos termina en -ος.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Los sustantivos masculinos temáticos forman el nominativo singular con la desinencia -ος.'
        },
        {
          id: 'tf-4-2',
          question: 'Los sustantivos neutros temáticos tienen nominativo y acusativo diferentes en singular.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Los sustantivos neutros tienen nominativo, vocativo y acusativo idénticos en singular y plural.'
        },
        {
          id: 'tf-4-3',
          question: 'La desinencia de genitivo singular en sustantivos temáticos es -ου.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La desinencia de genitivo singular en sustantivos temáticos es -ου (vocal larga).'
        },
        {
          id: 'tf-4-4',
          question: 'Los sustantivos femeninos temáticos terminan en -ον en nominativo singular.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Los sustantivos femeninos temáticos terminan en -α en nominativo singular.'
        },
        {
          id: 'tf-4-5',
          question: 'El nominativo plural de sustantivos masculinos temáticos es tema + οι.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El nominativo plural de sustantivos masculinos temáticos se forma con tema + οι.'
        }
      ]
    },
    {
      id: 'ex-4-4',
      type: 'matching',
      title: 'Columnas Paralelas: Formas y Casos',
      description: 'Empareja cada forma declinada con su caso y número.',
      items: [
        {
          id: 'match-4-1',
          description: 'Empareja las formas con sus casos',
          pairs: [
            { left: 'λόγος', right: 'Nominativo singular' },
            { left: 'λόγου', right: 'Genitivo singular' },
            { left: 'λόγῳ', right: 'Dativo singular' },
            { left: 'λόγον', right: 'Acusativo singular' },
            { left: 'λόγοι', right: 'Nominativo plural' },
            { left: 'λόγων', right: 'Genitivo plural' },
            { left: 'λόγοις', right: 'Dativo plural' },
            { left: 'λόγους', right: 'Acusativo plural' }
          ],
          correctAnswer: 0,
          explanation: 'Cada forma declinada corresponde a un caso y número específico en la declinación temática.'
        }
      ]
    },
    {
      id: 'ex-4-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología Temática',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-4-1',
          question: 'Los sustantivos masculinos temáticos terminan en _____ en nominativo singular.',
          options: ['-α', '-ος', '-ον'],
          correctAnswer: 1,
          explanation: 'Los sustantivos masculinos temáticos terminan en -ος en nominativo singular.'
        },
        {
          id: 'fb-4-2',
          question: 'La desinencia de genitivo singular en sustantivos temáticos es _____.',
          options: ['-ος', '-ου', '-ων'],
          correctAnswer: 1,
          explanation: 'La desinencia de genitivo singular es -ου (vocal larga).'
        },
        {
          id: 'fb-4-3',
          question: 'Los sustantivos neutros temáticos tienen _____ y acusativo idénticos.',
          options: ['genitivo', 'nominativo', 'dativo'],
          correctAnswer: 1,
          explanation: 'Los sustantivos neutros tienen nominativo, vocativo y acusativo idénticos.'
        },
        {
          id: 'fb-4-4',
          question: 'Los sustantivos femeninos temáticos terminan en _____ en nominativo singular.',
          options: ['-ος', '-ον', '-α'],
          correctAnswer: 2,
          explanation: 'Los sustantivos femeninos temáticos terminan en -α en nominativo singular.'
        },
        {
          id: 'fb-4-5',
          question: 'La declinación temática se llama así porque el tema termina en _____.',
          options: ['consonante', 'vocal ο/ε', 'vocal α/η'],
          correctAnswer: 1,
          explanation: 'La declinación temática se caracteriza por tener un tema que termina en vocal ο/ε.'
        }
      ]
    },
    {
      id: 'ex-4-6',
      type: 'translation',
      title: 'Traducción: Formas Temáticas',
      description: 'Traduce las formas griegas al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-4-1',
          question: 'θεός',
          options: ['la gloria', 'Dios', 'la palabra'],
          correctAnswer: 1,
          explanation: 'θεός significa "Dios", uno de los sustantivos más importantes del Nuevo Testamento.'
        },
        {
          id: 'tr-4-2',
          question: 'κύριος',
          options: ['Señor', 'pueblo', 'ley'],
          correctAnswer: 0,
          explanation: 'κύριος significa "Señor", muy frecuente en textos del Nuevo Testamento.'
        },
        {
          id: 'tr-4-3',
          question: 'τέκνα',
          options: ['hijos, niños', 'padres', 'hermanos'],
          correctAnswer: 0,
          explanation: 'τέκνα es el nominativo plural de τέκνον (hijo, niño).'
        },
        {
          id: 'tr-4-4',
          question: 'δόξης',
          options: ['de la gloria', 'de la palabra', 'de Dios'],
          correctAnswer: 0,
          explanation: 'δόξης es el genitivo singular de δόξα (gloria).'
        },
        {
          id: 'tr-4-5',
          question: 'ἔργα',
          options: ['palabras', 'obras', 'glorias'],
          correctAnswer: 1,
          explanation: 'ἔργα es el nominativo plural de ἔργον (obra, trabajo).'
        }
      ]
    }
  ]
};

export const lesson5: Lesson = {
  id: 'lesson-5',
  number: 5,
  title: 'Presente e Imperfecto del Verbo λύω y del Verbo εἰμί',
  introduction: `Este tema introduce la conjugación verbal en griego, específicamente los tiempos presente e imperfecto de dos verbos fundamentales: λύω (desatar) y εἰμί (ser/estar). Estos verbos son extremadamente frecuentes en el Nuevo Testamento y sirven como base para comprender la conjugación verbal griega. El verbo λύω es un verbo temático regular que muestra la estructura típica de los verbos griegos, mientras que εἰμί es un verbo irregular pero de gran importancia. Dominar estos verbos es esencial para poder traducir y analizar cualquier texto del Nuevo Testamento.`,

  sections: [
    {
      id: 'sec-5-1',
      title: '5.1 Presente Indicativo de λύω',
      content: `El presente indicativo de λύω (desatar) muestra la estructura típica de los verbos temáticos griegos. El verbo consta de varios elementos: el tema verbal (λυ-), la vocal de unión (ο/ε), y las desinencias primarias que indican persona y número. En presente, la vocal de unión es ο ante desinencias que comienzan con consonante, y ε ante desinencias que comienzan con vocal. El presente indicativo activo de λύω es muy frecuente en el Nuevo Testamento y sirve como modelo para entender otros verbos temáticos.`,
      subsections: [
        {
          title: 'Paradigma del Presente Indicativo de λύω',
          content: 'Conjugación completa del verbo λύω en presente indicativo activo',
          items: [
            'Singular: λύ-ω (desato), λύ-ει-ς (desatas), λύ-ει (desata)',
            'Plural: λύ-ο-μεν (desatamos), λύ-ε-τε (desatáis), λύ-ου-σι(ν) (desatan)',
            'Nota: La 3ª persona plural tiene vocal larga (ου) por compensación'
          ]
        },
        {
          title: 'Estructura de la Conjugación',
          content: 'Componentes de la forma verbal en presente',
          items: [
            'Tema verbal: λυ-',
            'Vocal de unión: ο (ante consonante), ε (ante vocal)',
            'Desinencias primarias: -μι, -ς, -, -μεν, -τε, -σι(ν)',
            'La 1ª persona singular tiene desinencia -ω (contracción de ο + μι)',
            'La 3ª persona singular tiene desinencia -ει (contracción de ε + ι)'
          ]
        }
      ]
    },
    {
      id: 'sec-5-2',
      title: '5.2 Imperfecto Indicativo de λύω',
      content: `El imperfecto indicativo de λύω (desataba) es un tiempo de pasado que indica una acción habitual, repetida o en progreso en el pasado. El imperfecto se forma añadiendo el aumento (ἐ-) al inicio del verbo, seguido del tema, la vocal de unión y las desinencias secundarias. El aumento es una característica de todos los tiempos de pasado en griego. Las desinencias secundarias son diferentes de las primarias y no incluyen la vocal de unión de la misma manera que el presente.`,
      subsections: [
        {
          title: 'Paradigma del Imperfecto Indicativo de λύω',
          content: 'Conjugación completa del verbo λύω en imperfecto indicativo activo',
          items: [
            'Singular: ἔ-λυ-ον (desataba), ἔ-λυ-ες (desatabas), ἔ-λυ-ε(ν) (desataba)',
            'Plural: ἐ-λύ-ο-μεν (desatábamos), ἐ-λύ-ε-τε (desatabais), ἔ-λυ-ον (desataban)',
            'Nota: La 3ª persona plural tiene la misma forma que la 1ª persona singular'
          ]
        },
        {
          title: 'El Aumento Silábico',
          content: 'Característica temporal que marca los tiempos de pasado',
          items: [
            'Se añade ἐ- al inicio del verbo',
            'Se añade ante verbos que comienzan con consonante',
            'Ante verbos que comienzan con vocal, se alarga la vocal (aumento temporal)',
            'El aumento indica que la acción ocurrió en el pasado',
            'Es característica de imperfecto, aoristo y pluscuamperfecto'
          ]
        }
      ]
    },
    {
      id: 'sec-5-3',
      title: '5.3 Presente e Imperfecto Indicativo de εἰμί',
      content: `El verbo εἰμί (ser/estar) es uno de los verbos más importantes del griego, pero también es irregular. Su presente indicativo no sigue el patrón de los verbos temáticos regulares. Las formas del presente de εἰμί incluyen εἰμί (soy), εἶ (eres), ἐστί(ν) (es), ἐσμέν (somos), ἐστέ (sois), εἰσί(ν) (son). El imperfecto de εἰμί también es irregular y se forma con el aumento ἦ- seguido de las desinencias secundarias. A pesar de su irregularidad, εἰμί es extremadamente frecuente en el Nuevo Testamento.`,
      subsections: [
        {
          title: 'Presente Indicativo de εἰμί',
          content: 'Conjugación del verbo ser/estar en presente indicativo',
          items: [
            'Singular: εἰ-μί (soy), εἶ (eres), ἐ-στί(ν) (es)',
            'Plural: ἐ-σ-μέν (somos), ἐ-στέ (sois), εἰ-σί(ν) (son)',
            'Nota: Algunas formas son muy irregulares y deben memorizarse'
          ]
        },
        {
          title: 'Imperfecto Indicativo de εἰμί',
          content: 'Conjugación del verbo ser/estar en imperfecto indicativo',
          items: [
            'Singular: ἦ-ν (era), ἦ-σ-θα (eras), ἦ-ν (era)',
            'Plural: ἦ-μεν (éramos), ἦ-τε (erais), ἦ-σαν (eran)',
            'Nota: El imperfecto de εἰμί es más regular que el presente',
            'El aumento es temporal (ἦ- en lugar de ἐ-)'
          ]
        }
      ]
    },
    {
      id: 'sec-5-4',
      title: '5.4 Estructura de la Conjugación Verbal Griega',
      content: `La conjugación verbal griega sigue un patrón consistente que incluye varios componentes. El tema verbal es la raíz de la palabra que permanece relativamente constante. La vocal de unión conecta el tema con la desinencia en los verbos temáticos. La característica temporal marca el tiempo del verbo (σ para futuro, -σα para aoristo, etc.). Las desinencias indican la persona y el número del verbo. Las desinencias primarias se usan en tiempos de presente, mientras que las desinencias secundarias se usan en tiempos de pasado. Entender esta estructura es fundamental para poder reconocer y analizar cualquier forma verbal griega.`,
      subsections: [
        {
          title: 'Componentes de la Forma Verbal',
          content: 'Elementos que constituyen una forma verbal griega',
          items: [
            'Aumento (en tiempos de pasado): ἐ- o alargamiento de vocal',
            'Tema verbal: la raíz de la palabra (λυ-, εἰ/ἐσ-)',
            'Vocal de unión: ο/ε en verbos temáticos',
            'Característica temporal: marca el tiempo específico',
            'Desinencia: indica persona y número'
          ]
        },
        {
          title: 'Desinencias Primarias y Secundarias',
          content: 'Diferencias entre desinencias de presente y pasado',
          items: [
            'Primarias (presente): -μι, -ς, -, -μεν, -τε, -σι(ν)',
            'Secundarias (pasado): -ν, -ς, -, -μεν, -τε, -ν',
            'Las desinencias primarias incluyen la vocal de unión',
            'Las desinencias secundarias son más simples',
            'La 3ª persona plural es la misma en primarias y secundarias'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'λύω',
      type: 'verbo temático',
      spanish: 'desatar, soltar',
      frequency: 42
    },
    {
      greek: 'εἰμί',
      type: 'verbo irregular',
      spanish: 'ser, estar',
      frequency: 2457
    },
    {
      greek: 'πιστεύω',
      type: 'verbo temático',
      spanish: 'creer',
      frequency: 241
    },
    {
      greek: 'ἀκούω',
      type: 'verbo temático',
      spanish: 'oír, escuchar',
      frequency: 428
    },
    {
      greek: 'διδάσκω',
      type: 'verbo temático',
      spanish: 'enseñar',
      frequency: 97
    },
    {
      greek: 'γράφω',
      type: 'verbo temático',
      spanish: 'escribir',
      frequency: 191
    },
    {
      greek: 'λέγω',
      type: 'verbo temático',
      spanish: 'decir',
      frequency: 1438
    },
    {
      greek: 'ἔρχομαι',
      type: 'verbo medio',
      spanish: 'venir, ir',
      frequency: 635
    }
  ],

  exercises: [
    {
      id: 'ex-5-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Conjugación de λύω y εἱmί',
      description: 'Traduce y analiza formas conjugadas. Identifica tema, desinencia, tiempo y persona.',
      items: [
        {
          id: 'fc-5-1',
          question: 'λύω',
          options: ['desato'],
          correctAnswer: 0,
          explanation: 'λύω = desato (pres. 1ª sg. act.: tema λυ- + vocal -ω- + desinencia -ω primaria).'
        },
        {
          id: 'fc-5-2',
          question: 'λύει',
          options: ['desata'],
          correctAnswer: 0,
          explanation: 'λύει = desata (pres. 3ª sg. act.: tema λυ- + vocal -ε- + desinencia -ι primaria).'
        },
        {
          id: 'fc-5-3',
          question: 'ἔλυον',
          options: ['desataba'],
          correctAnswer: 0,
          explanation: 'ἔλυον = desataba (impf. 1ª sg. act.: aumento ἔ- + tema λυ- + vocal -ο- + desinencia -ν sec.).'
        },
        {
          id: 'fc-5-4',
          question: 'εἱmί',
          options: ['soy'],
          correctAnswer: 0,
          explanation: 'εἱmί = soy (pres. 1ª sg. act. irreg.: forma especial sin tema verbal regular).'
        },
        {
          id: 'fc-5-5',
          question: 'Ἕν',
          options: ['era'],
          correctAnswer: 0,
          explanation: 'Ἕν = era (impf. 3ª sg. act. irreg.: aumento Ἕ- + desinencia -ν secundaria).'
        }
      ]
    },
    {
      id: 'ex-5-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Conjugación Verbal',
      description: 'Identifica correctamente las formas verbales.',
      items: [
        {
          id: 'mc-5-1',
          question: '¿Cuál es la forma de presente 2ª persona singular de λύω?',
          options: ['λύω', 'λύεις', 'λύει'],
          correctAnswer: 1,
          explanation: 'La forma de presente 2ª persona singular de λύω es λύεις.'
        },
        {
          id: 'mc-5-2',
          question: '¿Cuál es la forma de imperfecto 3ª persona plural de λύω?',
          options: ['ἔλυον', 'ἔλυες', 'ἔλυον'],
          correctAnswer: 0,
          explanation: 'La forma de imperfecto 3ª persona plural de λύω es ἔλυον (igual a 1ª sg.).'
        },
        {
          id: 'mc-5-3',
          question: '¿Cuál es la forma de presente 2ª persona singular de εἰμί?',
          options: ['εἰμί', 'εἶ', 'ἐστί'],
          correctAnswer: 1,
          explanation: 'La forma de presente 2ª persona singular de εἰμί es εἶ.'
        },
        {
          id: 'mc-5-4',
          question: '¿Qué es el aumento en la conjugación verbal?',
          options: ['Una desinencia', 'Un prefijo de pasado (ἐ-)', 'Una vocal de unión'],
          correctAnswer: 1,
          explanation: 'El aumento es un prefijo (ἐ-) que se añade a los verbos en tiempos de pasado.'
        },
        {
          id: 'mc-5-5',
          question: '¿Cuál es la vocal de unión en presente de λύω?',
          options: ['α', 'ε/ο', 'η'],
          correctAnswer: 1,
          explanation: 'La vocal de unión en presente de λύω es ε (ante vocal) u ο (ante consonante).'
        }
      ]
    },
    {
      id: 'ex-5-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Conjugación Verbal',
      description: 'Determina si las afirmaciones sobre la conjugación verbal son verdaderas o falsas.',
      items: [
        {
          id: 'tf-5-1',
          question: 'El presente indicativo de λύω es: λύω, λύεις, λύει, λύομεν, λύετε, λύουσι.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Esta es la conjugación correcta del presente indicativo de λύω.'
        },
        {
          id: 'tf-5-2',
          question: 'El aumento se añade a todos los tiempos verbales.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El aumento solo se añade a los tiempos de pasado (imperfecto, aoristo, pluscuamperfecto).'
        },
        {
          id: 'tf-5-3',
          question: 'El verbo εἰμί es un verbo temático regular.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El verbo εἰμί es irregular y sus formas no siguen el patrón de los verbos temáticos.'
        },
        {
          id: 'tf-5-4',
          question: 'La 3ª persona plural del imperfecto de λύω es ἔλυον.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La 3ª persona plural del imperfecto de λύω es ἔλυον (igual a 1ª sg.).'
        },
        {
          id: 'tf-5-5',
          question: 'Las desinencias primarias se usan en tiempos de pasado.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Las desinencias primarias se usan en tiempos de presente; las secundarias en tiempos de pasado.'
        }
      ]
    },
    {
      id: 'ex-5-4',
      type: 'matching',
      title: 'Columnas Paralelas: Formas Verbales y Significados',
      description: 'Empareja cada forma verbal con su significado.',
      items: [
        {
          id: 'match-5-1',
          description: 'Empareja las formas verbales con sus significados',
          pairs: [
            { left: 'λύω', right: 'desato (1ª sg. presente)' },
            { left: 'λύεις', right: 'desatas (2ª sg. presente)' },
            { left: 'ἔλυον', right: 'desataba (1ª sg. imperfecto)' },
            { left: 'εἰμί', right: 'soy (1ª sg. presente)' },
            { left: 'εἶ', right: 'eres (2ª sg. presente)' },
            { left: 'ἦν', right: 'era (3ª sg. imperfecto)' },
            { left: 'λύομεν', right: 'desatamos (1ª pl. presente)' },
            { left: 'εἰσί', right: 'son (3ª pl. presente)' }
          ],
          correctAnswer: 0,
          explanation: 'Cada forma verbal corresponde a una persona, número y tiempo específico.'
        }
      ]
    },
    {
      id: 'ex-5-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología Verbal',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-5-1',
          question: 'El _____ es un prefijo que se añade a los verbos en tiempos de pasado.',
          options: ['tema', 'aumento', 'desinencia'],
          correctAnswer: 1,
          explanation: 'El aumento es un prefijo (ἐ-) que se añade a los verbos en tiempos de pasado.'
        },
        {
          id: 'fb-5-2',
          question: 'La _____ conecta el tema verbal con la desinencia en verbos temáticos.',
          options: ['desinencia', 'vocal de unión', 'característica temporal'],
          correctAnswer: 1,
          explanation: 'La vocal de unión (ο/ε) conecta el tema con la desinencia.'
        },
        {
          id: 'fb-5-3',
          question: 'Las _____ indican la persona y el número del verbo.',
          options: ['vocales de unión', 'características temporales', 'desinencias'],
          correctAnswer: 2,
          explanation: 'Las desinencias indican la persona y el número del verbo.'
        },
        {
          id: 'fb-5-4',
          question: 'El verbo _____ es uno de los verbos más importantes del griego.',
          options: ['λύω', 'εἰμί', 'γράφω'],
          correctAnswer: 1,
          explanation: 'El verbo εἰμί (ser/estar) es extremadamente frecuente en el Nuevo Testamento.'
        },
        {
          id: 'fb-5-5',
          question: 'Las desinencias _____ se usan en tiempos de presente.',
          options: ['secundarias', 'primarias', 'irregulares'],
          correctAnswer: 1,
          explanation: 'Las desinencias primarias se usan en tiempos de presente.'
        }
      ]
    },
    {
      id: 'ex-5-6',
      type: 'translation',
      title: 'Traducción: Formas Verbales',
      description: 'Traduce las formas griegas al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-5-1',
          question: 'λύει',
          options: ['desato', 'desata', 'desatamos'],
          correctAnswer: 1,
          explanation: 'λύει significa "desata" (3ª persona singular presente).'
        },
        {
          id: 'tr-5-2',
          question: 'ἔλυον',
          options: ['desataba', 'desata', 'desataremos'],
          correctAnswer: 0,
          explanation: 'ἔλυον significa "desataba" (1ª persona singular imperfecto).'
        },
        {
          id: 'tr-5-3',
          question: 'εἰσί',
          options: ['soy', 'eres', 'son'],
          correctAnswer: 2,
          explanation: 'εἰσί significa "son" (3ª persona plural presente de εἰμί).'
        },
        {
          id: 'tr-5-4',
          question: 'ἦμεν',
          options: ['éramos', 'eran', 'eras'],
          correctAnswer: 0,
          explanation: 'ἦμεν significa "éramos" (1ª persona plural imperfecto de εἰμί).'
        },
        {
          id: 'tr-5-5',
          question: 'λύομεν',
          options: ['desataba', 'desatamos', 'desatáis'],
          correctAnswer: 1,
          explanation: 'λύομεν significa "desatamos" (1ª persona plural presente de λύω).'
        }
      ]
    }
  ]
};

export const lesson6: Lesson = {
  id: 'lesson-6',
  number: 6,
  title: 'Declinación de Temas en -α o 1ª Declinación',
  introduction: `Este tema introduce la primera declinación del griego, que agrupa sustantivos terminados en -ᾱ / -ᾶ. A diferencia de la segunda declinación donde predominan los sustantivos masculinos, en la primera declinación la mayoría son femeninos. También comprende adjetivos femeninos y algunos sustantivos masculinos. La primera declinación es fundamental para reconocer sustantivos femeninos en el Nuevo Testamento. Existen varios tipos de sustantivos en esta declinación: femeninos en -α pura, femeninos en -α impura, femeninos en -η, y sustantivos masculinos en -ης/-ου. Dominar estos paradigmas es esencial para la traducción y análisis de textos neotestamentarios.`,

  sections: [
    {
      id: 'sec-6-1',
      title: '6.1 Sustantivos Femeninos en -α Pura',
      content: `Los sustantivos femeninos en -α pura son aquellos que mantienen la -α en todos los casos del singular. Ejemplos típicos incluyen ἡμέρα (día) y ἐκκλησία (asamblea). Estos sustantivos son muy frecuentes en el Nuevo Testamento y sirven como modelo básico para entender la primera declinación. La -α pura se mantiene cuando el tema va precedido de -ρ, -τ, -ε. El plural de estos sustantivos es igual tanto para femeninos como para masculinos en la primera declinación.`,
      subsections: [
        {
          title: 'Paradigma de ἡμέρα (día)',
          content: 'Declinación completa de un sustantivo femenino en -α pura',
          items: [
            'Singular: ἡ ἡμέρ-α (nom.), ἡμέρ-α (voc.), τὴν ἡμέρ-αν (ac.), τῆς ἡμέρ-ας (gen.), τῇ ἡμέρ-α (dat.)',
            'Plural: αἱ ἡμέρ-αι (nom.), ἡμέρ-αι (voc.), τὰς ἡμέρ-ας (ac.), τῶν ἡμερ-ῶν (gen.), ταῖς ἡμέρ-αις (dat.)',
            'Nota: El nominativo y vocativo singular son idénticos',
            'El genitivo plural tiene acento circunflejo por compensación'
          ]
        },
        {
          title: 'Características de la -α Pura',
          content: 'Condiciones para mantener la -α en todos los casos',
          items: [
            'Se mantiene la -α cuando el tema va precedido de -ρ, -τ, -ε',
            'Ejemplos: ἡμέρα, ἀμαρτία, βασιλεία, καρδία',
            'El plural es igual para femeninos y masculinos',
            'Muy frecuente en el Nuevo Testamento'
          ]
        }
      ]
    },
    {
      id: 'sec-6-2',
      title: '6.2 Sustantivos Femeninos en -α Impura y -η',
      content: `Los sustantivos femeninos en -α impura o mixta son aquellos que alarga la -α en -η en el genitivo y dativo singular. Se llaman impuros porque el tema no va precedido de -ρ, -τ, -ε. Ejemplos incluyen δόξα (gloria) y θάλασσα (mar). Los sustantivos en -η / -ης alarga la -α en -η en todos los casos del singular. Ejemplos incluyen ἀρχή (principio) y ζωή (vida). Ambos tipos son muy frecuentes en el Nuevo Testamento.`,
      subsections: [
        {
          title: 'Paradigma de δόξα (gloria) - α Impura',
          content: 'Declinación de un sustantivo femenino en -α impura',
          items: [
            'Singular: δόξ-α (nom.), δόξ-α (voc.), δόξ-αν (ac.), δόξ-ης (gen.), δόξ-η (dat.)',
            'Plural: δόξ-αι, δόξ-αι, δόξ-ας, δοξ-ῶν, δόξ-αις',
            'Nota: La -α se alarga a -η en genitivo y dativo singular'
          ]
        },
        {
          title: 'Paradigma de ἀρχή (principio) - η',
          content: 'Declinación de un sustantivo femenino en -η',
          items: [
            'Singular: ἀρχ-ή (nom.), ἀρχ-ή (voc.), ἀρχ-ήν (ac.), ἀρχ-ής (gen.), ἀρχ-ῇ (dat.)',
            'Plural: ἀρχ-αί, ἀρχ-αί, ἀρχ-ας, ἀρχ-ῶν, ἀρχ-αῖς',
            'Nota: La -α se cierra en -η en todos los casos del singular'
          ]
        }
      ]
    },
    {
      id: 'sec-6-3',
      title: '6.3 Sustantivos Masculinos de la Primera Declinación',
      content: `La primera declinación también incluye sustantivos masculinos, aunque son menos frecuentes que los femeninos. Existen dos tipos principales: sustantivos en -ης/-ου (como μαθητής "discípulo") y sustantivos en -ας/-ου (como νεανίας "joven"). Los sustantivos en -ης siguen la declinación de los femeninos en -η, exceptuando que en el vocativo singular toman -α y en el genitivo singular -ου. Los sustantivos en -ας siguen la declinación de los femeninos en -α pura, con las mismas excepciones. Estos sustantivos son importantes para reconocer profesiones, oficios y designaciones de personas.`,
      subsections: [
        {
          title: 'Paradigma de μαθητής (discípulo) - ης',
          content: 'Declinación de un sustantivo masculino en -ης',
          items: [
            'Singular: ὁ μαθητ-ής (nom.), μαθητ-α (voc.), τὸν μαθητ-ην (ac.), τοῦ μαθητ-ου (gen.), τῷ μαθητ-α (dat.)',
            'Plural: οἱ μαθητ-αι (nom.), μαθητ-αι (voc.), τοὺς μαθητ-ας (ac.), τῶν μαθητ-ῶν (gen.), τοῖς μαθητ-αις (dat.)',
            'Nota: El vocativo singular es -α, no -ε como en otros masculinos'
          ]
        },
        {
          title: 'Paradigma de νεανίας (joven) - ας',
          content: 'Declinación de un sustantivo masculino en -ας',
          items: [
            'Singular: ὁ νεανί-ας (nom.), νεανί-α (voc.), τὸν νεανί-αν (ac.), τοῦ νεανί-ου (gen.), τῷ νεανί-α (dat.)',
            'Plural: οἱ νεανί-αι (nom.), νεανί-αι (voc.), τοὺς νεανί-ας (ac.), τῶν νεανί-ων (gen.), τοῖς νεανί-αις (dat.)',
            'Nota: Similar a femeninos en -α pura, pero con genitivo -ου'
          ]
        }
      ]
    },
    {
      id: 'sec-6-4',
      title: '6.4 Artículos y Adjetivos de la Primera Declinación',
      content: `Los artículos griegos varían según el género, número y caso. En la primera declinación, el artículo femenino es ἡ (nominativo singular), mientras que el artículo masculino es ὁ para sustantivos masculinos en -ης/-ου. Los adjetivos de la primera clase tienen formas femeninas que siguen la primera declinación. Estos adjetivos concuerdan en género, número y caso con los sustantivos que modifican. Ejemplos incluyen δεξιός (hábil), ἔσχατος (último), y λοιπός (lo restante). La concordancia entre artículos, adjetivos y sustantivos es fundamental para entender la estructura sintáctica del griego.`,
      subsections: [
        {
          title: 'Artículos de la Primera Declinación',
          content: 'Formas del artículo según género, número y caso',
          items: [
            'Femenino singular: ἡ (nom.), τήν (ac.), τῆς (gen.), τῇ (dat.)',
            'Femenino plural: αἱ (nom.), τάς (ac.), τῶν (gen.), ταῖς (dat.)',
            'Masculino singular: ὁ (nom.), τόν (ac.), τοῦ (gen.), τῷ (dat.)',
            'Masculino plural: οἱ (nom.), τοῦς (ac.), τῶν (gen.), τοῖς (dat.)'
          ]
        },
        {
          title: 'Adjetivos de Primera Clase',
          content: 'Adjetivos que siguen la primera y segunda declinación',
          items: [
            'Forma masculina sigue 2ª declinación: -ος, -ον',
            'Forma femenina sigue 1ª declinación: -α, -η',
            'Ejemplo: δεξιός-ά-όν (hábil)',
            'Concordancia con sustantivos en género, número y caso'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'ἡμέρα',
      type: 'sustantivo femenino',
      spanish: 'día',
      frequency: 389
    },
    {
      greek: 'ἐκκλησία',
      type: 'sustantivo femenino',
      spanish: 'asamblea, iglesia',
      frequency: 114
    },
    {
      greek: 'ἀμαρτία',
      type: 'sustantivo femenino',
      spanish: 'pecado',
      frequency: 173
    },
    {
      greek: 'δόξα',
      type: 'sustantivo femenino',
      spanish: 'gloria, esplendor',
      frequency: 166
    },
    {
      greek: 'ἀρχή',
      type: 'sustantivo femenino',
      spanish: 'principio, origen',
      frequency: 55
    },
    {
      greek: 'ζωή',
      type: 'sustantivo femenino',
      spanish: 'vida',
      frequency: 135
    },
    {
      greek: 'μαθητής',
      type: 'sustantivo masculino',
      spanish: 'discípulo',
      frequency: 261
    },
    {
      greek: 'προφήτης',
      type: 'sustantivo masculino',
      spanish: 'profeta',
      frequency: 144
    }
  ],

  exercises: [
    {
      id: 'ex-6-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Formas de la Primera Declinación',
      description: 'Traduce y analiza formas de 1ª declinación. Identifica tema, desinencia y tipo (α pura/impura, η).',
      items: [
        {
          id: 'fc-6-1',
          question: 'ἡμέρα',
          options: ['día'],
          correctAnswer: 0,
          explanation: 'ἡμέρα = día (nom. sg. f. 1ª decl. α pura: tema ἡμερ- + desinencia -α).'
        },
        {
          id: 'fc-6-2',
          question: 'τῆς ἡμέρας',
          options: ['del día'],
          correctAnswer: 0,
          explanation: 'τῆς ἡμέρας = del día (gen. sg. f. 1ª decl.: tema ἡμερ- + desinencia -ας).'
        },
        {
          id: 'fc-6-3',
          question: 'δόξα',
          options: ['gloria'],
          correctAnswer: 0,
          explanation: 'δόξα = gloria (nom. sg. f. 1ª decl. α impura: tema δοξ- + desinencia -α).'
        },
        {
          id: 'fc-6-4',
          question: 'ἀρχή',
          options: ['principio'],
          correctAnswer: 0,
          explanation: 'ἀρχή = principio (nom. sg. f. 1ª decl. η: tema ἀρχ- + desinencia -η).'
        },
        {
          id: 'fc-6-5',
          question: 'μαθητής',
          options: ['discípulo'],
          correctAnswer: 0,
          explanation: 'μαθητής = discípulo (nom. sg. m. 1ª decl. η: tema μαθητ- + desinencia -ης).'
        }
      ]
    },
    {
      id: 'ex-6-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Declinación de la Primera',
      description: 'Identifica correctamente las formas declinadas.',
      items: [
        {
          id: 'mc-6-1',
          question: '¿Cuál es la forma de acusativo singular de ἡμέρα?',
          options: ['ἡμέρα', 'τὴν ἡμέραν', 'τῆς ἡμέρας'],
          correctAnswer: 1,
          explanation: 'La forma de acusativo singular de ἡμέρα es τὴν ἡμέραν.'
        },
        {
          id: 'mc-6-2',
          question: '¿Cuál es la forma de genitivo singular de δόξα?',
          options: ['δόξα', 'δόξης', 'δόξαν'],
          correctAnswer: 1,
          explanation: 'La forma de genitivo singular de δόξα es δόξης (α impura).'
        },
        {
          id: 'mc-6-3',
          question: '¿Cuál es la forma de nominativo plural de ἀρχή?',
          options: ['ἀρχή', 'ἀρχαί', 'ἀρχῶν'],
          correctAnswer: 1,
          explanation: 'La forma de nominativo plural de ἀρχή es ἀρχαί.'
        },
        {
          id: 'mc-6-4',
          question: '¿Cuál es la forma de acusativo singular de μαθητής?',
          options: ['μαθητής', 'τὸν μαθητην', 'τοῦ μαθητου'],
          correctAnswer: 1,
          explanation: 'La forma de acusativo singular de μαθητής es τὸν μαθητην.'
        },
        {
          id: 'mc-6-5',
          question: '¿Qué tipo de sustantivo es ἡμέρα?',
          options: ['masculino', 'femenino en -α pura', 'femenino en -η'],
          correctAnswer: 1,
          explanation: 'ἡμέρα es un sustantivo femenino en -α pura (mantiene -α en todos los casos).'
        }
      ]
    },
    {
      id: 'ex-6-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Primera Declinación',
      description: 'Determina si las afirmaciones sobre la primera declinación son verdaderas o falsas.',
      items: [
        {
          id: 'tf-6-1',
          question: 'Los sustantivos femeninos en -α pura mantienen la -α en todos los casos del singular.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Los sustantivos en -α pura mantienen la -α en todos los casos del singular.'
        },
        {
          id: 'tf-6-2',
          question: 'Los sustantivos en -α impura alarga la -α en -η en el genitivo y dativo singular.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Los sustantivos en -α impura alarga la -α en -η en genitivo y dativo singular.'
        },
        {
          id: 'tf-6-3',
          question: 'La primera declinación incluye principalmente sustantivos masculinos.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. La primera declinación incluye principalmente sustantivos femeninos.'
        },
        {
          id: 'tf-6-4',
          question: 'El vocativo singular de μαθητής es μαθητα.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El vocativo singular de μαθητής es μαθητα (no -ε como otros masculinos).'
        },
        {
          id: 'tf-6-5',
          question: 'El plural de sustantivos femeninos en -α es igual al de masculinos en -ης.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El plural es igual para femeninos y masculinos en la primera declinación.'
        }
      ]
    },
    {
      id: 'ex-6-4',
      type: 'matching',
      title: 'Columnas Paralelas: Formas Declinadas y Significados',
      description: 'Empareja cada forma declinada con su significado.',
      items: [
        {
          id: 'match-6-1',
          description: 'Empareja las formas con sus significados',
          pairs: [
            { left: 'ἡμέρα', right: 'día (nom. sg.)' },
            { left: 'τῆς ἡμέρας', right: 'del día (gen. sg.)' },
            { left: 'δόξα', right: 'gloria (nom. sg.)' },
            { left: 'δόξης', right: 'de la gloria (gen. sg.)' },
            { left: 'ἀρχή', right: 'principio (nom. sg.)' },
            { left: 'ἀρχῆς', right: 'del principio (gen. sg.)' },
            { left: 'μαθητής', right: 'discípulo (nom. sg.)' },
            { left: 'τοῦ μαθητου', right: 'del discípulo (gen. sg.)' }
          ],
          correctAnswer: 0,
          explanation: 'Cada forma declinada corresponde a un caso y significado específico.'
        }
      ]
    },
    {
      id: 'ex-6-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología de la Primera Declinación',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-6-1',
          question: 'Los sustantivos en -α _____ mantienen la -α en todos los casos del singular.',
          options: ['impura', 'pura', 'mixta'],
          correctAnswer: 1,
          explanation: 'Los sustantivos en -α pura mantienen la -α en todos los casos del singular.'
        },
        {
          id: 'fb-6-2',
          question: 'Los sustantivos en -α _____ alarga la -α en -η en el genitivo y dativo singular.',
          options: ['pura', 'impura', 'cerrada'],
          correctAnswer: 1,
          explanation: 'Los sustantivos en -α impura alarga la -α en -η en genitivo y dativo singular.'
        },
        {
          id: 'fb-6-3',
          question: 'La mayoría de los sustantivos en la primera declinación son _____.',
          options: ['masculinos', 'femeninos', 'neutros'],
          correctAnswer: 1,
          explanation: 'La mayoría de los sustantivos en la primera declinación son femeninos.'
        },
        {
          id: 'fb-6-4',
          question: 'El vocativo singular de μαθητής es _____.',
          options: ['μαθητε', 'μαθητα', 'μαθητη'],
          correctAnswer: 1,
          explanation: 'El vocativo singular de μαθητής es μαθητα.'
        },
        {
          id: 'fb-6-5',
          question: 'Los adjetivos de primera clase tienen formas femeninas que siguen la _____ declinación.',
          options: ['segunda', 'primera', 'tercera'],
          correctAnswer: 1,
          explanation: 'Los adjetivos de primera clase tienen formas femeninas que siguen la primera declinación.'
        }
      ]
    },
    {
      id: 'ex-6-6',
      type: 'translation',
      title: 'Traducción: Formas de la Primera Declinación',
      description: 'Traduce las formas griegas al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-6-1',
          question: 'ἡμέρα',
          options: ['del día', 'día', 'los días'],
          correctAnswer: 1,
          explanation: 'ἡμέρα significa "día" (nominativo singular).'
        },
        {
          id: 'tr-6-2',
          question: 'τῆς δόξης',
          options: ['gloria', 'de la gloria', 'glorias'],
          correctAnswer: 1,
          explanation: 'τῆς δόξης significa "de la gloria" (genitivo singular).'
        },
        {
          id: 'tr-6-3',
          question: 'ἀρχαί',
          options: ['principio', 'principios', 'del principio'],
          correctAnswer: 1,
          explanation: 'ἀρχαί significa "principios" (nominativo plural).'
        },
        {
          id: 'tr-6-4',
          question: 'τὸν μαθητην',
          options: ['discípulo', 'al discípulo', 'del discípulo'],
          correctAnswer: 1,
          explanation: 'τὸν μαθητην significa "al discípulo" (acusativo singular).'
        },
        {
          id: 'tr-6-5',
          question: 'ταῖς ἡμέραις',
          options: ['en los días', 'en los días', 'de los días'],
          correctAnswer: 1,
          explanation: 'ταῖς ἡμέραις significa "en los días" (dativo plural).'
        }
      ]
    }
  ]
};

export const lesson7: Lesson = {
  id: 'lesson-7',
  number: 7,
  title: 'Nombres Contractos de la 1ª y 2ª Declinación',
  introduction: `Este tema introduce los nombres contractos, que resultan de la contracción de vocales cuando el tema verbal o nominal entra en contacto con la desinencia. Los nombres contractos ocurren tanto en la primera como en la segunda declinación. En la segunda declinación, el encuentro de -ο del tema con otra -ο o -ε da lugar a contracciones vocálicas. En la primera declinación, el encuentro de -α del tema con otra -α o -ε produce contracciones similares. Estos sustantivos son importantes en el Nuevo Testamento y requieren atención especial para su reconocimiento. La contracción vocálica sigue reglas predecibles que facilitan la identificación de estas formas.`,

  sections: [
    {
      id: 'sec-7-1',
      title: '7.1 Contractos de la 2ª Declinación',
      content: `Los nombres contractos de la segunda declinación resultan de la contracción entre la vocal del tema (-ο) y la vocal de la desinencia. Las principales contracciones son: ο + ε = ου, ο + ο = ου, ε + ο = ου. En los sustantivos neutros, ε + α = α. En el plural, las vocales ο y ε desaparecen ante una vocal larga o diptongo. Estos sustantivos se declina como λόγος a partir del genitivo singular, con la única diferencia de que llevan acento circunflejo en la última sílaba en toda la declinación, como indicativo de la contracción. El ejemplo más importante es νοῦς (mente), que aparece frecuentemente en el Nuevo Testamento.`,
      subsections: [
        {
          title: 'Paradigma de νοῦς (mente)',
          content: 'Declinación de un sustantivo contracto de 2ª declinación',
          items: [
            'Tema puro: νο-ο',
            'Singular: ὁ νοῦς (nom.), νοῦ (voc.), τὸν νοῦν (ac.), τοῦ νοῦ (gen.), τῷ νῷ (dat.)',
            'Plural: οἱ νοῖ (nom.), νοῖ (voc.), τοὺς νοῦς (ac.), τῶν νῶν (gen.), τοῖς νοῖς (dat.)',
            'Nota: El acento circunflejo indica la contracción de vocales'
          ]
        },
        {
          title: 'Paradigma de ὀστοῦν (hueso)',
          content: 'Declinación de un sustantivo neutro contracto',
          items: [
            'Tema puro: ὀστε-ο',
            'Singular: ὀστοῦν (nom.), ὀστοῦν (voc.), ὀστοῦν (ac.), ὀστοῦ (gen.), ὀστῷ (dat.)',
            'Nota: En el NT solo aparece contraído en Jn 19,36',
            'Los sustantivos neutros contractos son menos frecuentes'
          ]
        },
        {
          title: 'Reglas de Contracción en 2ª Declinación',
          content: 'Patrones de contracción vocálica',
          items: [
            'ο + ε = ου (νό-ε > νοῦ)',
            'ο + ο = ου (νό-ος > νοῦς)',
            'ε + ο = ου (ὀστέ-ο > ὀστοῦν)',
            'En plural: vocales desaparecen ante vocal larga o diptongo'
          ]
        }
      ]
    },
    {
      id: 'sec-7-2',
      title: '7.2 Contractos de la 1ª Declinación',
      content: `Los nombres contractos de la primera declinación resultan de la contracción entre la vocal del tema (-α) y la vocal de la desinencia. Las principales contracciones son: α + α = ᾱ, ε + α = ῆ (ᾱ larga tras ρ). En el plural, las vocales α y ε desaparecen ante una vocal larga o diptongo. Se declina como los temas en -α pura o los temas en -η, con la única diferencia de que llevan acento circunflejo en la última sílaba en toda la declinación. El ejemplo más importante es γῆ (tierra), que aparece 244 veces en el Nuevo Testamento.`,
      subsections: [
        {
          title: 'Paradigma de γῆ (tierra)',
          content: 'Declinación de un sustantivo contracto de 1ª declinación',
          items: [
            'Tema puro: γέ-α',
            'Singular: ἡ γῆ (nom.), γῆ (voc.), τὴν γῆν (ac.), τῆς γῆς (gen.), τῇ γῇ (dat.)',
            'Plural: αἱ γαῖ (nom.), γαῖ (voc.), τὰς γᾶς (ac.), τῶν γῶν (gen.), ταῖς γαῖς (dat.)',
            'Nota: Aparece 244 veces en el NT, muy frecuente'
          ]
        },
        {
          title: 'Reglas de Contracción en 1ª Declinación',
          content: 'Patrones de contracción vocálica',
          items: [
            'α + α = ᾱ (γέ-α > γῆ)',
            'ε + α = ῆ (ε + α > ῆ)',
            'En plural: vocales desaparecen ante vocal larga o diptongo',
            'Acento circunflejo indica contracción'
          ]
        }
      ]
    },
    {
      id: 'sec-7-3',
      title: '7.3 Otros Contractos en el Nuevo Testamento',
      content: `En el Nuevo Testamento los nombres contractos de la primera declinación son muy pocos. Además de γῆ (tierra), que es extremadamente frecuente, encontramos μνᾶ (mina) que aparece en Lc 19,13.16.18.20.24.25, συκῆ (higuera) que aparece 15 veces en los evangelios y Hechos, y algunos sustantivos masculinos como βορρᾶς (viento del norte) en Lc 13,29 y Ap 21,13, y Ἑρμῆς (Hermes/Mercurio) en Hch 14,12 y Rom 16,14. Estos sustantivos son importantes para el reconocimiento de formas contractas en textos neotestamentarios.`,
      subsections: [
        {
          title: 'Contractos Femeninos Frecuentes',
          content: 'Sustantivos femeninos contractos en el NT',
          items: [
            'γῆ (tierra) - 244 veces, extremadamente frecuente',
            'μνᾶ (mina) - Lc 19,13.16.18.20.24.25',
            'συκῆ (higuera) - 15 veces en evangelios y Hechos'
          ]
        },
        {
          title: 'Contractos Masculinos',
          content: 'Sustantivos masculinos contractos en el NT',
          items: [
            'βορρᾶς (viento del norte) - Lc 13,29; Ap 21,13',
            'Ἑρμῆς (Hermes/Mercurio) - Hch 14,12; Rom 16,14',
            'Menos frecuentes que los femeninos'
          ]
        }
      ]
    },
    {
      id: 'sec-7-4',
      title: '7.4 Reconocimiento y Análisis de Contractos',
      content: `Para reconocer un nombre contracto, es importante observar el acento circunflejo, que indica contracción vocálica. El acento circunflejo en la última sílaba es un marcador seguro de contracción. También es útil comparar las formas con sus temas originales para entender cómo se produjo la contracción. Los sustantivos contractos mantienen la estructura de declinación de sus correspondientes no contractos, con la única diferencia del acento. El análisis morfológico de estas formas requiere identificar el tema original y aplicar las reglas de contracción vocálica.`,
      subsections: [
        {
          title: 'Marcadores de Contracción',
          content: 'Características que identifican nombres contractos',
          items: [
            'Acento circunflejo en la última sílaba',
            'Comparación con tema original (νο-ο > νοῦς)',
            'Estructura de declinación similar a no contractos',
            'Frecuencia en textos neotestamentarios'
          ]
        },
        {
          title: 'Análisis Morfológico',
          content: 'Proceso para analizar formas contractas',
          items: [
            'Identificar el tema original (γέ-α, νο-ο)',
            'Aplicar reglas de contracción (α+α=ᾱ, ο+ο=ου)',
            'Reconocer la desinencia original',
            'Determinar caso, número y género'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'γῆ',
      type: 'sustantivo femenino contracto',
      spanish: 'tierra',
      frequency: 244
    },
    {
      greek: 'νοῦς',
      type: 'sustantivo masculino contracto',
      spanish: 'mente, pensamiento',
      frequency: 24
    },
    {
      greek: 'συκῆ',
      type: 'sustantivo femenino contracto',
      spanish: 'higuera',
      frequency: 15
    },
    {
      greek: 'μνᾶ',
      type: 'sustantivo femenino contracto',
      spanish: 'mina (moneda)',
      frequency: 6
    },
    {
      greek: 'βορρᾶς',
      type: 'sustantivo masculino contracto',
      spanish: 'viento del norte',
      frequency: 2
    },
    {
      greek: 'Ἑρμῆς',
      type: 'sustantivo masculino contracto',
      spanish: 'Hermes (dios)',
      frequency: 2
    },
    {
      greek: 'ὀστοῦν',
      type: 'sustantivo neutro contracto',
      spanish: 'hueso',
      frequency: 1
    },
    {
      greek: 'θρόνος',
      type: 'sustantivo masculino',
      spanish: 'trono',
      frequency: 62
    }
  ],

  exercises: [
    {
      id: 'ex-7-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Formas Contractas',
      description: 'Traduce y analiza formas contractas. Identifica tema original, contracción vocálica y resultado.',
      items: [
        {
          id: 'fc-7-1',
          question: 'γῆ',
          options: ['tierra'],
          correctAnswer: 0,
          explanation: 'γῆ = tierra (nom. sg. f. contracta: tema γε- + α > ε + α = ῆ).'
        },
        {
          id: 'fc-7-2',
          question: 'τῆς γῆς',
          options: ['de la tierra'],
          correctAnswer: 0,
          explanation: 'τῆς γῆς = de la tierra (gen. sg. f. contracta: tema γε- + ας > ε + α = ῆ).'
        },
        {
          id: 'fc-7-3',
          question: 'νοῦς',
          options: ['mente'],
          correctAnswer: 0,
          explanation: 'νοῦς = mente (nom. sg. m. contracta: tema νο- + ος > ο + ο = ῦ).'
        },
        {
          id: 'fc-7-4',
          question: 'τοῦ νοῦ',
          options: ['de la mente'],
          correctAnswer: 0,
          explanation: 'τοῦ νοῦ = de la mente (gen. sg. m. contracta: tema νο- + ου > ο + ο = ῦ).'
        },
        {
          id: 'fc-7-5',
          question: 'συκῆ',
          options: ['higuera'],
          correctAnswer: 0,
          explanation: 'συκῆ = higuera (nom. sg. f. contracta: tema συκε- + α > ε + α = ῆ).'
        }
      ]
    },
    {
      id: 'ex-7-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Identificación de Contractos',
      description: 'Identifica correctamente las formas contractas.',
      items: [
        {
          id: 'mc-7-1',
          question: '¿Cuál es el tema original de γῆ?',
          options: ['γα-α', 'γέ-α', 'γο-ο'],
          correctAnswer: 1,
          explanation: 'El tema original de γῆ es γέ-α (ε + α = ῆ).'
        },
        {
          id: 'mc-7-2',
          question: '¿Cuál es el tema original de νοῦς?',
          options: ['νο-ο', 'νέ-α', 'να-α'],
          correctAnswer: 0,
          explanation: 'El tema original de νοῦς es νο-ο (ο + ο = ου).'
        },
        {
          id: 'mc-7-3',
          question: '¿Qué regla de contracción se aplica en γῆ?',
          options: ['ο + ο = ου', 'ε + α = ῆ', 'α + α = ᾱ'],
          correctAnswer: 1,
          explanation: 'En γῆ se aplica la regla ε + α = ῆ (ε + α > ῆ).'
        },
        {
          id: 'mc-7-4',
          question: '¿Cuántas veces aparece γῆ en el Nuevo Testamento?',
          options: ['15 veces', '244 veces', '62 veces'],
          correctAnswer: 1,
          explanation: 'γῆ aparece 244 veces en el Nuevo Testamento, siendo extremadamente frecuente.'
        },
        {
          id: 'mc-7-5',
          question: '¿Cuál es el marcador de contracción en los nombres contractos?',
          options: ['Acento agudo', 'Acento circunflejo', 'Acento grave'],
          correctAnswer: 1,
          explanation: 'El acento circunflejo en la última sílaba es el marcador de contracción vocálica.'
        }
      ]
    },
    {
      id: 'ex-7-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Nombres Contractos',
      description: 'Determina si las afirmaciones sobre nombres contractos son verdaderas o falsas.',
      items: [
        {
          id: 'tf-7-1',
          question: 'Los nombres contractos resultan de la contracción de vocales entre el tema y la desinencia.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Los nombres contractos resultan de la contracción de vocales.'
        },
        {
          id: 'tf-7-2',
          question: 'El acento agudo indica contracción en los nombres contractos.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El acento circunflejo (no agudo) indica contracción vocálica.'
        },
        {
          id: 'tf-7-3',
          question: 'γῆ aparece menos de 50 veces en el Nuevo Testamento.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. γῆ aparece 244 veces en el Nuevo Testamento.'
        },
        {
          id: 'tf-7-4',
          question: 'Los nombres contractos de la 1ª declinación son muy frecuentes en el NT.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Los nombres contractos de la 1ª declinación son muy pocos en el NT.'
        },
        {
          id: 'tf-7-5',
          question: 'La contracción ο + ο = ου ocurre en la 2ª declinación.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La contracción ο + ο = ου es una regla de la 2ª declinación.'
        }
      ]
    },
    {
      id: 'ex-7-4',
      type: 'matching',
      title: 'Columnas Paralelas: Contractos y sus Temas Originales',
      description: 'Empareja cada forma contracta con su tema original.',
      items: [
        {
          id: 'match-7-1',
          description: 'Empareja las formas contractas con sus temas originales',
          pairs: [
            { left: 'γῆ', right: 'γέ-α' },
            { left: 'νοῦς', right: 'νο-ο' },
            { left: 'συκῆ', right: 'συκέ-α' },
            { left: 'ὀστοῦν', right: 'ὀστε-ο' },
            { left: 'τοῦ νοῦ', right: 'νό-ου' },
            { left: 'τῆς γῆς', right: 'γέ-ας' },
            { left: 'τῷ νῷ', right: 'νό-ῳ' },
            { left: 'τῇ γῇ', right: 'γέ-α' }
          ],
          correctAnswer: 0,
          explanation: 'Cada forma contracta corresponde a un tema original específico.'
        }
      ]
    },
    {
      id: 'ex-7-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología de Contractos',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-7-1',
          question: 'El acento _____ en la última sílaba indica contracción vocálica.',
          options: ['agudo', 'circunflejo', 'grave'],
          correctAnswer: 1,
          explanation: 'El acento circunflejo indica contracción vocálica en nombres contractos.'
        },
        {
          id: 'fb-7-2',
          question: 'La contracción _____ ocurre en la segunda declinación.',
          options: ['α + α = ᾱ', 'ο + ο = ου', 'ε + α = ῆ'],
          correctAnswer: 1,
          explanation: 'La contracción ο + ο = ου es característica de la 2ª declinación.'
        },
        {
          id: 'fb-7-3',
          question: 'El tema original de γῆ es _____.',
          options: ['γα-α', 'γέ-α', 'γο-ο'],
          correctAnswer: 1,
          explanation: 'El tema original de γῆ es γέ-α (ε + α > ῆ).'
        },
        {
          id: 'fb-7-4',
          question: 'γῆ aparece _____ veces en el Nuevo Testamento.',
          options: ['15', '244', '62'],
          correctAnswer: 1,
          explanation: 'γῆ aparece 244 veces en el Nuevo Testamento.'
        },
        {
          id: 'fb-7-5',
          question: 'Los nombres contractos de la 1ª declinación son _____ en el NT.',
          options: ['muy frecuentes', 'muy pocos', 'moderadamente frecuentes'],
          correctAnswer: 1,
          explanation: 'Los nombres contractos de la 1ª declinación son muy pocos en el NT.'
        }
      ]
    },
    {
      id: 'ex-7-6',
      type: 'translation',
      title: 'Traducción: Formas Contractas',
      description: 'Traduce las formas griegas contractas al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-7-1',
          question: 'γῆ',
          options: ['de la tierra', 'tierra', 'tierras'],
          correctAnswer: 1,
          explanation: 'γῆ significa "tierra" (nominativo singular).'
        },
        {
          id: 'tr-7-2',
          question: 'τῆς γῆς',
          options: ['tierra', 'de la tierra', 'tierras'],
          correctAnswer: 1,
          explanation: 'τῆς γῆς significa "de la tierra" (genitivo singular).'
        },
        {
          id: 'tr-7-3',
          question: 'νοῦς',
          options: ['de la mente', 'mente', 'mentes'],
          correctAnswer: 1,
          explanation: 'νοῦς significa "mente" (nominativo singular).'
        },
        {
          id: 'tr-7-4',
          question: 'τοῦ νοῦ',
          options: ['mente', 'de la mente', 'mentes'],
          correctAnswer: 1,
          explanation: 'τοῦ νοῦ significa "de la mente" (genitivo singular).'
        },
        {
          id: 'tr-7-5',
          question: 'συκῆ',
          options: ['de la higuera', 'higuera', 'higueras'],
          correctAnswer: 1,
          explanation: 'συκῆ significa "higuera" (nominativo singular).'
        }
      ]
    }
  ]
};

export const lesson8: Lesson = {
  id: 'lesson-8',
  number: 8,
  title: 'Adjetivos de 1ª Clase',
  introduction: `Los adjetivos de 1ª clase siguen el modelo de la 1ª y 2ª declinación, como en latín "bonus, -a, -um". Hay adjetivos de tres y de dos terminaciones. No siempre coinciden el griego clásico y el helenístico respecto al número de terminaciones. Los adjetivos de 1ª clase son fundamentales para el reconocimiento de modificadores nominales en el Nuevo Testamento. Estos adjetivos concuerdan con el sustantivo que modifican en género, número y caso. La concordancia es esencial para la comprensión sintáctica del griego neotestamentario.`,

  sections: [
    {
      id: 'sec-8-1',
      title: '8.1 Adjetivos de Tres Terminaciones No Contractos',
      content: `Los adjetivos de tres terminaciones no contractos son los más comunes en el griego. Tienen formas distintas para masculino, femenino y neutro. La forma masculina sigue la 2ª declinación (como λόγος), la forma femenina sigue la 1ª declinación (como ἡμέρα, δόξα o ἀρχή), y la forma neutra sigue la 2ª declinación (como ἔργον). Ejemplos típicos incluyen δίκαιος (justo) y ἀγαθός (bueno). Estos adjetivos son muy frecuentes en el Nuevo Testamento y son esenciales para la traducción y análisis de textos.`,
      subsections: [
        {
          title: 'Paradigma de δίκαιος (justo)',
          content: 'Declinación completa de un adjetivo de tres terminaciones no contracto',
          items: [
            'Masculino (2ª declinación): δίκαιος, δικαίε, δίκαιον, δικαίου, δικαίῳ',
            'Femenino (1ª declinación): δικαία, δικαία, δικαίαν, δικαίας, δικαίᾳ',
            'Neutro (2ª declinación): δίκαιον, δίκαιον, δίκαιον, δικαίου, δικαίῳ',
            'Nota: El femenino puede seguir -α pura o -η según el sustantivo'
          ]
        },
        {
          title: 'Características de Tres Terminaciones No Contractos',
          content: 'Propiedades de estos adjetivos',
          items: [
            'Formas distintas para cada género',
            'Masculino sigue 2ª declinación',
            'Femenino sigue 1ª declinación',
            'Neutro sigue 2ª declinación',
            'Muy frecuentes en el NT'
          ]
        }
      ]
    },
    {
      id: 'sec-8-2',
      title: '8.2 Adjetivos de Tres Terminaciones Contractos',
      content: `Los adjetivos de tres terminaciones contractos son menos comunes pero importantes. Tienen formas distintas para masculino, femenino y neutro, pero con contracciones vocálicas. La forma masculina sigue la 2ª declinación contracta (como νοῦς), la forma femenina sigue la 1ª declinación contracta (como γῆ), y la forma neutra sigue la 2ª declinación contracta. El ejemplo más importante es ἀργυροῦς (plateado) y χρυσοῦς (dorado). Estos adjetivos requieren atención especial por sus contracciones.`,
      subsections: [
        {
          title: 'Paradigma de ἀργυροῦς (plateado)',
          content: 'Declinación de un adjetivo de tres terminaciones contracto',
          items: [
            'Masculino (2ª contracta): ἀργυροῦς, ἀργυροῦ, ἀργυροῦν, ἀργυροῦ, ἀργυρῷ',
            'Femenino (1ª contracta): ἀργυρᾶ, ἀργυρᾶ, ἀργυρᾶν, ἀργυρᾶς, ἀργυρᾷ',
            'Neutro (2ª contracta): ἀργυροῦν, ἀργυροῦν, ἀργυροῦν, ἀργυροῦ, ἀργυρῷ',
            'Nota: Acento circunflejo indica contracción'
          ]
        },
        {
          title: 'Características de Tres Terminaciones Contractos',
          content: 'Propiedades de estos adjetivos',
          items: [
            'Formas distintas para cada género',
            'Masculino sigue 2ª declinación contracta',
            'Femenino sigue 1ª declinación contracta',
            'Neutro sigue 2ª declinación contracta',
            'Menos frecuentes que no contractos'
          ]
        }
      ]
    },
    {
      id: 'sec-8-3',
      title: '8.3 Adjetivos de Dos Terminaciones',
      content: `Los adjetivos de dos terminaciones tienen una forma única para masculino y femenino, y otra forma distinta para neutro. Se declina por la 2ª declinación: la primera forma para masculinos y femeninos, y la segunda para los neutros. Ejemplos incluyen ἄδυνατος (imposible) y ἀδύνατος (débil). Los adjetivos de dos terminaciones no contractos son los más comunes de este tipo. Los adjetivos de dos terminaciones contractos no existen en el Nuevo Testamento.`,
      subsections: [
        {
          title: 'Paradigma de ἄδυνατος (imposible)',
          content: 'Declinación de un adjetivo de dos terminaciones no contracto',
          items: [
            'Masculino/Femenino (2ª declinación): ἄδυνατος, ἄδυνατε, ἄδυνατον, ἀδυνάτου, ἀδυνάτῳ',
            'Neutro (2ª declinación): ἄδυνατον, ἄδυνατον, ἄδυνατον, ἀδυνάτου, ἀδυνάτῳ',
            'Nota: Una sola forma para masculino y femenino'
          ]
        },
        {
          title: 'Características de Dos Terminaciones',
          content: 'Propiedades de estos adjetivos',
          items: [
            'Una forma para masculino y femenino',
            'Forma distinta para neutro',
            'Se declina por 2ª declinación',
            'Menos frecuentes que tres terminaciones',
            'Contractos no existen en NT'
          ]
        }
      ]
    },
    {
      id: 'sec-8-4',
      title: '8.4 Concordancia de Adjetivos',
      content: `Los adjetivos concuerdan con el sustantivo que modifican en género, número y caso. Cuando un adjetivo modifica a un sustantivo, debe tener la misma forma de género, número y caso que el sustantivo. La concordancia es fundamental para la comprensión sintáctica del griego. En el Nuevo Testamento, la concordancia es generalmente regular, aunque hay excepciones ocasionales. El reconocimiento de la concordancia es esencial para identificar qué sustantivo modifica cada adjetivo.`,
      subsections: [
        {
          title: 'Reglas de Concordancia',
          content: 'Principios de concordancia entre adjetivos y sustantivos',
          items: [
            'Género: el adjetivo debe tener el mismo género que el sustantivo',
            'Número: el adjetivo debe tener el mismo número que el sustantivo',
            'Caso: el adjetivo debe tener el mismo caso que el sustantivo',
            'Ejemplo: ὁ δίκαιος λόγος (el justo logos - nom. sg. masc.)'
          ]
        },
        {
          title: 'Posición del Adjetivo',
          content: 'Ubicación del adjetivo respecto al sustantivo',
          items: [
            'Posición atributiva: entre el artículo y el sustantivo',
            'Posición predicativa: después del sustantivo o sin artículo',
            'Ejemplo atributivo: ὁ δίκαιος λόγος',
            'Ejemplo predicativo: ὁ λόγος δίκαιος'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'δίκαιος',
      type: 'adjetivo de tres terminaciones',
      spanish: 'justo',
      frequency: 79
    },
    {
      greek: 'ἀγαθός',
      type: 'adjetivo de tres terminaciones',
      spanish: 'bueno',
      frequency: 102
    },
    {
      greek: 'κακός',
      type: 'adjetivo de tres terminaciones',
      spanish: 'malo',
      frequency: 50
    },
    {
      greek: 'μέσος',
      type: 'adjetivo de tres terminaciones',
      spanish: 'medio',
      frequency: 6
    },
    {
      greek: 'ὅμοιος',
      type: 'adjetivo de tres terminaciones',
      spanish: 'semejante',
      frequency: 45
    },
    {
      greek: 'ἱερός',
      type: 'adjetivo de tres terminaciones',
      spanish: 'sagrado',
      frequency: 79
    },
    {
      greek: 'ἀργυροῦς',
      type: 'adjetivo de tres terminaciones contracto',
      spanish: 'plateado',
      frequency: 3
    },
    {
      greek: 'χρυσοῦς',
      type: 'adjetivo de tres terminaciones contracto',
      spanish: 'dorado',
      frequency: 12
    }
  ],

  exercises: [
    {
      id: 'ex-8-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Adjetivos de 1ª Clase',
      description: 'Traduce y analiza las formas declinadas de adjetivos de 1ª clase. Identifica género, número y caso.',
      items: [
        {
          id: 'fc-8-1',
          question: 'δίκαιος',
          options: ['justo'],
          correctAnswer: 0,
          explanation: 'δίκαιος = justo (nom. sg. masc. de δίκαιος: tema δικαι- + desinencia -ος de 2ª declinación)'
        },
        {
          id: 'fc-8-2',
          question: 'δικαία',
          options: ['justa'],
          correctAnswer: 0,
          explanation: 'δικαία = justa (nom. sg. fem. de δίκαιος: tema δικαι- + desinencia -α de 1ª declinación)'
        },
        {
          id: 'fc-8-3',
          question: 'δίκαιον',
          options: ['justo (neutro)'],
          correctAnswer: 0,
          explanation: 'δίκαιον = justo (nom. sg. neutro de δίκαιος: tema δικαι- + desinencia -ον de 2ª declinación)'
        },
        {
          id: 'fc-8-4',
          question: 'ἀγαθός',
          options: ['bueno'],
          correctAnswer: 0,
          explanation: 'ἀγαθός = bueno (nom. sg. masc. de ἀγαθός: tema ἀγαθ- + desinencia -ός de 2ª declinación)'
        },
        {
          id: 'fc-8-5',
          question: 'ἀργυροῦς',
          options: ['plateado'],
          correctAnswer: 0,
          explanation: 'ἀργυροῦς = plateado (nom. sg. masc. de ἀργυροῦς: tema ἀργυρο- + desinencia -ῦς de 2ª declinación contracta)'
        }
      ]
    },
    {
      id: 'ex-8-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Adjetivos de 1ª Clase',
      description: 'Identifica correctamente las formas de adjetivos.',
      items: [
        {
          id: 'mc-8-1',
          question: '¿Cuántas terminaciones tiene δίκαιος?',
          options: ['una', 'dos', 'tres'],
          correctAnswer: 2,
          explanation: 'δίκαιος tiene tres terminaciones: δίκαιος, δικαία, δίκαιον.'
        },
        {
          id: 'mc-8-2',
          question: '¿Cuál es la forma femenina de ἀγαθός?',
          options: ['ἀγαθή', 'ἀγαθόν', 'ἀγαθός'],
          correctAnswer: 0,
          explanation: 'La forma femenina de ἀγαθός es ἀγαθή.'
        },
        {
          id: 'mc-8-3',
          question: '¿Cuál es la forma neutra de δίκαιος?',
          options: ['δικαία', 'δίκαιον', 'δίκαιος'],
          correctAnswer: 1,
          explanation: 'La forma neutra de δίκαιος es δίκαιον.'
        },
        {
          id: 'mc-8-4',
          question: '¿Cuántas terminaciones tiene ἄδυνατος?',
          options: ['una', 'dos', 'tres'],
          correctAnswer: 1,
          explanation: 'ἄδυνατος tiene dos terminaciones: ἄδυνατος, ἄδυνατον.'
        },
        {
          id: 'mc-8-5',
          question: '¿Qué declinación sigue la forma masculina de δίκαιος?',
          options: ['1ª declinación', '2ª declinación', '3ª declinación'],
          correctAnswer: 1,
          explanation: 'La forma masculina de δίκαιος sigue la 2ª declinación.'
        }
      ]
    },
    {
      id: 'ex-8-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Adjetivos de 1ª Clase',
      description: 'Determina si las afirmaciones sobre adjetivos de 1ª clase son verdaderas o falsas.',
      items: [
        {
          id: 'tf-8-1',
          question: 'Los adjetivos de 1ª clase siguen el modelo de la 1ª y 2ª declinación.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Los adjetivos de 1ª clase siguen el modelo de la 1ª y 2ª declinación.'
        },
        {
          id: 'tf-8-2',
          question: 'La forma femenina de los adjetivos de 1ª clase sigue la 2ª declinación.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. La forma femenina sigue la 1ª declinación.'
        },
        {
          id: 'tf-8-3',
          question: 'Los adjetivos de dos terminaciones tienen formas distintas para cada género.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Los adjetivos de dos terminaciones tienen una forma para masc./fem. y otra para neutro.'
        },
        {
          id: 'tf-8-4',
          question: 'Los adjetivos concuerdan con el sustantivo en género, número y caso.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La concordancia es fundamental en la gramática griega.'
        },
        {
          id: 'tf-8-5',
          question: 'Los adjetivos de dos terminaciones contractos son comunes en el NT.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Los adjetivos de dos terminaciones contractos no existen en el NT.'
        }
      ]
    },
    {
      id: 'ex-8-4',
      type: 'matching',
      title: 'Columnas Paralelas: Adjetivos y sus Formas',
      description: 'Empareja cada adjetivo con su forma correcta.',
      items: [
        {
          id: 'match-8-1',
          description: 'Empareja los adjetivos con sus formas',
          pairs: [
            { left: 'δίκαιος', right: 'justo (masc. nom. sg.)' },
            { left: 'δικαία', right: 'justa (fem. nom. sg.)' },
            { left: 'δίκαιον', right: 'justo (neut. nom. sg.)' },
            { left: 'ἀγαθός', right: 'bueno (masc. nom. sg.)' },
            { left: 'ἀγαθή', right: 'buena (fem. nom. sg.)' },
            { left: 'ἀγαθόν', right: 'bueno (neut. nom. sg.)' },
            { left: 'ἀργυροῦς', right: 'plateado (masc. nom. sg.)' },
            { left: 'ἀργυρᾶ', right: 'plateada (fem. nom. sg.)' }
          ],
          correctAnswer: 0,
          explanation: 'Cada adjetivo corresponde a una forma y género específico.'
        }
      ]
    },
    {
      id: 'ex-8-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología de Adjetivos',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-8-1',
          question: 'Los adjetivos de 1ª clase siguen el modelo de la _____ y 2ª declinación.',
          options: ['segunda', 'primera', 'tercera'],
          correctAnswer: 1,
          explanation: 'Los adjetivos de 1ª clase siguen el modelo de la 1ª y 2ª declinación.'
        },
        {
          id: 'fb-8-2',
          question: 'La forma femenina de δίκαιος sigue la _____ declinación.',
          options: ['segunda', 'primera', 'tercera'],
          correctAnswer: 1,
          explanation: 'La forma femenina sigue la 1ª declinación.'
        },
        {
          id: 'fb-8-3',
          question: 'Los adjetivos _____ tienen una forma para masc./fem. y otra para neutro.',
          options: ['de tres terminaciones', 'de dos terminaciones', 'contractos'],
          correctAnswer: 1,
          explanation: 'Los adjetivos de dos terminaciones tienen una forma para masc./fem. y otra para neutro.'
        },
        {
          id: 'fb-8-4',
          question: 'El adjetivo debe concordar con el sustantivo en _____, número y caso.',
          options: ['número', 'género', 'declinación'],
          correctAnswer: 1,
          explanation: 'El adjetivo debe concordar en género, número y caso.'
        },
        {
          id: 'fb-8-5',
          question: 'Los adjetivos de dos terminaciones _____ no existen en el NT.',
          options: ['no contractos', 'contractos', 'de tres terminaciones'],
          correctAnswer: 1,
          explanation: 'Los adjetivos de dos terminaciones contractos no existen en el NT.'
        }
      ]
    },
    {
      id: 'ex-8-6',
      type: 'translation',
      title: 'Traducción: Adjetivos de 1ª Clase',
      description: 'Traduce los adjetivos griegos al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-8-1',
          question: 'δίκαιος',
          options: ['injusto', 'justo', 'malo'],
          correctAnswer: 1,
          explanation: 'δίκαιος significa "justo".'
        },
        {
          id: 'tr-8-2',
          question: 'ἀγαθή',
          options: ['mala', 'buena', 'justa'],
          correctAnswer: 1,
          explanation: 'ἀγαθή significa "buena" (femenino de ἀγαθός).'
        },
        {
          id: 'tr-8-3',
          question: 'κακόν',
          options: ['bueno', 'malo', 'justo'],
          correctAnswer: 1,
          explanation: 'κακόν significa "malo" (neutro de κακός).'
        },
        {
          id: 'tr-8-4',
          question: 'ἀργυροῦς',
          options: ['dorado', 'plateado', 'de bronce'],
          correctAnswer: 1,
          explanation: 'ἀργυροῦς significa "plateado".'
        },
        {
          id: 'tr-8-5',
          question: 'χρυσοῦν',
          options: ['plateado', 'de bronce', 'dorado'],
          correctAnswer: 2,
          explanation: 'χρυσοῦν significa "dorado" (neutro de χρυσοῦς).'
        }
      ]
    }
  ]
};

export const lesson9: Lesson = {
  id: 'lesson-9',
  number: 9,
  title: 'La Declinación Ática',
  introduction: `La declinación ática es una declinación especial del griego que aparece raramente en el Nuevo Testamento. Está representada únicamente por un adjetivo: ἵλεως (propicio, misericordioso) y por ningún sustantivo. En este dialecto, algunos nombres de la 2ª declinación alargan la -ο en -ω. El contacto de esta ω con las desinencias originales a la siguiente declinación es lo que caracteriza la declinación ática. Aunque poco frecuente, es importante reconocer estas formas en el análisis de textos neotestamentarios.`,

  sections: [
    {
      id: 'sec-9-1',
      title: '9.1 Características de la Declinación Ática',
      content: `La declinación ática es una variante especial de la 2ª declinación que se caracteriza por el alargamiento de la -ο en -ω. Esta característica distingue la declinación ática de otras declinaciones. La declinación ática es muy rara en el Nuevo Testamento, apareciendo principalmente en el adjetivo ἵλεως. El reconocimiento de esta declinación es importante para el análisis morfosintáctico de textos griegos, aunque su frecuencia es baja.`,
      subsections: [
        {
          title: 'Características Principales',
          content: 'Propiedades de la declinación ática',
          items: [
            'Alargamiento de -ο en -ω en la 2ª declinación',
            'Muy rara en el Nuevo Testamento',
            'Representada principalmente por ἵλεως',
            'Importante para análisis morfosintáctico',
            'Requiere atención especial en traducción'
          ]
        },
        {
          title: 'Diferencias con Otras Declinaciones',
          content: 'Comparación con declinaciones regulares',
          items: [
            '2ª declinación regular: λόγος, λόγου, λόγῳ',
            'Declinación ática: ἵλεως, ἵλεω, ἵλεω',
            'La ι se suscribe en la declinación ática',
            'La u desaparece en la declinación ática',
            'Formas únicas y reconocibles'
          ]
        }
      ]
    },
    {
      id: 'sec-9-2',
      title: '9.2 Paradigma de ἵλεως y su Uso en el NT',
      content: `El adjetivo ἵλεως (propicio, misericordioso) es el único ejemplo importante de la declinación ática en el Nuevo Testamento. Su paradigma es único y requiere memorización. Solo permanece en el NT en Mt 16,22 (Ἵλεώς σοι, κύριε: "propicio para ti, Señor") y en Heb 8,12. Los sustantivos λαός "pueblo" y ναός "templo" han suplantado ya definitivamente a λεώς y νεώς del griego clásico. El reconocimiento de ἵλεως es esencial para la traducción correcta de estos pasajes.`,
      subsections: [
        {
          title: 'Paradigma de ἵλεως (propicio)',
          content: 'Declinación completa del adjetivo ático',
          items: [
            'Singular Nominativo: ἵλεως (masc./fem.), ἵλεων (neutro)',
            'Singular Acusativo: ἵλεον (masc./fem.), ἵλεων (neutro)',
            'Singular Genitivo: ἵλεω (masc./fem.), ἵλεω (neutro)',
            'Singular Dativo: ἵλεω (masc./fem.), ἵλεω (neutro)',
            'Plural Nominativo: ἵλεω (masc./fem.), ἵλεα (neutro)'
          ]
        },
        {
          title: 'Uso en el Nuevo Testamento',
          content: 'Contextos donde aparece ἵλεως',
          items: [
            'Mt 16,22: Ἵλεώς σοι, κύριε (propicio para ti, Señor)',
            'Heb 8,12: ὅτι ἵλεως ἔσομαι (porque seré misericordioso)',
            'Expresiones de clemencia y misericordia divina',
            'Contextos de petición y súplica',
            'Importante para comprensión teológica'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'ἵλεως',
      type: 'adjetivo de declinación ática',
      spanish: 'propicio, misericordioso',
      frequency: 2
    },
    {
      greek: 'Ἀπολλός',
      type: 'nombre propio (declinación ática)',
      spanish: 'Apolo',
      frequency: 10
    },
    {
      greek: 'Κῶς',
      type: 'nombre propio (declinación ática)',
      spanish: 'Cos',
      frequency: 1
    },
    {
      greek: 'λαός',
      type: 'sustantivo (reemplaza λεώς)',
      spanish: 'pueblo',
      frequency: 142
    },
    {
      greek: 'ναός',
      type: 'sustantivo (reemplaza νεώς)',
      spanish: 'templo',
      frequency: 45
    },
    {
      greek: 'κύριος',
      type: 'sustantivo (2ª declinación regular)',
      spanish: 'Señor',
      frequency: 747
    },
    {
      greek: 'ἔσομαι',
      type: 'verbo futuro de εἰμί',
      spanish: 'seré',
      frequency: 68
    },
    {
      greek: 'μισέω',
      type: 'verbo',
      spanish: 'odiar',
      frequency: 39
    }
  ],

  exercises: [
    {
      id: 'ex-9-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de la Declinación Ática',
      description: 'Traduce y analiza las formas declinadas de la declinación ática. Identifica género, número y caso.',
      items: [
        {
          id: 'fc-9-1',
          question: 'ἵλεως',
          options: ['propicio'],
          correctAnswer: 0,
          explanation: 'ἵλεως = propicio (nom. sg. masc./fem. de ἵλεως: declinación ática con -ω alargada)'
        },
        {
          id: 'fc-9-2',
          question: 'ἵλεων',
          options: ['propicio (neutro)'],
          correctAnswer: 0,
          explanation: 'ἵλεων = propicio (nom. sg. neutro de ἵλεως: declinación ática con -ων)'
        },
        {
          id: 'fc-9-3',
          question: 'ἵλεω',
          options: ['del propicio'],
          correctAnswer: 0,
          explanation: 'ἵλεω = del propicio (gen. sg. de ἵλεως: declinación ática con desinencia -ω)'
        },
        {
          id: 'fc-9-4',
          question: 'ἵλεω',
          options: ['para el propicio'],
          correctAnswer: 0,
          explanation: 'ἵλεω = para el propicio (dat. sg. de ἵλεως: declinación ática con desinencia -ω)'
        },
        {
          id: 'fc-9-5',
          question: 'ἵλεα',
          options: ['propicios (neutro plural)'],
          correctAnswer: 0,
          explanation: 'ἵλεα = propicios (nom. pl. neutro de ἵλεως: declinación ática con desinencia -α)'
        }
      ]
    },
    {
      id: 'ex-9-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Declinación Ática',
      description: 'Identifica correctamente las características de la declinación ática.',
      items: [
        {
          id: 'mc-9-1',
          question: '¿Cuál es el adjetivo principal de la declinación ática en el NT?',
          options: ['λόγος', 'ἵλεως', 'δίκαιος'],
          correctAnswer: 1,
          explanation: 'ἵλεως es el adjetivo principal de la declinación ática en el NT.'
        },
        {
          id: 'mc-9-2',
          question: '¿Qué caracteriza la declinación ática?',
          options: ['Alargamiento de -ο en -ω', 'Contracción vocálica', 'Forma dual'],
          correctAnswer: 0,
          explanation: 'La declinación ática se caracteriza por el alargamiento de -ο en -ω.'
        },
        {
          id: 'mc-9-3',
          question: '¿Cuántas veces aparece ἵλεως en el NT?',
          options: ['una', 'dos', 'tres'],
          correctAnswer: 1,
          explanation: 'ἵλεως aparece dos veces en el NT: Mt 16,22 y Heb 8,12.'
        },
        {
          id: 'mc-9-4',
          question: '¿Qué sustantivo reemplazó a λεώς en el NT?',
          options: ['ναός', 'λαός', 'θεός'],
          correctAnswer: 1,
          explanation: 'λαός reemplazó a λεώς en el NT.'
        },
        {
          id: 'mc-9-5',
          question: '¿Qué tan frecuente es la declinación ática en el NT?',
          options: ['muy frecuente', 'frecuente', 'muy rara'],
          correctAnswer: 2,
          explanation: 'La declinación ática es muy rara en el NT.'
        }
      ]
    },
    {
      id: 'ex-9-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Declinación Ática',
      description: 'Determina si las afirmaciones sobre la declinación ática son verdaderas o falsas.',
      items: [
        {
          id: 'tf-9-1',
          question: 'La declinación ática es muy común en el NT.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. La declinación ática es muy rara en el NT.'
        },
        {
          id: 'tf-9-2',
          question: 'ἵλεως significa "propicio" o "misericordioso".',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. ἵλεως significa "propicio" o "misericordioso".'
        },
        {
          id: 'tf-9-3',
          question: 'La declinación ática se caracteriza por el alargamiento de -ο en -ω.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La declinación ática se caracteriza por este alargamiento.'
        },
        {
          id: 'tf-9-4',
          question: 'ἵλεως aparece en Mt 16,22 y Heb 8,12.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. ἵλεως aparece en estos dos pasajes del NT.'
        },
        {
          id: 'tf-9-5',
          question: 'λαός reemplazó a λεώς en el NT.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. λαός reemplazó definitivamente a λεώς del griego clásico.'
        }
      ]
    },
    {
      id: 'ex-9-4',
      type: 'matching',
      title: 'Columnas Paralelas: Formas Áticas',
      description: 'Empareja cada forma con su significado correcto.',
      items: [
        {
          id: 'match-9-1',
          description: 'Empareja las formas áticas con sus significados',
          pairs: [
            { left: 'ἵλεως', right: 'propicio (nom. sg. masc./fem.)' },
            { left: 'ἵλεων', right: 'propicio (nom. sg. neutro)' },
            { left: 'ἵλεο', right: 'propicio (ac. sg. masc./fem.)' },
            { left: 'ἵλεω', right: 'propicio (gen./dat. sg.)' },
            { left: 'ἵλεα', right: 'propicios (nom. pl. neutro)' },
            { left: 'ἵλεων', right: 'propicios (gen. pl.)' },
            { left: 'ἵλεω', right: 'propicios (nom. pl. masc./fem.)' },
            { left: 'ἵλεως', right: 'propicios (ac. pl. masc./fem.)' }
          ],
          correctAnswer: 0,
          explanation: 'Cada forma ática corresponde a un caso, número y género específico.'
        }
      ]
    },
    {
      id: 'ex-9-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología de Declinación Ática',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-9-1',
          question: 'La declinación ática se caracteriza por el alargamiento de -ο en _____.',
          options: ['-α', '-ω', '-η'],
          correctAnswer: 1,
          explanation: 'La declinación ática se caracteriza por el alargamiento de -ο en -ω.'
        },
        {
          id: 'fb-9-2',
          question: 'El adjetivo _____ es el principal ejemplo de declinación ática en el NT.',
          options: ['δίκαιος', 'ἵλεως', 'ἀγαθός'],
          correctAnswer: 1,
          explanation: 'ἵλεως es el adjetivo principal de la declinación ática en el NT.'
        },
        {
          id: 'fb-9-3',
          question: 'ἵλεως aparece en Mt 16,22 y _____.',
          options: ['Hch 18,24', 'Heb 8,12', 'Tit 3,13'],
          correctAnswer: 1,
          explanation: 'ἵλεως aparece en Mt 16,22 y Heb 8,12.'
        },
        {
          id: 'fb-9-4',
          question: '_____ reemplazó a λεώς en el NT.',
          options: ['ναός', 'λαός', 'θεός'],
          correctAnswer: 1,
          explanation: 'λαός reemplazó definitivamente a λεώς del griego clásico.'
        },
        {
          id: 'fb-9-5',
          question: 'La declinación ática es _____ en el NT.',
          options: ['muy frecuente', 'frecuente', 'muy rara'],
          correctAnswer: 2,
          explanation: 'La declinación ática es muy rara en el NT.'
        }
      ]
    },
    {
      id: 'ex-9-6',
      type: 'translation',
      title: 'Traducción: Declinación Ática',
      description: 'Traduce las formas áticas al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-9-1',
          question: 'ἵλεως',
          options: ['injusto', 'propicio', 'malo'],
          correctAnswer: 1,
          explanation: 'ἵλεως significa "propicio" o "misericordioso".'
        },
        {
          id: 'tr-9-2',
          question: 'Ἵλεώς σοι, κύριε',
          options: ['Injusto para ti, Señor', 'Propicio para ti, Señor', 'Malo para ti, Señor'],
          correctAnswer: 1,
          explanation: 'Ἵλεώς σοι, κύριε significa "Propicio para ti, Señor".'
        },
        {
          id: 'tr-9-3',
          question: 'ἵλεως ἔσομαι',
          options: ['seré injusto', 'seré propicio', 'seré malo'],
          correctAnswer: 1,
          explanation: 'ἵλεως ἔσομαι significa "seré propicio" o "seré misericordioso".'
        },
        {
          id: 'tr-9-4',
          question: 'λαός',
          options: ['templo', 'pueblo', 'palabra'],
          correctAnswer: 1,
          explanation: 'λαός significa "pueblo".'
        },
        {
          id: 'tr-9-5',
          question: 'ναός',
          options: ['pueblo', 'templo', 'palabra'],
          correctAnswer: 1,
          explanation: 'ναός significa "templo".'
        }
      ]
    }
  ]
};

export const lesson10: Lesson = {
  id: 'lesson-10',
  number: 10,
  title: 'Generalidades de la Flexión Verbal',
  introduction: `La flexión verbal en griego es un sistema complejo que expresa múltiples categorías gramaticales. Las voces en la conjugación griega son tres: activa, pasiva y media. La voz media expresa una acción reflexiva, esto es, que el sujeto realiza la acción sobre sí mismo o en interés propio. Los modos son seis: cuatro conjugables (indicativo, imperativo, subjuntivo y optativo) y dos declinables (infinitivo y participio). Los tiempos son seis: presente, imperfecto, futuro, aoristo, perfecto y pluscuamperfecto. Los números son dos: singular y plural. Las personas son tres: primera, segunda y tercera. Este tema proporciona las bases fundamentales para comprender la conjugación verbal griega.`,

  sections: [
    {
      id: 'sec-10-1',
      title: '10.1 Voces Verbales',
      content: `Las voces en la conjugación griega son tres: activa, pasiva y media. La voz activa expresa que el sujeto realiza la acción. La voz pasiva expresa que el sujeto recibe la acción. La voz media expresa una acción reflexiva, esto es, que el sujeto realiza la acción sobre sí mismo o en interés propio. Algunos verbos que se utilizan en la forma media o pasiva con significado activo se denominan verbos deponentes. Estos siempre se traducen en activa, aunque morfológicamente aparezcan como medios o pasivos.`,
      subsections: [
        {
          title: 'Voz Activa',
          content: 'La voz activa expresa que el sujeto realiza la acción',
          items: [
            'El sujeto realiza la acción',
            'Ejemplo: λύω "yo desato"',
            'Tiene la misma significación que en español',
            'Es la voz más común en el NT'
          ]
        },
        {
          title: 'Voz Pasiva',
          content: 'La voz pasiva expresa que el sujeto recibe la acción',
          items: [
            'El sujeto recibe la acción',
            'Ejemplo: λύομαι "yo soy desatado"',
            'Tiene la misma significación que en español',
            'Frecuente en contextos teológicos'
          ]
        },
        {
          title: 'Voz Media y Verbos Deponentes',
          content: 'La voz media expresa acción reflexiva',
          items: [
            'El sujeto realiza la acción sobre sí mismo',
            'Ejemplo: λύομαι "yo me desato"',
            'Verbos deponentes: forma media/pasiva con significado activo',
            'Ejemplo: ἀποκρίνομαι "yo respondo"'
          ]
        }
      ]
    },
    {
      id: 'sec-10-2',
      title: '10.2 Modos Verbales',
      content: `Los modos son seis: cuatro conjugables (indicativo, imperativo, subjuntivo y optativo) y dos declinables (infinitivo y participio). El indicativo expresa la realidad de la acción. El imperativo expresa orden o mandato. El subjuntivo expresa probabilidad o exhortación, o una cierta subordinación. El optativo expresa deseo o una mera posibilidad de la acción. El infinitivo y el participio son formas nominales del verbo.`,
      subsections: [
        {
          title: 'Modos Conjugables',
          content: 'Modos que se conjugan con desinencias personales',
          items: [
            'Indicativo: expresa la realidad de la acción',
            'Imperativo: expresa orden o mandato',
            'Subjuntivo: expresa probabilidad o subordinación',
            'Optativo: expresa deseo o posibilidad (raro en NT)'
          ]
        },
        {
          title: 'Modos Declinables',
          content: 'Formas nominales del verbo',
          items: [
            'Infinitivo: expresa la acción sin persona ni número',
            'Participio: participa de características de adjetivo y verbo',
            'Ambos son declinables como sustantivos o adjetivos',
            'Fundamentales para la sintaxis griega'
          ]
        }
      ]
    },
    {
      id: 'sec-10-3',
      title: '10.3 Tiempos Verbales',
      content: `Los tiempos son seis: presente, imperfecto, futuro, aoristo, perfecto y pluscuamperfecto. Se dividen en primarios (presente, futuro, perfecto) que indican un tiempo que no es pasado y carecen de aumento, y secundarios (imperfecto, aoristo, pluscuamperfecto) que indican un tiempo pasado y tienen aumento. La oposición entre los tiempos del verbo griego es fundamentalmente una diferencia en el aspecto de la acción.`,
      subsections: [
        {
          title: 'Tiempos Primarios',
          content: 'Tiempos que no indican pasado; carecen de aumento',
          items: [
            'Presente: acción actual o habitual',
            'Futuro: acción futura',
            'Perfecto: acción completada con resultados presentes',
            'Carecen de aumento (ε- inicial)'
          ]
        },
        {
          title: 'Tiempos Secundarios',
          content: 'Tiempos que indican pasado; tienen aumento',
          items: [
            'Imperfecto: acción pasada durativa',
            'Aoristo: acción pasada puntual',
            'Pluscuamperfecto: acción pasada completada',
            'Todos tienen aumento (ε- inicial)'
          ]
        }
      ]
    },
    {
      id: 'sec-10-4',
      title: '10.4 Aspecto Verbal',
      content: `El aspecto expresa una característica o cualidad interna de la acción. Puede indicar una acción durativa, imperfecta, la acción en su desarrollo, no terminada, carente de límites precisos (aspecto de presente: tiempos presente e imperfecto), o bien una acción sin tiempo o puntual (aspecto de aoristo: tiempo aoristo), o bien una acción ya acabada o estática (aspecto de perfecto: tiempos perfecto y pluscuamperfecto). La estructura del verbo griego está basada en tres temas: presente, aoristo y perfecto.`,
      subsections: [
        {
          title: 'Aspecto de Presente',
          content: 'Acción durativa, imperfecta, en desarrollo',
          items: [
            'Acción no terminada, carente de límites precisos',
            'Tiempos: presente e imperfecto',
            'Énfasis en el proceso de la acción',
            'Ejemplo: λύω "yo estoy desatando"'
          ]
        },
        {
          title: 'Aspecto de Aoristo',
          content: 'Acción sin tiempo o puntual',
          items: [
            'Acción sin tiempo o puntual',
            'Tiempo: aoristo',
            'Énfasis en la acción como un todo',
            'Ejemplo: ἔλυσα "yo desaté"'
          ]
        },
        {
          title: 'Aspecto de Perfecto',
          content: 'Acción ya acabada o estática',
          items: [
            'Acción ya acabada o estática',
            'Tiempos: perfecto y pluscuamperfecto',
            'Énfasis en los resultados presentes',
            'Ejemplo: λέλυκα "yo he desatado"'
          ]
        }
      ]
    },
    {
      id: 'sec-10-5',
      title: '10.5 Elementos del Verbo y Conjugaciones',
      content: `Los elementos del verbo son: tema verbal (permanece invariable), características temporales, características modales, vocales de unión y desinencias. Hay dos conjugaciones: verbos en -ω o verbos temáticos (la gran mayoría), donde las desinencias se añaden al tema mediante vocales de unión, y verbos en -μι o verbos atemáticos, donde las desinencias se añaden directamente al tema. Las vocales de unión son ο ante desinencias que empiezan por μ y ν, ε ante las demás.`,
      subsections: [
        {
          title: 'Elementos del Verbo',
          content: 'Componentes de la forma verbal',
          items: [
            'Tema verbal: permanece invariable (p.e. λυ- en λύω)',
            'Características temporales: se unen al tema',
            'Características modales: se unen al tema temporal',
            'Vocales de unión: se intercalan antes de desinencias',
            'Desinencias: expresan persona, número, tiempo y voz'
          ]
        },
        {
          title: 'Conjugaciones Verbales',
          content: 'Dos tipos principales de conjugación',
          items: [
            'Verbos en -ω (temáticos): mayoría de verbos',
            'Desinencias se añaden mediante vocales de unión',
            'Verbos en -μι (atemáticos): menos comunes',
            'Desinencias se añaden directamente al tema'
          ]
        },
        {
          title: 'Vocales de Unión',
          content: 'Vocales que se intercalan en la conjugación',
          items: [
            'ο ante desinencias que empiezan por μ y ν',
            'ε ante las demás desinencias',
            'Solo en los tres primeros tiempos de verbos en -ω',
            'Fundamental para la pronunciación correcta'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'λύω',
      type: 'verbo temático',
      spanish: 'desatar, soltar',
      frequency: 42
    },
    {
      greek: 'λύομαι',
      type: 'voz media',
      spanish: 'me desato, me suelto',
      frequency: 8
    },
    {
      greek: 'ἀποκρίνομαι',
      type: 'verbo deponente',
      spanish: 'respondo',
      frequency: 231
    },
    {
      greek: 'εἰμί',
      type: 'verbo atemático',
      spanish: 'ser, estar',
      frequency: 2460
    },
    {
      greek: 'γίνομαι',
      type: 'verbo deponente',
      spanish: 'llego a ser, me hago',
      frequency: 669
    },
    {
      greek: 'λέγω',
      type: 'verbo temático',
      spanish: 'digo, hablo',
      frequency: 2255
    },
    {
      greek: 'ποιέω',
      type: 'verbo temático contracto',
      spanish: 'hago, realizo',
      frequency: 568
    },
    {
      greek: 'δίδωμι',
      type: 'verbo atemático',
      spanish: 'doy',
      frequency: 415
    }
  ],

  exercises: [
    {
      id: 'ex-10-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis de Voces y Modos Verbales',
      description: 'Identifica y analiza las características de voces y modos verbales en el griego.',
      items: [
        {
          id: 'fc-10-1',
          question: 'Activa',
          options: ['El sujeto realiza la acción'],
          correctAnswer: 0,
          explanation: 'Voz activa: el sujeto realiza la acción. Ejemplo: λύω (yo desato)'
        },
        {
          id: 'fc-10-2',
          question: 'Pasiva',
          options: ['El sujeto recibe la acción'],
          correctAnswer: 0,
          explanation: 'Voz pasiva: el sujeto recibe la acción. Desinencias medio-pasivas en aoristo y futuro.'
        },
        {
          id: 'fc-10-3',
          question: 'Media',
          options: ['El sujeto realiza la acción sobre sí mismo'],
          correctAnswer: 0,
          explanation: 'Voz media: acción reflexiva o de interés para el sujeto. Ejemplo: λύομαι (me desato)'
        },
        {
          id: 'fc-10-4',
          question: 'Indicativo',
          options: ['Expresa la realidad de la acción'],
          correctAnswer: 0,
          explanation: 'Modo indicativo: expresa la realidad de la acción. Incluye todos los tiempos (presente, imperfecto, futuro, aoristo, perfecto, pluscuamperfecto).'
        },
        {
          id: 'fc-10-5',
          question: 'Subjuntivo',
          options: ['Expresa probabilidad o subordinación'],
          correctAnswer: 0,
          explanation: 'Modo subjuntivo: expresa probabilidad, exhortación o subordinación. Usa vocales temáticas alargadas.'
        }
      ]
    },
    {
      id: 'ex-10-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Flexión Verbal',
      description: 'Identifica correctamente los elementos de la flexión verbal.',
      items: [
        {
          id: 'mc-10-1',
          question: '¿Cuántas voces hay en la conjugación griega?',
          options: ['dos', 'tres', 'cuatro'],
          correctAnswer: 1,
          explanation: 'Hay tres voces: activa, pasiva y media.'
        },
        {
          id: 'mc-10-2',
          question: '¿Cuántos modos conjugables hay?',
          options: ['dos', 'tres', 'cuatro'],
          correctAnswer: 2,
          explanation: 'Hay cuatro modos conjugables: indicativo, imperativo, subjuntivo y optativo.'
        },
        {
          id: 'mc-10-3',
          question: '¿Cuántos tiempos verbales hay?',
          options: ['cuatro', 'cinco', 'seis'],
          correctAnswer: 2,
          explanation: 'Hay seis tiempos: presente, imperfecto, futuro, aoristo, perfecto y pluscuamperfecto.'
        },
        {
          id: 'mc-10-4',
          question: '¿Cuál es la característica de los tiempos primarios?',
          options: ['Tienen aumento', 'Carecen de aumento', 'Son pasados'],
          correctAnswer: 1,
          explanation: 'Los tiempos primarios carecen de aumento.'
        },
        {
          id: 'mc-10-5',
          question: '¿Qué son los verbos deponentes?',
          options: ['Verbos sin tema', 'Verbos con forma media pero significado activo', 'Verbos sin voz'],
          correctAnswer: 1,
          explanation: 'Los verbos deponentes tienen forma media o pasiva pero significado activo.'
        }
      ]
    },
    {
      id: 'ex-10-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Generalidades Verbales',
      description: 'Determina si las afirmaciones sobre flexión verbal son verdaderas o falsas.',
      items: [
        {
          id: 'tf-10-1',
          question: 'La voz media expresa una acción reflexiva.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La voz media expresa que el sujeto realiza la acción sobre sí mismo.'
        },
        {
          id: 'tf-10-2',
          question: 'Los verbos deponentes tienen forma activa pero significado pasivo.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. Los verbos deponentes tienen forma media/pasiva pero significado activo.'
        },
        {
          id: 'tf-10-3',
          question: 'El optativo es muy común en el NT.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El optativo tiende a desaparecer en el griego helenístico.'
        },
        {
          id: 'tf-10-4',
          question: 'Los tiempos secundarios tienen aumento.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Los tiempos secundarios (imperfecto, aoristo, pluscuamperfecto) tienen aumento.'
        },
        {
          id: 'tf-10-5',
          question: 'La mayoría de verbos griegos son temáticos.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. Los verbos en -ω (temáticos) son la mayoría.'
        }
      ]
    },
    {
      id: 'ex-10-4',
      type: 'matching',
      title: 'Columnas Paralelas: Tiempos y Características',
      description: 'Empareja cada tiempo con su característica correcta.',
      items: [
        {
          id: 'match-10-1',
          description: 'Empareja los tiempos con sus características',
          pairs: [
            { left: 'Presente', right: 'Acción actual o habitual' },
            { left: 'Imperfecto', right: 'Acción pasada durativa' },
            { left: 'Futuro', right: 'Acción futura' },
            { left: 'Aoristo', right: 'Acción pasada puntual' },
            { left: 'Perfecto', right: 'Acción completada con resultados presentes' },
            { left: 'Pluscuamperfecto', right: 'Acción pasada completada' },
            { left: 'Indicativo', right: 'Modo que expresa realidad' },
            { left: 'Imperativo', right: 'Modo que expresa orden' }
          ],
          correctAnswer: 0,
          explanation: 'Cada tiempo y modo tiene características específicas.'
        }
      ]
    },
    {
      id: 'ex-10-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Terminología Verbal',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-10-1',
          question: 'Hay _____ voces en la conjugación griega.',
          options: ['dos', 'tres', 'cuatro'],
          correctAnswer: 1,
          explanation: 'Hay tres voces: activa, pasiva y media.'
        },
        {
          id: 'fb-10-2',
          question: 'Los _____ son formas nominales del verbo.',
          options: ['indicativos', 'infinitivos y participios', 'imperativos'],
          correctAnswer: 1,
          explanation: 'El infinitivo y el participio son modos declinables o formas nominales.'
        },
        {
          id: 'fb-10-3',
          question: 'Los tiempos _____ indican un tiempo pasado.',
          options: ['primarios', 'secundarios', 'futuros'],
          correctAnswer: 1,
          explanation: 'Los tiempos secundarios indican un tiempo pasado.'
        },
        {
          id: 'fb-10-4',
          question: 'Los verbos _____ tienen forma media pero significado activo.',
          options: ['activos', 'deponentes', 'pasivos'],
          correctAnswer: 1,
          explanation: 'Los verbos deponentes tienen forma media/pasiva pero significado activo.'
        },
        {
          id: 'fb-10-5',
          question: 'La mayoría de verbos griegos son _____ (en -ω).',
          options: ['atemáticos', 'temáticos', 'contractos'],
          correctAnswer: 1,
          explanation: 'La mayoría de verbos griegos son temáticos (en -ω).'
        }
      ]
    },
    {
      id: 'ex-10-6',
      type: 'translation',
      title: 'Traducción: Verbos Griegos',
      description: 'Traduce los verbos griegos al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-10-1',
          question: 'λύω',
          options: ['soy desatado', 'desato', 'me desato'],
          correctAnswer: 1,
          explanation: 'λύω significa "desato" (voz activa).'
        },
        {
          id: 'tr-10-2',
          question: 'λύομαι',
          options: ['desato', 'soy desatado', 'me desato'],
          correctAnswer: 2,
          explanation: 'λύομαι significa "me desato" (voz media).'
        },
        {
          id: 'tr-10-3',
          question: 'ἀποκρίνομαι',
          options: ['soy respondido', 'respondo', 'me respondo'],
          correctAnswer: 1,
          explanation: 'ἀποκρίνομαι es un verbo deponente que significa "respondo".'
        },
        {
          id: 'tr-10-4',
          question: 'γίνομαι',
          options: ['hago', 'llego a ser', 'soy hecho'],
          correctAnswer: 1,
          explanation: 'γίνομαι significa "llego a ser" o "me hago".'
        },
        {
          id: 'tr-10-5',
          question: 'εἰμί',
          options: ['hago', 'digo', 'soy, estoy'],
          correctAnswer: 2,
          explanation: 'εἰμί significa "soy" o "estoy".'
        }
      ]
    }
  ]
};

export const lessons1To10 = {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
};
