import  Logo  from "../assets/svgs/NandyshwaraLogo.svg";
import Container from "../components/Container";

export default function Navbar({ user, setRender, setUser }) {
  const navOptions = [
    {
      name: "About",
      route: "/",
    },
    {
      name: "Portfolio",
      route: "/",
    },
    {
      name: "Contact",
      route: "/",
    },
    {
        name : "Skills",
        route: "/"
    }
  ];

  return (
    <>
      <div
      >
        <Container>
          <div className="flex justify-between items-center h-20 md:gap-10 lg:gap-0 text-color-two">
            <img
              src={Logo}
              alt="nandyLogo"
              className="h-auto object-center select-none cursor-pointer"
            />
            <div className="hidden md:flex flex-row items-center space-x-10 text-xl">
              {navOptions.map((currElem, index) => (
                <div>
                  <p
                    key={index}
                    className="text-md cursor-pointer transition-all ease-out"
                  >
                    {currElem.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-xl font-semibold border border-white rounded-3xl">
                <p className="px-3 py-1">Download CV</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
