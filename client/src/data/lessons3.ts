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

export const lesson21: Lesson = {
  id: 'lesson-21',
  number: 21,
  title: 'Modo Subjuntivo del Verbo λύω en las Tres Voces',
  introduction: 'El modo subjuntivo es muy frecuente en griego y se encuentra tanto en oraciones principales como en subordinadas. El uso más frecuente del subjuntivo en el Nuevo Testamento es el de expresar finalidad. Dos elementos caracterizan este modo: primero, siempre todos sus tiempos toman desinencias primarias; segundo, la característica modal, que consiste en el alargamiento de la vocal de unión: la ο en ω y la ε en η. El subjuntivo expresa la acción de manera potencial o eventual, no como algo cierto o real como el indicativo.',
  sections: [
    {
      id: 'sec-21-1',
      title: '21.1 Características Generales del Modo Subjuntivo',
      content: 'El modo subjuntivo se caracteriza por dos elementos fundamentales. Primero, siempre todos sus tiempos toman desinencias primarias, no secundarias. Segundo, la característica modal, que consiste en el alargamiento de la vocal de unión: la ο en ω y la ε en η. Esto diferencia al subjuntivo del indicativo, que usa vocales de unión sin alargar. El subjuntivo es muy frecuente en el Nuevo Testamento, especialmente para expresar finalidad (con la conjunción ἵνα "para que", "a fin de que").',
      subsections: [
        {
          title: 'Desinencias Primarias en Subjuntivo',
          content: 'El subjuntivo utiliza siempre desinencias primarias, incluso en tiempos que normalmente serían de pasado.',
          items: [
            'Sg. 1) -ω, -ω-μαι | Pl. 1) -ω-μεν, -ω-μεθα',
            'Sg. 2) -ῃς, -ῃ | Pl. 2) -ητε, -ησθε',
            'Sg. 3) -ῃ, -ηται | Pl. 3) -ωσι(ν), -ωνται'
          ]
        },
        {
          title: 'Característica Modal: Alargamiento Vocálico',
          content: 'La característica modal es el alargamiento de la vocal de unión.',
          items: [
            'ο → ω (presente activo)',
            'ε → η (presente pasivo, aoristo pasivo)',
            'Este alargamiento diferencia al subjuntivo del indicativo'
          ]
        }
      ]
    },
    {
      id: 'sec-21-2',
      title: '21.2 Presente de Subjuntivo Activo',
      content: 'El presente de subjuntivo activo es igual al del modo indicativo pero con la vocal de unión alargada (es decir, con su característica modal). La ο se alarga a ω. El presente de subjuntivo expresa una acción potencial en presente, frecuentemente con valor de finalidad cuando va introducido por ἵνα.',
      subsections: [
        {
          title: 'Paradigma del Presente de Subjuntivo Activo',
          content: 'El presente de subjuntivo activo mantiene la estructura del presente indicativo pero con vocal de unión alargada.',
          items: [
            'Sg. 1) λύ-ω "que yo desate"',
            'Sg. 2) λύ-ῃς',
            'Sg. 3) λύ-ῃ',
            'Pl. 1) λύ-ω-μεν',
            'Pl. 2) λύ-η-τε',
            'Pl. 3) λύ-ω-σι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-21-3',
      title: '21.3 Aoristo de Subjuntivo Activo',
      content: 'El aoristo de subjuntivo activo se forma con la característica temporal -σ- más la característica modal. La -α de la característica temporal (-σα) desaparece ante la característica modal (esto es, la vocal de unión alargada). El aoristo de subjuntivo expresa una acción potencial puntual, frecuentemente con valor de finalidad.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Subjuntivo Activo',
          content: 'El aoristo de subjuntivo activo pierde la -α de la característica temporal ante la vocal de unión alargada.',
          items: [
            'Sg. 1) λύ-σ-ω "que yo haya desatado"',
            'Sg. 2) λύ-σ-ῃς',
            'Sg. 3) λύ-σ-ῃ',
            'Pl. 1) λύ-σ-ω-μεν',
            'Pl. 2) λύ-σ-η-τε',
            'Pl. 3) λύ-σ-ω-σι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-21-4',
      title: '21.4 Perfecto de Subjuntivo Activo',
      content: 'En griego clásico, la -α de la característica temporal (-κα) desaparece ante la característica modal, como ocurría en el aoristo. Pero en el Nuevo Testamento, que se utiliza en raras ocasiones, se forma perifrásticamente, es decir, mediante el participio de perfecto activo más el presente de subjuntivo del verbo εἰμί. Esta construcción perifrástica es más común en el griego helenístico.',
      subsections: [
        {
          title: 'Construcción Perifrástica del Perfecto de Subjuntivo',
          content: 'El perfecto de subjuntivo activo en el NT se forma con participio de perfecto + subjuntivo de εἰμί.',
          items: [
            'Sg. 1) λε-λυ-κὼς ὦ "que yo haya desatado"',
            'Sg. 2) λε-λυ-κὼς ᾖς',
            'Sg. 3) λε-λυ-κὼς ᾖ',
            'Pl. 1) λε-λυ-κότες ὦμεν',
            'Pl. 2) λε-λυ-κότες ἦτε',
            'Pl. 3) λε-λυ-κότες ὦσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-21-5',
      title: '21.5 Presente de Subjuntivo Pasivo',
      content: 'El presente de subjuntivo pasivo es igual al activo pero con desinencias pasivas. La vocal de unión se alarga de ε a η. El presente de subjuntivo pasivo expresa una acción potencial en presente con significado pasivo, frecuentemente con valor de finalidad.',
      subsections: [
        {
          title: 'Paradigma del Presente de Subjuntivo Pasivo',
          content: 'El presente de subjuntivo pasivo mantiene la estructura del presente indicativo pasivo pero con vocal de unión alargada.',
          items: [
            'Sg. 1) λύ-ω-μαι "que yo sea desatado"',
            'Sg. 2) λύ-ῃ (de λύ-η-σαι)',
            'Sg. 3) λύ-η-ται',
            'Pl. 1) λυ-ώ-μεθα',
            'Pl. 2) λύ-η-σθε',
            'Pl. 3) λύ-ω-νται'
          ]
        }
      ]
    },
    {
      id: 'sec-21-6',
      title: '21.6 Aoristo de Subjuntivo Pasivo',
      content: 'El aoristo de subjuntivo pasivo se forma con la característica temporal -θ- más la característica modal. La -η de la característica temporal (-θη) desaparece ante la característica modal. Lleva desinencias activas primarias. El aoristo de subjuntivo pasivo expresa una acción potencial puntual con significado pasivo.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Subjuntivo Pasivo',
          content: 'El aoristo de subjuntivo pasivo pierde la -η de la característica temporal ante la vocal de unión alargada.',
          items: [
            'Sg. 1) λυ-θ-ῶ "que yo haya sido desatado"',
            'Sg. 2) λυ-θ-ῇς',
            'Sg. 3) λυ-θ-ῇ',
            'Pl. 1) λυ-θ-ῶ-μεν',
            'Pl. 2) λυ-θ-ᾶ-τε',
            'Pl. 3) λυ-θ-ῶ-σι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-21-7',
      title: '21.7 Perfecto de Subjuntivo Pasivo',
      content: 'El perfecto de subjuntivo pasivo se forma con el participio de perfecto medio-pasivo más el presente de subjuntivo del verbo εἰμί. Esta es la forma estándar en el Nuevo Testamento. El perfecto de subjuntivo pasivo expresa una acción potencial que ha sido completada con significado pasivo.',
      subsections: [
        {
          title: 'Construcción Perifrástica del Perfecto de Subjuntivo Pasivo',
          content: 'El perfecto de subjuntivo pasivo se forma con participio de perfecto medio-pasivo + subjuntivo de εἰμί.',
          items: [
            'Sg. 1) λε-λυ-μένος -η -ον ὦ "que yo haya sido desatado"',
            'Sg. 2) λε-λυ-μένος -η -ον ᾖς',
            'Sg. 3) λε-λυ-μένος -η -ον ᾖ',
            'Pl. 1) λε-λυ-μένοι -αι -α ὦμεν',
            'Pl. 2) λε-λυ-μένοι -αι -α ἦτε',
            'Pl. 3) λε-λυ-μένοι -αι -α ὦσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-21-8',
      title: '21.8 Presente de Subjuntivo Medio',
      content: 'El presente de subjuntivo medio es igual al pasivo. Utiliza desinencias medio-pasivas primarias con vocal de unión alargada. El presente de subjuntivo medio expresa una acción potencial en presente con significado medio (acción que el sujeto realiza sobre sí mismo).',
      subsections: [
        {
          title: 'Paradigma del Presente de Subjuntivo Medio',
          content: 'El presente de subjuntivo medio es idéntico al presente de subjuntivo pasivo.',
          items: [
            'Sg. 1) λύ-ω-μαι "que yo me desate"',
            'Sg. 2) λύ-ῃ',
            'Sg. 3) λύ-η-ται',
            'Pl. 1) λυ-ώ-μεθα',
            'Pl. 2) λύ-η-σθε',
            'Pl. 3) λύ-ω-νται'
          ]
        }
      ]
    },
    {
      id: 'sec-21-9',
      title: '21.9 Aoristo de Subjuntivo Medio',
      content: 'El aoristo de subjuntivo medio es igual al activo pero con las desinencias medio-pasivas primarias. Se forma con la característica temporal -σ- más la característica modal. El aoristo de subjuntivo medio expresa una acción potencial puntual con significado medio.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Subjuntivo Medio',
          content: 'El aoristo de subjuntivo medio combina la característica temporal activa con desinencias medio-pasivas.',
          items: [
            'Sg. 1) λύ-σ-ω-μαι "que yo me haya desatado"',
            'Sg. 2) λύ-σ-ῃ (λύ-σ-η-σαι)',
            'Sg. 3) λύ-σ-η-ται',
            'Pl. 1) λυ-σ-ώ-μεθα',
            'Pl. 2) λύ-σ-η-σθε',
            'Pl. 3) λύ-σ-ω-νται'
          ]
        }
      ]
    },
    {
      id: 'sec-21-10',
      title: '21.10 Perfecto de Subjuntivo Medio',
      content: 'El perfecto de subjuntivo medio es igual al pasivo. Se forma con el participio de perfecto medio-pasivo más el presente de subjuntivo del verbo εἰμί. El perfecto de subjuntivo medio expresa una acción potencial que ha sido completada con significado medio.',
      subsections: [
        {
          title: 'Construcción del Perfecto de Subjuntivo Medio',
          content: 'El perfecto de subjuntivo medio es idéntico al perfecto de subjuntivo pasivo.',
          items: [
            'Sg. 1) λε-λυ-μένος -η -ον ὦ "que yo me haya desatado"',
            'Sg. 2) λε-λυ-μένος -η -ον ᾖς',
            'Sg. 3) λε-λυ-μένος -η -ον ᾖ',
            'Pl. 1) λε-λυ-μένοι -αι -α ὦμεν',
            'Pl. 2) λε-λυ-μένοι -αι -α ἦτε',
            'Pl. 3) λε-λυ-μένοι -αι -α ὦσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-21-11',
      title: '21.11 Modo Subjuntivo del Verbo εἰμί',
      content: 'El verbo εἰμί "ser" en modo subjuntivo solamente tiene presente. El presente de subjuntivo del verbo εἰμί se utiliza para formar construcciones perifrásticas de perfecto y pluscuamperfecto en subjuntivo. Las formas son: ὦ (1ª sg.), ᾖς (2ª sg.), ᾖ (3ª sg.), ὦμεν (1ª pl.), ἦτε (2ª pl.), ὦσι(ν) (3ª pl.).',
      subsections: [
        {
          title: 'Paradigma del Subjuntivo de εἰμί',
          content: 'El subjuntivo de εἰμί tiene solo presente y se usa en construcciones perifrásticas.',
          items: [
            'Sg. 1) ὦ "que yo sea"',
            'Sg. 2) ᾖς',
            'Sg. 3) ᾖ',
            'Pl. 1) ὦμεν',
            'Pl. 2) ἦτε',
            'Pl. 3) ὦσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-21-12',
      title: '21.12 Palabras Invariables Relacionadas',
      content: 'Existen varias palabras invariables que aparecen frecuentemente en textos con modo subjuntivo. El adverbio οὗ significa "donde", "adonde". La preposición πέραν con genitivo significa "más allá de", "al otro lado de"; τὸ πέραν significa "el otro lado". La preposición ἀντί con genitivo significa "en lugar de", "por"; ἀνθ\' ὧν significa "porque". El adverbio μηκέτι significa "no más", "ya no".',
      subsections: [
        {
          title: 'Palabras Invariables Principales',
          content: 'Estas palabras son fundamentales para la comprensión de textos griegos del NT con subjuntivo.',
          items: [
            'οὗ adv. "donde", "adonde"',
            'πέραν prep. gen. "más allá de", "al otro lado de"; τὸ πέραν "el otro lado"',
            'ἀντί prep. gen. "en lugar de", "por"; ἀνθ\' ὧν "porque"',
            'μηκέτι adv. "no más", "ya no"'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'λύω', type: 'verbo', spanish: 'desatar, soltar', frequency: 42 },
    { greek: 'λύ-ω (subj.)', type: 'subjuntivo activo', spanish: 'que yo desate', frequency: 15 },
    { greek: 'λύ-σ-ω (subj.)', type: 'subjuntivo activo', spanish: 'que yo haya desatado', frequency: 8 },
    { greek: 'λύ-ω-μαι (subj.)', type: 'subjuntivo pasivo', spanish: 'que yo sea desatado', frequency: 6 },
    { greek: 'λυ-θ-ῶ (subj.)', type: 'subjuntivo pasivo', spanish: 'que yo haya sido desatado', frequency: 4 },
    { greek: 'εἰμί', type: 'verbo', spanish: 'ser, estar', frequency: 2457 },
    { greek: 'ὦ (subj.)', type: 'subjuntivo', spanish: 'que yo sea', frequency: 128 },
    { greek: 'ἵνα', type: 'conjunción', spanish: 'para que, a fin de que', frequency: 663 },
    { greek: 'ὗ', type: 'adverbio', spanish: 'donde, adonde', frequency: 82 },
    { greek: 'πέραν', type: 'preposición', spanish: 'más allá de, al otro lado', frequency: 23 },
    { greek: 'ἀντί', type: 'preposición', spanish: 'en lugar de, por', frequency: 22 },
    { greek: 'μηκέτι', type: 'adverbio', spanish: 'no más, ya no', frequency: 17 },
    { greek: 'ποιέω', type: 'verbo', spanish: 'hacer, realizar', frequency: 568 },
    { greek: 'βουλεύω', type: 'verbo', spanish: 'aconsejar, deliberar', frequency: 6 },
    { greek: 'κρατέω', type: 'verbo', spanish: 'sostener, retener', frequency: 47 },
    { greek: 'ἀποκτείνω', type: 'verbo', spanish: 'matar', frequency: 74 },
    { greek: 'μαρτυρέω', type: 'verbo', spanish: 'testificar, dar testimonio', frequency: 76 },
    { greek: 'πιστεύω', type: 'verbo', spanish: 'creer, confiar', frequency: 241 },
    { greek: 'βαπτίζω', type: 'verbo', spanish: 'bautizar', frequency: 77 },
    { greek: 'μισέω', type: 'verbo', spanish: 'odiar', frequency: 39 },
    { greek: 'ἀφορίζω', type: 'verbo', spanish: 'apartar, separar', frequency: 10 },
    { greek: 'ὀνειδίζω', type: 'verbo', spanish: 'insultar, ultrajar', frequency: 9 },
    { greek: 'ἐκβάλλω', type: 'verbo', spanish: 'echar fuera, expulsar', frequency: 81 },
    { greek: 'τελειόω', type: 'verbo', spanish: 'perfeccionar, completar', frequency: 23 },
    { greek: 'γινώσκω', type: 'verbo', spanish: 'conocer, saber', frequency: 222 }
  ],
  exercises: [
    {
      id: 'ex-21-1',
      type: 'flashcard',
      title: 'Flashcards - Formas de Subjuntivo',
      description: 'Traduce formas de modo subjuntivo',
      items: [
        {
          id: 'fc-21-1',
          question: 'λύ-ω (subjuntivo)',
          options: ['que yo desate (presente subjuntivo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-ω es la primera persona singular del presente de subjuntivo activo.'
        },
        {
          id: 'fc-21-2',
          question: 'λύ-σ-ω (subjuntivo)',
          options: ['que yo haya desatado (aoristo subjuntivo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-σ-ω es la primera persona singular del aoristo de subjuntivo activo.'
        },
        {
          id: 'fc-21-3',
          question: 'λύ-ω-μαι (subjuntivo)',
          options: ['que yo sea desatado (presente subjuntivo pasivo)'],
          correctAnswer: 0,
          explanation: 'λύ-ω-μαι es la primera persona singular del presente de subjuntivo pasivo.'
        },
        {
          id: 'fc-21-4',
          question: 'λυ-θ-ῶ (subjuntivo)',
          options: ['que yo haya sido desatado (aoristo subjuntivo pasivo)'],
          correctAnswer: 0,
          explanation: 'λυ-θ-ῶ es la primera persona singular del aoristo de subjuntivo pasivo.'
        },
        {
          id: 'fc-21-5',
          question: 'ὦ (subjuntivo)',
          options: ['que yo sea (presente subjuntivo de εἰμί)'],
          correctAnswer: 0,
          explanation: 'ὦ es la primera persona singular del presente de subjuntivo de εἰμί.'
        },
        {
          id: 'fc-21-6',
          question: 'ἵνα',
          options: ['para que, a fin de que (conjunción final)'],
          correctAnswer: 0,
          explanation: 'ἵνα es la conjunción más frecuente para introducir oraciones finales con subjuntivo.'
        }
      ]
    },
    {
      id: 'ex-21-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Identificacion de Subjuntivos',
      description: 'Identifica la forma correcta de subjuntivo',
      items: [
        {
          id: 'mc-21-1',
          question: 'Cual es la característica modal del subjuntivo?',
          options: ['Desinencias secundarias', 'Alargamiento de la vocal de unión', 'Aumento'],
          correctAnswer: 1,
          explanation: 'La característica modal es el alargamiento de ο a ω y ε a η.'
        },
        {
          id: 'mc-21-2',
          question: 'Que desinencias utiliza el subjuntivo?',
          options: ['Desinencias secundarias', 'Desinencias primarias', 'Desinencias mixtas'],
          correctAnswer: 1,
          explanation: 'El subjuntivo siempre utiliza desinencias primarias.'
        },
        {
          id: 'mc-21-3',
          question: 'Como se forma el perfecto de subjuntivo activo en el NT?',
          options: ['Con -κα-', 'Perifrásticamente con participio + subjuntivo', 'Con -κε-'],
          correctAnswer: 1,
          explanation: 'En el NT se forma perifrásticamente: participio de perfecto + ὦ.'
        },
        {
          id: 'mc-21-4',
          question: 'Cual es el uso más frecuente del subjuntivo en el NT?',
          options: ['Condicional', 'Finalidad', 'Temporal'],
          correctAnswer: 1,
          explanation: 'El uso más frecuente es expresar finalidad, introducido por ἵνα.'
        },
        {
          id: 'mc-21-5',
          question: 'Cuantos tiempos tiene el subjuntivo de εἰμί?',
          options: ['Tres', 'Dos', 'Solo presente'],
          correctAnswer: 2,
          explanation: 'El subjuntivo de εἰμί tiene solo presente.'
        }
      ]
    },
    {
      id: 'ex-21-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas del Subjuntivo',
      description: 'Evalua tus conocimientos sobre modo subjuntivo',
      items: [
        {
          id: 'tf-21-1',
          question: 'El subjuntivo utiliza desinencias secundarias',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El subjuntivo siempre utiliza desinencias primarias.'
        },
        {
          id: 'tf-21-2',
          question: 'La característica modal es el alargamiento de la vocal de unión',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. ο → ω y ε → η es la característica modal del subjuntivo.'
        },
        {
          id: 'tf-21-3',
          question: 'El subjuntivo tiene imperfecto',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El subjuntivo no tiene imperfecto, solo presente, aoristo y perfecto.'
        },
        {
          id: 'tf-21-4',
          question: 'El perfecto de subjuntivo activo en el NT se forma perifrásticamente',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. Se forma con participio de perfecto + subjuntivo de εἰμί.'
        },
        {
          id: 'tf-21-5',
          question: 'La conjunción ἵνα introduce oraciones finales con subjuntivo',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. ἵνα es la conjunción más frecuente para finalidad en el NT.'
        }
      ]
    },
    {
      id: 'ex-21-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Formas',
      description: 'Empareja formas de subjuntivo con sus significados',
      items: [
        {
          id: 'match-21-1',
          description: 'Empareja formas de subjuntivo con sus significados',
          pairs: [
            { left: 'λύ-ω', right: 'que yo desate (pres. subj. act.)' },
            { left: 'λύ-σ-ω', right: 'que yo haya desatado (aor. subj. act.)' },
            { left: 'λύ-ω-μαι', right: 'que yo sea desatado (pres. subj. pas.)' },
            { left: 'λυ-θ-ῶ', right: 'que yo haya sido desatado (aor. subj. pas.)' },
            { left: 'ὦ', right: 'que yo sea (subj. de εἰμί)' },
            { left: 'λέ-λυ-κὼς ὦ', right: 'que yo haya desatado (perf. subj. act.)' },
            { left: 'λέ-λυ-μένος ὦ', right: 'que yo haya sido desatado (perf. subj. pas.)' },
            { left: 'ἵνα', right: 'para que, a fin de que' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente las formas y sus significados.'
        }
      ]
    },
    {
      id: 'ex-21-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Subjuntivo',
      description: 'Completa con la forma correcta de subjuntivo',
      items: [
        {
          id: 'fb-21-1',
          question: 'Que yo desate (presente subjuntivo activo, 1ª sg.): _____',
          options: ['λύω', 'λύ-ω', 'λύ-η'],
          correctAnswer: 1,
          explanation: 'λύ-ω es la forma correcta con vocal de unión alargada.'
        },
        {
          id: 'fb-21-2',
          question: 'Que yo haya desatado (aoristo subjuntivo activo, 1ª sg.): _____',
          options: ['λύσω', 'λύ-σ-ω', 'λύ-σ-η'],
          correctAnswer: 1,
          explanation: 'λύ-σ-ω es la forma correcta sin la -α de la característica temporal.'
        },
        {
          id: 'fb-21-3',
          question: 'Que yo sea desatado (presente subjuntivo pasivo, 1ª sg.): _____',
          options: ['λύομαι', 'λύ-ω-μαι', 'λύ-η-μαι'],
          correctAnswer: 1,
          explanation: 'λύ-ω-μαι es la forma correcta con desinencia pasiva.'
        },
        {
          id: 'fb-21-4',
          question: 'Que yo haya sido desatado (aoristo subjuntivo pasivo, 1ª sg.): _____',
          options: ['λυθῶ', 'λυ-θ-ῶ', 'λυ-θ-η'],
          correctAnswer: 1,
          explanation: 'λυ-θ-ῶ es la forma correcta sin la -η de la característica temporal.'
        },
        {
          id: 'fb-21-5',
          question: 'Que yo sea (presente subjuntivo de εἰμί, 1ª sg.): _____',
          options: ['εἰμί', 'ὦ', 'ᾖ'],
          correctAnswer: 1,
          explanation: 'ὦ es la primera persona singular del subjuntivo de εἰμί.'
        }
      ]
    },
    {
      id: 'ex-21-6',
      type: 'translation',
      title: 'Traduccion - Oraciones con Subjuntivo',
      description: 'Traduce oraciones con modo subjuntivo',
      items: [
        {
          id: 'tr-21-1',
          question: 'ἵνα ποιῶσιν ὑμῖν',
          options: ['para que hagan para vosotros', 'porque hacen para vosotros', 'si hacen para vosotros'],
          correctAnswer: 0,
          explanation: 'ἵνα introduce oración final con subjuntivo. ποιῶσιν es 3ª pl. pres. subj. act.'
        },
        {
          id: 'tr-21-2',
          question: 'ἵνα κρατήσωσιν αὐτόν',
          options: ['para que lo retengan', 'porque lo retienen', 'si lo retienen'],
          correctAnswer: 0,
          explanation: 'ἵνα introduce oración final. κρατήσωσιν es 3ª pl. aor. subj. act.'
        },
        {
          id: 'tr-21-3',
          question: 'ἵνα μαρτυρήσῃ',
          options: ['para que testifique', 'porque testifica', 'si testifica'],
          correctAnswer: 0,
          explanation: 'ἵνα introduce oración final. μαρτυρήσῃ es 3ª sg. aor. subj. act.'
        },
        {
          id: 'tr-21-4',
          question: 'ἵνα ὦσιν τετελειωμένοι',
          options: ['para que sean perfeccionados', 'porque son perfeccionados', 'si son perfeccionados'],
          correctAnswer: 0,
          explanation: 'ἵνα introduce oración final. ὦσιν es 3ª pl. pres. subj. de εἰμί con participio.'
        },
        {
          id: 'tr-21-5',
          question: 'ἵνα μὴ πεποιθότες ὦμεν',
          options: ['para que no estemos confiados', 'porque no estamos confiados', 'si no estamos confiados'],
          correctAnswer: 0,
          explanation: 'ἵνα introduce oración final negativa. ὦμεν es 1ª pl. pres. subj. de εἰμί.'
        }
      ]
    }
  ]
};

export const lesson22: Lesson = {
  id: 'lesson-22',
  number: 22,
  title: 'Modo Imperativo del Verbo λύω en las Tres Voces',
  introduction: 'El modo imperativo es el modo de la orden, mandato o exhortación. Se caracteriza por tener desinencias propias, diferentes a las del indicativo y subjuntivo. El imperativo solo tiene presente, aoristo y perfecto; no tiene imperfecto ni futuro. En primer lugar, hay que tener en cuenta las desinencias de este modo, diferentes a las vistas hasta ahora, propias de él. El imperativo no tiene 1ª persona, ya que nadie puede ordenarse a sí mismo. El resto de las personas se traducen como el modo subjuntivo. En el Nuevo Testamento, el imperativo es muy frecuente para expresar mandatos, órdenes y exhortaciones.',
  sections: [
    {
      id: 'sec-22-1',
      title: '22.1 Desinencias del Modo Imperativo',
      content: 'El modo imperativo tiene desinencias propias, diferentes a las del indicativo y subjuntivo. No tiene 1ª persona, ya que nadie puede ordenarse a sí mismo. Las desinencias activas son: 2ª sg. -ε (sin desinencia, solo vocal de apoyo), 3ª sg. -τω, 2ª pl. -τε, 3ª pl. -τωσαν. Las desinencias medio-pasivas son: 2ª sg. -σο, 3ª sg. -σθω, 2ª pl. -σθε, 3ª pl. -σθωσαν. El aoristo pasivo toma desinencias activas.',
      subsections: [
        {
          title: 'Desinencias Activas del Imperativo',
          content: 'Las desinencias activas del imperativo son propias de este modo.',
          items: [
            '2ª sg. -ε (vocal de apoyo)',
            '3ª sg. -τω',
            '2ª pl. -τε',
            '3ª pl. -τωσαν (-ντων en forma clásica)'
          ]
        },
        {
          title: 'Desinencias Medio-Pasivas del Imperativo',
          content: 'Las desinencias medio-pasivas del imperativo son también propias de este modo.',
          items: [
            '2ª sg. -σο',
            '3ª sg. -σθω',
            '2ª pl. -σθε',
            '3ª pl. -σθωσαν (-σθων en forma clásica)'
          ]
        }
      ]
    },
    {
      id: 'sec-22-2',
      title: '22.2 Presente de Imperativo Activo',
      content: 'El presente de imperativo activo expresa el aspecto de una acción que no ha terminado. Esto significa que expresa en la mayoría de los casos la idea de un mandato general, es decir, una regla de conducta que debe ser seguida en más de una ocasión. El presente de imperativo puede traducirse como "desata tú todavía" o "sigue desatando".',
      subsections: [
        {
          title: 'Paradigma del Presente de Imperativo Activo',
          content: 'El presente de imperativo activo expresa una acción continua o habitual.',
          items: [
            '2ª sg. λύ-ε "desata tú"',
            '3ª sg. λύ-ε-τω "(que) desate él"',
            '2ª pl. λύ-ε-τε "desatad vosotros"',
            '3ª pl. λύ-ε-τωσαν "(que) desaten ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-3',
      title: '22.3 Aoristo de Imperativo Activo',
      content: 'El aoristo de imperativo activo expresa el aspecto de una acción terminada. En general indica la idea de un mandato para una situación específica, es decir, una regla de conducta para ser ejecutada en un determinado momento. Excepto que en la 2ª persona del singular la desinencia es irregular (-ν), el resto es completamente regular.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Imperativo Activo',
          content: 'El aoristo de imperativo activo expresa una acción puntual o específica.',
          items: [
            '2ª sg. λύ-σ-ο-ν "desata tú"',
            '3ª sg. λυ-σά-τω "(que) desate él"',
            '2ª pl. λύ-σα-τε "desatad vosotros"',
            '3ª pl. λυ-σά-τωσαν "(que) desaten ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-4',
      title: '22.4 Perfecto de Imperativo Activo',
      content: 'El perfecto de imperativo activo expresa el resultado de la acción mandada o prohibida. En griego clásico se forma con el participio activo λελυκώς más el imperativo de presente del verbo εἰμί. Pero estas formas ya no se dan en griego helenístico, donde aparece la forma regularizada, es decir, con la característica temporal -κα (abreviada en -κε) más las desinencias del imperativo.',
      subsections: [
        {
          title: 'Paradigma del Perfecto de Imperativo Activo',
          content: 'El perfecto de imperativo activo en el NT se forma de manera regularizada.',
          items: [
            '2ª sg. λέ-λυ-κε "ten desatado tú"',
            '3ª sg. λε-λυ-κέ-τω "(que) tenga desatado él"',
            '2ª pl. λε-λύ-κε-τε "tened desatado vosotros"',
            '3ª pl. λε-λυ-κέ-τωσαν "(que) tengan desatado ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-5',
      title: '22.5 Presente de Imperativo Pasivo',
      content: 'El presente de imperativo pasivo expresa una acción continua con significado pasivo. La 2ª persona del singular es λύ-ου, que resulta de λύ-ε-σο por caída de la -σ- intervocálica y contracción de las vocales en contacto. El presente de imperativo pasivo se traduce como "sé desatado" o "sed desatados".',
      subsections: [
        {
          title: 'Paradigma del Presente de Imperativo Pasivo',
          content: 'El presente de imperativo pasivo expresa una acción continua con significado pasivo.',
          items: [
            '2ª sg. λύ-ου "sé desatado"',
            '3ª sg. λύ-ε-σθω "(que) sea él desatado"',
            '2ª pl. λύ-ε-σθε "sed desatados vosotros"',
            '3ª pl. λύ-ε-σθωσαν "(que) sean desatados ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-6',
      title: '22.6 Aoristo de Imperativo Pasivo',
      content: 'El aoristo de imperativo pasivo toma desinencias activas, como en el resto de los modos. La 2ª persona del singular cambia la desinencia -χι por -τι por la disimilación de aspiradas (pasa a su sorda correspondiente). La 3ª persona del plural es -θε- por -θη-, es decir, está abreviada la vocal de la característica temporal.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Imperativo Pasivo',
          content: 'El aoristo de imperativo pasivo expresa una acción puntual con significado pasivo.',
          items: [
            '2ª sg. λύ-θη-τι "sé desatado"',
            '3ª sg. λυ-θή-τω "(que) sea él desatado"',
            '2ª pl. λύ-θη-τε "sed desatados vosotros"',
            '3ª pl. λυ-θέ-τωσαν "(que) sean desatados ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-7',
      title: '22.7 Perfecto de Imperativo Pasivo',
      content: 'El perfecto de imperativo pasivo no tiene característica temporal. Se forma de manera similar al perfecto de imperativo activo, pero con desinencias medio-pasivas. El perfecto de imperativo pasivo expresa el resultado de una acción pasiva mandada o prohibida.',
      subsections: [
        {
          title: 'Paradigma del Perfecto de Imperativo Pasivo',
          content: 'El perfecto de imperativo pasivo expresa una acción pasiva completada.',
          items: [
            '2ª sg. λέ-λυ-σο "sé desatado"',
            '3ª sg. λε-λύ-σθω "(que) sea él desatado"',
            '2ª pl. λέ-λυ-σθε "sed desatados vosotros"',
            '3ª pl. λε-λύ-σθωσαν "(que) sean desatados ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-8',
      title: '22.8 Presente de Imperativo Medio',
      content: 'El presente de imperativo medio es igual al pasivo. Utiliza las mismas desinencias medio-pasivas. La 2ª persona del singular es λύ-ου, que resulta de λύ-ε-σο. El presente de imperativo medio se traduce como "desátate" o "desataos vosotros".',
      subsections: [
        {
          title: 'Paradigma del Presente de Imperativo Medio',
          content: 'El presente de imperativo medio es idéntico al presente de imperativo pasivo.',
          items: [
            '2ª sg. λύ-ου "desátate"',
            '3ª sg. λύ-ε-σθω "(que) se desate él"',
            '2ª pl. λύ-ε-σθε "desataos vosotros"',
            '3ª pl. λύ-ε-σθωσαν "(que) se desaten ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-9',
      title: '22.9 Aoristo de Imperativo Medio',
      content: 'El aoristo de imperativo medio es igual al activo pero sustituyendo las desinencias. La 2ª persona del singular toma la desinencia -ι, irregular. El aoristo de imperativo medio expresa una acción puntual con significado medio.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Imperativo Medio',
          content: 'El aoristo de imperativo medio expresa una acción puntual con significado medio.',
          items: [
            '2ª sg. λύ-σα-ι "desátate"',
            '3ª sg. λυ-σά-σθω "(que) se desate él"',
            '2ª pl. λύ-σα-σθε "desataos vosotros"',
            '3ª pl. λυ-σά-σθωσαν "(que) se desaten ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-10',
      title: '22.10 Perfecto de Imperativo Medio',
      content: 'El perfecto de imperativo medio es igual al pasivo. Se forma de manera similar al perfecto de imperativo pasivo. El perfecto de imperativo medio expresa el resultado de una acción media mandada o prohibida.',
      subsections: [
        {
          title: 'Paradigma del Perfecto de Imperativo Medio',
          content: 'El perfecto de imperativo medio es idéntico al perfecto de imperativo pasivo.',
          items: [
            '2ª sg. λέ-λυ-σο "desátate"',
            '3ª sg. λε-λύ-σθω "(que) se desate él"',
            '2ª pl. λέ-λυ-σθε "desataos vosotros"',
            '3ª pl. λε-λύ-σθωσαν "(que) se desaten ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-11',
      title: '22.11 Modo Imperativo del Verbo εἰμί',
      content: 'El verbo εἰμί en modo imperativo solamente tiene tiempo presente. Las formas son: ἴσθι (2ª sg.) "sé tú", ἔστω (3ª sg.) "(que) sea él", ἔστε (2ª pl.) "sed vosotros", ὄντων / ἔστωσαν (3ª pl.) "(que) sean ellos". La forma ἔτω es helenística y solo aparece en 1 Cor 16,22 y en Sant 5,12. La forma ἔστων es clásica y ya no se utiliza en el NT; y ἔστωσαν solo está presente en Lc 12,35 y en 1 Tim 3,12.',
      subsections: [
        {
          title: 'Paradigma del Imperativo de εἰμί',
          content: 'El imperativo de εἰμί tiene solo presente y se usa en construcciones imperativas.',
          items: [
            '2ª sg. ἴσθι "sé tú"',
            '3ª sg. ἔστω "(que) sea él"',
            '2ª pl. ἔστε "sed vosotros"',
            '3ª pl. ὄντων / ἔστωσαν "(que) sean ellos"'
          ]
        }
      ]
    },
    {
      id: 'sec-22-12',
      title: '22.12 Palabras Invariables Relacionadas',
      content: 'Existen varias palabras invariables que aparecen frecuentemente en textos con modo imperativo. El adverbio ὡσεί significa "como", "alrededor de", "aproximadamente". El adverbio interrogativo πότε significa "¿cuándo?"; ἕως πότε significa "¿hasta cuándo?", "¿cuánto tiempo?". La preposición impropia ἐπάνω con genitivo significa "sobre", "encima de"; también funciona como adverbio "encima". La conjunción κἄν (καί + ἐάν) significa "aunque", "aun cuando", "y si".',
      subsections: [
        {
          title: 'Palabras Invariables Principales',
          content: 'Estas palabras son fundamentales para la comprensión de textos griegos del NT con imperativo.',
          items: [
            'ὡσεί adv. "como", "alrededor de", "aproximadamente"',
            'πότε adv. interrogativo "¿cuándo?"; ἕως πότε "¿hasta cuándo?"',
            'ἐπάνω prep. impropia gen. "sobre", "encima de"; adv. "encima"',
            'κἄν conj. "aunque", "aun cuando", "y si"'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'λύω', type: 'verbo', spanish: 'desatar, soltar', frequency: 42 },
    { greek: 'λύ-ε (imp.)', type: 'imperativo activo', spanish: 'desata tú', frequency: 8 },
    { greek: 'λύ-σ-ο-ν (imp.)', type: 'imperativo activo', spanish: 'desata tú (aoristo)', frequency: 5 },
    { greek: 'λύ-ου (imp.)', type: 'imperativo pasivo', spanish: 'sé desatado', frequency: 4 },
    { greek: 'λύ-θη-τι (imp.)', type: 'imperativo pasivo', spanish: 'sé desatado (aoristo)', frequency: 2 },
    { greek: 'εἰμί', type: 'verbo', spanish: 'ser, estar', frequency: 2457 },
    { greek: 'ἴσθι (imp.)', type: 'imperativo', spanish: 'sé tú', frequency: 42 },
    { greek: 'ἔστω (imp.)', type: 'imperativo', spanish: '(que) sea él', frequency: 18 },
    { greek: 'ὡσεί', type: 'adverbio', spanish: 'como, alrededor de', frequency: 21 },
    { greek: 'πότε', type: 'adverbio', spanish: '¿cuándo?', frequency: 29 },
    { greek: 'ἐπάνω', type: 'preposición', spanish: 'sobre, encima de', frequency: 19 },
    { greek: 'κἄν', type: 'conjunción', spanish: 'aunque, aun cuando', frequency: 17 },
    { greek: 'ἐγείρω', type: 'verbo', spanish: 'levantarse, despertar', frequency: 144 },
    { greek: 'περιπατέω', type: 'verbo', spanish: 'andar, caminar', frequency: 95 },
    { greek: 'ἑτοιμάζω', type: 'verbo', spanish: 'preparar, disponer', frequency: 40 },
    { greek: 'φοβέω', type: 'verbo', spanish: 'temer, tener miedo', frequency: 95 },
    { greek: 'πιστεύω', type: 'verbo', spanish: 'creer, confiar', frequency: 241 },
    { greek: 'σῴζω', type: 'verbo', spanish: 'salvar, rescatar', frequency: 106 },
    { greek: 'ὑγιαίνω', type: 'verbo', spanish: 'estar sano, ser saludable', frequency: 12 },
    { greek: 'φεύγω', type: 'verbo', spanish: 'huir, escapar', frequency: 29 },
    { greek: 'ἐκχωρέω', type: 'verbo', spanish: 'partir, retirarse', frequency: 1 },
    { greek: 'εἰσέρχομαι', type: 'verbo', spanish: 'entrar, ir adentro', frequency: 194 },
    { greek: 'ταράσσω', type: 'verbo', spanish: 'turbar, perturbar', frequency: 17 },
    { greek: 'δειλιάω', type: 'verbo', spanish: 'tener miedo, ser cobarde', frequency: 2 },
    { greek: 'κρίνω', type: 'verbo', spanish: 'juzgar, condenar', frequency: 114 }
  ],
  exercises: [
    {
      id: 'ex-22-1',
      type: 'flashcard',
      title: 'Flashcards - Formas de Imperativo',
      description: 'Traduce formas de modo imperativo',
      items: [
        {
          id: 'fc-22-1',
          question: 'λύ-ε (imperativo)',
          options: ['desata tú (presente imperativo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-ε es la segunda persona singular del presente de imperativo activo.'
        },
        {
          id: 'fc-22-2',
          question: 'λύ-σ-ο-ν (imperativo)',
          options: ['desata tú (aoristo imperativo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-σ-ο-ν es la segunda persona singular del aoristo de imperativo activo.'
        },
        {
          id: 'fc-22-3',
          question: 'λύ-ου (imperativo)',
          options: ['sé desatado (presente imperativo pasivo)'],
          correctAnswer: 0,
          explanation: 'λύ-ου es la segunda persona singular del presente de imperativo pasivo.'
        },
        {
          id: 'fc-22-4',
          question: 'λύ-θη-τι (imperativo)',
          options: ['sé desatado (aoristo imperativo pasivo)'],
          correctAnswer: 0,
          explanation: 'λύ-θη-τι es la segunda persona singular del aoristo de imperativo pasivo.'
        },
        {
          id: 'fc-22-5',
          question: 'ἴσθι (imperativo)',
          options: ['sé tú (imperativo de εἰμί)'],
          correctAnswer: 0,
          explanation: 'ἴσθι es la segunda persona singular del imperativo de εἰμί.'
        },
        {
          id: 'fc-22-6',
          question: 'ἔστω (imperativo)',
          options: ['(que) sea él (imperativo de εἰμί)'],
          correctAnswer: 0,
          explanation: 'ἔστω es la tercera persona singular del imperativo de εἰμί.'
        }
      ]
    },
    {
      id: 'ex-22-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Identificacion de Imperativos',
      description: 'Identifica la forma correcta de imperativo',
      items: [
        {
          id: 'mc-22-1',
          question: 'Cuantas personas tiene el imperativo?',
          options: ['Todas las personas', 'Solo 2ª y 3ª persona', 'Solo 1ª y 2ª persona'],
          correctAnswer: 1,
          explanation: 'El imperativo no tiene 1ª persona, ya que nadie puede ordenarse a sí mismo.'
        },
        {
          id: 'mc-22-2',
          question: 'Que tiempos tiene el imperativo?',
          options: ['Presente, imperfecto, futuro', 'Presente, aoristo, perfecto', 'Solo presente'],
          correctAnswer: 1,
          explanation: 'El imperativo tiene presente, aoristo y perfecto; no tiene imperfecto ni futuro.'
        },
        {
          id: 'mc-22-3',
          question: 'Cual es la desinencia de 2ª sg. del presente imperativo activo?',
          options: ['-ε', '-ο', '-α'],
          correctAnswer: 0,
          explanation: '-ε es la desinencia (vocal de apoyo) de 2ª sg. del presente imperativo activo.'
        },
        {
          id: 'mc-22-4',
          question: 'Cual es la desinencia de 3ª pl. del presente imperativo activo?',
          options: ['-τε', '-τωσαν', '-ντων'],
          correctAnswer: 1,
          explanation: '-τωσαν es la desinencia de 3ª pl. del presente imperativo activo.'
        },
        {
          id: 'mc-22-5',
          question: 'Que expresa el presente de imperativo?',
          options: ['Acción terminada', 'Acción continua o habitual', 'Acción completada'],
          correctAnswer: 1,
          explanation: 'El presente de imperativo expresa una acción continua o habitual.'
        }
      ]
    },
    {
      id: 'ex-22-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas del Imperativo',
      description: 'Evalua tus conocimientos sobre modo imperativo',
      items: [
        {
          id: 'tf-22-1',
          question: 'El imperativo tiene 1ª persona',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El imperativo no tiene 1ª persona, ya que nadie puede ordenarse a sí mismo.'
        },
        {
          id: 'tf-22-2',
          question: 'El imperativo tiene imperfecto',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El imperativo solo tiene presente, aoristo y perfecto.'
        },
        {
          id: 'tf-22-3',
          question: 'El aoristo de imperativo expresa una acción puntual',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El aoristo de imperativo expresa una acción puntual o específica.'
        },
        {
          id: 'tf-22-4',
          question: 'El presente de imperativo pasivo es igual al medio',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El presente de imperativo medio es igual al pasivo.'
        },
        {
          id: 'tf-22-5',
          question: 'El imperativo de εἰμί tiene presente, aoristo y perfecto',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El imperativo de εἰμί solo tiene presente.'
        }
      ]
    },
    {
      id: 'ex-22-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Formas',
      description: 'Empareja formas de imperativo con sus significados',
      items: [
        {
          id: 'match-22-1',
          description: 'Empareja formas de imperativo con sus significados',
          pairs: [
            { left: 'λύ-ε', right: 'desata tú (pres. imp. act.)' },
            { left: 'λύ-σ-ο-ν', right: 'desata tú (aor. imp. act.)' },
            { left: 'λύ-ου', right: 'sé desatado (pres. imp. pas.)' },
            { left: 'λύ-θη-τι', right: 'sé desatado (aor. imp. pas.)' },
            { left: 'ἴσθι', right: 'sé tú (imp. de εἰμί)' },
            { left: 'ἔστω', right: '(que) sea él (imp. de εἰμί)' },
            { left: 'λύ-ε-τε', right: 'desatad vosotros (pres. imp. act.)' },
            { left: 'λύ-ε-σθε', right: 'sed desatados vosotros (pres. imp. pas.)' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente las formas y sus significados.'
        }
      ]
    },
    {
      id: 'ex-22-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Imperativo',
      description: 'Completa con la forma correcta de imperativo',
      items: [
        {
          id: 'fb-22-1',
          question: 'Desata tú (presente imperativo activo, 2ª sg.): _____',
          options: ['λύω', 'λύ-ε', 'λύ-ο'],
          correctAnswer: 1,
          explanation: 'λύ-ε es la forma correcta con vocal de apoyo.'
        },
        {
          id: 'fb-22-2',
          question: 'Desata tú (aoristo imperativo activo, 2ª sg.): _____',
          options: ['λύσον', 'λύ-σ-ο-ν', 'λύ-σα'],
          correctAnswer: 1,
          explanation: 'λύ-σ-ο-ν es la forma correcta con desinencia irregular -ν.'
        },
        {
          id: 'fb-22-3',
          question: 'Sé desatado (presente imperativo pasivo, 2ª sg.): _____',
          options: ['λύεσο', 'λύ-ου', 'λύ-η'],
          correctAnswer: 1,
          explanation: 'λύ-ου es la forma correcta resultante de contracción.'
        },
        {
          id: 'fb-22-4',
          question: 'Sé desatado (aoristo imperativo pasivo, 2ª sg.): _____',
          options: ['λύθησο', 'λύ-θη-τι', 'λύ-θη'],
          correctAnswer: 1,
          explanation: 'λύ-θη-τι es la forma correcta con disimilación de aspiradas.'
        },
        {
          id: 'fb-22-5',
          question: 'Sé tú (imperativo de εἰμί, 2ª sg.): _____',
          options: ['εἰμί', 'ἴσθι', 'ἔστω'],
          correctAnswer: 1,
          explanation: 'ἴσθι es la segunda persona singular del imperativo de εἰμί.'
        }
      ]
    },
    {
      id: 'ex-22-6',
      type: 'translation',
      title: 'Traduccion - Oraciones con Imperativo',
      description: 'Traduce oraciones con modo imperativo',
      items: [
        {
          id: 'tr-22-1',
          question: 'ἔγειρε καὶ περιπάτει',
          options: ['levántate y anda', 'levantándose y andando', 'se levanta y anda'],
          correctAnswer: 0,
          explanation: 'ἔγειρε y περιπάτει son imperativos activos de 2ª sg.'
        },
        {
          id: 'tr-22-2',
          question: 'ἑτοιμάσατε τὴν ὁδὸν κυρίου',
          options: ['preparad el camino del Señor', 'preparando el camino del Señor', 'preparan el camino del Señor'],
          correctAnswer: 0,
          explanation: 'ἑτοιμάσατε es imperativo activo de 2ª pl. aoristo.'
        },
        {
          id: 'tr-22-3',
          question: 'μὴ φοβοῦ, μόνον πίστευσον',
          options: ['no temas, solo cree', 'no temiendo, solo creyendo', 'no teme, solo cree'],
          correctAnswer: 0,
          explanation: 'φοβοῦ y πίστευσον son imperativos de 2ª sg. con negación μή.'
        },
        {
          id: 'tr-22-4',
          question: 'ὕπαγε εἰς εἰρήνην',
          options: ['vete en paz', 'yendo en paz', 'va en paz'],
          correctAnswer: 0,
          explanation: 'ὕπαγε es imperativo activo de 2ª sg. aoristo.'
        },
        {
          id: 'tr-22-5',
          question: 'μὴ ταρασσέσθω ὑμῶν ἡ καρδία',
          options: ['que no sea turbado vuestro corazón', 'no siendo turbado vuestro corazón', 'no es turbado vuestro corazón'],
          correctAnswer: 0,
          explanation: 'ταρασσέσθω es imperativo pasivo de 3ª sg. presente con negación μή.'
        }
      ]
    }
  ]
};

export const lesson23: Lesson = {
  id: 'lesson-23',
  number: 23,
  title: 'Modo Optativo del Verbo λύω en las Tres Voces',
  introduction: 'El modo optativo es el modo de la posibilidad, el deseo y la incertidumbre. Se caracteriza por dos elementos fundamentales. Primero, siempre todos sus tiempos (excepto la 1ª persona del singular del presente, que toma -μι) toman desinencias secundarias, a diferencia del subjuntivo que toma desinencias primarias. Segundo, la característica modal, que consiste en una -ι, que al combinarse con las vocales de unión y con la -α final de la característica temporal del aoristo, forma los diptongos -οι, -αι y -ει. El uso del optativo es muy reducido en la koiné: en el Nuevo Testamento se encuentra solo sesenta y cinco veces. De hecho, deja de utilizarse en los tiempos futuro y perfecto. En su lugar se emplea el modo imperativo o perífrasis mediante los verbos βούλομαι y θέλω "querer" o mediante la partícula ὄφελον "ojalá".',
  sections: [
    {
      id: 'sec-23-1',
      title: '23.1 Características Generales del Modo Optativo',
      content: 'El modo optativo se caracteriza por dos elementos fundamentales. Primero, siempre todos sus tiempos (excepto la 1ª persona del singular del presente, que toma -μι) toman desinencias secundarias. Recordemos que en el subjuntivo tomaban desinencias primarias. Segundo, la característica modal, que consiste en una -ι, que al combinarse con las vocales de unión y con la -α final de la característica temporal del aoristo, forma los diptongos -οι, -αι y -ει. Recordemos que en el subjuntivo la característica modal consistía en el alargamiento de las vocales de unión.',
      subsections: [
        {
          title: 'Desinencias Secundarias en Optativo',
          content: 'El optativo utiliza siempre desinencias secundarias, excepto la 1ª persona del singular del presente.',
          items: [
            'Sg. 1) -μι (presente), -ν (otros tiempos) | Pl. 1) -μεν',
            'Sg. 2) -ς | Pl. 2) -τε',
            'Sg. 3) -ν | Pl. 3) -ν'
          ]
        },
        {
          title: 'Característica Modal: Diptongos',
          content: 'La característica modal es una -ι que forma diptongos con las vocales de unión.',
          items: [
            'ο + ι → οι (presente activo)',
            'α + ι → αι (aoristo activo)',
            'ε + ι → ει (presente pasivo)',
            'Estos diptongos diferencian al optativo del subjuntivo'
          ]
        }
      ]
    },
    {
      id: 'sec-23-2',
      title: '23.2 Presente de Optativo Activo',
      content: 'El presente de optativo activo está formado por el tema verbal, la vocal de unión que junto a la característica modal resulta el diptongo -οι, y las desinencias secundarias en todos los tiempos, excepto en la 1ª persona del singular que toma -μι. Expresa un deseo continuado o habitual. El optativo en presente equivale en español al imperfecto de subjuntivo o al condicional simple.',
      subsections: [
        {
          title: 'Paradigma del Presente de Optativo Activo',
          content: 'El presente de optativo activo expresa un deseo continuado.',
          items: [
            'Sg. 1) λύ-οι-μι "desataría, desatara"',
            'Sg. 2) λύ-οι-ς',
            'Sg. 3) λύ-οι',
            'Pl. 1) λύ-οι-μεν',
            'Pl. 2) λύ-οι-τε',
            'Pl. 3) λύ-οι-εν'
          ]
        }
      ]
    },
    {
      id: 'sec-23-3',
      title: '23.3 Aoristo de Optativo Activo',
      content: 'El aoristo de optativo activo cambió las desinencias clásicas -αιμι, -ειας, -ειε, -αιμεν, -αιτε, -ειαν en las helenísticas -αιμι, -αις, -αι, -αιμεν, -αιτε, -αιεν. Esto entra dentro de la dinámica de la koiné de regularizar el sistema verbal: la 2ª y 3ª persona del singular y la 3ª del plural que en griego clásico eran irregulares las regularizó. El aoristo de optativo expresa un deseo puntual.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Optativo Activo',
          content: 'El aoristo de optativo activo expresa un deseo puntual.',
          items: [
            'Sg. 1) λύ-σα-ι-μι "hubiera desatado"',
            'Sg. 2) λύ-σα-ι-ς',
            'Sg. 3) λύ-σα-ι',
            'Pl. 1) λύ-σα-ι-μεν',
            'Pl. 2) λύ-σα-ι-τε',
            'Pl. 3) λύ-σα-ι-εν'
          ]
        }
      ]
    },
    {
      id: 'sec-23-4',
      title: '23.4 Futuro de Optativo Activo',
      content: 'El futuro de optativo activo no se utiliza en el Nuevo Testamento; sí en griego clásico. Las formas clásicas serían: λύ-σ-οι-μι, λύ-σ-οι-ς, λύ-σ-οι, etc. Esta ausencia en el NT refleja la tendencia de la koiné de simplificar el sistema modal.',
      subsections: [
        {
          title: 'Nota sobre el Futuro de Optativo',
          content: 'El futuro de optativo no aparece en el Nuevo Testamento.',
          items: [
            'Forma clásica: λύ-σ-οι-μι',
            'Ausencia en el NT refleja simplificación de la koiné',
            'Reemplazado por otros modos en textos helenísticos'
          ]
        }
      ]
    },
    {
      id: 'sec-23-5',
      title: '23.5 Presente de Optativo Pasivo',
      content: 'El presente de optativo pasivo es igual al activo pero con desinencias pasivas (secundarias). En la 2ª persona del singular la -σ de la desinencia desaparece entre vocales, pero no se da ninguna contracción. El presente de optativo pasivo expresa un deseo continuado con significado pasivo.',
      subsections: [
        {
          title: 'Paradigma del Presente de Optativo Pasivo',
          content: 'El presente de optativo pasivo expresa un deseo continuado con significado pasivo.',
          items: [
            'Sg. 1) λυ-ο-ί-μην "sería desatado"',
            'Sg. 2) λύ-ο-ι-ο (de λύ-ο-ι-σο)',
            'Sg. 3) λύ-ο-ι-το',
            'Pl. 1) λυ-ο-ί-μεθα',
            'Pl. 2) λύ-ο-ι-σθε',
            'Pl. 3) λύ-ο-ι-ντο'
          ]
        }
      ]
    },
    {
      id: 'sec-23-6',
      title: '23.6 Aoristo de Optativo Pasivo',
      content: 'El aoristo de optativo pasivo se forma con la característica temporal -θ- que se abrevia en -θε ante la característica modal. Lleva desinencias activas secundarias. El aoristo de optativo pasivo expresa un deseo puntual con significado pasivo.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Optativo Pasivo',
          content: 'El aoristo de optativo pasivo expresa un deseo puntual con significado pasivo.',
          items: [
            'Sg. 1) λυ-θε-ί-ην "hubiera sido desatado"',
            'Sg. 2) λυ-θε-ί-ης',
            'Sg. 3) λυ-θε-ί-η',
            'Pl. 1) λυ-θε-ί-ημεν / λυ-θε-ῖ-μεν',
            'Pl. 2) λυ-θε-ί-ητε / λυ-θε-ῖ-τε',
            'Pl. 3) λυ-θε-ί-ησαν / λυ-θε-ῖ-εν'
          ]
        }
      ]
    },
    {
      id: 'sec-23-7',
      title: '23.7 Presente de Optativo Medio',
      content: 'El presente de optativo medio es igual al pasivo. Utiliza desinencias medio-pasivas secundarias con la característica modal -ι. El presente de optativo medio expresa un deseo continuado con significado medio.',
      subsections: [
        {
          title: 'Paradigma del Presente de Optativo Medio',
          content: 'El presente de optativo medio es idéntico al presente de optativo pasivo.',
          items: [
            'Sg. 1) λυ-ο-ί-μην "me desataría"',
            'Sg. 2) λύ-ο-ι-ο',
            'Sg. 3) λύ-ο-ι-το',
            'Pl. 1) λυ-ο-ί-μεθα',
            'Pl. 2) λύ-ο-ι-σθε',
            'Pl. 3) λύ-ο-ι-ντο'
          ]
        }
      ]
    },
    {
      id: 'sec-23-8',
      title: '23.8 Aoristo de Optativo Medio',
      content: 'El aoristo de optativo medio se forma con el tema verbal, la característica temporal activa, la característica modal -ι y las desinencias pasivas secundarias. En la 2ª persona del singular la -σ- intervocálica cae pero no contraen las vocales en contacto. El aoristo de optativo medio expresa un deseo puntual con significado medio.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Optativo Medio',
          content: 'El aoristo de optativo medio expresa un deseo puntual con significado medio.',
          items: [
            'Sg. 1) λυ-σα-ί-μην "me hubiera desatado"',
            'Sg. 2) λύ-σα-ι-ο',
            'Sg. 3) λύ-σα-ι-το',
            'Pl. 1) λυ-σα-ί-μεθα',
            'Pl. 2) λύ-σα-ι-σθε',
            'Pl. 3) λύ-σα-ι-ντο'
          ]
        }
      ]
    },
    {
      id: 'sec-23-9',
      title: '23.9 Modo Optativo del Verbo εἰμί',
      content: 'El verbo εἰμί en modo optativo solamente tiene presente en el Nuevo Testamento. El futuro optativo no aparece. Las formas son: εἴην "fuera, fuese, sería", εἴης, εἴη, εἴημεν / εἶμεν, εἴητε / εἶτε, εἴησαν / εἶεν. Estas tres últimas formas del plural son propias del griego clásico.',
      subsections: [
        {
          title: 'Paradigma del Optativo de εἰμί',
          content: 'El optativo de εἰμί tiene solo presente en el NT.',
          items: [
            'Sg. 1) εἴ-ην "fuera, sería"',
            'Sg. 2) εἴ-ης',
            'Sg. 3) εἴ-η',
            'Pl. 1) εἴ-ημεν / εἶ-μεν',
            'Pl. 2) εἴ-ητε / εἶ-τε',
            'Pl. 3) εἴ-ησαν / εἶ-εν'
          ]
        }
      ]
    },
    {
      id: 'sec-23-10',
      title: '23.10 Particularidades del Optativo en el NT',
      content: 'El uso del optativo es muy reducido en la koiné. En el Nuevo Testamento se encuentra solo sesenta y cinco veces. De hecho, deja de utilizarse en los tiempos futuro y perfecto. En los demás tiempos no aparece empleado ni por Mateo, ni por Juan, ni por Santiago. En su lugar se emplea el modo imperativo o perífrasis mediante los verbos βούλομαι y θέλω "querer" o mediante la partícula ὄφελον "ojalá".',
      subsections: [
        {
          title: 'Frecuencia y Distribución del Optativo',
          content: 'El optativo es muy raro en el NT.',
          items: [
            'Solo sesenta y cinco veces en todo el NT',
            'No aparece en futuro ni perfecto',
            'No empleado por Mateo, Juan ni Santiago',
            'Reemplazado por imperativo o perífrasis'
          ]
        }
      ]
    },
    {
      id: 'sec-23-11',
      title: '23.11 Valores del Optativo en el NT',
      content: 'El optativo tiene varios valores en el Nuevo Testamento. Primero, el optativo volitivo o desiderativo, que expresa el deseo en oraciones independientes. Este es su significado principal. Segundo, el optativo potencial (introducido por la partícula ἄν), para indicar una posibilidad en el presente o en el pasado, o una incertidumbre. En la koiné este uso tiende a desaparecer y en el NT solo lo emplea Lucas. Tercero, el optativo oblicuo, que es el optativo en las proposiciones dependientes de tiempos históricos, presente en el NT solo en Lucas (Evangelio y Hechos).',
      subsections: [
        {
          title: 'Optativo Volitivo o Desiderativo',
          content: 'Expresa deseo en oraciones independientes.',
          items: [
            'Lc 20,16: Μὴ γένοιτο "Ojalá no suceda"',
            'Rom 6,15: μὴ γένοιτο "En absoluto"',
            'Significado principal del optativo'
          ]
        },
        {
          title: 'Optativo Potencial',
          content: 'Introducido por ἄν, indica posibilidad o incertidumbre.',
          items: [
            'Hch 5,25: τί ἂν γένοιτο "qué sería"',
            'Lc 1,62: τὸ τί ἂν θέλοι "cómo quería"',
            'Uso principalmente en Lucas'
          ]
        },
        {
          title: 'Optativo Oblicuo',
          content: 'En proposiciones dependientes de tiempos históricos.',
          items: [
            'Lc 1,29: ποταπὸς εἴη "qué clase de"',
            'Hch 25,16: ἔχοι τόπον "tuviera oportunidad"',
            'Presente principalmente en Lucas'
          ]
        }
      ]
    },
    {
      id: 'sec-23-12',
      title: '23.12 Palabras Invariables Relacionadas',
      content: 'Existen varias palabras invariables que aparecen frecuentemente en textos con modo optativo. El adverbio/preposición μέχρι (μέχρις) significa "hasta" como adverbio, como preposición con genitivo "hasta", y como conjunción temporal "mientras que", "hasta que", "en tanto que". El adverbio παραχρῆμα significa "inmediatamente", "al instante". El adverbio ἐπαύριον significa "mañana", "el mañana". El adverbio καθάπερ significa "lo mismo que", "como".',
      subsections: [
        {
          title: 'Palabras Invariables Principales',
          content: 'Estas palabras son fundamentales para la comprensión de textos griegos del NT con optativo.',
          items: [
            'μέχρι (μέχρις) adv./prep./conj. "hasta", "mientras que"',
            'παραχρῆμα adv. "inmediatamente", "al instante"',
            'ἐπαύριον adv. "mañana", "el mañana"',
            'καθάπερ adv. "lo mismo que", "como"'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'λύω', type: 'verbo', spanish: 'desatar, soltar', frequency: 42 },
    { greek: 'λύ-οι-μι (opt.)', type: 'optativo activo', spanish: 'desataría, desatara', frequency: 3 },
    { greek: 'λύ-σα-ι-μι (opt.)', type: 'optativo activo', spanish: 'hubiera desatado', frequency: 2 },
    { greek: 'λυ-ο-ί-μην (opt.)', type: 'optativo pasivo', spanish: 'sería desatado', frequency: 1 },
    { greek: 'λυ-σα-ί-μην (opt.)', type: 'optativo pasivo', spanish: 'me hubiera desatado', frequency: 1 },
    { greek: 'εἰμί', type: 'verbo', spanish: 'ser, estar', frequency: 2457 },
    { greek: 'εἴ-ην (opt.)', type: 'optativo', spanish: 'fuera, sería', frequency: 32 },
    { greek: 'γίνομαι', type: 'verbo', spanish: 'llegar a ser, suceder', frequency: 669 },
    { greek: 'γέ-νοι-το (opt.)', type: 'optativo', spanish: 'ojalá suceda', frequency: 8 },
    { greek: 'ἁμαρτάνω', type: 'verbo', spanish: 'pecar, errar', frequency: 43 },
    { greek: 'ἁγιάζω', type: 'verbo', spanish: 'santificar, consagrar', frequency: 28 },
    { greek: 'ὄφελον', type: 'partícula', spanish: 'ojalá', frequency: 4 },
    { greek: 'βούλομαι', type: 'verbo', spanish: 'querer, desear', frequency: 37 },
    { greek: 'θέλω', type: 'verbo', spanish: 'querer, desear', frequency: 208 },
    { greek: 'μέχρι', type: 'preposición', spanish: 'hasta', frequency: 17 },
    { greek: 'παραχρῆμα', type: 'adverbio', spanish: 'inmediatamente', frequency: 18 },
    { greek: 'ἐπαύριον', type: 'adverbio', spanish: 'mañana', frequency: 16 },
    { greek: 'καθάπερ', type: 'adverbio', spanish: 'como, lo mismo que', frequency: 13 },
    { greek: 'ἄν', type: 'partícula', spanish: 'partícula potencial', frequency: 166 },
    { greek: 'διαλογίζομαι', type: 'verbo', spanish: 'pensar, reflexionar', frequency: 16 },
    { greek: 'ἐπιταράσσω', type: 'verbo', spanish: 'turbar, perturbar', frequency: 1 },
    { greek: 'ἀσπασμός', type: 'sustantivo', spanish: 'saludo, abrazo', frequency: 10 },
    { greek: 'εὐχή', type: 'sustantivo', spanish: 'oración, voto', frequency: 4 },
    { greek: 'κατηγορέω', type: 'verbo', spanish: 'acusar', frequency: 23 },
    { greek: 'ἀπολογία', type: 'sustantivo', spanish: 'defensa, apología', frequency: 8 }
  ],
  exercises: [
    {
      id: 'ex-23-1',
      type: 'flashcard',
      title: 'Flashcards - Formas de Optativo',
      description: 'Traduce formas de modo optativo',
      items: [
        {
          id: 'fc-23-1',
          question: 'λύ-οι-μι (optativo)',
          options: ['desataría, desatara (presente optativo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-οι-μι es la primera persona singular del presente de optativo activo.'
        },
        {
          id: 'fc-23-2',
          question: 'λύ-σα-ι-μι (optativo)',
          options: ['hubiera desatado (aoristo optativo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-σα-ι-μι es la primera persona singular del aoristo de optativo activo.'
        },
        {
          id: 'fc-23-3',
          question: 'λυ-ο-ί-μην (optativo)',
          options: ['sería desatado (presente optativo pasivo)'],
          correctAnswer: 0,
          explanation: 'λυ-ο-ί-μην es la primera persona singular del presente de optativo pasivo.'
        },
        {
          id: 'fc-23-4',
          question: 'λυ-σα-ί-μην (optativo)',
          options: ['me hubiera desatado (aoristo optativo medio)'],
          correctAnswer: 0,
          explanation: 'λυ-σα-ί-μην es la primera persona singular del aoristo de optativo medio.'
        },
        {
          id: 'fc-23-5',
          question: 'εἴ-ην (optativo)',
          options: ['fuera, sería (optativo de εἰμί)'],
          correctAnswer: 0,
          explanation: 'εἴ-ην es la primera persona singular del optativo de εἰμί.'
        },
        {
          id: 'fc-23-6',
          question: 'γέ-νοι-το (optativo)',
          options: ['ojalá suceda (optativo volitivo)'],
          correctAnswer: 0,
          explanation: 'γέ-νοι-το es el optativo volitivo que expresa deseo.'
        }
      ]
    },
    {
      id: 'ex-23-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Identificacion de Optativos',
      description: 'Identifica la forma correcta de optativo',
      items: [
        {
          id: 'mc-23-1',
          question: 'Que desinencias utiliza el optativo?',
          options: ['Desinencias primarias', 'Desinencias secundarias', 'Desinencias mixtas'],
          correctAnswer: 1,
          explanation: 'El optativo utiliza desinencias secundarias (excepto 1ª sg. presente).'
        },
        {
          id: 'mc-23-2',
          question: 'Cual es la característica modal del optativo?',
          options: ['Alargamiento vocálico', 'Una -ι que forma diptongos', 'Aumento'],
          correctAnswer: 1,
          explanation: 'La característica modal es una -ι que forma diptongos -οι, -αι, -ει.'
        },
        {
          id: 'mc-23-3',
          question: 'Cuantas veces aparece el optativo en el NT?',
          options: ['Más de 500 veces', 'Solo 65 veces', 'Más de 200 veces'],
          correctAnswer: 1,
          explanation: 'El optativo aparece solo 65 veces en todo el Nuevo Testamento.'
        },
        {
          id: 'mc-23-4',
          question: 'Cual es el valor principal del optativo en el NT?',
          options: ['Potencial', 'Volitivo o desiderativo', 'Oblicuo'],
          correctAnswer: 1,
          explanation: 'El valor principal es el optativo volitivo que expresa deseo.'
        },
        {
          id: 'mc-23-5',
          question: 'En que tiempos NO aparece el optativo en el NT?',
          options: ['Presente y aoristo', 'Futuro y perfecto', 'Presente y perfecto'],
          correctAnswer: 1,
          explanation: 'El optativo no aparece en futuro ni perfecto en el Nuevo Testamento.'
        }
      ]
    },
    {
      id: 'ex-23-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas del Optativo',
      description: 'Evalua tus conocimientos sobre modo optativo',
      items: [
        {
          id: 'tf-23-1',
          question: 'El optativo utiliza desinencias primarias',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El optativo utiliza desinencias secundarias.'
        },
        {
          id: 'tf-23-2',
          question: 'La característica modal del optativo es una -ι',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. La característica modal es una -ι que forma diptongos.'
        },
        {
          id: 'tf-23-3',
          question: 'El optativo es muy frecuente en el NT',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El optativo es muy raro en el NT (solo 65 veces).'
        },
        {
          id: 'tf-23-4',
          question: 'El optativo tiene futuro en el NT',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El optativo no aparece en futuro en el Nuevo Testamento.'
        },
        {
          id: 'tf-23-5',
          question: 'El optativo volitivo expresa deseo',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El optativo volitivo es el que expresa deseo en oraciones independientes.'
        }
      ]
    },
    {
      id: 'ex-23-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Formas',
      description: 'Empareja formas de optativo con sus significados',
      items: [
        {
          id: 'match-23-1',
          description: 'Empareja formas de optativo con sus significados',
          pairs: [
            { left: 'λύ-οι-μι', right: 'desataría (pres. opt. act.)' },
            { left: 'λύ-σα-ι-μι', right: 'hubiera desatado (aor. opt. act.)' },
            { left: 'λυ-ο-ί-μην', right: 'sería desatado (pres. opt. pas.)' },
            { left: 'λυ-σα-ί-μην', right: 'me hubiera desatado (aor. opt. med.)' },
            { left: 'εἴ-ην', right: 'fuera, sería (opt. de εἰμί)' },
            { left: 'γέ-νοι-το', right: 'ojalá suceda (opt. volitivo)' },
            { left: 'ἄν', right: 'partícula potencial' },
            { left: 'ὄφελον', right: 'ojalá (partícula desiderativa)' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente las formas y sus significados.'
        }
      ]
    },
    {
      id: 'ex-23-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Optativo',
      description: 'Completa con la forma correcta de optativo',
      items: [
        {
          id: 'fb-23-1',
          question: 'Desataría (presente optativo activo, 1ª sg.): _____',
          options: ['λύω', 'λύ-οι-μι', 'λύ-ο-ν'],
          correctAnswer: 1,
          explanation: 'λύ-οι-μι es la forma correcta con diptongo -οι.'
        },
        {
          id: 'fb-23-2',
          question: 'Hubiera desatado (aoristo optativo activo, 1ª sg.): _____',
          options: ['λύσον', 'λύ-σα-ι-μι', 'λύ-σ-ο-ν'],
          correctAnswer: 1,
          explanation: 'λύ-σα-ι-μι es la forma correcta con diptongo -αι.'
        },
        {
          id: 'fb-23-3',
          question: 'Sería desatado (presente optativo pasivo, 1ª sg.): _____',
          options: ['λύομαι', 'λυ-ο-ί-μην', 'λύ-ο-ν'],
          correctAnswer: 1,
          explanation: 'λυ-ο-ί-μην es la forma correcta con diptongo -ει.'
        },
        {
          id: 'fb-23-4',
          question: 'Fuera, sería (optativo de εἰμί, 1ª sg.): _____',
          options: ['εἰμί', 'εἴ-ην', 'ἦν'],
          correctAnswer: 1,
          explanation: 'εἴ-ην es la primera persona singular del optativo de εἰμί.'
        },
        {
          id: 'fb-23-5',
          question: 'Ojalá suceda (optativo volitivo, 3ª sg.): _____',
          options: ['γίνεται', 'γέ-νοι-το', 'γέ-νη-ται'],
          correctAnswer: 1,
          explanation: 'γέ-νοι-το es el optativo volitivo que expresa deseo.'
        }
      ]
    },
    {
      id: 'ex-23-6',
      type: 'translation',
      title: 'Traduccion - Oraciones con Optativo',
      description: 'Traduce oraciones con modo optativo',
      items: [
        {
          id: 'tr-23-1',
          question: 'μὴ γένοιτο',
          options: ['ojalá no suceda', 'no sucede', 'no sucedería'],
          correctAnswer: 0,
          explanation: 'Optativo volitivo negativo que expresa rechazo enfático.'
        },
        {
          id: 'tr-23-2',
          question: 'ἀμαρτήσωμεν',
          options: ['pecamos', 'pecaríamos', 'que pequemos'],
          correctAnswer: 2,
          explanation: 'Esta es forma de subjuntivo, no optativo, pero similar en contexto.'
        },
        {
          id: 'tr-23-3',
          question: 'αὐτὸς δὲ ὁ θεὸς ἁγιάσαι ὑμᾶς',
          options: ['Dios los santificará', 'Que Dios los santifique', 'Dios los santificó'],
          correctAnswer: 1,
          explanation: 'Optativo volitivo que expresa un deseo o bendición.'
        },
        {
          id: 'tr-23-4',
          question: 'τί ἂν γένοιτο',
          options: ['¿qué sucede?', '¿qué sucedería?', '¿qué sucedió?'],
          correctAnswer: 1,
          explanation: 'Optativo potencial con ἄν que expresa incertidumbre o posibilidad.'
        },
        {
          id: 'tr-23-5',
          question: 'ποταπὸς εἴη ὁ ἀσπασμὸς',
          options: ['qué clase de saludo es', 'qué clase de saludo era', 'qué clase de saludo sería'],
          correctAnswer: 0,
          explanation: 'Optativo oblicuo en oración subordinada dependiente de tiempo pasado.'
        }
      ]
    }
  ]
};

export const lesson24: Lesson = {
  id: 'lesson-24',
  number: 24,
  title: 'Modo Infinitivo del Verbo λύω en las Tres Voces',
  introduction: 'El infinitivo es una forma no personal del verbo que funciona como sustantivo verbal. Toma las desinencias -ειν y -ναι en la voz activa y -σθαι en la voz medio-pasiva. El infinitivo, como sustantivo verbal, como forma nominal del verbo, desempeña funciones propias del sustantivo y funciones propias del verbo. Con artículo equivale a un sustantivo; así, τὸ ποιεῖν "el hacer", "la acción" tiene un valor semejante a ποίησις. El infinitivo es muy frecuente en el Nuevo Testamento y desempeña múltiples funciones sintácticas: puede ser sujeto, complemento directo, complemento de adjetivo, regido por preposiciones, o epexegético. El infinitivo expresa la acción de manera general, sin indicar persona ni número.',
  sections: [
    {
      id: 'sec-24-1',
      title: '24.1 Características Generales del Infinitivo',
      content: 'El infinitivo es una forma no personal del verbo que funciona como sustantivo verbal. Toma las desinencias -ειν y -ναι en la voz activa y -σθαι en la voz medio-pasiva. El infinitivo, como sustantivo verbal, desempeña funciones propias del sustantivo y funciones propias del verbo. Con artículo equivale a un sustantivo; así, τὸ ποιεῖν "el hacer", "la acción" tiene un valor semejante a ποίησις. El infinitivo es muy frecuente en el Nuevo Testamento y desempeña múltiples funciones sintácticas.',
      subsections: [
        {
          title: 'Desinencias del Infinitivo',
          content: 'El infinitivo tiene desinencias propias según la voz.',
          items: [
            'Voz activa: -ειν (presente, futuro), -αι (aoristo)',
            'Voz medio-pasiva: -σθαι (todos los tiempos)',
            'Aoristo pasivo: -ναι'
          ]
        },
        {
          title: 'Naturaleza del Infinitivo',
          content: 'El infinitivo combina características de sustantivo y verbo.',
          items: [
            'Como sustantivo: puede llevar artículo, funciona como sujeto o complemento',
            'Como verbo: expresa acción, puede tener complementos verbales',
            'Funciona como neutro cuando lleva artículo'
          ]
        }
      ]
    },
    {
      id: 'sec-24-2',
      title: '24.2 Presente de Infinitivo Activo',
      content: 'El presente de infinitivo activo se forma con la desinencia -ειν. Expresa una acción continua, habitual o no terminada. El presente de infinitivo puede utilizarse para describir una acción que en sí misma es continuada o repetida, apoyado en el texto además por un adverbio o similares que recalcan esa continuidad o repetición.',
      subsections: [
        {
          title: 'Forma del Presente de Infinitivo Activo',
          content: 'El presente de infinitivo activo expresa acción continua.',
          items: [
            'λύ-ει-ν "desatar"',
            'Desinencia: -ειν',
            'Expresa acción continuada o habitual'
          ]
        }
      ]
    },
    {
      id: 'sec-24-3',
      title: '24.3 Futuro de Infinitivo Activo',
      content: 'El futuro de infinitivo activo se forma con la característica temporal -σ- más la desinencia -ειν. Expresa una acción futura o una obligación. El futuro de infinitivo es raro en el Nuevo Testamento. Significa "haber de desatar", "tener que desatar".',
      subsections: [
        {
          title: 'Forma del Futuro de Infinitivo Activo',
          content: 'El futuro de infinitivo activo expresa acción futura.',
          items: [
            'λύ-σ-ει-ν "haber de desatar"',
            'Desinencia: -σ-ειν',
            'Raro en el Nuevo Testamento'
          ]
        }
      ]
    },
    {
      id: 'sec-24-4',
      title: '24.4 Aoristo de Infinitivo Activo',
      content: 'El aoristo de infinitivo activo se forma con la característica temporal -σα- más la desinencia -ι. Expresa una acción terminada o puntual. El aoristo de infinitivo significa "desatar", "haber desatado". La desinencia -αι es irregular, al igual que la 2ª persona del singular del modo imperativo medio.',
      subsections: [
        {
          title: 'Forma del Aoristo de Infinitivo Activo',
          content: 'El aoristo de infinitivo activo expresa acción terminada.',
          items: [
            'λύ-σα-ι "desatar", "haber desatado"',
            'Desinencia: -αι (irregular)',
            'Expresa acción puntual o terminada'
          ]
        }
      ]
    },
    {
      id: 'sec-24-5',
      title: '24.5 Perfecto de Infinitivo Activo',
      content: 'El perfecto de infinitivo activo se forma con la reduplicación más la característica temporal -κ- (abreviada en -κε) más la desinencia -ναι. Expresa el resultado presente de una acción anterior. El perfecto de infinitivo significa "haber desatado", "tener desatado", "acabar de desatar". Indica, al igual que el participio de perfecto, el efecto presente de una acción anterior.',
      subsections: [
        {
          title: 'Forma del Perfecto de Infinitivo Activo',
          content: 'El perfecto de infinitivo activo expresa resultado presente.',
          items: [
            'λε-λυ-κέ-ναι "haber desatado"',
            'Desinencia: -κε-ναι',
            'Expresa efecto presente de acción anterior'
          ]
        }
      ]
    },
    {
      id: 'sec-24-6',
      title: '24.6 Presente de Infinitivo Pasivo',
      content: 'El presente de infinitivo pasivo se forma con la desinencia -σθαι. Expresa una acción continua con significado pasivo. El presente de infinitivo pasivo significa "ser desatado".',
      subsections: [
        {
          title: 'Forma del Presente de Infinitivo Pasivo',
          content: 'El presente de infinitivo pasivo expresa acción continua pasiva.',
          items: [
            'λύ-ε-σθαι "ser desatado"',
            'Desinencia: -σθαι',
            'Expresa acción continuada con significado pasivo'
          ]
        }
      ]
    },
    {
      id: 'sec-24-7',
      title: '24.7 Futuro de Infinitivo Pasivo',
      content: 'El futuro de infinitivo pasivo se forma con la característica temporal -θ- más la desinencia -σ-ε-σθαι. Expresa una acción futura con significado pasivo. El futuro de infinitivo pasivo significa "haber de ser desatado", "tener que ser desatado".',
      subsections: [
        {
          title: 'Forma del Futuro de Infinitivo Pasivo',
          content: 'El futuro de infinitivo pasivo expresa acción futura pasiva.',
          items: [
            'λυ-θή-σ-ε-σθαι "haber de ser desatado"',
            'Desinencia: -θ-σ-ε-σθαι',
            'Expresa acción futura con significado pasivo'
          ]
        }
      ]
    },
    {
      id: 'sec-24-8',
      title: '24.8 Aoristo de Infinitivo Pasivo',
      content: 'El aoristo de infinitivo pasivo se forma con la característica temporal -θη- más la desinencia -ναι. Toma desinencia activa, como todo el aoristo en la voz pasiva. Expresa una acción terminada con significado pasivo. El aoristo de infinitivo pasivo significa "ser desatado", "haber sido desatado".',
      subsections: [
        {
          title: 'Forma del Aoristo de Infinitivo Pasivo',
          content: 'El aoristo de infinitivo pasivo expresa acción terminada pasiva.',
          items: [
            'λυ-θῆ-ναι "ser desatado", "haber sido desatado"',
            'Desinencia: -θη-ναι',
            'Expresa acción puntual con significado pasivo'
          ]
        }
      ]
    },
    {
      id: 'sec-24-9',
      title: '24.9 Perfecto de Infinitivo Pasivo',
      content: 'El perfecto de infinitivo pasivo se forma con la reduplicación más la desinencia -σθαι. Expresa el resultado presente de una acción pasiva anterior. El perfecto de infinitivo pasivo significa "estar desatado".',
      subsections: [
        {
          title: 'Forma del Perfecto de Infinitivo Pasivo',
          content: 'El perfecto de infinitivo pasivo expresa resultado presente pasivo.',
          items: [
            'λε-λύ-σθαι "estar desatado"',
            'Desinencia: -σθαι',
            'Expresa efecto presente de acción pasiva anterior'
          ]
        }
      ]
    },
    {
      id: 'sec-24-10',
      title: '24.10 Futuro y Aoristo de Infinitivo Medio',
      content: 'El futuro de infinitivo medio se forma con la característica temporal -σ- más la desinencia -ε-σθαι. Significa "haber de desatarse". El aoristo de infinitivo medio se forma con la característica temporal -σα- más la desinencia -σθαι. Significa "desatarse", "haberse desatado". El aoristo de infinitivo medio expresa una acción terminada con significado medio.',
      subsections: [
        {
          title: 'Formas del Infinitivo Medio',
          content: 'El infinitivo medio tiene futuro y aoristo.',
          items: [
            'Futuro: λύ-σ-ε-σθαι "haber de desatarse"',
            'Aoristo: λύ-σα-σθαι "desatarse", "haberse desatado"',
            'Expresan acciones con significado medio'
          ]
        }
      ]
    },
    {
      id: 'sec-24-11',
      title: '24.11 Infinitivo del Verbo εἰμί',
      content: 'El verbo εἰμί tiene dos tiempos en infinitivo. El presente de infinitivo es εἶ-ναι "ser". El futuro de infinitivo es ἔ-σ-ε-σθαι "haber de ser", "tener que ser". Estas formas son muy frecuentes en el Nuevo Testamento.',
      subsections: [
        {
          title: 'Formas del Infinitivo de εἰμί',
          content: 'El infinitivo de εἰμί tiene presente y futuro.',
          items: [
            'Presente: εἶ-ναι "ser"',
            'Futuro: ἔ-σ-ε-σθαι "haber de ser"',
            'Muy frecuentes en el NT'
          ]
        }
      ]
    },
    {
      id: 'sec-24-12',
      title: '24.12 Funciones Sintácticas del Infinitivo',
      content: 'El infinitivo desempeña múltiples funciones sintácticas en el Nuevo Testamento. Puede ser sujeto de frases nominales, complemento directo de verbos, complemento de adjetivos, regido por preposiciones introduciendo oraciones subordinadas adverbiales (causales, finales, temporales), o epexegético explicando lo que se acaba de decir. El infinitivo es muy versátil y su interpretación depende del contexto y de las preposiciones que lo acompañen.',
      subsections: [
        {
          title: 'Infinitivo como Sujeto',
          content: 'El infinitivo puede ser sujeto de verbos impersonales o de frases nominales.',
          items: [
            'Δεῖ "es necesario" + infinitivo',
            'Ἔξεστι "es posible" + infinitivo',
            'Συμφέρει "es mejor" + infinitivo',
            'Χρή "debe" + infinitivo'
          ]
        },
        {
          title: 'Infinitivo como Complemento Directo',
          content: 'El infinitivo puede ser complemento de verbos de decir, juzgar, querer o sentimientos.',
          items: [
            'Βούλομαι λέγειν "Quiero hablar"',
            'Si el sujeto del infinitivo es diferente, va en acusativo',
            'Βούλομαι σὲ λέγειν "Quiero que tú hables"'
          ]
        },
        {
          title: 'Infinitivo Causal',
          content: 'Con διά + acusativo expresa causa.',
          items: [
            'διὰ τὸ μὴ ἔχειν ῥίζαν "porque no tenía raíz"',
            'Introduce oración subordinada causal'
          ]
        },
        {
          title: 'Infinitivo Final',
          content: 'Con πρός, εἰς + acusativo o sin preposición expresa finalidad.',
          items: [
            'πρὸς τὸ ἀποπλανᾶν "para engañar"',
            'εἰς τὸ ἐμπαῖξαι "para escarnecerle"',
            'Frecuente con verbos de movimiento'
          ]
        },
        {
          title: 'Infinitivo Temporal',
          content: 'Con preposiciones expresa relaciones temporales.',
          items: [
            'πρὸ τοῦ αἰτῆσαι "antes de pedir"',
            'μετὰ τὸ ἀποθανεῖν "después de morir"',
            'ἐν τῷ σπείρειν "mientras sembraba"'
          ]
        },
        {
          title: 'Infinitivo Epexegético',
          content: 'Sirve para explicar o aclarar lo que se acaba de decir.',
          items: [
            'Puede aparecer detrás de un demostrativo',
            'Explica el contenido de la oración anterior',
            'Frecuente en textos explicativos'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'λύω', type: 'verbo', spanish: 'desatar, soltar', frequency: 42 },
    { greek: 'λύ-ει-ν (inf.)', type: 'infinitivo activo', spanish: 'desatar', frequency: 12 },
    { greek: 'λύ-σ-ει-ν (inf.)', type: 'infinitivo activo', spanish: 'haber de desatar', frequency: 2 },
    { greek: 'λύ-σα-ι (inf.)', type: 'infinitivo activo', spanish: 'desatar, haber desatado', frequency: 8 },
    { greek: 'λε-λυ-κέ-ναι (inf.)', type: 'infinitivo activo', spanish: 'haber desatado', frequency: 1 },
    { greek: 'λύ-ε-σθαι (inf.)', type: 'infinitivo pasivo', spanish: 'ser desatado', frequency: 4 },
    { greek: 'λυ-θῆ-ναι (inf.)', type: 'infinitivo pasivo', spanish: 'ser desatado', frequency: 3 },
    { greek: 'εἰμί', type: 'verbo', spanish: 'ser, estar', frequency: 2457 },
    { greek: 'εἶ-ναι (inf.)', type: 'infinitivo', spanish: 'ser', frequency: 158 },
    { greek: 'ἔ-σ-ε-σθαι (inf.)', type: 'infinitivo', spanish: 'haber de ser', frequency: 12 },
    { greek: 'δεῖ', type: 'verbo impersonal', spanish: 'es necesario', frequency: 101 },
    { greek: 'ἔξεστι', type: 'verbo impersonal', spanish: 'es posible', frequency: 32 },
    { greek: 'συμφέρει', type: 'verbo impersonal', spanish: 'es mejor, conviene', frequency: 15 },
    { greek: 'χρή', type: 'verbo impersonal', spanish: 'debe, conviene', frequency: 2 },
    { greek: 'βούλομαι', type: 'verbo', spanish: 'querer, desear', frequency: 37 },
    { greek: 'λέγω', type: 'verbo', spanish: 'decir, hablar', frequency: 2354 },
    { greek: 'θέλω', type: 'verbo', spanish: 'querer, desear', frequency: 208 },
    { greek: 'ἐλπίζω', type: 'verbo', spanish: 'esperar, confiar', frequency: 31 },
    { greek: 'δύναμαι', type: 'verbo', spanish: 'poder, ser capaz', frequency: 210 },
    { greek: 'ἔρχομαι', type: 'verbo', spanish: 'venir, ir', frequency: 632 },
    { greek: 'διά', type: 'preposición', spanish: 'por, a través de', frequency: 667 },
    { greek: 'πρός', type: 'preposición', spanish: 'hacia, para', frequency: 700 },
    { greek: 'εἰς', type: 'preposición', spanish: 'en, a, para', frequency: 1768 },
    { greek: 'πρό', type: 'preposición', spanish: 'antes de', frequency: 47 },
    { greek: 'μετά', type: 'preposición', spanish: 'después de, con', frequency: 469 }
  ],
  exercises: [
    {
      id: 'ex-24-1',
      type: 'flashcard',
      title: 'Flashcards - Formas de Infinitivo',
      description: 'Traduce formas de infinitivo',
      items: [
        {
          id: 'fc-24-1',
          question: 'λύ-ει-ν (infinitivo)',
          options: ['desatar (presente infinitivo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-ει-ν es el presente de infinitivo activo.'
        },
        {
          id: 'fc-24-2',
          question: 'λύ-σα-ι (infinitivo)',
          options: ['desatar, haber desatado (aoristo infinitivo activo)'],
          correctAnswer: 0,
          explanation: 'λύ-σα-ι es el aoristo de infinitivo activo.'
        },
        {
          id: 'fc-24-3',
          question: 'λύ-ε-σθαι (infinitivo)',
          options: ['ser desatado (presente infinitivo pasivo)'],
          correctAnswer: 0,
          explanation: 'λύ-ε-σθαι es el presente de infinitivo pasivo.'
        },
        {
          id: 'fc-24-4',
          question: 'λυ-θῆ-ναι (infinitivo)',
          options: ['ser desatado (aoristo infinitivo pasivo)'],
          correctAnswer: 0,
          explanation: 'λυ-θῆ-ναι es el aoristo de infinitivo pasivo.'
        },
        {
          id: 'fc-24-5',
          question: 'εἶ-ναι (infinitivo)',
          options: ['ser (presente infinitivo de εἰμί)'],
          correctAnswer: 0,
          explanation: 'εἶ-ναι es el presente de infinitivo de εἰμί.'
        },
        {
          id: 'fc-24-6',
          question: 'δεῖ + infinitivo',
          options: ['es necesario + infinitivo'],
          correctAnswer: 0,
          explanation: 'δεῖ es un verbo impersonal que rige infinitivo.'
        }
      ]
    },
    {
      id: 'ex-24-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Funciones del Infinitivo',
      description: 'Identifica la función del infinitivo',
      items: [
        {
          id: 'mc-24-1',
          question: 'Cual es la desinencia del presente infinitivo activo?',
          options: ['-σθαι', '-ειν', '-ναι'],
          correctAnswer: 1,
          explanation: 'La desinencia del presente infinitivo activo es -ειν.'
        },
        {
          id: 'mc-24-2',
          question: 'Cual es la desinencia del infinitivo pasivo?',
          options: ['-ειν', '-σθαι', '-ναι'],
          correctAnswer: 1,
          explanation: 'La desinencia del infinitivo pasivo es -σθαι.'
        },
        {
          id: 'mc-24-3',
          question: 'Que expresa el presente infinitivo?',
          options: ['Acción terminada', 'Acción continuada', 'Acción futura'],
          correctAnswer: 1,
          explanation: 'El presente infinitivo expresa acción continuada o habitual.'
        },
        {
          id: 'mc-24-4',
          question: 'Con que preposición se expresa finalidad con infinitivo?',
          options: ['διά', 'πρός, εἰς', 'πρό'],
          correctAnswer: 1,
          explanation: 'Con πρός y εἰς se expresa finalidad; con διά se expresa causa.'
        },
        {
          id: 'mc-24-5',
          question: 'Que es el infinitivo epexegético?',
          options: ['Infinitivo que expresa causa', 'Infinitivo que explica lo anterior', 'Infinitivo que expresa finalidad'],
          correctAnswer: 1,
          explanation: 'El infinitivo epexegético sirve para explicar o aclarar lo que se acaba de decir.'
        }
      ]
    },
    {
      id: 'ex-24-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas del Infinitivo',
      description: 'Evalua tus conocimientos sobre infinitivo',
      items: [
        {
          id: 'tf-24-1',
          question: 'El infinitivo es una forma personal del verbo',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El infinitivo es una forma no personal del verbo.'
        },
        {
          id: 'tf-24-2',
          question: 'El infinitivo puede funcionar como sustantivo',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El infinitivo es un sustantivo verbal y puede ser sujeto o complemento.'
        },
        {
          id: 'tf-24-3',
          question: 'El aoristo infinitivo expresa acción continuada',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El aoristo infinitivo expresa acción terminada o puntual.'
        },
        {
          id: 'tf-24-4',
          question: 'El infinitivo con artículo funciona como neutro',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El infinitivo con artículo funciona como neutro.'
        },
        {
          id: 'tf-24-5',
          question: 'Con διά se expresa finalidad con infinitivo',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. Con διά se expresa causa; con πρός y εἰς se expresa finalidad.'
        }
      ]
    },
    {
      id: 'ex-24-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Funciones',
      description: 'Empareja infinitivos con sus funciones',
      items: [
        {
          id: 'match-24-1',
          description: 'Empareja infinitivos con sus funciones',
          pairs: [
            { left: 'δεῖ λύειν', right: 'es necesario desatar (sujeto)' },
            { left: 'βούλομαι λέγειν', right: 'quiero hablar (complemento)' },
            { left: 'διὰ τὸ μὴ ἔχειν', right: 'porque no tenía (causal)' },
            { left: 'πρὸς τὸ ἀποπλανᾶν', right: 'para engañar (final)' },
            { left: 'πρὸ τοῦ αἰτῆσαι', right: 'antes de pedir (temporal)' },
            { left: 'μετὰ τὸ ἀποθανεῖν', right: 'después de morir (temporal)' },
            { left: 'ἐν τῷ σπείρειν', right: 'mientras sembraba (temporal)' },
            { left: 'εἶναι', right: 'ser (infinitivo de εἰμί)' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente las funciones del infinitivo.'
        }
      ]
    },
    {
      id: 'ex-24-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Infinitivo',
      description: 'Completa con la forma correcta de infinitivo',
      items: [
        {
          id: 'fb-24-1',
          question: 'Desatar (presente infinitivo activo): _____',
          options: ['λύω', 'λύ-ει-ν', 'λύ-σα-ι'],
          correctAnswer: 1,
          explanation: 'λύ-ει-ν es la forma correcta del presente infinitivo activo.'
        },
        {
          id: 'fb-24-2',
          question: 'Desatar (aoristo infinitivo activo): _____',
          options: ['λύειν', 'λύ-σα-ι', 'λύ-σ-ει-ν'],
          correctAnswer: 1,
          explanation: 'λύ-σα-ι es la forma correcta del aoristo infinitivo activo.'
        },
        {
          id: 'fb-24-3',
          question: 'Ser desatado (presente infinitivo pasivo): _____',
          options: ['λύομαι', 'λύ-ε-σθαι', 'λύ-σα-ι'],
          correctAnswer: 1,
          explanation: 'λύ-ε-σθαι es la forma correcta del presente infinitivo pasivo.'
        },
        {
          id: 'fb-24-4',
          question: 'Ser desatado (aoristo infinitivo pasivo): _____',
          options: ['λύεσθαι', 'λυ-θῆ-ναι', 'λύ-σα-σθαι'],
          correctAnswer: 1,
          explanation: 'λυ-θῆ-ναι es la forma correcta del aoristo infinitivo pasivo.'
        },
        {
          id: 'fb-24-5',
          question: 'Ser (infinitivo de εἰμί): _____',
          options: ['εἰμί', 'εἶ-ναι', 'ἔσται'],
          correctAnswer: 1,
          explanation: 'εἶ-ναι es la forma correcta del infinitivo de εἰμί.'
        }
      ]
    },
    {
      id: 'ex-24-6',
      type: 'translation',
      title: 'Traduccion - Oraciones con Infinitivo',
      description: 'Traduce oraciones con infinitivo',
      items: [
        {
          id: 'tr-24-1',
          question: 'δεῖ πληρωθῆναι τὴν γραφήν',
          options: ['era necesario que se cumpliese la Escritura', 'se cumple la Escritura', 'cumplirá la Escritura'],
          correctAnswer: 0,
          explanation: 'δεῖ + infinitivo pasivo expresa necesidad de que algo se cumpla.'
        },
        {
          id: 'tr-24-2',
          question: 'βούλομαι λέγειν',
          options: ['quiero hablar', 'hablando quiero', 'hablaré'],
          correctAnswer: 0,
          explanation: 'βούλομαι + infinitivo expresa deseo de realizar la acción.'
        },
        {
          id: 'tr-24-3',
          question: 'διὰ τὸ μὴ ἔχειν ῥίζαν',
          options: ['porque no tenía raíz', 'para no tener raíz', 'sin tener raíz'],
          correctAnswer: 0,
          explanation: 'διὰ τὸ + infinitivo expresa causa.'
        },
        {
          id: 'tr-24-4',
          question: 'πρὸς τὸ ἀποπλανᾶν τοὺς ἐκλεκτούς',
          options: ['para engañar a los elegidos', 'porque engaña a los elegidos', 'engañando a los elegidos'],
          correctAnswer: 0,
          explanation: 'πρὸς τὸ + infinitivo expresa finalidad.'
        },
        {
          id: 'tr-24-5',
          question: 'πρὸ τοῦ ὑμᾶς αἰτῆσαι αὐτόν',
          options: ['antes de que se la pidáis', 'después de pedir', 'mientras pedís'],
          correctAnswer: 0,
          explanation: 'πρὸ τοῦ + infinitivo expresa anterioridad temporal.'
        }
      ]
    }
  ]
};

export const lesson25: Lesson = {
  id: 'lesson-25',
  number: 25,
  title: 'Modo Participio del Verbo λύω en las Tres Voces - Recapitulación Completa',
  introduction: 'El participio es un adjetivo verbal que combina características de adjetivo y verbo. Como adjetivo posee género, número y caso, y debe concertar con el sustantivo al que modifica. Como verbo es un modo y tiene tiempos y voces. Todos los participios activos y el participio de aoristo pasivo pertenecen a los adjetivos de 3ª clase (3ª declinación masculino y neutro / 1ª declinación femenino); excepto el participio de perfecto activo λελυκής, cuyo tema es dental, todos los demás siguen la flexión de los temas en -ντ. Los participios medio-pasivos se declinan como adjetivos de 1ª clase de tres terminaciones, excepto el de aoristo. La lengua griega utiliza muchísimo el modo participio, más que el español, para expresar una oración de relativo.',
  sections: [
    {
      id: 'sec-25-1',
      title: '25.1 Características Generales del Participio',
      content: 'El participio es un adjetivo verbal que combina características de adjetivo y verbo. Como adjetivo posee género, número y caso, y debe concertar con el sustantivo al que modifica. Como verbo es un modo y tiene tiempos y voces. Todos los participios activos y el participio de aoristo pasivo pertenecen a los adjetivos de 3ª clase (3ª declinación masculino y neutro / 1ª declinación femenino); excepto el participio de perfecto activo λελυκής, cuyo tema es dental, todos los demás siguen la flexión de los temas en -ντ. Los participios medio-pasivos se declinan como adjetivos de 1ª clase de tres terminaciones, excepto el de aoristo.',
      subsections: [
        {
          title: 'Clasificación de Participios',
          content: 'Los participios se clasifican por su declinación y características.',
          items: [
            'Participios activos: 3ª declinación (temas en -ντ)',
            'Participio perfecto activo: tema dental (λελυκής)',
            'Participios medio-pasivos: 1ª clase (terminación -μενος, -μένη, -μένον)',
            'Participio aoristo pasivo: 3ª declinación (temas en -ντ)'
          ]
        },
        {
          title: 'Valores Temporales del Participio',
          content: 'El participio expresa relaciones temporales respecto al verbo principal.',
          items: [
            'Presente: acción simultánea (gerundio simple: desatando)',
            'Aoristo: acción anterior o puntual (gerundio compuesto: habiendo desatado)',
            'Futuro: expresa finalidad (raro en NT)',
            'Perfecto: acción anterior cuyo efecto permanece'
          ]
        }
      ]
    },
    {
      id: 'sec-25-2',
      title: '25.2 Voz Activa - Presente',
      content: 'El presente de participio activo se forma con el tema verbal, la vocal de unión, y la característica -ντ. Se declina como tema en -ντ en masculino y neutro, y como tema en -σ en femenino. El presente de participio activo expresa una acción continuada o simultánea a la del verbo principal.',
      subsections: [
        {
          title: 'Paradigma del Presente de Participio Activo',
          content: 'Declinación completa del presente de participio activo: λύ-ων, λύ-ου-σα, λύ-ον.',
          items: [
            'Masculino: λύ-ων, λύ-οντος (tema en -ντ)',
            'Femenino: λύ-ου-σα, λυ-ού-σης (tema en -σ)',
            'Neutro: λύ-ον, λύ-οντος (tema en -ντ)',
            'Plural: λύ-οντες, λύ-ου-σαι, λύ-ο-ντα'
          ]
        }
      ]
    },
    {
      id: 'sec-25-3',
      title: '25.3 Voz Activa - Futuro',
      content: 'El futuro de participio activo es igual al de presente, pero con la -σ característica temporal propia del futuro. Se declina como tema en -ντ en masculino y neutro, y como tema en -σ en femenino. El futuro de participio activo expresa una acción futura o de finalidad.',
      subsections: [
        {
          title: 'Paradigma del Futuro de Participio Activo',
          content: 'Declinación del futuro de participio activo: λύ-σ-ων, λύ-σ-ου-σα, λύ-σ-ον.',
          items: [
            'Masculino: λύ-σ-ων, λύ-σ-ο-ντος',
            'Femenino: λύ-σ-ου-σα, λυ-σ-ού-σης',
            'Neutro: λύ-σ-ον, λύ-σ-ο-ντος',
            'Expresa acción futura o de finalidad'
          ]
        }
      ]
    },
    {
      id: 'sec-25-4',
      title: '25.4 Voz Activa - Aoristo y Perfecto',
      content: 'El aoristo de participio activo se forma con el tema verbal, la característica temporal -σα-, y la característica -ντ. El perfecto de participio activo se forma con la reduplicación, la característica temporal -κ-, y la terminación -ς en masculino. Se declina como tema dental en lugar de tema en -ντ.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Participio Activo',
          content: 'Declinación del aoristo de participio activo: λύ-σα-ς, λύ-σα-σα, λύ-σα-ν.',
          items: [
            'Masculino: λύ-σα-ς, λύ-σα-ντος',
            'Femenino: λύ-σα-σα, λυ-σά-σης',
            'Neutro: λύ-σα-ν, λύ-σα-ντος',
            'Expresa acción anterior o puntual'
          ]
        },
        {
          title: 'Paradigma del Perfecto de Participio Activo',
          content: 'Declinación del perfecto de participio activo: λε-λυ-κής, λε-λυ-κυ-ῖα, λε-λυ-κός.',
          items: [
            'Masculino: λε-λυ-κής, λε-λυ-κότος (tema dental)',
            'Femenino: λε-λυ-κυ-ῖα, λε-λυ-κυ-ίας',
            'Neutro: λε-λυ-κός, λε-λυ-κότος',
            'Expresa efecto presente de acción anterior'
          ]
        }
      ]
    },
    {
      id: 'sec-25-5',
      title: '25.5 Voz Media - Presente y Futuro',
      content: 'El presente de participio medio se forma con el tema verbal, la vocal de unión, y la terminación propia del participio medio-pasivo -μενος, -μένη, -μένον. Se declina como adjetivo de 1ª clase de tres terminaciones. El futuro de participio medio se forma igual que el activo pero sustituyendo las desinencias activas por las medio-pasivas.',
      subsections: [
        {
          title: 'Paradigma del Presente de Participio Medio',
          content: 'Declinación del presente de participio medio: λυ-ό-μενος, λυ-ο-μένη, λυ-ό-μενον.',
          items: [
            'Masculino: λυ-ό-μενος, λυ-ο-μένου',
            'Femenino: λυ-ο-μένη, λυ-ο-μένης',
            'Neutro: λυ-ό-μενον, λυ-ο-μένου',
            'Declinación de 1ª clase'
          ]
        },
        {
          title: 'Paradigma del Futuro de Participio Medio',
          content: 'Declinación del futuro de participio medio: λυ-σ-ό-μενος, λυ-σ-ο-μένη, λυ-σ-ό-μενον.',
          items: [
            'Masculino: λυ-σ-ό-μενος, λυ-σ-ο-μένου',
            'Femenino: λυ-σ-ο-μένη, λυ-σ-ο-μένης',
            'Neutro: λυ-σ-ό-μενον, λυ-σ-ο-μένου',
            'Declinación de 1ª clase'
          ]
        }
      ]
    },
    {
      id: 'sec-25-6',
      title: '25.6 Voz Media - Aoristo y Perfecto',
      content: 'El aoristo de participio medio se forma igual que el activo pero sustituyendo las desinencias activas por las medio-pasivas. El perfecto de participio medio no toma característica temporal. Se forma con la reduplicación y la terminación propia del participio medio-pasivo -μενος, -μένη, -μένον. Se declina como adjetivo de 1ª clase de tres terminaciones.',
      subsections: [
        {
          title: 'Paradigma del Aoristo de Participio Medio',
          content: 'Declinación del aoristo de participio medio: λυ-σά-μενος, λυ-σα-μένη, λυ-σά-μενον.',
          items: [
            'Masculino: λυ-σά-μενος, λυ-σα-μένου',
            'Femenino: λυ-σα-μένη, λυ-σα-μένης',
            'Neutro: λυ-σά-μενον, λυ-σα-μένου',
            'Declinación de 1ª clase'
          ]
        },
        {
          title: 'Paradigma del Perfecto de Participio Medio',
          content: 'Declinación del perfecto de participio medio: λε-λυ-μένος, λε-λυ-μένη, λε-λυ-μένον.',
          items: [
            'Masculino: λε-λυ-μένος, λε-λυ-μένου',
            'Femenino: λε-λυ-μένη, λε-λυ-μένης',
            'Neutro: λε-λυ-μένον, λε-λυ-μένου',
            'Declinación de 1ª clase'
          ]
        }
      ]
    },
    {
      id: 'sec-25-7',
      title: '25.7 Voz Pasiva - Futuro y Aoristo',
      content: 'El futuro de participio pasivo se forma igual que el medio pero sustituyendo la característica temporal activa por la pasiva. Se forma con la característica temporal -θ- más -σ-, y la terminación -μενος, -μένη, -μένον. El aoristo de participio pasivo se forma con la característica temporal -θη- abreviada en -θε- ante el modo participio. Toma desinencias activas. Se declina como un tema en -ντ.',
      subsections: [
        {
          title: 'Paradigma del Futuro de Participio Pasivo',
          content: 'Declinación del futuro de participio pasivo: λυ-θης-ό-μενος, λυ-θης-ο-μένη, λυ-θης-ό-μενον.',
          items: [
            'Masculino: λυ-θης-ό-μενος, λυ-θης-ο-μένου',
            'Femenino: λυ-θης-ο-μένη, λυ-θης-ο-μένης',
            'Neutro: λυ-θης-ό-μενον, λυ-θης-ο-μένου',
            'Declinación de 1ª clase'
          ]
        },
        {
          title: 'Paradigma del Aoristo de Participio Pasivo',
          content: 'Declinación del aoristo de participio pasivo: λυ-θείς, λυ-θεῖ-σα, λυ-θέν.',
          items: [
            'Masculino: λυ-θείς, λυ-θέ-ντος (tema en -ντ)',
            'Femenino: λυ-θεῖ-σα, λυ-θε-ίσης (tema en -σ)',
            'Neutro: λυ-θέν, λυ-θέ-ντος (tema en -ντ)',
            'Expresa acción anterior pasiva'
          ]
        }
      ]
    },
    {
      id: 'sec-25-8',
      title: '25.8 Participio del Verbo εἰμί',
      content: 'El verbo εἰμί tiene dos participios: presente y futuro. El presente de participio de εἰμί tiene formas que coinciden con las desinencias del participio de presente del verbo λύω. El futuro de participio de εἰμί se forma con el tema ἐ- del verbo εἰμί, más la característica temporal activa del futuro, la vocal de unión y las desinencias medio-pasivas del participio.',
      subsections: [
        {
          title: 'Paradigmas del Participio de εἰμί',
          content: 'Declinación de los participios de εἰμί.',
          items: [
            'Presente: ὤν, οὖσα, ὄν (que es, siendo)',
            'Futuro: ἐσ-ό-μενος, ἐσ-ο-μένη, ἐσ-ό-μενον (que será, habiendo de ser)',
            'Declinación similar a participios de λύω'
          ]
        }
      ]
    },
    {
      id: 'sec-25-9',
      title: '25.9 Tabla Completa de Conjugación - Voz Activa',
      content: 'Recapitulación de la conjugación del verbo λύω en voz activa con todos los tiempos (presente, imperfecto, futuro, aoristo, perfecto, pluscuamperfecto) en indicativo, imperativo, subjuntivo, optativo, participio e infinitivo.',
      subsections: [
        {
          title: 'Presente Activo',
          content: 'Indicativo: λύ-ω, λύ-ει-ς, λύ-ει, λύ-ο-μεν, λύ-ε-τε, λύ-ου-σι(ν). Imperativo: λύ-ε, λυ-έ-τω, λύ-ε-τε, λυ-έ-τωσαν. Subjuntivo: λύ-ω, λύ-ῃ-ς, λύ-ῃ, λύ-ω-μεν, λύ-η-τε, λύ-ω-σι(ν). Optativo: λύ-οι-μι, λύ-οι-ς, λύ-οι, λύ-οι-μεν, λύ-οι-τε, λύ-οι-εν. Participio: λύ-ων, λύ-ου-σα, λύ-ο-ν. Infinitivo: λύ-ει-ν.',
          items: [
            'Presente activo: acción continuada en presente',
            'Todas las formas personales y no personales'
          ]
        },
        {
          title: 'Futuro Activo',
          content: 'Indicativo: λύ-σ-ω, λύ-σ-ει-ς, λύ-σ-ει, λύ-σ-ο-μεν, λύ-σ-ε-τε, λύ-σ-ου-σι(ν). Participio: λύ-σ-ων, λύ-σ-ου-σα, λύ-σ-ον. Infinitivo: λύ-σ-ει-ν.',
          items: [
            'Futuro activo: acción futura',
            'Característica temporal -σ-'
          ]
        },
        {
          title: 'Aoristo Activo',
          content: 'Indicativo: ἔ-λυ-σα, ἔ-λυ-σα-ς, ἔ-λυ-σε(ν), ἐ-λύ-σα-μεν, ἐ-λύ-σα-τε, ἔ-λυ-σα-ν. Imperativo: λύ-σ-ω, λύ-σ-ο-ν, λύ-σ-α-τε, λυ-σά-τω, λυ-σά-τωσαν. Subjuntivo: λύ-σ-ω, λύ-σ-ῃ-ς, λύ-σ-ῃ, λύ-σ-ω-μεν, λύ-σα-τε, λύ-σ-ω-σι(ν). Optativo: λύ-σα-ι-μι, λύ-σα-ι-ς, λύ-σα-ι, λύ-σα-ι-μεν, λύ-σα-ι-τε, λύ-σα-ι-εν. Participio: λύ-σα-ς, λύ-σα-σα, λύ-σα-ν. Infinitivo: λύ-σα-ι.',
          items: [
            'Aoristo activo: acción puntual o anterior',
            'Característica temporal -σα-'
          ]
        },
        {
          title: 'Perfecto Activo',
          content: 'Indicativo: λέ-λυ-κα, λέ-λυ-κα-ς, λέ-λυ-κε, λε-λύ-κα-μεν, λε-λύ-κα-τε, λε-λύ-κα-σι(ν). Imperativo: λέ-λυ-κε, λε-λυ-κέ-τω, λε-λύ-κε-τε, λε-λυ-κέ-τωσαν. Subjuntivo: λε-λυ-κ-ῶ, λε-λυ-κ-ῇ-ς, λε-λυ-κ-ῇ, λε-λυ-κ-ῶ-μεν, λε-λυ-κ-ῆ-τε, λε-λυ-κ-ῶ-σι(ν). Optativo: λε-λυ-κ-ε-ῖ-ν (infinitivo). Participio: λε-λυ-κής, λε-λυ-κυ-ῖα, λε-λυ-κός. Infinitivo: λε-λυ-κέ-ναι.',
          items: [
            'Perfecto activo: acción anterior con efecto presente',
            'Reduplicación y característica -κ-'
          ]
        }
      ]
    },
    {
      id: 'sec-25-10',
      title: '25.10 Tabla Completa de Conjugación - Voz Medio-Pasiva',
      content: 'Recapitulación de la conjugación del verbo λύω en voz medio-pasiva con todos los tiempos (presente, imperfecto, futuro medio, futuro pasivo, aoristo medio, aoristo pasivo, perfecto, pluscuamperfecto) en indicativo, imperativo, subjuntivo, optativo, participio e infinitivo.',
      subsections: [
        {
          title: 'Presente Medio-Pasivo',
          content: 'Indicativo: λύ-ο-μαι, λύ-ει (λύ-ῃ), λύ-ε-ται, λυ-ό-μεθα, λύ-ε-σθε, λύ-ο-νται. Imperativo: λύ-ου, λυ-έ-σθω, λύ-ε-σθε, λυ-έ-σθωσαν. Subjuntivo: λύ-ω-μαι, λύ-ῃ, λύ-η-ται, λυ-ώ-μεθα, λύ-η-σθε, λύ-ω-νται. Optativo: λύ-οι-ο, λύ-οι-ο, λύ-οι-το, λύ-οι-μεθα, λύ-οι-σθε, λύ-οι-ντο. Participio: λυ-ό-μενος, λυ-ο-μένη, λυ-ό-μενον. Infinitivo: λύ-ε-σθαι.',
          items: [
            'Presente medio-pasivo: acción continuada con significado medio o pasivo',
            'Desinencias -μαι, -σαι, -ται, -μεθα, -σθε, -νται'
          ]
        },
        {
          title: 'Futuro Medio y Futuro Pasivo',
          content: 'Futuro Medio: λύ-σ-ο-μαι, λύ-σ-ει (λύ-σ-ῃ), λύ-σ-ε-ται, λυ-σ-ό-μεθα, λύ-σ-ε-σθε, λύ-σ-ο-νται. Futuro Pasivo: λυ-θή-σ-ο-μαι, λυ-θή-σ-ει (λυ-θή-σ-ῃ), λυ-θή-σ-ε-ται, λυ-θης-ό-μεθα, λυ-θή-σ-ε-σθε, λυ-θή-σ-ο-νται.',
          items: [
            'Futuro medio: acción futura con significado medio',
            'Futuro pasivo: acción futura con significado pasivo',
            'Característica temporal -σ- (medio) y -θη-σ- (pasivo)'
          ]
        },
        {
          title: 'Aoristo Medio y Aoristo Pasivo',
          content: 'Aoristo Medio: ἐ-λυ-σά-μην, ἐ-λύ-σω, ἐ-λύ-σα-το, ἐ-λυ-σά-μεθα, ἐ-λύ-σα-σθε, ἐ-λύ-σα-ντο. Aoristo Pasivo: ἐ-λύ-θη-ν, ἐ-λύ-θη-ς, ἐ-λύ-θη, ἐ-λύ-θη-μεν, ἐ-λύ-θη-τε, ἐ-λύ-θη-σαν.',
          items: [
            'Aoristo medio: acción puntual con significado medio',
            'Aoristo pasivo: acción puntual con significado pasivo',
            'Característica temporal -σα- (medio) y -θη- (pasivo, abreviada en -θε- en participio)'
          ]
        },
        {
          title: 'Perfecto Medio-Pasivo',
          content: 'Indicativo: λέ-λυ-μαι, λέ-λυ-σαι, λέ-λυ-ται, λε-λύ-μεθα, λέ-λυ-σθε, λέ-λυ-νται. Imperativo: λέ-λυ-σο, λε-λύ-σθω, λε-λύ-σθε, λε-λύ-σθωσαν. Subjuntivo: λε-λυ-μ-ένος ῶ, λε-λυ-μ-ένη ῇ, λε-λυ-μ-ένον ῇ, λε-λυ-μ-ένοι ῶμεν, λε-λυ-μ-έναι ῆ-τε, λε-λυ-μ-ένα ῶ-σι(ν). Optativo: λε-λυ-μ-ένος εἴην. Participio: λε-λυ-μένος, λε-λυ-μένη, λε-λυ-μένον. Infinitivo: λε-λύ-σθαι.',
          items: [
            'Perfecto medio-pasivo: acción anterior con efecto presente',
            'Reduplicación sin característica temporal'
          ]
        }
      ]
    },
    {
      id: 'sec-25-11',
      title: '25.11 Funciones Sintácticas del Participio',
      content: 'El participio desempeña múltiples funciones sintácticas en el Nuevo Testamento. Puede ser sustantivado (ὁ λέγων "el orador"), atributivo (indicando cualidades del sujeto), predicativo (complementando al verbo y a un sintagma nominal), apositivo (concordando en caso, género y número), absoluto o genitivo absoluto (con sujeto propio en genitivo), interno (reforzando enfáticamente), o participio de resultado. La lengua griega utiliza muchísimo el modo participio para expresar oraciones de relativo donde el español utilizaría un pronombre relativo.',
      subsections: [
        {
          title: 'Participio Sustantivado',
          content: 'El participio puede sustantivarse como cualquier adjetivo.',
          items: [
            'ὁ λέγων "el orador", "el que habla"',
            'οἱ πιστεύοντες "los que creen", "los creyentes"',
            'ὁ βαπτίζων "el Bautista"',
            'Puede ser genérico: ὁ κλέπτων "el que roba" (todos)'
          ]
        },
        {
          title: 'Participio Atributivo',
          content: 'Indica cualidades del sujeto con verbo atributivo εἰμί.',
          items: [
            'Concuerda en género, número y caso',
            'Expresa cualidades permanentes',
            'Frecuente en descripciones'
          ]
        },
        {
          title: 'Participio Predicativo',
          content: 'Complementa al verbo y a un sintagma nominal.',
          items: [
            'Aparece en estructuras con dos complementos directos',
            'Uno de persona y otro de cosa, o predicativo',
            'Frecuente con verbos de percepción'
          ]
        },
        {
          title: 'Participio Apositivo',
          content: 'Concuerda con el nombre en caso, género y número.',
          items: [
            'Equivale a un adjetivo explicativo',
            'Se traduce por gerundio o giro adverbial',
            'Puede expresar tiempo, causa, etc.'
          ]
        },
        {
          title: 'Participio Absoluto o Genitivo Absoluto',
          content: 'El participio tiene sujeto propio en genitivo.',
          items: [
            'Corresponde al ablativo absoluto en latín',
            'Se traduce por gerundio u oración circunstancial',
            'Puede expresar tiempo, causa, condición, modo, concesión'
          ]
        },
        {
          title: 'Participio Interno',
          content: 'Refuerza enfáticamente una forma finita del mismo verbo.',
          items: [
            'Traduce el infinitivo absoluto hebreo',
            'Aparece en citas de los LXX',
            'Ejemplo: ἰδὼν εἶδον "he visto bien"'
          ]
        }
      ]
    },
    {
      id: 'sec-25-12',
      title: '25.12 Resumen Comparativo de Tiempos y Voces',
      content: 'Comparación de los diferentes tiempos y voces del participio del verbo λύω, mostrando cómo varían las formas según el tiempo (presente, futuro, aoristo, perfecto) y la voz (activa, media, pasiva).',
      subsections: [
        {
          title: 'Presente vs. Aoristo',
          content: 'Diferencias fundamentales entre presente y aoristo.',
          items: [
            'Presente: λύ-ων (acción continuada, simultánea)',
            'Aoristo: λύ-σα-ς (acción puntual, anterior)',
            'Presente: λυ-ό-μενος (acción continuada media)',
            'Aoristo: λυ-σά-μενος (acción puntual media)'
          ]
        },
        {
          title: 'Activa vs. Medio-Pasiva',
          content: 'Diferencias entre voces activa y medio-pasiva.',
          items: [
            'Activa: λύ-ων, λύ-σ-ων, λύ-σα-ς, λε-λυ-κής',
            'Media: λυ-ό-μενος, λυ-σ-ό-μενος, λυ-σά-μενος, λε-λυ-μένος',
            'Pasiva: λυ-θη-σ-ό-μενος, λυ-θείς'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'λύω', type: 'verbo', spanish: 'desatar, soltar', frequency: 42 },
    { greek: 'λύ-ων (part.)', type: 'participio activo', spanish: 'desatando', frequency: 8 },
    { greek: 'λύ-σ-ων (part.)', type: 'participio activo', spanish: 'que desatará', frequency: 2 },
    { greek: 'λύ-σα-ς (part.)', type: 'participio activo', spanish: 'habiendo desatado', frequency: 5 },
    { greek: 'λε-λυ-κής (part.)', type: 'participio activo', spanish: 'habiendo desatado', frequency: 1 },
    { greek: 'λυ-ό-μενος (part.)', type: 'participio medio', spanish: 'desatándose', frequency: 3 },
    { greek: 'λυ-σ-ό-μενος (part.)', type: 'participio medio', spanish: 'que se desatará', frequency: 1 },
    { greek: 'λυ-σά-μενος (part.)', type: 'participio medio', spanish: 'habiendo se desatado', frequency: 2 },
    { greek: 'λε-λυ-μένος (part.)', type: 'participio medio', spanish: 'habiendo se desatado', frequency: 1 },
    { greek: 'λυ-θης-ό-μενος (part.)', type: 'participio pasivo', spanish: 'que será desatado', frequency: 1 },
    { greek: 'λυ-θείς (part.)', type: 'participio pasivo', spanish: 'siendo desatado', frequency: 4 },
    { greek: 'εἰμί', type: 'verbo', spanish: 'ser, estar', frequency: 2457 },
    { greek: 'ὤν (part.)', type: 'participio', spanish: 'siendo', frequency: 158 },
    { greek: 'ἐσ-ό-μενος (part.)', type: 'participio', spanish: 'que será', frequency: 12 },
    { greek: 'λέγω', type: 'verbo', spanish: 'decir, hablar', frequency: 2354 },
    { greek: 'ὁ λέγων', type: 'participio sustantivado', spanish: 'el que habla, el orador', frequency: 45 },
    { greek: 'πιστεύω', type: 'verbo', spanish: 'creer, confiar', frequency: 241 },
    { greek: 'οἱ πιστεύοντες', type: 'participio sustantivado', spanish: 'los creyentes', frequency: 32 },
    { greek: 'βαπτίζω', type: 'verbo', spanish: 'bautizar', frequency: 77 },
    { greek: 'ὁ βαπτίζων', type: 'participio sustantivado', spanish: 'el Bautista', frequency: 12 },
    { greek: 'κλέπτω', type: 'verbo', spanish: 'robar', frequency: 13 },
    { greek: 'ὁ κλέπτων', type: 'participio sustantivado', spanish: 'el que roba', frequency: 2 },
    { greek: 'ἀναβαίνω', type: 'verbo', spanish: 'subir', frequency: 82 },
    { greek: 'αὐξάνω', type: 'verbo', spanish: 'crecer, aumentar', frequency: 23 },
    { greek: 'ἄγγελος', type: 'sustantivo', spanish: 'ángel', frequency: 188 }
  ],
  exercises: [
    {
      id: 'ex-25-1',
      type: 'flashcard',
      title: 'Flashcards - Formas de Participio',
      description: 'Traduce formas de participio',
      items: [
        {
          id: 'fc-25-1',
          question: 'λύ-ων (participio)',
          options: ['desatando (presente participio activo)'],
          correctAnswer: 0,
          explanation: 'λύ-ων es el presente de participio activo, expresa acción simultánea.'
        },
        {
          id: 'fc-25-2',
          question: 'λύ-σα-ς (participio)',
          options: ['habiendo desatado (aoristo participio activo)'],
          correctAnswer: 0,
          explanation: 'λύ-σα-ς es el aoristo de participio activo, expresa acción anterior.'
        },
        {
          id: 'fc-25-3',
          question: 'λυ-ό-μενος (participio)',
          options: ['desatándose (presente participio medio)'],
          correctAnswer: 0,
          explanation: 'λυ-ό-μενος es el presente de participio medio.'
        },
        {
          id: 'fc-25-4',
          question: 'λυ-θείς (participio)',
          options: ['siendo desatado (aoristo participio pasivo)'],
          correctAnswer: 0,
          explanation: 'λυ-θείς es el aoristo de participio pasivo.'
        },
        {
          id: 'fc-25-5',
          question: 'ὤν (participio)',
          options: ['siendo (presente participio de εἰμί)'],
          correctAnswer: 0,
          explanation: 'ὤν es el presente de participio de εἰμί.'
        },
        {
          id: 'fc-25-6',
          question: 'ὁ λέγων',
          options: ['el que habla, el orador (participio sustantivado)'],
          correctAnswer: 0,
          explanation: 'ὁ λέγων es un participio sustantivado que significa "el que habla".'
        }
      ]
    },
    {
      id: 'ex-25-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Funciones del Participio',
      description: 'Identifica la función del participio',
      items: [
        {
          id: 'mc-25-1',
          question: 'Que expresa el presente participio?',
          options: ['Acción terminada', 'Acción simultánea', 'Acción futura'],
          correctAnswer: 1,
          explanation: 'El presente participio expresa acción simultánea a la del verbo principal.'
        },
        {
          id: 'mc-25-2',
          question: 'Que expresa el aoristo participio?',
          options: ['Acción simultánea', 'Acción anterior o puntual', 'Acción futura'],
          correctAnswer: 1,
          explanation: 'El aoristo participio expresa acción anterior o puntual, no durativa.'
        },
        {
          id: 'mc-25-3',
          question: 'Como se declina el presente participio activo?',
          options: ['Como adjetivo 1ª clase', 'Como tema en -ντ (masc./neutro) y -σ (fem.)', 'Como tema dental'],
          correctAnswer: 1,
          explanation: 'El presente participio activo se declina como tema en -ντ en masculino/neutro y -σ en femenino.'
        },
        {
          id: 'mc-25-4',
          question: 'Como se declina el participio medio?',
          options: ['Como tema en -ντ', 'Como adjetivo 1ª clase de tres terminaciones', 'Como tema dental'],
          correctAnswer: 1,
          explanation: 'El participio medio se declina como adjetivo de 1ª clase de tres terminaciones.'
        },
        {
          id: 'mc-25-5',
          question: 'Que es el genitivo absoluto?',
          options: ['Participio con sujeto propio en genitivo', 'Participio sustantivado', 'Participio apositivo'],
          correctAnswer: 0,
          explanation: 'El genitivo absoluto es cuando el participio tiene sujeto propio en genitivo.'
        }
      ]
    },
    {
      id: 'ex-25-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas del Participio',
      description: 'Evalua tus conocimientos sobre participio',
      items: [
        {
          id: 'tf-25-1',
          question: 'El participio es un adjetivo verbal',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El participio es un adjetivo verbal que combina características de adjetivo y verbo.'
        },
        {
          id: 'tf-25-2',
          question: 'El participio debe concertar con el sustantivo al que modifica',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El participio debe concertar en género, número y caso.'
        },
        {
          id: 'tf-25-3',
          question: 'El presente participio expresa acción anterior',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El presente participio expresa acción simultánea; el aoristo expresa acción anterior.'
        },
        {
          id: 'tf-25-4',
          question: 'El participio perfecto expresa efecto presente',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El participio perfecto expresa acción anterior cuyo efecto permanece.'
        },
        {
          id: 'tf-25-5',
          question: 'El participio puede sustantivarse',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El participio puede sustantivarse como cualquier adjetivo (ὁ λέγων).'
        }
      ]
    },
    {
      id: 'ex-25-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Formas',
      description: 'Empareja formas de participio con sus tiempos',
      items: [
        {
          id: 'match-25-1',
          description: 'Empareja participios con sus tiempos',
          pairs: [
            { left: 'λύ-ων', right: 'presente activo' },
            { left: 'λύ-σ-ων', right: 'futuro activo' },
            { left: 'λύ-σα-ς', right: 'aoristo activo' },
            { left: 'λε-λυ-κής', right: 'perfecto activo' },
            { left: 'λυ-ό-μενος', right: 'presente medio' },
            { left: 'λυ-σά-μενος', right: 'aoristo medio' },
            { left: 'λυ-θείς', right: 'aoristo pasivo' },
            { left: 'ὤν', right: 'presente de εἰμί' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente los tiempos del participio.'
        }
      ]
    },
    {
      id: 'ex-25-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Participio',
      description: 'Completa con la forma correcta de participio',
      items: [
        {
          id: 'fb-25-1',
          question: 'Desatando (presente participio activo, masc. nom. sg.): _____',
          options: ['λύω', 'λύ-ων', 'λύ-σα-ς'],
          correctAnswer: 1,
          explanation: 'λύ-ων es la forma correcta del presente participio activo.'
        },
        {
          id: 'fb-25-2',
          question: 'Habiendo desatado (aoristo participio activo, masc. nom. sg.): _____',
          options: ['λύων', 'λύ-σα-ς', 'λύ-σ-ων'],
          correctAnswer: 1,
          explanation: 'λύ-σα-ς es la forma correcta del aoristo participio activo.'
        },
        {
          id: 'fb-25-3',
          question: 'Desatándose (presente participio medio, masc. nom. sg.): _____',
          options: ['λύομαι', 'λυ-ό-μενος', 'λύ-σα-ι'],
          correctAnswer: 1,
          explanation: 'λυ-ό-μενος es la forma correcta del presente participio medio.'
        },
        {
          id: 'fb-25-4',
          question: 'Siendo desatado (aoristo participio pasivo, masc. nom. sg.): _____',
          options: ['λύεσθαι', 'λυ-θείς', 'λύ-σα-ι'],
          correctAnswer: 1,
          explanation: 'λυ-θείς es la forma correcta del aoristo participio pasivo.'
        },
        {
          id: 'fb-25-5',
          question: 'Siendo (presente participio de εἰμί, masc. nom. sg.): _____',
          options: ['εἰμί', 'ὤν', 'ἔσται'],
          correctAnswer: 1,
          explanation: 'ὤν es la forma correcta del presente participio de εἰμί.'
        }
      ]
    },
    {
      id: 'ex-25-6',
      type: 'translation',
      title: 'Traduccion - Oraciones con Participio',
      description: 'Traduce oraciones con participio',
      items: [
        {
          id: 'tr-25-1',
          question: 'ὁ λέγων',
          options: ['el que habla, el orador', 'hablando', 'habría hablado'],
          correctAnswer: 0,
          explanation: 'ὁ λέγων es un participio sustantivado que significa "el que habla".'
        },
        {
          id: 'tr-25-2',
          question: 'οἱ πιστεύοντες',
          options: ['creyendo', 'los que creen, los creyentes', 'creerán'],
          correctAnswer: 1,
          explanation: 'οἱ πιστεύοντες es un participio sustantivado que significa "los creyentes".'
        },
        {
          id: 'tr-25-3',
          question: 'λύων τὸ δεσμόν',
          options: ['habiendo desatado la cuerda', 'desatando la cuerda', 'desataría la cuerda'],
          correctAnswer: 1,
          explanation: 'Participio presente que expresa acción simultánea.'
        },
        {
          id: 'tr-25-4',
          question: 'λυθέντος τοῦ δεσμοῦ',
          options: ['siendo desatada la cuerda', 'habiendo sido desatada la cuerda', 'desatando la cuerda'],
          correctAnswer: 1,
          explanation: 'Genitivo absoluto con aoristo participio pasivo.'
        },
        {
          id: 'tr-25-5',
          question: 'ὤν ἀγάπη',
          options: ['siendo amor', 'que es amor', 'será amor'],
          correctAnswer: 1,
          explanation: 'Participio atributivo que expresa cualidad del sujeto.'
        }
      ]
    }
  ]
};

export const lesson26: Lesson = {
  id: 'lesson-26',
  number: 26,
  title: 'Palabras Invariables: Adverbio, Preposición, Conjunción e Interjección',
  introduction: 'Las palabras invariables son aquellas que no cambian de forma según el género, número o caso. Incluyen adverbios, preposiciones, conjunciones e interjecciones. Los adverbios modifican verbos, adjetivos u otros adverbios. Las preposiciones rigen casos y establecen relaciones entre palabras. Las conjunciones unen palabras u oraciones. Las interjecciones expresan emociones o exclamaciones. Estas palabras son fundamentales para la construcción de oraciones en griego del Nuevo Testamento.',
  sections: [
    {
      id: 'sec-26-1',
      title: '26.1 Adverbios - Terminaciones y Clasificación',
      content: 'Los adverbios griegos tienen terminaciones que indican su significado: -ως indica manera (πῶς "¿cómo?"), -ου, -οθι indican reposo (ποῦ "¿dónde?"), -οι, -ose indican dirección (ποῖ "¿a dónde?"), -οθεν indican procedencia (πόθεν "¿de dónde?"), -οτε indican tiempo (πότε "¿cuándo?"), -ῇ indican paso o manera (πῇ "¿por dónde?"). Los adverbios de modo se forman de adjetivos cambiando la ν final del genitivo plural masculino por ς (καλός → καλῶς). Los comparativos y superlativos de adverbios se forman añadiendo la terminación neutra del acusativo singular a los comparativos y plural a los superlativos.',
      subsections: [
        {
          title: 'Adverbios de Modo',
          content: 'Adverbios derivados de adjetivos con terminación -ως.',
          items: [
            'καλῶς (de καλός) - bien',
            'δικαίως (de δίκαιος) - justamente',
            'πάντως (de πᾶς) - completamente',
            'Comparativos: σοφώτερον, δικαιότερον',
            'Superlativos: σοφώτατα, δικαιότατα'
          ]
        },
        {
          title: 'Adverbios Irregulares de Modo',
          content: 'Adverbios que no siguen la formación regular.',
          items: [
            'ἡδέως - agradablemente',
            'μέγα - grandemente',
            'μικρόν - poco',
            'οὐδέν - de ningún modo',
            'ταχύ (ταχέως) - rápidamente',
            'μόνον - solamente',
            'πρῶτον - en primer lugar, al principio',
            'ὕστερον - más tarde'
          ]
        },
        {
          title: 'Adverbios Simples Empleados Adverbialmente',
          content: 'Formas nominales usadas como adverbios.',
          items: [
            'βίᾳ - por fuerza',
            'ἰδίᾳ - en particular',
            'ἡσυχῇ - tranquilamente',
            'τέλος - finalmente',
            'σφόδρα - vehementemente'
          ]
        }
      ]
    },
    {
      id: 'sec-26-2',
      title: '26.2 Adverbios de Lugar',
      content: 'Los adverbios de lugar tienen terminaciones comunes que indican su significado: -ου, -οθι indican "dónde", -οι, -σε indican "a dónde", -θεν indican "de dónde", -ῇ indican "por dónde". Estos adverbios son fundamentales para expresar ubicación, dirección y procedencia en el Nuevo Testamento.',
      subsections: [
        {
          title: 'Adverbios Interrogativos de Lugar',
          content: 'Preguntas sobre ubicación y dirección.',
          items: [
            'ποῦ - ¿dónde? (ubicación)',
            'ποῖ - ¿a dónde? (dirección)',
            'πόθεν - ¿de dónde? (procedencia)',
            'πῇ - ¿por dónde? (paso)'
          ]
        },
        {
          title: 'Adverbios de Ubicación (¿Dónde?)',
          content: 'Expresan dónde está algo.',
          items: [
            'ποῦ - en alguna parte',
            'ἐνθάδε, ἴδε - aquí',
            'ἐνταῦθα - aquí, allí',
            'ἐκεῖ, ἐκεῖσε - allí',
            'οὗ, ἔνθα - donde',
            'οἴκοι - en casa',
            'ὅπου - donde, allí',
            'πανταχοῦ - por todas partes',
            'ἀλλαχοῦ - en otra parte'
          ]
        },
        {
          title: 'Adverbios de Dirección (¿A Dónde?)',
          content: 'Expresan hacia dónde se va.',
          items: [
            'ποῖ - a alguna parte',
            'ἐνθάδε - acá',
            'ἐνταῦθα - acá, allá',
            'ἐκεῖσε - allí',
            'ἄνω - arriba',
            'κάτω - abajo',
            'ἔξω, ἔσω - fuera'
          ]
        },
        {
          title: 'Adverbios de Procedencia (¿De Dónde?)',
          content: 'Expresan de dónde viene algo.',
          items: [
            'πόθεν - de alguna parte',
            'ἔνθεν - de aquí',
            'ἐντεῦθεν - desde aquí',
            'ἐκεῖθεν - de allí',
            'ὅθεν - de donde',
            'οἴκοθεν - de casa',
            'ἄνωθεν - de arriba',
            'κάτωθεν - de abajo',
            'ἔξοθεν, ἔσοθεν - de fuera',
            'μακρόθεν - de lejos',
            'πανταχόθεν - de todas partes',
            'πάνθοθεν - de todas partes',
            'ἀλλαχόθεν - por otra parte',
            'οὐρανόθεν - desde el cielo'
          ]
        },
        {
          title: 'Adverbios de Paso (¿Por Dónde?)',
          content: 'Expresan por dónde pasa algo.',
          items: [
            'πῇ - por alguna parte',
            'τῇδε - por aquí',
            'ταύτῃ - por ahí',
            'ἐκεῖνῃ - por allá',
            'ῇ - por donde',
            'πανταχῇ - por todas partes'
          ]
        }
      ]
    },
    {
      id: 'sec-26-3',
      title: '26.3 Adverbios de Tiempo',
      content: 'Los adverbios de tiempo expresan cuándo ocurre una acción. Incluyen adverbios interrogativos (πότε "¿cuándo?"), adverbios de frecuencia (ἀεί, πάντοτε "siempre"), adverbios de negación temporal (οὔπω "todavía no", οὐκέτι "ya no"), y adverbios que expresan momentos específicos (τότε "entonces", σήμερον "hoy", αὔριον "mañana").',
      subsections: [
        {
          title: 'Adverbios Interrogativos de Tiempo',
          content: 'Preguntas sobre cuándo.',
          items: [
            'πότε - ¿cuándo?',
            'ποτέ - en cierta ocasión'
          ]
        },
        {
          title: 'Adverbios de Frecuencia y Duración',
          content: 'Expresan con qué frecuencia o durante cuánto tiempo.',
          items: [
            'ἐνίοτε - a veces',
            'οὔποτε - nunca',
            'οὔπω - todavía no',
            'οὐκέτι, μηκέτι - ya no, aún no',
            'τότε - entonces',
            'ἤδη - ya, ahora',
            'ἄρτι - hace poco, ahora',
            'εὐθύς, εὐθέως - inmediatamente',
            'πάλιν - de nuevo',
            'ἅμα - a un mismo tiempo',
            'ἀεί, πάντοτε - siempre',
            'πάλαι - hace tiempo',
            'νῦν - ahora',
            'πρίν - antes',
            'σήμερον - hoy',
            'αὔριον - mañana',
            'πρωΐ - al amanecer'
          ]
        }
      ]
    },
    {
      id: 'sec-26-4',
      title: '26.4 Adverbios de Cantidad, Afirmación y Negación',
      content: 'Los adverbios de cantidad expresan cuánto (μικρόν "poco", πολύ "mucho", μάλιστα "sobre todo"). Los adverbios de afirmación (ναί "sí", δή "ciertamente") y negación (οὐ "no", μή "no") son fundamentales en la construcción de oraciones interrogativas y negativas. La negación οὐ se usa con indicativo, mientras que μή se usa con otros modos.',
      subsections: [
        {
          title: 'Adverbios de Cantidad',
          content: 'Expresan cantidad o grado.',
          items: [
            'μικρόν - poco, casi',
            'ὀλίγον - poco',
            'πολύ - mucho',
            'μάλιστα - sobre todo',
            'μᾶλλον - más',
            'σχεδόν - casi',
            'μόνον - solamente',
            'πάντως - completamente'
          ]
        },
        {
          title: 'Adverbios de Afirmación',
          content: 'Expresan afirmación.',
          items: [
            'ναί - sí',
            'γέ (enclítica) - ciertamente, al menos',
            'δή (pospuesta) - ciertamente',
            'μάλιστα - exactamente'
          ]
        },
        {
          title: 'Adverbios de Negación Simple',
          content: 'Negación con indicativo.',
          items: [
            'οὐ (*) - no',
            'οὔτε ... οὔτε - ni ... ni',
            'οὐδαμῶς - de ningún otro modo',
            'οὐδέποτε - jamás'
          ]
        },
        {
          title: 'Adverbios de Negación Compuesta',
          content: 'Negación con otros modos.',
          items: [
            'μή (**) - no',
            'μήτε ... μήτε - ni ... ni',
            'μηδαμῶς - de ninguna manera',
            'μηδέποτε - nunca, jamás'
          ]
        },
        {
          title: 'Reglas de Negación',
          content: 'Cómo funcionan las negaciones en griego.',
          items: [
            'Negación compuesta + simple = afirmación',
            'Negación simple + compuesta = refuerzo',
            'Dos negaciones compuestas = refuerzo',
            'οὐ con indicativo, μή con otros modos',
            'En preguntas: οὐ espera respuesta afirmativa, μή espera negativa'
          ]
        }
      ]
    },
    {
      id: 'sec-26-5',
      title: '26.5 Adverbios de Interrogación y Duda',
      content: 'Los adverbios interrogativos introducen preguntas. Los adverbios de duda expresan incertidumbre. Estos adverbios son esenciales para formular preguntas y expresar dudas en griego del Nuevo Testamento.',
      subsections: [
        {
          title: 'Adverbios Interrogativos',
          content: 'Introducen preguntas.',
          items: [
            'ἆ, ἆρα - ¿...? (respuesta incierta)',
            'ἆρ οὐ (enclítica) - ¿acaso no? (espera respuesta afirmativa)',
            'οὔκουν - ¿acaso, pues, no? (espera respuesta afirmativa)',
            'μή, ἆρα μή - ¿acaso? (espera respuesta negativa)',
            'πότερον ... ἤ - ¿... o ...? (interrogativa disyuntiva)'
          ]
        },
        {
          title: 'Adverbios de Duda',
          content: 'Expresan incertidumbre.',
          items: [
            'ἴσως - quizá, tal vez',
            'τάχα - probablemente, quizá',
            'που (enclítica) - en cierto modo'
          ]
        }
      ]
    },
    {
      id: 'sec-26-6',
      title: '26.6 Preposiciones - Características Generales',
      content: 'Las preposiciones griegas eran originalmente adverbios de lugar. Tienen un significado concreto local del que se derivan significados temporales y figurados. Se clasifican en preposiciones propias e impropias. Las preposiciones rigen uno o varios casos; si rigen diversos casos, adquieren significado específico en cada uno. El acusativo indica dirección, el genitivo indica origen, el dativo indica posición en reposo.',
      subsections: [
        {
          title: 'Clasificación de Preposiciones',
          content: 'Tipos de preposiciones.',
          items: [
            'Propias: simples instrumentos sintácticos, entran en composición',
            'Impropias: formas adverbiales, no entran en composición',
            'Rigen uno o varios casos',
            'Significado varía según el caso que rigen'
          ]
        },
        {
          title: 'Significados según el Caso',
          content: 'Cómo varía el significado según el caso.',
          items: [
            'Acusativo: dirección, término de movimiento',
            'Genitivo: origen, punto de partida',
            'Dativo: posición en reposo',
            'Ejemplo: παρά + acusativo = hacia el lado de',
            'Ejemplo: παρά + genitivo = del lado de',
            'Ejemplo: παρά + dativo = al lado de'
          ]
        }
      ]
    },
    {
      id: 'sec-26-7',
      title: '26.7 Preposiciones Propias - Un Solo Caso',
      content: 'Preposiciones que rigen solo acusativo o solo genitivo. Estas preposiciones tienen significados específicos y usos particulares en el Nuevo Testamento.',
      subsections: [
        {
          title: 'Preposición εἰς',
          content: 'Significado: hacia el interior. Muy frecuente (1.768 veces).',
          items: [
            'Movimiento de lugar: al entrar en la casa',
            'Finalidad: bautizo para conversión',
            'Hostilidad: decían contra él',
            'Sustitución de ἐν: entregarán a los sanedrines',
            'Expresiones: εἰς τέλος = completamente, εἰς κενόν = en vano'
          ]
        },
        {
          title: 'Preposición ἐκ',
          content: 'Significado: desde el interior. Muy frecuente (919 veces).',
          items: [
            'Procedencia interior: de la abundancia del corazón habla la boca',
            'Origen: de Nazaret',
            'Material: hecho de pan',
            'Causa: todas las cosas fueron hechas por él'
          ]
        }
      ]
    },
    {
      id: 'sec-26-8',
      title: '26.8 Preposiciones Propias - Dos Casos',
      content: 'Preposiciones que rigen acusativo y genitivo. Estas preposiciones tienen significados distintos según el caso que rigen.',
      subsections: [
        {
          title: 'Preposición διά',
          content: 'Significado: a través de. Muy frecuente (667 veces).',
          items: [
            'Con acusativo - paso a través: a través de los sembrados',
            'Con genitivo - medio, causa: todas las cosas fueron hechas por él'
          ]
        },
        {
          title: 'Preposición μετά',
          content: 'Significado: con, entre. Muy frecuente (473 veces).',
          items: [
            'Con acusativo - posterioridad: después de mucho tiempo llega el amo',
            'Con genitivo - compañía: llévate contigo a uno o a dos',
            'Medio: se te concedió mediante una palabra profética'
          ]
        }
      ]
    },
    {
      id: 'sec-26-9',
      title: '26.9 Preposiciones Propias - Tres Casos',
      content: 'Preposición ἐπί es la única que aparece a menudo en NT con tres casos. Tiene significados distintos según el caso que rige.',
      subsections: [
        {
          title: 'Preposición ἐπί',
          content: 'Significado: sobre, encima. Muy frecuente (871 veces).',
          items: [
            'Con acusativo - movimiento: salir a la tierra',
            'Con acusativo - ubicación: había en él espíritu santo',
            'Con genitivo - situación: se manifestó junto al mar',
            'Con dativo - fundamento: fiado en tu palabra'
          ]
        }
      ]
    },
    {
      id: 'sec-26-10',
      title: '26.10 Conjunciones e Interjecciones',
      content: 'Las conjunciones unen palabras, sintagmas u oraciones. Se clasifican en coordinantes e subordinantes. Las interjecciones expresan emociones o exclamaciones. Estas palabras son fundamentales para la construcción de oraciones complejas y la expresión de emociones en griego del Nuevo Testamento.',
      subsections: [
        {
          title: 'Conjunciones Coordinantes',
          content: 'Unen elementos de igual rango.',
          items: [
            'Copulativas: καί (y), τε (y), ἅμα (a la vez)',
            'Disyuntivas: ἤ (o), ἢ ... ἢ (o ... o)',
            'Adversativas: ἀλλά (pero), δέ (pero, y), πλήν (sin embargo)',
            'Causales: γάρ (pues, porque), διότι (porque)'
          ]
        },
        {
          title: 'Conjunciones Subordinantes',
          content: 'Introducen oraciones subordinadas.',
          items: [
            'Causales: ὅτι (porque), διότι (porque), ἐπεί (porque)',
            'Finales: ἵνα (para que), ὅπως (para que)',
            'Temporales: ὅτε (cuando), ἐπεί (cuando), ὡς (cuando)',
            'Condicionales: εἰ (si), ἐάν (si), ὅταν (cuando)',
            'Concesivas: εἰ καί (aunque), ἐάν καί (aunque)'
          ]
        },
        {
          title: 'Interjecciones',
          content: 'Expresan emociones o exclamaciones.',
          items: [
            'ὦ - ¡oh! (vocativo)',
            'ἄγε - ¡vamos!',
            'οὐαί - ¡ay!',
            'ἰδού - ¡he aquí!',
            'ἀμήν - amén',
            'ἀλληλούια - ¡aleluya!'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'καλῶς', type: 'adverbio', spanish: 'bien', frequency: 37 },
    { greek: 'δικαίως', type: 'adverbio', spanish: 'justamente', frequency: 2 },
    { greek: 'πάντως', type: 'adverbio', spanish: 'completamente', frequency: 4 },
    { greek: 'ποῦ', type: 'adverbio', spanish: '¿dónde?', frequency: 24 },
    { greek: 'ποῖ', type: 'adverbio', spanish: '¿a dónde?', frequency: 8 },
    { greek: 'πόθεν', type: 'adverbio', spanish: '¿de dónde?', frequency: 29 },
    { greek: 'ἐκεῖ', type: 'adverbio', spanish: 'allí', frequency: 105 },
    { greek: 'ἐκεῖσε', type: 'adverbio', spanish: 'allí', frequency: 9 },
    { greek: 'ἄνω', type: 'adverbio', spanish: 'arriba', frequency: 9 },
    { greek: 'κάτω', type: 'adverbio', spanish: 'abajo', frequency: 9 },
    { greek: 'πότε', type: 'adverbio', spanish: '¿cuándo?', frequency: 29 },
    { greek: 'τότε', type: 'adverbio', spanish: 'entonces', frequency: 160 },
    { greek: 'νῦν', type: 'adverbio', spanish: 'ahora', frequency: 148 },
    { greek: 'σήμερον', type: 'adverbio', spanish: 'hoy', frequency: 41 },
    { greek: 'αὔριον', type: 'adverbio', spanish: 'mañana', frequency: 14 },
    { greek: 'πάλιν', type: 'adverbio', spanish: 'de nuevo', frequency: 141 },
    { greek: 'ἀεί', type: 'adverbio', spanish: 'siempre', frequency: 7 },
    { greek: 'πάντοτε', type: 'adverbio', spanish: 'siempre', frequency: 41 },
    { greek: 'οὐ', type: 'adverbio', spanish: 'no', frequency: 1606 },
    { greek: 'μή', type: 'adverbio', spanish: 'no', frequency: 1042 },
    { greek: 'ναί', type: 'adverbio', spanish: 'sí', frequency: 33 },
    { greek: 'εἰς', type: 'preposición', spanish: 'hacia, en', frequency: 1768 },
    { greek: 'ἐκ', type: 'preposición', spanish: 'desde, de', frequency: 919 },
    { greek: 'ἀπό', type: 'preposición', spanish: 'desde, de', frequency: 646 },
    { greek: 'διά', type: 'preposición', spanish: 'a través de, por', frequency: 667 },
    { greek: 'ἐπί', type: 'preposición', spanish: 'sobre, en', frequency: 871 },
    { greek: 'κατά', type: 'preposición', spanish: 'según, contra', frequency: 473 },
    { greek: 'μετά', type: 'preposición', spanish: 'con, después de', frequency: 473 },
    { greek: 'περί', type: 'preposición', spanish: 'en torno a, respecto de', frequency: 338 },
    { greek: 'ὑπέρ', type: 'preposición', spanish: 'sobre, en favor de', frequency: 150 },
    { greek: 'ὑπό', type: 'preposición', spanish: 'bajo, por', frequency: 220 },
    { greek: 'ἀντί', type: 'preposición', spanish: 'en lugar de', frequency: 22 },
    { greek: 'ἀνά', type: 'preposición', spanish: 'de abajo arriba', frequency: 13 },
    { greek: 'καί', type: 'conjunción', spanish: 'y', frequency: 9161 },
    { greek: 'ἀλλά', type: 'conjunción', spanish: 'pero', frequency: 638 },
    { greek: 'ἢ', type: 'conjunción', spanish: 'o', frequency: 342 },
    { greek: 'ὅτι', type: 'conjunción', spanish: 'que, porque', frequency: 1296 },
    { greek: 'ἵνα', type: 'conjunción', spanish: 'para que', frequency: 663 },
    { greek: 'ὅταν', type: 'conjunción', spanish: 'cuando', frequency: 123 },
    { greek: 'εἰ', type: 'conjunción', spanish: 'si', frequency: 679 }
  ],
  exercises: [
    {
      id: 'ex-26-1',
      type: 'flashcard',
      title: 'Flashcards - Adverbios de Lugar',
      description: 'Traduce adverbios de lugar',
      items: [
        { id: 'fc-26-1', question: 'ποῦ', options: ['¿dónde? (ubicación)'], correctAnswer: 0, explanation: 'ποῦ es el adverbio interrogativo de lugar que pregunta por la ubicación.' },
        { id: 'fc-26-2', question: 'ποῖ', options: ['¿a dónde? (dirección)'], correctAnswer: 0, explanation: 'ποῖ es el adverbio interrogativo que pregunta por la dirección.' },
        { id: 'fc-26-3', question: 'πόθεν', options: ['¿de dónde? (procedencia)'], correctAnswer: 0, explanation: 'πόθεν es el adverbio interrogativo que pregunta por la procedencia.' },
        { id: 'fc-26-4', question: 'ἐκεῖ', options: ['allí (ubicación)'], correctAnswer: 0, explanation: 'ἐκεῖ es el adverbio que indica ubicación en un lugar lejano.' },
        { id: 'fc-26-5', question: 'ἄνω', options: ['arriba (dirección)'], correctAnswer: 0, explanation: 'ἄνω es el adverbio que indica dirección hacia arriba.' },
        { id: 'fc-26-6', question: 'κάτω', options: ['abajo (dirección)'], correctAnswer: 0, explanation: 'κάτω es el adverbio que indica dirección hacia abajo.' },
        { id: 'fc-26-7', question: 'ἐνθάδε', options: ['aquí (ubicación)'], correctAnswer: 0, explanation: 'ἐνθάδε es el adverbio que indica ubicación en este lugar.' },
        { id: 'fc-26-8', question: 'ἔξω', options: ['fuera (ubicación)'], correctAnswer: 0, explanation: 'ἔξω es el adverbio que indica ubicación fuera.' }
      ]
    },
    {
      id: 'ex-26-2',
      type: 'flashcard',
      title: 'Flashcards - Adverbios de Tiempo',
      description: 'Traduce adverbios de tiempo',
      items: [
        { id: 'fc-26-9', question: 'πότε', options: ['¿cuándo?'], correctAnswer: 0, explanation: 'πότε es el adverbio interrogativo de tiempo.' },
        { id: 'fc-26-10', question: 'τότε', options: ['entonces'], correctAnswer: 0, explanation: 'τότε es el adverbio que indica tiempo pasado o futuro.' },
        { id: 'fc-26-11', question: 'νῦν', options: ['ahora'], correctAnswer: 0, explanation: 'νῦν es el adverbio que indica tiempo presente.' },
        { id: 'fc-26-12', question: 'σήμερον', options: ['hoy'], correctAnswer: 0, explanation: 'σήμερον es el adverbio que indica el día presente.' },
        { id: 'fc-26-13', question: 'αὔριον', options: ['mañana'], correctAnswer: 0, explanation: 'αὔριον es el adverbio que indica el día siguiente.' },
        { id: 'fc-26-14', question: 'πάλιν', options: ['de nuevo'], correctAnswer: 0, explanation: 'πάλιν es el adverbio que indica repetición.' },
        { id: 'fc-26-15', question: 'ἀεί', options: ['siempre'], correctAnswer: 0, explanation: 'ἀεί es el adverbio que indica continuidad temporal.' },
        { id: 'fc-26-16', question: 'πάντοτε', options: ['siempre'], correctAnswer: 0, explanation: 'πάντοτε es el adverbio que indica continuidad temporal.' }
      ]
    },
    {
      id: 'ex-26-3',
      type: 'flashcard',
      title: 'Flashcards - Preposiciones Frecuentes',
      description: 'Traduce preposiciones frecuentes',
      items: [
        { id: 'fc-26-17', question: 'εἰς + acusativo', options: ['hacia, en (movimiento)'], correctAnswer: 0, explanation: 'εἰς con acusativo indica movimiento hacia el interior.' },
        { id: 'fc-26-18', question: 'ἐκ + genitivo', options: ['desde, de (procedencia interior)'], correctAnswer: 0, explanation: 'ἐκ con genitivo indica procedencia desde el interior.' },
        { id: 'fc-26-19', question: 'ἀπό + genitivo', options: ['desde, de (procedencia)'], correctAnswer: 0, explanation: 'ἀπό con genitivo indica procedencia o punto de partida.' },
        { id: 'fc-26-20', question: 'διά + acusativo', options: ['a través de (paso)'], correctAnswer: 0, explanation: 'διά con acusativo indica paso a través de algo.' },
        { id: 'fc-26-21', question: 'διά + genitivo', options: ['por (medio, causa)'], correctAnswer: 0, explanation: 'διά con genitivo indica medio o causa.' },
        { id: 'fc-26-22', question: 'ἐπί + acusativo', options: ['sobre (movimiento)'], correctAnswer: 0, explanation: 'ἐπί con acusativo indica movimiento hacia o sobre.' },
        { id: 'fc-26-23', question: 'ἐπί + genitivo', options: ['sobre, junto a (ubicación)'], correctAnswer: 0, explanation: 'ἐπί con genitivo indica ubicación o situación.' },
        { id: 'fc-26-24', question: 'μετά + genitivo', options: ['con (compañía)'], correctAnswer: 0, explanation: 'μετά con genitivo indica compañía o unión.' }
      ]
    },
    {
      id: 'ex-26-4',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Adverbios y Preposiciones',
      description: 'Elige la traducción correcta',
      items: [
        { id: 'mc-26-1', question: 'Que adverbio expresa "siempre"?', options: ['πότε', 'ἀεί', 'τότε'], correctAnswer: 1, explanation: 'ἀεί es el adverbio que expresa "siempre".' },
        { id: 'mc-26-2', question: 'Que preposición rige solo acusativo y significa "hacia el interior"?', options: ['ἐκ', 'εἰς', 'ἀπό'], correctAnswer: 1, explanation: 'εἰς rige solo acusativo y significa "hacia el interior".' },
        { id: 'mc-26-3', question: 'Que preposición rige solo genitivo y significa "desde"?', options: ['εἰς', 'ἐπί', 'ἐκ'], correctAnswer: 2, explanation: 'ἐκ rige solo genitivo y significa "desde el interior".' },
        { id: 'mc-26-4', question: 'Que adverbio de negación se usa con indicativo?', options: ['μή', 'οὐ', 'μηδέποτε'], correctAnswer: 1, explanation: 'οὐ es la negación que se usa con indicativo.' },
        { id: 'mc-26-5', question: 'Que adverbio de negación se usa con subjuntivo?', options: ['οὐ', 'μή', 'οὐδέποτε'], correctAnswer: 1, explanation: 'μή es la negación que se usa con subjuntivo y otros modos.' },
        { id: 'mc-26-6', question: 'Que preposición rige tres casos?', options: ['εἰς', 'ἐπί', 'ἀπό'], correctAnswer: 1, explanation: 'ἐπί es la única preposición que rige tres casos: acusativo, genitivo y dativo.' },
        { id: 'mc-26-7', question: 'Que adverbio interrogativo pregunta por la procedencia?', options: ['ποῦ', 'ποῖ', 'πόθεν'], correctAnswer: 2, explanation: 'πόθεν es el adverbio interrogativo que pregunta por la procedencia.' },
        { id: 'mc-26-8', question: 'Que preposición significa "en favor de"?', options: ['ὑπό', 'ὑπέρ', 'περί'], correctAnswer: 1, explanation: 'ὑπέρ con genitivo significa "en favor de".' }
      ]
    },
    {
      id: 'ex-26-5',
      type: 'true-false',
      title: 'Verdadero/Falso - Adverbios y Preposiciones',
      description: 'Evalua tus conocimientos',
      items: [
        { id: 'tf-26-1', question: 'El adverbio πότε pregunta por el tiempo', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero. πότε es el adverbio interrogativo de tiempo.' },
        { id: 'tf-26-2', question: 'La preposición εἰς rige genitivo', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso. εἰς rige solo acusativo.' },
        { id: 'tf-26-3', question: 'La negación οὐ se usa con indicativo', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero. οὐ se usa con indicativo.' },
        { id: 'tf-26-4', question: 'La preposición ἐπί rige tres casos', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero. ἐπί es la única preposición que rige acusativo, genitivo y dativo.' },
        { id: 'tf-26-5', question: 'El adverbio ἀεί significa "nunca"', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso. ἀεί significa "siempre".' },
        { id: 'tf-26-6', question: 'La preposición ἐκ rige acusativo', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso. ἐκ rige solo genitivo.' },
        { id: 'tf-26-7', question: 'La preposición μετά con genitivo significa "compañía"', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero. μετά con genitivo expresa compañía o unión.' },
        { id: 'tf-26-8', question: 'El adverbio σήμερον significa "mañana"', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso. σήμερον significa "hoy"; αὔριον significa "mañana".' }
      ]
    },
    {
      id: 'ex-26-6',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Adverbios',
      description: 'Empareja adverbios con sus significados',
      items: [
        { id: 'match-26-1', description: 'Empareja adverbios con sus significados', pairs: [{ left: 'ποῦ', right: '¿dónde?' }, { left: 'ποῖ', right: '¿a dónde?' }, { left: 'πόθεν', right: '¿de dónde?' }, { left: 'τότε', right: 'entonces' }, { left: 'νῦν', right: 'ahora' }, { left: 'ἀεί', right: 'siempre' }, { left: 'πάλιν', right: 'de nuevo' }, { left: 'σήμερον', right: 'hoy' }], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente los adverbios y sus significados.' }
      ]
    },
    {
      id: 'ex-26-7',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Preposiciones',
      description: 'Empareja preposiciones con sus significados',
      items: [
        { id: 'match-26-2', description: 'Empareja preposiciones con sus significados', pairs: [{ left: 'εἰς + acusativo', right: 'hacia, en' }, { left: 'ἐκ + genitivo', right: 'desde el interior' }, { left: 'ἀπό + genitivo', right: 'desde' }, { left: 'διά + acusativo', right: 'a través de' }, { left: 'διά + genitivo', right: 'por (medio)' }, { left: 'ἐπί + acusativo', right: 'sobre (movimiento)' }, { left: 'ἐπί + genitivo', right: 'sobre (ubicación)' }, { left: 'μετά + genitivo', right: 'con (compañía)' }], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente las preposiciones y sus significados.' }
      ]
    },
    {
      id: 'ex-26-8',
      type: 'fill-blank',
      title: 'Completar Oraciones - Adverbios',
      description: 'Completa con el adverbio correcto',
      items: [
        { id: 'fb-26-1', question: 'Ἐκεῖ (allí) es un adverbio de _____', options: ['tiempo', 'lugar', 'cantidad'], correctAnswer: 1, explanation: 'ἐκεῖ es un adverbio de lugar que expresa ubicación.' },
        { id: 'fb-26-2', question: 'Τότε (entonces) es un adverbio de _____', options: ['lugar', 'tiempo', 'cantidad'], correctAnswer: 1, explanation: 'τότε es un adverbio de tiempo que expresa momento.' },
        { id: 'fb-26-3', question: 'Πολύ (mucho) es un adverbio de _____', options: ['lugar', 'tiempo', 'cantidad'], correctAnswer: 2, explanation: 'πολύ es un adverbio de cantidad que expresa cantidad.' },
        { id: 'fb-26-4', question: 'Καλῶς (bien) es un adverbio de _____', options: ['modo', 'lugar', 'tiempo'], correctAnswer: 0, explanation: 'καλῶς es un adverbio de modo que expresa manera.' },
        { id: 'fb-26-5', question: 'Οὐ (no) es un adverbio de _____', options: ['afirmación', 'negación', 'duda'], correctAnswer: 1, explanation: 'οὐ es un adverbio de negación.' }
      ]
    },
    {
      id: 'ex-26-9',
      type: 'translation',
      title: 'Traduccion - Frases con Adverbios y Preposiciones',
      description: 'Traduce frases con adverbios y preposiciones',
      items: [
        { id: 'tr-26-1', question: 'εἰς τὸ ἱερόν', options: ['al templo', 'del templo', 'en el templo'], correctAnswer: 0, explanation: 'εἰς con acusativo indica movimiento: "al templo".' },
        { id: 'tr-26-2', question: 'ἐκ τοῦ ἱεροῦ', options: ['al templo', 'desde el templo', 'en el templo'], correctAnswer: 1, explanation: 'ἐκ con genitivo indica procedencia: "desde el templo".' },
        { id: 'tr-26-3', question: 'ἐπὶ τῆς θαλάσσης', options: ['al mar', 'junto al mar', 'desde el mar'], correctAnswer: 1, explanation: 'ἐπί con genitivo indica ubicación: "junto al mar".' },
        { id: 'tr-26-4', question: 'μετὰ τῶν μαθητῶν', options: ['con los discípulos', 'de los discípulos', 'sin los discípulos'], correctAnswer: 0, explanation: 'μετά con genitivo expresa compañía: "con los discípulos".' },
        { id: 'tr-26-5', question: 'ὑπὸ τοῦ πατρός', options: ['por el padre', 'con el padre', 'del padre'], correctAnswer: 0, explanation: 'ὑπό con genitivo indica agente: "por el padre".' }
      ]
    }
  ]
};

export const lesson27: Lesson = {
  id: 'lesson-27',
  number: 27,
  title: 'Verbos Puros Contractos: -άω, -έω y -όω',
  introduction: 'Los verbos contractos puros son aquellos cuyo tema acaba en vocal (a, e, u o o). En presente e imperfecto, la vocal del tema se contrae con la vocal de unión para evitar el hiato. En los demás tiempos, la vocal del tema se alarga. Los verbos contractos en -άω contraen según las reglas: a + e/η > ᾶ, a + ει/ῃ > ᾷ, a + o/ou > ῶ, a + oi > ῳ. Los verbos en -έω contraen: e + e/ei > ει, e + o > ou, e + w > ω, e + η > η. Los verbos en -όω contraen: o + e/o/ou > ou, o + η/ω > ω, o + ei/ῃ/oi > oi. Estos verbos son fundamentales en el Nuevo Testamento.',
  sections: [
    {
      id: 'sec-27-1',
      title: 'Clasificación General de Verbos',
      content: 'Los verbos griegos se clasifican en dos categorías principales: verbos temáticos (en -ω) y verbos atemáticos (en -μι). Los verbos temáticos incluyen verbos puros (tema en vocal) y verbos consonánticos (tema en consonante). Los verbos puros contractos (tema en a, e, u o o) contraen en presente e imperfecto. Los verbos consonánticos incluyen mudos (labiales, guturales, dentales), nasales (λ, μ, ν, ρ) y líquidos. Los verbos atemáticos incluyen verbos con reduplicación (τίθημι, ἵστημι, δίδωμι, εἶμι), verbos en -νυμι (δείκνυμι) y verbos sin reduplicación (εἰμί, φημί, κάθημαι).'
    },
    {
      id: 'sec-27-2',
      title: 'Regla General de Contracción',
      content: 'Como regla general, los verbos contractos contraen la vocal del tema y la vocal de unión en presente e imperfecto. En futuro, aoristo, perfecto y pluscuamperfecto, la vocal final del tema se alarga: a y e > η (después de e, i, h, a > ᾱ), o > ω. La mayoría de estos verbos son denominativos, derivados de nombres. Por ejemplo: de τιμή (honra) > τιμάω (honrar), de ποίησις (acción) > ποιέω (hacer), de φίλος (amigo) > φιλέω (amar), de δῆλος (visible) > δηλόω (mostrar). Los verbos en -έω solo se distinguen de λύω en que llevan acento circunflejo en su conjugación.'
    },
    {
      id: 'sec-27-3',
      title: 'Contracciones en Verbos -άω',
      content: 'Los verbos contractos en -άω siguen estas contracciones: a + e, η > ᾶ (timᾶ < timá-e-i), a + ει, ῃ > ᾷ (timᾷ < timá-ei), a + o, ou > ῶ (timῶ < timá-o-men), a + oi > ῳ (timῳ < timá-oi). La posición del acento se mantiene y hay variación en la grafía. La contracción de una vocal aguda y una átona produce un circunflejo: φιλέω > φιλῖ, φιλέομεν > φιλοῦμεν. En el optativo de presente activo, las desinencias son: -οι-ην, -οι-ης, -οι-η (en vez de -οι-μι, -οι-ς, -οι). Ejemplo: *timá-o-ihn > τιμῷν, τιμῷς, τιμῷ, τιμῷμεν, τιμῷτε, τιμῷεν.'
    },
    {
      id: 'sec-27-4',
      title: 'Contracciones en Verbos -έω',
      content: 'Los verbos contractos en -έω siguen estas contracciones: e + e, ei > ει (filῖ < filé-e-i), e + o > ou (filoῦ < filé-o-men), e + w > ω (filoῦσι < filé-o-nsi), e + η > η (filῇ < filé-η). En el optativo de presente activo: *filé-o-ihn > φιλοῖην, φιλοῖς, φιλοῖ. Cuando se juntan tres vocales, desaparece la medial: ioej = oij, oousi > ousi. El infinitivo de presente se forma en -εν en lugar de -ein: φιλέ-ν > φιλεῖν. Los verbos de dos sílabas como πλέω (navegar), χέω (verter), δέω (atar), πνέω (soplar), ῥέω (fluir) solo hacen contracciones en -ει (ee y eei > ei, pero permanecen sin contraer eh, ew y eo).'
    },
    {
      id: 'sec-27-5',
      title: 'Contracciones en Verbos -όω',
      content: 'Los verbos contractos en -όω siguen estas contracciones: o + e, o, ou > ou (δηλοῦ < dhlÒ-e-i), o + η, w > w (δηλῷ < dhlÒ-η), o + ei, ῃ, oi > oi (δηλοῖ < dhlÒ-oi). El infinitivo de presente se forma en -ουν: δηλόω-ν > δηλοῦν. En el optativo de presente activo: *zhlo-o-ihn > ζηλοῖην, ζηλοῖς, ζηλοῖ. El presente de optativo de los verbos en -όω no se encuentra en el NT en ninguna de las tres voces. La vocal del tema alarga en futuro, aoristo, perfecto y pluscuamperfecto: o > ω.'
    },
    {
      id: 'sec-27-6',
      title: 'Excepciones de Verbos en -άω',
      content: 'Algunos verbos como ζάω (vivir) y χράομαι (servirse de) contraen en -η en lugar de -ᾶ. Los verbos διψάω (tener sed) y πεινάω (tener hambre), que en griego clásico se incluían en esta excepción, en griego bíblico siguen la regla general. Ejemplo: ζῇ, ζῇς, ζῇ, ζῶμεν, ζῆτε, ζῶσι. Cuando la -α va precedida de e, r, i, alargan la α a ᾱ (en lugar de η) en los tiempos no contractos (futuro, aoristo, perfecto y pluscuamperfecto). Ejemplos: δράω (hacer) > δράσω, ἔδρασα, δέδρακα; ἐάω (permitir) > ἐάσω, εἴασα, εἴακα; μειδιάω (sonreír) > μειδιάσω, μεμείδιακα.'
    },
    {
      id: 'sec-27-7',
      title: 'Excepciones de Verbos en -έω',
      content: 'Los verbos de dos sílabas como πλέω (navegar), χέω (verter), δέω (atar), πνέω (soplar), ῥέω (fluir, brotar) solo hacen contracciones en -ει (ee y eei > ei, pero permanecen sin contraer eh, ew y eo). Tienen además el optativo en -οιμι, no en -οῖην. Hay algunos verbos en -εω que no alargan la ε para la formación del futuro y de los demás tiempos: τελέω (acabar), futuro τελέσω; καλέω (llamar); αἰνέω (alabar). En griego bíblico, algunos contractos en -aw tienen formas de los en -ew y viceversa. Ejemplo: ὠρώτουν (del verbo ὠρωτάω) en vez de ὠρῶτων (Mt 15,23); ἐλεῖντος (del verbo ἐλέω) en vez de ἐλοῦντος (Rom 9,16).'
    },
    {
      id: 'sec-27-8',
      title: 'Paradigmas: Presente e Imperfecto Activos',
      content: 'Verbo τιμάω (honrar) - Presente Indicativo: τιμῶ, τιμᾷς, τιμᾷ, τιμῶμεν, τιμᾶτε, τιμῶσι. Imperativo: τιμᾶ, τιμάτω, τιμᾶτε, τιμάτωσαν. Subjuntivo: τιμῶ, τιμᾷς, τιμᾷ, τιμῶμεν, τιμᾶτε, τιμῶσι. Participio: τιμῶν, τιμῶντος (M), τιμῶσα, τιμώσης (F), τιμῶν, τιμῶντος (N). Infinitivo: τιμᾶν. Imperfecto Indicativo: ἐτίμων, ἐτίμας, ἐτίμα, ἐτιμῶμεν, ἐτιμᾶτε, ἐτίμων. Verbo φιλέω (amar) - Presente: φιλῶ, φιλεῖς, φιλεῖ, φιλοῦμεν, φιλεῖτε, φιλοῦσι. Imperfecto: ἐφίλουν, ἐφίλεις, ἐφίλει, ἐφιλοῦμεν, ἐφιλεῖτε, ἐφίλουν.'
    },
    {
      id: 'sec-27-9',
      title: 'Paradigmas: Futuro, Aoristo y Perfecto Activos',
      content: 'Futuro Activo: τιμήσω, τιμήσεις, τιμήσει, τιμήσομεν, τιμήσετε, τιμήσουσι. Aoristo Activo: ἐτίμησα, ἐτίμησας, ἐτίμησε, ἐτιμήσαμεν, ἐτιμήσατε, ἐτίμησαν. Imperativo: τίμησον, τιμησάτω, τιμήσατε, τιμησάτωσαν. Subjuntivo: τιμήσω, τιμήσῃς, τιμήσῃ, τιμήσωμεν, τιμήσητε, τιμήσωσι. Participio: τιμήσας, τιμήσαντος (M), τιμήσασα, τιμησάσης (F), τιμήσαν, τιμήσαντος (N). Infinitivo: τιμῆσαι. Perfecto Activo: τετίμηκα, τετίμηκας, τετίμηκε, τετιμήκαμεν, τετιμήκατε, τετιμήκασι. Pluscuamperfecto: ἐτετιμήκειν.'
    },
    {
      id: 'sec-27-10',
      title: 'Paradigmas: Voces Medio-Pasiva',
      content: 'Presente Medio-Pasivo: τιμῶμαι, τιμᾷ, τιμᾶται, τιμώμεθα, τιμᾶσθε, τιμῶνται. Imperfecto: ἐτιμώμην, ἐτιμῶ, ἐτιμᾶτο, ἐτιμώμεθα, ἐτιμᾶσθε, ἐτιμῶντο. Futuro Medio: τιμήσομαι, τιμήσῃ, τιμήσεται, τιμησόμεθα, τιμήσεσθε, τιμήσονται. Futuro Pasivo: τιμηθήσομαι, τιμηθήσῃ, τιμηθήσεται, τιμηθησόμεθα, τιμηθήσεσθε, τιμηθήσονται. Aoristo Medio: ἐτιμησάμην, ἐτιμήσω, ἐτιμήσατο, ἐτιμησάμεθα, ἐτιμήσασθε, ἐτιμήσαντο. Aoristo Pasivo: ἐτιμήθην, τιμήθητι, τιμηθῇ, ἐτιμήθημεν, ἐτιμήθητε, ἐτιμήθησαν. Perfecto Medio-Pasivo: τετίμημαι, τετίμησαι, τετίμηται, τετιμήμεθα, τετίμησθε, τετιμήμενοι εἰσι.'
    }
  ],
  vocabulary: [
    { greek: 'ἀγαπάω', type: 'verbo', spanish: 'amar', frequency: 143 },
    { greek: 'ἐρωτάω', type: 'verbo', spanish: 'pedir, preguntar', frequency: 63 },
    { greek: 'ζάω', type: 'verbo', spanish: 'vivir', frequency: 140 },
    { greek: 'ὁράω', type: 'verbo', spanish: 'ver', frequency: 454 },
    { greek: 'γεννάω', type: 'verbo', spanish: 'engendrar, dar a luz', frequency: 97 },
    { greek: 'ἐπερωτάω', type: 'verbo', spanish: 'preguntar (por)', frequency: 56 },
    { greek: 'πλανάω', type: 'verbo', spanish: 'engañar, desviar', frequency: 39 },
    { greek: 'ἐπιτιμάω', type: 'verbo', spanish: 'reprender, ordenar', frequency: 29 },
    { greek: 'νικάω', type: 'verbo', spanish: 'ganar, vencer', frequency: 28 },
    { greek: 'πεινάω', type: 'verbo', spanish: 'tener hambre', frequency: 23 },
    { greek: 'λαλέω', type: 'verbo', spanish: 'hablar', frequency: 296 },
    { greek: 'ζητέω', type: 'verbo', spanish: 'buscar', frequency: 149 },
    { greek: 'καλέω', type: 'verbo', spanish: 'llamar', frequency: 148 },
    { greek: 'παρακαλέω', type: 'verbo', spanish: 'invocar, pedir', frequency: 109 },
    { greek: 'ἀκολουθέω', type: 'verbo', spanish: 'seguir, acompañar', frequency: 90 },
    { greek: 'περιπατέω', type: 'verbo', spanish: 'caminar', frequency: 95 },
    { greek: 'φοβέομαι', type: 'verbo', spanish: 'temer', frequency: 95 },
    { greek: 'αἰτέω', type: 'verbo', spanish: 'pedir, exigir', frequency: 70 },
    { greek: 'δοκέω', type: 'verbo', spanish: 'pensar, parecer', frequency: 62 },
    { greek: 'μαρτυρέω', type: 'verbo', spanish: 'testimoniar', frequency: 76 },
    { greek: 'τηρέω', type: 'verbo', spanish: 'observar', frequency: 70 },
    { greek: 'πληρόω', type: 'verbo', spanish: 'llenar', frequency: 86 },
    { greek: 'σταυρόω', type: 'verbo', spanish: 'crucificar', frequency: 46 },
    { greek: 'φανερόω', type: 'verbo', spanish: 'manifestar', frequency: 49 },
    { greek: 'δικαιόω', type: 'verbo', spanish: 'justificar', frequency: 39 },
    { greek: 'τελειόω', type: 'verbo', spanish: 'concluir, perfeccionar', frequency: 23 },
    { greek: 'ὑψόω', type: 'verbo', spanish: 'exaltar', frequency: 20 },
    { greek: 'ὁμοιόω', type: 'verbo', spanish: 'asemejar', frequency: 15 },
    { greek: 'κοινόω', type: 'verbo', spanish: 'contaminar, corromper', frequency: 14 },
    { greek: 'ταπεινόω', type: 'verbo', spanish: 'humillar, rebajar', frequency: 14 }
  ],
  exercises: [
    {
      id: 'ex-27-1',
      type: 'flashcard',
      title: 'Vocabulario - Verbos Contractos',
      description: 'Memoriza los verbos contractos más frecuentes del NT',
      items: [
        { id: 'fc-27-1', question: 'ἀγαπάω', correctAnswer: 'amar (143 veces en NT)' },
        { id: 'fc-27-2', question: 'λαλέω', correctAnswer: 'hablar (296 veces en NT)' },
        { id: 'fc-27-3', question: 'ζητέω', correctAnswer: 'buscar (149 veces en NT)' },
        { id: 'fc-27-4', question: 'καλέω', correctAnswer: 'llamar (148 veces en NT)' },
        { id: 'fc-27-5', question: 'ὁράω', correctAnswer: 'ver (454 veces en NT)' },
        { id: 'fc-27-6', question: 'ζάω', correctAnswer: 'vivir (140 veces en NT)' },
        { id: 'fc-27-7', question: 'παρακαλέω', correctAnswer: 'invocar, pedir (109 veces en NT)' },
        { id: 'fc-27-8', question: 'πληρόω', correctAnswer: 'llenar (86 veces en NT)' }
      ]
    },
    {
      id: 'ex-27-2',
      type: 'multiple-choice',
      title: 'Conjugación - Presente Indicativo',
      description: 'Identifica la forma correcta en presente indicativo',
      items: [
        { id: 'mc-27-1', question: '1ª persona singular presente de τιμάω', options: ['τιμῶ', 'τιμᾷ', 'τιμῶμεν'], correctAnswer: 0, explanation: 'τιμάω contrae a + ω > ῶ: τιμάω > τιμῶ' },
        { id: 'mc-27-2', question: '2ª persona singular presente de φιλέω', options: ['φιλῶ', 'φιλεῖς', 'φιλοῦμεν'], correctAnswer: 1, explanation: 'φιλέω contrae e + ει > ει: φιλέεις > φιλεῖς' },
        { id: 'mc-27-3', question: '3ª persona singular presente de δηλόω', options: ['δηλῶ', 'δηλοῖ', 'δηλοῦ'], correctAnswer: 1, explanation: 'δηλόω contrae o + ει > oi: δηλόει > δηλοῖ' },
        { id: 'mc-27-4', question: '1ª persona plural presente de τιμάω', options: ['τιμῶμεν', 'τιμᾶτε', 'τιμῶσι'], correctAnswer: 0, explanation: 'τιμάω contrae a + o > ω: τιμάομεν > τιμῶμεν' },
        { id: 'mc-27-5', question: '3ª persona plural presente de φιλέω', options: ['φιλοῦσι', 'φιλῶσι', 'φιλεῖσι'], correctAnswer: 0, explanation: 'φιλέω contrae e + o > ou: φιλέουσι > φιλοῦσι' },
        { id: 'mc-27-6', question: '2ª persona plural presente de δηλόω', options: ['δηλοῖτε', 'δηλῶτε', 'δηλοῦτε'], correctAnswer: 2, explanation: 'δηλόω contrae o + ε > ou: δηλόετε > δηλοῦτε' }
      ]
    },
    {
      id: 'ex-27-3',
      type: 'true-false',
      title: 'Reglas de Contracción',
      description: 'Determina si las afirmaciones sobre contracciones son verdaderas o falsas',
      items: [
        { id: 'tf-27-1', question: 'En τιμάω, la contracción a + ε > ᾶ es correcta', correctAnswer: '1', explanation: 'Correcto. En verbos -άω, a + e/η > ᾶ: τιμάει > τιμᾷ' },
        { id: 'tf-27-2', question: 'En φιλέω, la contracción e + ο > ου es correcta', correctAnswer: '1', explanation: 'Correcto. En verbos -έω, e + o > ou: φιλέομεν > φιλοῦμεν' },
        { id: 'tf-27-3', question: 'En δηλόω, la contracción o + ε > ου es correcta', correctAnswer: '0', explanation: 'Incorrecto. En δηλόω, o + e > ou, pero o + ε > ou solo cuando ε es breve. Aquí es o + ει > oi: δηλόει > δηλοῖ' },
        { id: 'tf-27-4', question: 'El infinitivo de presente de τιμάω es τιμάειν', correctAnswer: '0', explanation: 'Incorrecto. El infinitivo de presente de verbos contractos es -εν: τιμάν > τιμᾶν' },
        { id: 'tf-27-5', question: 'En futuro, la vocal del tema se alarga: a/e > η, o > ω', correctAnswer: '1', explanation: 'Correcto. En futuro, aoristo, perfecto y pluscuamperfecto, la vocal se alarga: τιμάω > τιμήσω' },
        { id: 'tf-27-6', question: 'Los verbos contractos son principalmente denominativos', correctAnswer: '1', explanation: 'Correcto. La mayoría derivan de nombres: τιμή > τιμάω, φίλος > φιλέω' }
      ]
    },
    {
      id: 'ex-27-4',
      type: 'matching',
      title: 'Empareja Formas Contractas',
      description: 'Empareja las formas no contractas con sus formas contraídas',
      items: [
        { id: 'match-27-1', description: 'Empareja formas contractas con sus equivalentes', pairs: [
          { left: 'τιμάω (no contraída)', right: 'τιμῶ (1ª sg. presente)' },
          { left: 'τιμάει (no contraída)', right: 'τιμᾷ (3ª sg. presente)' },
          { left: 'φιλέει (no contraída)', right: 'φιλεῖ (3ª sg. presente)' },
          { left: 'δηλόει (no contraída)', right: 'δηλοῖ (3ª sg. presente)' },
          { left: 'φιλέομεν (no contraída)', right: 'φιλοῦμεν (1ª pl. presente)' },
          { left: 'δηλόομεν (no contraída)', right: 'δηλοῦμεν (1ª pl. presente)' }
        ], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente las contracciones.' }
      ]
    },
    {
      id: 'ex-27-5',
      type: 'fill-blank',
      title: 'Completa Conjugaciones',
      description: 'Completa las formas verbales contractas',
      items: [
        { id: 'fb-27-1', question: 'τιμάω (1ª sg. presente): τιμ____', options: ['ῶ', 'ᾷ', 'ῶμεν'], correctAnswer: 0, explanation: 'τιμάω contrae: τιμά + ω > τιμῶ' },
        { id: 'fb-27-2', question: 'φιλέω (3ª sg. presente): φιλ____', options: ['ῶ', 'εῖ', 'οῦμεν'], correctAnswer: 1, explanation: 'φιλέω contrae: φιλέ + ει > φιλεῖ' },
        { id: 'fb-27-3', question: 'δηλόω (1ª pl. presente): δηλ____', options: ['ῶμεν', 'οῦμεν', 'ῷμεν'], correctAnswer: 1, explanation: 'δηλόω contrae: δηλό + ομεν > δηλοῦμεν' },
        { id: 'fb-27-4', question: 'τιμάω (futuro 1ª sg.): τιμ____', options: ['ήσω', 'ᾶσω', 'ῶσω'], correctAnswer: 0, explanation: 'En futuro, la vocal se alarga: α > η: τιμήσω' },
        { id: 'fb-27-5', question: 'φιλέω (futuro 1ª sg.): φιλ____', options: ['ήσω', 'έσω', 'ῶσω'], correctAnswer: 0, explanation: 'En futuro, la vocal se alarga: ε > η: φιλήσω' },
        { id: 'fb-27-6', question: 'δηλόω (futuro 1ª sg.): δηλ____', options: ['ήσω', 'ώσω', 'ῶσω'], correctAnswer: 1, explanation: 'En futuro, la vocal se alarga: ο > ω: δηλώσω' }
      ]
    },
    {
      id: 'ex-27-6',
      type: 'translation',
      title: 'Traduce Formas Verbales',
      description: 'Traduce las formas verbales contractas al español',
      items: [
        { id: 'tr-27-1', question: 'τιμῶ', options: ['honro', 'honras', 'honra'], correctAnswer: 0, explanation: 'τιμῶ es 1ª persona singular presente: "honro"' },
        { id: 'tr-27-2', question: 'φιλεῖς', options: ['amas', 'amamos', 'aman'], correctAnswer: 0, explanation: 'φιλεῖς es 2ª persona singular presente: "amas"' },
        { id: 'tr-27-3', question: 'δηλοῖ', options: ['manifiesta', 'manifestamos', 'manifiestan'], correctAnswer: 0, explanation: 'δηλοῖ es 3ª persona singular presente: "manifiesta"' },
        { id: 'tr-27-4', question: 'ἀγαπῶμεν', options: ['amamos', 'amáis', 'aman'], correctAnswer: 0, explanation: 'ἀγαπῶμεν es 1ª persona plural presente: "amamos"' },
        { id: 'tr-27-5', question: 'ζητεῖτε', options: ['buscas', 'buscáis', 'buscan'], correctAnswer: 1, explanation: 'ζητεῖτε es 2ª persona plural presente: "buscáis"' },
        { id: 'tr-27-6', question: 'καλοῦσι', options: ['llama', 'llamamos', 'llaman'], correctAnswer: 2, explanation: 'καλοῦσι es 3ª persona plural presente: "llaman"' }
      ]
    },
    {
      id: 'ex-27-7',
      type: 'multiple-choice',
      title: 'Futuro y Aoristo',
      description: 'Identifica formas correctas en futuro y aoristo',
      items: [
        { id: 'mc-27-7', question: 'Futuro 1ª sg. de τιμάω', options: ['τιμάσω', 'τιμήσω', 'τιμῶσω'], correctAnswer: 1, explanation: 'En futuro, α > η: τιμήσω' },
        { id: 'mc-27-8', question: 'Aoristo 1ª sg. de φιλέω', options: ['ἐφίλεσα', 'ἐφίλησα', 'ἐφιλοῦσα'], correctAnswer: 1, explanation: 'En aoristo, ε > η: ἐφίλησα' },
        { id: 'mc-27-9', question: 'Futuro 1ª sg. de δηλόω', options: ['δηλώσω', 'δηλόσω', 'δηλοῦσω'], correctAnswer: 0, explanation: 'En futuro, ο > ω: δηλώσω' },
        { id: 'mc-27-10', question: 'Aoristo 1ª sg. de ἀγαπάω', options: ['ἠγάπησα', 'ἠγάπασα', 'ἠγάπων'], correctAnswer: 0, explanation: 'En aoristo, α > η: ἠγάπησα' }
      ]
    },
    {
      id: 'ex-27-8',
      type: 'true-false',
      title: 'Excepciones de Contractos',
      description: 'Determina si las afirmaciones sobre excepciones son verdaderas o falsas',
      items: [
        { id: 'tf-27-7', question: 'ζάω (vivir) contrae en -η en lugar de -ᾶ', correctAnswer: '1', explanation: 'Correcto. ζάω es una excepción: ζῇ, ζῇς, ζῇ' },
        { id: 'tf-27-8', question: 'Los verbos de dos sílabas en -έω solo contraen en -ει', correctAnswer: '1', explanation: 'Correcto. Verbos como πλέω, χέω, δέω solo contraen ee y eei > ei' },
        { id: 'tf-27-9', question: 'El verbo τελέω alarga la ε en futuro', correctAnswer: '0', explanation: 'Incorrecto. τελέω no alarga la ε: futuro τελέσω (no τελήσω)' },
        { id: 'tf-27-10', question: 'Cuando α va precedida de e, r, i, alarga a ᾱ en tiempos no contractos', correctAnswer: '1', explanation: 'Correcto. Ejemplo: δράω > δράσω (no δράσω), ἐάω > ἐάσω' }
      ]
    },
    {
      id: 'ex-27-9',
      type: 'multiple-choice',
      title: 'Formas Medio-Pasivas',
      description: 'Identifica formas correctas en voz medio-pasiva',
      items: [
        { id: 'mc-27-11', question: '1ª sg. presente medio-pasivo de τιμάω', options: ['τιμῶμαι', 'τιμάομαι', 'τιμῶ'], correctAnswer: 0, explanation: 'τιμάω contrae: τιμάομαι > τιμῶμαι' },
        { id: 'mc-27-12', question: '3ª sg. presente medio-pasivo de φιλέω', options: ['φιλῆται', 'φιλεῖται', 'φιλοῦται'], correctAnswer: 1, explanation: 'φιλέω contrae: φιλέεται > φιλεῖται' },
        { id: 'mc-27-13', question: '1ª pl. presente medio-pasivo de δηλόω', options: ['δηλώμεθα', 'δηλοῦμεθα', 'δηλόμεθα'], correctAnswer: 1, explanation: 'δηλόω contrae: δηλόομεθα > δηλοῦμεθα' },
        { id: 'mc-27-14', question: 'Futuro pasivo 1ª sg. de τιμάω', options: ['τιμηθήσομαι', 'τιμαθήσομαι', 'τιμῶθήσομαι'], correctAnswer: 0, explanation: 'En futuro pasivo, α > η: τιμηθήσομαι' }
      ]
    }
  ]
};

export const lesson28: Lesson = {
  id: 'lesson-28',
  number: 28,
  title: 'Verbos Consonánticos: Mudos u Oclusivos y Líquidos',
  introduction: 'Los verbos consonánticos son aquellos cuyo tema termina en consonante. Se dividen en dos grupos principales: verbos mudos u oclusivos (cuyo tema termina en labiales b, p, f, pt; guturales g, k, c, tt, ss; o dentales d, t, q, z) y verbos líquidos (cuyo tema termina en l, m, n, r). Estos verbos se conjugan como λύω en presente e imperfecto, pero en futuro, aoristo, perfecto y pluscuamperfecto sufren cambios eufónicos al encontrarse la consonante del tema con la consonante inicial de las terminaciones. Los verbos líquidos se caracterizan por un refuerzo del tema en presente e imperfecto, y por la ausencia de -s en futuro y aoristo.',
  sections: [
    {
      id: 'sec-28-1',
      title: 'Clasificación de Verbos Consonánticos',
      content: 'Los verbos consonánticos se dividen en dos categorías principales según la naturaleza de la consonante final del tema. Los verbos mudos u oclusivos tienen temas que terminan en consonantes oclusivas: labiales (β, π, φ, πτ), guturales (γ, κ, χ, ττ, σσ) y dentales (δ, τ, θ, ζ). Los verbos líquidos tienen temas que terminan en consonantes líquidas: λ (lateral), μ (labial nasal), ν (dental nasal) y ρ (vibrante). La mayoría de los verbos mudos se conjugan regularmente en presente e imperfecto, pero sufren cambios eufónicos significativos en futuro, aoristo, perfecto y pluscuamperfecto debido al encuentro de la consonante del tema con las consonantes iniciales de las desinencias (σ, κ, θ, μ, τ).'
    },
    {
      id: 'sec-28-2',
      title: 'Transformaciones Eufónicas en Verbos Mudos',
      content: 'Las transformaciones eufónicas en verbos mudos siguen reglas específicas. Primera regla: labial + σ = ψ, gutural + σ = χ, dental + σ cae la dental (en futuro y aoristo activo y medio, y en 2ª sg. medio-pasiva). Segunda regla: labial + μ = μμ, gutural + μ = γμ, dental + μ = σμ (en presente y pluscuamperfecto medio-pasiva de labiales, dentales y guturales). Tercera regla: asimilación - dos mudas consecutivas han de ser del mismo grado, cambia la muda del tema (en futuro y aoristo pasivo de labiales y guturales). Cuarta regla: disimilación - dental + dental = σ + dental (en futuro y aoristo pasivo de dentales). Quinta regla: en perfecto y pluscuamperfecto activos de labiales, dentales y guturales, κ + labial o gutural, la κ cae y la labial y gutural se aspiran en φ y χ respectivamente (perfecto aspirado); κ + dental cae la dental.'
    },
    {
      id: 'sec-28-3',
      title: 'Paradigmas de Verbos Mudos - Labiales',
      content: 'Los verbos mudos labiales (γράφω "escribir", βλέπω "ver", πίπτω "caer", πέμπω "enviar") siguen estos patrones: Futuro activo: -ψω (labial + σ = ψ), Aoristo activo: -ψα (labial + σ = ψ), Perfecto activo: -φα (labial + κ = φ, asimilación aspirada), Pluscuamperfecto activo: -φειν (labial + κ = φ, asimilación aspirada). En voz media: Futuro medio: -ψομαι (labial + σ = ψ), Aoristo medio: -ψάμην (labial + σ = ψ), Perfecto medio-pasivo: -μμαι (labial + μ = μμ), Pluscuamperfecto medio-pasivo: -μμην (labial + μ = μμ). En voz pasiva: Futuro pasivo: -φθήσομαι (asimilación, labial + θ + σ = φθ), Aoristo pasivo: -φθην (asimilación, labial + θ = φθ), Perfecto medio-pasivo: -μμαι (labial + μ = μμ), Pluscuamperfecto medio-pasivo: -μμην (labial + μ = μμ).'
    },
    {
      id: 'sec-28-4',
      title: 'Paradigmas de Verbos Mudos - Guturales',
      content: 'Los verbos mudos guturales (λέγω "decir", ἔχω "tener", ἄρχω "empezar", ἄγω "conducir", ἀνοίγω "abrir") siguen estos patrones: Futuro activo: -χω (gutural + σ = χ), Aoristo activo: -χα (gutural + σ = χ), Perfecto activo: -χα (gutural + κ = χ, asimilación aspirada), Pluscuamperfecto activo: -χειν (gutural + κ = χ, asimilación aspirada). En voz media: Futuro medio: -χομαι (gutural + σ = χ), Aoristo medio: -χάμην (gutural + σ = χ), Perfecto medio-pasivo: -γμαι (gutural + μ = γμ), Pluscuamperfecto medio-pasivo: -γμην (gutural + μ = γμ). En voz pasiva: Futuro pasivo: -χθήσομαι (asimilación, gutural + θ + σ = χθ), Aoristo pasivo: -χθην (asimilación, gutural + θ = χθ), Perfecto medio-pasivo: -γμαι (gutural + μ = γμ), Pluscuamperfecto medio-pasivo: -γμην (gutural + μ = γμ).'
    },
    {
      id: 'sec-28-5',
      title: 'Paradigmas de Verbos Mudos - Dentales',
      content: 'Los verbos mudos dentales (σώζω "salvar", βαπτίζω "bautizar", δοξάζω "glorificar", εὐαγγελίζω "evangelizar", πείθω "persuadir") siguen estos patrones: Futuro activo: -σω (dental + σ cae la dental), Aoristo activo: -σα (dental + σ cae la dental), Perfecto activo: -κα (dental + κ cae la dental), Pluscuamperfecto activo: -κειν (dental + κ cae la dental). En voz media: Futuro medio: -σομαι (dental + σ cae la dental), Aoristo medio: -σάμην (dental + σ cae la dental), Perfecto medio-pasivo: -σμαι (dental + μ = σμ), Pluscuamperfecto medio-pasivo: -σμην (dental + μ = σμ). En voz pasiva: Futuro pasivo: -σθήσομαι (disimilación, dental + θ + σ = σθ), Aoristo pasivo: -σθην (disimilación, dental + θ = σθ), Perfecto medio-pasivo: -σμαι (dental + μ = σμ), Pluscuamperfecto medio-pasivo: -σμην (dental + μ = σμ). Observación: Los verbos en -ζω de más de dos sílabas tienen futuro segundo (sin -σ) en lugar de primero. Σώζω es irregular en voz pasiva: futuro pasivo σωθήσομαι, aoristo pasivo ἐσώθην, perfecto pasivo σέσωμαι.'
    },
    {
      id: 'sec-28-6',
      title: 'Verbos Líquidos: Características Generales',
      content: 'Los verbos líquidos (θέλω "querer", αἴρω "tomar", ἀποστέλλω "enviar", βάλλω "arrojar", ἐγείρω "levantar", κρίνω "juzgar", μέλλω "estar a punto de", μένω "permanecer", ἀναβαίνω "subir", ἐκβάλλω "expulsar") se caracterizan por un refuerzo del tema en presente e imperfecto. En verbos en -λω, se reduplica la λ: βάλλω (tema bal-). En verbos en -νω y -ρω, se inserta una ι ante la ν y la ρ: φαίνω (tema fan-), κρίνω (tema krin-), αἴρω (tema ar-). En verbos en -μω, se añade una ν: τέμνω (tema tem-). En el resto de los tiempos, este refuerzo no aparece. El futuro activo y medio se caracteriza por la ausencia externa de la -σ y se forma añadiendo al tema verbal las terminaciones -ῶ y -οῦμαι (provenientes de la contracción de -ήσω, -ήσομαι). Se conjuga como el presente de verbos contractos en -έω.'
    },
    {
      id: 'sec-28-7',
      title: 'Futuro y Aoristo de Verbos Líquidos',
      content: 'El futuro activo de verbos líquidos se forma sin -σ: κρίνω, futuro κρινῶ, κρινεῖς, κρινεῖ, κρινοῦμεν, κρινεῖτε, κρινοῦσι(ν). El futuro medio: κριnoῦμαι, κρινῇ (κρινῇ), κρινεῖται, κρινούμεθα, κρινεῖσθε, κρινοῦνται. El aoristo se caracteriza también por la ausencia de σ. Para compensar esta pérdida, alarga la vocal del tema: α se convierte en η (en ᾱ cuando va precedida de ι o ρ, exceptuando αἴρω, aoristo ἄρα = ἦρα) y ε en ει. Las vocales ι, υ se alargan pero sin modificar su sonido. Ejemplo: κρίνω, aoristo ἔκρινα (κρι-ν-α > ἔ-κρι-ν-α). Otro ejemplo: στέλλω, futuro στελῶ, aoristo activo ἔστειλα, aoristo medio ἐστειλάμην. Φαίνω, futuro φανῶ, aoristo activo ἔφηνα, aoristo medio ἐφηνάμην. Muchos verbos líquidos tienen aoristos segundos.'
    },
    {
      id: 'sec-28-8',
      title: 'Perfecto y Voz Pasiva de Verbos Líquidos',
      content: 'El perfecto activo de verbos líquidos se forma con el tema verbal puro, como el futuro. Ejemplo: ἀγγέλλω, futuro ἀγγελῶ, perfecto activo ἤγγελκα, perfecto medio ἤγγελμαι. En voz pasiva, el futuro, aoristo y perfecto pasivos tienen el mismo tema que el perfecto activo. Ejemplo: ἀγγέλλω, perfecto activo ἤγγελκα, futuro pasivo ἀγγελθήσομαι, aoristo pasivo ἠγγέλθην, perfecto pasivo ἤγγελμαι. La 3ª persona del plural del perfecto medio-pasivo es ἠγγελμένοι εἰσι(ν) en lugar de ἤγγελνται. La del pluscuamperfecto medio-pasivo es ἠγγελμένοι ἦσαν en lugar de ἤγγελντο. Esto ocurría también en los temas mudos, por la misma razón: la combinación de una consonante más el grupo -ντ no forma parte del sistema fonético de la lengua griega.'
    },
    {
      id: 'sec-28-9',
      title: 'Particularidades del Tema de Perfecto en Líquidos',
      content: 'En verbos líquidos, hay varias particularidades del tema de perfecto. Primera: En las formas que comienzan por σθ (2ª del plural -σθε y del infinitivo medio-pasivo -σθαι), pierden la σ entre dos consonantes. Ejemplo: ἤγγελ-θε (perfecto medio-pasivo 2ª plural de ἀγγέλλω) o ἠγγέλ-θαι (infinitivo de perfecto medio-pasivo). Esto también ocurría en verbos oclusivos, ejemplo: τέτριφ-θε (perfecto medio-pasivo de τρίβω) o τετρίφ-θαι (infinitivo de perfecto medio-pasivo). Segunda: En verbos disílabos en -λω y en -ρω, cambian la ε del tema en α. Ejemplo: στέλλω "enviar", futuro στελῶ, perfecto ἔσταλκα. Tercera: En verbos disílabos en -ίνω y en -ύνω, pierden normalmente ν y forman el perfecto como si fueran puros en -ίω o en -ύω; y los en -έινω, como si fueran en -άω. Ejemplo: κρίνω "juzgar", futuro κρινῶ, perfecto κέκρικα; τείνω "extender", futuro τενῶ, perfecto τέταka. Una excepción es κτείνω "matar", perfecto ἔκτονα. Cuarta: En verbos en -φαίνω, cambian la ν ante la κ, que se hace γ, y en la media ante μ se hace σ. Ejemplo: φαίνω "mostrar", perfecto activo πέφαγκα, perfecto medio πέφασμαι. Quinta: En verbos en -μω, μένω "permanecer" y βάλλω "arrojar", forman el perfecto en -ηκα. Ejemplo: νέμω "distribuir", futuro νεμῶ, perfecto νενέμηκα o μένω, futuro μενῶ, perfecto μεμένηκα.'
    },
    {
      id: 'sec-28-10',
      title: 'Paradigma Completo: ἀγγέλλω (Voz Activa)',
      content: 'Presente indicativo: ἀγγέλλω, ἀγγέλλεις, ἀγγέλλει, ἀγγέλλομεν, ἀγγέλλετε, ἀγγέλλουσι. Imperativo: ἀγγέλλε, ἀγγελλέτω, ἀγγέλλετε, ἀγγελλέτωσαν. Subjuntivo: ἀγγέλλω, ἀγγέλλῃς, ἀγγέλλῃ, ἀγγέλλωμεν, ἀγγέλλητε, ἀγγέλλωσι. Optativo: ἀγγέλλοιμι, ἀγγέλλοις, ἀγγέλλοι, ἀγγέλλοιμεν, ἀγγέλλοιτε, ἀγγέλλοιεν. Participio: ἀγγέλλων, ἀγγέλλοντος (M), ἀγγέλλουσα, ἀγγελλούσης (F), ἀγγέλλον, ἀγγέλλοντος (N). Infinitivo: ἀγγέλλειν. Imperfecto indicativo: ἠ̓γγελλον. Futuro indicativo: ἀγγελῶ, ἀγγελεῖς, ἀγγελεῖ, ἀγγελοῦμεν, ἀγγελεῖτε, ἀγγελοῦσι(ν). Participio futuro: ἀγγελοῦσα, ἀγγελοῦν. Infinitivo futuro: ἀγγελεῖν. Aoristo indicativo: ἤ̓ γγειλα. Imperativo aoristo: ἄγγειλον. Subjuntivo aoristo: ἀγγείλω. Optativo aoristo: ἀγγείλαιμι. Participio aoristo: ἀγγείλας, ἀγγείλαντος (M), ἀγγείλασα, ἀγγειλάσης (F), ἀγγεῖλαν, ἀγγείλαντος (N). Infinitivo aoristo: ἀγγεῖλαι. Perfecto indicativo: ἤ̓ γγελκα. Imperativo perfecto: ἤ̓ γγελκε. Subjuntivo perfecto: ὠ̓γγέλκω. Participio perfecto: ὠ̓γγελκώς, ὠ̓γγελκότος (M), ὠ̓γγελκυῖα, ὠ̓γγελκυίας (F), ὠ̓γγελκός, ὠ̓γγελκότος (N). Infinitivo perfecto: ὠ̓γγελκέναι. Pluscuamperfecto indicativo: ὠ̓γγέλκειν.'
    }
  ],
  vocabulary: [
    { greek: 'γράφω', type: 'verbo', spanish: 'escribir', frequency: 240 },
    { greek: 'βλέπω', type: 'verbo', spanish: 'ver', frequency: 133 },
    { greek: 'πίπτω', type: 'verbo', spanish: 'caer', frequency: 90 },
    { greek: 'πέμπω', type: 'verbo', spanish: 'enviar', frequency: 79 },
    { greek: 'ἐπιστρέφω', type: 'verbo', spanish: 'volver, regresar', frequency: 36 },
    { greek: 'ἀποκαλύπτω', type: 'verbo', spanish: 'revelar, descubrir', frequency: 26 },
    { greek: 'ἀναβλέπω', type: 'verbo', spanish: 'mirar', frequency: 25 },
    { greek: 'καταλείπω', type: 'verbo', spanish: 'abandonar', frequency: 24 },
    { greek: 'στρέφω', type: 'verbo', spanish: 'cambiar, volver', frequency: 21 },
    { greek: 'λέγω', type: 'verbo', spanish: 'decir', frequency: 2255 },
    { greek: 'ἔχω', type: 'verbo', spanish: 'tener', frequency: 708 },
    { greek: 'ἄρχω', type: 'verbo', spanish: 'empezar, presidir', frequency: 86 },
    { greek: 'ἄγω', type: 'verbo', spanish: 'conducir, llevar', frequency: 67 },
    { greek: 'ἀνοίγω', type: 'verbo', spanish: 'abrir', frequency: 77 },
    { greek: 'κηρύσσω', type: 'verbo', spanish: 'proclamar', frequency: 61 },
    { greek: 'ὑπάγω', type: 'verbo', spanish: 'apartarse', frequency: 79 },
    { greek: 'κράζω', type: 'verbo', spanish: 'vociferar', frequency: 56 },
    { greek: 'συνάγω', type: 'verbo', spanish: 'reunir, convocar', frequency: 59 },
    { greek: 'ὑπάρχω', type: 'verbo', spanish: 'ser, estar', frequency: 60 },
    { greek: 'σώζω', type: 'verbo', spanish: 'salvar', frequency: 106 },
    { greek: 'βαπτίζω', type: 'verbo', spanish: 'bautizar', frequency: 77 },
    { greek: 'δοξάζω', type: 'verbo', spanish: 'glorificar', frequency: 61 },
    { greek: 'εὐαγγελίζω', type: 'verbo', spanish: 'evangelizar', frequency: 54 },
    { greek: 'πείθω', type: 'verbo', spanish: 'persuadir', frequency: 52 },
    { greek: 'καθίζω', type: 'verbo', spanish: 'sentarse, quedarse', frequency: 46 },
    { greek: 'ἐγγίζω', type: 'verbo', spanish: 'acercarse', frequency: 42 },
    { greek: 'ἑτοιμάζω', type: 'verbo', spanish: 'preparar', frequency: 40 },
    { greek: 'θαυμάζω', type: 'verbo', spanish: 'asombrarse', frequency: 43 },
    { greek: 'πειράζω', type: 'verbo', spanish: 'probar, tentar', frequency: 38 },
    { greek: 'θέλω', type: 'verbo', spanish: 'querer', frequency: 208 },
    { greek: 'αἴρω', type: 'verbo', spanish: 'tomar, quitar', frequency: 101 },
    { greek: 'ἀποστέλλω', type: 'verbo', spanish: 'enviar', frequency: 132 },
    { greek: 'βάλλω', type: 'verbo', spanish: 'arrojar', frequency: 122 },
    { greek: 'ἐγείρω', type: 'verbo', spanish: 'levantar, resucitar', frequency: 144 },
    { greek: 'κρίνω', type: 'verbo', spanish: 'juzgar', frequency: 114 },
    { greek: 'μέλλω', type: 'verbo', spanish: 'estar a punto de', frequency: 109 },
    { greek: 'μένω', type: 'verbo', spanish: 'permanecer', frequency: 118 },
    { greek: 'ἀναβαίνω', type: 'verbo', spanish: 'subir', frequency: 82 },
    { greek: 'ἐκβάλλω', type: 'verbo', spanish: 'expulsar, enviar', frequency: 81 },
    { greek: 'ἀγγέλλω', type: 'verbo', spanish: 'anunciar, informar', frequency: 45 }
  ],
  exercises: [
    {
      id: 'ex-28-1',
      type: 'flashcard',
      title: 'Vocabulario - Verbos Consonánticos',
      description: 'Memoriza los verbos consonánticos más frecuentes del NT',
      items: [
        { id: 'fc-28-1', question: 'λέγω', correctAnswer: 'decir (2255 veces en NT)' },
        { id: 'fc-28-2', question: 'ἔχω', correctAnswer: 'tener (708 veces en NT)' },
        { id: 'fc-28-3', question: 'γράφω', correctAnswer: 'escribir (240 veces en NT)' },
        { id: 'fc-28-4', question: 'θέλω', correctAnswer: 'querer (208 veces en NT)' },
        { id: 'fc-28-5', question: 'ἀποστέλλω', correctAnswer: 'enviar (132 veces en NT)' },
        { id: 'fc-28-6', question: 'βλέπω', correctAnswer: 'ver (133 veces en NT)' },
        { id: 'fc-28-7', question: 'ἐγείρω', correctAnswer: 'levantar, resucitar (144 veces en NT)' },
        { id: 'fc-28-8', question: 'κρίνω', correctAnswer: 'juzgar (114 veces en NT)' },
        { id: 'fc-28-9', question: 'μένω', correctAnswer: 'permanecer (118 veces en NT)' },
        { id: 'fc-28-10', question: 'σώζω', correctAnswer: 'salvar (106 veces en NT)' }
      ]
    },
    {
      id: 'ex-28-2',
      type: 'multiple-choice',
      title: 'Transformaciones Eufónicas - Mudas',
      description: 'Identifica las transformaciones correctas en verbos mudos',
      items: [
        { id: 'mc-28-1', question: 'Labial + σ en futuro activo', options: ['β', 'ψ', 'φ'], correctAnswer: 1, explanation: 'Labial + σ = ψ: γράφω > γράψω' },
        { id: 'mc-28-2', question: 'Gutural + σ en futuro activo', options: ['γ', 'χ', 'κ'], correctAnswer: 1, explanation: 'Gutural + σ = χ: λέγω > λέξω' },
        { id: 'mc-28-3', question: 'Dental + σ en futuro activo', options: ['δ', 'σ', 'cae la dental'], correctAnswer: 2, explanation: 'Dental + σ cae la dental: σώζω > σώσω' },
        { id: 'mc-28-4', question: 'Labial + μ en perfecto medio-pasivo', options: ['β', 'μμ', 'φμ'], correctAnswer: 1, explanation: 'Labial + μ = μμ: πέμπω > πέπεμμαι' },
        { id: 'mc-28-5', question: 'Gutural + μ en perfecto medio-pasivo', options: ['γμ', 'χμ', 'κμ'], correctAnswer: 0, explanation: 'Gutural + μ = γμ: λέγω > λέλεγμαι' },
        { id: 'mc-28-6', question: 'Dental + μ en perfecto medio-pasivo', options: ['δμ', 'σμ', 'τμ'], correctAnswer: 1, explanation: 'Dental + μ = σμ: σώζω > σέσωσμαι' }
      ]
    },
    {
      id: 'ex-28-3',
      type: 'true-false',
      title: 'Reglas de Transformación Eufónica',
      description: 'Determina si las afirmaciones sobre transformaciones eufónicas son verdaderas o falsas',
      items: [
        { id: 'tf-28-1', question: 'En perfecto activo, labial + κ = φ (perfecto aspirado)', correctAnswer: '1', explanation: 'Correcto. Labial + κ cae la κ y la labial se aspira en φ: γράφω > γέγραφα' },
        { id: 'tf-28-2', question: 'En futuro pasivo, gutural + θ + σ = χθ', correctAnswer: '1', explanation: 'Correcto. Asimilación: gutural + θ + σ = χθ: λέγω > λεχθήσομαι' },
        { id: 'tf-28-3', question: 'En futuro pasivo, dental + θ + σ = σθ', correctAnswer: '1', explanation: 'Correcto. Disimilación: dental + θ + σ = σθ: σώζω > σωθήσομαι' },
        { id: 'tf-28-4', question: 'En perfecto activo, dental + κ cae la dental', correctAnswer: '1', explanation: 'Correcto. Dental + κ cae la dental: πείθω > πέπεικα' },
        { id: 'tf-28-5', question: 'Los verbos mudos se conjugan regularmente en futuro y aoristo', correctAnswer: '0', explanation: 'Incorrecto. Los verbos mudos sufren cambios eufónicos significativos en futuro, aoristo, perfecto y pluscuamperfecto' },
        { id: 'tf-28-6', question: 'La asimilación ocurre cuando dos mudas consecutivas han de ser del mismo grado', correctAnswer: '1', explanation: 'Correcto. En futuro y aoristo pasivo de labiales y guturales, cambia la muda del tema' }
      ]
    },
    {
      id: 'ex-28-4',
      type: 'matching',
      title: 'Empareja Verbos con sus Transformaciones',
      description: 'Empareja verbos mudos con sus transformaciones en futuro',
      items: [
        { id: 'match-28-1', description: 'Empareja verbos mudos con sus futuros', pairs: [
          { left: 'γράφω (labial)', right: 'γράψω (labial + σ = ψ)' },
          { left: 'λέγω (gutural)', right: 'λέξω (gutural + σ = χ)' },
          { left: 'σώζω (dental)', right: 'σώσω (dental + σ cae)' },
          { left: 'πέμπω (labial)', right: 'πέμψω (labial + σ = ψ)' },
          { left: 'ἔχω (gutural)', right: 'ἕξω (gutural + σ = χ)' },
          { left: 'πείθω (dental)', right: 'πείσω (dental + σ cae)' }
        ], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente las transformaciones eufónicas.' }
      ]
    },
    {
      id: 'ex-28-5',
      type: 'fill-blank',
      title: 'Completa Formas de Verbos Mudos',
      description: 'Completa las formas verbales de verbos mudos',
      items: [
        { id: 'fb-28-1', question: 'γράφω (futuro 1ª sg.): γρά____', options: ['φω', 'ψω', 'σω'], correctAnswer: 1, explanation: 'Labial + σ = ψ: γράψω' },
        { id: 'fb-28-2', question: 'λέγω (futuro 1ª sg.): λέ____', options: ['γω', 'χω', 'ξω'], correctAnswer: 2, explanation: 'Gutural + σ = χ: λέξω' },
        { id: 'fb-28-3', question: 'σώζω (futuro 1ª sg.): σώ____', options: ['ζω', 'σω', 'θω'], correctAnswer: 1, explanation: 'Dental + σ cae la dental: σώσω' },
        { id: 'fb-28-4', question: 'γράφω (perfecto 1ª sg.): γέγρα____', options: ['φα', 'ψα', 'σα'], correctAnswer: 0, explanation: 'Labial + κ = φ: γέγραφα' },
        { id: 'fb-28-5', question: 'λέγω (perfecto 1ª sg.): λέλε____', options: ['γα', 'χα', 'κα'], correctAnswer: 1, explanation: 'Gutural + κ = χ: λέλεχα' },
        { id: 'fb-28-6', question: 'πείθω (perfecto 1ª sg.): πέπει____', options: ['θα', 'σα', 'κα'], correctAnswer: 2, explanation: 'Dental + κ cae la dental: πέπεικα' }
      ]
    },
    {
      id: 'ex-28-6',
      type: 'translation',
      title: 'Traduce Formas de Verbos Consonánticos',
      description: 'Traduce las formas verbales de verbos consonánticos',
      items: [
        { id: 'tr-28-1', question: 'λέγω', options: ['digo', 'decía', 'diré'], correctAnswer: 0, explanation: 'λέγω es presente 1ª sg.: "digo"' },
        { id: 'tr-28-2', question: 'γράψω', options: ['escribo', 'escribía', 'escribiré'], correctAnswer: 2, explanation: 'γράψω es futuro 1ª sg.: "escribiré"' },
        { id: 'tr-28-3', question: 'ἔχω', options: ['tengo', 'tenía', 'tendré'], correctAnswer: 0, explanation: 'ἔχω es presente 1ª sg.: "tengo"' },
        { id: 'tr-28-4', question: 'ἕξω', options: ['tengo', 'tenía', 'tendré'], correctAnswer: 2, explanation: 'ἕξω es futuro 1ª sg.: "tendré"' },
        { id: 'tr-28-5', question: 'σώζω', options: ['salvo', 'salvaba', 'salvaré'], correctAnswer: 0, explanation: 'σώζω es presente 1ª sg.: "salvo"' },
        { id: 'tr-28-6', question: 'σώσω', options: ['salvo', 'salvaba', 'salvaré'], correctAnswer: 2, explanation: 'σώσω es futuro 1ª sg.: "salvaré"' }
      ]
    },
    {
      id: 'ex-28-7',
      type: 'multiple-choice',
      title: 'Verbos Líquidos - Futuro y Aoristo',
      description: 'Identifica formas correctas de verbos líquidos',
      items: [
        { id: 'mc-28-7', question: 'Futuro 1ª sg. de κρίνω', options: ['κρινάω', 'κρινῶ', 'κρινέω'], correctAnswer: 1, explanation: 'Futuro de líquidos sin -σ: κρίνω > κρινῶ' },
        { id: 'mc-28-8', question: 'Aoristo 1ª sg. de κρίνω', options: ['ἔκρινα', 'ἔκρισα', 'ἔκρινσα'], correctAnswer: 0, explanation: 'Aoristo de líquidos sin -σ con alargamiento: ἔκρινα' },
        { id: 'mc-28-9', question: 'Futuro 1ª sg. de θέλω', options: ['θελήσω', 'θελῶ', 'θελέω'], correctAnswer: 1, explanation: 'Futuro de líquidos sin -σ: θέλω > θελῶ' },
        { id: 'mc-28-10', question: 'Aoristo 1ª sg. de βάλλω', options: ['ἔβαλλα', 'ἔβαλα', 'ἔβαλσα'], correctAnswer: 1, explanation: 'Aoristo de líquidos sin -σ: ἔβαλα' }
      ]
    },
    {
      id: 'ex-28-8',
      type: 'true-false',
      title: 'Características de Verbos Líquidos',
      description: 'Determina si las afirmaciones sobre verbos líquidos son verdaderas o falsas',
      items: [
        { id: 'tf-28-7', question: 'Los verbos líquidos tienen refuerzo del tema en presente e imperfecto', correctAnswer: '1', explanation: 'Correcto. En -λω se reduplica la λ, en -νω y -ρω se inserta ι, en -μω se añade ν' },
        { id: 'tf-28-8', question: 'El futuro de verbos líquidos tiene -σ como característica temporal', correctAnswer: '0', explanation: 'Incorrecto. El futuro de verbos líquidos se caracteriza por la AUSENCIA de -σ' },
        { id: 'tf-28-9', question: 'En aoristo de verbos líquidos, α > η y ε > ει', correctAnswer: '1', explanation: 'Correcto. Se alarga la vocal del tema para compensar la ausencia de -σ' },
        { id: 'tf-28-10', question: 'El perfecto de verbos líquidos se forma con el tema puro', correctAnswer: '1', explanation: 'Correcto. El perfecto se forma como el futuro, sin refuerzo' }
      ]
    },
    {
      id: 'ex-28-9',
      type: 'multiple-choice',
      title: 'Paradigma de ἀγγέλλω',
      description: 'Identifica formas correctas del verbo ἀγγέλλω',
      items: [
        { id: 'mc-28-11', question: 'Presente 1ª sg. de ἀγγέλλω', options: ['ἀγγέλλω', 'ἀγγέλω', 'ἀγγέλλε'], correctAnswer: 0, explanation: 'ἀγγέλλω es presente 1ª sg. con refuerzo de tema' },
        { id: 'mc-28-12', question: 'Futuro 1ª sg. de ἀγγέλλω', options: ['ἀγγελῶ', 'ἀγγέλλω', 'ἀγγέλσω'], correctAnswer: 0, explanation: 'Futuro de líquido sin -σ: ἀγγελῶ' },
        { id: 'mc-28-13', question: 'Aoristo 1ª sg. de ἀγγέλλω', options: ['ἤγγελλα', 'ἤγγειλα', 'ἤγγέλσα'], correctAnswer: 1, explanation: 'Aoristo de líquido sin -σ: ἤγγειλα' },
        { id: 'mc-28-14', question: 'Perfecto 1ª sg. de ἀγγέλλω', options: ['ἤγγελκα', 'ἤγγέλλακα', 'ἤγγέλσακα'], correctAnswer: 0, explanation: 'Perfecto de líquido: ἤγγελκα' }
      ]
    }
  ]
};

export const lesson29: Lesson = {
  id: 'lesson-29',
  number: 29,
  title: 'Tiempos Segundos o Fuertes. Alternancias Vocálicas',
  introduction: 'Los tiempos segundos o fuertes son formas especiales de futuro, aoristo, perfecto y pluscuamperfecto que se encuentran en ciertos verbos mudos y líquidos. Se singularizan por no llevar la característica temporal de los tiempos primeros: la σ del futuro y aoristo activo y medio, κ del perfecto activo y θ del futuro y aoristo pasivos. Los tiempos segundos más usados son los aoristos. Por regla general, los verbos que tienen en uso los tiempos segundos no tienen los primeros, y viceversa. Las alternancias vocálicas o apofonía es un recurso lingüístico de origen indoeuropeo que consiste en el cambio de las vocales α, ε, ο en la formación de palabras derivadas de la misma raíz, manifestándose en grado pleno (ε), grado alargado (ο) y grado cero.',
  sections: [
    {
      id: 'sec-29-1',
      title: 'Definición y Características de Tiempos Segundos',
      content: 'Los tiempos segundos o fuertes son formas especiales de futuro, aoristo, perfecto y pluscuamperfecto que se encuentran en ciertos verbos mudos y líquidos. Hay futuros y aoristos segundos en las tres voces (activa, media y pasiva) y perfectos y pluscuamperfectos segundos en la voz activa. Por oposición a estas formas especiales, se llaman tiempos primeros los futuros, aoristos, perfectos y pluscuamperfectos que ya conocemos. Se singularizan por no llevar la característica temporal de los tiempos primeros: la σ del futuro y aoristo activo y medio, κ del perfecto activo y θ del futuro y aoristo pasivos. Los tiempos segundos más usados son los aoristos. Por regla general, los verbos que tienen en uso los tiempos segundos no tienen los primeros, y viceversa. No porque un verbo tenga un tiempo segundo debe suponerse que también tendrá los demás. Normalmente tienen el mismo significado que los tiempos primeros.'
    },
    {
      id: 'sec-29-2',
      title: 'Futuro Segundo - Voces Activa y Media',
      content: 'El futuro segundo se conjuga con las terminaciones del presente contracto en -έω, en -ῶ y en -οῦμαι para cada una de las voces respectivamente. Se da en los verbos -λω, -μω, -νω, -ρω y en los en -ίζω de más de dos sílabas. Ejemplos: κρίνω (futuro segundo κρινῶ), θέλω (futuro segundo θελῶ), μέλλω (futuro segundo μελῶ), αἴρω (futuro segundo ἀρῶ). El futuro segundo tiene la misma forma que el futuro de verbos contractos, pero sin la característica -σ que llevan los futuros primeros. En la voz media, las terminaciones son -οῦμαι, -ῇ, -εῖται, etc., conjugándose como presente contracto en -έω.'
    },
    {
      id: 'sec-29-3',
      title: 'Aoristo Segundo - Voces Activa y Media',
      content: 'El aoristo segundo se conjuga con las terminaciones del imperfecto (en indicativo -ον / -όμην) y del presente respectivo (en los demás modos) del verbo λύω. Ejemplo: βάλλω; indicativo aoristo segundo activo ἔβαλον; imperativo aoristo segundo activo βάλε; subjuntivo aoristo segundo activo βάλω; optativo aoristo segundo activo βάλοιμι; infinitivo aoristo segundo activo βαλεῖν; participio aoristo segundo activo βαλών. El aoristo segundo se diferencia del imperfecto por la raíz verbal. Ejemplo: λαμβάνω imperfecto ἐλάμβανον, aoristo segundo ἔλαβον. El tema de presente está marcado con infijo (-μ) y sufijo nasal (-αν). La raíz del verbo es λαβ-. Cuando hay ει o ευ en el tema de presente, no aparece la ε en estos aoristos, es decir, son verbos polirrizos. Ejemplo: λείπω "dejar", aoristo segundo ἔλιπον; φεύγω "huir", aoristo segundo ἔφυγον. En los verbos disílabos cuyo radical tiene ε precedida o seguida de λ o ρ, suele cambiarse dicha vocal en α. Ejemplo: τρέπω "volver", aoristo segundo ἔτραπον. Excepción a esta regla son λέγω "decir" o βλέπω "ver".'
    },
    {
      id: 'sec-29-4',
      title: 'Perfecto y Pluscuamperfecto Segundos - Voz Activa',
      content: 'El perfecto segundo activo se forma añadiendo al tema verbal puro las desinencias -α (-ας, -ε, -αμεν, -ατε, -ασι) sin la característica -κ. Ejemplo de γράφω: perfecto segundo γέγραφα. El pluscuamperfecto segundo activo se forma con las desinencias -η (-ειν) sin la característica -κ. Ejemplo de πράπτω: pluscuamperfecto segundo ἐπέπραγη. Los verbos que tienen ει en el presente lo cambian en οι en el perfecto segundo, y los que tienen αι, lo cambian por η. Ejemplo: λείπω "dejar", perfecto segundo λέλοιπα; φαίνω "manifestar", perfecto segundo πέφηνα. En los verbos disílabos que tienen ε en el presente, se cambia dicha vocal en ο. Ejemplo: μένω "permanecer", perfecto segundo μέμονα. Si un verbo tiene perfecto primero y segundo, el primero generalmente tiene valor transitivo y el segundo intransitivo, y normalmente con valor de presente. Ejemplo: πείθω perfecto primero πέπεικα "he persuadido"; perfecto segundo πέποιθα "me ha persuadido", "creo"; Ὄλλυμι perfecto primero ὀλώλεκα "he destruido"; perfecto segundo ὄλωλα "he perecido".'
    },
    {
      id: 'sec-29-5',
      title: 'Futuro Segundo - Voz Pasiva',
      content: 'El futuro segundo pasivo se conjuga con la terminación -ήσομαι, sin θ. Ejemplo de τρίβω: futuro primero pasivo τριφθήσομαι, futuro segundo pasivo τριβήσομαι; de φαίνω: futuro segundo pasivo φανήσομαι. En estos tiempos las terminaciones se añaden al tema puro, sin la característica temporal θ que llevan los futuros primeros pasivos. El futuro segundo pasivo tiene significado pasivo pero se forma sin la característica modal θ, utilizando directamente el tema verbal puro más la terminación -ήσομαι.'
    },
    {
      id: 'sec-29-6',
      title: 'Aoristo Segundo - Voz Pasiva',
      content: 'El aoristo segundo pasivo se conjuga con la terminación -ην, sin θ. Ejemplo de τρίβω: aoristo primero pasivo ἐτρίφθην, aoristo segundo pasivo ἐτρίβην; de φαίνω: aoristo primero activo ἔφηνα, aoristo segundo pasivo ἐφάνην. En estos dos tiempos (futuro segundo y aoristo segundo pasivos) las terminaciones se añaden al tema puro. El aoristo segundo pasivo tiene significado pasivo pero se forma sin la característica modal θ que llevan los aoristos primeros pasivos, utilizando directamente el tema verbal puro más la terminación -ην.'
    },
    {
      id: 'sec-29-7',
      title: 'Verbos Frecuentes con Tiempos Segundos en el NT',
      content: 'Los tiempos segundos más frecuentes en el NT son los siguientes: ἄγω "llevar" (aoristo segundo ἤγαγον), αἴρω "coger" (futuro segundo ἀρῶ, aoristo segundo ἆρα), βάλλω "arrojar" (futuro segundo βαλῶ, aoristo segundo ἔβαλον), γίνομαι "llegar a ser" (futuro segundo γενήσομαι, aoristo segundo ἐγενόμην, perfecto segundo γέγονα), γινώσκω "conocer" (aoristo segundo ἔγνων), δίδωμι "dar" (aoristo segundo ἔδωκα), ἔρχομαι "ir, venir" (aoristo segundo ἦλθον, perfecto segundo ἐλήλυθα), εὑρίσκω "encontrar" (aoristo segundo εὗρον), ἔχω "tener" (aoristo segundo ἔσχον), θνήσκω "morir" (futuro segundo θανοῦμαι, aoristo segundo ἔθανον), ἵστημι "colocar" (aoristo segundo ἔστην), λαμβάνω "tomar" (aoristo segundo ἔλαβον), λέγω "decir" (futuro segundo ἐρῶ, aoristo segundo εἶπον), ὁράω "ver" (aoristo segundo εἶδον), πάσχω "sufrir" (aoristo segundo ἔπαθον, perfecto segundo πέπονθα), πίπτω "caer" (futuro segundo πεσοῦμαι, aoristo segundo ἔπεσον), τίθημι "poner" (aoristo segundo ἔθηκα).'
    },
    {
      id: 'sec-29-8',
      title: 'Alternancias Vocálicas - Grados Vocálicos',
      content: 'La alternancia vocálica o apofonía es un recurso lingüístico de origen indoeuropeo que consiste en el cambio de las vocales α, ε, ο en la formación de palabras derivadas de la misma raíz. Se pueden dar tres posibilidades: que la raíz contenga la vocal "ε" (grado pleno o grado ε); que contenga la vocal "ο" (grado alargado o grado ο); que no contenga ninguna de las dos vocales (grado cero). El verbo γίγνομαι tiene grado pleno en el aoristo segundo (ἐγένετο), grado alargado en el perfecto segundo (γέγονα) y grado cero en el tema de presente (γί-γνομαι). Otros ejemplos que ilustran esta alternancia son: γένος "linaje", γονεύς "progenitor", infinitivo participio γίγνεσθαι "nacer, llegar a ser"; λείπω "dejo", aoristo segundo ἔλιπον "dejé", perfecto segundo λέλοιπα "he dejado"; βάλλω "arrojo", βέλος "proyectil", βόλος "tiro"; τρέφω "alimento", aoristo segundo pasivo ἐτράφην, perfecto segundo activo τέτροφα; τέμνω "cortar", ἄτομος "indivisible", perfecto activo τέτμηκα "yo he cortado".'
    },
    {
      id: 'sec-29-9',
      title: 'Observaciones sobre Tiempos Segundos en el NT',
      content: 'En el NT, como en el griego helenístico, debido a la tendencia a unificar las desinencias, los aoristos segundos toman a veces las del aoristo primero, pero sin -σ, o sea, -α, -ας, -ε, -αμεν, -ατε, -αν en vez de las del imperfecto -ον, -ες, -ε. Ejemplo: εἶπας (Hch 27,35) en vez de εἶπες; εἶπαν (Mc 8,5) en vez de εἶπον; ἦλθαν (Lc 2,16) en vez de ἦλθον. Las alteraciones vocálicas que caracterizan los diferentes temas desaparecieron poco a poco. Si bien es verdad que en el verbo λείπω, ἔλιπον, λέλοιπα hay un radical con alternancia λείπ-, λιπ-, λοιπ-, el griego en la época histórica no creó más formas nuevas sobre este modelo y tendió a eliminar las que poseía. Un ejemplo de ello es que en la koiné existe un aoristo ἔλειψα. La tendencia del griego fue la de establecer paradigmas cerrados y regulares.'
    },
    {
      id: 'sec-29-10',
      title: 'Aplicación de Tiempos Segundos en Análisis de Textos del NT',
      content: 'Para identificar correctamente los tiempos segundos en textos del Nuevo Testamento, es fundamental reconocer que estos tiempos carecen de las características temporales de los tiempos primeros (-σ, -κ, -θ). Al encontrar formas verbales que parecen irregulares o que no siguen los patrones esperados de conjugación, es necesario verificar si se trata de un tiempo segundo. Los tiempos segundos son especialmente frecuentes en el NT en verbos como λέγω (εἶπον), ἔρχομαι (ἦλθον), γίνομαι (ἐγενόμην), y otros verbos comunes. La comprensión de las alternancias vocálicas es esencial para conectar estas formas con sus raíces verbales y entender el significado del texto. Muchas de estas formas aparecen en narraciones evangélicas y epistolares, por lo que su reconocimiento es fundamental para la lectura fluida del NT.'
    },
  ],
  vocabulary: [
    { greek: 'ἄγω', type: 'verbo', spanish: 'llevar, conducir', frequency: 67 },
    { greek: 'αἴρω', type: 'verbo', spanish: 'tomar, quitar', frequency: 101 },
    { greek: 'βάλλω', type: 'verbo', spanish: 'arrojar, lanzar', frequency: 122 },
    { greek: 'γίνομαι', type: 'verbo', spanish: 'llegar a ser, suceder', frequency: 669 },
    { greek: 'γινώσκω', type: 'verbo', spanish: 'conocer, saber', frequency: 222 },
    { greek: 'δίδωμι', type: 'verbo', spanish: 'dar', frequency: 415 },
    { greek: 'ἔρχομαι', type: 'verbo', spanish: 'ir, venir, llegar', frequency: 632 },
    { greek: 'εὑρίσκω', type: 'verbo', spanish: 'encontrar, hallar', frequency: 176 },
    { greek: 'ἔχω', type: 'verbo', spanish: 'tener, poseer', frequency: 708 },
    { greek: 'θνήσκω', type: 'verbo', spanish: 'morir', frequency: 111 },
    { greek: 'ἵστημι', type: 'verbo', spanish: 'colocar, poner de pie', frequency: 154 },
    { greek: 'λαμβάνω', type: 'verbo', spanish: 'tomar, recibir', frequency: 258 },
    { greek: 'λέγω', type: 'verbo', spanish: 'decir, hablar', frequency: 2255 },
    { greek: 'λείπω', type: 'verbo', spanish: 'dejar, abandonar', frequency: 24 },
    { greek: 'ὁράω', type: 'verbo', spanish: 'ver, mirar', frequency: 454 },
    { greek: 'πάσχω', type: 'verbo', spanish: 'sufrir, padecer', frequency: 42 },
    { greek: 'πίπτω', type: 'verbo', spanish: 'caer, caerse', frequency: 90 },
    { greek: 'τίθημι', type: 'verbo', spanish: 'poner, colocar', frequency: 100 },
    { greek: 'φαίνω', type: 'verbo', spanish: 'aparecer, manifestarse', frequency: 31 },
    { greek: 'φεύγω', type: 'verbo', spanish: 'huir, escapar', frequency: 29 },
    { greek: 'τρέπω', type: 'verbo', spanish: 'volver, girar', frequency: 4 },
    { greek: 'τρέφω', type: 'verbo', spanish: 'alimentar, criar', frequency: 9 },
    { greek: 'τέμνω', type: 'verbo', spanish: 'cortar, dividir', frequency: '1 vez' },
    { greek: 'γένος', type: 'verbo', spanish: 'linaje, raza, género', frequency: 20 },
    { greek: 'γονεύς', type: 'verbo', spanish: 'progenitor, padre', frequency: 20 },
    { greek: 'βέλος', type: 'verbo', spanish: 'proyectil, flecha', frequency: 3 },
    { greek: 'βόλος', type: 'verbo', spanish: 'tiro, lanzamiento', frequency: '1 vez' },
    { greek: 'ἄτομος', type: 'verbo', spanish: 'indivisible, inseparable', frequency: '1 vez' },
    { greek: 'πείθω', type: 'verbo', spanish: 'persuadir, convencer', frequency: 52 },
    { greek: 'ὄλλυμι', type: 'verbo', spanish: 'destruir, perder', frequency: 97 }
  ],
  exercises: [
    {
      id: 'ex-29-1',
      type: 'flashcard',
      title: 'Tiempos Segundos - Aoristo Segundo',
      description: 'Memoriza los aoristos segundos más frecuentes del NT',
      items: [
        { id: 'fc-29-1', question: 'λέγω (presente)', correctAnswer: 'εἶπον (aoristo segundo)' },
        { id: 'fc-29-2', question: 'ἔρχομαι (presente)', correctAnswer: 'ἦλθον (aoristo segundo)' },
        { id: 'fc-29-3', question: 'γίνομαι (presente)', correctAnswer: 'ἐγενόμην (aoristo segundo)' },
        { id: 'fc-29-4', question: 'βάλλω (presente)', correctAnswer: 'ἔβαλον (aoristo segundo)' },
        { id: 'fc-29-5', question: 'λαμβάνω (presente)', correctAnswer: 'ἔλαβον (aoristo segundo)' },
        { id: 'fc-29-6', question: 'ὁράω (presente)', correctAnswer: 'εἶδον (aoristo segundo)' },
        { id: 'fc-29-7', question: 'αἴρω (presente)', correctAnswer: 'ἆρα (aoristo segundo)' },
        { id: 'fc-29-8', question: 'ἔχω (presente)', correctAnswer: 'ἔσχον (aoristo segundo)' },
        { id: 'fc-29-9', question: 'πίπτω (presente)', correctAnswer: 'ἔπεσον (aoristo segundo)' },
        { id: 'fc-29-10', question: 'εὑρίσκω (presente)', correctAnswer: 'εὗρον (aoristo segundo)' }
      ]
    },
    {
      id: 'ex-29-2',
      type: 'multiple-choice',
      title: 'Características de Tiempos Segundos',
      description: 'Identifica las características correctas de los tiempos segundos',
      items: [
        { id: 'mc-29-1', question: '¿Qué característica temporal NO llevan los tiempos segundos?', options: ['σ del futuro', 'κ del perfecto', 'θ del pasivo', 'Todas las anteriores'], correctAnswer: 3, explanation: 'Los tiempos segundos no llevan ninguna de las características temporales de los tiempos primeros' },
        { id: 'mc-29-2', question: 'El futuro segundo se conjuga con terminaciones de...', options: ['presente contracto', 'imperfecto', 'aoristo primero'], correctAnswer: 0, explanation: 'El futuro segundo usa terminaciones del presente contracto en -έω' },
        { id: 'mc-29-3', question: 'El aoristo segundo se conjuga con terminaciones de...', options: ['presente', 'imperfecto', 'futuro'], correctAnswer: 1, explanation: 'El aoristo segundo usa terminaciones del imperfecto en indicativo (-ον) y del presente en otros modos' },
        { id: 'mc-29-4', question: 'En el perfecto segundo, ¿qué desinencias se usan?', options: ['-κα', '-α', '-ηκα'], correctAnswer: 1, explanation: 'El perfecto segundo usa desinencias -α (-ας, -ε, -αμεν, -ατε, -ασι) sin -κ' },
        { id: 'mc-29-5', question: 'El futuro segundo pasivo tiene terminación...', options: ['-θήσομαι', '-ήσομαι', '-ησα'], correctAnswer: 1, explanation: 'El futuro segundo pasivo usa -ήσομαι sin θ' },
        { id: 'mc-29-6', question: 'El aoristo segundo pasivo tiene terminación...', options: ['-θην', '-ην', '-ησα'], correctAnswer: 1, explanation: 'El aoristo segundo pasivo usa -ην sin θ' }
      ]
    },
    {
      id: 'ex-29-3',
      type: 'true-false',
      title: 'Propiedades de Tiempos Segundos',
      description: 'Determina si las afirmaciones sobre tiempos segundos son verdaderas o falsas',
      items: [
        { id: 'tf-29-1', question: 'Los tiempos segundos llevan las características temporales de los tiempos primeros', correctAnswer: 'false', explanation: 'Incorrecto. Los tiempos segundos NO llevan las características temporales (-σ, -κ, -θ)' },
        { id: 'tf-29-2', question: 'Los verbos que tienen tiempos segundos normalmente también tienen tiempos primeros', correctAnswer: 'false', explanation: 'Incorrecto. Por regla general, los verbos que tienen tiempos segundos NO tienen tiempos primeros' },
        { id: 'tf-29-3', question: 'El aoristo segundo es el tiempo segundo más frecuente en el NT', correctAnswer: 'true', explanation: 'Correcto. Los tiempos segundos más usados son los aoristos' },
        { id: 'tf-29-4', question: 'La alternancia vocálica afecta solo a la flexión nominal', correctAnswer: 'false', explanation: 'Incorrecto. La alternancia vocálica afecta tanto a la flexión nominal como verbal' },
        { id: 'tf-29-5', question: 'El grado pleno de alternancia vocálica contiene la vocal ε', correctAnswer: 'true', explanation: 'Correcto. El grado pleno o grado ε contiene la vocal ε' },
        { id: 'tf-29-6', question: 'El grado cero de alternancia vocálica no contiene vocales α, ε, ο', correctAnswer: 'true', explanation: 'Correcto. El grado cero no contiene ninguna de las dos vocales principales' }
      ]
    },
    {
      id: 'ex-29-4',
      type: 'matching',
      title: 'Empareja Verbos con sus Tiempos Segundos',
      description: 'Empareja verbos con sus formas de tiempos segundos',
      items: [
        { id: 'match-29-1', description: 'Empareja verbos con sus aoristos segundos', pairs: [
          { left: 'λέγω', right: 'εἶπον' },
          { left: 'ἔρχομαι', right: 'ἦλθον' },
          { left: 'γίνομαι', right: 'ἐγενόμην' },
          { left: 'βάλλω', right: 'ἔβαλον' },
          { left: 'ὁράω', right: 'εἶδον' },
          { left: 'λαμβάνω', right: 'ἔλαβον' }
        ], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente los aoristos segundos.' }
      ]
    },
    {
      id: 'ex-29-5',
      type: 'fill-blank',
      title: 'Completa Tiempos Segundos',
      description: 'Completa las formas de tiempos segundos',
      items: [
        { id: 'fb-29-1', question: 'λέγω (futuro segundo 1ª sg.): ἐ____', options: ['ρῶ', 'ρησω', 'ρα'], correctAnswer: 0, explanation: 'Futuro segundo: ἐρῶ (sin -σ)' },
        { id: 'fb-29-2', question: 'γίνομαι (futuro segundo 1ª sg.): γεν____', options: ['ησομαι', 'ήσομαι', 'ησα'], correctAnswer: 1, explanation: 'Futuro segundo: γενήσομαι (sin -σ)' },
        { id: 'fb-29-3', question: 'βάλλω (aoristo segundo 1ª sg.): ἔ____', options: ['βαλον', 'βαλσα', 'βαλα'], correctAnswer: 0, explanation: 'Aoristo segundo: ἔβαλον (sin -σ)' },
        { id: 'fb-29-4', question: 'λείπω (perfecto segundo 1ª sg.): λέ____', options: ['λοιπα', 'λοιπκα', 'λειπα'], correctAnswer: 0, explanation: 'Perfecto segundo: λέλοιπα (sin -κ, con alternancia ει > οι)' },
        { id: 'fb-29-5', question: 'φαίνω (perfecto segundo 1ª sg.): πέ____', options: ['φηνα', 'φηνκα', 'φανα'], correctAnswer: 0, explanation: 'Perfecto segundo: πέφηνα (sin -κ, con alternancia αι > η)' },
        { id: 'fb-29-6', question: 'μένω (perfecto segundo 1ª sg.): μέ____', options: ['μονα', 'μονκα', 'μενα'], correctAnswer: 0, explanation: 'Perfecto segundo: μέμονα (sin -κ, con alternancia ε > ο)' }
      ]
    },
    {
      id: 'ex-29-6',
      type: 'translation',
      title: 'Traduce Tiempos Segundos',
      description: 'Traduce las formas de tiempos segundos',
      items: [
        { id: 'tr-29-1', question: 'εἶπον', options: ['digo', 'dije', 'diré'], correctAnswer: 1, explanation: 'εἶπον es aoristo segundo: "dije"' },
        { id: 'tr-29-2', question: 'ἦλθον', options: ['vengo', 'vine', 'vendré'], correctAnswer: 1, explanation: 'ἦλθον es aoristo segundo: "vine"' },
        { id: 'tr-29-3', question: 'ἐγενόμην', options: ['me hago', 'me hice', 'me haré'], correctAnswer: 1, explanation: 'ἐγενόμην es aoristo segundo: "me hice"' },
        { id: 'tr-29-4', question: 'ἔβαλον', options: ['arrojo', 'arrojé', 'arrojaré'], correctAnswer: 1, explanation: 'ἔβαλον es aoristo segundo: "arrojé"' },
        { id: 'tr-29-5', question: 'εἶδον', options: ['veo', 'vi', 'veré'], correctAnswer: 1, explanation: 'εἶδον es aoristo segundo: "vi"' },
        { id: 'tr-29-6', question: 'ἔλαβον', options: ['tomo', 'tomé', 'tomaré'], correctAnswer: 1, explanation: 'ἔλαβον es aoristo segundo: "tomé"' }
      ]
    },
    {
      id: 'ex-29-7',
      type: 'multiple-choice',
      title: 'Alternancias Vocálicas',
      description: 'Identifica las alternancias vocálicas correctas',
      items: [
        { id: 'mc-29-7', question: 'λείπω tiene alternancia ει > ___ en perfecto segundo', options: ['ει', 'οι', 'αι'], correctAnswer: 1, explanation: 'Verbos con ει cambian a οι en perfecto segundo: λέλοιπα' },
        { id: 'mc-29-8', question: 'φαίνω tiene alternancia αι > ___ en perfecto segundo', options: ['αι', 'ει', 'η'], correctAnswer: 2, explanation: 'Verbos con αι cambian a η en perfecto segundo: πέφηνα' },
        { id: 'mc-29-9', question: 'μένω tiene alternancia ε > ___ en perfecto segundo', options: ['ε', 'ο', 'α'], correctAnswer: 1, explanation: 'Verbos disílabos con ε cambian a ο en perfecto segundo: μέμονα' },
        { id: 'mc-29-10', question: 'γίγνομαι tiene grado ___ en aoristo segundo ἐγένετο', options: ['cero', 'pleno', 'alargado'], correctAnswer: 1, explanation: 'Grado pleno (ε) en aoristo segundo: ἐγένετο' }
      ]
    },
    {
      id: 'ex-29-8',
      type: 'true-false',
      title: 'Características de Alternancias Vocálicas',
      description: 'Determina si las afirmaciones sobre alternancias vocálicas son verdaderas o falsas',
      items: [
        { id: 'tf-29-7', question: 'La alternancia vocálica es un recurso de origen indoeuropeo', correctAnswer: 'true', explanation: 'Correcto. La alternancia vocálica o apofonía es de origen indoeuropeo' },
        { id: 'tf-29-8', question: 'El grado pleno contiene la vocal ο', correctAnswer: 'false', explanation: 'Incorrecto. El grado pleno contiene la vocal ε' },
        { id: 'tf-29-9', question: 'El grado alargado contiene la vocal ο', correctAnswer: 'true', explanation: 'Correcto. El grado alargado o grado ο contiene la vocal ο' },
        { id: 'tf-29-10', question: 'La alternancia vocálica solo afecta a la conjugación verbal', correctAnswer: 'false', explanation: 'Incorrecto. Afecta tanto a la flexión nominal como verbal' }
      ]
    },
    {
      id: 'ex-29-9',
      type: 'multiple-choice',
      title: 'Formas Irregulares en el NT',
      description: 'Identifica formas irregulares de tiempos segundos en el NT',
      items: [
        { id: 'mc-29-11', question: 'En el NT, εἶπας (Hch 27,35) es forma de aoristo segundo con desinencia de...', options: ['imperfecto', 'aoristo primero', 'perfecto'], correctAnswer: 1, explanation: 'En la koiné, los aoristos segundos toman desinencias del aoristo primero sin -σ' },
        { id: 'mc-29-12', question: 'En el NT, εἶπαν (Mc 8,5) es forma de aoristo segundo con desinencia de...', options: ['imperfecto', 'aoristo primero', 'perfecto'], correctAnswer: 1, explanation: 'Forma analógica: εἶπαν en lugar de εἶπον' },
        { id: 'mc-29-13', question: 'En el NT, ἦλθαν (Lc 2,16) es forma de aoristo segundo con desinencia de...', options: ['imperfecto', 'aoristo primero', 'perfecto'], correctAnswer: 1, explanation: 'Forma analógica: ἦλθαν en lugar de ἦλθον' }
      ]
    }
  ]
};

export const lesson30: Lesson = {
  id: 'lesson-30',
  number: 30,
  title: 'Verbos en -mi',
  introduction: 'Los verbos en -mi son verbos atemáticos que se diferencian de los verbos en -ω únicamente en el presente e imperfecto de las tres voces y en el aoristo segundo activo y medio. En todos los otros tiempos las formas son las mismas para ambas categorías. En estos verbos atemáticos las desinencias se unen directamente al tema. Los verbos en -mi más importantes son: τίθημι "poner, colocar", ἵστημι "ponerse de pie", δίδωμι "dar", ἵημι "enviar", y los verbos en -νυμι como δείκνυμι "mostrar". También hay verbos defectivos como εἰμί "ser", οἶδα "yo sé", κάθημαι "estar sentado", κεῖμαι "yacer", φημί "decir", y ἔξεστιν "es lícito".',
  sections: [
    {
      id: 'sec-30-1',
      title: 'Características Generales de Verbos en -mi',
      content: 'Los verbos en -mi son verbos atemáticos que se diferencian de los verbos en -ω únicamente en el presente e imperfecto de las tres voces y en el aoristo segundo activo y medio. En todos los otros tiempos las formas son las mismas para ambas categorías. En estos verbos atemáticos las desinencias se unen directamente al tema, sin vocal temática. Las desinencias activas primarias son: -μι, -ς, -σι(ν), -μεν, -τε, -ασι(ν). Las desinencias activas secundarias son: -ν, -ς, —, -μεν, -τε, -σαν. El imperativo activo presente en la 2ª persona del singular tiene la desinencia -θι. El infinitivo de presente, aoristo segundo y perfecto de la voz activa tiene la desinencia -ναι. El infinitivo de aoristo primero y futuro es igual al de los verbos en -ω. Las desinencias -σαι y -σο de la 2ª persona del singular de la voz medio-pasiva no suelen contraer. El imperativo activo presente alterna en la característica modal entre -ι (singular) y -ι (plural); el medio lleva -ι en todas las personas.'
    },
    {
      id: 'sec-30-2',
      title: 'Clasificación de Verbos en -mi: Grupo 1 - Verbos con Reduplicación',
      content: 'El primer grupo de verbos en -mi comprende verbos con reduplicación en -ι en el presente y en el imperfecto de todos los modos. La reduplicación desaparece en los otros tiempos. Los principales verbos de este grupo son: τίθημι "poner, colocar" (tema θε-), ἵστημι "ponerse de pie" (tema στα-), δίδωμι "dar" (tema δο-), ἵημι "enviar" (tema ε-). En el presente e imperfecto estos verbos llevan reduplicación en ι con la consonante inicial del verbo; pero en ἵημι e ἵστημι, está disimulada la reduplicación en el espíritu áspero. La vocal de la raíz se alarga en el singular del presente y del imperfecto de indicativo de la voz activa. En el resto de las formas, tanto activas como medio-pasivas, llevan siempre la vocal breve. El aoristo segundo viene a ser generalmente como el imperfecto y el presente quitando la reduplicación.'
    },
    {
      id: 'sec-30-3',
      title: 'Paradigma del Verbo τίθημι - Presente e Imperfecto',
      content: 'El verbo τίθημι "poner, colocar" tiene el siguiente paradigma en presente e imperfecto. Presente indicativo: τίθημι, τίθης, τίθησι(ν), τίθεμεν, τίθετε, τιθέασι(ν). Presente imperativo: τίθει, τίθετω, τίθετε, τιθέτωσαν. Presente subjuntivo: τιθῶ, τιθῇς, τιθῇ, τιθῶμεν, τιθῆτε, τιθῶσι(ν). Presente optativo: τιθείην, τιθείης, τιθείη, τιθεῖμεν, τιθεῖτε, τιθεῖεν. Presente participio: τιθείς, τιθεῖσα, τιθέν. Presente infinitivo: τιθέναι. Imperfecto indicativo: ἐτίθην, ἐτίθεις, ἐτίθει, ἐτίθεμεν, ἐτίθετε, ἐτίθεσαν. Nótese, además de la reduplicación en todo el presente, el alargamiento del tema en las tres personas del singular.'
    },
    {
      id: 'sec-30-4',
      title: 'Paradigma del Verbo δίδωμι - Presente e Imperfecto',
      content: 'El verbo δίδωμι "dar" tiene el siguiente paradigma en presente e imperfecto. Presente indicativo: δίδωμι, δίδως, δίδωσι(ν), δίδομεν, δίδοτε, διδόασι(ν). Presente imperativo: δίδου, δίδοτω, δίδοτε, διδότωσαν. Presente subjuntivo: διδῶ, διδῷς, διδῷ, διδῶμεν, διδῶτε, διδῶσι(ν). Presente optativo: διδοίην, διδοίης, διδοίη, διδοῖμεν, διδοῖτε, διδοῖεν. Presente participio: διδούς, διδοῦσα, διδόν. Presente infinitivo: διδόναι. Imperfecto indicativo: ἐδίδουν, ἐδίδους, ἐδίδου, ἐδίδομεν, ἐδίδοτε, ἐδίδοσαν. Nótese, además de la reduplicación en todo el presente (δι-), el alargamiento del tema (δο- a δῶ-) en las tres personas del singular.'
    },
    {
      id: 'sec-30-5',
      title: 'Clasificación de Verbos en -mi: Grupo 2 - Verbos en -νυμι',
      content: 'El segundo grupo de verbos en -mi comprende verbos en -νυμι (-ννυμι después de vocal): es decir, con refuerzo del infijo -νυ entre el tema verbal y la desinencia en el tema de presente (es decir, presente e imperfecto) de todos los modos y voces. Ejemplo: δείκνυμι "mostrar". A este grupo también se les llama verbos con presentes atemáticos marcados, porque muestran elementos unidos a la raíz que aparecen exclusivamente en el tema de presente y que lo "marcan" frente a los otros temas verbales. El presente de subjuntivo y de optativo se conjugan como λύω. No es raro que aun el presente de indicativo, imperativo, infinitivo y participio y el imperfecto, tomen las formas regulares de λύω: δεικνύω, ἐδείκνυον. Los demás tiempos (futuro, aoristo, perfecto y pluscuamperfecto) se forman como los verbos en -ω. Siguen la conjugación de δείκνυμι: ἀπόλλυμι "perecer, destruir", κεράννυμι "mezclar", ζεύγνυμι "uncir al yugo, juntar", ζέννυμι "ceñir", ῥήγνυμι "romper, desgarrar", ῥέννυμι "fortalecer", σβέννυμι "apagar, extinguir", ὄμνυμι "jurar", κρεμάννυμι "colgar, suspender".'
    },
    {
      id: 'sec-30-6',
      title: 'Clasificación de Verbos en -mi: Grupo 3 - Verbos Defectivos',
      content: 'El tercer grupo de verbos en -mi comprende verbos sin reduplicación y sin sufijo. Son verbos defectivos, es decir, que no cuentan con todos los temas. También se les llama verbos con presentes atemáticos radicales, porque funcionan únicamente con la raíz y las desinencias. Los principales verbos defectivos son: φημί "decir" (solo tiene temas de presente, futuro y aoristo de la voz activa, aunque en el NT se emplea solo el presente e imperfecto); εἰμί "ser" (ya estudiado, y todos sus compuestos); εἶμι "ir" (solo tiene presente e imperfecto); κάθημαι "estar sentado" (se usa solamente en presente e imperfecto); κεῖμαι "yacer, estar tendido" (se usa solamente en presente e imperfecto); οἶδα "yo sé" (es un perfecto con significado de presente); εἴωθα "tener la costumbre de, acostumbrar a"; οἴκα "parecer, parecerse a"; χρή "es necesario" (solamente tiene tema de presente y futuro, es verbo impersonal).'
    },
    {
      id: 'sec-30-7',
      title: 'Paradigma del Verbo ἵημι - Presente e Imperfecto',
      content: 'El verbo ἵημι "enviar" se conjuga igual que τίθημι pero sin las consonantes τ y θ. Presente indicativo: ἵημι, ἵης, ἵησι(ν), ἵεμεν, ἵετε, ἱέασι(ν). Presente imperativo: ἵει, ἵετω, ἵετε, ἱέτωσαν. Presente subjuntivo: ἱῶ, ἱῇς, ἱῇ, ἱῶμεν, ἱῆτε, ἱῶσι(ν). Presente optativo: ἱείην, ἱείης, ἱείη, ἱεῖμεν, ἱεῖτε, ἱεῖεν. Presente participio: ἱείς, ἱεῖσα, ἱέν. Presente infinitivo: ἱέναι. Imperfecto indicativo: ἵην, ἵεις, ἵει, ἵεμεν, ἵετε, ἵεσαν. Nótese, además de la reduplicación en todo el presente (la iota con el espíritu áspero, que proviene de yi-yh-mi), el alargamiento del tema en las tres personas del singular.'
    },
    {
      id: 'sec-30-8',
      title: 'Aoristo Segundo de Verbos en -mi',
      content: 'El aoristo segundo de los verbos en -mi se forma quitando la reduplicación del presente. Para τίθημι: ἔθηκα (3ª sg. aoristo primero), ἔθην (aoristo segundo). Para δίδωμι: ἔδωκα (3ª sg. aoristo primero), ἔδων (aoristo segundo). Para ἵημι: ἧκα (aoristo segundo). El aoristo segundo se diferencia del imperfecto por la raíz verbal y por la ausencia de reduplicación. En el NT, como en el griego helenístico, debido a la tendencia a unificar las desinencias, los aoristos segundos toman a veces las desinencias del aoristo primero, pero sin -σ. Las tres personas del singular del aoristo de δίδωμι son aoristos primeros; las tres del plural son segundos. En el resto de los modos el aoristo siempre es segundo.'
    },
    {
      id: 'sec-30-9',
      title: 'Verbos Defectivos: εἰμί, οἶδα, φημί, κάθημαι, κεῖμαι',
      content: 'Los verbos defectivos son aquellos que no poseen todos los temas verbales. El verbo εἰμί "ser" ya ha sido estudiado. El verbo οἶδα "yo sé" es un perfecto con significado de presente; forma sus tiempos sin vocal de unión. Solamente tiene tema de perfecto (es decir, perfecto y pluscuamperfecto), traduciéndose el primero por presente y el segundo por imperfecto, y tema de futuro (εἴδησω). Además de ser un verbo defectivo, es polirizo (ἴδ-/οἴδ-/ἰδ-). El verbo φημί "decir" solo tiene los temas de presente, futuro y aoristo de la voz activa, aunque en el NT se emplea solo el presente e imperfecto. El imperfecto ἔφην y el infinitivo φάναι suelen tener el valor de un aoristo. El verbo κάθημαι "estar sentado" se usa solamente en presente e imperfecto. El verbo κεῖμαι "yacer, estar tendido" se usa solamente en presente e imperfecto. El verbo εἴωθα "tener la costumbre de, acostumbrar a" utiliza el tema de perfecto para expresar el presente. El verbo οἴκα "parecer, parecerse a, parecerle a uno (que)" utiliza el tema de perfecto. El verbo χρή "es necesario" solamente tiene tema de presente y futuro, es un verbo impersonal.'
    },
    {
      id: 'sec-30-10',
      title: 'Aplicación de Verbos en -mi en Textos del NT',
      content: 'Los verbos en -mi son fundamentales en el Nuevo Testamento. El verbo δίδωμι "dar" aparece más de 400 veces. El verbo τίθημι "poner, colocar" y sus compuestos aparecen frecuentemente. El verbo ἵστημι "ponerse de pie" es muy común. El verbo φημί "decir" aparece en discursos y narrativas. El verbo οἶδα "yo sé" es extremadamente frecuente. Los compuestos de ἵημι como ἀφίημι "perdonar" son importantes. El verbo ἀπόλλυμι "destruir, perecer" aparece en contextos escatológicos. Para identificar correctamente estos verbos en textos del NT es fundamental reconocer sus formas características, especialmente en presente e imperfecto donde difieren más de los verbos en -ω. La comprensión de estos verbos es esencial para la lectura fluida y la interpretación correcta del Nuevo Testamento.'
    }
  ],
  vocabulary: [
    { greek: 'δίδωμι', type: 'verbo', spanish: 'dar', frequency: 415 },
    { greek: 'τίθημι', type: 'verbo', spanish: 'poner, colocar', frequency: 100 },
    { greek: 'ἵστημι', type: 'verbo', spanish: 'poner de pie, establecer', frequency: 154 },
    { greek: 'ἵημι', type: 'verbo', spanish: 'enviar, soltar', frequency: 5 },
    { greek: 'ἀποδίδωμι', type: 'verbo', spanish: 'pagar, recompensar', frequency: 48 },
    { greek: 'ἀνίστημι', type: 'verbo', spanish: 'levantarse, resucitar', frequency: 108 },
    { greek: 'ἀφίημι', type: 'verbo', spanish: 'perdonar, dejar', frequency: 143 },
    { greek: 'παραδίδωμι', type: 'verbo', spanish: 'entregar, traicionar', frequency: 119 },
    { greek: 'ἐπιτίθημι', type: 'verbo', spanish: 'poner sobre, imponer', frequency: 39 },
    { greek: 'παρίστημι', type: 'verbo', spanish: 'presentar, procurar', frequency: 41 },
    { greek: 'συνίημι', type: 'verbo', spanish: 'comprender, entender', frequency: 26 },
    { greek: 'ἀπόλλυμι', type: 'verbo', spanish: 'destruir, perecer', frequency: 90 },
    { greek: 'δείκνυμι', type: 'verbo', spanish: 'mostrar, demostrar', frequency: 33 },
    { greek: 'κατάγνυμι', type: 'verbo', spanish: 'quebrar, romper', frequency: 4 },
    { greek: 'σβέννυμι', type: 'verbo', spanish: 'apagar, extinguir', frequency: 3 },
    { greek: 'ὄμνυμι', type: 'verbo', spanish: 'jurar', frequency: 26 },
    { greek: 'ἐνδείκνυμι', type: 'verbo', spanish: 'indicar, demostrar', frequency: 4 },
    { greek: 'ζέννυμι', type: 'verbo', spanish: 'ceñirse, vestirse', frequency: '1 vez' },
    { greek: 'διαζέννυμι', type: 'verbo', spanish: 'atarse algo alrededor', frequency: '1 vez' },
    { greek: 'στρέννυμι', type: 'verbo', spanish: 'tender, extender', frequency: 3 },
    { greek: 'ῥήγνυμι', type: 'verbo', spanish: 'despedazar, atacar', frequency: 4 },
    { greek: 'εἰμί', type: 'verbo', spanish: 'ser, estar', frequency: 2457 },
    { greek: 'οἶδα', type: 'verbo', spanish: 'saber, conocer', frequency: 318 },
    { greek: 'κάθημαι', type: 'verbo', spanish: 'estar sentado', frequency: 91 },
    { greek: 'κεῖμαι', type: 'verbo', spanish: 'estar acostado, yacer', frequency: 24 },
    { greek: 'φημί', type: 'verbo', spanish: 'decir', frequency: 66 },
    { greek: 'παρείμι', type: 'verbo', spanish: 'estar presente', frequency: 24 },
    { greek: 'ἀπείμι', type: 'verbo', spanish: 'estar ausente', frequency: '1 vez' },
    { greek: 'ἔνειμι', type: 'verbo', spanish: 'intervenir', frequency: '1 vez' },
    { greek: 'χρή', type: 'verbo', spanish: 'es necesario', frequency: 11 }
  ],
  exercises: [
    {
      id: 'ex-30-1',
      type: 'flashcard',
      title: 'Verbos en -mi - Presente',
      description: 'Memoriza las formas de presente de verbos en -mi',
      items: [
        { id: 'fc-30-1', question: 'δίδωμι (1ª sg. presente)', correctAnswer: 'δίδωμι' },
        { id: 'fc-30-2', question: 'τίθημι (1ª sg. presente)', correctAnswer: 'τίθημι' },
        { id: 'fc-30-3', question: 'ἵστημι (1ª sg. presente)', correctAnswer: 'ἵστημι' },
        { id: 'fc-30-4', question: 'ἵημι (1ª sg. presente)', correctAnswer: 'ἵημι' },
        { id: 'fc-30-5', question: 'δίδωμι (2ª sg. presente)', correctAnswer: 'δίδως' },
        { id: 'fc-30-6', question: 'τίθημι (2ª sg. presente)', correctAnswer: 'τίθης' },
        { id: 'fc-30-7', question: 'ἵστημι (2ª sg. presente)', correctAnswer: 'ἵστης' },
        { id: 'fc-30-8', question: 'δίδωμι (3ª sg. presente)', correctAnswer: 'δίδωσι(ν)' },
        { id: 'fc-30-9', question: 'τίθημι (3ª sg. presente)', correctAnswer: 'τίθησι(ν)' },
        { id: 'fc-30-10', question: 'ἵστημι (3ª sg. presente)', correctAnswer: 'ἵστησι(ν)' }
      ]
    },
    {
      id: 'ex-30-2',
      type: 'multiple-choice',
      title: 'Características de Verbos en -mi',
      description: 'Identifica las características correctas de los verbos en -mi',
      items: [
        { id: 'mc-30-1', question: '¿En qué se diferencian los verbos en -mi de los verbos en -ω?', options: ['En todos los tiempos', 'Solo en presente e imperfecto', 'Solo en aoristo', 'En futuro y perfecto'], correctAnswer: 1, explanation: 'Los verbos en -mi se diferencian de los verbos en -ω únicamente en el presente e imperfecto de las tres voces y en el aoristo segundo activo y medio' },
        { id: 'mc-30-2', question: '¿Cómo se unen las desinencias en verbos atemáticos?', options: ['Con vocal temática', 'Directamente al tema', 'Con infijo -nu', 'Con reduplicación'], correctAnswer: 1, explanation: 'En los verbos atemáticos las desinencias se unen directamente al tema, sin vocal temática' },
        { id: 'mc-30-3', question: '¿Cuál es la desinencia de la 1ª persona singular en verbos en -mi?', options: ['-ω', '-μι', '-ν', '-ς'], correctAnswer: 1, explanation: 'La desinencia primaria de la 1ª persona singular es -μι' },
        { id: 'mc-30-4', question: '¿Qué es la reduplicación en verbos como τίθημι?', options: ['Repetición del tema', 'Repetición de la consonante inicial con -ι', 'Alargamiento vocálico', 'Cambio de raíz'], correctAnswer: 1, explanation: 'La reduplicación es la repetición de la consonante inicial del verbo con -ι en presente e imperfecto' },
        { id: 'mc-30-5', question: '¿Cuáles son los principales verbos en -mi?', options: ['λύω, τρέπω, φέρω', 'δίδωμι, τίθημι, ἵστημι, ἵημι', 'γράφω, λέγω, ὁράω', 'ἀγαπάω, ποιέω, δηλόω'], correctAnswer: 1, explanation: 'Los principales verbos en -mi son δίδωμι, τίθημι, ἵστημι e ἵημι' },
        { id: 'mc-30-6', question: '¿Qué son verbos defectivos?', options: ['Verbos irregulares', 'Verbos que no tienen todos los temas', 'Verbos sin reduplicación', 'Verbos con infijo -nu'], correctAnswer: 1, explanation: 'Los verbos defectivos son aquellos que no cuentan con todos los temas verbales' }
      ]
    },
    {
      id: 'ex-30-3',
      type: 'true-false',
      title: 'Propiedades de Verbos en -mi',
      description: 'Determina si las afirmaciones sobre verbos en -mi son verdaderas o falsas',
      items: [
        { id: 'tf-30-1', question: 'Los verbos en -mi tienen vocal temática entre el tema y las desinencias', correctAnswer: 'false', explanation: 'Incorrecto. En los verbos atemáticos las desinencias se unen directamente al tema' },
        { id: 'tf-30-2', question: 'La reduplicación en τίθημι desaparece en todos los tiempos excepto presente e imperfecto', correctAnswer: 'true', explanation: 'Correcto. La reduplicación aparece solo en presente e imperfecto' },
        { id: 'tf-30-3', question: 'El verbo δίδωμι tiene todas sus formas iguales a λύω', correctAnswer: 'false', explanation: 'Incorrecto. Solo difieren en presente e imperfecto y en aoristo segundo' },
        { id: 'tf-30-4', question: 'El verbo οἶδα es un perfecto con significado de presente', correctAnswer: 'true', explanation: 'Correcto. οἶδα es un perfecto que se traduce como presente "yo sé"' },
        { id: 'tf-30-5', question: 'El verbo φημί tiene todos los temas verbales', correctAnswer: 'false', explanation: 'Incorrecto. φημί es un verbo defectivo que solo tiene presente, futuro y aoristo' },
        { id: 'tf-30-6', question: 'Los verbos en -νυμι tienen infijo -νυ en todos los tiempos', correctAnswer: 'false', explanation: 'Incorrecto. El infijo -νυ aparece solo en presente e imperfecto' }
      ]
    },
    {
      id: 'ex-30-4',
      type: 'matching',
      title: 'Empareja Verbos en -mi con sus Significados',
      description: 'Empareja verbos en -mi con sus significados',
      items: [
        { id: 'match-30-1', description: 'Empareja verbos con sus significados', pairs: [
          { left: 'δίδωμι', right: 'dar' },
          { left: 'τίθημι', right: 'poner, colocar' },
          { left: 'ἵστημι', right: 'poner de pie, establecer' },
          { left: 'ἵημι', right: 'enviar, soltar' },
          { left: 'ἀφίημι', right: 'perdonar, dejar' },
          { left: 'παραδίδωμι', right: 'entregar, traicionar' }
        ], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente los significados de los verbos en -mi.' }
      ]
    },
    {
      id: 'ex-30-5',
      type: 'fill-blank',
      title: 'Completa Formas de Verbos en -mi',
      description: 'Completa las formas de verbos en -mi',
      items: [
        { id: 'fb-30-1', question: 'δίδωμι (presente 1ª sg.): δί____', options: ['δωμι', 'δωσι', 'δως'], correctAnswer: 0, explanation: 'Presente 1ª sg.: δίδωμι' },
        { id: 'fb-30-2', question: 'τίθημι (presente 1ª sg.): τί____', options: ['θημι', 'θης', 'θησι'], correctAnswer: 0, explanation: 'Presente 1ª sg.: τίθημι' },
        { id: 'fb-30-3', question: 'δίδωμι (aoristo segundo 1ª sg.): ἔ____', options: ['δωκα', 'δων', 'δωσα'], correctAnswer: 1, explanation: 'Aoristo segundo 1ª sg.: ἔδων' },
        { id: 'fb-30-4', question: 'τίθημι (aoristo segundo 1ª sg.): ἔ____', options: ['θηκα', 'θην', 'θησα'], correctAnswer: 1, explanation: 'Aoristo segundo 1ª sg.: ἔθην' },
        { id: 'fb-30-5', question: 'ἵστημι (aoristo segundo 1ª sg.): ἔ____', options: ['στησα', 'στην', 'στηκα'], correctAnswer: 1, explanation: 'Aoristo segundo 1ª sg.: ἔστην' },
        { id: 'fb-30-6', question: 'δίδωμι (imperfecto 1ª sg.): ἐ____', options: ['δίδουν', 'δίδως', 'δίδωμι'], correctAnswer: 0, explanation: 'Imperfecto 1ª sg.: ἐδίδουν' }
      ]
    },
    {
      id: 'ex-30-6',
      type: 'translation',
      title: 'Traduce Formas de Verbos en -mi',
      description: 'Traduce las formas de verbos en -mi',
      items: [
        { id: 'tr-30-1', question: 'δίδωμι', options: ['doy', 'daba', 'daré'], correctAnswer: 0, explanation: 'δίδωμι es presente 1ª sg.: "doy"' },
        { id: 'tr-30-2', question: 'ἔδωκα', options: ['doy', 'daba', 'di'], correctAnswer: 2, explanation: 'ἔδωκα es aoristo 1ª sg.: "di"' },
        { id: 'tr-30-3', question: 'τίθημι', options: ['pongo', 'ponía', 'pondré'], correctAnswer: 0, explanation: 'τίθημι es presente 1ª sg.: "pongo"' },
        { id: 'tr-30-4', question: 'ἔθην', options: ['pongo', 'ponía', 'puse'], correctAnswer: 2, explanation: 'ἔθην es aoristo segundo 1ª sg.: "puse"' },
        { id: 'tr-30-5', question: 'ἵστημι', options: ['me pongo de pie', 'me ponía de pie', 'me pondré de pie'], correctAnswer: 0, explanation: 'ἵστημι es presente 1ª sg.: "me pongo de pie"' },
        { id: 'tr-30-6', question: 'ἔστην', options: ['me pongo de pie', 'me ponía de pie', 'me puse de pie'], correctAnswer: 2, explanation: 'ἔστην es aoristo segundo 1ª sg.: "me puse de pie"' }
      ]
    },
    {
      id: 'ex-30-7',
      type: 'multiple-choice',
      title: 'Verbos Defectivos',
      description: 'Identifica propiedades de verbos defectivos',
      items: [
        { id: 'mc-30-7', question: '¿Cuál es la característica principal del verbo οἶδα?', options: ['Es un presente regular', 'Es un perfecto con significado de presente', 'Es un aoristo', 'Es un futuro'], correctAnswer: 1, explanation: 'οἶδα es un perfecto con significado de presente: "yo sé"' },
        { id: 'mc-30-8', question: '¿Qué temas tiene el verbo φημί?', options: ['Todos los temas', 'Solo presente', 'Presente, futuro y aoristo', 'Presente e imperfecto'], correctAnswer: 2, explanation: 'φημί tiene temas de presente, futuro y aoristo, aunque en el NT solo se usa presente e imperfecto' },
        { id: 'mc-30-9', question: '¿Cuál es la característica del verbo κάθημαι?', options: ['Tiene todos los tiempos', 'Solo tiene presente e imperfecto', 'Es un verbo regular', 'Es un aoristo'], correctAnswer: 1, explanation: 'κάθημαι se usa solamente en presente e imperfecto' },
        { id: 'mc-30-10', question: '¿Cuántas veces aparece χρή en el NT?', options: ['1 vez', '11 veces', '100 veces', '50 veces'], correctAnswer: 1, explanation: 'χρή aparece 11 veces en el NT, siempre en 3ª persona del singular' }
      ]
    },
    {
      id: 'ex-30-8',
      type: 'true-false',
      title: 'Características de Verbos Defectivos',
      description: 'Determina si las afirmaciones sobre verbos defectivos son verdaderas o falsas',
      items: [
        { id: 'tf-30-7', question: 'El verbo εἰμί es un verbo defectivo', correctAnswer: 'true', explanation: 'Correcto. εἰμί es un verbo defectivo con presentes atemáticos radicales' },
        { id: 'tf-30-8', question: 'El verbo κεῖμαι tiene futuro y aoristo', correctAnswer: 'false', explanation: 'Incorrecto. κεῖμαι solo tiene presente e imperfecto' },
        { id: 'tf-30-9', question: 'El verbo οἶδα tiene tema de perfecto', correctAnswer: 'true', explanation: 'Correcto. οἶδα es un perfecto que funciona como presente' },
        { id: 'tf-30-10', question: 'El verbo χρή es un verbo personal', correctAnswer: 'false', explanation: 'Incorrecto. χρή es un verbo impersonal' }
      ]
    },
    {
      id: 'ex-30-9',
      type: 'multiple-choice',
      title: 'Formas Irregulares de Verbos en -mi en el NT',
      description: 'Identifica formas irregulares de verbos en -mi en el NT',
      items: [
        { id: 'mc-30-11', question: '¿Cuál es la tendencia en el NT respecto a los verbos en -mi?', options: ['Desaparecen completamente', 'Se regularizan como verbos en -ω', 'Se mantienen iguales', 'Se vuelven defectivos'], correctAnswer: 1, explanation: 'En el NT hay huellas de regularización de verbos en -mi hacia formas de verbos en -ω' },
        { id: 'mc-30-12', question: 'En el NT, δίδωμι a veces aparece como...', options: ['δίδω', 'δίδοος', 'διδῷ', 'δίδοσι'], correctAnswer: 0, explanation: 'En el NT hay formas regularizadas como δίδω' },
        { id: 'mc-30-13', question: '¿Cuál es la frecuencia del verbo δίδωμι en el NT?', options: ['50 veces', '100 veces', '415 veces', '200 veces'], correctAnswer: 2, explanation: 'δίδωμι aparece 415 veces en el NT, siendo uno de los verbos más frecuentes' }
      ]
    }
  ]
};

export const lesson31: Lesson = {
  id: 'lesson-31',
  number: 31,
  title: 'Verbos Irregulares',
  introduction: 'Los verbos irregulares del griego del Nuevo Testamento se dividen en cuatro grupos principales: verbos polirrizos (que forman sus tiempos sobre temas de distintas raíces), verbos incoativos (con sufijo -σκ en el presente), verbos con refuerzo vocálico ε/η, y verbos con refuerzo nasal. Estos verbos son fundamentales para la lectura del NT, ya que incluyen algunos de los verbos más frecuentes como ἔρχομαι "ir", λέγω "decir", ἔχω "tener" y λαμβάνω "tomar". El dominio de estos verbos es esencial para la comprensión de textos bíblicos.',
  sections: [
    {
      id: 'sec-31-1',
      title: 'Verbos Polirrizos - Introducción',
      content: 'Los verbos polirrizos (πολύς "mucho" y ῥίζα "raíz") forman sus tiempos sobre temas procedentes de distintas raíces. Por ejemplo, ἀγορεύω tiene raíces ἀγορ-, ἀγορ- y φαγ-. También se incluyen verbos que aunque tengan la misma raíz aparecen como distintos debido a transformaciones fonéticas (alternancia vocálica o metátesis de consonantes líquidas). Estos verbos son muy frecuentes en el NT y requieren memorización de sus paradigmas completos.'
    },
    {
      id: 'sec-31-2',
      title: 'Verbos Polirrizos - Temas Distintos',
      content: 'Verbos con temas pertenecientes a raíces totalmente distintas: αἱρέω "coger, elegir" (futuro ἑλοῦ, aoristo εἷλον), ἔρχομαι "ir, venir" (futuro εὐλεύσομαι, aoristo ἦλθον, perfecto ἐλήλυθα), ἐσθίω "comer" (futuro φάγομαι, aoristo ἔφαγον), λέγω "decir" (futuro ἐρῶ, aoristo εἶπον, perfecto εἴρηκα, perfecto medio εἴρημαι, aoristo pasivo ἐρρέθην), ὁράω "ver" (futuro ὄψομαι, aoristo εἶδον, perfecto ἑώρακα, aoristo pasivo ὤφθην), πίνω "beber" (futuro πίομαι, aoristo ἔπιον, perfecto πέπωκα, aoristo pasivo ἐπόθην), τρέχω "correr" (aoristo ἔδραμον), φέρω "llevar" (futuro οἴσω, aoristo ἤνεγκον, perfecto ἐνήνοχα, aoristo pasivo ὠνέσθην).'
    },
    {
      id: 'sec-31-3',
      title: 'Verbos Polirrizos - Temas Transformados',
      content: 'Verbos con temas pertenecientes a la misma raíz pero transformados por alternancia vocálica o metátesis: βάλλω "echar, lanzar" (futuro βαλῶ, aoristo ἔβαλον, perfecto βέβληκα, perfecto medio βέβλημαι, aoristo pasivo ἐβλήθην), γίνομαι "llegar a ser" (futuro γενήσομαι, aoristo ἐγενόμην, perfecto γέγονα, perfecto medio γεγένημαι, aoristo pasivo ἐγενήθην), ἕπομαι "seguir" (futuro ἕψομαι, aoristo ἑσπόμην), ἔχω "tener" (futuro ἕξω, aoristo ἔσχον, perfecto ἔσχηκα), καλέω "llamar" (futuro καλέσω, aoristo ἐκάλεσα, perfecto κέκληκα, perfecto medio κέκλημαι, aoristo pasivo ἐκλήθην), κλαίω "llorar, quebrar" (aoristo ἔκλαυσα, aoristo pasivo ἐκλάσθην), λείπω "salir, abandonar" (futuro λείψω, aoristo ἔλιπον, perfecto medio λέλειμμαι, aoristo pasivo ἐλείφθην), πάσχω "sufrir" (aoristo ἔπαθον, perfecto πέπονθα), πίπτω "caer" (futuro πεσοῦμαι, aoristo ἔπεσον, perfecto πέπτωκα), πλέω "navegar" (aoristo ἔπλευσα), πνέω "soplar" (aoristo ἔπνευσα), ῥέω "fluir" (futuro ῥεύσω), τείνω "desplegar, extender" (futuro τενῶ, aoristo ἔτεινα), τίκτω "dar a luz" (futuro τέξομαι, aoristo ἔτεκον, aoristo pasivo ἐτέχθην), φεύγω "huir" (futuro φεύξομαι, aoristo ἔφυγον, perfecto πέφευγα), χέω "verter, derramar" (futuro χεῶ, aoristo ἔχεα, perfecto κέχυκα).'
    },
    {
      id: 'sec-31-4',
      title: 'Verbos Incoativos - Características',
      content: 'Los verbos incoativos tienen un tema de presente reforzado por el sufijo -σκ (-ἰσκ después de consonante). En los demás tiempos siguen las reglas generales de los verbos temáticos. El nombre "incoativo" (del latín incoare "empezar") indica que este refuerzo expresa el comienzo de una acción o estado. También pueden expresar una acción que se repite con intensidad para lograr un efecto. Algunos llevan reduplicación con ι en el presente (γιγνώσκω), mientras que otros no (εὑρίσκω).'
    },
    {
      id: 'sec-31-5',
      title: 'Verbos Incoativos - Sin Reduplicación',
      content: 'Verbos incoativos sin reduplicación en el presente: ἀναλίσκω "destruir" (futuro ἀναλώσω, aoristo ἀνήλωσα), ἀρέσκω "satisfacer, reparar" (aoristo ἤρεσα), γηράσκω "envejecer" (aoristo ἐγήρασα), διδάσκω "enseñar" (futuro διδάξω, aoristo ἐδίδαξα, aoristo pasivo ἐδιδάχθην), εὑρίσκω "encontrar" (futuro εὑρήσω, aoristo εὗρον, perfecto εὕρηκα, aoristo pasivo εὑρέθην), θνήσκω "morir" (futuro θανοῦμαι, aoristo ἔθανον, perfecto τέθνηκα).'
    },
    {
      id: 'sec-31-6',
      title: 'Verbos Incoativos - Con Reduplicación',
      content: 'Verbos incoativos con reduplicación en el presente: γινώσκω "conocer" (futuro γνώσομαι, aoristo ἔγνων, perfecto ἔγνωκα, perfecto medio ἔγνωσμαι, aoristo pasivo ἐγνώσθην), μιμνήσκω "recordar" (futuro μνήσω, aoristo ἐμνήσα, perfecto medio μέμνημαι, aoristo pasivo ἐμνήσθην), μιμνήσκομαι "acordarse" (futuro μνησθήσομαι).'
    },
    {
      id: 'sec-31-7',
      title: 'Verbos con Refuerzo Vocálico ε/η',
      content: 'Estos verbos tienen el tema de presente reforzado por ε, y el tema de futuro, aoristo y perfecto reforzado por η. Ejemplos: γαμέω "casarse" (aoristo ἐγάμησα, perfecto γεγάμηκα, aoristo pasivo ἐγαμήθην), δοκέω "suponer, opinar, parecer" (aoristo ἔδοξα), ὠθέω "empujar, rechazar" (aoristo ἔωσα), αὐξάνω "aumentar, acrecentar" (futuro αὐξήσω, aoristo ηὔξησα, aoristo pasivo ηὐξήθην), βούλομαι "desear, preferir, querer" (aoristo pasivo ἐβουλήθην), δέομαι "estar necesitado, necesitar" (aoristo pasivo ἐδεήθην), θέλω "querer" (futuro θελήσω, aoristo ἠθέλησα), μέλλω "tener la intención de" (futuro μελλήσω), μελέομαι "cuidar, tener cuidado" (futuro μελήσομαι, aoristo pasivo ἐμελήθην), μέλομαι "cuidarse" (futuro μελήθησομαι, aoristo pasivo ἐμελήθην), οἴχομαι "irse, partir" (perfecto medio οἴχημαι).'
    },
    {
      id: 'sec-31-8',
      title: 'Verbos con Refuerzo Nasal - Tipo n',
      content: 'Verbos con tema de presente reforzado por ν: ἐλαύνω "conducir, empujar" (aoristo ἤλασα, perfecto ἐλήλακα), κάμνω "estar enfermo" (aoristo ἔκαμον), τέμνω "cortar" (aoristo ἔτεμον, perfecto medio τέτμημαι, aoristo pasivo ἐτμήθην), τίνω "pagar, expiar" (futuro τίσω), φθάνω "anticipar(se)" (aoristo ἔφθασα, perfecto ἔφθακα).'
    },
    {
      id: 'sec-31-9',
      title: 'Verbos con Refuerzo Nasal - Tipos ne, in, an',
      content: 'Verbos con tema de presente reforzado por νε: ἱκνέομαι "llegar, arribar" (aoristo ἱκόμην). Verbos con tema de presente reforzado por ιν: βαίνω "ir, andar" (futuro βήσομαι, aoristo ἔβην/ἔβησα, perfecto βέβηκα). Verbos con tema de presente reforzado por αν: αἰσθάνομαι "percibir" (aoristo ᾐσθόμην), ἁμαρτάνω "errar, pecar" (futuro ἁμαρτήσω, aoristo ἥμαρτον, perfecto ἡμάρτηκα), αὐξάνω "aumentar, acrecentar" (futuro αὐξήσω, aoristo ηὔξησα, aoristo pasivo ηὐξήθην), βλαστάνω "crecer" (aoristo ἐβλάστησα, aoristo pasivo ηὐξήθην).'
    },
    {
      id: 'sec-31-10',
      title: 'Verbos con Refuerzo Nasal - Inserción de Nasal',
      content: 'Verbos con tema de presente reforzado por αν y por la inserción de una nasal (ν, μ, γ): λαγχάνω "obtener por suerte" (aoristo ἔλαχον), λαμβάνω "coger, tomar" (futuro λήμψομαι, aoristo ἔλαβον, perfecto εἴληφα, perfecto medio εἴλημμαι, aoristo pasivo ἐλήμφθην), λανθάνω "estar oculto, pasar inadvertido" (aoristo ἔλαθον, perfecto medio λέληθα), μανθάνω "aprender" (aoristo ἔμαθον, perfecto μεμάθηκα), πυνθάνομαι "preguntar, informarse" (aoristo ἐπυθόμην), τυγχάνω "obtener" (aoristo ἔτυχον, perfecto τέτυχα).'
    }
  ],
  vocabulary: [
    { greek: 'αἱρέω', type: 'verbo', spanish: 'coger, elegir, ser elegido', frequency: 56 },
    { greek: 'ἔρχομαι', type: 'verbo', spanish: 'ir, venir, llegar', frequency: 632 },
    { greek: 'ἐσθίω', type: 'verbo', spanish: 'comer', frequency: 34 },
    { greek: 'λέγω', type: 'verbo', spanish: 'decir, hablar', frequency: 2255 },
    { greek: 'ὁράω', type: 'verbo', spanish: 'ver, mirar', frequency: 454 },
    { greek: 'πίνω', type: 'verbo', spanish: 'beber', frequency: 73 },
    { greek: 'τρέχω', type: 'verbo', spanish: 'correr', frequency: 20 },
    { greek: 'φέρω', type: 'verbo', spanish: 'llevar, traer, soportar', frequency: 66 },
    { greek: 'βάλλω', type: 'verbo', spanish: 'echar, lanzar, poner', frequency: 122 },
    { greek: 'γίνομαι', type: 'verbo', spanish: 'llegar a ser, hacerse, suceder', frequency: 669 },
    { greek: 'ἕπομαι', type: 'verbo', spanish: 'seguir', frequency: 20 },
    { greek: 'ἔχω', type: 'verbo', spanish: 'tener, poseer', frequency: 708 },
    { greek: 'καλέω', type: 'verbo', spanish: 'llamar, convocar', frequency: 148 },
    { greek: 'κλαίω', type: 'verbo', spanish: 'llorar, lamentarse', frequency: 40 },
    { greek: 'λείπω', type: 'verbo', spanish: 'salir, abandonar, dejar', frequency: 24 },
    { greek: 'πάσχω', type: 'verbo', spanish: 'sufrir, padecer', frequency: 42 },
    { greek: 'πίπτω', type: 'verbo', spanish: 'caer, caerse', frequency: 90 },
    { greek: 'πλέω', type: 'verbo', spanish: 'navegar, viajar por mar', frequency: 6 },
    { greek: 'πνέω', type: 'verbo', spanish: 'soplar, respirar', frequency: 7 },
    { greek: 'ῥέω', type: 'verbo', spanish: 'fluir, correr', frequency: 1 },
    { greek: 'τείνω', type: 'verbo', spanish: 'desplegar, extender, tender', frequency: 3 },
    { greek: 'τίκτω', type: 'verbo', spanish: 'dar a luz, parir', frequency: 18 },
    { greek: 'φεύγω', type: 'verbo', spanish: 'huir, escapar, evitar', frequency: 29 },
    { greek: 'χέω', type: 'verbo', spanish: 'verter, derramar, echar', frequency: 27 },
    { greek: 'διδάσκω', type: 'verbo', spanish: 'enseñar, instruir', frequency: 97 },
    { greek: 'εὑρίσκω', type: 'verbo', spanish: 'encontrar, hallar, descubrir', frequency: 176 },
    { greek: 'θνήσκω', type: 'verbo', spanish: 'morir, perecer', frequency: 9 },
    { greek: 'γινώσκω', type: 'verbo', spanish: 'conocer, saber, reconocer', frequency: 222 },
    { greek: 'μιμνήσκω', type: 'verbo', spanish: 'recordar, traer a la memoria', frequency: 23 },
    { greek: 'λαμβάνω', type: 'verbo', spanish: 'coger, tomar, recibir', frequency: 258 }
  ],
  exercises: [
  {
    id: 'ex-31-1',
    type: 'flashcard',
    title: 'Verbos Polirrizos - Formas Principales',
    description: 'Memoriza las formas principales de verbos polirrizos',
    items: [
      { id: 'fc-31-1', question: 'ἔρχομαι (presente 1ª sg.)', correctAnswer: 'ἔρχομαι' },
      { id: 'fc-31-2', question: 'ἔρχομαι (futuro 1ª sg.)', correctAnswer: 'εὐλεύσομαι' },
      { id: 'fc-31-3', question: 'ἔρχομαι (aoristo 1ª sg.)', correctAnswer: 'ἦλθον' },
      { id: 'fc-31-4', question: 'λέγω (presente 1ª sg.)', correctAnswer: 'λέγω' },
      { id: 'fc-31-5', question: 'λέγω (futuro 1ª sg.)', correctAnswer: 'ἐρῶ' },
      { id: 'fc-31-6', question: 'λέγω (aoristo 1ª sg.)', correctAnswer: 'εἶπον' },
      { id: 'fc-31-7', question: 'ὁράω (presente 1ª sg.)', correctAnswer: 'ὁράω' },
      { id: 'fc-31-8', question: 'ὁράω (futuro 1ª sg.)', correctAnswer: 'ὄψομαι' },
      { id: 'fc-31-9', question: 'ὁράω (aoristo 1ª sg.)', correctAnswer: 'εἶδον' },
      { id: 'fc-31-10', question: 'ἔχω (presente 1ª sg.)', correctAnswer: 'ἔχω' }
    ]
  },
  {
    id: 'ex-31-2',
    type: 'multiple-choice',
    title: 'Características de Verbos Irregulares',
    description: 'Identifica las características correctas de verbos irregulares',
    items: [
      { id: 'mc-31-1', question: '¿Qué son verbos polirrizos?', options: ['Verbos con una sola raíz', 'Verbos que forman sus tiempos sobre temas de distintas raíces', 'Verbos con reduplicación', 'Verbos defectivos'], correctAnswer: 1, explanation: 'Los verbos polirrizos forman sus tiempos sobre temas procedentes de distintas raíces' },
      { id: 'mc-31-2', question: '¿Cuál es la característica de los verbos incoativos?', options: ['Tienen reduplicación', 'Tienen sufijo -σκ en el presente', 'Tienen refuerzo vocálico', 'Tienen infijo nasal'], correctAnswer: 1, explanation: 'Los verbos incoativos tienen un tema de presente reforzado por el sufijo -σκ' },
      { id: 'mc-31-3', question: '¿Cuál es el significado de "incoativo"?', options: ['Que se repite', 'Que comienza', 'Que termina', 'Que es irregular'], correctAnswer: 1, explanation: 'Incoativo viene del latín "incoare" que significa "empezar"' },
      { id: 'mc-31-4', question: '¿Cuál de estos es un verbo incoativo?', options: ['λέγω', 'ἔρχομαι', 'γινώσκω', 'ὁράω'], correctAnswer: 2, explanation: 'γινώσκω es un verbo incoativo con reduplicación en el presente' },
      { id: 'mc-31-5', question: '¿Cuál es la frecuencia de ἔρχομαι en el NT?', options: ['100 veces', '300 veces', '632 veces', '200 veces'], correctAnswer: 2, explanation: 'ἔρχομαι aparece 632 veces en el NT' },
      { id: 'mc-31-6', question: '¿Cuál es la frecuencia de λέγω en el NT?', options: ['1000 veces', '1500 veces', '2255 veces', '500 veces'], correctAnswer: 2, explanation: 'λέγω aparece 2255 veces en el NT, siendo el verbo más frecuente' }
    ]
  },
  {
    id: 'ex-31-3',
    type: 'true-false',
    title: 'Propiedades de Verbos Irregulares',
    description: 'Determina si las afirmaciones sobre verbos irregulares son verdaderas o falsas',
    items: [
      { id: 'tf-31-1', question: 'Los verbos polirrizos forman sus tiempos sobre temas de distintas raíces', correctAnswer: 'true', explanation: 'Correcto. Los verbos polirrizos tienen temas de diferentes raíces' },
      { id: 'tf-31-2', question: 'Los verbos incoativos tienen el sufijo -σκ en todos los tiempos', correctAnswer: 'false', explanation: 'Incorrecto. El sufijo -σκ solo aparece en el tema de presente' },
      { id: 'tf-31-3', question: 'El verbo γινώσκω tiene reduplicación en el presente', correctAnswer: 'true', explanation: 'Correcto. γινώσκω es un verbo incoativo con reduplicación en el presente' },
      { id: 'tf-31-4', question: 'El verbo εὑρίσκω es un verbo incoativo sin reduplicación', correctAnswer: 'true', explanation: 'Correcto. εὑρίσκω es un verbo incoativo sin reduplicación' },
      { id: 'tf-31-5', question: 'El verbo λαμβάνω tiene infijo nasal en el presente', correctAnswer: 'true', explanation: 'Correcto. λαμβάνω tiene tema de presente reforzado por αν y por inserción de nasal' },
      { id: 'tf-31-6', question: 'Todos los verbos irregulares tienen las mismas características', correctAnswer: 'false', explanation: 'Incorrecto. Los verbos irregulares tienen características muy diferentes' }
    ]
  },
  {
    id: 'ex-31-4',
    type: 'matching',
    title: 'Empareja Verbos Irregulares con sus Significados',
    description: 'Empareja verbos irregulares con sus significados',
    items: [
      { id: 'match-31-1', description: 'Empareja verbos con sus significados', pairs: [
        { left: 'ἔρχομαι', right: 'ir, venir, llegar' },
        { left: 'λέγω', right: 'decir, hablar' },
        { left: 'ὁράω', right: 'ver, mirar' },
        { left: 'ἔχω', right: 'tener, poseer' },
        { left: 'γίνομαι', right: 'llegar a ser, hacerse' },
        { left: 'λαμβάνω', right: 'coger, tomar, recibir' }
      ], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente los significados de los verbos irregulares' }
    ]
  },
  {
    id: 'ex-31-5',
    type: 'fill-blank',
    title: 'Completa Formas de Verbos Irregulares',
    description: 'Completa las formas de verbos irregulares',
    items: [
      { id: 'fb-31-1', question: 'ἔρχομαι (presente 1ª sg.): ἔρ____', options: ['χομαι', 'χεται', 'χονται'], correctAnswer: 0, explanation: 'Presente 1ª sg.: ἔρχομαι' },
      { id: 'fb-31-2', question: 'λέγω (presente 1ª sg.): λέ____', options: ['γω', 'γει', 'γουσι'], correctAnswer: 0, explanation: 'Presente 1ª sg.: λέγω' },
      { id: 'fb-31-3', question: 'ἦλθον (aoristo 1ª sg. de ἔρχομαι): ἦ____', options: ['λθον', 'λθα', 'λθες'], correctAnswer: 0, explanation: 'Aoristo 1ª sg.: ἦλθον' },
      { id: 'fb-31-4', question: 'εἶπον (aoristo 1ª sg. de λέγω): εἶ____', options: ['πον', 'πα', 'πες'], correctAnswer: 0, explanation: 'Aoristo 1ª sg.: εἶπον' },
      { id: 'fb-31-5', question: 'ἔχω (presente 1ª sg.): ἔ____', options: ['χω', 'χει', 'χουσι'], correctAnswer: 0, explanation: 'Presente 1ª sg.: ἔχω' },
      { id: 'fb-31-6', question: 'γινώσκω (presente 1ª sg.): γι____', options: ['νώσκω', 'νώσκει', 'νώσκουσι'], correctAnswer: 0, explanation: 'Presente 1ª sg.: γινώσκω' }
    ]
  },
  {
    id: 'ex-31-6',
    type: 'translation',
    title: 'Traduce Formas de Verbos Irregulares',
    description: 'Traduce las formas de verbos irregulares',
    items: [
      { id: 'tr-31-1', question: 'ἔρχομαι', options: ['vengo', 'venía', 'vendré'], correctAnswer: 0, explanation: 'ἔρχομαι es presente 1ª sg.: "vengo"' },
      { id: 'tr-31-2', question: 'ἦλθον', options: ['vengo', 'venía', 'vine'], correctAnswer: 2, explanation: 'ἦλθον es aoristo 1ª sg.: "vine"' },
      { id: 'tr-31-3', question: 'λέγω', options: ['digo', 'decía', 'diré'], correctAnswer: 0, explanation: 'λέγω es presente 1ª sg.: "digo"' },
      { id: 'tr-31-4', question: 'εἶπον', options: ['digo', 'decía', 'dije'], correctAnswer: 2, explanation: 'εἶπον es aoristo 1ª sg.: "dije"' },
      { id: 'tr-31-5', question: 'ὁράω', options: ['veo', 'veía', 'veré'], correctAnswer: 0, explanation: 'ὁράω es presente 1ª sg.: "veo"' },
      { id: 'tr-31-6', question: 'εἶδον', options: ['veo', 'veía', 'vi'], correctAnswer: 2, explanation: 'εἶδον es aoristo 1ª sg.: "vi"' }
    ]
  },
  {
    id: 'ex-31-7',
    type: 'multiple-choice',
    title: 'Verbos Incoativos Específicos',
    description: 'Identifica propiedades de verbos incoativos',
    items: [
      { id: 'mc-31-7', question: '¿Cuál es la característica del verbo γινώσκω?', options: ['Es un verbo polirrizo', 'Es un verbo incoativo con reduplicación', 'Es un verbo con refuerzo vocálico', 'Es un verbo defectivo'], correctAnswer: 1, explanation: 'γινώσκω es un verbo incoativo con reduplicación en el presente' },
      { id: 'mc-31-8', question: '¿Cuál es la característica del verbo εὑρίσκω?', options: ['Tiene reduplicación', 'No tiene reduplicación', 'Tiene refuerzo vocálico', 'Es un verbo polirrizo'], correctAnswer: 1, explanation: 'εὑρίσκω es un verbo incoativo sin reduplicación' },
      { id: 'mc-31-9', question: '¿Cuál es la frecuencia de γινώσκω en el NT?', options: ['50 veces', '100 veces', '222 veces', '150 veces'], correctAnswer: 2, explanation: 'γινώσκω aparece 222 veces en el NT' },
      { id: 'mc-31-10', question: '¿Cuál es la frecuencia de εὑρίσκω en el NT?', options: ['50 veces', '100 veces', '176 veces', '200 veces'], correctAnswer: 2, explanation: 'εὑρίσκω aparece 176 veces en el NT' }
    ]
  },
  {
    id: 'ex-31-8',
    type: 'true-false',
    title: 'Características de Verbos Incoativos',
    description: 'Determina si las afirmaciones sobre verbos incoativos son verdaderas o falsas',
    items: [
      { id: 'tf-31-7', question: 'El sufijo -σκ aparece en todos los tiempos de verbos incoativos', correctAnswer: 'false', explanation: 'Incorrecto. El sufijo -σκ solo aparece en el tema de presente' },
      { id: 'tf-31-8', question: 'El verbo διδάσκω tiene sufijo -σκ en el presente', correctAnswer: 'true', explanation: 'Correcto. διδάσκω es un verbo incoativo con sufijo -σκ' },
      { id: 'tf-31-9', question: 'El verbo γινώσκω tiene reduplicación en el presente', correctAnswer: 'true', explanation: 'Correcto. γινώσκω tiene reduplicación con γι- en el presente' },
      { id: 'tf-31-10', question: 'Los verbos incoativos son más frecuentes que los polirrizos', correctAnswer: 'false', explanation: 'Incorrecto. Los verbos polirrizos como λέγω y ἔρχομαι son más frecuentes' }
    ]
  },
  {
    id: 'ex-31-9',
    type: 'multiple-choice',
    title: 'Verbos Irregulares en el NT',
    description: 'Identifica características de verbos irregulares en el NT',
    items: [
      { id: 'mc-31-11', question: '¿Cuál es el verbo más frecuente en el NT?', options: ['ἔρχομαι', 'λέγω', 'ἔχω', 'γίνομαι'], correctAnswer: 1, explanation: 'λέγω es el verbo más frecuente en el NT con 2255 apariciones' },
      { id: 'mc-31-12', question: '¿Cuál es el segundo verbo más frecuente en el NT?', options: ['ἔρχομαι', 'ἔχω', 'γίνομαι', 'λαμβάνω'], correctAnswer: 2, explanation: 'γίνομαι es el segundo verbo más frecuente con 669 apariciones' },
      { id: 'mc-31-13', question: '¿Cuál es la frecuencia de ἔχω en el NT?', options: ['500 veces', '600 veces', '708 veces', '800 veces'], correctAnswer: 2, explanation: 'ἔχω aparece 708 veces en el NT' }
    ]
  }
]
};

export const appendixI: Lesson = {
  id: 'appendix-i',
  number: 32,
  title: 'Apéndice I: Cuadros-Resúmenes del Nombre y del Verbo',
  introduction: 'Este apéndice presenta cuadros-resúmenes de los paradigmas nominales y verbales del griego del Nuevo Testamento. Incluye las declinaciones completas (primera, segunda y tercera), los adjetivos, el artículo y los verbos regulares. Estos cuadros sirven como referencia rápida para consolidar el conocimiento de las formas gramaticales fundamentales. Los flashcards de este apéndice permiten practicar el reconocimiento y la memorización de desinencias y paradigmas clave.',
  sections: [
    {
      id: 'sec-ap1-1',
      title: 'Declinaciones del Nombre',
      content: 'El nombre griego se divide en tres declinaciones según el tema del nominativo singular. La primera declinación incluye nombres con temas en -α/-η (principalmente femeninos). La segunda declinación incluye nombres con temas en -ο (principalmente masculinos y neutros). La tercera declinación incluye nombres con temas consonánticos y vocálicos (de todos los géneros). Cada declinación tiene paradigmas específicos para los cinco casos: nominativo, genitivo, dativo, acusativo y vocativo, en singular y plural.'
    },
    {
      id: 'sec-ap1-2',
      title: 'Adjetivos y Artículo',
      content: 'Los adjetivos griegos se clasifican en dos grupos: adjetivos de tres terminaciones (con formas distintas para masculino, femenino y neutro) y adjetivos de dos terminaciones (con la misma forma para masculino y femenino). El artículo definido (ὁ, ἡ, τό) se declina en todos los casos y números, siguiendo patrones similares a los adjetivos. El artículo es fundamental en griego para la determinación y la sintaxis.'
    },
    {
      id: 'sec-ap1-3',
      title: 'Verbos Regulares',
      content: 'Los verbos regulares (temáticos) forman sus tiempos sobre un tema verbal mediante la adición de desinencias primarias (presente, futuro) o secundarias (imperfecto, aoristo). El presente indicativo activo muestra el patrón básico de conjugación. El imperfecto añade el aumento ἐ- al inicio del verbo. Los verbos regulares son la base para entender la conjugación verbal griega, aunque existen muchas irregularidades en los verbos más frecuentes.'
    },
    {
      id: 'sec-ap1-4',
      title: 'Voces, Modos y Tiempos',
      content: 'El verbo griego se caracteriza por su sistema complejo de voces (activa, media, pasiva), modos (indicativo, subjuntivo, optativo, imperativo) y tiempos (presente, imperfecto, futuro, aoristo, perfecto, pluscuamperfecto). Cada combinación de voz, modo y tiempo produce formas distintas con significados específicos. El participio y el infinitivo son formas no finitas que combinan características verbales con funciones nominales o adjetivales.'
    }
  ],
  vocabulary: [
    { greek: 'δόξα', transliteration: 'doxa', meaning: 'gloria, honor', frequency: 'muy frecuente' },
    { greek: 'ἐντολή', transliteration: 'entolē', meaning: 'mandamiento, orden', frequency: 'frecuente' },
    { greek: 'λόγος', transliteration: 'logos', meaning: 'palabra, razón, mensaje', frequency: 'muy frecuente' },
    { greek: 'σάρξ', transliteration: 'sarx', meaning: 'carne, cuerpo', frequency: 'muy frecuente' },
    { greek: 'πούς', transliteration: 'pous', meaning: 'pie', frequency: 'frecuente' },
    { greek: 'ἡγεμών', transliteration: 'hēgemōn', meaning: 'gobernador, líder', frequency: 'frecuente' },
    { greek: 'δίκαιος', transliteration: 'dikaios', meaning: 'justo, recto', frequency: 'muy frecuente' },
    { greek: 'σώφρων', transliteration: 'sōphrōn', meaning: 'prudente, sensato', frequency: 'frecuente' },
    { greek: 'ὁ/ἡ/τό', transliteration: 'ho/hē/to', meaning: 'el/la/lo (artículo definido)', frequency: 'muy frecuente' },
    { greek: 'λύω', transliteration: 'lyō', meaning: 'soltar, desatar, romper', frequency: 'muy frecuente' },
    { greek: 'ἔλυον', transliteration: 'eluon', meaning: 'soltaba, desataba (imperfecto)', frequency: 'frecuente' },
    { greek: 'ἐ- (aumento)', transliteration: 'e-', meaning: 'prefijo de aumento en imperfecto y aoristo', frequency: 'muy frecuente' },
    { greek: 'ἐνέργεια', transliteration: 'energeia', meaning: 'actividad, operación', frequency: 'frecuente' },
    { greek: 'παθητικός', transliteration: 'pathetikos', meaning: 'pasivo', frequency: 'frecuente' },
    { greek: 'μέσος', transliteration: 'mesos', meaning: 'medio', frequency: 'frecuente' },
    { greek: 'ἀκτίς', transliteration: 'aktis', meaning: 'rayo, destello', frequency: 'poco frecuente' },
    { greek: 'ἀγάπη', transliteration: 'agapē', meaning: 'amor', frequency: 'muy frecuente' },
    { greek: 'ἀγαπάω', transliteration: 'agapaō', meaning: 'amar', frequency: 'muy frecuente' },
    { greek: 'ἀγάπητος', transliteration: 'agapētos', meaning: 'amado', frequency: 'frecuente' },
    { greek: 'ἀγαθός', transliteration: 'agathos', meaning: 'bueno', frequency: 'muy frecuente' },
    { greek: 'ἀγαθότης', transliteration: 'agathotēs', meaning: 'bondad', frequency: 'frecuente' },
    { greek: 'ἀγαπητῶς', transliteration: 'agapētōs', meaning: 'amablemente', frequency: 'poco frecuente' },
    { greek: 'ἀγάπη', transliteration: 'agapē', meaning: 'amor (sustantivo)', frequency: 'muy frecuente' },
    { greek: 'ἀγαπάω', transliteration: 'agapaō', meaning: 'amar (verbo)', frequency: 'muy frecuente' },
    { greek: 'ἀγαθοποιέω', transliteration: 'agathopoieō', meaning: 'hacer bien', frequency: 'poco frecuente' },
    { greek: 'ἀγαθοποιός', transliteration: 'agathopoios', meaning: 'que hace bien', frequency: 'poco frecuente' },
    { greek: 'ἀγαθοσύνη', transliteration: 'agathosynē', meaning: 'bondad', frequency: 'frecuente' },
    { greek: 'ἀγαθόν', transliteration: 'agathon', meaning: 'bien (sustantivo)', frequency: 'frecuente' },
    { greek: 'ἀγαθῶς', transliteration: 'agathos', meaning: 'bien (adverbio)', frequency: 'poco frecuente' },
    { greek: 'ἀγαπητός', transliteration: 'agapētos', meaning: 'amado, querido', frequency: 'frecuente' }
  ],
  exercises: [
    {
      id: 'ex-ap1-1',
      type: 'flashcard',
      title: 'Cuadros-Resúmenes: Declinaciones y Paradigmas',
      description: 'Memoriza las desinencias y formas de las declinaciones del nombre griego',
      items: [
        { id: 'fc-ap1-1', question: '¿Cuáles son las tres declinaciones del nombre griego?', correctAnswer: 'Primera (temas en -α/-η), Segunda (temas en -ο) y Tercera (temas consonánticos)' },
        { id: 'fc-ap1-2', question: '¿Cuál es el nominativo singular de la primera declinación en -α?', correctAnswer: 'Termina en -α (p.e. δόξα)' },
        { id: 'fc-ap1-3', question: '¿Cuál es el nominativo singular de la primera declinación en -η?', correctAnswer: 'Termina en -η (p.e. ἐντολή)' },
        { id: 'fc-ap1-4', question: '¿Cuál es el genitivo singular de la primera declinación en -α?', correctAnswer: 'Termina en -ας (p.e. δόξας)' },
        { id: 'fc-ap1-5', question: '¿Cuál es el dativo singular de la primera declinación?', correctAnswer: 'Termina en -ᾳ (p.e. δόξᾳ)' },
        { id: 'fc-ap1-6', question: '¿Cuál es el acusativo singular de la primera declinación en -α?', correctAnswer: 'Termina en -αν (p.e. δόξαν)' },
        { id: 'fc-ap1-7', question: '¿Cuál es el nominativo plural de la primera declinación?', correctAnswer: 'Termina en -αι (p.e. δόξαι)' },
        { id: 'fc-ap1-8', question: '¿Cuál es el nominativo singular de la segunda declinación?', correctAnswer: 'Termina en -ος (p.e. λόγος)' },
        { id: 'fc-ap1-9', question: '¿Cuál es el genitivo singular de la segunda declinación?', correctAnswer: 'Termina en -ου (p.e. λόγου)' },
        { id: 'fc-ap1-10', question: '¿Cuál es el dativo singular de la segunda declinación?', correctAnswer: 'Termina en -ῳ (p.e. λόγῳ)' },
        { id: 'fc-ap1-11', question: '¿Cuál es el acusativo singular de la segunda declinación?', correctAnswer: 'Termina en -ον (p.e. λόγον)' },
        { id: 'fc-ap1-12', question: '¿Cuál es el nominativo plural de la segunda declinación?', correctAnswer: 'Termina en -οι (p.e. λόγοι)' },
        { id: 'fc-ap1-13', question: '¿Cuál es el genitivo plural de la segunda declinación?', correctAnswer: 'Termina en -ων (p.e. λόγων)' },
        { id: 'fc-ap1-14', question: '¿Cuál es el dativo plural de la segunda declinación?', correctAnswer: 'Termina en -οις (p.e. λόγοις)' },
        { id: 'fc-ap1-15', question: '¿Cuál es el acusativo plural de la segunda declinación?', correctAnswer: 'Termina en -ους (p.e. λόγους)' },
        { id: 'fc-ap1-16', question: '¿Cuál es el nominativo singular de la tercera declinación (temas en consonante)?', correctAnswer: 'Varía según el tema (p.e. σάρξ, πούς, ἡγεμών)' },
        { id: 'fc-ap1-17', question: '¿Cuál es el genitivo singular de la tercera declinación?', correctAnswer: 'Termina en -ος (p.e. σαρκός, ποδός)' },
        { id: 'fc-ap1-18', question: '¿Cuál es el dativo singular de la tercera declinación?', correctAnswer: 'Termina en -ι (p.e. σαρκί, ποδί)' },
        { id: 'fc-ap1-19', question: '¿Cuál es el acusativo singular de la tercera declinación?', correctAnswer: 'Termina en -α (p.e. σάρκα, πόδα)' },
        { id: 'fc-ap1-20', question: '¿Cuál es el nominativo plural de la tercera declinación?', correctAnswer: 'Termina en -ες (p.e. σάρκες, πόδες)' },
        { id: 'fc-ap1-21', question: '¿Cuál es el genitivo plural de la tercera declinación?', correctAnswer: 'Termina en -ων (p.e. σαρκῶν, ποδῶν)' },
        { id: 'fc-ap1-22', question: '¿Cuál es el dativo plural de la tercera declinación?', correctAnswer: 'Termina en -σι(ν) (p.e. σαρξί, ποσί)' },
        { id: 'fc-ap1-23', question: '¿Cuál es el acusativo plural de la tercera declinación?', correctAnswer: 'Termina en -ας (p.e. σάρκας, πόδας)' },
        { id: 'fc-ap1-24', question: '¿Cuál es el vocativo singular de la tercera declinación?', correctAnswer: 'Generalmente igual al nominativo (p.e. σάρξ, πούς)' },
        { id: 'fc-ap1-25', question: '¿Cuál es el vocativo plural de la tercera declinación?', correctAnswer: 'Generalmente igual al nominativo plural (p.e. σάρκες, πόδες)' },
        { id: 'fc-ap1-26', question: '¿Cuál es el nominativo singular masculino de adjetivos de tres terminaciones?', correctAnswer: 'Termina en -ος (p.e. δίκαιος)' },
        { id: 'fc-ap1-27', question: '¿Cuál es el nominativo singular femenino de adjetivos de tres terminaciones?', correctAnswer: 'Termina en -α o -η (p.e. δικαία)' },
        { id: 'fc-ap1-28', question: '¿Cuál es el nominativo singular neutro de adjetivos de tres terminaciones?', correctAnswer: 'Termina en -ον (p.e. δίκαιον)' },
        { id: 'fc-ap1-29', question: '¿Cuál es el genitivo singular de adjetivos de tres terminaciones?', correctAnswer: 'Sigue la declinación de segunda y primera (p.e. δικαίου, δικαίας)' },
        { id: 'fc-ap1-30', question: '¿Cuál es el nominativo singular masculino de adjetivos de dos terminaciones?', correctAnswer: 'Termina en -ης o -ος (p.e. σώφρων)' },
        { id: 'fc-ap1-31', question: '¿Cuál es el nominativo singular neutro de adjetivos de dos terminaciones?', correctAnswer: 'Termina en -ον (p.e. σώφρον)' },
        { id: 'fc-ap1-32', question: '¿Cuál es el nominativo plural masculino de adjetivos?', correctAnswer: 'Termina en -οι (p.e. δίκαιοι, σώφρονες)' },
        { id: 'fc-ap1-33', question: '¿Cuál es el nominativo plural femenino de adjetivos?', correctAnswer: 'Termina en -αι (p.e. δίκαιαι)' },
        { id: 'fc-ap1-34', question: '¿Cuál es el nominativo singular masculino del artículo?', correctAnswer: 'ὁ' },
        { id: 'fc-ap1-35', question: '¿Cuál es el nominativo singular femenino del artículo?', correctAnswer: 'ἡ' },
        { id: 'fc-ap1-36', question: '¿Cuál es el nominativo singular neutro del artículo?', correctAnswer: 'τό' },
        { id: 'fc-ap1-37', question: '¿Cuál es el genitivo singular del artículo (todos los géneros)?', correctAnswer: 'τοῦ' },
        { id: 'fc-ap1-38', question: '¿Cuál es la desinencia de la 1ª persona singular del presente indicativo activo?', correctAnswer: '-ω (p.e. λύω)' },
        { id: 'fc-ap1-39', question: '¿Cuál es la desinencia de la 2ª persona singular del presente indicativo activo?', correctAnswer: '-ις (p.e. λύεις)' },
        { id: 'fc-ap1-40', question: '¿Cuál es la desinencia de la 3ª persona singular del presente indicativo activo?', correctAnswer: '-ει (p.e. λύει)' },
        { id: 'fc-ap1-41', question: '¿Cuál es la desinencia de la 1ª persona plural del presente indicativo activo?', correctAnswer: '-ομεν (p.e. λύομεν)' },
        { id: 'fc-ap1-42', question: '¿Cuál es la desinencia de la 2ª persona plural del presente indicativo activo?', correctAnswer: '-ετε (p.e. λύετε)' },
        { id: 'fc-ap1-43', question: '¿Cuál es la desinencia de la 3ª persona plural del presente indicativo activo?', correctAnswer: '-ουσι(ν) (p.e. λύουσι)' },
        { id: 'fc-ap1-44', question: '¿Cuál es el prefijo del imperfecto?', correctAnswer: 'El aumento ἐ- (p.e. ἔλυον)' },
        { id: 'fc-ap1-45', question: '¿Cuál es la desinencia de la 1ª persona singular del imperfecto indicativo activo?', correctAnswer: '-ον (p.e. ἔλυον)' },
        { id: 'fc-ap1-46', question: '¿Cuáles son las tres voces del verbo griego?', correctAnswer: 'Activa, Media y Pasiva' },
        { id: 'fc-ap1-47', question: '¿Cuáles son los modos del verbo griego?', correctAnswer: 'Indicativo, Subjuntivo, Optativo e Imperativo' },
        { id: 'fc-ap1-48', question: '¿Cuáles son los tiempos principales del verbo griego?', correctAnswer: 'Presente, Imperfecto, Futuro, Aoristo, Perfecto y Pluscuamperfecto' },
        { id: 'fc-ap1-49', question: '¿Cuál es la función del participio en griego?', correctAnswer: 'Funciona como adjetivo verbal, combinando características de verbo y adjetivo' },
        { id: 'fc-ap1-50', question: '¿Cuál es la función del infinitivo en griego?', correctAnswer: 'Funciona como sustantivo verbal, expresando la acción sin persona ni número' }
      ]
    }
  ]
};

export const appendixII: Lesson = {
  id: 'appendix-ii',
  number: 33,
  title: 'Apéndice II: Preposiciones Griegas',
  introduction: 'Las preposiciones griegas son palabras invariables que rigen casos específicos y establecen relaciones entre palabras en la oración. Este apéndice presenta las preposiciones más frecuentes en el Nuevo Testamento, sus significados principales, los casos que rigen, y ejemplos de uso. El dominio de las preposiciones es fundamental para la comprensión de la sintaxis griega y la interpretación correcta de textos bíblicos. Cada preposición se presenta con sus variantes, usos figurados y ejemplos del NT.',
  sections: [
    {
      id: 'sec-ap2-1',
      title: 'Preposiciones que Rigen Genitivo',
      content: 'Las preposiciones que rigen genitivo expresan principalmente relaciones de origen, procedencia, separación y posesión. Las más importantes son: ἀπό (desde, de), ἐκ/ἐξ (de, desde), παρά (de, procedente de), περί (acerca de, concerniente a), ὑπό (por, bajo la acción de). Estas preposiciones son muy frecuentes en el NT y tienen usos variados según el contexto.'
    },
    {
      id: 'sec-ap2-2',
      title: 'Preposiciones que Rigen Dativo',
      content: 'Las preposiciones que rigen dativo expresan principalmente relaciones de localización, compañía, instrumento y medio. Las más importantes son: ἐν (en, dentro de), σύν (con, juntamente con), ἐπί (sobre, en, durante). El dativo es el caso de la localización estática, por lo que estas preposiciones indican dónde ocurre la acción.'
    },
    {
      id: 'sec-ap2-3',
      title: 'Preposiciones que Rigen Acusativo',
      content: 'Las preposiciones que rigen acusativo expresan principalmente relaciones de movimiento hacia, dirección y duración. Las más importantes son: εἰς (a, hacia, en), πρός (hacia, a, contra), ἀνά (arriba, por, entre), κατά (según, contra, a lo largo de), διά (a través de, por medio de). El acusativo es el caso del movimiento, por lo que estas preposiciones indican hacia dónde se dirige la acción.'
    },
    {
      id: 'sec-ap2-4',
      title: 'Preposiciones que Rigen Múltiples Casos',
      content: 'Algunas preposiciones pueden regir más de un caso, con significados diferentes según el caso. Las más importantes son: ἐπί (sobre, en, durante), παρά (de, junto a, contra), ὑπό (por, bajo), περί (acerca de, alrededor de). El caso que rige determina el matiz de significado de la preposición, lo que es fundamental para la interpretación correcta del texto.'
    }
  ],
  vocabulary: [
    { greek: 'ἀπό', transliteration: 'apo', meaning: 'desde, de (+ genitivo)', frequency: 'muy frecuente' },
    { greek: 'ἐκ/ἐξ', transliteration: 'ek/ex', meaning: 'de, desde (+ genitivo)', frequency: 'muy frecuente' },
    { greek: 'ἐν', transliteration: 'en', meaning: 'en, dentro de (+ dativo)', frequency: 'muy frecuente' },
    { greek: 'εἰς', transliteration: 'eis', meaning: 'a, hacia (+ acusativo)', frequency: 'muy frecuente' },
    { greek: 'πρός', transliteration: 'pros', meaning: 'hacia, a (+ acusativo)', frequency: 'muy frecuente' },
    { greek: 'κατά', transliteration: 'kata', meaning: 'según, contra (+ acusativo)', frequency: 'muy frecuente' },
    { greek: 'διά', transliteration: 'dia', meaning: 'a través de, por (+ acusativo/genitivo)', frequency: 'muy frecuente' },
    { greek: 'παρά', transliteration: 'para', meaning: 'de, junto a (+ genitivo/dativo/acusativo)', frequency: 'frecuente' },
    { greek: 'σύν', transliteration: 'syn', meaning: 'con, juntamente con (+ dativo)', frequency: 'frecuente' },
    { greek: 'ὑπό', transliteration: 'hypo', meaning: 'por, bajo (+ genitivo/acusativo)', frequency: 'frecuente' },
    { greek: 'ἐπί', transliteration: 'epi', meaning: 'sobre, en (+ genitivo/dativo/acusativo)', frequency: 'muy frecuente' },
    { greek: 'περί', transliteration: 'peri', meaning: 'acerca de, alrededor (+ genitivo/acusativo)', frequency: 'frecuente' },
    { greek: 'ἀνά', transliteration: 'ana', meaning: 'arriba, por (+ acusativo)', frequency: 'poco frecuente' },
    { greek: 'ἀντί', transliteration: 'anti', meaning: 'en lugar de, contra (+ genitivo)', frequency: 'poco frecuente' },
    { greek: 'ἐξ', transliteration: 'ex', meaning: 'de, desde (+ genitivo)', frequency: 'muy frecuente' },
    { greek: 'μετά', transliteration: 'meta', meaning: 'con, después de (+ genitivo/acusativo)', frequency: 'frecuente' },
    { greek: 'ὑπέρ', transliteration: 'hyper', meaning: 'sobre, por (+ genitivo/acusativo)', frequency: 'frecuente' },
    { greek: 'πρό', transliteration: 'pro', meaning: 'antes de, delante de (+ genitivo)', frequency: 'poco frecuente' },
    { greek: 'ἀμφί', transliteration: 'amphi', meaning: 'alrededor de, ambos lados (+ acusativo)', frequency: 'poco frecuente' },
    { greek: 'ἐνώπιον', transliteration: 'enopion', meaning: 'delante de, ante (+ genitivo)', frequency: 'frecuente' }
  ],
  exercises: [
    {
      id: 'ex-ap2-1',
      type: 'flashcard',
      title: 'Preposiciones Griegas y sus Significados',
      description: 'Memoriza las preposiciones griegas, los casos que rigen y sus significados principales',
      items: [
        { id: 'fc-ap2-1', question: '¿Cuál es el significado de ἀπό?', correctAnswer: 'Desde, de (+ genitivo) - indica origen o procedencia' },
        { id: 'fc-ap2-2', question: '¿Cuál es el significado de ἐκ/ἐξ?', correctAnswer: 'De, desde (+ genitivo) - indica salida o procedencia' },
        { id: 'fc-ap2-3', question: '¿Cuál es el significado de ἐν?', correctAnswer: 'En, dentro de (+ dativo) - indica localización' },
        { id: 'fc-ap2-4', question: '¿Cuál es el significado de εἰς?', correctAnswer: 'A, hacia (+ acusativo) - indica movimiento hacia' },
        { id: 'fc-ap2-5', question: '¿Cuál es el significado de πρός?', correctAnswer: 'Hacia, a (+ acusativo) - indica dirección o movimiento' },
        { id: 'fc-ap2-6', question: '¿Cuál es el significado de κατά?', correctAnswer: 'Según, contra (+ acusativo) - indica conformidad o oposición' },
        { id: 'fc-ap2-7', question: '¿Cuál es el significado de διά?', correctAnswer: 'A través de, por (+ acusativo/genitivo) - indica medio o causa' },
        { id: 'fc-ap2-8', question: '¿Cuál es el significado de παρά?', correctAnswer: 'De, junto a (+ genitivo/dativo/acusativo) - indica procedencia o proximidad' },
        { id: 'fc-ap2-9', question: '¿Cuál es el significado de σύν?', correctAnswer: 'Con, juntamente con (+ dativo) - indica compañía' },
        { id: 'fc-ap2-10', question: '¿Cuál es el significado de ὑπό?', correctAnswer: 'Por, bajo (+ genitivo/acusativo) - indica agente o subordinación' },
        { id: 'fc-ap2-11', question: '¿Cuál es el significado de ἐπί?', correctAnswer: 'Sobre, en (+ genitivo/dativo/acusativo) - indica localización o duración' },
        { id: 'fc-ap2-12', question: '¿Cuál es el significado de περί?', correctAnswer: 'Acerca de, alrededor (+ genitivo/acusativo) - indica tema o circunstancia' },
        { id: 'fc-ap2-13', question: '¿Cuál es el significado de ἀνά?', correctAnswer: 'Arriba, por (+ acusativo) - indica distribución o movimiento ascendente' },
        { id: 'fc-ap2-14', question: '¿Cuál es el significado de ἀντί?', correctAnswer: 'En lugar de, contra (+ genitivo) - indica sustitución u oposición' },
        { id: 'fc-ap2-15', question: '¿Cuál es el significado de μετά?', correctAnswer: 'Con, después de (+ genitivo/acusativo) - indica compañía o posterioridad' },
        { id: 'fc-ap2-16', question: '¿Cuál es el significado de ὑπέρ?', correctAnswer: 'Sobre, por (+ genitivo/acusativo) - indica superioridad o beneficio' },
        { id: 'fc-ap2-17', question: '¿Cuál es el significado de πρό?', correctAnswer: 'Antes de, delante de (+ genitivo) - indica prioridad o anterioridad' },
        { id: 'fc-ap2-18', question: '¿Cuál es el significado de ἀμφί?', correctAnswer: 'Alrededor de, ambos lados (+ acusativo) - indica distribución' },
        { id: 'fc-ap2-19', question: '¿Cuál es el significado de ἐνώπιον?', correctAnswer: 'Delante de, ante (+ genitivo) - indica presencia o testimonio' },
        { id: 'fc-ap2-20', question: '¿Cuál es la diferencia entre ἀπό y ἐκ?', correctAnswer: 'Ambas significan "de", pero ἐκ enfatiza más la salida desde dentro' },
        { id: 'fc-ap2-21', question: '¿Qué caso rige ἀπό?', correctAnswer: 'Genitivo' },
        { id: 'fc-ap2-22', question: '¿Qué caso rige ἐν?', correctAnswer: 'Dativo' },
        { id: 'fc-ap2-23', question: '¿Qué caso rige εἰς?', correctAnswer: 'Acusativo' },
        { id: 'fc-ap2-24', question: '¿Qué casos puede regir ἐπί?', correctAnswer: 'Genitivo, dativo y acusativo, según el significado' },
        { id: 'fc-ap2-25', question: '¿Qué casos puede regir παρά?', correctAnswer: 'Genitivo, dativo y acusativo, según el significado' },
        { id: 'fc-ap2-26', question: '¿Cuál es la preposición más frecuente en el NT?', correctAnswer: 'ἐν (en) - aparece miles de veces' },
        { id: 'fc-ap2-27', question: '¿Cuál es la segunda preposición más frecuente?', correctAnswer: 'εἰς (a, hacia) - muy frecuente en el NT' },
        { id: 'fc-ap2-28', question: '¿Cuál es la función sintáctica de las preposiciones?', correctAnswer: 'Establecer relaciones entre palabras y regir casos específicos' },
        { id: 'fc-ap2-29', question: '¿Cuáles son las preposiciones que rigen genitivo?', correctAnswer: 'ἀπό, ἐκ/ἐξ, παρά, περί, ὑπό, y otras' },
        { id: 'fc-ap2-30', question: '¿Cuáles son las preposiciones que rigen dativo?', correctAnswer: 'ἐν, σύν, ἐπί, y otras' },
        { id: 'fc-ap2-31', question: '¿Cuáles son las preposiciones que rigen acusativo?', correctAnswer: 'εἰς, πρός, ἀνά, κατά, διά, y otras' },
        { id: 'fc-ap2-32', question: '¿Qué significa ἐν cuando rige dativo?', correctAnswer: 'En, dentro de - indica localización estática' },
        { id: 'fc-ap2-33', question: '¿Qué significa εἰς cuando rige acusativo?', correctAnswer: 'A, hacia - indica movimiento dinámico' },
        { id: 'fc-ap2-34', question: '¿Cuál es la diferencia entre ἐν y εἰς?', correctAnswer: 'ἐν indica "estar en" (localización), εἰς indica "ir a" (movimiento)' },
        { id: 'fc-ap2-35', question: '¿Qué significa κατά con acusativo?', correctAnswer: 'Según, a lo largo de, contra - indica conformidad o distribución' },
        { id: 'fc-ap2-36', question: '¿Qué significa διά con acusativo?', correctAnswer: 'A través de, por medio de - indica el medio o instrumento' },
        { id: 'fc-ap2-37', question: '¿Qué significa διά con genitivo?', correctAnswer: 'Por, a causa de - indica la causa o razón' },
        { id: 'fc-ap2-38', question: '¿Cuál es el significado de ὑπό con genitivo?', correctAnswer: 'Por - indica el agente de una acción pasiva' },
        { id: 'fc-ap2-39', question: '¿Cuál es el significado de ὑπό con acusativo?', correctAnswer: 'Bajo - indica subordinación o localización' },
        { id: 'fc-ap2-40', question: '¿Qué significa ὑπέρ con genitivo?', correctAnswer: 'Por, en favor de - indica beneficio o representación' },
        { id: 'fc-ap2-41', question: '¿Qué significa ὑπέρ con acusativo?', correctAnswer: 'Sobre, más allá de - indica superioridad' },
        { id: 'fc-ap2-42', question: '¿Cuál es el significado de μετά con genitivo?', correctAnswer: 'Con - indica compañía' },
        { id: 'fc-ap2-43', question: '¿Cuál es el significado de μετά con acusativo?', correctAnswer: 'Después de - indica posterioridad temporal' },
        { id: 'fc-ap2-44', question: '¿Qué significa πρός con acusativo?', correctAnswer: 'Hacia, a, contra - indica dirección o relación' },
        { id: 'fc-ap2-45', question: '¿Qué significa περί con genitivo?', correctAnswer: 'Acerca de, concerniente a - indica tema' },
        { id: 'fc-ap2-46', question: '¿Qué significa περί con acusativo?', correctAnswer: 'Alrededor de - indica localización circular' },
        { id: 'fc-ap2-47', question: '¿Cuál es la función de σύν?', correctAnswer: 'Indicar compañía o asociación con otra persona o cosa' },
        { id: 'fc-ap2-48', question: '¿Cuál es la función de ἀντί?', correctAnswer: 'Indicar sustitución o cambio de una cosa por otra' },
        { id: 'fc-ap2-49', question: '¿Cuál es la función de πρό?', correctAnswer: 'Indicar anterioridad temporal o espacial' },
        { id: 'fc-ap2-50', question: '¿Cuáles son las preposiciones más importantes para la interpretación del NT?', correctAnswer: 'ἐν, εἰς, ἀπό, κατά, διά, πρός, ἐπί, ὑπό, περί' }
      ]
    }
  ]
};

export const lessons21To33 = {
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
  lesson26,
  lesson27,
  lesson28,
  lesson29,
  lesson30,
  lesson31,
  appendixI,
  appendixII,
};
