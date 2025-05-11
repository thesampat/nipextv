import { useEffect, useState } from "react";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { useSpring, animated } from "@react-spring/web";

const CaroCompOne = () => {
  const fadeSlide = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 20 },
    delay: 200,
  });

  return (
    <div className="w-full h-screen relative overflow-hidden text-white flex items-center justify-center px-6 md:px-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img src="/images/11mayhero1.png" alt="Astronaut and TV" style={{objectPosition:'0px 80px'}} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-gray-900/70"></div>
      </div>

      <div className="block lg:hidden h-full w-full absolute inset-0">
  <img
    src="/images/2elcar3bg.jpg"
    alt="Mobile Banner"
    className="h-full w-full object-cover object-center"
  />

<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

<div className="absolute inset-0 flex items-center justify-center">
    <img
      src="/images/tvimage.png"
      alt="Nipex TV"
      className="w-3/4 max-w-xs object-contain drop-shadow-2xl z-10 absolute top-20"
    />
  </div>
</div>
      {/* Animated Content */}
      <div className="relative lg:flex z-10 max-w-6xl mx-auto w-full flex items-center justify-center text-center">
        <animated.div style={fadeSlide} className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Nipex: TVs So Advanced,
            <br />
            They’re Out of This World.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-md mx-auto">Blending cutting-edge visuals with futuristic design. Watch like never before.</p>
          <button className="bg-red-300 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">Discover More</button>
        </animated.div>
      </div>
    </div>
  );
};

const CaroCompOne2 = () => {
  const fadeSlide = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 20 },
    delay: 200,
  });

  return (
    <div className="w-full h-screen relative overflow-hidden text-white flex items-center justify-center px-6 md:px-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img src="/images/11mayhero2.png" alt="Astronaut and TV" style={{objectPosition:'0px 80px'}} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-gray-900/70"></div>
      </div>

      <div className="block lg:hidden h-full w-full absolute inset-0">
  <img
    src="/images/2elcar2bg.jpg"
    alt="Mobile Banner"
    className="h-full w-full object-cover object-center"
  />

<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

<div className="absolute inset-0 flex items-center justify-center">
    <img
      src="/images/tvimage.png"
      alt="Nipex TV"
      className="w-3/4 max-w-xs object-contain drop-shadow-2xl z-10 absolute top-20"
    />
  </div>
</div>
      {/* Animated Content */}
      <div className="relative lg:flex z-10 max-w-6xl mx-auto w-full flex items-center justify-center text-center">
        <animated.div style={fadeSlide} className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Nipex: TVs So Advanced,
            <br />
            They’re Out of This World.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-md mx-auto">Blending cutting-edge visuals with futuristic design. Watch like never before.</p>
          <button className="bg-red-300 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">Discover More</button>
        </animated.div>
      </div>
    </div>
  );
};

const CaroCompOne3 = () => {
  const fadeSlide = useSpring({
    from: { opacity: 0, transform: "translateY(30px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 20 },
    delay: 200,
  });

  return (
    <div className="w-full h-screen relative overflow-hidden text-white flex items-center justify-center px-6 md:px-12">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <img src="/images/11mayhero3.png" alt="Astronaut and TV" style={{objectPosition:'0px 80px'}} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-gray-900/70"></div>
      </div>

      <div className="block lg:hidden h-full w-full absolute inset-0">
  <img
    src="/images/2elcar1bg.jpg"
    alt="Mobile Banner"
    className="h-full w-full object-cover object-center"
  />

<div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

<div className="absolute inset-0 flex items-center justify-center">
    <img
      src="/images/tvimage.png"
      alt="Nipex TV"
      className="w-3/4 max-w-xs object-contain drop-shadow-2xl z-10 absolute top-20"
    />
  </div>
</div>
      {/* Animated Content */}
      <div className="relative lg:flex z-10 max-w-6xl mx-auto w-full flex items-center justify-center text-center">
        <animated.div style={fadeSlide} className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Nipex: TVs So Advanced,
            <br />
            They’re Out of This World.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 max-w-md mx-auto">Blending cutting-edge visuals with futuristic design. Watch like never before.</p>
          <button className="bg-red-300 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">Discover More</button>
        </animated.div>
      </div>
    </div>
  );
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const slides = [<CaroCompOne />, <CaroCompOne2 />, <CaroCompOne3 />];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((SlideComponent, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${current === index ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
          {/* Each slide must be full height */}
          <div className="w-full h-screen">{SlideComponent}</div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-3 w-3 rounded-full transition-all duration-300 ${current === i ? "bg-white scale-110" : "bg-white/30"}`} />
        ))}
      </div>
    </div>
  );
}
