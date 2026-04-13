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

export const lesson11: Lesson = {
  id: 'lesson-11',
  number: 11,
  title: 'Futuro de Indicativo del Verbo λύω y del Verbo εἰμί',
  introduction: `El futuro de indicativo es un tiempo primario que expresa una acción futura. En el verbo εἰμί, el futuro consta de tema verbal, característica temporal y desinencias primarias medio-pasivas. Es frecuente en griego encontrar futuros en voz media para presentes en voz activa. En el verbo λύω, el futuro se forma con el tema verbal, la característica temporal, las vocales de unión y las desinencias primarias. En el NT el futuro se utiliza casi únicamente en el modo indicativo. El reconocimiento correcto de las formas futuras es esencial para la traducción precisa de textos neotestamentarios.`,

  sections: [
    {
      id: 'sec-11-1',
      title: '11.1 Futuro del Verbo εἰμί',
      content: `El futuro del verbo εἰmí consta de tema verbal, característica temporal y desinencias primarias medio-pasivas. Es frecuente en griego encontrar futuros en voz media para presentes en voz activa, como en este caso. En la 2ª persona del singular, la -ο de la desinencia -σαι cae entre vocales y estas se contraen (ἔ-σ-ε-σαι > ἔ-σ-η o ἔ-σ-ει). El futuro del verbo εἰμί es fundamental para expresar predicciones y afirmaciones futuras en el NT.`,
      subsections: [
        {
          title: 'Paradigma del Futuro de εἰμί',
          content: 'Conjugación completa del futuro de εἰμί',
          items: [
            '1ª sg. ἔ-σ-ο-μαι "seré"',
            '2ª sg. ἔ-σ-η (εἰ) "serás"',
            '3ª sg. ἔ-σ-ται "será"',
            '1ª pl. ἔ-σ-ό-μεθα "seremos"',
            '2ª pl. ἔ-σ-ε-σθε "seréis"',
            '3ª pl. ἔ-σ-ο-νται "serán"'
          ]
        },
        {
          title: 'Características del Futuro de εἰμί',
          content: 'Propiedades morfológicas del futuro',
          items: [
            'Tema verbal + característica temporal + desinencias primarias medio-pasivas',
            'Desinencias primarias medio-pasivas: -μαι, -η, -ται, -μεθα, -σθε, -νται',
            'Contracción en 2ª sg.: ἔ-σ-ε-σαι > ἔ-σ-η o ἔ-σ-ει',
            'Frecuente encontrar futuros en voz media para presentes activos',
            'Fundamental para expresar predicciones futuras'
          ]
        }
      ]
    },
    {
      id: 'sec-11-2',
      title: '11.2 Futuro del Verbo λύω',
      content: `El futuro del verbo λύω se forma con el tema verbal, la característica temporal, las vocales de unión y las desinencias primarias. Es igual al presente activo, pero entre el tema y la vocal de unión está intercalada la característica temporal -σ-. La 3ª persona del plural proviene de *λύ-σ-ο-ντι, donde la τ se asibila, la ν desaparece ante la silbante y la ο alarga en ου por compensación. En el NT el futuro se utiliza casi únicamente en el modo indicativo.`,
      subsections: [
        {
          title: 'Paradigma del Futuro de λύω',
          content: 'Conjugación completa del futuro de λύω',
          items: [
            '1ª sg. λύ-σ-ω "desataré"',
            '2ª sg. λύ-σ-ει-ς "desatarás"',
            '3ª sg. λύ-σ-ει "desatará"',
            '1ª pl. λύ-σ-ο-μεν "desataremos"',
            '2ª pl. λύ-σ-ε-τε "desataréis"',
            '3ª pl. λύ-σ-ουσι(ν) "desatarán"'
          ]
        },
        {
          title: 'Características del Futuro de λύω',
          content: 'Propiedades morfológicas del futuro',
          items: [
            'Tema verbal + característica temporal -σ- + vocales de unión + desinencias primarias',
            'Similar al presente activo pero con -σ- intercalada',
            'Desinencias primarias activas: -ω, -ει-ς, -ει, -ο-μεν, -ε-τε, -ουσι(ν)',
            '3ª pl. de *λύ-σ-ο-ντι: τ se asibila, ν desaparece, ο alarga en ου',
            'En el NT se utiliza casi únicamente en modo indicativo'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'δεικνύω',
      type: 'verbo',
      spanish: 'demostrar, mostrar',
      frequency: 33
    },
    {
      greek: 'ἐνδύω',
      type: 'verbo',
      spanish: 'vestir(se)',
      frequency: 27
    },
    {
      greek: 'ἰσχύω',
      type: 'verbo',
      spanish: 'ser fuerte, poder',
      frequency: 28
    },
    {
      greek: 'προφητεύω',
      type: 'verbo',
      spanish: 'profetizar',
      frequency: 28
    },
    {
      greek: 'ὀμνύω',
      type: 'verbo',
      spanish: 'jurar',
      frequency: 26
    },
    {
      greek: 'δουλεύω',
      type: 'verbo',
      spanish: 'servir, obedecer',
      frequency: 25
    },
    {
      greek: 'κελεύω',
      type: 'verbo',
      spanish: 'ordenar, permitir',
      frequency: 25
    },
    {
      greek: 'κωλύω',
      type: 'verbo',
      spanish: 'impedir, prohibir',
      frequency: 23
    }
  ],

  exercises: [
    {
      id: 'ex-11-1',
      type: 'flashcard',
      title: 'Flashcards: Análisis del Futuro de eἱmί y λύω',
      description: 'Traduce y analiza las formas del futuro de indicativo. Identifica característica temporal y desinencias.',
      items: [
        {
          id: 'fc-11-1',
          question: 'ἔ-σ-ο-μαι',
          options: ['seré'],
          correctAnswer: 0,
          explanation: 'ἔ-σ-ο-μαι = seré (fut. 1ª sg. de eἱmί: tema ἔσ- + característica -σ- + vocal -ο- + desinencia -μαι medio-pasiva)'
        },
        {
          id: 'fc-11-2',
          question: 'ἔ-σ-ται',
          options: ['será'],
          correctAnswer: 0,
          explanation: 'ἔ-σ-ται = será (fut. 3ª sg. de eἱmί: tema ἔσ- + característica -σ- + desinencia -ται medio-pasiva)'
        },
        {
          id: 'fc-11-3',
          question: 'λύ-σ-ω',
          options: ['desataré'],
          correctAnswer: 0,
          explanation: 'λύ-σ-ω = desataré (fut. 1ª sg. de λύω: tema λυ- + característica -σ- + vocal -ω- + desinencia -ω primaria activa)'
        },
        {
          id: 'fc-11-4',
          question: 'λύ-σ-ει',
          options: ['desatará'],
          correctAnswer: 0,
          explanation: 'λύ-σ-ει = desatará (fut. 3ª sg. de λύω: tema λυ- + característica -σ- + vocal -ε- + desinencia -ι primaria activa)'
        },
        {
          id: 'fc-11-5',
          question: 'λύ-σ-ουσι(ν)',
          options: ['desatarán'],
          correctAnswer: 0,
          explanation: 'λύ-σ-ουσι(ν) = desatarán (fut. 3ª pl. de λύω: tema λυ- + característica -σ- + vocal -ο- + desinencia -υσι(ν) primaria activa)'
        }
      ]
    },
    {
      id: 'ex-11-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Futuro de Indicativo',
      description: 'Identifica correctamente las formas del futuro.',
      items: [
        {
          id: 'mc-11-1',
          question: '¿Cuál es la característica temporal del futuro?',
          options: ['-ε-', '-σ-', '-κ-'],
          correctAnswer: 1,
          explanation: 'La característica temporal del futuro es -σ-.'
        },
        {
          id: 'mc-11-2',
          question: '¿Qué tipo de desinencias usa el futuro de εἰμί?',
          options: ['primarias activas', 'primarias medio-pasivas', 'secundarias activas'],
          correctAnswer: 1,
          explanation: 'El futuro de εἰμί usa desinencias primarias medio-pasivas.'
        },
        {
          id: 'mc-11-3',
          question: '¿Cómo se forma el futuro de λύω?',
          options: ['tema + desinencia', 'tema + característica + vocales + desinencias', 'tema + aumento'],
          correctAnswer: 1,
          explanation: 'El futuro de λύω se forma con tema + característica temporal + vocales de unión + desinencias.'
        },
        {
          id: 'mc-11-4',
          question: '¿Qué ocurre en la 3ª pl. de λύω (*λύ-σ-ο-ντι)?',
          options: ['La τ se asibila', 'La ν desaparece', 'La ο alarga en ου'],
          correctAnswer: 1,
          explanation: 'En la 3ª pl. de λύω, la ν desaparece ante la silbante.'
        },
        {
          id: 'mc-11-5',
          question: '¿En qué modo se utiliza principalmente el futuro en el NT?',
          options: ['subjuntivo', 'imperativo', 'indicativo'],
          correctAnswer: 2,
          explanation: 'En el NT el futuro se utiliza casi únicamente en modo indicativo.'
        }
      ]
    },
    {
      id: 'ex-11-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Futuro de Indicativo',
      description: 'Determina si las afirmaciones sobre el futuro son verdaderas o falsas.',
      items: [
        {
          id: 'tf-11-1',
          question: 'El futuro es un tiempo primario.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El futuro es un tiempo primario que no tiene aumento.'
        },
        {
          id: 'tf-11-2',
          question: 'El futuro de εἰμί usa desinencias activas.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El futuro de εἰμί usa desinencias primarias medio-pasivas.'
        },
        {
          id: 'tf-11-3',
          question: 'La característica temporal del futuro es -σ-.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La característica temporal del futuro es -σ-.'
        },
        {
          id: 'tf-11-4',
          question: 'El futuro de λύω es igual al presente activo.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El futuro de λύω es igual al presente activo pero con -σ- intercalada.'
        },
        {
          id: 'tf-11-5',
          question: 'En el NT el futuro se utiliza en todos los modos.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. En el NT el futuro se utiliza casi únicamente en modo indicativo.'
        }
      ]
    },
    {
      id: 'ex-11-4',
      type: 'matching',
      title: 'Columnas Paralelas: Formas del Futuro',
      description: 'Empareja cada forma con su traducción correcta.',
      items: [
        {
          id: 'match-11-1',
          description: 'Empareja las formas del futuro con sus traducciones',
          pairs: [
            { left: 'ἔ-σ-ο-μαι', right: 'seré (1ª sg.)' },
            { left: 'ἔ-σ-ται', right: 'será (3ª sg.)' },
            { left: 'ἔ-σ-ο-νται', right: 'serán (3ª pl.)' },
            { left: 'λύ-σ-ω', right: 'desataré (1ª sg.)' },
            { left: 'λύ-σ-ει', right: 'desatará (3ª sg.)' },
            { left: 'λύ-σ-ουσι(ν)', right: 'desatarán (3ª pl.)' },
            { left: 'λύ-σ-ο-μεν', right: 'desataremos (1ª pl.)' },
            { left: 'ἔ-σ-ό-μεθα', right: 'seremos (1ª pl.)' }
          ],
          correctAnswer: 0,
          explanation: 'Cada forma del futuro corresponde a una persona y número específicos.'
        }
      ]
    },
    {
      id: 'ex-11-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Futuro de Indicativo',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-11-1',
          question: 'La característica temporal del futuro es _____.',
          options: ['-ε-', '-σ-', '-κ-'],
          correctAnswer: 1,
          explanation: 'La característica temporal del futuro es -σ-.'
        },
        {
          id: 'fb-11-2',
          question: 'El futuro de εἰμί usa desinencias primarias _____.',
          options: ['activas', 'medio-pasivas', 'secundarias'],
          correctAnswer: 1,
          explanation: 'El futuro de εἰμί usa desinencias primarias medio-pasivas.'
        },
        {
          id: 'fb-11-3',
          question: 'En la 3ª pl. de λύω (*λύ-σ-ο-ντι), la ν _____ ante la silbante.',
          options: ['se asibila', 'desaparece', 'alarga'],
          correctAnswer: 1,
          explanation: 'En la 3ª pl. de λύω, la ν desaparece ante la silbante.'
        },
        {
          id: 'fb-11-4',
          question: 'En el NT el futuro se utiliza casi únicamente en modo _____.',
          options: ['subjuntivo', 'imperativo', 'indicativo'],
          correctAnswer: 2,
          explanation: 'En el NT el futuro se utiliza casi únicamente en modo indicativo.'
        },
        {
          id: 'fb-11-5',
          question: 'El futuro es un tiempo _____ que no tiene aumento.',
          options: ['secundario', 'primario', 'histórico'],
          correctAnswer: 1,
          explanation: 'El futuro es un tiempo primario que no tiene aumento.'
        }
      ]
    },
    {
      id: 'ex-11-6',
      type: 'translation',
      title: 'Traducción: Futuro de Indicativo',
      description: 'Traduce las formas del futuro al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-11-1',
          question: 'ἔ-σ-ο-μαι',
          options: ['soy', 'seré', 'era'],
          correctAnswer: 1,
          explanation: 'ἔ-σ-ο-μαι significa "seré" (futuro de εἰμί, 1ª sg.).'
        },
        {
          id: 'tr-11-2',
          question: 'λύ-σ-ω',
          options: ['desato', 'desataré', 'desataba'],
          correctAnswer: 1,
          explanation: 'λύ-σ-ω significa "desataré" (futuro de λύω, 1ª sg.).'
        },
        {
          id: 'tr-11-3',
          question: 'ἔ-σ-ται',
          options: ['es', 'será', 'era'],
          correctAnswer: 1,
          explanation: 'ἔ-σ-ται significa "será" (futuro de εἰμί, 3ª sg.).'
        },
        {
          id: 'tr-11-4',
          question: 'λύ-σ-ουσι(ν)',
          options: ['desatan', 'desatarán', 'desataban'],
          correctAnswer: 1,
          explanation: 'λύ-σ-ουσι(ν) significa "desatarán" (futuro de λύω, 3ª pl.).'
        },
        {
          id: 'tr-11-5',
          question: 'ἔ-σ-ο-νται',
          options: ['son', 'serán', 'eran'],
          correctAnswer: 1,
          explanation: 'ἔ-σ-ο-νται significa "serán" (futuro de εἰμί, 3ª pl.).'
        }
      ]
    }
  ]
};

export const lesson12: Lesson = {
  id: 'lesson-12',
  number: 12,
  title: 'Aoristo, Perfecto y Pluscuamperfecto de Indicativo: El Aumento y la Reduplicación',
  introduction: `El aoristo, perfecto y pluscuamperfecto son tiempos secundarios que expresan acciones pasadas con diferentes aspectos. El aoristo consta de aumento, tema verbal, característica temporal -σα y desinencias secundarias. El perfecto consta de reduplicación, tema verbal, característica temporal -κ y desinencias primarias. El pluscuamperfecto consta de aumento, reduplicación, tema verbal, característica temporal -κει y desinencias secundarias. El aumento puede ser silábico (para verbos que comienzan con consonante) o temporal (para verbos que comienzan con vocal). La reduplicación es el distintivo de los tiempos de perfecto en todos sus modos.`,

  sections: [
    {
      id: 'sec-12-1',
      title: '12.1 Paradigmas Básicos: Aoristo, Perfecto y Pluscuamperfecto',
      content: `El aoristo, perfecto y pluscuamperfecto presentan estructuras morfológicas distintas. El aoristo consta de aumento, tema verbal, característica temporal -σα y desinencias secundarias. La 1ª persona del singular es ἔ-λυ-σν en lugar de ἔ-λυ-σα por vocalización de la ν. El perfecto consta de reduplicación, tema verbal, característica temporal -κ y desinencias primarias. El pluscuamperfecto consta de aumento, reduplicación, tema verbal, característica temporal -κει y desinencias secundarias.`,
      subsections: [
        {
          title: 'Paradigma del Aoristo',
          content: 'Conjugación completa del aoristo de λύω',
          items: [
            '1ª sg. ἔ-λυ-σα "desaté"',
            '2ª sg. ἔ-λυ-σα-ς "desataste"',
            '3ª sg. ἔ-λυ-σε(ν) "desató"',
            '1ª pl. ἔ-λυ-σα-μεν "desatamos"',
            '2ª pl. ἔ-λυ-σα-τε "desatasteis"',
            '3ª pl. ἔ-λυ-σα-ν "desataron"'
          ]
        },
        {
          title: 'Paradigma del Perfecto',
          content: 'Conjugación completa del perfecto de λύω',
          items: [
            '1ª sg. λέ-λυ-κα "he desatado"',
            '2ª sg. λέ-λυ-κα-ς "has desatado"',
            '3ª sg. λέ-λυ-κε(ν) "ha desatado"',
            '1ª pl. λέ-λυ-κα-μεν "hemos desatado"',
            '2ª pl. λέ-λυ-κα-τε "habéis desatado"',
            '3ª pl. λέ-λυ-κα-σι "han desatado"'
          ]
        },
        {
          title: 'Paradigma del Pluscuamperfecto',
          content: 'Conjugación completa del pluscuamperfecto de λύω',
          items: [
            '1ª sg. ἐ-λε-λύ-κει-ν "había desatado"',
            '2ª sg. ἐ-λε-λύ-κει-ς "habías desatado"',
            '3ª sg. ἐ-λε-λύ-κει(ν) "había desatado"',
            '1ª pl. ἐ-λε-λύ-κει-μεν "habíamos desatado"',
            '2ª pl. ἐ-λε-λύ-κει-τε "habíais desatado"',
            '3ª pl. ἐ-λε-λύ-κει-σαν "habían desatado"'
          ]
        }
      ]
    },
    {
      id: 'sec-12-2',
      title: '12.2 El Aumento: Silábico y Temporal',
      content: `El aumento es una característica que indica tiempo pasado. Se utiliza en el imperfecto, aoristo y pluscuamperfecto. El aumento silábico lo llevan los verbos que empiezan por consonante y consiste en una vocal ε que se antepone a la consonante inicial. El aumento temporal lo llevan los verbos que empiezan por vocal y consiste en alargar la vocal inicial del verbo. Nota importante: el aumento solo se da en modo indicativo; la reduplicación, en cambio, en todos los modos.`,
      subsections: [
        {
          title: 'Aumento Silábico',
          content: 'Aplicado a verbos que comienzan con consonante',
          items: [
            'Consiste en una vocal ε antepuesta a la consonante inicial',
            'Ejemplo: ἔ-λυ-ο-ν (imperfecto de λύω)',
            'Nota: después del aumento silábico, la consonante ρ se duplica (ἔρριπτον de ῥίπτω)',
            'Nota: el aumento solo se da en modo indicativo'
          ]
        },
        {
          title: 'Aumento Temporal',
          content: 'Aplicado a verbos que comienzan con vocal',
          items: [
            'α se alarga en η',
            'ε se alarga en η',
            'ο se alarga en ω',
            'αι se convierte en η',
            'ει se convierte en η',
            'αυ en ηυ, ευ en ηυ',
            'ου no cambia',
            'Verbos que empiezan por η, ω, ου no sufren aumento'
          ]
        },
        {
          title: 'Aumento en Verbos Compuestos',
          content: 'Colocación del aumento en verbos compuestos',
          items: [
            'El aumento se coloca entre la preposición y el tema del verbo',
            'Ejemplo: προς-βάλλω "echar", imperfecto προς-έ-βαλλον',
            'Excepción: las preposiciones περί, πρό mantienen su vocal final',
            'Algunos verbos compuestos toman el aumento antes de la preposición',
            'Otros tienen doble aumento (ὀράω, ἀνέχομαι, ἀνοίγω, ἀποκαθίστημι)'
          ]
        }
      ]
    },
    {
      id: 'sec-12-3',
      title: '12.3 La Reduplicación: Reglas Especiales',
      content: `La reduplicación es el distintivo de los tiempos de perfecto (pretérito perfecto y pluscuamperfecto) en todos sus modos. Consiste en anteponer al tema verbal la consonante inicial del mismo seguida de -ε. Las reglas de reduplicación varían según la consonante inicial del verbo y presentan excepciones importantes para aspiradas, vocales, consonantes dobles y combinaciones especiales.`,
      subsections: [
        {
          title: 'Reduplicación de Aspiradas',
          content: 'Regla 1: Cuando el verbo empieza por una aspirada (φ, θ, χ)',
          items: [
            'Se reduplica no esta, sino su correspondiente consonante sorda (π, τ, κ)',
            'Se produce una disimilación de aspiradas',
            'φιλέω "amar" → perfecto πε-φίληκα',
            'θύω "sacrificar" → perfecto τέ-θυκα',
            'χορηγέω "suministrar" → perfecto κε-χόρηκα'
          ]
        },
        {
          title: 'Reduplicación de Vocales y Consonantes Especiales',
          content: 'Regla 2: Cuando un verbo empieza por vocal, ρ, consonante doble o dos consonantes',
          items: [
            'Toman aumento en vez de reduplicación',
            'αἱρέω "escoger" → perfecto ἦ-ρηκα',
            'ζητέω "buscar" → perfecto ἐ-ζήτηκα',
            'σταυρόω "crucificar" → perfecto ἐ-σταυρώκα',
            'ῥαντίζω "purificar" → perfecto ἐ-ρράντικα'
          ]
        },
        {
          title: 'Reduplicación de Oclusiva + Líquida',
          content: 'Regla 3: Si un verbo comienza por una oclusiva seguida de una líquida',
          items: [
            'Se reduplica solamente la oclusiva',
            'βλέπω "mirar" → perfecto βέ-βληφα',
            'γράφω "escribir" → perfecto γέ-γραφα',
            'Los verbos que empiezan por γν toman aumento silábico en lugar de reduplicación'
          ]
        },
        {
          title: 'Reduplicación Ática',
          content: 'Regla 4: Algunos verbos que comienzan por -α, -ε, -ο seguidas de consonante',
          items: [
            'Toman la reduplicación ática',
            'Consiste en repetir delante de la raíz con la vocal alargada, la primera vocal seguida de la primera consonante',
            'ἀκούω "oír" → perfecto ἀκ-ήκοα',
            'δλυμι "perecer" (tema ὸλ-) → perfecto ὸλ-ωλα',
            'El aumento se mantiene en todos los modos cuando hace las veces de la reduplicación'
          ]
        },
        {
          title: 'Reduplicación en Verbos Compuestos',
          content: 'Regla 5: En verbos compuestos',
          items: [
            'La reduplicación se coloca entre la preposición y el verbo simple',
            'Igual que el aumento',
            'παρα-καλέω "invocar" → perfecto παρα-κέκληκα'
          ]
        }
      ]
    },
    {
      id: 'sec-12-4',
      title: '12.4 Recapitulación del Modo Indicativo del Verbo λύω',
      content: `Resumen completo de todos los tiempos del modo indicativo del verbo λύω, mostrando la estructura morfológica de presente, imperfecto y futuro. Este resumen proporciona una visión integral de cómo se construyen los diferentes tiempos y cómo se aplican las reglas de aumento y reduplicación en el contexto del verbo más común en el griego del Nuevo Testamento.`,
      subsections: [
        {
          title: 'Presente, Imperfecto y Futuro de λύω',
          content: 'Conjugación completa del indicativo',
          items: [
            'PRESENTE (yo desato): λύ-ω, λύ-ει-ς, λύ-ει, λύ-ο-μεν, λύ-ε-τε, λύ-ουσι(ν)',
            'IMPERFECTO (yo desataba): ἔ-λυ-ο-ν, ἔ-λυ-ε-ς, ἔ-λυ-ε(ν), ἔ-λυ-ο-μεν, ἔ-λυ-ε-τε, ἔ-λυ-ο-ν',
            'FUTURO (yo desataré): λύ-σ-ω, λύ-σ-ει-ς, λύ-σ-ει'
          ]
        }
      ]
    }
  ],

  vocabulary: [
    {
      greek: 'λύω',
      type: 'verbo',
      spanish: 'desatar, soltar',
      frequency: 42
    },
    {
      greek: 'φιλέω',
      type: 'verbo',
      spanish: 'amar',
      frequency: 25
    },
    {
      greek: 'θύω',
      type: 'verbo',
      spanish: 'sacrificar',
      frequency: 28
    },
    {
      greek: 'χορηγέω',
      type: 'verbo',
      spanish: 'suministrar',
      frequency: 2
    },
    {
      greek: 'αἱρέω',
      type: 'verbo',
      spanish: 'escoger',
      frequency: 56
    },
    {
      greek: 'ζητέω',
      type: 'verbo',
      spanish: 'buscar',
      frequency: 34
    },
    {
      greek: 'σταυρόω',
      type: 'verbo',
      spanish: 'crucificar',
      frequency: 46
    },
    {
      greek: 'ῥαντίζω',
      type: 'verbo',
      spanish: 'purificar',
      frequency: 4
    }
  ],

  exercises: [
    {
      id: 'ex-12-1',
      type: 'flashcard',
      title: 'Flashcards: Traducción de Aoristo, Perfecto y Pluscuamperfecto',
      description: 'Traduce las formas verbales. Muestra la forma griega en el frente y la traducción en el reverso.',
      items: [
        {
          id: 'fc-12-1',
          question: 'ἔ-λυ-σα',
          options: ['desaté'],
          correctAnswer: 0,
          explanation: 'ἔ-λυ-σα = desaté (aoristo de λύω, 1ª sg.: aumento ἔ- + tema λυ- + característica temporal -σα + desinencia -ν vocalizada)'
        },
        {
          id: 'fc-12-2',
          question: 'λέ-λυ-κα',
          options: ['he desatado'],
          correctAnswer: 0,
          explanation: 'λέ-λυ-κα = he desatado (perfecto de λύω, 1ª sg.: reduplicación λέ- + tema λυ- + característica temporal -κ + desinencia -α)'
        },
        {
          id: 'fc-12-3',
          question: 'ἐ-λε-λύ-κει-ν',
          options: ['había desatado'],
          correctAnswer: 0,
          explanation: 'ἐ-λε-λύ-κει-ν = había desatado (pluscuamperfecto de λύω, 1ª sg.: aumento ἐ- + reduplicación λε- + tema λύ- + característica temporal -κει + desinencia -ν)'
        },
        {
          id: 'fc-12-4',
          question: 'ἔ-λυ-σα-ν',
          options: ['desataron'],
          correctAnswer: 0,
          explanation: 'ἔ-λυ-σα-ν = desataron (aoristo de λύω, 3ª pl.: aumento ἔ- + tema λυ- + característica temporal -σα + desinencia -ν)'
        },
        {
          id: 'fc-12-5',
          question: 'λέ-λυ-κα-σι',
          options: ['han desatado'],
          correctAnswer: 0,
          explanation: 'λέ-λυ-κα-σι = han desatado (perfecto de λύω, 3ª pl.: reduplicación λέ- + tema λυ- + característica temporal -κ + desinencia -α + -σι)'
        }
      ]
    },
    {
      id: 'ex-12-2',
      type: 'multiple-choice',
      title: 'Selección Múltiple: Aumento y Reduplicación',
      description: 'Identifica correctamente las formas con aumento y reduplicación.',
      items: [
        {
          id: 'mc-12-1',
          question: '¿Qué es el aumento?',
          options: ['una consonante inicial duplicada', 'una característica que indica tiempo pasado', 'una vocal alargada'],
          correctAnswer: 1,
          explanation: 'El aumento es una característica que indica tiempo pasado en el imperfecto, aoristo y pluscuamperfecto.'
        },
        {
          id: 'mc-12-2',
          question: '¿Cuál es el aumento silábico?',
          options: ['una vocal ε antepuesta', 'una vocal alargada', 'una consonante duplicada'],
          correctAnswer: 0,
          explanation: 'El aumento silábico es una vocal ε que se antepone a la consonante inicial del verbo.'
        },
        {
          id: 'mc-12-3',
          question: '¿Qué es la reduplicación?',
          options: ['duplicar la consonante inicial', 'anteponer consonante inicial + ε al tema', 'alargar la vocal inicial'],
          correctAnswer: 1,
          explanation: 'La reduplicación consiste en anteponer al tema verbal la consonante inicial seguida de -ε.'
        },
        {
          id: 'mc-12-4',
          question: '¿En qué tiempos se utiliza la reduplicación?',
          options: ['presente e imperfecto', 'perfecto y pluscuamperfecto', 'futuro y aoristo'],
          correctAnswer: 1,
          explanation: 'La reduplicación es el distintivo de los tiempos de perfecto en todos sus modos.'
        },
        {
          id: 'mc-12-5',
          question: '¿Qué ocurre con las aspiradas en la reduplicación?',
          options: ['se duplican', 'se convierten en sordas', 'desaparecen'],
          correctAnswer: 1,
          explanation: 'Cuando el verbo empieza por una aspirada (φ, θ, χ), se reduplica su correspondiente consonante sorda (π, τ, κ).'
        }
      ]
    },
    {
      id: 'ex-12-3',
      type: 'true-false',
      title: 'Verdadero o Falso: Aumento y Reduplicación',
      description: 'Determina si las afirmaciones son verdaderas o falsas.',
      items: [
        {
          id: 'tf-12-1',
          question: 'El aumento solo se da en modo indicativo.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El aumento solo se da en modo indicativo; la reduplicación, en cambio, en todos los modos.'
        },
        {
          id: 'tf-12-2',
          question: 'El aoristo es un tiempo primario.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El aoristo es un tiempo secundario que tiene aumento.'
        },
        {
          id: 'tf-12-3',
          question: 'El perfecto tiene aumento.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 1,
          explanation: 'Falso. El perfecto no tiene aumento; tiene reduplicación.'
        },
        {
          id: 'tf-12-4',
          question: 'La reduplicación se utiliza en todos los modos del perfecto.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. La reduplicación es el distintivo de los tiempos de perfecto en todos sus modos.'
        },
        {
          id: 'tf-12-5',
          question: 'El pluscuamperfecto tiene aumento y reduplicación.',
          options: ['Verdadero', 'Falso'],
          correctAnswer: 0,
          explanation: 'Verdadero. El pluscuamperfecto consta de aumento, reduplicación, tema verbal, característica temporal -κει y desinencias secundarias.'
        }
      ]
    },
    {
      id: 'ex-12-4',
      type: 'matching',
      title: 'Columnas Paralelas: Formas del Aoristo, Perfecto y Pluscuamperfecto',
      description: 'Empareja cada forma con su traducción correcta.',
      items: [
        {
          id: 'match-12-1',
          description: 'Empareja las formas con sus traducciones',
          pairs: [
            { left: 'ἔ-λυ-σα', right: 'desaté (aor. 1ª sg.)' },
            { left: 'λέ-λυ-κα', right: 'he desatado (perf. 1ª sg.)' },
            { left: 'ἐ-λε-λύ-κει-ν', right: 'había desatado (plusc. 1ª sg.)' },
            { left: 'ἔ-λυ-σα-ν', right: 'desataron (aor. 3ª pl.)' },
            { left: 'λέ-λυ-κα-σι', right: 'han desatado (perf. 3ª pl.)' },
            { left: 'ἐ-λε-λύ-κει-σαν', right: 'habían desatado (plusc. 3ª pl.)' },
            { left: 'πε-φίληκα', right: 'he amado (perf. 1ª sg.)' },
            { left: 'τέ-θυκα', right: 'he sacrificado (perf. 1ª sg.)' }
          ],
          correctAnswer: 0,
          explanation: 'Cada forma corresponde a un tiempo, persona y número específicos.'
        }
      ]
    },
    {
      id: 'ex-12-5',
      type: 'fill-blank',
      title: 'Completar Oraciones: Aumento y Reduplicación',
      description: 'Completa las oraciones con los términos correctos.',
      items: [
        {
          id: 'fb-12-1',
          question: 'El aumento es una característica que indica tiempo _____.',
          options: ['presente', 'futuro', 'pasado'],
          correctAnswer: 2,
          explanation: 'El aumento es una característica que indica tiempo pasado.'
        },
        {
          id: 'fb-12-2',
          question: 'El aumento _____ lo llevan los verbos que empiezan por consonante.',
          options: ['temporal', 'silábico', 'ático'],
          correctAnswer: 1,
          explanation: 'El aumento silábico lo llevan los verbos que empiezan por consonante.'
        },
        {
          id: 'fb-12-3',
          question: 'La reduplicación es el distintivo de los tiempos de _____.',
          options: ['aoristo', 'perfecto', 'imperfecto'],
          correctAnswer: 1,
          explanation: 'La reduplicación es el distintivo de los tiempos de perfecto en todos sus modos.'
        },
        {
          id: 'fb-12-4',
          question: 'Cuando el verbo empieza por una aspirada, se reduplica su consonante _____ correspondiente.',
          options: ['sorda', 'sonora', 'aspirada'],
          correctAnswer: 0,
          explanation: 'Cuando el verbo empieza por una aspirada (φ, θ, χ), se reduplica su correspondiente consonante sorda (π, τ, κ).'
        },
        {
          id: 'fb-12-5',
          question: 'El aumento solo se da en modo _____.',
          options: ['subjuntivo', 'imperativo', 'indicativo'],
          correctAnswer: 2,
          explanation: 'El aumento solo se da en modo indicativo; la reduplicación, en cambio, en todos los modos.'
        }
      ]
    },
    {
      id: 'ex-12-6',
      type: 'translation',
      title: 'Traducción: Aoristo, Perfecto y Pluscuamperfecto',
      description: 'Traduce las formas al español. Selecciona la traducción correcta.',
      items: [
        {
          id: 'tr-12-1',
          question: 'ἔ-λυ-σα',
          options: ['desato', 'desaté', 'desataré'],
          correctAnswer: 1,
          explanation: 'ἔ-λυ-σα significa "desaté" (aoristo de λύω, 1ª sg.).'
        },
        {
          id: 'tr-12-2',
          question: 'λέ-λυ-κα',
          options: ['desato', 'he desatado', 'desataré'],
          correctAnswer: 1,
          explanation: 'λέ-λυ-κα significa "he desatado" (perfecto de λύω, 1ª sg.).'
        },
        {
          id: 'tr-12-3',
          question: 'ἐ-λε-λύ-κει-ν',
          options: ['desataba', 'había desatado', 'desataría'],
          correctAnswer: 1,
          explanation: 'ἐ-λε-λύ-κει-ν significa "había desatado" (pluscuamperfecto de λύω, 1ª sg.).'
        },
        {
          id: 'tr-12-4',
          question: 'πε-φίληκα',
          options: ['amo', 'he amado', 'amaré'],
          correctAnswer: 1,
          explanation: 'πε-φίληκα significa "he amado" (perfecto de φιλέω, 1ª sg.).'
        },
        {
          id: 'tr-12-5',
          question: 'τέ-θυκα',
          options: ['sacrifico', 'he sacrificado', 'sacrificaré'],
          correctAnswer: 1,
          explanation: 'τέ-θυκα significa "he sacrificado" (perfecto de θύω, 1ª sg.).'
        }
      ]
    }
  ]
};

export const lesson13: Lesson = {
  id: 'lesson-13',
  number: 13,
  title: 'Pronombres Personales, Posesivos y Demostrativos',
  introduction: 'Los pronombres son palabras que sustituyen al nombre. En griego existen pronombres personales (yo, tú, él), pronombres-adjetivos posesivos (mío, tuyo, suyo) y pronombres-adjetivos demostrativos (este, ese, aquel).',
  sections: [{ id: 'sec-13-1', title: '13.1 Pronombres Personales', content: 'Los pronombres personales se refieren a las personas del discurso.', subsections: [{ title: 'Formas', content: 'Paradigmas', items: ['ἐγώ (yo)', 'σύ (tú)', 'αὐτός (él)'] }] }, { id: 'sec-13-2', title: '13.2 Posesivos', content: 'Los posesivos indican pertenencia.', subsections: [{ title: 'Formas', content: 'Adjetivos', items: ['ἐμός (mío)', 'σός (tuyo)', 'αὐτοῦ (suyo)'] }] }, { id: 'sec-13-3', title: '13.3 Demostrativos', content: 'Los demostrativos indican posición relativa.', subsections: [{ title: 'Formas', content: 'Demostrativos', items: ['οὗτος (este)', 'ἐκεῖνος (aquel)', 'ὅδε (este de aquí)'] }] }],
  vocabulary: [{ greek: 'ἐγώ', type: 'pronombre', spanish: 'yo', frequency: 865 }, { greek: 'σύ', type: 'pronombre', spanish: 'tú', frequency: 699 }, { greek: 'αὐτός', type: 'pronombre', spanish: 'él', frequency: 5597 }, { greek: 'ἐμός', type: 'posesivo', spanish: 'mío', frequency: 345 }, { greek: 'σός', type: 'posesivo', spanish: 'tuyo', frequency: 270 }, { greek: 'οὗτος', type: 'demostrativo', spanish: 'este', frequency: 1387 }, { greek: 'ἐκεῖνος', type: 'demostrativo', spanish: 'aquel', frequency: 265 }, { greek: 'ὅδε', type: 'demostrativo', spanish: 'este', frequency: 10 }],
  exercises: [{ id: 'ex-13-1', type: 'flashcard', title: 'Flashcards', description: 'Traduce pronombres', items: [{ id: 'fc-13-1', question: 'ἐγώ', options: ['yo'], correctAnswer: 0, explanation: 'yo' }, { id: 'fc-13-2', question: 'σύ', options: ['tú'], correctAnswer: 0, explanation: 'tú' }, { id: 'fc-13-3', question: 'αὐτός', options: ['él'], correctAnswer: 0, explanation: 'él' }, { id: 'fc-13-4', question: 'οὗτος', options: ['este'], correctAnswer: 0, explanation: 'este' }, { id: 'fc-13-5', question: 'ἐκεῖνος', options: ['aquel'], correctAnswer: 0, explanation: 'aquel' }] }, { id: 'ex-13-2', type: 'multiple-choice', title: 'Selección', description: 'Identifica pronombres', items: [{ id: 'mc-13-1', question: '¿Cuál es 1ª persona?', options: ['σύ', 'ἐγώ', 'αὐτός'], correctAnswer: 1, explanation: 'ἐγώ' }, { id: 'mc-13-2', question: '¿Posesivo mío?', options: ['σοῦ', 'ἐμοῦ', 'αὐτοῦ'], correctAnswer: 1, explanation: 'ἐμός' }, { id: 'mc-13-3', question: '¿Demostrativo este?', options: ['ἐκεῖνος', 'οὗτος', 'ὅδε'], correctAnswer: 1, explanation: 'οὗτος' }, { id: 'mc-13-4', question: '¿Demostrativo aquel?', options: ['οὗτος', 'ἐκεῖνος', 'ὅδε'], correctAnswer: 1, explanation: 'ἐκεῖνος' }, { id: 'mc-13-5', question: '¿Tipo αὐτός?', options: ['adjetivo', 'pronombre', 'verbo'], correctAnswer: 1, explanation: 'pronombre' }] }, { id: 'ex-13-3', type: 'true-false', title: 'V/F', description: 'Verdadero o falso', items: [{ id: 'tf-13-1', question: 'ἐγώ es 2ª persona', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso' }, { id: 'tf-13-2', question: 'Posesivos se declinan', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero' }, { id: 'tf-13-3', question: 'αὐτός es personal', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero' }, { id: 'tf-13-4', question: 'οὗτος=aquel', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso' }, { id: 'tf-13-5', question: 'ἐμός=mío', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero' }] }, { id: 'ex-13-4', type: 'matching', title: 'Matching', description: 'Empareja', items: [{ id: 'match-13-1', description: 'Empareja', pairs: [{ left: 'ἐγώ', right: 'yo' }, { left: 'σύ', right: 'tú' }, { left: 'αὐτός', right: 'él' }, { left: 'οὗτος', right: 'este' }, { left: 'ἐκεῖνος', right: 'aquel' }, { left: 'ἐμός', right: 'mío' }, { left: 'σός', right: 'tuyo' }, { left: 'ὅδε', right: 'este' }], correctAnswer: 0, explanation: 'Correcto' }] }, { id: 'ex-13-5', type: 'fill-blank', title: 'Completar', description: 'Completa', items: [{ id: 'fb-13-1', question: '_____ soy', options: ['σύ', 'ἐγώ', 'αὐτός'], correctAnswer: 1, explanation: 'ἐγώ' }, { id: 'fb-13-2', question: '_____ es', options: ['οὗτος', 'ἐκεῖνος', 'αὐτός'], correctAnswer: 2, explanation: 'αὐτός' }, { id: 'fb-13-3', question: 'Casa _____', options: ['ἐμή', 'σή', 'αὐτοῦ'], correctAnswer: 0, explanation: 'ἐμή' }, { id: 'fb-13-4', question: '_____ día', options: ['οὗτος', 'ἐκεῖνος', 'ὅδε'], correctAnswer: 0, explanation: 'οὗτος' }, { id: 'fb-13-5', question: '_____ Señor', options: ['ἐμοῦ', 'σοῦ', 'αὐτοῦ'], correctAnswer: 2, explanation: 'αὐτοῦ' }] }, { id: 'ex-13-6', type: 'translation', title: 'Traducción', description: 'Traduce', items: [{ id: 'tr-13-1', question: 'ἐγώ εἰμι', options: ['Tú eres', 'Yo soy', 'Ellos son'], correctAnswer: 1, explanation: 'Yo soy' }, { id: 'tr-13-2', question: 'οὗτος λόγος', options: ['Ese', 'Este', 'Aquel'], correctAnswer: 1, explanation: 'Este' }, { id: 'tr-13-3', question: 'αὐτοῦ ἀγάπη', options: ['Mi', 'Tu', 'Su'], correctAnswer: 2, explanation: 'Su' }, { id: 'tr-13-4', question: 'ἐμός πατήρ', options: ['Tu', 'Mi', 'Su'], correctAnswer: 1, explanation: 'Mi' }, { id: 'tr-13-5', question: 'ἡμεῖς', options: ['Vosotros', 'Nosotros', 'Ellos'], correctAnswer: 1, explanation: 'Nosotros' }] }]
};

export const lesson14: Lesson = {
  id: 'lesson-14',
  number: 14,
  title: 'Adjetivos Numerales',
  introduction: 'Los adjetivos numerales expresan cantidad, orden o multiplicidad. En griego existen números cardinales (uno, dos, tres), ordinales (primero, segundo, tercero) y adverbios multiplicativos (una vez, dos veces). El conocimiento de estos numerales es esencial para comprender referencias numéricas en el Nuevo Testamento.',
  sections: [{ id: 'sec-14-1', title: '14.1 Números Cardinales', content: 'Los cardinales expresan cantidad. En griego, los números del 1 al 4 se declinan como adjetivos, mientras que del 5 en adelante son indeclinables.', subsections: [{ title: 'Cardinales Principales', content: 'Números del 1 al 10', items: ['εἷς (uno)', 'δύο (dos)', 'τρεῖς (tres)', 'τέσσαρες (cuatro)', 'πέντε (cinco)', 'ἕξ (seis)', 'ἑπτά (siete)', 'ὀκτώ (ocho)', 'ἐννέα (nueve)', 'δέκα (diez)'] }] }, { id: 'sec-14-2', title: '14.2 Números Ordinales', content: 'Los ordinales expresan orden o posición. Se declinan como adjetivos de la primera y segunda declinación.', subsections: [{ title: 'Ordinales Principales', content: 'Números ordinales del 1 al 10', items: ['πρῶτος (primero)', 'δεύτερος (segundo)', 'τρίτος (tercero)', 'τέταρτος (cuarto)', 'πέμπτος (quinto)', 'ἕκτος (sexto)', 'ἕβδομος (séptimo)', 'ὄγδοος (octavo)', 'ἔνατος (noveno)', 'δέκατος (décimo)'] }] }, { id: 'sec-14-3', title: '14.3 Adverbios Multiplicativos', content: 'Los multiplicativos expresan repetición o multiplicidad. Son adverbios que derivan de los cardinales.', subsections: [{ title: 'Multiplicativos Principales', content: 'Adverbios de repetición', items: ['ἅπαξ (una vez)', 'δίς (dos veces)', 'τρίς (tres veces)', 'τετράκις (cuatro veces)', 'πεντάκις (cinco veces)', 'ἑξάκις (seis veces)', 'ἑπτάκις (siete veces)', 'ὀκτάκις (ocho veces)'] }] }],
  vocabulary: [{ greek: 'εἷς', type: 'cardinal', spanish: 'uno', frequency: 344 }, { greek: 'δύο', type: 'cardinal', spanish: 'dos', frequency: 135 }, { greek: 'τρεῖς', type: 'cardinal', spanish: 'tres', frequency: 70 }, { greek: 'τέσσαρες', type: 'cardinal', spanish: 'cuatro', frequency: 41 }, { greek: 'πέντε', type: 'cardinal', spanish: 'cinco', frequency: 37 }, { greek: 'πρῶτος', type: 'ordinal', spanish: 'primero', frequency: 155 }, { greek: 'δεύτερος', type: 'ordinal', spanish: 'segundo', frequency: 43 }, { greek: 'τρίτος', type: 'ordinal', spanish: 'tercero', frequency: 12 }],
  exercises: [{ id: 'ex-14-1', type: 'flashcard', title: 'Flashcards', description: 'Traduce números', items: [{ id: 'fc-14-1', question: 'εἷς', options: ['uno'], correctAnswer: 0, explanation: 'uno' }, { id: 'fc-14-2', question: 'δύο', options: ['dos'], correctAnswer: 0, explanation: 'dos' }, { id: 'fc-14-3', question: 'τρεῖς', options: ['tres'], correctAnswer: 0, explanation: 'tres' }, { id: 'fc-14-4', question: 'πρῶτος', options: ['primero'], correctAnswer: 0, explanation: 'primero' }, { id: 'fc-14-5', question: 'δεύτερος', options: ['segundo'], correctAnswer: 0, explanation: 'segundo' }] }, { id: 'ex-14-2', type: 'multiple-choice', title: 'Selección', description: 'Identifica números', items: [{ id: 'mc-14-1', question: '¿Cuál es el cardinal para dos?', options: ['τρεῖς', 'δύο', 'εἷς'], correctAnswer: 1, explanation: 'δύο' }, { id: 'mc-14-2', question: '¿Cuál es el ordinal primero?', options: ['δεύτερος', 'πρῶτος', 'τρίτος'], correctAnswer: 1, explanation: 'πρῶτος' }, { id: 'mc-14-3', question: '¿Cuál es el multiplicativo dos veces?', options: ['ἅπαξ', 'δίς', 'τρίς'], correctAnswer: 1, explanation: 'δίς' }, { id: 'mc-14-4', question: '¿Cuál es el cardinal cinco?', options: ['τέσσαρες', 'πέντε', 'ἕξ'], correctAnswer: 1, explanation: 'πέντε' }, { id: 'mc-14-5', question: '¿Cuál es el ordinal tercero?', options: ['δεύτερος', 'τέταρτος', 'τρίτος'], correctAnswer: 2, explanation: 'τρίτος' }] }, { id: 'ex-14-3', type: 'true-false', title: 'V/F', description: 'Verdadero o falso', items: [{ id: 'tf-14-1', question: 'εἷς se declina como adjetivo', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero' }, { id: 'tf-14-2', question: 'πέντε es indeclinable', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero' }, { id: 'tf-14-3', question: 'πρῶτος es un cardinal', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso, es ordinal' }, { id: 'tf-14-4', question: 'ἅπαξ significa una vez', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero' }, { id: 'tf-14-5', question: 'δίς es un adjetivo', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso, es adverbio' }] }, { id: 'ex-14-4', type: 'matching', title: 'Matching', description: 'Empareja', items: [{ id: 'match-14-1', description: 'Empareja', pairs: [{ left: 'εἷς', right: 'uno' }, { left: 'δύο', right: 'dos' }, { left: 'τρεῖς', right: 'tres' }, { left: 'πρῶτος', right: 'primero' }, { left: 'δεύτερος', right: 'segundo' }, { left: 'ἅπαξ', right: 'una vez' }, { left: 'δίς', right: 'dos veces' }, { left: 'τρίς', right: 'tres veces' }], correctAnswer: 0, explanation: 'Correcto' }] }, { id: 'ex-14-5', type: 'fill-blank', title: 'Completar', description: 'Completa', items: [{ id: 'fb-14-1', question: '_____ discípulo', options: ['δύο', 'εἷς', 'τρεῖς'], correctAnswer: 1, explanation: 'εἷς' }, { id: 'fb-14-2', question: '_____ día', options: ['τέταρτος', 'δεύτερος', 'τρίτος'], correctAnswer: 1, explanation: 'δεύτερος' }, { id: 'fb-14-3', question: '_____ veces', options: ['ἅπαξ', 'δίς', 'τρίς'], correctAnswer: 0, explanation: 'ἅπαξ' }, { id: 'fb-14-4', question: '_____ hombres', options: ['εἷς', 'δύο', 'τρεῖς'], correctAnswer: 2, explanation: 'τρεῖς' }, { id: 'fb-14-5', question: '_____ vez', options: ['δίς', 'ἅπαξ', 'τρίς'], correctAnswer: 1, explanation: 'ἅπαξ' }] }, { id: 'ex-14-6', type: 'translation', title: 'Traducción', description: 'Traduce', items: [{ id: 'tr-14-1', question: 'εἷς Θεός', options: ['Dos dioses', 'Un dios', 'Tres dioses'], correctAnswer: 1, explanation: 'Un dios' }, { id: 'tr-14-2', question: 'δύο μαθηταί', options: ['Un discípulo', 'Dos discípulos', 'Tres discípulos'], correctAnswer: 1, explanation: 'Dos discípulos' }, { id: 'tr-14-3', question: 'πρῶτος ἀπόστολος', options: ['Segundo apóstol', 'Primer apóstol', 'Tercer apóstol'], correctAnswer: 1, explanation: 'Primer apóstol' }, { id: 'tr-14-4', question: 'τρίτος ἡμέρα', options: ['Segundo día', 'Cuarto día', 'Tercer día'], correctAnswer: 2, explanation: 'Tercer día' }, { id: 'tr-14-5', question: 'ἅπαξ ἐγένετο', options: ['Dos veces ocurrió', 'Una vez ocurrió', 'Tres veces ocurrió'], correctAnswer: 1, explanation: 'Una vez ocurrió' }] }]
};

export const lesson15: Lesson = {
  id: 'lesson-15',
  number: 15,
  title: 'Declinación Atemática - 3ª Declinación',
  introduction: 'La 3ª declinación, llamada "atemática" porque carece de vocal de unión entre la raíz y la desinencia, es la declinación más compleja del griego. Se subdivide según la letra final del tema: temas en consonante (oclusivas, nasales, líquidas, sibilantes), temas en diptongo y temas en vocal. En esta lección estudiamos los temas en consonante, que son los más frecuentes en el Nuevo Testamento.',
  sections: [{ id: 'sec-15-1', title: '15.1 Características Generales de la 3ª Declinación', content: 'La 3ª declinación se caracteriza por la ausencia de vocal de unión (atemática) entre la raíz y la desinencia. Esta característica la diferencia de las 1ª y 2ª declinaciones. Los sustantivos de la 3ª declinación pueden ser masculinos, femeninos o neutros, y presentan cambios significativos en el nominativo singular.', subsections: [{ title: 'Subdivisiones por Tipo de Tema', content: 'La 3ª declinación se clasifica según la naturaleza de la consonante o vocal final del tema.', items: ['Temas en oclusiva (β, π, φ, γ, κ, χ, δ, τ, θ)', 'Temas en nasal (μ, ν)', 'Temas en líquida (λ, ρ)', 'Temas en sibilante (σ)', 'Temas en diptongo (αι, ει, ου)', 'Temas en vocal (α, ε, ι, ο, υ)'] }] }, { id: 'sec-15-2', title: '15.2 Temas en Oclusiva Labial (β, π, φ)', content: 'Los temas en oclusiva labial forman sustantivos que pueden ser animados (masculinos/femeninos) o inanimados (neutros). El nominativo singular presenta alargamiento predesinencial o añade -ς.', subsections: [{ title: 'Ejemplo: λαῖλαψ, λαῖλαπος (tempestad)', content: 'Paradigma completo de sustantivo animado en oclusiva labial.', items: ['Sg. Nom. λαῖλαψ | Pl. λαῖλαπες', 'Sg. Voc. λαῖλαψ | Pl. λαῖλαπες', 'Sg. Acus. λαῖλαπα | Pl. λαῖλαπας', 'Sg. Gen. λαῖλαπος | Pl. λαῖλάπων', 'Sg. Dat. λαῖλαπι | Pl. λαῖλαψι(ν)'] }, { title: 'Ejemplo: φύλαξ, φύλακος (guardián)', content: 'Paradigma de sustantivo animado en oclusiva gutural.', items: ['Sg. Nom. φύλαξ | Pl. φύλακες', 'Sg. Voc. φύλαξ | Pl. φύλακες', 'Sg. Acus. φύλακα | Pl. φύλακας', 'Sg. Gen. φύλακος | Pl. φύλακων', 'Sg. Dat. φύλακι | Pl. φύλαξι(ν)'] }] }, { id: 'sec-15-3', title: '15.3 Temas en Oclusiva Dental (δ, τ, θ)', content: 'Los temas en dental pueden ser animados (con -ς en nominativo) o inanimados (sin marca en nominativo). Las dentales desaparecen ante -ς y no pueden ser finales de palabra.', subsections: [{ title: 'Ejemplo: πατρίς, πατρίδος (patria) - Animado', content: 'Sustantivo femenino animado en dental.', items: ['Sg. Nom. πατρίς | Pl. πατρίδες', 'Sg. Voc. πατρίς | Pl. πατρίδες', 'Sg. Acus. πατρίδα | Pl. πατρίδας', 'Sg. Gen. πατρίδος | Pl. πατρίδων', 'Sg. Dat. πατρίδι | Pl. πατρίσι(ν)'] }, { title: 'Ejemplo: ὄνομα, ὀνόματος (nombre) - Inanimado', content: 'Sustantivo neutro inanimado en dental. El nominativo, vocativo y acusativo singular son idénticos.', items: ['Sg. Nom. ὄνομα | Pl. ὀνόματα', 'Sg. Voc. ὄνομα | Pl. ὀνόματα', 'Sg. Acus. ὄνομα | Pl. ὀνόματα', 'Sg. Gen. ὀνόματος | Pl. ὀνόματων', 'Sg. Dat. ὀνόματι | Pl. ὀνόμασι(ν)'] }] }, { id: 'sec-15-4', title: '15.4 Temas en Nasal (ν, μ)', content: 'Los temas en nasal presentan nominativo alargado (con vocal larga) o nominativo sigmático. El genitivo plural puede presentar -ων o -ων según la vocal precedente.', subsections: [{ title: 'Nominativo Alargado: ποιμήν, ποιμένος (pastor)', content: 'La vocal final del tema se alarga en nominativo singular.', items: ['Sg. Nom. ποιμήν | Pl. ποιμένες', 'Sg. Voc. ποιμήν | Pl. ποιμένες', 'Sg. Acus. ποιμένα | Pl. ποιμένας', 'Sg. Gen. ποιμένος | Pl. ποιμένων', 'Sg. Dat. ποιμένι | Pl. ποιμέσι(ν)'] }, { title: 'Nominativo Sigmático: ῥίς, ῥινός (nariz)', content: 'El nominativo singular añade -ς al tema puro.', items: ['Sg. Nom. ῥίς | Pl. ῥῖνες', 'Sg. Voc. ῥίς | Pl. ῥῖνες', 'Sg. Acus. ῥῖνα | Pl. ῥῖνας', 'Sg. Gen. ῥινός | Pl. ῥίνων', 'Sg. Dat. ῥινί | Pl. ῥίσι(ν)'] }] }, { id: 'sec-15-5', title: '15.5 Temas en Líquida (ρ, λ)', content: 'Los temas en líquida pueden ser animados o inanimados. Los animados presentan -ς en nominativo, mientras que los inanimados presentan el tema puro.', subsections: [{ title: 'En -ρ: ῥήτωρ, ῥήτορος (orador) - Animado', content: 'Sustantivo masculino animado en líquida ρ.', items: ['Sg. Nom. ῥήτωρ | Pl. ῥήτορες', 'Sg. Voc. ῥῆτορ | Pl. ῥήτορες', 'Sg. Acus. ῥήτορα | Pl. ῥήτορας', 'Sg. Gen. ῥήτορος | Pl. ῥητόρων', 'Sg. Dat. ῥήτορι | Pl. ῥήτορσι(ν)'] }, { title: 'En -λ: ἀλς, ἀλός (sal) - Inanimado', content: 'Sustantivo neutro inanimado en líquida λ.', items: ['Sg. Nom. ἀλς | Pl. ἅλα', 'Sg. Voc. ἀλς | Pl. ἅλα', 'Sg. Acus. ἀλς | Pl. ἅλα', 'Sg. Gen. ἁλός | Pl. ἁλῶν', 'Sg. Dat. ἁλί | Pl. ἅλσι(ν)'] }] }, { id: 'sec-15-6', title: '15.6 Temas en Sibilante (σ)', content: 'Los temas en sibilante presentan cambios significativos según la vocal que precede. La sibilante puede desaparecer o transformarse según las reglas fonéticas del griego.', subsections: [{ title: 'En -ος / -ες: γένος, γένους (género, raza)', content: 'Sustantivo neutro inanimado. El nominativo, vocativo y acusativo singular son idénticos.', items: ['Sg. Nom. γένος | Pl. γένη', 'Sg. Voc. γένος | Pl. γένη', 'Sg. Acus. γένος | Pl. γένη', 'Sg. Gen. γένους | Pl. γενῶν', 'Sg. Dat. γένει | Pl. γένεσι(ν)'] }, { title: 'En -ας: αἰδώς, αἰδοῦς (pudor, vergüenza)', content: 'Sustantivo femenino inanimado. La sibilante desaparece ante -ς.', items: ['Sg. Nom. αἰδώς | Pl. αἰδῶ', 'Sg. Voc. αἰδώς | Pl. αἰδῶ', 'Sg. Acus. αἰδῶ | Pl. αἰδῶ', 'Sg. Gen. αἰδοῦς | Pl. αἰδῶν', 'Sg. Dat. αἰδοῖ | Pl. αἰδοῖς'] }] }, { id: 'sec-15-7', title: '15.7 Desinencias Generales de la 3ª Declinación', content: 'Las desinencias de la 3ª declinación son uniformes para todos los temas en consonante. La diferencia principal está en el nominativo singular, que puede presentar alargamiento, sigmático o tema puro según el tipo de tema.', subsections: [{ title: 'Desinencias por Caso', content: 'Tabla de desinencias generales para animados e inanimados.', items: ['Nominativo: Alargamiento predesinencial o -ς (animados) | Tema puro (inanimados)', 'Vocativo: Tema puro o igual al nominativo singular', 'Acusativo: -α/-ν (animados) | Tema puro (inanimados)', 'Genitivo: -ος (singular) | -ων (plural)', 'Dativo: -ι (singular) | -σι(ν) (plural)'] }] }, { id: 'sec-15-8', title: '15.8 Observaciones Importantes', content: 'Existen varias reglas fonéticas y excepciones que afectan la declinación de los sustantivos atemáticos.', subsections: [{ title: 'Reglas Fonéticas', content: 'Principios que rigen los cambios en la declinación atemática.', items: ['Cuando el nominativo no es sigmático, presenta larga la vocal final del tema', 'El acusativo singular tiende a ser -α cuando el tema acaba en consonante y -ν cuando acaba en vocal', 'En la flexión atemática encontramos palabras masculinas, femeninas y neutras, pero el neutro carece de marca en nominativo, vocativo y acusativo singular', 'La dificultad en esta declinación está en el nominativo y vocativo singular y en el dativo plural, donde se encuentran dos consonantes en contacto'] }, { title: 'Excepciones Frecuentes', content: 'Sustantivos que presentan irregularidades en su declinación.', items: ['Los sustantivos en -ις y en -υς de tema en dental tienen acusativo singular en -ν cuando la ι o υ no llevan acento en nominativo', 'El vocativo singular de los sustantivos en -ις es en -ι (ejemplo: παῖς "niño" hace vocativo παῖ)', 'Si la vocal predesinencial es breve ο, alarga en ου (ejemplo: πούς, ποδός "pie"; ὀδούς, ὀδόντος "diente")'] }] }],
  vocabulary: [{ greek: 'λαῖλαψ', type: 'sustantivo', spanish: 'tempestad', frequency: 3 }, { greek: 'φύλαξ', type: 'sustantivo', spanish: 'guardián', frequency: 16 }, { greek: 'πατρίς', type: 'sustantivo', spanish: 'patria', frequency: 8 }, { greek: 'ὄνομα', type: 'sustantivo', spanish: 'nombre', frequency: 231 }, { greek: 'ποιμήν', type: 'sustantivo', spanish: 'pastor', frequency: 18 }, { greek: 'ῥήτωρ', type: 'sustantivo', spanish: 'orador', frequency: 1 }, { greek: 'γένος', type: 'sustantivo', spanish: 'género, raza', frequency: 20 }, { greek: 'αἰδώς', type: 'sustantivo', spanish: 'pudor, vergüenza', frequency: 2 }],
  exercises: [{ id: 'ex-15-1', type: 'flashcard', title: 'Flashcards - Formas Atemáticas', description: 'Traduce sustantivos de la 3ª declinación', items: [{ id: 'fc-15-1', question: 'ὄνομα', options: ['nombre'], correctAnswer: 0, explanation: 'ὄνομα (nominativo singular neutro) = nombre. Tema puro sin marca.' }, { id: 'fc-15-2', question: 'ὀνόματος', options: ['del nombre'], correctAnswer: 0, explanation: 'ὀνόματος (genitivo singular) = del nombre. Desinencia -ος.' }, { id: 'fc-15-3', question: 'φύλαξ', options: ['guardián'], correctAnswer: 0, explanation: 'φύλαξ (nominativo singular masculino) = guardián. Nominativo sigmático.' }, { id: 'fc-15-4', question: 'πατρίδα', options: ['patria (acusativo)'], correctAnswer: 0, explanation: 'πατρίδα (acusativo singular) = patria. Desinencia -α.' }, { id: 'fc-15-5', question: 'ποιμένες', options: ['pastores'], correctAnswer: 0, explanation: 'ποιμένες (nominativo plural) = pastores. Desinencia -ες.' }, { id: 'fc-15-6', question: 'γένει', options: ['en el género (dativo)'], correctAnswer: 0, explanation: 'γένει (dativo singular) = en el género. Desinencia -ει.' }] }, { id: 'ex-15-2', type: 'multiple-choice', title: 'Selección Múltiple - Identificación de Formas', description: 'Identifica la forma correcta según el caso', items: [{ id: 'mc-15-1', question: '¿Cuál es el nominativo singular de "guardián"?', options: ['φύλακος', 'φύλακα', 'φύλαξ'], correctAnswer: 2, explanation: 'φύλαξ es el nominativo singular. Nominativo sigmático con -ς.' }, { id: 'mc-15-2', question: '¿Cuál es el genitivo singular de "nombre"?', options: ['ὄνομα', 'ὀνόματος', 'ὀνόματι'], correctAnswer: 1, explanation: 'ὀνόματος es el genitivo singular. Desinencia -ος.' }, { id: 'mc-15-3', question: '¿Cuál es el acusativo singular de "patria"?', options: ['πατρίς', 'πατρίδα', 'πατρίδος'], correctAnswer: 1, explanation: 'πατρίδα es el acusativo singular. Desinencia -α.' }, { id: 'mc-15-4', question: '¿Cuál es el nominativo plural de "pastor"?', options: ['ποιμένα', 'ποιμένες', 'ποιμένος'], correctAnswer: 1, explanation: 'ποιμένες es el nominativo plural. Desinencia -ες.' }, { id: 'mc-15-5', question: '¿Cuál es el dativo plural de "género"?', options: ['γένη', 'γένεσι(ν)', 'γενῶν'], correctAnswer: 1, explanation: 'γένεσι(ν) es el dativo plural. Desinencia -σι(ν).' }] }, { id: 'ex-15-3', type: 'true-false', title: 'Verdadero/Falso - Características Atemáticas', description: 'Evalúa tus conocimientos sobre la 3ª declinación', items: [{ id: 'tf-15-1', question: 'La 3ª declinación se llama "atemática" porque tiene vocal de unión', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso. Se llama atemática porque CARECE de vocal de unión entre raíz y desinencia.' }, { id: 'tf-15-2', question: 'En los sustantivos neutros inanimados, nominativo y acusativo son idénticos', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero. Los neutros tienen nominativo, vocativo y acusativo singular idénticos.' }, { id: 'tf-15-3', question: 'φύλαξ es un nominativo sigmático', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero. El nominativo sigmático añade -ς al tema puro.' }, { id: 'tf-15-4', question: 'La desinencia de dativo plural es -σι(ν)', options: ['V', 'F'], correctAnswer: 0, explanation: 'Verdadero. La desinencia de dativo plural en la 3ª declinación es -σι(ν).' }, { id: 'tf-15-5', question: 'ὄνομα es un sustantivo animado', options: ['V', 'F'], correctAnswer: 1, explanation: 'Falso. ὄνομα es un sustantivo neutro inanimado.' }] }, { id: 'ex-15-4', type: 'matching', title: 'Columnas Paralelas - Empareja Formas', description: 'Empareja cada forma griega con su traducción y caso', items: [{ id: 'match-15-1', description: 'Empareja formas atemáticas', pairs: [{ left: 'ὄνομα', right: 'nombre (nom./ac./voc. sg.)' }, { left: 'ὀνόματος', right: 'del nombre (gen. sg.)' }, { left: 'ὀνόματι', right: 'en el nombre (dat. sg.)' }, { left: 'ὀνόματα', right: 'nombres (nom./ac./voc. pl.)' }, { left: 'ὀνόματων', right: 'de los nombres (gen. pl.)' }, { left: 'ὀνόμασι(ν)', right: 'en los nombres (dat. pl.)' }, { left: 'φύλαξ', right: 'guardián (nom. sg.)' }, { left: 'φύλακος', right: 'del guardián (gen. sg.)' }], correctAnswer: 0, explanation: 'Correcto. Has identificado correctamente las formas y sus casos.' }] }, { id: 'ex-15-5', type: 'fill-blank', title: 'Completar Oraciones - Formas Atemáticas', description: 'Completa con la forma correcta del sustantivo', items: [{ id: 'fb-15-1', question: 'El _____ es importante (nombre)', options: ['ὀνόματος', 'ὄνομα', 'ὀνόματι'], correctAnswer: 1, explanation: 'ὄνομα es el nominativo singular. Sujeto de la oración.' }, { id: 'fb-15-2', question: 'El _____ de Dios (guardián)', options: ['φύλακα', 'φύλαξ', 'φύλακος'], correctAnswer: 2, explanation: 'φύλακος es el genitivo singular. Indica posesión.' }, { id: 'fb-15-3', question: 'Ama tu _____ (patria)', options: ['πατρίδα', 'πατρίδος', 'πατρίδι'], correctAnswer: 0, explanation: 'πατρίδα es el acusativo singular. Complemento directo.' }, { id: 'fb-15-4', question: 'Los _____ son muchos (pastores)', options: ['ποιμένα', 'ποιμένες', 'ποιμένος'], correctAnswer: 1, explanation: 'ποιμένες es el nominativo plural. Sujeto de la oración.' }, { id: 'fb-15-5', question: 'En el _____ hay verdad (género)', options: ['γένει', 'γένος', 'γενῶν'], correctAnswer: 0, explanation: 'γένει es el dativo singular. Indica lugar o circunstancia.' }] }, { id: 'ex-15-6', type: 'translation', title: 'Traducción - Oraciones Completas', description: 'Traduce oraciones con sustantivos atemáticos', items: [{ id: 'tr-15-1', question: 'τὸ ὄνομα αὐτοῦ', options: ['Su nombre', 'El nombre de él', 'Su nombre es'], correctAnswer: 0, explanation: 'τὸ ὄνομα αὐτοῦ = Su nombre (literalmente: el nombre de él). ὄνομα es nominativo singular.' }, { id: 'tr-15-2', question: 'ὁ φύλαξ τοῦ ναοῦ', options: ['El guardián del templo', 'Un guardián', 'Los guardianes'], correctAnswer: 0, explanation: 'ὁ φύλαξ τοῦ ναοῦ = El guardián del templo. φύλαξ es nominativo singular.' }, { id: 'tr-15-3', question: 'ἡ πατρίδα ἡμῶν', options: ['Nuestra patria', 'La patria de ellos', 'Las patrias'], correctAnswer: 0, explanation: 'ἡ πατρίδα ἡμῶν = Nuestra patria. πατρίδα es nominativo singular.' }, { id: 'tr-15-4', question: 'οἱ ποιμένες τῶν προβάτων', options: ['El pastor de las ovejas', 'Los pastores de las ovejas', 'Un pastor'], correctAnswer: 1, explanation: 'οἱ ποιμένες τῶν προβάτων = Los pastores de las ovejas. ποιμένες es nominativo plural.' }, { id: 'tr-15-5', question: 'τὸ γένος τοῦ ἀνθρώπου', options: ['La raza humana', 'El género del hombre', 'La raza de los hombres'], correctAnswer: 2, explanation: 'τὸ γένος τοῦ ἀνθρώπου = La raza de los hombres. γένος es nominativo singular neutro.' }] }]
};

export const lesson16: Lesson = {
  id: 'lesson-16',
  number: 16,
  title: 'Tercera Declinacion (Continuacion) - Temas en Diptongo y Vocal',
  introduction: 'La 3ª declinación continúa con temas en diptongo (eu, au, ou) y temas en vocal larga (oi, w) y cerrada (i, u). Estos temas presentan características especiales de contracción vocálica y cambios fonéticos. Los sustantivos en -sis (tema en i) son particularmente frecuentes en el Nuevo Testamento y fundamentales para la comprensión de textos griegos.',
  sections: [
    {
      id: 'sec-16-1',
      title: '16.1 Temas en Diptongo: eu, au, ou',
      content: 'Los temas en diptongo comprenden sustantivos masculinos y femeninos, pero no hay neutros ni adjetivos. Los tres diptongos son sigmáticos. La u intervocálica (digamma) cae, excepto en dativo plural. El vocativo singular es igual al tema puro en los temas en diptongo.',
      subsections: [
        {
          title: 'Tema en eu: βασιλεύς, βασιλέως (rey)',
          content: 'En estos temas la caída de la u da lugar a contracciones: ei (en el dat. sg.) y ee en ei (en el nom. voc. y acus. pl.). El genitivo singular alarga en -εως, debido a una metátesis de cantidad. El acusativo singular es -a (desinencia propia de los temas en consonante) y no hay contracción.',
          items: [
            'Sg. Nom. βασιλεύς | Pl. βασιλεῖς',
            'Sg. Voc. βασιλεῦ | Pl. βασιλεῖς',
            'Sg. Acus. βασιλέα | Pl. βασιλεῖς / βασιλέας',
            'Sg. Gen. βασιλέως | Pl. βασιλέων',
            'Sg. Dat. βασιλεῖ | Pl. βασιλεῦσι(ν)'
          ]
        },
        {
          title: 'Tema en au: γραῦς, γραός (anciana)',
          content: 'Aunque la u intervocálica cae no se da ninguna contracción. El acusativo sg. es en -ν, como es lo normal en los temas en vocal. El acusativo pl. lo hacen en -ς, coincidiendo la forma con el nom. sg.',
          items: [
            'Sg. Nom. γραῦς | Pl. γραες',
            'Sg. Voc. γραῦ | Pl. γραες',
            'Sg. Acus. γραῦν | Pl. γραῦς',
            'Sg. Gen. γραος | Pl. γραῶν',
            'Sg. Dat. γραι | Pl. γραυσι(ν)'
          ]
        },
        {
          title: 'Tema en ou: βοῦς, βοός (buey)',
          content: 'Aunque la u intervocálica cae no se da ninguna contracción. El acusativo sg. es en -ν. El acusativo pl. lo hacen en -ς, coincidiendo la forma con el nom. sg. En el NT el acus. pl. del sustantivo βοῦς presenta siempre la forma βόας, en lugar del ático βοῦς.',
          items: [
            'Sg. Nom. βοῦς | Pl. βόες',
            'Sg. Voc. βοῦ | Pl. βόες',
            'Sg. Acus. βοῦν | Pl. βόας / βοῦς',
            'Sg. Gen. βοός | Pl. βοῶν',
            'Sg. Dat. βοι | Pl. βουσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-16-2',
      title: '16.2 Temas en Vocal Larga: oi, w',
      content: 'Los temas en vocal larga presentan características especiales de contracción. En los temas en oi, la i del tema desaparece alargando la o en w en el nominativo singular. En los temas en w, no se contraen las vocales en contacto y la w se mantiene en toda la declinación.',
      subsections: [
        {
          title: 'Tema en oi: πειθώ, πειθοῦς (persuasión)',
          content: 'Comprende únicamente sustantivos femeninos y no tienen plural. Son asigmáticos y la i del tema desaparece alargando la o en w en nom. sg. El vocativo sg. es igual al tema puro. En el resto de los casos, la i intervocálica (yod) desaparece y se contraen las vocales: o + a = w (acus. sg.), o + o = ou (gen. sg.), o + i = oi (dat. sg.).',
          items: [
            'Sg. Nom. πειθώ',
            'Sg. Voc. πειθοῖ',
            'Sg. Acus. πειθώ [πειθό(ι)a]',
            'Sg. Gen. πειθοῦς [πειθό(ι)ος]',
            'Sg. Dat. πειθοῖ [πειθό(ι)i]'
          ]
        },
        {
          title: 'Tema en w: ἥρως, ἥρωος (héroe)',
          content: 'Comprenden únicamente sustantivos masculinos y son sigmáticos en el nom. y voc. sg. No se contraen las vocales en contacto y la w se mantiene en toda la declinación.',
          items: [
            'Sg. Nom. ἥρως | Pl. ἥρωες',
            'Sg. Voc. ἥρως | Pl. ἥρωες',
            'Sg. Acus. ἥρωα | Pl. ἥρωας',
            'Sg. Gen. ἥρωος | Pl. ἡρώων',
            'Sg. Dat. ἥρωi | Pl. ἥρωσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-16-3',
      title: '16.3 Temas en Vocal Cerrada: i (Invariables)',
      content: 'Los temas en i invariables comprenden sustantivos masculinos y femeninos que toman -ς en nom. sg. y en el acus. pl. El vocativo sg. es igual al tema. El acusativo sg. lo hacen en -ν.',
      subsections: [
        {
          title: 'Ejemplo: οἶς, οἰός (oveja)',
          content: 'Paradigma de sustantivo femenino en tema vocal cerrada i sin alternancia vocálica.',
          items: [
            'Sg. Nom. οἶς | Pl. οἶες',
            'Sg. Voc. οἶ | Pl. οἶες',
            'Sg. Acus. οἶν | Pl. οἶς',
            'Sg. Gen. οἰός | Pl. οἰῶν',
            'Sg. Dat. οἰ | Pl. οἰσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-16-4',
      title: '16.4 Temas en Vocal Cerrada: u (Invariables)',
      content: 'Los temas en u invariables comprenden sustantivos masculinos y femeninos. Todos los sustantivos toman -ς en nom. sg. y en el acus. pl. El vocativo sg. es igual al tema. El acusativo sg. lo hacen en -ν.',
      subsections: [
        {
          title: 'Ejemplo: ἰχθύς, ἰχθύος (pez)',
          content: 'Paradigma de sustantivo masculino en tema vocal cerrada u sin alternancia vocálica.',
          items: [
            'Sg. Nom. ἰχθύς | Pl. ἰχθύες',
            'Sg. Voc. ἰχθύ | Pl. ἰχθύες',
            'Sg. Acus. ἰχθύν | Pl. ἰχθύς',
            'Sg. Gen. ἰχθύος | Pl. ἰχθύων',
            'Sg. Dat. ἰχθύi | Pl. ἰχθύσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-16-5',
      title: '16.5 Temas en Vocal Cerrada: i (Variables)',
      content: 'Algunos sustantivos alternan la i con ei, presentando dos temas. La i o del tema aparece en nom., voc. y acusativo del sg.; en los demás casos aparecen ei, cuya i (yod) desaparece cuando se encuentran entre vocales, dando lugar a contracciones: e + e = ei (nom. pl.); e + i = ei (dat. sg.). En los neutros, e + a = h.',
      subsections: [
        {
          title: 'Ejemplo: πόλις, πόλεως (ciudad)',
          content: 'Paradigma de sustantivo femenino en tema vocal cerrada i con alternancia. En nom. sg. toman -ς. En los neutros, el nom., voc. y acus. sg. es igual al tema y en el plural se da la contracción anteriormente dicha, excepto en los adjetivos, que no contraen.',
          items: [
            'Sg. Nom. πόλις | Pl. πόλεις [πόλε-ες]',
            'Sg. Voc. πόλι | Pl. πόλεις',
            'Sg. Acus. πόλιν | Pl. πόλεις',
            'Sg. Gen. πόλεως | Pl. πόλεων',
            'Sg. Dat. πόλει | Pl. πόλεσι(ν)'
          ]
        },
        {
          title: 'Ejemplo: πῆχυς, πήχεως (brazo; codo-medida)',
          content: 'Paradigma con contracciones similares. En el NT suele aparecer contraído: πηχῶν.',
          items: [
            'Sg. Nom. πῆχυς | Pl. πήχεις [πήχε-ες]',
            'Sg. Voc. πῆχυ | Pl. πήχεις',
            'Sg. Acus. πῆχυν | Pl. πήχεις',
            'Sg. Gen. πήχεως | Pl. πήχεων',
            'Sg. Dat. πήχει | Pl. πήχεσι(ν)'
          ]
        },
        {
          title: 'Ejemplo: ἄστυ, ἄστεως (villa, ciudad)',
          content: 'Sustantivo neutro con contracciones. En nom., voc. y acus. sg. es igual al tema y en plural se da la contracción anteriormente dicha.',
          items: [
            'Sg. Nom. ἄστυ | Pl. ἄστη [ἄστε-a]',
            'Sg. Voc. ἄστυ | Pl. ἄστη',
            'Sg. Acus. ἄστυ | Pl. ἄστη',
            'Sg. Gen. ἄστεως | Pl. ἄστεων',
            'Sg. Dat. ἄστει | Pl. ἄστεσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-16-6',
      title: '16.6 Sustantivos Frecuentes en -sis',
      content: 'Los sustantivos terminados en -sis (tema en i) son muy frecuentes en el Nuevo Testamento. Siguen la declinación de πόλις, πόλεως. Estos sustantivos son fundamentales para la comprensión de textos griegos del NT y representan conceptos teológicos clave.',
      subsections: [
        {
          title: 'Vocabulario Extenso en -sis',
          content: 'Sustantivos comunes en el NT que siguen la declinación de πόλις. Todos son femeninos y muy frecuentes en el Nuevo Testamento.',
          items: [
            'ἀγαλλίασις-εως (ἡ) "gozo", "alegría"',
            'θλῖψις-εως (ἡ) "angustia", "tribulación"',
            'ἀγανάκτησις-εως (ἡ) "enojo", "indignación"',
            'καύχησις-έως (ἡ) "orgullo"',
            'αἴνεσις-εως (ἡ) "alabanza"',
            'κλῆσις-εως (ἡ) "llamamiento"',
            'αἵρεσις-εως (ἡ) "secta"',
            'κρίσις-εως (ἡ) "juicio"',
            'δεσμή-σις-εως (ἡ) "cadena"',
            'κτίσις-εως (ἡ) "creación"',
            'ἀνάμνησις-εως (ἡ) "memorial"',
            'ὄφις-εως (ὁ) "serpiente"',
            'ἀνάστασις-εως (ἡ) "resurrección"',
            'παράδοσις-εως (ἡ) "tradición"',
            'ἀποκάλυψις-εως (ἡ) "revelación"',
            'παράπλησις-εως (ἡ) "exhortación"',
            'ἀπολύτρωσις-εως (ἡ) "liberación"',
            'πίστις-εως (ἡ) "fe"',
            'ἄφεσις-εως (ἡ) "perdón"',
            'πρᾶξις-εως (ἡ) "acción"',
            'βρῶσις-εως (ἡ) "comida"',
            'πρόθεσις-εως (ἡ) "propósito", "voluntad"',
            'γένεσις-εως (ἡ) "nacimiento"',
            'συνείδησις-εως (ἡ) "conciencia"',
            'γνῶσις-εως (ἡ) "conocimiento"',
            'τάξις-εως (ἡ) "orden"',
            'δέησις-εως (ἡ) "petición"',
            'ὕβρις-εως (ἡ) "insolencia"',
            'δύναμις-εως (ἡ) "poder"',
            'φύσις-εως (ἡ) "naturaleza"',
            'ἐπίγνωσις-εως (ἡ) "reconocimiento"'
          ]
        }
      ]
    },
    {
      id: 'sec-16-7',
      title: '16.7 Sustantivos Adicionales en Tema u',
      content: 'Sustantivos que siguen la declinación de ἰχθύς, ἰχθύος. Estos sustantivos son menos frecuentes que los en -sis pero importantes para la comprensión completa de la 3ª declinación.',
      subsections: [
        {
          title: 'Vocabulario en Tema u',
          content: 'Sustantivos que siguen la declinación de ἰχθύς.',
          items: [
            'βότρυς-υος (ὁ) "racimo" (de uva)',
            'ἰσχύς-ύος (ἡ) "fuerza"',
            'ὀσφύς-ύος (ἡ) "cadera", "lomos"',
            'ὀφρύς-ύος (ἡ) "cima", "cumbre"',
            'στάχυς-ύος (ὁ) "espiga"',
            'ὗς, ὑος (ὁ / ἡ) "cerdo-a"'
          ]
        }
      ]
    },
    {
      id: 'sec-16-8',
      title: '16.8 Sustantivos Adicionales en Tema eu',
      content: 'Sustantivos que siguen la declinación de βασιλεύς, βασιλέως. Estos sustantivos representan profesiones y roles sociales importantes en el contexto del Nuevo Testamento.',
      subsections: [
        {
          title: 'Vocabulario en Tema eu',
          content: 'Sustantivos que siguen la declinación de βασιλεύς.',
          items: [
            'ἁλιεύς-έως (ὁ) "pescador"',
            'γραμματεύς-έως (ὁ) "escriba"',
            'γονεύς-έως (ὁ) "progenitor"',
            'ἀρχιερεύς-έως (ὁ) "sumo sacerdote"',
            'ἱερεύς-έως (ὁ) "sacerdote"',
            'κεραμεύς-έως (ὁ) "alfarero"'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'βασιλεύς', type: 'sustantivo', spanish: 'rey', frequency: 121 },
    { greek: 'ἁλιεύς', type: 'sustantivo', spanish: 'pescador', frequency: 4 },
    { greek: 'γραμματεύς', type: 'sustantivo', spanish: 'escriba', frequency: 63 },
    { greek: 'ἱερεύς', type: 'sustantivo', spanish: 'sacerdote', frequency: 31 },
    { greek: 'βοῦς', type: 'sustantivo', spanish: 'buey', frequency: 8 },
    { greek: 'πόλις', type: 'sustantivo', spanish: 'ciudad', frequency: 163 },
    { greek: 'ἰχθύς', type: 'sustantivo', spanish: 'pez', frequency: 20 },
    { greek: 'πίστις', type: 'sustantivo', spanish: 'fe', frequency: 243 }
  ],
  exercises: [
    {
      id: 'ex-16-1',
      type: 'flashcard',
      title: 'Flashcards - Temas en Diptongo y Vocal',
      description: 'Traduce sustantivos de temas en diptongo y vocal',
      items: [
        {
          id: 'fc-16-1',
          question: 'βασιλεύς',
          options: ['rey'],
          correctAnswer: 0,
          explanation: 'βασιλεύς (nominativo singular masculino) = rey. Tema en diptongo eu.'
        },
        {
          id: 'fc-16-2',
          question: 'βασιλέως',
          options: ['del rey'],
          correctAnswer: 0,
          explanation: 'βασιλέως (genitivo singular) = del rey. Contracción de basileo-os.'
        },
        {
          id: 'fc-16-3',
          question: 'βοῦς',
          options: ['buey'],
          correctAnswer: 0,
          explanation: 'βοῦς (nominativo singular masculino) = buey. Tema en diptongo ou.'
        },
        {
          id: 'fc-16-4',
          question: 'πόλις',
          options: ['ciudad'],
          correctAnswer: 0,
          explanation: 'πόλις (nominativo singular femenino) = ciudad. Tema en vocal cerrada i.'
        },
        {
          id: 'fc-16-5',
          question: 'ἰχθύς',
          options: ['pez'],
          correctAnswer: 0,
          explanation: 'ἰχθύς (nominativo singular masculino) = pez. Tema en vocal cerrada u.'
        },
        {
          id: 'fc-16-6',
          question: 'πίστις',
          options: ['fe'],
          correctAnswer: 0,
          explanation: 'πίστις (nominativo singular femenino) = fe. Sustantivo en -sis muy frecuente en NT.'
        }
      ]
    },
    {
      id: 'ex-16-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Identificacion de Formas',
      description: 'Identifica la forma correcta según el caso',
      items: [
        {
          id: 'mc-16-1',
          question: 'Cual es el nominativo plural de "rey"?',
          options: ['βασιλέως', 'βασιλεῖς', 'βασιλέα'],
          correctAnswer: 1,
          explanation: 'βασιλεῖς es el nominativo plural. Contracción de basileo-es.'
        },
        {
          id: 'mc-16-2',
          question: 'Cual es el genitivo singular de "buey"?',
          options: ['βοῦς', 'βοός', 'βοῦν'],
          correctAnswer: 1,
          explanation: 'βοός es el genitivo singular. Tema en diptongo ou.'
        },
        {
          id: 'mc-16-3',
          question: 'Cual es el acusativo singular de "ciudad"?',
          options: ['πόλις', 'πόλιν', 'πόλεις'],
          correctAnswer: 1,
          explanation: 'πόλιν es el acusativo singular. Desinencia -ν.'
        },
        {
          id: 'mc-16-4',
          question: 'Cual es el nominativo plural de "pez"?',
          options: ['ἰχθύς', 'ἰχθύες', 'ἰχθύων'],
          correctAnswer: 1,
          explanation: 'ἰχθύες es el nominativo plural. Desinencia -ες.'
        },
        {
          id: 'mc-16-5',
          question: 'Cual es el genitivo singular de "fe"?',
          options: ['πίστις', 'πίστεως', 'πίστιν'],
          correctAnswer: 1,
          explanation: 'πίστεως es el genitivo singular. Desinencia -εως.'
        }
      ]
    },
    {
      id: 'ex-16-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas de Diptongo y Vocal',
      description: 'Evalua tus conocimientos sobre estos temas',
      items: [
        {
          id: 'tf-16-1',
          question: 'La digamma (u intervocálica) desaparece en todos los casos',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. La digamma desaparece excepto en dativo plural.'
        },
        {
          id: 'tf-16-2',
          question: 'βασιλεῖς es una contracción de basileo-es',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. La desaparición de la digamma produce esta contracción.'
        },
        {
          id: 'tf-16-3',
          question: 'πόλις es un sustantivo neutro',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. πόλις es femenino.'
        },
        {
          id: 'tf-16-4',
          question: 'ἰχθύς presenta alternancia vocálica i/ei',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. ἰχθύς es invariable. πόλις presenta alternancia i/ei.'
        },
        {
          id: 'tf-16-5',
          question: 'Los sustantivos en -sis son muy frecuentes en el NT',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. Sustantivos como πίστις, γνῶσις, κρίσις son muy comunes.'
        }
      ]
    },
    {
      id: 'ex-16-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Formas',
      description: 'Empareja cada forma griega con su traduccion y caso',
      items: [
        {
          id: 'match-16-1',
          description: 'Empareja formas de diptongo y vocal',
          pairs: [
            { left: 'βασιλεύς', right: 'rey (nom. sg.)' },
            { left: 'βασιλέως', right: 'del rey (gen. sg.)' },
            { left: 'βασιλεῖς', right: 'reyes (nom. pl.)' },
            { left: 'βοῦς', right: 'buey (nom. sg.)' },
            { left: 'βοός', right: 'del buey (gen. sg.)' },
            { left: 'πόλις', right: 'ciudad (nom. sg.)' },
            { left: 'πόλεως', right: 'de la ciudad (gen. sg.)' },
            { left: 'ἰχθύς', right: 'pez (nom. sg.)' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente las formas y sus casos.'
        }
      ]
    },
    {
      id: 'ex-16-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Diptongo y Vocal',
      description: 'Completa con la forma correcta del sustantivo',
      items: [
        {
          id: 'fb-16-1',
          question: 'El _____ es poderoso (rey)',
          options: ['βασιλέως', 'βασιλεύς', 'βασιλέα'],
          correctAnswer: 1,
          explanation: 'βασιλεύς es el nominativo singular. Sujeto de la oracion.'
        },
        {
          id: 'fb-16-2',
          question: 'El _____ del Señor (buey)',
          options: ['βοῦν', 'βοῦς', 'βοός'],
          correctAnswer: 2,
          explanation: 'βοός es el genitivo singular. Indica posesion.'
        },
        {
          id: 'fb-16-3',
          question: 'Ama tu _____ (ciudad)',
          options: ['πόλιν', 'πόλεις', 'πόλεως'],
          correctAnswer: 0,
          explanation: 'πόλιν es el acusativo singular. Complemento directo.'
        },
        {
          id: 'fb-16-4',
          question: 'Los _____ son muchos (peces)',
          options: ['ἰχθύς', 'ἰχθύες', 'ἰχθύων'],
          correctAnswer: 1,
          explanation: 'ἰχθύες es el nominativo plural. Sujeto de la oracion.'
        },
        {
          id: 'fb-16-5',
          question: 'La _____ es importante (fe)',
          options: ['πίστις', 'πίστεως', 'πίστιν'],
          correctAnswer: 0,
          explanation: 'πίστις es el nominativo singular. Sujeto de la oracion.'
        }
      ]
    },
    {
      id: 'ex-16-6',
      type: 'translation',
      title: 'Traduccion - Oraciones Completas',
      description: 'Traduce oraciones con sustantivos de diptongo y vocal',
      items: [
        {
          id: 'tr-16-1',
          question: 'ὁ βασιλεὺς τοῦ κόσμου',
          options: ['El rey del mundo', 'Un rey del mundo', 'Los reyes del mundo'],
          correctAnswer: 0,
          explanation: 'ὁ βασιλεὺς τοῦ κόσμου = El rey del mundo. βασιλεύς es nominativo singular.'
        },
        {
          id: 'tr-16-2',
          question: 'ἡ πόλις ἱερά',
          options: ['La ciudad sagrada', 'Una ciudad sagrada', 'Las ciudades sagradas'],
          correctAnswer: 0,
          explanation: 'ἡ πόλις ἱερά = La ciudad sagrada. πόλις es nominativo singular femenino.'
        },
        {
          id: 'tr-16-3',
          question: 'ἰχθῦς ἐν τῇ θαλάσσῃ',
          options: ['El pez en el mar', 'Un pez en el mar', 'Los peces en el mar'],
          correctAnswer: 1,
          explanation: 'ἰχθῦς ἐν τῇ θαλάσσῃ = Un pez en el mar. ἰχθύς es nominativo singular.'
        },
        {
          id: 'tr-16-4',
          question: 'ἡ πίστις σώζει',
          options: ['La fe salva', 'Una fe salva', 'Las fe salvan'],
          correctAnswer: 0,
          explanation: 'ἡ πίστις σώζει = La fe salva. πίστις es nominativo singular femenino.'
        },
        {
          id: 'tr-16-5',
          question: 'τοῦ βασιλέως αὐτοῦ',
          options: ['Su rey', 'Del rey de él', 'Su rey es'],
          correctAnswer: 1,
          explanation: 'τοῦ βασιλέως αὐτοῦ = Del rey de él. βασιλέως es genitivo singular.'
        }
      ]
    }
  ]
};

export const lesson17: Lesson = {
  id: 'lesson-17',
  number: 17,
  title: 'Adjetivos de 2a y 3a Clase - Adjetivos Irregulares',
  introduction: 'Los adjetivos de 2ª y 3ª clase representan una importante categoría gramatical en el griego del Nuevo Testamento. Los adjetivos de 2ª clase tienen dos terminaciones y se declinan por la tercera declinación. Los de 3ª clase tienen tres terminaciones con declinación mixta. Además, existen adjetivos irregulares como πολύς (mucho) y μέγας (grande) que presentan características especiales. Estos adjetivos son fundamentales para la expresión de cualidades y atributos en textos griegos del NT.',
  sections: [
    {
      id: 'sec-17-1',
      title: '17.1 Adjetivos de 2ª Clase - Temas en Nasal',
      content: 'Los adjetivos de 2ª clase son de dos terminaciones y se declinan por la tercera declinación. Los temas en nasal tienen características especiales. Tienen la misma forma para masculino y femenino. El tema puro aparece en nom., voc. y acus. neutros. El gen. y dat. (sg. y pl.) presentan las mismas formas para los tres géneros.',
      subsections: [
        {
          title: 'Paradigma: εὐδαίμων, εὔδαιμον "feliz"',
          content: 'Este adjetivo sigue el patrón de sustantivos como δαίμων, δαίμονος. Todos los comparativos que toman los sufijos -ων, -ιον siguen esta declinación.',
          items: [
            'Sg. Nom. εὐδαίμων, εὔδαιμον | Pl. εὐδαίμονες, εὐδαίμονα',
            'Sg. Voc. εὔδαιμον, εὔδαιμον | Pl. εὐδαίμονες, εὐδαίμονα',
            'Sg. Acus. εὐδαίμονα, εὔδαιμον | Pl. εὐδαίμονας, εὐδαίμονα',
            'Sg. Gen. εὐδαίμονος | Pl. εὐδαιμόνων',
            'Sg. Dat. εὐδαίμονι | Pl. εὐδαίμοσι(ν)'
          ]
        },
        {
          title: 'Vocabulario - Temas en Nasal',
          content: 'Adjetivos que siguen la declinación de εὐδαίμων, εὔδαιμον, incluyendo comparativos con sufijos -ων, -ιον.',
          items: [
            'ἄφρων-ον "necio", "insensato"',
            'σέφρων-ον "sabio", "prudente"'
          ]
        }
      ]
    },
    {
      id: 'sec-17-2',
      title: '17.2 Adjetivos de 2ª Clase - Temas en -ης (Silbante)',
      content: 'Los adjetivos con tema en -ης (silbante) invariable presentan características especiales. Tienen la misma forma para masculino y femenino. El tema puro aparece en nom., voc. y acus. neutros. El gen. y dat. (sg. y pl.) presentan las mismas formas para los tres géneros.',
      subsections: [
        {
          title: 'Paradigma: ἀληθής, ἀληθής "verdadero"',
          content: 'Este paradigma sigue el patrón de sustantivos como τριήρης, τριήρους. La contracción vocálica es característica de estos adjetivos.',
          items: [
            'Sg. Nom. ἀληθής, ἀληθής | Pl. ἀληθεῖς, ἀληθῆ',
            'Sg. Voc. ἀληθής, ἀληθής | Pl. ἀληθεῖς, ἀληθῆ',
            'Sg. Acus. ἀληθῆ, ἀληθής | Pl. ἀληθεῖς, ἀληθῆ',
            'Sg. Gen. ἀληθοῦς | Pl. ἀληθῶν',
            'Sg. Dat. ἀληθεῖ | Pl. ἀληθέσι(ν)'
          ]
        },
        {
          title: 'Vocabulario Extenso - Temas en -ης',
          content: 'Adjetivos muy frecuentes en el Nuevo Testamento que siguen la declinación de ἀληθής, ἀληθής. Estos adjetivos expresan cualidades morales, físicas y espirituales fundamentales.',
          items: [
            'ἀβαρής-ής "quien no representa una carga (económica)"',
            'ἀκριβής-ής "preciso"',
            'ἀσεβής-ής "impío"',
            'ἀσθενής-ής "débil", "enfermo"',
            'ἀσφαλής-ής "seguro"',
            'αὐτάρκης-ες "que se basta a sí mismo"',
            'ἐνδεής-ής "pobre", "necesitado"',
            'εὐγενής-ής "bien nacido"',
            'εὐσεβής-ής "piadoso"',
            'μονογενής-ής "unigénito"',
            'πληρης-ες "lleno", "completo"',
            'συγγενής-ής "emparentado"',
            'ὑγιής-ής "sano", "íntegro"',
            'ψευδής-ής "falso, mentiroso"'
          ]
        }
      ]
    },
    {
      id: 'sec-17-3',
      title: '17.3 Adjetivos de 3ª Clase - Temas en Nasal',
      content: 'Los adjetivos de 3ª clase son de tres terminaciones. El masculino y neutro se declinan por la tercera declinación. El femenino se declina por la primera declinación. Los temas en nasal presentan características especiales de declinación.',
      subsections: [
        {
          title: 'Paradigma: μέλας, μέλαινα, μέλαν "negro"',
          content: 'Este adjetivo sigue el patrón de sustantivos como ῥῖς, ῥινός. El femenino μέλαινα se declina por la primera declinación.',
          items: [
            'Sg. Nom. μέλας, μέλαν | Pl. μέλανες, μέλανα',
            'Sg. Voc. μέλαν, μέλαν | Pl. μέλανες, μέλανα',
            'Sg. Acus. μέλανα, μέλαν | Pl. μέλανας, μέλανα',
            'Sg. Gen. μέλανος | Pl. μελάνων',
            'Sg. Dat. μέλανι | Pl. μέλασι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-17-4',
      title: '17.4 Adjetivos de 3ª Clase - Tema en -ντ',
      content: 'Los adjetivos con tema en -ντ representan una clase importante que incluye el adjetivo πᾶς (todo) y todos los participios activos. El femenino se declina por la primera declinación. Este adjetivo es muy frecuente en el NT con múltiples significados según su posición.',
      subsections: [
        {
          title: 'Paradigma: πᾶς, πᾶσα, πᾶν "todo"',
          content: 'Este adjetivo tiene usos especiales según su colocación: atributivo (suma, totalidad), predicativo (todo, íntegro), sin artículo (distributivo, cada). El femenino πᾶσα se declina por la primera declinación.',
          items: [
            'Sg. Nom. πᾶς, πᾶν | Pl. πάντες, πάντα',
            'Sg. Voc. πᾶς, πᾶν | Pl. πάντες, πάντα',
            'Sg. Acus. πάντα, πᾶν | Pl. πάντας, πάντα',
            'Sg. Gen. παντός | Pl. πάντων',
            'Sg. Dat. παντί | Pl. πᾶσι(ν)'
          ]
        }
      ]
    },
    {
      id: 'sec-17-5',
      title: '17.5 Adjetivos de 3ª Clase - Tema en -υ',
      content: 'Los adjetivos con tema en -υ presentan características especiales de declinación. El masculino y neutro se declinan por la tercera declinación. El femenino se declina por la primera declinación. Estos adjetivos expresan cualidades físicas y sensoriales.',
      subsections: [
        {
          title: 'Paradigma: γλυκύς, γλυκεῖα, γλυκύ "dulce"',
          content: 'Este adjetivo sigue el patrón de sustantivos como πῆχυς, πήχεως. El femenino γλυκεῖα se declina por la primera declinación.',
          items: [
            'Sg. Nom. γλυκύς, γλυκύ | Pl. γλυκεῖς, γλυκέα',
            'Sg. Voc. γλυκύς, γλυκύ | Pl. γλυκεῖς, γλυκέα',
            'Sg. Acus. γλυκύν, γλυκύ | Pl. γλυκεῖς, γλυκέα',
            'Sg. Gen. γλυκέος | Pl. γλυκέων',
            'Sg. Dat. γλυκεῖ | Pl. γλυκέσι(ν)'
          ]
        },
        {
          title: 'Vocabulario Extenso - Tema en -υ',
          content: 'Adjetivos muy frecuentes en el Nuevo Testamento que siguen la declinación de γλυκύς, γλυκεῖα, γλυκύ. Estos adjetivos expresan cualidades físicas, temporales y morales.',
          items: [
            'πᾶς, πᾶσα, πᾶν "todos" [y cada uno]',
            'βαθύς, βαθεῖα, βαθύ "profundo"',
            'βαρύς, βαρεῖα, βαρύ "pesado"',
            'βραδύς, βραδεῖα, βραδύ "lento"',
            'βραχύς, βραχεῖα, βραχύ "breve"',
            'ἐλαχύς, ἐλαχεῖα, ἐλαχύ "pequeño"',
            'εὐθύς, εὐθεῖα, εὐθύ "derecho", "recto"',
            'ἡδύς, ἡδεῖα, ἡδύ "agradable"',
            'ἥμισυς, ἥμισεια, ἥμισυ "medio"',
            'θῆλυς, θῆλεια, θῆλυ "femenino"',
            'ὀξύς, ὀξεῖα, ὀξύ "agudo"',
            'πλατύς, πλατεῖα, πλατύ "ancho"',
            'πραῢς, πραεῖα, πραῢ "manso", "tranquilo"',
            'σύμπας, σύμπασα, σύμπαν "todo junto", "entero", "total"',
            'ταχύς, ταχεῖα, ταχύ "rápido"',
            'τραχύς, τραχεῖα, τραχύ "áspero", "rudo"'
          ]
        }
      ]
    },
    {
      id: 'sec-17-6',
      title: '17.6 Adjetivos Irregulares - πολύς "mucho"',
      content: 'El adjetivo πολύς tiene una declinación mixta con doble tema. Utiliza un tema para nom., voc. y acus. sg. del masculino y neutro (πολύ), y otro tema diferente para el resto de la flexión (πολλό). Con el primer tema funciona como tema en vocal de la 3ª declinación. Con el segundo se declina como adjetivo de 1ª clase de tres terminaciones.',
      subsections: [
        {
          title: 'Paradigma: πολύς, πολλή, πολύ "mucho"',
          content: 'Este adjetivo presenta una declinación mixta característica. El nominativo, vocativo y acusativo singular del masculino y neutro utilizan el tema πολύ, mientras que el resto utiliza πολλό.',
          items: [
            'Sg. Nom. πολύς, πολλή, πολύ | Pl. πολλοί, πολλαί, πολλά',
            'Sg. Voc. πολύς, πολλή, πολύ | Pl. πολλοί, πολλαί, πολλά',
            'Sg. Acus. πολύν, πολλήν, πολύ | Pl. πολλούς, πολλάς, πολλά',
            'Sg. Gen. πολλοῦ, πολλῆς, πολλοῦ | Pl. πολλῶν',
            'Sg. Dat. πολλῷ, πολλῇ, πολλῷ | Pl. πολλοῖς, πολλαῖς, πολλοῖς'
          ]
        }
      ]
    },
    {
      id: 'sec-17-7',
      title: '17.7 Adjetivos Irregulares - μέγας "grande"',
      content: 'El adjetivo μέγας tiene una declinación mixta similar a πολύς. Utiliza un tema para nom., voc. y acus. sg. del masculino y neutro (μέγα), y otro tema diferente para el resto de la flexión (μεγάλο). Con el primer tema funciona como tema en vocal de la 3ª declinación. Con el segundo se declina como adjetivo de 1ª clase de tres terminaciones.',
      subsections: [
        {
          title: 'Paradigma: μέγας, μεγάλη, μέγα "grande"',
          content: 'Este adjetivo presenta una declinación mixta característica. El nominativo, vocativo y acusativo singular del masculino y neutro utilizan el tema μέγα, mientras que el resto utiliza μεγάλο.',
          items: [
            'Sg. Nom. μέγας, μεγάλη, μέγα | Pl. μεγάλοι, μεγάλαι, μεγάλα',
            'Sg. Voc. μέγας, μεγάλη, μέγα | Pl. μεγάλοι, μεγάλαι, μεγάλα',
            'Sg. Acus. μέγαν, μεγάλην, μέγα | Pl. μεγάλους, μεγάλας, μεγάλα',
            'Sg. Gen. μεγάλου, μεγάλης, μεγάλου | Pl. μεγάλων',
            'Sg. Dat. μεγάλῳ, μεγάλῃ, μεγάλῳ | Pl. μεγάλοις, μεγάλαις, μεγάλοις'
          ]
        }
      ]
    },
    {
      id: 'sec-17-8',
      title: '17.8 Resumen de Características Principales',
      content: 'Los adjetivos de 2ª y 3ª clase, junto con los irregulares, representan categorías importantes en la morfología griega. La comprensión de sus paradigmas es esencial para la lectura y análisis de textos del Nuevo Testamento.',
      subsections: [
        {
          title: 'Características Clave',
          content: 'Resumen de las características principales de cada clase de adjetivos.',
          items: [
            'Adjetivos 2ª clase: dos terminaciones, declinación 3ª, temas en nasal o -ης',
            'Adjetivos 3ª clase: tres terminaciones, masculino/neutro en 3ª declinación, femenino en 1ª declinación',
            'Adjetivos irregulares: declinación mixta con doble tema, πολύς y μέγας son los principales',
            'Todos los participios activos y el participio de aoristo pasivo pertenecen a la 3ª clase',
            'Excepto el participio de perfecto activo que tiene tema dental'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'εὐδαίμων', type: 'adjetivo', spanish: 'feliz', frequency: 3 },
    { greek: 'ἀληθής', type: 'adjetivo', spanish: 'verdadero', frequency: 109 },
    { greek: 'πᾶς', type: 'adjetivo', spanish: 'todo', frequency: 1243 },
    { greek: 'γλυκύς', type: 'adjetivo', spanish: 'dulce', frequency: 2 },
    { greek: 'πολύς', type: 'adjetivo', spanish: 'mucho', frequency: 416 },
    { greek: 'μέγας', type: 'adjetivo', spanish: 'grande', frequency: 243 },
    { greek: 'βαθύς', type: 'adjetivo', spanish: 'profundo', frequency: 13 },
    { greek: 'ταχύς', type: 'adjetivo', spanish: 'rápido', frequency: 18 }
  ],
  exercises: [
    {
      id: 'ex-17-1',
      type: 'flashcard',
      title: 'Flashcards - Adjetivos de 2ª y 3ª Clase',
      description: 'Traduce adjetivos de 2ª y 3ª clase',
      items: [
        {
          id: 'fc-17-1',
          question: 'ἀληθής',
          options: ['verdadero'],
          correctAnswer: 0,
          explanation: 'ἀληθής (nominativo singular) = verdadero. Adjetivo de 2ª clase, tema en -ης.'
        },
        {
          id: 'fc-17-2',
          question: 'πᾶς',
          options: ['todo'],
          correctAnswer: 0,
          explanation: 'πᾶς (nominativo singular masculino) = todo. Adjetivo de 3ª clase, tema en -ντ.'
        },
        {
          id: 'fc-17-3',
          question: 'γλυκύς',
          options: ['dulce'],
          correctAnswer: 0,
          explanation: 'γλυκύς (nominativo singular masculino) = dulce. Adjetivo de 3ª clase, tema en -υ.'
        },
        {
          id: 'fc-17-4',
          question: 'πολύς',
          options: ['mucho'],
          correctAnswer: 0,
          explanation: 'πολύς (nominativo singular masculino) = mucho. Adjetivo irregular con declinación mixta.'
        },
        {
          id: 'fc-17-5',
          question: 'μέγας',
          options: ['grande'],
          correctAnswer: 0,
          explanation: 'μέγας (nominativo singular masculino) = grande. Adjetivo irregular con declinación mixta.'
        },
        {
          id: 'fc-17-6',
          question: 'βαθύς',
          options: ['profundo'],
          correctAnswer: 0,
          explanation: 'βαθύς (nominativo singular masculino) = profundo. Adjetivo de 3ª clase, tema en -υ.'
        }
      ]
    },
    {
      id: 'ex-17-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Identificacion de Formas',
      description: 'Identifica la forma correcta según el caso',
      items: [
        {
          id: 'mc-17-1',
          question: 'Cual es el nominativo plural de ἀληθής?',
          options: ['ἀληθής', 'ἀληθεῖς', 'ἀληθῆ'],
          correctAnswer: 1,
          explanation: 'ἀληθεῖς es el nominativo plural. Contracción vocálica característica.'
        },
        {
          id: 'mc-17-2',
          question: 'Cual es el acusativo singular de πᾶς (masculino)?',
          options: ['πᾶς', 'πάντα', 'πάντες'],
          correctAnswer: 1,
          explanation: 'πάντα es el acusativo singular masculino. Tema en -ντ.'
        },
        {
          id: 'mc-17-3',
          question: 'Cual es el genitivo singular de γλυκύς?',
          options: ['γλυκύς', 'γλυκέος', 'γλυκῶν'],
          correctAnswer: 1,
          explanation: 'γλυκέος es el genitivo singular. Contracción vocálica.'
        },
        {
          id: 'mc-17-4',
          question: 'Cual es el nominativo plural de πολύς?',
          options: ['πολύς', 'πολλοί', 'πολλά'],
          correctAnswer: 1,
          explanation: 'πολλοί es el nominativo plural masculino. Adjetivo irregular.'
        },
        {
          id: 'mc-17-5',
          question: 'Cual es el acusativo singular de μέγας (neutro)?',
          options: ['μέγα', 'μέγαν', 'μεγάλα'],
          correctAnswer: 0,
          explanation: 'μέγα es el acusativo singular neutro. Tema especial en nominativo.'
        }
      ]
    },
    {
      id: 'ex-17-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas de Adjetivos',
      description: 'Evalua tus conocimientos sobre adjetivos de 2ª y 3ª clase',
      items: [
        {
          id: 'tf-17-1',
          question: 'Los adjetivos de 2ª clase tienen tres terminaciones',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. Los adjetivos de 2ª clase tienen dos terminaciones.'
        },
        {
          id: 'tf-17-2',
          question: 'ἀληθής es un adjetivo de 2ª clase con tema en -ης',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. ἀληθής es un adjetivo de 2ª clase con tema silbante.'
        },
        {
          id: 'tf-17-3',
          question: 'El femenino de γλυκύς se declina por la 3ª declinación',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El femenino γλυκεῖα se declina por la 1ª declinación.'
        },
        {
          id: 'tf-17-4',
          question: 'πολύς tiene una declinación mixta con doble tema',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. πολύς es un adjetivo irregular con declinación mixta.'
        },
        {
          id: 'tf-17-5',
          question: 'Todos los participios pertenecen a la 3ª clase de adjetivos',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El participio de perfecto activo tiene tema dental y no pertenece a la 3ª clase.'
        }
      ]
    },
    {
      id: 'ex-17-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Formas',
      description: 'Empareja cada forma griega con su traduccion y caso',
      items: [
        {
          id: 'match-17-1',
          description: 'Empareja formas de adjetivos',
          pairs: [
            { left: 'ἀληθής', right: 'verdadero (nom. sg.)' },
            { left: 'ἀληθεῖς', right: 'verdaderos (nom. pl.)' },
            { left: 'πᾶς', right: 'todo (nom. sg. masc.)' },
            { left: 'πάντα', right: 'todos (acus. sg./pl.)' },
            { left: 'γλυκύς', right: 'dulce (nom. sg. masc.)' },
            { left: 'πολύς', right: 'mucho (nom. sg. masc.)' },
            { left: 'πολλοί', right: 'muchos (nom. pl. masc.)' },
            { left: 'μέγας', right: 'grande (nom. sg. masc.)' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente las formas y sus casos.'
        }
      ]
    },
    {
      id: 'ex-17-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Adjetivos',
      description: 'Completa con la forma correcta del adjetivo',
      items: [
        {
          id: 'fb-17-1',
          question: 'La _____ verdad (verdadero, nominativo singular femenino)',
          options: ['ἀληθής', 'ἀληθῆ', 'ἀληθοῦς'],
          correctAnswer: 0,
          explanation: 'ἀληθής es el nominativo singular femenino. Misma forma que masculino.'
        },
        {
          id: 'fb-17-2',
          question: 'Todos los _____ (todo, acusativo plural masculino)',
          options: ['πάντες', 'πάντα', 'παντός'],
          correctAnswer: 1,
          explanation: 'πάντα es el acusativo plural. Forma neutra del plural.'
        },
        {
          id: 'fb-17-3',
          question: 'El vino _____ (dulce, nominativo singular neutro)',
          options: ['γλυκύν', 'γλυκύ', 'γλυκέος'],
          correctAnswer: 1,
          explanation: 'γλυκύ es el nominativo singular neutro. Tema especial.'
        },
        {
          id: 'fb-17-4',
          question: 'Muchos _____ (mucho, nominativo plural masculino)',
          options: ['πολύς', 'πολλοί', 'πολλά'],
          correctAnswer: 1,
          explanation: 'πολλοί es el nominativo plural masculino. Tema πολλό.'
        },
        {
          id: 'fb-17-5',
          question: 'El _____ poder (grande, nominativo singular neutro)',
          options: ['μέγας', 'μέγα', 'μεγάλη'],
          correctAnswer: 1,
          explanation: 'μέγα es el nominativo singular neutro. Tema especial.'
        }
      ]
    },
    {
      id: 'ex-17-6',
      type: 'translation',
      title: 'Traduccion - Oraciones Completas',
      description: 'Traduce oraciones con adjetivos de 2ª y 3ª clase',
      items: [
        {
          id: 'tr-17-1',
          question: 'ἡ ἀληθὴς λόγος',
          options: ['la palabra verdadera', 'la verdadera palabra', 'palabras verdaderas'],
          correctAnswer: 0,
          explanation: 'ἡ ἀληθὴς λόγος = la palabra verdadera. ἀληθής es nominativo singular.'
        },
        {
          id: 'tr-17-2',
          question: 'πᾶς ὁ λαός',
          options: ['todo el pueblo', 'el pueblo entero', 'todos los pueblos'],
          correctAnswer: 0,
          explanation: 'πᾶς ὁ λαός = todo el pueblo. Uso atributivo de πᾶς.'
        },
        {
          id: 'tr-17-3',
          question: 'γλυκὺ τὸ ὕδωρ',
          options: ['el agua dulce', 'agua dulce', 'las aguas dulces'],
          correctAnswer: 0,
          explanation: 'γλυκὺ τὸ ὕδωρ = el agua dulce. γλυκύ es nominativo singular neutro.'
        },
        {
          id: 'tr-17-4',
          question: 'πολλοὶ ἄνθρωποι',
          options: ['muchos hombres', 'el hombre mucho', 'hombres muchos'],
          correctAnswer: 0,
          explanation: 'πολλοὶ ἄνθρωποι = muchos hombres. πολλοί es nominativo plural masculino.'
        },
        {
          id: 'tr-17-5',
          question: 'τὸ μέγα ἔργον',
          options: ['la gran obra', 'la obra grande', 'obras grandes'],
          correctAnswer: 0,
          explanation: 'τὸ μέγα ἔργον = la gran obra. μέγα es nominativo singular neutro.'
        }
      ]
    }
  ]
};

export const lesson18: Lesson = {
  id: 'lesson-18',
  number: 18,
  title: 'Pronombres Relativos, Interrogativos e Indefinidos',
  introduction: 'Los pronombres relativos, interrogativos e indefinidos constituyen categorías fundamentales en la gramática griega del Nuevo Testamento. Los pronombres relativos (ὅς, ὅστις) introducen oraciones subordinadas adjetivas y requieren concordancia en género y número con sus antecedentes. Los interrogativos (τίς, τί) formulan preguntas y pueden desempeñar función de relativos. Los indefinidos (τις, τι) expresan indeterminación y son enclíticos. La comprensión de estos pronombres es esencial para el análisis sintáctico de textos griegos del NT.',
  sections: [
    {
      id: 'sec-18-1',
      title: '18.1 Pronombres Relativos - Forma Básica',
      content: 'El pronombre relativo básico ὅς, ἥ, ὅ significa "el que", "la que", "lo que" o "quien", "cual" según el contexto. Su declinación es casi idéntica a la del artículo pero sin τ inicial y siempre con acento. Esto evita confusión entre las formas del artículo y las del pronombre relativo.',
      subsections: [
        {
          title: 'Paradigma: ὅς, ἥ, ὅ "el que"',
          content: 'Este pronombre relativo es la forma más común en el Nuevo Testamento. La declinación sigue patrones similares al artículo definido pero con acento distintivo.',
          items: [
            'Sg. Nom. ὅς, ἥ, ὅ | Pl. οἵ, αἵ, ἅ',
            'Sg. Acus. ὅν, ἥν, ὅ | Pl. οὕς, ἅς, ἅ',
            'Sg. Gen. οὗ, ἧς, οὗ | Pl. ὧν, ὧν, ὧν',
            'Sg. Dat. ᾧ, ᾗ, ᾧ | Pl. οἷς, αἷς, οἷς'
          ]
        },
        {
          title: 'Diferenciación de Formas',
          content: 'El acento es fundamental para distinguir el pronombre relativo de otras formas. La forma ἥ (pronombre relativo femenino) se diferencia de ἤ (partícula disyuntiva o comparativa) y de ἆ (adverbio o partícula interrogativa retórica).',
          items: [
            'ἥ (con acento agudo) = pronombre relativo femenino',
            'ἤ (con acento grave) = partícula disyuntiva o comparativa',
            'ἆ (sin acento) = adverbio o partícula interrogativa'
          ]
        }
      ]
    },
    {
      id: 'sec-18-2',
      title: '18.2 Pronombres Relativos - Formas Derivadas',
      content: 'Existen dos formas derivadas del pronombre relativo básico. La forma ὅσπερ es reforzada por la partícula per que permanece invariable. La forma ὅστις combina el relativo con el indefinido τις, y ambos pronombres se declinan. En griego helenístico y en el NT, especialmente en Lucas, ὅστις suele tener el mismo valor que ὅς.',
      subsections: [
        {
          title: 'Paradigma: ὅστις, ἥτις, ὅ τι "quienquiera que"',
          content: 'Esta forma combina características del relativo y del indefinido. En el NT solo se encuentran ciertos casos: nominativo singular (masculino, femenino y neutro), genitivo singular (masculino) y nominativo plural (masculino, femenino y neutro).',
          items: [
            'Sg. Nom. ὅστις, ἥτις, ὅ τι | Pl. οἵτινες, αἵτινες, ἅτινα',
            'Sg. Acus. ὅντινα, ἥντινα, ὅ τι | Pl. οὕστινας, ἅστινας, ἅτινα',
            'Sg. Gen. οὗτινος, ἧστινος, οὗτινος | Pl. ὧντινων, ὧντινων, ὧντινων',
            'Sg. Dat. ᾧτινι, ἧτινι, ᾧτινι | Pl. οἷστισι, αἷστισι, οἷστισι'
          ]
        }
      ]
    },
    {
      id: 'sec-18-3',
      title: '18.3 Sintaxis del Relativo - Concordancia y Función',
      content: 'El pronombre relativo introduce una oración subordinada adjetiva a partir de dos oraciones simples que tienen un nombre en común. El relativo sustituye a ese nombre en su frase y debe concordar con él en género y número, pero no en caso, pues cada uno puede desempeñar una función diferente. Esta es la característica fundamental de la sintaxis del relativo en griego.',
      subsections: [
        {
          title: 'Reglas de Concordancia',
          content: 'El pronombre relativo debe concordar con su antecedente en género y número. Sin embargo, el caso del relativo está determinado por su función en la oración subordinada, no por el caso del antecedente.',
          items: [
            'Concordancia obligatoria: género y número',
            'Caso independiente: determinado por la función sintáctica',
            'El antecedente puede omitirse (antecedente tácito o implícito)',
            'Especialmente frecuente cuando el antecedente es el demostrativo οὗτος'
          ]
        }
      ]
    },
    {
      id: 'sec-18-4',
      title: '18.4 Fenómenos Sintácticos Especiales - Atracción del Relativo',
      content: 'La atracción del relativo es un fenómeno sintáctico por el que el pronombre relativo, en lugar de aparecer en el caso que le exigiría su función sintáctica, aparece en el mismo caso que su antecedente. Se da principalmente cuando el antecedente está en genitivo o dativo y el relativo hace función de complemento directo. En estos casos, el relativo suele ir también en genitivo o dativo.',
      subsections: [
        {
          title: 'Atracción del Relativo',
          content: 'Este fenómeno es muy frecuente en textos griegos del NT. El relativo es "atraído" al caso de su antecedente, abandonando el caso que le correspondería por su función sintáctica.',
          items: [
            'Se da principalmente con antecedentes en genitivo o dativo',
            'El relativo hace función de complemento directo',
            'Muy frecuente en el NT, especialmente en Lucas'
          ]
        },
        {
          title: 'Atracción Inversa',
          content: 'A veces se encuentra el fenómeno inverso: el término que antecede al relativo es atraído por este a su caso. Este fenómeno es menos frecuente pero importante para el análisis sintáctico.',
          items: [
            'El antecedente es atraído por el relativo a su caso',
            'Menos frecuente que la atracción del relativo',
            'Importante para la comprensión de la sintaxis compleja'
          ]
        }
      ]
    },
    {
      id: 'sec-18-5',
      title: '18.5 Pronombres-Adjetivos Interrogativos',
      content: 'El pronombre interrogativo τίς, τί significa "quién", "qué", "cuál" según el contexto. Las primeras formas sirven para masculino y femenino, mientras que la segunda es la forma neutra. El pronombre interrogativo lleva acento agudo en la sílaba del tema y no lo cambia a grave en las formas monosílabas en el curso de la frase. Esto lo diferencia del indefinido τις.',
      subsections: [
        {
          title: 'Paradigma: τίς, τί "quién", "qué"',
          content: 'El pronombre interrogativo tiene una declinación regular que sigue patrones de la tercera declinación. El acento es fundamental para distinguirlo del indefinido.',
          items: [
            'Sg. Nom. τίς, τί | Pl. τίνες, τίνα',
            'Sg. Acus. τίνα, τί | Pl. τίνας, τίνα',
            'Sg. Gen. τίνος, τίνος | Pl. τίνων, τίνων',
            'Sg. Dat. τίνι, τίνι | Pl. τίσι(ν), τίσι(ν)'
          ]
        },
        {
          title: 'Otros Pronombres Interrogativos',
          content: 'Además del pronombre básico τίς, existen otros pronombres interrogativos que expresan diferentes tipos de preguntas.',
          items: [
            'πόσος, -η, -ον "¿cuán grande?", "¿cuántos (pl.)?"',
            'ποῖος, -α, -ον "¿cuál?", "¿de qué clase?"'
          ]
        }
      ]
    },
    {
      id: 'sec-18-6',
      title: '18.6 Pronombres-Adjetivos Indefinidos',
      content: 'El pronombre indefinido τις, τι significa "alguien", "algún", "alguno", "algo" según el contexto. Las primeras formas sirven para masculino y femenino, mientras que la segunda es la forma neutra. Este pronombre es enclítico y no puede nunca empezar una frase. Se diferencia del interrogativo τίς por el acento.',
      subsections: [
        {
          title: 'Paradigma: τις, τι "alguien", "algo"',
          content: 'El pronombre indefinido tiene una declinación regular. Su carácter enclítico es fundamental para su identificación y uso correcto.',
          items: [
            'Sg. Nom. τις, τι | Pl. τινές, τινά',
            'Sg. Acus. τινά, τι | Pl. τινάς, τινά',
            'Sg. Gen. τινός, τινός | Pl. τινῶν, τινῶν',
            'Sg. Dat. τινί, τινί | Pl. τισί(ν), τισί(ν)'
          ]
        },
        {
          title: 'Características Especiales',
          content: 'El pronombre indefinido tiene características únicas que lo distinguen de otros pronombres. En el NT se emplea a menudo el numeral εἷς en lugar de τις, funcionando como artículo indeterminado.',
          items: [
            'Es enclítico: no puede empezar una frase',
            'Se diferencia del interrogativo por el acento',
            'En el NT suele usarse εἷς como artículo indeterminado',
            'Muy frecuente en textos narrativos'
          ]
        }
      ]
    },
    {
      id: 'sec-18-7',
      title: '18.7 Otros Pronombres-Adjetivos Indefinidos',
      content: 'Además del pronombre básico τις, existen otros pronombres indefinidos que expresan diferentes tipos de indeterminación. Algunos de estos pronombres tienen características especiales de declinación o uso.',
      subsections: [
        {
          title: 'Pronombres Indefinidos Principales',
          content: 'Estos pronombres expresan diversos tipos de indeterminación y son fundamentales en la expresión griega.',
          items: [
            'ἄλλος, -η, -ον "otro"',
            'ἀμφότερος, -α, -ον "el uno y el otro" (en NT indica "muchos")',
            'ἕτερος, -α, -ον "el otro" (entre dos personas o cosas)',
            'ἕκαστος, -η, -ον "cada uno"',
            'οὐδείς, οὐδεμία, οὐδέν "nadie", "ninguno", "nada"',
            'μηδείς, μηδεμία, μηδέν "nadie", "ninguno", "nada"'
          ]
        },
        {
          title: 'Declinación de Pronombres Negativos',
          content: 'Los pronombres negativos οὐδείς y μηδείς tienen una declinación especial que sigue el patrón del numeral εἷς, μία, ἕν "uno".',
          items: [
            'Se declinan como el numeral εἷς, μία, ἕν',
            'Expresan negación total: "nadie", "ninguno", "nada"',
            'Muy frecuentes en textos del NT'
          ]
        }
      ]
    },
    {
      id: 'sec-18-8',
      title: '18.8 Resumen y Aplicaciones Prácticas',
      content: 'Los pronombres relativos, interrogativos e indefinidos son fundamentales para la comprensión de textos griegos del Nuevo Testamento. Su correcta identificación y análisis sintáctico es esencial para la traducción y exégesis de versículos del NT.',
      subsections: [
        {
          title: 'Características Clave',
          content: 'Resumen de las características principales de cada tipo de pronombre.',
          items: [
            'Relativos: concordancia en género y número, caso independiente',
            'Interrogativos: acento agudo, formulan preguntas',
            'Indefinidos: enclíticos, expresan indeterminación',
            'Atracción del relativo: fenómeno sintáctico importante',
            'Prolepsis: anticipación de la proposición de relativo'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'ὅς', type: 'pronombre', spanish: 'el que, quien', frequency: 1365 },
    { greek: 'ὅστις', type: 'pronombre', spanish: 'quienquiera que', frequency: 144 },
    { greek: 'τίς', type: 'pronombre', spanish: 'quien, que (interrogativo)', frequency: 555 },
    { greek: 'τις', type: 'pronombre', spanish: 'alguien, algo', frequency: 524 },
    { greek: 'ἄλλος', type: 'pronombre', spanish: 'otro', frequency: 155 },
    { greek: 'ἕτερος', type: 'pronombre', spanish: 'el otro', frequency: 98 },
    { greek: 'ἕκαστος', type: 'pronombre', spanish: 'cada uno', frequency: 82 },
    { greek: 'οὐδείς', type: 'pronombre', spanish: 'nadie, ninguno', frequency: 234 }
  ],
  exercises: [
    {
      id: 'ex-18-1',
      type: 'flashcard',
      title: 'Flashcards - Pronombres Relativos, Interrogativos e Indefinidos',
      description: 'Traduce pronombres y identifica su tipo',
      items: [
        {
          id: 'fc-18-1',
          question: 'ὅς',
          options: ['el que, quien (relativo)'],
          correctAnswer: 0,
          explanation: 'ὅς es el pronombre relativo básico. Introduce oraciones subordinadas adjetivas.'
        },
        {
          id: 'fc-18-2',
          question: 'ὅστις',
          options: ['quienquiera que (relativo)'],
          correctAnswer: 0,
          explanation: 'ὅστις es una forma derivada del relativo que combina características del relativo e indefinido.'
        },
        {
          id: 'fc-18-3',
          question: 'τίς',
          options: ['quien, que (interrogativo)'],
          correctAnswer: 0,
          explanation: 'τίς es el pronombre interrogativo. Lleva acento agudo en la sílaba del tema.'
        },
        {
          id: 'fc-18-4',
          question: 'τις',
          options: ['alguien, algo (indefinido)'],
          correctAnswer: 0,
          explanation: 'τις es el pronombre indefinido. Es enclítico y no puede empezar una frase.'
        },
        {
          id: 'fc-18-5',
          question: 'ἄλλος',
          options: ['otro (indefinido)'],
          correctAnswer: 0,
          explanation: 'ἄλλος es un pronombre indefinido que significa "otro".'
        },
        {
          id: 'fc-18-6',
          question: 'οὐδείς',
          options: ['nadie, ninguno (indefinido)'],
          correctAnswer: 0,
          explanation: 'οὐδείς es un pronombre indefinido negativo. Se declina como εἷς, μία, ἕν.'
        }
      ]
    },
    {
      id: 'ex-18-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Identificacion de Pronombres',
      description: 'Identifica el tipo correcto de pronombre',
      items: [
        {
          id: 'mc-18-1',
          question: 'Cual es la forma nominativo plural de ὅς?',
          options: ['ὅς', 'οἵ', 'ὧν'],
          correctAnswer: 1,
          explanation: 'οἵ es el nominativo plural masculino del pronombre relativo ὅς.'
        },
        {
          id: 'mc-18-2',
          question: 'Cual es la diferencia principal entre τίς y τις?',
          options: ['El acento', 'El género', 'La declinación'],
          correctAnswer: 0,
          explanation: 'τίς (interrogativo) tiene acento agudo; τις (indefinido) es enclítico sin acento.'
        },
        {
          id: 'mc-18-3',
          question: 'Cual es el nominativo singular neutro de ὅστις?',
          options: ['ὅστι', 'ὅ τι', 'ὅτι'],
          correctAnswer: 1,
          explanation: 'ὅ τι es el nominativo singular neutro de ὅστις. Se escribe separadamente.'
        },
        {
          id: 'mc-18-4',
          question: 'Como se declina οὐδείς?',
          options: ['Como ὅς', 'Como εἷς, μία, ἕν', 'Como τίς'],
          correctAnswer: 1,
          explanation: 'οὐδείς se declina como el numeral εἷς, μία, ἕν "uno".'
        },
        {
          id: 'mc-18-5',
          question: 'Cual es el acusativo singular de τίς?',
          options: ['τίς', 'τίνα', 'τίνος'],
          correctAnswer: 1,
          explanation: 'τίνα es el acusativo singular del pronombre interrogativo τίς.'
        }
      ]
    },
    {
      id: 'ex-18-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas de Pronombres',
      description: 'Evalua tus conocimientos sobre pronombres',
      items: [
        {
          id: 'tf-18-1',
          question: 'El pronombre relativo ὅς tiene la misma declinación que el artículo definido',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. La declinación es casi idéntica pero sin τ inicial y siempre con acento.'
        },
        {
          id: 'tf-18-2',
          question: 'El pronombre indefinido τις es enclítico',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. τις es enclítico y no puede nunca empezar una frase.'
        },
        {
          id: 'tf-18-3',
          question: 'El pronombre relativo debe concordar con su antecedente en caso',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. Debe concordar en género y número, pero el caso es independiente.'
        },
        {
          id: 'tf-18-4',
          question: 'La atracción del relativo es un fenómeno sintáctico frecuente en el NT',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. Es muy frecuente, especialmente cuando el antecedente está en gen. o dat.'
        },
        {
          id: 'tf-18-5',
          question: 'ὅστις y ὅς tienen exactamente el mismo significado en el NT',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. En griego helenístico y en el NT, ὅστις suele tener el mismo valor que ὅς, pero no siempre.'
        }
      ]
    },
    {
      id: 'ex-18-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Pronombres',
      description: 'Empareja cada pronombre con su traduccion y tipo',
      items: [
        {
          id: 'match-18-1',
          description: 'Empareja pronombres con sus características',
          pairs: [
            { left: 'ὅς', right: 'relativo, concordancia obligatoria' },
            { left: 'τίς', right: 'interrogativo, acento agudo' },
            { left: 'τις', right: 'indefinido, enclítico' },
            { left: 'ἄλλος', right: 'indefinido, significa otro' },
            { left: 'οὐδείς', right: 'indefinido negativo' },
            { left: 'ὅστις', right: 'relativo derivado, quienquiera que' },
            { left: 'ἕτερος', right: 'indefinido, entre dos cosas' },
            { left: 'ἕκαστος', right: 'indefinido, cada uno' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente los pronombres y sus características.'
        }
      ]
    },
    {
      id: 'ex-18-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Pronombres',
      description: 'Completa con la forma correcta del pronombre',
      items: [
        {
          id: 'fb-18-1',
          question: 'El hombre _____ vino (quien, nominativo singular)',
          options: ['ὅς', 'ὅν', 'οὗ'],
          correctAnswer: 0,
          explanation: 'ὅς es el nominativo singular masculino del pronombre relativo.'
        },
        {
          id: 'fb-18-2',
          question: '_____ es tu nombre? (quien, nominativo singular)',
          options: ['τις', 'τίς', 'τινα'],
          correctAnswer: 1,
          explanation: 'τίς es el nominativo singular del pronombre interrogativo con acento agudo.'
        },
        {
          id: 'fb-18-3',
          question: 'Alguien _____ vino (alguien, nominativo singular)',
          options: ['τις', 'τίς', 'τινα'],
          correctAnswer: 0,
          explanation: 'τις es el nominativo singular del pronombre indefinido, enclítico.'
        },
        {
          id: 'fb-18-4',
          question: 'El _____ día (otro, nominativo singular masculino)',
          options: ['ἄλλος', 'ἄλλον', 'ἄλλου'],
          correctAnswer: 0,
          explanation: 'ἄλλος es el nominativo singular masculino del pronombre indefinido.'
        },
        {
          id: 'fb-18-5',
          question: '_____ vino (nadie, nominativo singular)',
          options: ['οὐδείς', 'οὐδέν', 'οὐδεμία'],
          correctAnswer: 0,
          explanation: 'οὐδείς es el nominativo singular masculino del pronombre indefinido negativo.'
        }
      ]
    },
    {
      id: 'ex-18-6',
      type: 'translation',
      title: 'Traduccion - Oraciones Completas',
      description: 'Traduce oraciones con pronombres relativos, interrogativos e indefinidos',
      items: [
        {
          id: 'tr-18-1',
          question: 'ὁ ἀνὴρ ὅς ἦλθεν',
          options: ['el hombre que vino', 'el hombre quien vino', 'el hombre al que vino'],
          correctAnswer: 0,
          explanation: 'ὅς es el pronombre relativo nominativo singular. Introduce una subordinada adjetiva.'
        },
        {
          id: 'tr-18-2',
          question: 'τίς ἐστιν;',
          options: ['¿quien es?', 'alguien es', 'otro es'],
          correctAnswer: 0,
          explanation: 'τίς es el pronombre interrogativo. Formúla una pregunta sobre la identidad.'
        },
        {
          id: 'tr-18-3',
          question: 'τις ἦλθεν',
          options: ['alguien vino', '¿quien vino?', 'otro vino'],
          correctAnswer: 0,
          explanation: 'τις es el pronombre indefinido. Expresa indeterminación.'
        },
        {
          id: 'tr-18-4',
          question: 'ἄλλος ἀνθρωπος',
          options: ['otro hombre', 'el otro hombre', 'algunos hombres'],
          correctAnswer: 0,
          explanation: 'ἄλλος es el pronombre indefinido que significa "otro".'
        },
        {
          id: 'tr-18-5',
          question: 'οὐδείς ἦλθεν',
          options: ['nadie vino', 'alguien vino', 'otro vino'],
          correctAnswer: 0,
          explanation: 'οὐδείς es el pronombre indefinido negativo. Expresa negación total.'
        }
      ]
    }
  ]
};

export const lesson19: Lesson = {
  id: 'lesson-19',
  number: 19,
  title: 'Grados del Adjetivo: Comparativo y Superlativo',
  introduction: 'Los adjetivos griegos pueden expresar tres grados: positivo (σοφός "sabio"), comparativo (σοφώτερος "más sabio") y superlativo (σοφώτατος "sapientísimo"). El comparativo expresa superioridad o intensidad, mientras que el superlativo expresa la cualidad en su grado máximo. En el Nuevo Testamento se encuentran formas regulares e irregulares, así como construcciones perifrásticas con adverbios como μᾶλλον "más". La comprensión de estos grados es esencial para la exégesis de textos griegos.',
  sections: [
    {
      id: 'sec-19-1',
      title: '19.1 Sufijos y Significación del Comparativo',
      content: 'El comparativo en griego puede formarse de dos maneras principales. La forma más común utiliza los sufijos -τερος, -τέρα, -τερον para expresar superioridad o intensidad. El sufijo -ιων, -ιον también se utiliza, especialmente en adjetivos de ciertas terminaciones. El segundo término de la comparación puede expresarse en genitivo o mediante la partícula ἤ con el mismo caso que el primer término.',
      subsections: [
        {
          title: 'Formación del Comparativo con -τερος',
          content: 'Este es el sufijo más frecuente para formar comparativos. Los adjetivos de primera clase (terminados en -ος) forman el comparativo suprimiendo la -ς final y sustituyéndola por el sufijo. Si la penúltima sílaba es breve, la -ο final cambia a -ω.',
          items: [
            'μικρός "pequeño" → μικρότερος "más pequeño"',
            'σοφός "sabio" → σοφώτερος "más sabio"',
            'κακός "malo" → κακώτερος "más malo"'
          ]
        },
        {
          title: 'Significación del Comparativo',
          content: 'El comparativo puede expresar dos significaciones diferentes según el contexto. La significación de superioridad establece una comparación entre dos términos. La significación intensiva no tiene segundo término y se traduce mediante adverbios como "muy", "bastante", "demasiado".',
          items: [
            'Superioridad: σοφώτερος τοῦ φίλου "más sabio que el amigo"',
            'Intensivo: σοφώτερος "muy sabio, bastante sabio"',
            'Segundo término en genitivo o con partícula ἤ'
          ]
        }
      ]
    },
    {
      id: 'sec-19-2',
      title: '19.2 Sufijos y Significación del Superlativo',
      content: 'El superlativo expresa la cualidad en su grado máximo. En griego clásico se forma principalmente con el sufijo -τατος, -τάτη, -τατον. En el Nuevo Testamento este sufijo es raro y aparece solo en cuatro adjetivos: ἁγιώτατος, ἀκριβεστάτην, τιμιώτατου, τιμιώτατῃ. Lo más frecuente es que se forme con el sufijo -ιστος, -ίστη, -ιστον.',
      subsections: [
        {
          title: 'Superlativo Absoluto',
          content: 'El superlativo absoluto expresa la cualidad en su grado máximo sin comparación con otros términos. No hay segundo término de comparación.',
          items: [
            'σοφώτατος "sapientísimo"',
            'κάκιστος "malísimo"',
            'No hay segundo término'
          ]
        },
        {
          title: 'Superlativo Relativo',
          content: 'El superlativo relativo compara más de dos términos. El régimen se forma en genitivo partitivo (expresando "de entre") o en dativo regido de preposiciones como ἐν o παρά.',
          items: [
            'σοφώτατος τῶν φίλων "el más sabio de entre los amigos"',
            'κάκιστος ἐν τῇ βασιλείᾳ "el más malo en el reino"',
            'Genitivo partitivo o dativo con preposición'
          ]
        }
      ]
    },
    {
      id: 'sec-19-3',
      title: '19.3 Formación del Comparativo y Superlativo',
      content: 'La formación del comparativo y superlativo sigue reglas específicas según la terminación del adjetivo positivo. Los adjetivos de primera clase (terminados en -ος) forman el comparativo y superlativo suprimiendo la -ς final. Los adjetivos de segunda y tercera clase (terminados en -ας, -ης, -υς) añaden los sufijos al tema puro.',
      subsections: [
        {
          title: 'Adjetivos de Primera Clase',
          content: 'Los adjetivos terminados en -ος forman el comparativo y superlativo de manera regular. Se suprime la -ς final y se añade el sufijo. Si la penúltima es breve, la -ο final cambia a -ω.',
          items: [
            'μικρός → μικρότερος, μικρότατος',
            'σοφός → σοφώτερος, σοφώτατος',
            'Cambio de -ο a -ω si penúltima es breve'
          ]
        },
        {
          title: 'Adjetivos de Segunda y Tercera Clase',
          content: 'Los adjetivos de segunda y tercera clase terminados en -ας, -ης, -υς forman el comparativo y superlativo añadiendo los sufijos al tema puro.',
          items: [
            'μέλας "negro" → μελάντερος, μελάνταος',
            'ἀκριβής "exacto" → ἀκριβέστερος, ἀκριβέστατος',
            'βραχύς "breve" → βραχύτερος, βραχύτατος'
          ]
        },
        {
          title: 'Adjetivos de Segunda Clase en -ων',
          content: 'Los adjetivos de segunda clase terminados en -ων forman el comparativo y superlativo añadiendo los sufijos -έστερος, -έστατος al tema puro.',
          items: [
            'εὐδαίμων "dichoso" → εὐδαιμονέστερος, εὐδαιμονέστατος',
            'Sufijos especiales: -έστερος, -έστατος',
            'Tema puro + sufijo'
          ]
        },
        {
          title: 'Adjetivos con Sufijos -ιων, -ιστος',
          content: 'Algunos adjetivos, normalmente los acabados en -υς o en -ρος, forman el comparativo añadiendo el sufijo -ιων, -ιον y el superlativo añadiendo -ιστος, -ίστη, -ιστον.',
          items: [
            'ἡδύς "dulce" → ἡδίων, ἡδίστος',
            'κακός "malo" → κακίων, κάκιστος',
            'Sufijos alternativos: -ιων, -ιστος'
          ]
        }
      ]
    },
    {
      id: 'sec-19-4',
      title: '19.4 Declinación del Comparativo',
      content: 'Los comparativos de la forma -ιων, -ιον se declinan por la tercera declinación. Con frecuencia se utilizan las formas contractas. Hay dos raíces en este paradigma: kallion- y kallios-, lo que explica las variaciones en la declinación.',
      subsections: [
        {
          title: 'Paradigma del Comparativo -ιων, -ιον',
          content: 'El comparativo se declina siguiendo la tercera declinación con formas contractas frecuentes.',
          items: [
            'Sg. Nom. καλλίων, κάλλιον | Pl. καλλίους, καλλίω',
            'Sg. Acus. καλλίω, κάλλιον | Pl. καλλίους, καλλίω',
            'Sg. Gen. καλλίον-ος | Pl. καλλίων',
            'Sg. Dat. καλλίον-ι | Pl. καλλίο-σι'
          ]
        }
      ]
    },
    {
      id: 'sec-19-5',
      title: '19.5 Construcciones Perifrásticas del Comparativo',
      content: 'Además de las formas sufijadas, existen otras construcciones para expresar el grado comparativo. Una forma frecuente es mediante el adverbio μᾶλλον "más" más el adjetivo en grado positivo más la partícula ἤ. Otra forma es mediante el adjetivo περισσός "sobreabundante", "superfluo" en grado comparativo con el segundo término en genitivo.',
      subsections: [
        {
          title: 'Comparativo con μᾶλλον + ἤ',
          content: 'Esta construcción perifrástica es muy frecuente en el Nuevo Testamento. El adverbio μᾶλλον introduce el comparativo, y la partícula ἤ introduce el segundo término.',
          items: [
            'μᾶλλον τὸ σκότος ἤ τὸ φῶς "más las tinieblas que la luz"',
            'Peiqarceῖn δεῖ θεῷ μᾶλλον ἤ ἀνθρώποις "es menester obedecer a Dios más que a los hombres"',
            'Muy frecuente en el NT'
          ]
        },
        {
          title: 'Comparativo con περισσός',
          content: 'El adjetivo περισσός "sobreabundante", "superfluo" en grado comparativo puede expresar comparación con el segundo término en genitivo.',
          items: [
            'περισσότερον προφήτου "más que un profeta"',
            'περισσότερόν ἐστιν πάντων τῶν ὁλοκαυτωμάτων "vale mucho más que todos los holocaustos"',
            'Segundo término en genitivo'
          ]
        }
      ]
    },
    {
      id: 'sec-19-6',
      title: '19.6 Comparativos y Superlativos Irregulares',
      content: 'Algunos adjetivos forman el comparativo y superlativo de manera irregular. Los más importantes son: ἀγαθός "bueno" (βελτίων, βέλτιστος), κακός "malo" (χείρων, χείριστος), καλός "hermoso" (καλλίων, κάλλιστος), μικρός "pequeño" (μικρότερος, μικρότατος), πολύς "mucho" (πλείων, πλείστος), μέγας "grande" (μείζων, μέγιστος).',
      subsections: [
        {
          title: 'Adjetivos Irregulares Principales',
          content: 'Estos adjetivos tienen formas comparativas y superlativas irregulares que deben memorizarse.',
          items: [
            'ἀγαθός → βελτίων, βέλτιστος / κρείσσων, κράτιστος',
            'κακός → χείρων, χείριστος / ἥσσων, ἔλαττον',
            'καλός → καλλίων, κάλλιστος',
            'μικρός → μικρότερος, μικρότατος',
            'πολύς → πλείων, πλείστος',
            'μέγας → μείζων, μέγιστος'
          ]
        }
      ]
    },
    {
      id: 'sec-19-7',
      title: '19.7 Construcción del Segundo Término Comparativo',
      content: 'Cuando se establece una comparación, hay dos términos que se relacionan. El segundo término se forma en genitivo o mediante la partícula ἤ con el mismo caso que el primer término. En el Nuevo Testamento, el segundo término del comparativo puede colocarse también con παρά, ὑπέρ o ἀπό más acusativo.',
      subsections: [
        {
          title: 'Segundo Término en Genitivo',
          content: 'El segundo término puede expresarse en genitivo, especialmente cuando es un sustantivo o pronombre.',
          items: [
            'ἰσχυρότερός μου "más fuerte que yo"',
            'El genitivo expresa el término de comparación',
            'Forma más común en textos clásicos'
          ]
        },
        {
          title: 'Segundo Término con Partícula ἤ',
          content: 'La partícula ἤ introduce el segundo término, que va en el mismo caso que el primer término.',
          items: [
            'ἀνεκτότερον ἔσται ἤ ὑμῖν "será más soportable que con vosotros"',
            'Mismo caso para ambos términos',
            'Muy frecuente en el NT'
          ]
        }
      ]
    },
    {
      id: 'sec-19-8',
      title: '19.8 Régimen del Superlativo Relativo',
      content: 'El superlativo relativo, que compara más de dos términos, puede ser absoluto (sin segundo término) o relativo (con segundo término). En el superlativo relativo, el régimen se forma en genitivo partitivo (expresando "de entre") o en dativo regido de preposiciones como ἐν o παρά.',
      subsections: [
        {
          title: 'Superlativo Relativo en Genitivo',
          content: 'El genitivo partitivo expresa un todo del que se toma o considera una parte.',
          items: [
            'ἐλάχιστος τῶν ἐντολῶν "el más pequeño de los mandamientos"',
            'Genitivo partitivo: "de entre"',
            'Muy frecuente en el NT'
          ]
        },
        {
          title: 'Superlativo Relativo en Dativo',
          content: 'El dativo regido de preposiciones como ἐν o παρά puede expresar el régimen del superlativo.',
          items: [
            'ἐλάχιστος ἐν τῇ βασιλείᾳ τῶν οὐρανῶν "el más pequeño en el reino de los cielos"',
            'Dativo con preposición ἐν',
            'Expresa el ámbito o contexto'
          ]
        }
      ]
    },
    {
      id: 'sec-19-9',
      title: '19.9 Observaciones Especiales en el Nuevo Testamento',
      content: 'En el Nuevo Testamento se encuentran varios fenómenos especiales relacionados con los grados del adjetivo. Estos fenómenos se deben al influjo semítico y a la evolución de la koiné. Un adjetivo de grado positivo puede tener significado comparativo, señalado por la partícula ἤ que lo sigue. A veces el adjetivo de grado positivo puede tener significado de superlativo. Otras veces puede ir el comparativo en lugar del superlativo, o viceversa.',
      subsections: [
        {
          title: 'Positivo con Significado Comparativo',
          content: 'Un adjetivo en grado positivo puede expresar comparación cuando va seguido de la partícula ἤ. Esto se debe al influjo semítico, ya que las lenguas semíticas carecen de formas comparativas.',
          items: [
            'καλόν ἐστίν σε εἰσελθεῖν εἰς τὴν ζωὴν κωλὸν ἤ "Es mejor que tú entres cojo en la vida que"',
            'Partícula ἤ introduce el segundo término',
            'Influjo semítico en el NT'
          ]
        },
        {
          title: 'Positivo con Significado de Superlativo',
          content: 'A veces el adjetivo en grado positivo puede tener significado de superlativo.',
          items: [
            'Ὁ γὰρ μικρότερος ἐν πᾶσιν ὑμῖν ὑπάρχων οὗτός ἐστιν μέγας "El que es más pequeño entre vosotros, este es el más grande"',
            'Contexto determina el significado',
            'Confusión de grados en la koiné'
          ]
        },
        {
          title: 'Comparativo en Lugar de Superlativo',
          content: 'Otras veces puede ir el comparativo en lugar del superlativo.',
          items: [
            'νῦν δὲ μένει πίστις, ἐλπίς, ἀγάπη, τὰ τρία ταῦτα: μείζων δὲ τούτων ἡ ἀγάπη',
            '"ahora subsisten estas tres: fe, esperanza y caridad, pero la más grande de ellas es la caridad"',
            'Comparativo en lugar de superlativo'
          ]
        },
        {
          title: 'Superlativo en Lugar de Comparativo',
          content: 'Otras veces se da el proceso inverso, es decir, el superlativo en lugar del comparativo.',
          items: [
            'καὶ ἔσται ἡ ἐσχάτη πλάνη χείρων τῆς πρώτης "y será el último embuste peor que el primero"',
            'Superlativo ἔσχατος en lugar de comparativo',
            'Confusión de dualidad y pluralidad'
          ]
        }
      ]
    },
    {
      id: 'sec-19-10',
      title: '19.10 Palabras Invariables Relacionadas',
      content: 'Existen varias palabras invariables que aparecen frecuentemente con adjetivos comparativos y superlativos. El adverbio interrogativo πόθεν significa "¿de dónde?", "¿dónde?", "¿por qué?", "¿cómo?". La partícula enclítica ποτέ significa "alguna vez", "en un tiempo". El adverbio ἐκεῖθεν significa "de allí", "desde entonces". La preposición ἕνεκα (ἕνεκεν, εἵνεκεν) con genitivo significa "a causa de", "por".',
      subsections: [
        {
          title: 'Palabras Invariables Principales',
          content: 'Estas palabras son fundamentales para la comprensión de textos griegos del NT.',
          items: [
            'πόθεν adv. interrogativo "¿de dónde?", "¿dónde?", "¿por qué?", "¿cómo?"',
            'ποτέ partícula enclítica "alguna vez", "en un tiempo" (οὐ ... ποτέ "nunca")',
            'ἐκεῖθεν adv. "de allí", "desde entonces"',
            'ἕνεκα (ἕνεκεν, εἵνεκεν) prep. gen. "a causa de", "por"'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'σοφός', type: 'adjetivo', spanish: 'sabio', frequency: 20 },
    { greek: 'σοφώτερος', type: 'comparativo', spanish: 'más sabio', frequency: 5 },
    { greek: 'σοφώτατος', type: 'superlativo', spanish: 'sapientísimo', frequency: 1 },
    { greek: 'κακός', type: 'adjetivo', spanish: 'malo', frequency: 50 },
    { greek: 'κακίων', type: 'comparativo', spanish: 'peor', frequency: 8 },
    { greek: 'κάκιστος', type: 'superlativo', spanish: 'malísimo', frequency: 2 },
    { greek: 'μικρός', type: 'adjetivo', spanish: 'pequeño', frequency: 30 },
    { greek: 'μικρότερος', type: 'comparativo', spanish: 'más pequeño', frequency: 6 },
    { greek: 'μικρότατος', type: 'superlativo', spanish: 'pequeñísimo', frequency: 1 },
    { greek: 'πολύς', type: 'adjetivo', spanish: 'mucho', frequency: 416 },
    { greek: 'πλείων', type: 'comparativo', spanish: 'más', frequency: 55 },
    { greek: 'πλείστος', type: 'superlativo', spanish: 'muy mucho', frequency: 10 },
    { greek: 'μέγας', type: 'adjetivo', spanish: 'grande', frequency: 243 },
    { greek: 'μείζων', type: 'comparativo', spanish: 'más grande', frequency: 48 },
    { greek: 'μέγιστος', type: 'superlativo', spanish: 'grandísimo', frequency: 4 },
    { greek: 'ἀγαθός', type: 'adjetivo', spanish: 'bueno', frequency: 102 },
    { greek: 'βελτίων', type: 'comparativo', spanish: 'mejor', frequency: 19 },
    { greek: 'βέλτιστος', type: 'superlativo', spanish: 'óptimo', frequency: 1 },
    { greek: 'καλός', type: 'adjetivo', spanish: 'hermoso, bueno', frequency: 100 },
    { greek: 'καλλίων', type: 'comparativo', spanish: 'más hermoso', frequency: 4 },
    { greek: 'κάλλιστος', type: 'superlativo', spanish: 'hermosísimo', frequency: 1 },
    { greek: 'μᾶλλον', type: 'adverbio', spanish: 'más', frequency: 81 },
    { greek: 'περισσός', type: 'adjetivo', spanish: 'sobreabundante', frequency: 16 },
    { greek: 'ἤ', type: 'partícula', spanish: 'que (en comparativas)', frequency: 343 },
    { greek: 'ἐλάχιστος', type: 'superlativo', spanish: 'muy pequeño', frequency: 12 }
  ],
  exercises: [
    {
      id: 'ex-19-1',
      type: 'flashcard',
      title: 'Flashcards - Grados del Adjetivo',
      description: 'Traduce comparativos y superlativos',
      items: [
        {
          id: 'fc-19-1',
          question: 'σοφώτερος',
          options: ['más sabio (comparativo)'],
          correctAnswer: 0,
          explanation: 'σοφώτερος es el comparativo de σοφός. Expresa superioridad o intensidad.'
        },
        {
          id: 'fc-19-2',
          question: 'σοφώτατος',
          options: ['sapientísimo (superlativo)'],
          correctAnswer: 0,
          explanation: 'σοφώτατος es el superlativo de σοφός. Expresa la cualidad en su grado máximo.'
        },
        {
          id: 'fc-19-3',
          question: 'κακίων',
          options: ['peor (comparativo)'],
          correctAnswer: 0,
          explanation: 'κακίων es el comparativo irregular de κακός. Forma con sufijo -ιων.'
        },
        {
          id: 'fc-19-4',
          question: 'πλείων',
          options: ['más (comparativo)'],
          correctAnswer: 0,
          explanation: 'πλείων es el comparativo irregular de πολύς. Muy frecuente en el NT.'
        },
        {
          id: 'fc-19-5',
          question: 'μείζων',
          options: ['más grande (comparativo)'],
          correctAnswer: 0,
          explanation: 'μείζων es el comparativo irregular de μέγας. Muy frecuente en el NT.'
        },
        {
          id: 'fc-19-6',
          question: 'βελτίων',
          options: ['mejor (comparativo)'],
          correctAnswer: 0,
          explanation: 'βελτίων es el comparativo irregular de ἀγαθός. Expresa superioridad.'
        }
      ]
    },
    {
      id: 'ex-19-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Formacion de Grados',
      description: 'Identifica la forma correcta del comparativo o superlativo',
      items: [
        {
          id: 'mc-19-1',
          question: 'Como se forma el comparativo de μικρός?',
          options: ['μικρώτερος', 'μικρότερος', 'μικρίων'],
          correctAnswer: 1,
          explanation: 'μικρότερος es la forma correcta. Sufijo -τερος añadido al tema.'
        },
        {
          id: 'mc-19-2',
          question: 'Cual es el superlativo de πολύς?',
          options: ['πολύτατος', 'πλείστος', 'πολλίστος'],
          correctAnswer: 1,
          explanation: 'πλείστος es el superlativo irregular de πολύς. Forma con sufijo -ιστος.'
        },
        {
          id: 'mc-19-3',
          question: 'Como se forma el comparativo de ἀγαθός?',
          options: ['ἀγαθώτερος', 'βελτίων', 'ἀγαθίων'],
          correctAnswer: 1,
          explanation: 'βελτίων es la forma correcta. ἀγαθός tiene comparativo irregular.'
        },
        {
          id: 'mc-19-4',
          question: 'Cual es el superlativo de καλός?',
          options: ['καλώτατος', 'κάλλιστος', 'καλίστος'],
          correctAnswer: 1,
          explanation: 'κάλλιστος es el superlativo de καλός. Forma con sufijo -ιστος.'
        },
        {
          id: 'mc-19-5',
          question: 'Como se expresa el segundo término en comparativas?',
          options: ['Siempre en nominativo', 'En genitivo o con partícula ἤ', 'Siempre en acusativo'],
          correctAnswer: 1,
          explanation: 'El segundo término puede ir en genitivo o con partícula ἤ + mismo caso.'
        }
      ]
    },
    {
      id: 'ex-19-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas de Grados',
      description: 'Evalua tus conocimientos sobre comparativos y superlativos',
      items: [
        {
          id: 'tf-19-1',
          question: 'El comparativo siempre expresa superioridad',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El comparativo puede expresar superioridad o intensidad (sin segundo término).'
        },
        {
          id: 'tf-19-2',
          question: 'El superlativo -τατος es muy frecuente en el Nuevo Testamento',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. En el NT solo aparece en cuatro adjetivos. Lo más frecuente es -ιστος.'
        },
        {
          id: 'tf-19-3',
          question: 'El superlativo relativo requiere un segundo término',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. El superlativo relativo compara más de dos términos.'
        },
        {
          id: 'tf-19-4',
          question: 'μᾶλλον es un adverbio que significa "más"',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. μᾶλλον se usa para formar comparativos perifrásticos.'
        },
        {
          id: 'tf-19-5',
          question: 'El comparativo -ιων se declina por la primera declinación',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. Se declina por la tercera declinación con formas contractas.'
        }
      ]
    },
    {
      id: 'ex-19-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Formas',
      description: 'Empareja adjetivos con sus comparativos y superlativos',
      items: [
        {
          id: 'match-19-1',
          description: 'Empareja adjetivos con sus grados',
          pairs: [
            { left: 'σοφός', right: 'σοφώτερος, σοφώτατος' },
            { left: 'κακός', right: 'κακίων, κάκιστος' },
            { left: 'μικρός', right: 'μικρότερος, μικρότατος' },
            { left: 'πολύς', right: 'πλείων, πλείστος' },
            { left: 'μέγας', right: 'μείζων, μέγιστος' },
            { left: 'ἀγαθός', right: 'βελτίων, βέλτιστος' },
            { left: 'καλός', right: 'καλλίων, κάλλιστος' },
            { left: 'ἡδύς', right: 'ἡδίων, ἡδίστος' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente los grados de los adjetivos.'
        }
      ]
    },
    {
      id: 'ex-19-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Grados',
      description: 'Completa con la forma correcta del comparativo o superlativo',
      items: [
        {
          id: 'fb-19-1',
          question: 'Más sabio que el amigo: _____ τοῦ φίλου',
          options: ['σοφός', 'σοφώτερος', 'σοφώτατος'],
          correctAnswer: 1,
          explanation: 'σοφώτερος es el comparativo. Expresa superioridad con segundo término.'
        },
        {
          id: 'fb-19-2',
          question: 'Sapientísimo: _____',
          options: ['σοφός', 'σοφώτερος', 'σοφώτατος'],
          correctAnswer: 2,
          explanation: 'σοφώτατος es el superlativo absoluto. Expresa la cualidad máxima.'
        },
        {
          id: 'fb-19-3',
          question: 'Peor: _____',
          options: ['κακός', 'κακώτερος', 'κακίων'],
          correctAnswer: 2,
          explanation: 'κακίων es el comparativo irregular de κακός.'
        },
        {
          id: 'fb-19-4',
          question: 'Más grande: _____',
          options: ['μέγας', 'μεγάλος', 'μείζων'],
          correctAnswer: 2,
          explanation: 'μείζων es el comparativo irregular de μέγας.'
        },
        {
          id: 'fb-19-5',
          question: 'Muy pequeño: _____',
          options: ['μικρός', 'μικρότερος', 'ἐλάχιστος'],
          correctAnswer: 2,
          explanation: 'ἐλάχιστος es el superlativo. Expresa grado máximo de pequeñez.'
        }
      ]
    },
    {
      id: 'ex-19-6',
      type: 'translation',
      title: 'Traduccion - Oraciones con Grados',
      description: 'Traduce oraciones con comparativos y superlativos',
      items: [
        {
          id: 'tr-19-1',
          question: 'σοφώτερος τοῦ φίλου',
          options: ['más sabio que el amigo', 'muy sabio', 'el más sabio'],
          correctAnswer: 0,
          explanation: 'Comparativo con segundo término en genitivo. Expresa superioridad.'
        },
        {
          id: 'tr-19-2',
          question: 'μᾶλλον τὸ σκότος ἤ τὸ φῶς',
          options: ['más las tinieblas que la luz', 'muy las tinieblas', 'las tinieblas y la luz'],
          correctAnswer: 0,
          explanation: 'Comparativo perifrástico con μᾶλλον. Partícula ἤ introduce segundo término.'
        },
        {
          id: 'tr-19-3',
          question: 'ἐλάχιστος ἐν τῇ βασιλείᾳ',
          options: ['el más pequeño en el reino', 'muy pequeño en el reino', 'pequeño del reino'],
          correctAnswer: 0,
          explanation: 'Superlativo relativo. Dativo con preposición ἐν expresa el ámbito.'
        },
        {
          id: 'tr-19-4',
          question: 'μείζων αὐτοῦ',
          options: ['más grande que él', 'muy grande', 'el más grande'],
          correctAnswer: 0,
          explanation: 'Comparativo irregular. Segundo término en genitivo.'
        },
        {
          id: 'tr-19-5',
          question: 'κάκιστος',
          options: ['malo', 'peor', 'malísimo'],
          correctAnswer: 2,
          explanation: 'Superlativo irregular de κακός. Expresa grado máximo de maldad.'
        }
      ]
    }
  ]
};

export const lesson20: Lesson = {
  id: 'lesson-20',
  number: 20,
  title: 'Voz Medio-Pasiva del Verbo λύω: Modo Indicativo',
  introduction: 'La voz medio-pasiva es fundamental en la gramática griega del Nuevo Testamento. En griego, la voz media y pasiva coinciden en la conjugación, excepto en el futuro y en el aoristo, donde la voz pasiva tiene formas propias. Los tiempos de la voz media se forman con las características temporales activas y las desinencias pasivas. El perfecto y pluscuamperfecto medio-pasivo no toman característica temporal. La comprensión de la voz medio-pasiva es esencial para el análisis sintáctico de textos griegos, especialmente para identificar el complemento agente en oraciones pasivas.',
  sections: [
    {
      id: 'sec-20-1',
      title: '20.1 Características Temporales de la Voz Medio-Pasiva',
      content: 'La voz media y pasiva coinciden en la conjugación, excepto en el futuro y en el aoristo. Los tiempos de la voz media se forman con las características temporales activas y las desinencias pasivas. El perfecto y pluscuamperfecto medio-pasivo no toman característica temporal. Las características temporales son: futuro activa -σ-, futuro media -σ-, futuro pasiva -θης-; aoristo activa -σα-, aoristo media -σα-, aoristo pasiva -θη-; perfecto -κα-, pluscuamperfecto -κει-/-κη-.',
      subsections: [
        {
          title: 'Tabla de Características Temporales',
          content: 'Las características temporales varían según la voz y el tiempo verbal.',
          items: [
            'Futuro: Activa -σ-, Media -σ-, Pasiva -θης-',
            'Aoristo: Activa -σα-, Media -σα-, Pasiva -θη-',
            'Perfecto: -κα- (sin variación de voz)',
            'Pluscuamperfecto: -κει-/-κη- (sin variación de voz)'
          ]
        }
      ]
    },
    {
      id: 'sec-20-2',
      title: '20.2 Desinencias de la Voz Medio-Pasiva',
      content: 'Las desinencias de la voz medio-pasiva se dividen en primarias y secundarias. Las desinencias primarias se utilizan en tiempos de presente y futuro. Las desinencias secundarias se utilizan en tiempos de pasado (imperfecto, aoristo, pluscuamperfecto). Las desinencias primarias son: 1ª persona singular -μαι, 2ª persona singular -σαι, 3ª persona singular -ται, 1ª persona plural -μεθα, 2ª persona plural -σθε, 3ª persona plural -νται. Las desinencias secundarias son: 1ª persona singular -μην, 2ª persona singular -σο, 3ª persona singular -το, 1ª persona plural -μεθα, 2ª persona plural -σθε, 3ª persona plural -ντο.',
      subsections: [
        {
          title: 'Desinencias Primarias',
          content: 'Se utilizan en tiempos de presente y futuro.',
          items: [
            'Sg. 1) -μαι | Pl. 1) -μεθα',
            'Sg. 2) -σαι | Pl. 2) -σθε',
            'Sg. 3) -ται | Pl. 3) -νται'
          ]
        },
        {
          title: 'Desinencias Secundarias',
          content: 'Se utilizan en tiempos de pasado.',
          items: [
            'Sg. 1) -μην | Pl. 1) -μεθα',
            'Sg. 2) -σο | Pl. 2) -σθε',
            'Sg. 3) -το | Pl. 3) -ντο'
          ]
        }
      ]
    },
    {
      id: 'sec-20-3',
      title: '20.3 Presente e Imperfecto Medio-Pasivo',
      content: 'El presente e imperfecto medio-pasivo se forman como el presente y el imperfecto activo, sustituyendo las desinencias activas por las pasivas. Las desinencias -σαι (en el presente) y -σο (en el imperfecto) de la 2ª persona del singular quedan alteradas en λύει o λύῃ y ἐλύου en lugar de las formas primitivas λύεσαι, ἐλύεσο, por la caída de la σ intervocálica y la contracción de las vocales en contacto.',
      subsections: [
        {
          title: 'Paradigma del Presente Medio-Pasivo',
          content: 'El presente medio-pasivo expresa una acción que se realiza en el presente. Puede significar "yo me desato" (medio) o "yo soy desatado" (pasivo).',
          items: [
            'λύ-ο-μαι "yo me desato / soy desatado"',
            'λύ-ει (de λύ-ε-σαι)',
            'λύ-ε-ται',
            'λυ-ό-μεθα',
            'λύ-ε-σθε',
            'λύ-ο-νται'
          ]
        },
        {
          title: 'Paradigma del Imperfecto Medio-Pasivo',
          content: 'El imperfecto medio-pasivo expresa una acción que se realizaba en el pasado. Puede significar "yo me desataba" (medio) o "yo era desatado" (pasivo).',
          items: [
            'ἐ-λυ-ό-μην "yo me desataba / era desatado"',
            'ἐ-λύ-ου (de ἐ-λύ-ε-σο)',
            'ἐ-λύ-ε-το',
            'ἐ-λυ-ό-μεθα',
            'ἐ-λύ-ε-σθε',
            'ἐ-λύ-ο-ντο'
          ]
        }
      ]
    },
    {
      id: 'sec-20-4',
      title: '20.4 Futuro Pasivo',
      content: 'El futuro pasivo se forma con la característica temporal -θης- más las desinencias pasivas (primarias). En la 2ª persona del singular vuelve a ocurrir lo mismo que en el presente: la caída de la σ intervocálica y la contracción de las vocales, resultando λυ-θή-σ-ει > λυ-θή-ῃ.',
      subsections: [
        {
          title: 'Paradigma del Futuro Pasivo',
          content: 'El futuro pasivo expresa una acción que será realizada en el futuro. Significa "yo seré desatado".',
          items: [
            'λυ-θή-σ-ο-μαι "yo seré desatado"',
            'λυ-θή-σ-ῃ (de λυ-θή-σ-ε-σαι)',
            'λυ-θή-σ-ε-ται',
            'λυ-θη-σ-ό-μεθα',
            'λυ-θή-σ-ε-σθε',
            'λυ-θή-σ-ο-νται'
          ]
        }
      ]
    },
    {
      id: 'sec-20-5',
      title: '20.5 Futuro Medio',
      content: 'El futuro medio se forma como el activo, pero sustituyendo las desinencias activas por las pasivas. La característica temporal es la misma que en la voz activa (-σ). En la 2ª persona del singular cae de nuevo la σ intervocálica, resultando λύ-σ-ε-σαι > λύ-σ-ῃ.',
      subsections: [
        {
          title: 'Paradigma del Futuro Medio',
          content: 'El futuro medio expresa una acción que el sujeto realizará sobre sí mismo en el futuro. Significa "yo me desataré".',
          items: [
            'λύ-σ-ο-μαι "yo me desataré"',
            'λύ-σ-ῃ (de λύ-σ-ε-σαι)',
            'λύ-σ-ε-ται',
            'λυ-σ-ό-μεθα',
            'λύ-σ-ε-σθε',
            'λύ-σ-ο-νται'
          ]
        }
      ]
    },
    {
      id: 'sec-20-6',
      title: '20.6 Aoristo Pasivo',
      content: 'El aoristo pasivo se forma con la característica temporal -θη- más las desinencias activas secundarias, con la irregularidad de que en la 3ª persona del plural toma -σαν como desinencia, en lugar de -ν. El aoristo pasivo expresa una acción puntual que fue realizada en el pasado.',
      subsections: [
        {
          title: 'Paradigma del Aoristo Pasivo',
          content: 'El aoristo pasivo expresa una acción que fue realizada en el pasado. Significa "yo fui desatado".',
          items: [
            'ἐ-λύ-θη-ν "yo fui desatado"',
            'ἐ-λύ-θη-ς',
            'ἐ-λύ-θη',
            'ἐ-λύ-θη-μεν',
            'ἐ-λύ-θη-τε',
            'ἐ-λύ-θη-σαν'
          ]
        }
      ]
    },
    {
      id: 'sec-20-7',
      title: '20.7 Aoristo Medio',
      content: 'El aoristo medio se forma como el aoristo activo (-σα) pero sustituyendo las desinencias activas por las pasivas (secundarias). La 2ª persona del singular es ἐλύσω en lugar de la forma primitiva ἐλύσασο, por la caída de la σ intervocálica y la contracción de las vocales en contacto. El aoristo medio expresa una acción que el sujeto realizó sobre sí mismo en el pasado.',
      subsections: [
        {
          title: 'Paradigma del Aoristo Medio',
          content: 'El aoristo medio expresa una acción que el sujeto realizó sobre sí mismo en el pasado. Significa "yo me desaté".',
          items: [
            'ἐ-λυ-σά-μην "yo me desaté"',
            'ἐ-λύ-σω (de ἐ-λύ-σα-σο)',
            'ἐ-λύ-σα-το',
            'ἐ-λυ-σά-μεθα',
            'ἐ-λύ-σα-σθε',
            'ἐ-λύ-σα-ντο'
          ]
        }
      ]
    },
    {
      id: 'sec-20-8',
      title: '20.8 Perfecto Medio-Pasivo',
      content: 'El perfecto medio-pasivo no toma característica temporal, al igual que el pluscuamperfecto medio-pasivo. Estos tiempos se reconocen por la reduplicación y las desinencias primarias medio-pasivas (perfecto) o por el aumento, la reduplicación y las desinencias secundarias medio-pasivas (pluscuamperfecto). El perfecto medio-pasivo expresa una acción que fue realizada en el pasado pero cuyos efectos perduran en el presente.',
      subsections: [
        {
          title: 'Paradigma del Perfecto Medio-Pasivo',
          content: 'El perfecto medio-pasivo expresa una acción que fue realizada en el pasado. Significa "yo me he desatado / he sido desatado".',
          items: [
            'λέ-λυ-μαι "yo me he desatado / he sido desatado"',
            'λέ-λυ-σαι',
            'λέ-λυ-ται',
            'λε-λύ-μεθα',
            'λέ-λυ-σθε',
            'λέ-λυ-νται'
          ]
        }
      ]
    },
    {
      id: 'sec-20-9',
      title: '20.9 Pluscuamperfecto Medio-Pasivo',
      content: 'El pluscuamperfecto medio-pasivo se forma con aumento, reduplicación y desinencias secundarias medio-pasivas. No toma característica temporal. El pluscuamperfecto medio-pasivo expresa una acción que había sido realizada en el pasado antes de otra acción también pasada.',
      subsections: [
        {
          title: 'Paradigma del Pluscuamperfecto Medio-Pasivo',
          content: 'El pluscuamperfecto medio-pasivo expresa una acción que había sido realizada en el pasado. Significa "yo me había desatado / había sido desatado".',
          items: [
            'ἐ-λε-λύ-μην "yo me había desatado / había sido desatado"',
            'ἐ-λέ-λυ-σο',
            'ἐ-λέ-λυ-το',
            'ἐ-λε-λύ-μεθα',
            'ἐ-λέ-λυ-σθε',
            'ἐ-λέ-λυ-ντο'
          ]
        }
      ]
    },
    {
      id: 'sec-20-10',
      title: '20.10 Sintaxis de la Voz Pasiva: Complemento Agente',
      content: 'En una oración pasiva, la persona que realiza la acción (complemento agente) se indica mediante la preposición ὑπό + genitivo. Si la acción no la realiza una persona, sino una cosa, el complemento agente aparece en dativo (dativo agente o de causa eficiente) y sin preposición. En el NT también puede aparecer expresado el complemento agente mediante las preposiciones ἀπό, παρά y διά seguido de genitivo. Y también en ocasiones puede ocurrir que el complemento agente, aunque sea una persona, venga expresado en dativo; y viceversa, siendo una cosa, expresarse con preposición más genitivo.',
      subsections: [
        {
          title: 'Complemento Agente con ὑπό + Genitivo',
          content: 'La forma más común de expresar el complemento agente en oraciones pasivas es mediante ὑπό + genitivo cuando la acción es realizada por una persona.',
          items: [
            'ἐσεσθε μισούμενοι ὑπὸ πάντων "seréis odiados por todos"',
            'κεχρηματισμένον ὑπὸ τοῦ πνεύματος τοῦ ἁγίου "revelado por el espíritu santo"',
            'Forma más común en el NT'
          ]
        },
        {
          title: 'Complemento Agente en Dativo',
          content: 'Cuando la acción es realizada por una cosa (no una persona), el complemento agente aparece en dativo sin preposición.',
          items: [
            'καταφερόμενος ὕπνῳ βαθεῖ "dejándose llevar por un sueño profundo"',
            'Dativo agente o de causa eficiente',
            'Sin preposición'
          ]
        },
        {
          title: 'Complemento Agente con Otras Preposiciones',
          content: 'En el NT también puede aparecer el complemento agente mediante ἀπό, παρά o διά + genitivo.',
          items: [
            'ἀπεσταλμένος παρὰ θεοῦ "enviado por Dios"',
            'ὁ νόμος διὰ Μωϋσέως ἐδόθη "la ley fue dada por Moisés"',
            'Preposiciones alternativas: ἀπό, παρά, διά'
          ]
        }
      ]
    },
    {
      id: 'sec-20-11',
      title: '20.11 Verbos Intransitivos con Voz Pasiva',
      content: 'Hay que recordar que solamente los verbos transitivos pueden ponerse en voz pasiva. Pero en griego, tanto clásico como helenístico, también hay verbos intransitivos que indican una acción pasiva y además llevan un complemento agente con ὑπό + genitivo. Por ejemplo, el verbo πάσχω "padecer", "ser maltratado por". Estos verbos son excepcionales y deben identificarse cuidadosamente en el análisis sintáctico.',
      subsections: [
        {
          title: 'Verbos Intransitivos con Significado Pasivo',
          content: 'Algunos verbos intransitivos pueden llevar complemento agente como si fueran pasivos.',
          items: [
            'πάσχω "padecer", "ser maltratado por"',
            'Lleva complemento agente con ὑπό + genitivo',
            'Ejemplo: πολλὰ παθοῦσα ὑπὸ πολλῶν ἰατρῶν "había sufrido mucho a manos de muchos médicos"'
          ]
        }
      ]
    },
    {
      id: 'sec-20-12',
      title: '20.12 Palabras Invariables Relacionadas',
      content: 'Existen varias palabras invariables que aparecen frecuentemente en textos con voz medio-pasiva. La conjunción causal ἐπεί significa "puesto que", "porque". El adverbio οὔπω significa "todavía no". El adverbio μήποτε significa "no", "nunca"; como partícula interrogativa "¿acaso?", "¿tal vez?"; como conjunción final negativa "a fin de que no", "para que no". La conjunción causal διότι significa "porque", "por", "por eso".',
      subsections: [
        {
          title: 'Palabras Invariables Principales',
          content: 'Estas palabras son fundamentales para la comprensión de textos griegos del NT.',
          items: [
            'ἐπεί conj. causal "puesto que", "porque"',
            'οὔπω adv. "todavía no"',
            'μήποτε adv. "no", "nunca"; part. interr. "¿acaso?"; conj. final negativa "para que no"',
            'διότι conj. causal "porque", "por", "por eso"'
          ]
        }
      ]
    }
  ],
  vocabulary: [
    { greek: 'λύω', type: 'verbo', spanish: 'desatar, soltar', frequency: 42 },
    { greek: 'λύ-ο-μαι (medio)', type: 'verbo medio', spanish: 'me desato', frequency: 8 },
    { greek: 'λύ-ο-μαι (pasivo)', type: 'verbo pasivo', spanish: 'soy desatado', frequency: 8 },
    { greek: 'λυθήσομαι', type: 'futuro pasivo', spanish: 'seré desatado', frequency: 3 },
    { greek: 'λυθῆναι', type: 'aoristo pasivo', spanish: 'ser desatado', frequency: 5 },
    { greek: 'λελυμένος', type: 'participio perfecto', spanish: 'desatado', frequency: 12 },
    { greek: 'ὑπό', type: 'preposición', spanish: 'por (complemento agente)', frequency: 220 },
    { greek: 'παρά', type: 'preposición', spanish: 'por, desde', frequency: 194 },
    { greek: 'διά', type: 'preposición', spanish: 'por, a través de', frequency: 667 },
    { greek: 'ἀπό', type: 'preposición', spanish: 'de, desde', frequency: 646 },
    { greek: 'ἐπεί', type: 'conjunción', spanish: 'puesto que, porque', frequency: 26 },
    { greek: 'οὔπω', type: 'adverbio', spanish: 'todavía no', frequency: 26 },
    { greek: 'μήποτε', type: 'adverbio', spanish: 'no, nunca', frequency: 25 },
    { greek: 'διότι', type: 'conjunción', spanish: 'porque, por eso', frequency: 53 },
    { greek: 'πάσχω', type: 'verbo', spanish: 'padecer, sufrir', frequency: 42 },
    { greek: 'μισέω', type: 'verbo', spanish: 'odiar', frequency: 39 },
    { greek: 'χρηματίζω', type: 'verbo', spanish: 'revelar, advertir', frequency: 9 },
    { greek: 'ἀγαπάω', type: 'verbo', spanish: 'amar', frequency: 143 },
    { greek: 'μαρτυρέω', type: 'verbo', spanish: 'testificar, dar testimonio', frequency: 76 },
    { greek: 'δηλόω', type: 'verbo', spanish: 'manifestar, hacer claro', frequency: 7 },
    { greek: 'θεραπεύω', type: 'verbo', spanish: 'sanar, curar', frequency: 43 },
    { greek: 'χαρίζομαι', type: 'verbo medio', spanish: 'conceder, perdonar', frequency: 23 },
    { greek: 'ἄγω', type: 'verbo', spanish: 'llevar, conducir', frequency: 67 },
    { greek: 'δεσμεύω', type: 'verbo', spanish: 'atar, encadenar', frequency: 3 },
    { greek: 'ἐξουσιάζω', type: 'verbo', spanish: 'tener poder sobre', frequency: 1 }
  ],
  exercises: [
    {
      id: 'ex-20-1',
      type: 'flashcard',
      title: 'Flashcards - Formas de Voz Medio-Pasiva',
      description: 'Traduce formas de voz medio-pasiva',
      items: [
        {
          id: 'fc-20-1',
          question: 'λύομαι',
          options: ['yo me desato / soy desatado (presente)'],
          correctAnswer: 0,
          explanation: 'λύομαι es la primera persona singular del presente medio-pasivo.'
        },
        {
          id: 'fc-20-2',
          question: 'ἐλυόμην',
          options: ['yo me desataba / era desatado (imperfecto)'],
          correctAnswer: 0,
          explanation: 'ἐλυόμην es la primera persona singular del imperfecto medio-pasivo.'
        },
        {
          id: 'fc-20-3',
          question: 'λυθήσομαι',
          options: ['yo seré desatado (futuro pasivo)'],
          correctAnswer: 0,
          explanation: 'λυθήσομαι es la primera persona singular del futuro pasivo.'
        },
        {
          id: 'fc-20-4',
          question: 'ἐλύθην',
          options: ['yo fui desatado (aoristo pasivo)'],
          correctAnswer: 0,
          explanation: 'ἐλύθην es la primera persona singular del aoristo pasivo.'
        },
        {
          id: 'fc-20-5',
          question: 'λέλυμαι',
          options: ['yo me he desatado / he sido desatado (perfecto)'],
          correctAnswer: 0,
          explanation: 'λέλυμαι es la primera persona singular del perfecto medio-pasivo.'
        },
        {
          id: 'fc-20-6',
          question: 'ἐλελύμην',
          options: ['yo me había desatado / había sido desatado (pluscuamperfecto)'],
          correctAnswer: 0,
          explanation: 'ἐλελύμην es la primera persona singular del pluscuamperfecto medio-pasivo.'
        }
      ]
    },
    {
      id: 'ex-20-2',
      type: 'multiple-choice',
      title: 'Seleccion Multiple - Identificacion de Formas',
      description: 'Identifica la forma correcta de voz medio-pasiva',
      items: [
        {
          id: 'mc-20-1',
          question: 'Cual es la segunda persona singular del presente medio-pasivo?',
          options: ['λύεσαι', 'λύει', 'λύῃ'],
          correctAnswer: 2,
          explanation: 'λύῃ es la forma correcta. La -σ- intervocálica cae y las vocales se contraen.'
        },
        {
          id: 'mc-20-2',
          question: 'Como se forma el futuro pasivo?',
          options: ['Con -σ-', 'Con -θης-', 'Con -κα-'],
          correctAnswer: 1,
          explanation: 'El futuro pasivo se forma con la característica temporal -θης-.'
        },
        {
          id: 'mc-20-3',
          question: 'Cual es la característica temporal del aoristo pasivo?',
          options: ['-σα-', '-θη-', '-κα-'],
          correctAnswer: 1,
          explanation: 'El aoristo pasivo se forma con la característica temporal -θη-.'
        },
        {
          id: 'mc-20-4',
          question: 'Como se expresa el complemento agente en oraciones pasivas?',
          options: ['Con acusativo', 'Con ὑπό + genitivo', 'Con nominativo'],
          correctAnswer: 1,
          explanation: 'El complemento agente se expresa con ὑπό + genitivo cuando es una persona.'
        },
        {
          id: 'mc-20-5',
          question: 'Que es el dativo agente?',
          options: ['Complemento agente en dativo cuando es cosa', 'Complemento agente en dativo cuando es persona', 'Complemento agente en nominativo'],
          correctAnswer: 0,
          explanation: 'El dativo agente se usa cuando la acción es realizada por una cosa, no una persona.'
        }
      ]
    },
    {
      id: 'ex-20-3',
      type: 'true-false',
      title: 'Verdadero/Falso - Caracteristicas de Voz Medio-Pasiva',
      description: 'Evalua tus conocimientos sobre voz medio-pasiva',
      items: [
        {
          id: 'tf-20-1',
          question: 'La voz media y pasiva tienen las mismas formas en todos los tiempos',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. Coinciden excepto en futuro y aoristo, donde la pasiva tiene formas propias.'
        },
        {
          id: 'tf-20-2',
          question: 'El perfecto medio-pasivo toma característica temporal',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El perfecto y pluscuamperfecto no toman característica temporal.'
        },
        {
          id: 'tf-20-3',
          question: 'Solo los verbos transitivos pueden ponerse en voz pasiva',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. Aunque hay excepciones con verbos intransitivos como πάσχω.'
        },
        {
          id: 'tf-20-4',
          question: 'La -σ- intervocálica cae en la segunda persona singular del presente',
          options: ['V', 'F'],
          correctAnswer: 0,
          explanation: 'Verdadero. λύ-ε-σαι > λύ-ει por caída de -σ- y contracción de vocales.'
        },
        {
          id: 'tf-20-5',
          question: 'El dativo agente se usa cuando la acción es realizada por una persona',
          options: ['V', 'F'],
          correctAnswer: 1,
          explanation: 'Falso. El dativo agente se usa cuando la acción es realizada por una cosa.'
        }
      ]
    },
    {
      id: 'ex-20-4',
      type: 'matching',
      title: 'Columnas Paralelas - Empareja Tiempos',
      description: 'Empareja tiempos con sus características',
      items: [
        {
          id: 'match-20-1',
          description: 'Empareja tiempos con sus características',
          pairs: [
            { left: 'Presente', right: 'Desinencias primarias, sin aumento' },
            { left: 'Imperfecto', right: 'Desinencias secundarias, con aumento' },
            { left: 'Futuro pasivo', right: 'Característica -θης-, desinencias primarias' },
            { left: 'Aoristo pasivo', right: 'Característica -θη-, desinencias secundarias' },
            { left: 'Perfecto', right: 'Reduplicación, desinencias primarias' },
            { left: 'Pluscuamperfecto', right: 'Aumento, reduplicación, desinencias secundarias' },
            { left: 'Futuro medio', right: 'Característica -σ-, desinencias primarias' },
            { left: 'Aoristo medio', right: 'Característica -σα-, desinencias secundarias' }
          ],
          correctAnswer: 0,
          explanation: 'Correcto. Has identificado correctamente las características de cada tiempo.'
        }
      ]
    },
    {
      id: 'ex-20-5',
      type: 'fill-blank',
      title: 'Completar Oraciones - Formas de Voz Medio-Pasiva',
      description: 'Completa con la forma correcta de voz medio-pasivo',
      items: [
        {
          id: 'fb-20-1',
          question: 'Yo soy desatado (presente pasivo, 1ª sg.): _____',
          options: ['λύω', 'λύομαι', 'λύεται'],
          correctAnswer: 1,
          explanation: 'λύομαι es la primera persona singular del presente medio-pasivo.'
        },
        {
          id: 'fb-20-2',
          question: 'Yo era desatado (imperfecto pasivo, 1ª sg.): _____',
          options: ['ἐλύον', 'ἐλυόμην', 'ἐλύθην'],
          correctAnswer: 1,
          explanation: 'ἐλυόμην es la primera persona singular del imperfecto medio-pasivo.'
        },
        {
          id: 'fb-20-3',
          question: 'Yo seré desatado (futuro pasivo, 1ª sg.): _____',
          options: ['λύσομαι', 'λυθήσομαι', 'λελύσομαι'],
          correctAnswer: 1,
          explanation: 'λυθήσομαι es la primera persona singular del futuro pasivo.'
        },
        {
          id: 'fb-20-4',
          question: 'Yo fui desatado (aoristo pasivo, 1ª sg.): _____',
          options: ['ἐλύσαμην', 'ἐλύθην', 'ἐλελύμην'],
          correctAnswer: 1,
          explanation: 'ἐλύθην es la primera persona singular del aoristo pasivo.'
        },
        {
          id: 'fb-20-5',
          question: 'Yo he sido desatado (perfecto pasivo, 1ª sg.): _____',
          options: ['λέλυκα', 'λέλυμαι', 'λελύσομαι'],
          correctAnswer: 1,
          explanation: 'λέλυμαι es la primera persona singular del perfecto medio-pasivo.'
        }
      ]
    },
    {
      id: 'ex-20-6',
      type: 'translation',
      title: 'Traduccion - Oraciones con Voz Medio-Pasiva',
      description: 'Traduce oraciones con voz medio-pasiva',
      items: [
        {
          id: 'tr-20-1',
          question: 'ἐσεσθε μισούμενοι ὑπὸ πάντων',
          options: ['seréis odiados por todos', 'odiáis a todos', 'todos os odian'],
          correctAnswer: 0,
          explanation: 'Futuro pasivo. ὑπὸ πάντων expresa el complemento agente.'
        },
        {
          id: 'tr-20-2',
          question: 'καταφερόμενος ὕπνῳ βαθεῖ',
          options: ['llevado por un sueño profundo', 'llevando un sueño profundo', 'durmiendo profundamente'],
          correctAnswer: 0,
          explanation: 'Participio pasivo. ὕπνῳ es dativo agente (cosa, no persona).'
        },
        {
          id: 'tr-20-3',
          question: 'ἀπεσταλμένος παρὰ θεοῦ',
          options: ['enviado por Dios', 'enviando desde Dios', 'Dios lo envía'],
          correctAnswer: 0,
          explanation: 'Participio pasivo. παρὰ θεοῦ expresa el complemento agente.'
        },
        {
          id: 'tr-20-4',
          question: 'λέλυμαι',
          options: ['me desato', 'he sido desatado', 'seré desatado'],
          correctAnswer: 1,
          explanation: 'Perfecto medio-pasivo. Expresa acción pasada con efectos presentes.'
        },
        {
          id: 'tr-20-5',
          question: 'ἐλύθη',
          options: ['fue desatado', 'es desatado', 'será desatado'],
          correctAnswer: 0,
          explanation: 'Aoristo pasivo, tercera persona singular. Acción puntual en el pasado.'
        }
      ]
    }
  ]
};

export const lessons11To20 = {
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
};
