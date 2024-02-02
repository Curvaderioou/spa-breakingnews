/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { Button, ErrorSpan, ImageLogo, InputNav, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  title: z
    .string()
    .min(1, { message: "A pesquisa não pode ser vazia" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "Não pode ter apenas espaços",
    }),
});

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();
  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }
  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputNav className="input-search-space">
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por título"
            />
          </InputNav>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo Breaking News" />
        </Link>

        <Button>Entrar</Button>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
