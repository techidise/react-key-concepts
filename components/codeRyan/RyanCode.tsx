// Ryan Code ReactJS video | "Pure Components" => 1:05:33 //

import Image from 'next/image';

export const RyanCode = () => {
  const mainTagClasses: string =
    'flex min-h-screen flex-row items-center justify-center p-24';
  const mobileClasses: string = 'flex flex-col mt-24';
  const isSmallScreen: string = 'true';

  const isAV: boolean = false;
  const avImage: string = '/code-ryan/nsfw-ophelia_kaan.jpg';
  const nonAvIamge: string = '/code-ryan/sfw-ophelia_kaan.jpg';

  return (
    <>
      <main className={isSmallScreen ? mobileClasses : mainTagClasses}>
        <h2>JSX Tutorial</h2>
        <p>This tutorial is so great</p>
        <Image
          src={isAV ? avImage : nonAvIamge}
          alt="Ophelia Kaan"
          width={100}
          height={100}
          className=""
        />
      </main>
    </>
  );
};
