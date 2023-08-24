import Logo from "../assets/svgs/NandyshwaraLogo.svg";
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
          <div className="flex justify-between items-center h-20 md:gap-10 lg:gap-0 text-color-two">
            <img
              src={Logo}
              alt="nandyLogo"
              className="h-auto object-center select-none cursor-pointer mx-auto sm:mx-0"
            />
            <div className="hidden md:flex flex-row items-center space-x-10 text-xl">
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
            <div className="hidden md:flex text-xl font-semibold border border-white rounded-3xl">
              <p className="px-3 py-1">Download CV</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
