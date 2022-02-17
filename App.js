import React from "react";
import { useRoutes, Link } from "react-router-dom";
import styled from "styled-components";

export default function App(){
  return useRoutes([
    { path: "/", element:<Home/>},
    { path: "1", element:<Compo1/>},
    { path: "2", element:<Compo2/>},
    { path: "3", element:<Compo3/>}
]);
}
const Layout = ({children}) => (<div>
    <Table>
      <thead>
      <Tr>
        <Th><Header/></Th>
      </Tr>
      </thead>
      <tbody>
      <Tr>
        <Td><Navibar/></Td>
      </Tr>
      <Tr>
        <Td>{children}</Td>
      </Tr>
      <Tr>
        <Td><Footer/></Td>
      </Tr>
      </tbody>
    </Table>
  </div>)
const Header = () => (<h1>Header</h1>)
const Navibar = () => (<nav>
  <Ul>
    <Li><Link to ={"/"}>Home</Link></Li>
    <Li><Link to ={"/1"}>1</Link></Li>
    <Li><Link to ={"/2"}>2</Link></Li>
    <Li><Link to ={"/3"}>3</Link></Li>
  </Ul>
  
  </nav>)
const Home = () => (<Layout><h1>즐거운 리액트 코딩</h1></Layout>)
const Compo1 = () => (<Layout><h1>1</h1></Layout>)
const Compo2 = () => (<Layout><h1>2</h1></Layout>)
const Compo3 = () => (<Layout><h1>3</h1></Layout>)
const Footer = () => (<h1>Footer</h1>)

const Ul = styled.ul`
  background-color: #FFDAB9;
  text-decoration: none;
  text-align: center;
`

const Li = styled.li`
  float: left;
  margin-left: 1em;
  font-size: 20px;
  text-align: center;
  display: inline-block
`
const Table = styled.table`
    border: 1px solid black;
    width: 1000px;
    height: 500px;
    margin: 0 auto;
`
const Tr = styled.tr`
    border: 1px solid black
`
const Th = styled.th`
    border: 1px solid black
`
const Td = styled.td`
    border: 1px solid black
`