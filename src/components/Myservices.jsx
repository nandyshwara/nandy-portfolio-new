import Container from "./Container";

export default function MyServices() {
  const data = [
    {
      title: "Website Developement/Design",
      approach: [
        "Unique figma Design",
        "Premium Look",
        "Graphic Design",
        "Content Upload",
        "Responsive",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
    },
    {
      title: "Website Redesign",
      approach: [
        "complete Re-Branding",
        "New Premium Designs",
        "Graphic Design",
        "Responsive",
        "Content Upload",
        "Highly Scalable",
        "Third Integration",
        "Payment Gateway",
        "And Much More…",
      ],
    },
  ];
  return (
    <div className="mt-10 pb-10" id="servicesOffered">
      <Container>
        <p className="text-center text-color-one text-4xl font-semibold mb-10">Services<span className="text-color-two"> I Offer</span></p>
        <div className="w-full md:w-1/2 mx-auto flex flex-col md:flex-row gap-10">
          {data.map((currEle, index) => {
            return (
              <div className="bg-white basis-1/2 rounded-2xl pb-5 transition-transform transform-gpu hover:scale-105 cursor-pointer">
                <div className="bg-[#FF8E5E] w-full py-5 rounded-t-2xl text-lg font-semibold text-color-two text-center">
                  <p className="my-auto">{currEle.title}</p>
                </div>
                <div className="w-10/12 mx-auto text-lg font-semibold mt-5">
                  {currEle.approach.map((ele, index) => {
                    return (
                      <div className="flex flex-row gap-x-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p>{ele}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
