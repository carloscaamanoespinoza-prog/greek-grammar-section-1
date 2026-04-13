import { useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useProgress } from '@/contexts/ProgressContext';
import type { Exercise, ExerciseItem } from '@/data/lessons';

interface FlashcardExerciseProps {
  exercise: Exercise;
  lessonId: string;
  onComplete?: () => void;
}

export function FlashcardExercise({ exercise, lessonId, onComplete }: FlashcardExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const { recordExerciseResult } = useProgress();

  const currentCard = exercise.items[currentIndex];
  const isAnswerRevealed = isFlipped;

  const handleNext = () => {
    if (currentIndex < exercise.items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMarkComplete = () => {
    const newCompleted = new Set(completed);
    newCompleted.add(currentCard.id);
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(new Set());
  };

  const handleCompleteExercise = () => {
    recordExerciseResult({
      exerciseId: exercise.id,
      lessonId,
      correctAnswers: completed.size,
      totalQuestions: exercise.items.length,
      timestamp: Date.now()
    });
    if (onComplete) {
      onComplete();
    }
  };

  const progressPercent = (completed.size / exercise.items.length) * 100;

  return (
    <div className="w-full space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            Progreso: {completed.size} de {exercise.items.length}
          </span>
          <span className="text-sm text-gray-500">
            {currentIndex + 1} / {exercise.items.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Flashcard */}
      <div className="perspective">
        <Card
          onClick={handleFlip}
          className="min-h-80 flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200"
        >
          <div className="text-center px-8">
            {!isAnswerRevealed ? (
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Pregunta</p>
                <p className="text-3xl font-bold text-primary greek">{currentCard.question}</p>
                <p className="text-xs text-gray-400 mt-8">Haz clic para ver la respuesta</p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Respuesta</p>
                <p className="text-2xl font-semibold text-secondary">{currentCard.correctAnswer}</p>
                {currentCard.explanation && (
                  <p className="text-sm text-gray-600 mt-6 italic">{currentCard.explanation}</p>
                )}
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Controls */}
      <div className="flex gap-3 justify-between">
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Anterior
        </Button>

        <div className="flex gap-2">
          {isAnswerRevealed && (
            <Button
              onClick={handleMarkComplete}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              size="sm"
            >
              Entendido
            </Button>
          )}
          <Button
            onClick={handleFlip}
            variant="outline"
            size="sm"
          >
            {isAnswerRevealed ? 'Ocultar' : 'Mostrar'}
          </Button>
        </div>

        <Button
          onClick={handleNext}
          disabled={currentIndex === exercise.items.length - 1}
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
        >
          Siguiente
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Complete Exercise Button */}
      {completed.size === exercise.items.length && (
        <Button
          onClick={handleCompleteExercise}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
        >
          ✓ Completar Ejercicio ({completed.size * 10} pts)
        </Button>
      )}

      {/* Reset Button */}
      {completed.size > 0 && (
        <Button
          onClick={handleReset}
          variant="ghost"
          size="sm"
          className="w-full flex items-center gap-2 text-gray-600 hover:text-primary"
        >
          <RotateCw className="w-4 h-4" />
          Reiniciar
        </Button>
      )}
    </div>
  );
}
