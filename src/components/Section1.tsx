import Desginer from "../assets/images/other/design.png";
import Enginner from "../assets/images/other/engineer.png";

function Section1() {
  return (
    <section className="hidden lg:block">
      <div className="flex flex-col uppercase font-semibold absolute bottom-[15vh] lg:bottom-[20vh] left-8 right-8">
        <div className="overflow-hidden mb-2 lg:mb-0 lg:w-full relative mx-auto lg:mx-0">
          <div className="flex justify-between w-full">
            <p className="text-[clamp(14px,1.2vw,20px)] uppercase block">A</p>
            <p className="text-[clamp(14px,1.2vw,20px)] uppercase absolute left-1/2 -translate-x-1/2">
              Seriously
            </p>
            <p className="text-[clamp(14px,1.2vw,20px)] uppercase block">
              Good
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0">
          <div className="overflow-hidden mr-[4vw]">
            <div>
              <img
                src={Desginer}
                alt="Design"
                className="h-[10vw] w-auto object-contain pointer-events-none"
              />
            </div>
          </div>
          <div className="overflow-hidden">
            <div>
              <img
                src={Enginner}
                alt="Engineer"
                className="h-[10vw] w-auto object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden absolute left-8 bottom-6">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900"
            aria-hidden="true"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
          <p className="text-[clamp(12px,1.2vw,20px)] font-medium">
            Scroll for
          </p>
        </div>
      </div>
      <div className="overflow-hidden absolute right-8 bottom-6">
        <div className="flex items-center gap-1">
          <p className="text-[clamp(12px,1.2vw,20px)] font-medium">cool sh*t</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-down w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900"
            aria-hidden="true"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Section1;
