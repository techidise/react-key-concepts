import {
  ColoredText,
  TodoPriority,
  TextInput,
  ExplanationText,
} from '@/components/chapters/6/ChapSixComponents';

const ChapterSix = () => {
  return (
    <div>
      <ColoredText />
      <TodoPriority />
      <TextInput isRecommand isValid />
      <ExplanationText isImportant>Hello World!</ExplanationText>
    </div>
  );
};

export default ChapterSix;
