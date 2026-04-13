import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useProgress } from '@/contexts/ProgressContext';
import type { Exercise } from '@/data/lessons';

interface MatchingExerciseProps {
  exercise: Exercise;
  lessonId: string;
  onComplete?: () => void;
}

export function MatchingExercise({ exercise, lessonId, onComplete }: MatchingExerciseProps) {
  const matchItem = exercise.items[0];
  const pairs = matchItem.pairs || [];
  const { recordExerciseResult } = useProgress();
  
  const [matches, setMatches] = useState<Map<number, number>>(new Map());
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ index: number; correct: boolean } | null>(null);

  // Shuffle right column
  const [shuffledRight] = useState(() => {
    const shuffled = [...pairs].sort(() => Math.random() - 0.5);
    return shuffled;
  });

  const handleSelectLeft = (index: number) => {
    setSelectedLeft(selectedLeft === index ? null : index);
    setFeedback(null);
  };

  const handleSelectRight = (rightIndex: number) => {
    if (selectedLeft !== null) {
      const leftItem = pairs[selectedLeft];
      const rightItem = shuffledRight[rightIndex];
      
      const isCorrect = leftItem.right === rightItem.right;
      
      if (isCorrect) {
        const newMatches = new Map(matches);
        newMatches.set(selectedLeft, rightIndex);
        setMatches(newMatches);
        setScore(score + 1);
        setFeedback({ index: rightIndex, correct: true });
        setSelectedLeft(null);
      } else {
        setFeedback({ index: rightIndex, correct: false });
      }
    }
  };

  const handleFinish = () => {
    setCompleted(true);
    recordExerciseResult({
      exerciseId: exercise.id,
      lessonId,
      correctAnswers: score,
      totalQuestions: pairs.length,
      timestamp: Date.now()
    });
    onComplete?.();
  };

  const handleReset = () => {
    setMatches(new Map());
    setSelectedLeft(null);
    setScore(0);
    setCompleted(false);
    setFeedback(null);
  };

  if (completed) {
    const points = score * 10;
    return (
      <div className="w-full space-y-6">
        <Card className="p-8 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">¡Ejercicio Completado!</h3>
            <div className="text-5xl font-bold text-accent">
              {score}/{pairs.length}
            </div>
            <p className="text-gray-600">
              Emparejaste correctamente {score} de {pairs.length} pares
            </p>
            <p className="text-sm text-gray-500">
              Porcentaje: {Math.round((score / pairs.length) * 100)}%
            </p>
            <p className="text-lg font-semibold text-green-600">
              +{points} puntos
            </p>
            <Button
              onClick={handleReset}
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
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-600">
            Emparejados: {score} de {pairs.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(score / pairs.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Instructions */}
      <div className="p-4 bg-blue-50 border-l-4 border-primary rounded">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-primary">Instrucciones: </span>
          Selecciona un concepto en la columna izquierda y luego haz clic en su definición correspondiente en la columna derecha.
        </p>
      </div>

      {/* Matching Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Conceptos</h4>
          {pairs.map((pair, index) => {
            const isMatched = matches.has(index);
            const isSelected = selectedLeft === index;
            
            return (
              <button
                key={index}
                onClick={() => handleSelectLeft(index)}
                disabled={isMatched}
                className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-200 border-2 ${
                  isMatched
                    ? 'bg-accent/20 border-accent text-accent-foreground cursor-default'
                    : isSelected
                    ? 'bg-primary/10 border-primary text-primary cursor-pointer'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-primary/50 hover:bg-gray-50 cursor-pointer'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isMatched && <Check className="w-5 h-5 text-accent flex-shrink-0" />}
                  <span className="flex-1">{pair.left}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Definiciones</h4>
          {shuffledRight.map((pair, index) => {
            const isMatched = Array.from(matches.values()).includes(index);
            const showFeedback = feedback?.index === index;
            const isCorrectFeedback = feedback?.correct === true;
            const isIncorrectFeedback = feedback?.correct === false;
            
            return (
              <button
                key={index}
                onClick={() => handleSelectRight(index)}
                disabled={isMatched || selectedLeft === null}
                className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-200 border-2 ${
                  isMatched
                    ? 'bg-accent/20 border-accent text-accent-foreground cursor-default'
                    : showFeedback && isCorrectFeedback
                    ? 'bg-accent/20 border-accent text-accent-foreground cursor-default'
                    : showFeedback && isIncorrectFeedback
                    ? 'bg-destructive/20 border-destructive text-destructive cursor-default'
                    : selectedLeft !== null
                    ? 'bg-white border-gray-200 text-gray-700 hover:border-secondary/50 hover:bg-gray-50 cursor-pointer'
                    : 'bg-gray-100 border-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-3">
                  {isMatched && <Check className="w-5 h-5 text-accent flex-shrink-0" />}
                  {showFeedback && isCorrectFeedback && <Check className="w-5 h-5 text-accent flex-shrink-0" />}
                  {showFeedback && isIncorrectFeedback && <X className="w-5 h-5 text-destructive flex-shrink-0" />}
                  <span className="flex-1">{pair.right}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <div className={`p-4 rounded border-l-4 ${
          feedback.correct 
            ? 'bg-accent/10 border-accent text-accent-foreground' 
            : 'bg-destructive/10 border-destructive text-destructive'
        }`}>
          <p className="text-sm font-medium">
            {feedback.correct 
              ? '✓ ¡Correcto! Emparejamiento exitoso.' 
              : '✗ Incorrecto. Intenta nuevamente.'}
          </p>
        </div>
      )}

      {/* Finish Button */}
      {score === pairs.length && (
        <Button
          onClick={handleFinish}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          Finalizar Ejercicio
        </Button>
      )}

      {score < pairs.length && selectedLeft === null && (
        <p className="text-sm text-gray-500 text-center">
          Selecciona un concepto a la izquierda para comenzar
        </p>
      )}
    </div>
  );
}
