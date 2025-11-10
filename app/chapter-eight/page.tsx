import { BlogPosts } from '@/components/chapters/8/ChapterEightComponents';
import ShowAlert from '@/components/chapters/8/ShowAlert';

const ChapEight = () => {
  return (
    <div>
      <ShowAlert />
      <BlogPosts url="https://jsonplaceholder.typicode.com/posts" />
    </div>
  );
};

export default ChapEight;
