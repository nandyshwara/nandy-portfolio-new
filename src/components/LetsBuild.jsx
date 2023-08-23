import Container from "./Container";

export default function LetsBuild() {
  return (
    <div className="mt-10 py-10 bg-[#19191D]">
      <Container>
        <div className="text-center text-6xl font-semibold mx-auto text-color-one">
          <p>Lets build your</p>
          <p className="text-color-two">project together</p>
        </div>
        <div className="w-1/3 mx-auto">
          <button className="w-full bg-[#FF8E5E] rounded-3xl bg-[] text-2xl font-semibold px-5 py-1 mt-10">
            Let’s Connect
          </button>
        </div>
      </Container>
    </div>
  );
}
