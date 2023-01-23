import { useContext } from "react";
import { UserContext } from "../contexts/use";

const Alunos = () => {
  const { alunos } = useContext(UserContext);
  return <span>Alunos: {alunos}</span>;
};

export default Alunos;
