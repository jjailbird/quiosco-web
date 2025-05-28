import Image from "next/image";

export default function About() {
  return (
    <>

      <div className='w-full bg-[url(/img/office_1.jpg)] bg-cover bg-center relative bg-fixed'>
        <div className='absolute inset-0 bg-black/70'></div>
        <div className='relative container mx-auto bg-white/0 flex justify-center items-center min-h-screen z-10'>
          <div className='text-2xl items-center flex flex-col font-light space-y-3'>
            <div>
              Quiosco is a specialized company in kiosk software development and branding consulting, delivering solutions such as photo booths, unmanned payment systems, table ordering, and exhibition information kiosks.
            </div>
            <div>
              With a team of top-tier developers in the industry, we supply software to various kiosk brands and are preparing to launch our own brand based on extensive know-how and experience.
            </div>
            <div>
              Quiosco aims to establish itself not as a short-term trend, but as a cultural staple, offering unique value in the midst of rapidly changing trends.
            </div>
            <div>
              We differentiate ourselves through distinctive features and proprietary systems, continuously evolving with state-of-the-art technology that sets us apart from other kiosks.
            </div>
            <div>
              We are here to deliver the unique charm of Quiosco. Join us as we lead the kiosk culture where people can effortlessly enjoy photography in a relaxed and welcoming atmosphere.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
