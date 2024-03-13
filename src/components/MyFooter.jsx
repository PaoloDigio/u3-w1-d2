import Container from "react-bootstrap/Container";

const MyFooter = function () {
  return (
    <>
      <footer className="py-5 bg-black text-center">
        <Container>
          <p>&#169; 2024 EpiBooks</p>
          <p>Via Roma, 27, Milano</p>
        </Container>
      </footer>
    </>
  );
};

export default MyFooter;
