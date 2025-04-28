import { NavLink, Outlet } from "react-router";
import Container from "../components/container";
import Text from "../components/text";

export default function LayoutMain() {
  return (
    <>
      <Container as="header" className="mt-3 md:mt-20">
        Olá mundo - HEADER
      </Container>

      <main className="mt-4 md:mt-8">
        <Outlet />
      </main>

      <footer className="my-5 md:my-10">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to="/">
            <Text variant="body-sm-bold" className="text-gray-300">
              Tarefas
            </Text>
          </NavLink>
          <NavLink to="/componentes">
            <Text variant="body-sm-bold" className="text-gray-300">
              Componentes
            </Text>
          </NavLink>
        </nav>
      </footer>
    </>
  );
}
