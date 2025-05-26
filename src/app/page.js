import Image from "next/image";

export default function Home() {
  return (
    <div className='w-full bg-[url(/img/bg/bg_07.jpg)] bg-cover bg-center relative'>
      <div className='absolute inset-0 bg-black/70'></div>
      <div className='relative container mx-auto bg-white/0 flex justify-center items-center min-h-screen z-10'>
        <div className='text-4xl uppercase items-center flex flex-col font-light'>
          <div>quiosco.WEB</div>
          <div>
            Meet a New Experience
          </div>
          <div>
            With one Fingertip.
          </div>
        </div>
      </div>
    </div>
  );
}
