import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ExerciseResult {
  exerciseId: string;
  lessonId: string;
  correctAnswers: number;
  totalQuestions: number;
  timestamp: number;
}

export interface LessonProgress {
  lessonId: string;
  lessonNumber: number;
  completed: boolean;
  score: number;
  exercisesCompleted: number;
  totalExercises: number;
  lastAccessed: number;
}

export interface ProgressContextType {
  totalPoints: number;
  lessonsProgress: Record<string, LessonProgress>;
  exerciseResults: ExerciseResult[];
  recordExerciseResult: (result: ExerciseResult) => void;
  markLessonCompleted: (lessonId: string) => void;
  markExerciseCompleted: (lessonId: string, lessonNumber: number, totalExercises: number) => void;
  getLessonProgress: (lessonId: string) => LessonProgress | undefined;
  getTotalScore: () => number;
  getCompletedLessonsCount: () => number;
  getOverallProgress: () => number;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const STORAGE_KEY = 'greek_grammar_progress';

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [totalPoints, setTotalPoints] = useState(0);
  const [lessonsProgress, setLessonsProgress] = useState<Record<string, LessonProgress>>({});
  const [exerciseResults, setExerciseResults] = useState<ExerciseResult[]>([]);

  // Cargar datos del localStorage al montar
  useEffect(() => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      try {
        const { totalPoints: savedPoints, lessonsProgress: savedLessons, exerciseResults: savedResults } = JSON.parse(savedData);
        setTotalPoints(savedPoints || 0);
        setLessonsProgress(savedLessons || {});
        setExerciseResults(savedResults || []);
      } catch (error) {
        console.error('Error loading progress from localStorage:', error);
      }
    }
  }, []);

  // Guardar datos en localStorage cuando cambien
  useEffect(() => {
    const dataToSave = {
      totalPoints,
      lessonsProgress,
      exerciseResults
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  }, [totalPoints, lessonsProgress, exerciseResults]);

  const recordExerciseResult = (result: ExerciseResult) => {
    const points = result.correctAnswers * 10; // 10 puntos por respuesta correcta
    setTotalPoints(prev => prev + points);
    setExerciseResults(prev => [...prev, result]);

    // Actualizar progreso de la lección
    setLessonsProgress(prev => {
      const lessonProgress = prev[result.lessonId] || {
        lessonId: result.lessonId,
        completed: false,
        score: 0,
        exercisesCompleted: [],
        lastAccessed: Date.now()
      };

      return {
        ...prev,
        [result.lessonId]: {
          ...lessonProgress,
          score: lessonProgress.score + points,
          exercisesCompleted: Array.from(new Set([...lessonProgress.exercisesCompleted, result.exerciseId])),
          lastAccessed: Date.now()
        }
      };
    });
  };

  const markLessonCompleted = (lessonId: string) => {
    setLessonsProgress(prev => {
      const lessonProgress = prev[lessonId] || {
        lessonId,
        lessonNumber: 0,
        completed: false,
        score: 0,
        exercisesCompleted: 0,
        totalExercises: 0,
        lastAccessed: Date.now()
      };

      return {
        ...prev,
        [lessonId]: {
          ...lessonProgress,
          completed: true,
          lastAccessed: Date.now()
        }
      };
    });
  };

  const markExerciseCompleted = (lessonId: string, lessonNumber: number, totalExercises: number) => {
    setLessonsProgress(prev => {
      const lessonProgress = prev[lessonId] || {
        lessonId,
        lessonNumber,
        completed: false,
        score: 0,
        exercisesCompleted: 0,
        totalExercises,
        lastAccessed: Date.now()
      };

      const newExercisesCompleted = Math.min(lessonProgress.exercisesCompleted + 1, totalExercises);
      const isLessonCompleted = newExercisesCompleted === totalExercises;

      return {
        ...prev,
        [lessonId]: {
          ...lessonProgress,
          exercisesCompleted: newExercisesCompleted,
          completed: isLessonCompleted,
          lastAccessed: Date.now()
        }
      };
    });
  };

  const getLessonProgress = (lessonId: string) => {
    return lessonsProgress[lessonId];
  };

  const getTotalScore = () => {
    return totalPoints;
  };

  const getCompletedLessonsCount = () => {
    return Object.values(lessonsProgress).filter(lp => lp.completed).length;
  };

  const getOverallProgress = () => {
    const completedCount = getCompletedLessonsCount();
    return Math.round((completedCount / 33) * 100); // 33 = 31 lecciones + 2 apéndices
  };

  const resetProgress = () => {
    setTotalPoints(0);
    setLessonsProgress({});
    setExerciseResults([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ProgressContext.Provider
      value={{
        totalPoints,
        lessonsProgress,
        exerciseResults,
        recordExerciseResult,
        markLessonCompleted,
        markExerciseCompleted,
        getLessonProgress,
        getTotalScore,
        getCompletedLessonsCount,
        getOverallProgress,
        resetProgress
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
