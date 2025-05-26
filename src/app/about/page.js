import Image from "next/image";

export default function About() {
  return (
    <div className='w-full bg-[url(/img/bg/bg_03.jpg)] bg-cover bg-center relative'>
      <div className='absolute inset-0 bg-black/70'></div>
      <div className='relative container mx-auto bg-white/0 flex justify-center items-center min-h-screen z-10'>
        <div className='text-2xl uppercase items-center flex flex-col font-light'>
          Quiosco is a specialized company in kiosk software development and branding consulting, delivering software solutions for photo booths, unmanned payment systems, table ordering, and exhibition promotion guides.
          Our team of top industry developers supplies software to a variety of kiosk brands, and with extensive know-how and experience, we are currently preparing to launch our own brand.

          Quiosco aims to establish itself not as a short-lived trend but as a cultural staple, offering differentiated and unique solutions in the rapidly changing market.
          Through innovative products and proprietary systems, we stand out from other kiosks by delivering the highest level of technology and continuously evolving.
          We promise to deliver the distinct “specialness” that only Quiosco can offer. Join us as a leader in creating a kiosk culture where customers can enjoy photos easily in a relaxed atmosphere.
        </div>
      </div>
    </div>
  );
}
