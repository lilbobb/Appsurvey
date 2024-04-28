import React from "react";
import Navbar from "../components/NavBar";

const Testimonials = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-200 to-blue-400">
      <Navbar />
      <h1 className="text-blue-900 bg-slate-400 py-2 px-2 font-bold mb-8 text-lg md:text-2xl shadow-md rounded-sm text-center">
        Testimonials
      </h1>
      <div className="mx-auto max-w-xl bg-white rounded-md shadow-lg p-6 mb-8">
        <p className="text-gray-800 mb-4">
          Hi there, I'm Sara! Once upon a time, I was all about teaching my
          wonderful students through online platforms. But you know what? I had
          this big dream swirling in my mind a dream of having a cozy community
          library where everyone could gather, explore, and learn together.
          Before I stumbled upon Pioneer Vision Foundation, chasing my dream
          felt like chasing a shooting star—beautiful but just out of reach. I
          had the passion, but the roadblocks seemed too big to overcome on my
          own. Money was tight, and making my dream a reality seemed like a
          distant dream itself. Then, one day, everything changed. I met the
          incredible folks from Pioneer Vision Foundation, and let me tell you,
          they're like fairy godmothers for dreamers like me. They believed in
          my vision and gave me the support I needed to turn it into something
          real. Thanks to them, my community now has a library, and guess what?
          It's named after yours truly! It's become a place where people come
          together, where ideas flow freely, and where dreams take flight. None
          of this would have been possible without the amazing partnership with
          Pioneer Vision Foundation. They've truly helped me turn my dream into
          a beautiful reality.
        </p>
        <h2 className="font-bold text-blue-900">~Sara</h2>
      </div>
      <div className="mx-auto max-w-xl bg-white rounded-md shadow-lg p-6 mb-8">
        <p className="text-gray-800 mb-4">
          Hey there, I'm John. Living with blindness hasn't stopped me from
          dreaming big and wanting the best for my community. I've always had
          this vision of a general park a place where everyone, regardless of
          age, ability, or reason, could come together and enjoy the simple
          pleasures of life. You see, I've always loved the sound of people
          around me, the laughter of children, the chatter of friends catching
          up, the joy of families spending time together. And I wanted a place
          where everyone could experience that, regardless of their
          circumstances. Before I connected with Pioneer Vision Foundation,
          turning my dream into reality seemed like an impossible task. Sure, I
          had the passion and the drive, but I lacked the resources and support
          to make it happen. Being blind, I faced additional challenges in
          navigating the bureaucratic hurdles and finding the right partners to
          bring my vision to life. But then, Pioneer Vision Foundation came into
          the picture. Their unwavering dedication to empowering individuals in
          our small communities gave me hope. With their support, I was able to
          overcome the obstacles that once seemed insurmountable. Through their
          grant program and invaluable guidance, I finally saw my dream of a
          general park for all become a reality. Today, thanks to the
          partnership with Pioneer Vision Foundation, my community has a vibrant
          park where people of all ages, abilities, and backgrounds can come
          together, create memories, and enjoy the simple joys of life. Their
          impact on my dream has been nothing short of transformative, and I'm
          forever grateful for their support in making it a reality.
        </p>
        <h2 className="font-bold text-blue-900">~John</h2>
      </div>
    </div>
  );
};

export default Testimonials;
