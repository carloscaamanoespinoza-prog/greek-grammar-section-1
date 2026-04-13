import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Dumbbell, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExerciseContainer } from '@/components/exercises/ExerciseContainer';
import { ProgressProvider } from '@/contexts/ProgressContext';
import { ProgressIndicator } from '@/components/ProgressIndicator';
import { allLessons } from '@/data/lessons';

export default function LessonPage() {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['sec-1-1']));
  const [activeTab, setActiveTab] = useState('theory');
  const [activeExercise, setActiveExercise] = useState(0);

  const lesson = allLessons[currentLessonIndex];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setExpandedSections(new Set(['sec-1-1']));
      setActiveTab('theory');
      setActiveExercise(0);
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setExpandedSections(new Set(['sec-1-1']));
      setActiveTab('theory');
      setActiveExercise(0);
    }
  };

  return (
    <ProgressProvider>
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-primary to-primary/80 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8" />
              <span className="text-sm font-semibold uppercase tracking-widest">Lección {lesson.number}</span>
            </div>
            <ProgressIndicator />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            {lesson.title}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            {lesson.number === 1 
              ? 'Aprende los fundamentos del alfabeto griego, su pronunciación y escritura en el contexto del Nuevo Testamento.'
              : lesson.number === 2
              ? 'Domina las leyes fonéticas del griego: cambios regulares en sonidos y transformaciones de palabras.'
              : lesson.number === 3
              ? 'Domina las categorías fundamentales de la declinación nominal: género, número y casos.'
              : lesson.number === 4
              ? 'Aprende la declinación temática o segunda declinación con sustantivos masculinos, femeninos y neutros.'
              : lesson.number === 5
              ? 'Domina la conjugación del verbo λύω y del verbo εἰμί en presente e imperfecto.'
              : lesson.number === 6
              ? 'Aprende la declinación de temas en -α o primera declinación con sustantivos femeninos y masculinos.'
              : lesson.number === 7
              ? 'Comprende los nombres contractos de la primera y segunda declinación y sus contracciones vocálicas.'
              : lesson.number === 8
              ? 'Domina los adjetivos de 1ª clase que siguen la 1ª y 2ª declinación con concordancia nominal.'
              : lesson.number === 9
              ? 'Aprende la declinación ática, una variante especial del griego representada por el adjetivo ἵλεως.'
              : lesson.number === 10
              ? 'Domina las generalidades de la flexión verbal: voces, modos, tiempos, aspecto y elementos del verbo.'
              : lesson.number === 11
              ? 'Aprende el futuro de indicativo del verbo λύω y del verbo εἰμί con paradigmas completos.'
              : lesson.number === 12
              ? 'Domina el aoristo, perfecto y pluscuamperfecto con el aumento y la reduplicación.'
              : lesson.number === 13
              ? 'Aprende pronombres personales, posesivos y demostrativos del griego del Nuevo Testamento.'
              : lesson.number === 14
              ? 'Domina los adjetivos numerales: cardinales, ordinales y adverbios multiplicativos.'
              : lesson.number === 15
              ? 'Domina la declinacion atem atica o tercera declinacion con temas en consonante.'
              : lesson.number === 16
              ? 'Domina la tercera declinacion con temas en diptongo (eu, au, ou) y vocal larga (oi, w) y cerrada (i, u).'
              : lesson.number === 17
              ? 'Aprende adjetivos de 2a y 3a clase, y adjetivos irregulares como polus y megas.'
              : lesson.number === 18
              ? 'Domina pronombres relativos, interrogativos e indefinidos con sus paradigmas y sintaxis.'
              : lesson.number === 19
              ? 'Aprende comparativos y superlativos regulares e irregulares con construcciones perifrásticas.'
              : lesson.number === 20
              ? 'Domina la voz medio-pasiva del verbo: presente, imperfecto, futuro, aoristo, perfecto y pluscuamperfecto.'
              : lesson.number === 21
              ? 'Aprende el modo subjuntivo en las tres voces: presente, aoristo y perfecto con construcciones perifrásticas.'
              : lesson.number === 22
              ? 'Domina el modo imperativo en las tres voces: presente, aoristo y perfecto con desinencias propias.'
              : lesson.number === 23
              ? 'Aprende el modo optativo en las tres voces: presente y aoristo con característica modal -ι.'
              : lesson.number === 24
              ? 'Domina el infinitivo en las tres voces: presente, futuro, aoristo y perfecto con funciones sintácticas.'
              : lesson.number === 25
              ? 'Aprende el participio en las tres voces: presente, futuro, aoristo y perfecto con funciones adjetivales.'
              : lesson.number === 26
              ? 'Domina palabras invariables: adverbios, preposiciones, conjunciones e interjecciones del Nuevo Testamento.'
              : lesson.number === 27
              ? 'Aprende los verbos puros contractos en -aw, -ew y -ow con sus contracciones y paradigmas completos.'
              : lesson.number === 28
              ? 'Domina verbos consonanticos mudos y liquidos con sus transformaciones eufonicas en futuro, aoristo y perfecto.'
              : lesson.number === 29
              ? 'Aprende tiempos segundos o fuertes y alternancias vocálicas en verbos griegos del Nuevo Testamento.'
              : lesson.number === 30
              ? 'Domina los verbos en -mi atemáticos: τίθημι, δίδωμι, ἵστημι, ἵημι, δείκνυμι y verbos defectivos.'
              : lesson.number === 31
              ? 'Aprende verbos irregulares: polirrizos, incoativos, con refuerzo vocal y con refuerzo nasal del NT.'
              : lesson.number === 32
              ? 'Domina las transformaciones fonéticas, morfológicas y sintácticas del ático a la koiné helenística.'
              : 'Continua tu estudio de la gramatica griega del Nuevo Testamento.'}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Introduction */}
        <Card className="mb-8 p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-l-4 border-secondary">
          <p className="text-gray-700 leading-relaxed">
            {lesson.introduction}
          </p>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="theory" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Teoría
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex items-center gap-2">
              <Dumbbell className="w-4 h-4" />
              Ejercicios
            </TabsTrigger>
          </TabsList>

          {/* Theory Tab */}
          <TabsContent value="theory" className="space-y-6">
            {/* Vocabulary */}
            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-l-4 border-accent">
              <h2 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Vocabulario Clave
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lesson.vocabulary.map((item) => (
                  <div key={item.greek} className="p-3 bg-white rounded border border-gray-200">
                    <p className="text-lg font-semibold text-primary" style={{ fontFamily: "'Noto Sans', sans-serif" }}>
                      {item.greek}
                    </p>
                    <p className="text-sm text-gray-600">{item.type}</p>
                    <p className="text-base text-gray-800 font-medium">{item.spanish}</p>
                    {item.frequency && (
                      <p className="text-xs text-gray-500 mt-1">Frecuencia: {item.frequency}x en NT</p>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Theory Sections */}
            <div className="space-y-4">
              {lesson.sections.map((section) => (
                <Card key={section.id} className="overflow-hidden">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {section.title}
                    </h3>
                    {expandedSections.has(section.id) ? (
                      <ChevronUp className="w-6 h-6 text-primary" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary" />
                    )}
                  </button>

                  {expandedSections.has(section.id) && (
                    <div className="px-6 pb-6 border-t border-gray-200 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed mb-6">{section.content}</p>

                      {section.subsections && (
                        <div className="space-y-6">
                          {section.subsections.map((subsection, idx) => (
                            <div key={idx} className="bg-white p-4 rounded border border-gray-200">
                              <h4 className="text-lg font-semibold text-primary mb-3">
                                {subsection.title}
                              </h4>
                              <p className="text-gray-700 mb-3">{subsection.content}</p>
                              {subsection.items && (
                                <ul className="space-y-2">
                                  {subsection.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-3">
                                      <span className="text-secondary font-bold mt-1">•</span>
                                      <span className="text-gray-700">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Exercises Tab */}
          <TabsContent value="exercises" className="space-y-6">
            {/* Exercise Navigation */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Ejercicios Prácticos
                </h2>
                <span className="text-sm font-semibold text-gray-600 bg-white px-3 py-1 rounded-full">
                  {activeExercise + 1} / {lesson.exercises.length}
                </span>
              </div>

              {/* Exercise Tabs */}
              <div className="flex gap-2 flex-wrap">
                {lesson.exercises.map((exercise, idx) => (
                  <button
                    key={exercise.id}
                    onClick={() => setActiveExercise(idx)}
                    className={`px-4 py-2 rounded font-medium transition-colors ${
                      activeExercise === idx
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary border-2 border-primary hover:bg-primary/10'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </Card>

            {/* Active Exercise */}
            {lesson.exercises && lesson.exercises.length > 0 ? (
            <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {lesson.exercises[activeExercise]?.title || 'Ejercicio'}
                </h2>
                {lesson.exercises[activeExercise]?.description && (
                  <p className="text-gray-600">
                    {lesson.exercises[activeExercise].description}
                  </p>
                )}
              </div>

              <ExerciseContainer exercise={lesson.exercises[activeExercise]} lessonId={lesson.id} />
            </Card>
            ) : (
              <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200">
                <p className="text-gray-600 text-center">No hay ejercicios disponibles para esta lección.</p>
              </Card>
            )}
          </TabsContent>
        </Tabs>

        {/* Navigation Between Lessons */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-gray-200">
          <Button
            onClick={handlePreviousLesson}
            disabled={currentLessonIndex === 0}
            variant="outline"
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Lección Anterior
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">Progreso</p>
            <p className="text-lg font-bold text-primary">
              {currentLessonIndex + 1} / {allLessons.length}
            </p>
          </div>

          <Button
            onClick={handleNextLesson}
            disabled={currentLessonIndex === allLessons.length - 1}
            className="flex items-center gap-2"
          >
            Lección Siguiente
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t-2 border-gray-200 py-8 px-4 md:px-8 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p className="text-sm">
            Estudio Programado de Gramática Griega del Nuevo Testamento
          </p>
        </div>
      </footer>
    </div>
    </ProgressProvider>
  );
}
