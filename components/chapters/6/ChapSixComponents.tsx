'use client';

import { useState } from 'react';

import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select';
import { SelectLabel } from '@radix-ui/react-select';

export const ColoredText = () => {
  const [enteredColor, setEnteredColor] = useState('');

  const handleUpdateTextColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredColor(e.target.value);
  };

  return (
    <>
      <Input
        type="text"
        onChange={handleUpdateTextColor}
        className="border-2 border-orange-100 rounded-md mb-4"
      />
      <p style={{ color: enteredColor }}>
        This texts color changes dynamically!
      </p>
    </>
  );
};

export const TodoPriority = () => {
  const [chosenProirity, setChosenPriority] = useState('low-prio');

  const handleChoosePriority = (value: string) => {
    setChosenPriority(value);
  };

  return (
    <>
      <p className={chosenProirity}>Chosen Priority: {chosenProirity}</p>

      <Select value={chosenProirity} onValueChange={handleChoosePriority}>
        <SelectTrigger className="w-full my-4">
          <SelectValue placeholder="Select a timezone" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select Priority</SelectLabel>
            <SelectItem value="low-prio">Low</SelectItem>
            <SelectItem value="high-prio">High</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export const TextInput = ({
  isValid,
  isRecommand,
  ...props
}: {
  isValid: boolean;
  isRecommand: boolean;
}) => {
  let bgColor = 'text-black';

  if (isRecommand) {
    bgColor = 'text-blue-500';
  }

  if (!isValid) {
    bgColor = 'text-red-500';
  }

  return <Input className={bgColor} {...props} />;
};

export const ExplanationText = ({
  children,
  isImportant,
}: {
  children: React.ReactNode;
  isImportant: boolean;
}) => {
  let cssClasses = 'text-yellow-500 font-semibold text-lg';

  if (!isImportant) {
    cssClasses = 'text-red-500 font-bold text-2xl';
  }

  return <p className={cssClasses}>{children}</p>;
};
