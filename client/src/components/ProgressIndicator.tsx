import React from 'react';
import { Award } from 'lucide-react';

export const ProgressIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
      <Award className="w-5 h-5 text-yellow-300" />
      <span className="font-semibold text-sm">Estudiando...</span>
    </div>
  );
};
