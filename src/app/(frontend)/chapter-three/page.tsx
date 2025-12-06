import {
  GoalItem,
  Linky,
  Product,
  Linkies,
} from '@/components/chapters/3/ChapThreeComponents';

const ChapterThree = () => {
  const productData = { title: 'Learn React', price: 35.99, id: 799899 };
  console.log('Product Data:', productData);

  const user = { name: 'John Doe', age: 30, email: 'johnDoe@example.com' };
  const { name, age, email } = user;
  console.log('User Name:', name);
  console.log('User Age:', age);
  console.log('User Email:', email);
  console.log('User Object:', user);
  console.log('User Name:', user.name);
  console.log('User Age:', user.age);
  console.log('User Email:', user.email);
  console.log('User Name:', user['name']);
  console.log('User Age:', user['age']);
  console.log('User Email:', user['email']);
  console.log('User Data:', user);

  const config = {
    href: 'https://react.dev/learn',
    download: true,
  };

  return (
    <>
      <h1 className="text-3xl text-red-50 font-bold text-center mt-10">
        Book List
      </h1>
      <ul className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
        <GoalItem title="Learn React" id="G1" />
        <GoalItem title="Learn React" id="G1" />
        <GoalItem title="Learn React" id="G1" />
        <GoalItem title="Learn React" id="G1" />
        <GoalItem title="Learn React" id="G1" />
        <GoalItem>Hello World Book</GoalItem>
      </ul>
      <h1 className="text-3xl text-blue-50 font-bold text-center mt-10">
        Product List
      </h1>
      <ul className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4 gap-4">
        <Product title="Learn React" price={34.99} id={999899} />
        <Product title="Learn React" price={34.99} id={999899} />
        <Product title="Learn React" price={34.99} id={999899} />
        <Product title="Learn React" price={34.99} id={999899} />
        <Product title="Learn React" price={34.99} id={999899} />

        {/* const productData = {title: "Learn React", price: 35.99, id: 799899}; */}
        <Product />
      </ul>
      <h1 className="text-3xl text-blue-50 font-bold text-center mt-10">
        Link List
      </h1>
      {/* Using the ...Spread Operator */}
      <Linky
        {...config}
        href={config.href}
        download={config.download}
        config={config}
      >
        Book Name
      </Linky>
      <Linky href={config.href} download={config.download} config={config}>
        Book Name
      </Linky>

      <h1 className="text-3xl text-blue-50 font-bold text-center mt-10">
        Linkies List
      </h1>
      {/* Using the ...Rest Operator */}
      <Linkies href="https://www.livethick.com">Link</Linkies>
    </>
  );
};

export default ChapterThree;
