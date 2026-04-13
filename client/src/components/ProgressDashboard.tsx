import React from 'react';
import { useProgress } from '@/contexts/ProgressContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, BookOpen, TrendingUp, RotateCcw } from 'lucide-react';

export const ProgressDashboard: React.FC = () => {
  const { totalPoints, lessonsProgress, getCompletedLessonsCount, resetProgress } = useProgress();

  const completedLessons = getCompletedLessonsCount();
  const totalLessons = Object.keys(lessonsProgress).length;
  const completionPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const handleResetProgress = () => {
    if (window.confirm('¿Estás seguro de que deseas reiniciar todo tu progreso? Esta acción no se puede deshacer.')) {
      resetProgress();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-6">
      {/* Estadísticas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Puntos totales */}
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 mb-1">Puntos Totales</p>
              <p className="text-3xl font-bold text-blue-900">{totalPoints}</p>
            </div>
            <Award className="w-12 h-12 text-blue-400 opacity-50" />
          </div>
        </Card>

        {/* Temas completados */}
        <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 mb-1">Temas Completados</p>
              <p className="text-3xl font-bold text-green-900">{completedLessons}/{totalLessons}</p>
            </div>
            <BookOpen className="w-12 h-12 text-green-400 opacity-50" />
          </div>
        </Card>

        {/* Progreso general */}
        <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-purple-600 mb-1">Progreso General</p>
              <p className="text-3xl font-bold text-purple-900">{completionPercentage}%</p>
            </div>
            <TrendingUp className="w-12 h-12 text-purple-400 opacity-50" />
          </div>
        </Card>
      </div>

      {/* Barra de progreso visual */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Progreso de Estudio</h3>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-green-500 h-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {completionPercentage === 100
            ? '¡Felicidades! Has completado todos los temas.'
            : `Completa ${totalLessons - completedLessons} tema${totalLessons - completedLessons !== 1 ? 's' : ''} más para terminar.`}
        </p>
      </Card>

      {/* Detalles de temas */}
      {Object.keys(lessonsProgress).length > 0 && (
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Detalles por Tema</h3>
          <div className="space-y-3">
            {Object.entries(lessonsProgress)
              .sort(([aId], [bId]) => {
                const aNum = parseInt(aId.split('-')[1]);
                const bNum = parseInt(bId.split('-')[1]);
                return aNum - bNum;
              })
              .map(([lessonId, progress]) => (
                <div key={lessonId} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      Tema {lessonId.split('-')[1]}
                    </p>
                    <p className="text-sm text-gray-600">
                      {progress.exercisesCompleted.length} ejercicio{progress.exercisesCompleted.length !== 1 ? 's' : ''} completado{progress.exercisesCompleted.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-blue-600">{progress.score} pts</p>
                    {progress.completed && (
                      <p className="text-xs text-green-600 font-medium">✓ Completado</p>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </Card>
      )}

      {/* Botón de reinicio */}
      <div className="flex justify-center">
        <Button
          variant="outline"
          onClick={handleResetProgress}
          className="text-red-600 border-red-200 hover:bg-red-50"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reiniciar Progreso
        </Button>
      </div>
    </div>
  );
};
