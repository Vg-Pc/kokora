import { Collapse, Input, Button, Table } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

export const Row1Collapse = styled(Collapse)`
  width: 100%;
  font-weight: 700;
  font-size: 15px;
  background-color: white;
`;

export const SearchInput = styled(Input)`
  /* width: 100%; */
  height: 40px;
`;

export const HeaderButton = styled(Button)`
  margin-inline: 5px;
`;

export const Row22Table = styled(Table)`
  width: 100%;
  height: 100%;
`;

export const EditButton = styled(Button)`
  color: steelblue;
  width: 100%;
`;

export const ResetButton = styled(Button)`
  color: darkgoldenrod;
  width: 100%;
`;

export const DeleteButton = styled(Button)`
  color: red;
  width: 100%;
`;

export const ModalButton = styled(Button)`
  padding-left: 275px;
  position: absolute;
  margin-top: 10px;
`;

export const ModalListButton = styled(Button)`
  padding-left: 250px;
  position: absolute;
`;
