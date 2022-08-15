import isReact from "is-react";
import { configure, shallow } from "enzyme";
import { Link } from "react-router-dom";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Navbar from "./components/navbar/index";

configure({ adapter: new Adapter() });

describe("<Navbar />", () => {
  let nav;
  // Si o si vas a tener que usar class component! No van a correr ninguno de los tests si no lo haces. <3
  beforeEach(() => {
    nav = shallow(<Navbar />);
    expect(isReact.classComponent(Navbar)).toBeTruthy();
  });

  it('Debería renderizar tres <Link to="" />. El primero que vaya a "/", el segundo a "/home",el tercero a "/create" ', () => {
    // Podes importar el componente Link de react-router-dom.
    expect(nav.find(Link).length).toBeGreaterThanOrEqual(3);
    expect(nav.find(Link).at(0).prop("to")).toEqual("/");
    expect(nav.find(Link).at(1).prop("to")).toEqual("/home");
    expect(nav.find(Link).at(2).prop("to")).toEqual("/create");
  });

  it('Debería tener un Link con el texto "Home" que cambie la ruta hacia "/home"', () => {
    // El orden en el que se declaran los Links es importante!
    expect(nav.find(Link).at(1).prop("to")).toEqual("/home");
    expect(nav.find(Link).at(1).text()).toEqual("Home");
  });

  it('Debería tener un tercer Link, con texto "Create Activity" y que cambie la ruta hacia "/create"', () => {
    expect(nav.find(Link).at(2).prop("to")).toEqual("/create");
    expect(nav.find(Link).at(2).text()).toEqual("Create Activity");
  });
});
