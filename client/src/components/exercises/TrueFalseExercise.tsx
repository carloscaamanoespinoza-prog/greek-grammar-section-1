import { useState } from 'react';
import { Check, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useProgress } from '@/contexts/ProgressContext';
import type { Exercise } from '@/data/lessons';

interface TrueFalseExerciseProps {
  exercise: Exercise;
  lessonId: string;
  onComplete?: () => void;
}

export function TrueFalseExercise({ exercise, lessonId, onComplete }: TrueFalseExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { recordExerciseResult } = useProgress();

  const currentItem = exercise.items[currentIndex];
  const isCorrect = (selectedAnswer === true && currentItem.correctAnswer === 1) ||
                    (selectedAnswer === false && currentItem.correctAnswer === 0);

  const handleSelectAnswer = (value: boolean) => {
    if (!answered) {
      setSelectedAnswer(value);
      setAnswered(true);
      if ((value && currentItem.correctAnswer === 1) || (!value && currentItem.correctAnswer === 0)) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentIndex < exercise.items.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setCompleted(true);
      recordExerciseResult({
        exerciseId: exercise.id,
        lessonId,
        correctAnswers: score,
        totalQuestions: exercise.items.length,
        timestamp: Date.now()
      });
      onComplete?.();
    }
  };

  const progressPercent = ((currentIndex + 1) / exercise.items.length) * 100;

  if (completed) {
    const points = score * 10;
    return (
      <div className="w-full space-y-6">
        <Card className="p-8 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">¡Ejercicio Completado!</h3>
            <div className="text-5xl font-bold text-accent">
              {score}/{exercise.items.length}
            </div>
            <p className="text-gray-600">
              Acertaste {score} de {exercise.items.length} afirmaciones
            </p>
            <p className="text-sm text-gray-500">
              Porcentaje: {Math.round((score / exercise.items.length) * 100)}%
            </p>
            <p className="text-lg font-semibold text-green-600">
              +{points} puntos
            </p>
            <Button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedAnswer(null);
                setAnswered(false);
                setScore(0);
                setCompleted(false);
              }}
              className="bg-primary hover:bg-primary/90 text-white mt-4"
            >
              Reintentar
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            Pregunta {currentIndex + 1} de {exercise.items.length}
          </span>
          <span className="text-sm text-gray-500">
            Correctas: {score}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Statement */}
      <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200">
        <p className="text-lg font-medium text-gray-800 mb-8">
          {currentItem.question}
        </p>

        {/* True/False Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => handleSelectAnswer(true)}
            disabled={answered}
            className={`p-6 rounded-lg font-bold text-lg transition-all duration-200 border-2 flex flex-col items-center gap-2 ${
              selectedAnswer === true && answered
                ? isCorrect
                  ? 'bg-accent/20 border-accent text-accent-foreground'
                  : 'bg-destructive/20 border-destructive text-destructive'
                : selectedAnswer === true && !answered
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-white border-gray-200 text-gray-700 hover:border-primary/50 hover:bg-gray-50'
            } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
          >
            {selectedAnswer === true && answered && (
              isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />
            )}
            Verdadero
          </button>

          <button
            onClick={() => handleSelectAnswer(false)}
            disabled={answered}
            className={`p-6 rounded-lg font-bold text-lg transition-all duration-200 border-2 flex flex-col items-center gap-2 ${
              selectedAnswer === false && answered
                ? isCorrect
                  ? 'bg-accent/20 border-accent text-accent-foreground'
                  : 'bg-destructive/20 border-destructive text-destructive'
                : selectedAnswer === false && !answered
                ? 'bg-primary/10 border-primary text-primary'
                : 'bg-white border-gray-200 text-gray-700 hover:border-primary/50 hover:bg-gray-50'
            } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
          >
            {selectedAnswer === false && answered && (
              isCorrect ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />
            )}
            Falso
          </button>
        </div>

        {/* Explanation */}
        {answered && currentItem.explanation && (
          <div className="p-4 bg-blue-50 border-l-4 border-primary rounded">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-primary">Explicación: </span>
              {currentItem.explanation}
            </p>
          </div>
        )}
      </Card>

      {/* Navigation */}
      {answered && (
        <Button
          onClick={handleNext}
          className="w-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
        >
          {currentIndex === exercise.items.length - 1 ? 'Finalizar' : 'Siguiente'}
          <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
