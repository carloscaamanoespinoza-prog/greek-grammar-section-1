import { useState } from 'react';
import { Check, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useProgress } from '@/contexts/ProgressContext';
import type { Exercise } from '@/data/lessons';

interface TranslationExerciseProps {
  exercise: Exercise;
  lessonId: string;
  onComplete?: () => void;
}

export function TranslationExercise({ exercise, lessonId, onComplete }: TranslationExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const { recordExerciseResult } = useProgress();

  const currentItem = exercise.items[currentIndex];
  const isCorrect = selectedAnswer === currentItem.correctAnswer;

  const handleSelectAnswer = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      if (index === currentItem.correctAnswer) {
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
              Tradujiste correctamente {score} de {exercise.items.length} términos
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

      {/* Term to Translate */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
        <div className="text-center space-y-4">
          <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Traduce el siguiente término</p>
          <p className="text-4xl font-bold text-primary greek">{currentItem.question}</p>
        </div>
      </Card>

      {/* Translation Options */}
      <Card className="p-6 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200">
        <div className="space-y-3">
          {currentItem.options?.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrectOption = index === currentItem.correctAnswer;
            const showCorrect = answered && isCorrectOption;
            const showIncorrect = answered && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                disabled={answered}
                className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-200 border-2 flex items-center gap-3 ${
                  showCorrect
                    ? 'bg-accent/20 border-accent text-accent-foreground'
                    : showIncorrect
                    ? 'bg-destructive/20 border-destructive text-destructive'
                    : isSelected
                    ? 'bg-primary/10 border-primary text-primary'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-primary/50 hover:bg-gray-50'
                } ${answered ? 'cursor-default' : 'cursor-pointer'}`}
              >
                <span className="flex-shrink-0">
                  {showCorrect && <Check className="w-5 h-5 text-accent" />}
                  {showIncorrect && <X className="w-5 h-5 text-destructive" />}
                  {!answered && isSelected && (
                    <div className="w-5 h-5 rounded-full border-2 border-primary bg-primary" />
                  )}
                  {!answered && !isSelected && (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  )}
                  {answered && !showCorrect && !showIncorrect && (
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                  )}
                </span>
                <span className="flex-1">{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {answered && currentItem.explanation && (
          <div className="mt-6 p-4 bg-blue-50 border-l-4 border-primary rounded">
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
