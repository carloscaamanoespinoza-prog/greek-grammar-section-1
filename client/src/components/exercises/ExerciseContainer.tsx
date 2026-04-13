import { FlashcardExercise } from './FlashcardExercise';
import { MultipleChoiceExercise } from './MultipleChoiceExercise';
import { TrueFalseExercise } from './TrueFalseExercise';
import { MatchingExercise } from './MatchingExercise';
import { FillBlankExercise } from './FillBlankExercise';
import { TranslationExercise } from './TranslationExercise';
import type { Exercise } from '@/data/lessons';

interface ExerciseContainerProps {
  exercise: Exercise;
  lessonId: string;
  onComplete?: () => void;
}

export function ExerciseContainer({ exercise, lessonId, onComplete }: ExerciseContainerProps) {
  switch (exercise.type) {
    case 'flashcard':
      return <FlashcardExercise exercise={exercise} lessonId={lessonId} onComplete={onComplete} />;
    case 'multiple-choice':
      return <MultipleChoiceExercise exercise={exercise} lessonId={lessonId} onComplete={onComplete} />;
    case 'true-false':
      return <TrueFalseExercise exercise={exercise} lessonId={lessonId} onComplete={onComplete} />;
    case 'matching':
      return <MatchingExercise exercise={exercise} lessonId={lessonId} onComplete={onComplete} />;
    case 'fill-blank':
      return <FillBlankExercise exercise={exercise} lessonId={lessonId} onComplete={onComplete} />;
    case 'translation':
      return <TranslationExercise exercise={exercise} lessonId={lessonId} onComplete={onComplete} />;
    default:
      return <div>Tipo de ejercicio no soportado</div>;
  }
}
