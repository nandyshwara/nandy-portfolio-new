import Container from "../components/Container";
import { Link } from "react-scroll";

export default function Navbar({ user, setRender, setUser }) {
  const navOptions = [
    {
      name: "About",
      route: "aboutMe",
    },
    {
      name: "Portfolio",
      route: "portfolio",
    },
    {
      name: "Contact",
      route: "contactMe",
    },
    {
      name: "Skills",
      route: "skillSection",
    },
    {
      name: "Services",
      route: "servicesOffered",
    },
  ];

  return (
    <>
      <div>
        <Container>
          <div className="w-10/12 mx-auto my-10">
            <div className="md:flex md:justify-between md:items-center md:h-20 md:gap-10 lg:gap-0 text-color-two">
              <p className="md:flex text-color-one text-3xl font-semibold text-center md:ml-0">NANDYSHWARA</p>
              <div className="hidden md:flex flex-row items-center space-x-10 text-2xl font-semibold text-color-one">
                {navOptions.map((currElem, index) => (
                  <Link
                    to={currElem.route}
                    smooth={true}
                    duration={1000}
                    className="text-md cursor-pointer transition-all ease-out"
                  >
                    {currElem.name}
                  </Link>
                ))}
              </div>
            </div>
            <hr className="h-1 border-1 border-[#4C0182] mt-5"></hr>
          </div>
        </Container>
      </div>
    </>
  );
}
