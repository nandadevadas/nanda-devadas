"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { HelpCircle, Lightbulb, TrendingUp, Map } from 'lucide-react';

const cardData = [
  {
    id: 1,
    front: { word: 'Why', icon: <HelpCircle className="h-10 w-10" /> },
    back: 'Why should students listen to me?',
  },
  {
    id: 2,
    front: { word: 'Why', icon: <Lightbulb className="h-10 w-10" /> },
    back: 'Why should they learn this concept?',
  },
  {
    id: 3,
    front: { word: 'What', icon: <TrendingUp className="h-10 w-10" /> },
    back: 'What change can it bring to their lives?',
  },
  {
    id: 4,
    front: { word: 'Where', icon: <Map className="h-10 w-10" /> },
    back: 'Where can they apply it in the real world?',
  },
];

const FlippingCard = ({
  data,
  isFlipped,
  onClick,
}: {
  data: typeof cardData[0];
  isFlipped: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="group h-48 w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={onClick}
    >
      <div
        className={cn(
          'relative h-full w-full rounded-xl shadow-md transition-transform duration-700',
          '[transform-style:preserve-3d]'
        )}
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
      >
        {/* Front of card */}
        <div className="absolute flex h-full w-full items-center justify-center gap-4 rounded-xl bg-accent/30 p-4 text-primary [backface-visibility:hidden]">
          <h3 className="text-4xl font-bold font-headline">{data.front.word}</h3>
          {data.front.icon}
        </div>
        {/* Back of card */}
        <div className="absolute flex h-full w-full items-center justify-center rounded-xl bg-primary p-6 text-center text-primary-foreground [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-lg font-semibold">{data.back}</p>
        </div>
      </div>
    </div>
  );
};

export default function FourWsCards() {
  const [flippedStates, setFlippedStates] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  useEffect(() => {
    const timers = cardData.map((card, index) =>
      setTimeout(() => {
        setFlippedStates((prev) => ({ ...prev, [card.id]: true }));
      }, (index + 1) * 700)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleFlip = (id: number) => {
    setFlippedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mt-6 space-y-4 text-foreground">
      <p className="font-semibold text-center">
        My teaching philosophy revolves around what I call the 4 W’s of learning:
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cardData.map((card) => (
          <FlippingCard
            key={card.id}
            data={card}
            isFlipped={flippedStates[card.id]}
            onClick={() => handleFlip(card.id)}
          />
        ))}
      </div>
      <p className="pt-4 text-center text-muted-foreground italic">
        I believe that when students find relevance, curiosity follows naturally.
      </p>
    </div>
  );
}
