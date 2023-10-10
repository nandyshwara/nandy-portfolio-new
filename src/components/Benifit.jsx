import Container from "./Container";

export default function Benifit() {
  return (
    <div className="my-20">
      <Container>
        <p className="text-xl md:text-5xl text-center font-semibold text-color-one">
          Benefits of getting a website built from Me
        </p>
        <div className="w-11/12 mx-auto bg-[#CE9FFC] rounded-xl py-10 px-10 mt-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="bg-white basis-1/3 rounded-xl pb-10">
              <div className="bg-[#4C0182] rounded-t-xl py-5">
                <p className="text-xl font-bold text-center text-white">
                  Premium Design
                </p>
              </div>
              <p className="mt-5 px-5 font-semibold">
                We create premium designs based on your needs.
              </p>
            </div>
            <div className="bg-white basis-1/3 rounded-xl pb-10">
              <div className="bg-[#4C0182] rounded-t-xl py-5">
                <p className="text-xl font-bold text-center text-white">
                  Fast Website Response
                </p>
              </div>
              <p className="mt-5 px-5 font-semibold">
                Faster websites correlate with higher conversion rates and
                increased sales.
              </p>
            </div>
            <div className="bg-white basis-1/3 rounded-xl pb-10">
              <div className="bg-[#4C0182] rounded-t-xl py-5">
                <p className="text-xl font-bold text-center text-white">
                  All Device Optimized
                </p>
              </div>
              <p className="mt-5 px-5 font-semibold">
                Faster websites correlate with higher conversion rates, driving
                business success.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="bg-white basis-1/3 rounded-xl pb-10">
              <div className="bg-[#4C0182] rounded-t-xl py-5">
                <p className="text-xl font-bold text-center text-white">
                  Scalability
                </p>
              </div>
              <p className="mt-5 px-5 font-semibold">
                Scalable websites ensure consistent performance, even during
                traffic surges.
              </p>
            </div>
            <div className="bg-white basis-1/3 rounded-xl pb-10">
              <div className="bg-[#4C0182] rounded-t-xl py-5">
                <p className="text-xl font-bold text-center text-white">
                  Transparency
                </p>
              </div>
              <p className="mt-5 px-5 font-semibold">
                Clients can enjoy full project transparency.
              </p>
            </div>
            <div className="bg-white basis-1/3 rounded-xl pb-10">
              <div className="bg-[#4C0182] rounded-t-xl py-5">
                <p className="text-xl font-bold text-center text-white">
                  Post Delivery Support
                </p>
              </div>
              <p className="mt-5 px-5 font-semibold">
                I provide free support for 3 months after project completion.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
