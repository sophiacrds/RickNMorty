import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Navbar = styled.nav`
	width: fit-content;
	display: flex;
	justify-content: center;
	gap: 10px;
`;

const Btn = styled.button`
	color: white;
	padding: 0.3rem;
	background: transparent;
	border: 2px solid white;
	cursor: pointer;
`;

export default function Pagination({ page, setPage }) {
	return (
		<Navbar>
			<Btn
				onClick={(e) => {
					setPage(e.target.innerText);
				}}
			>
				1
			</Btn>
			<Btn
				onClick={(e) => {
					setPage(e.target.innerText);
					console.log(page);
				}}
			>
				2
			</Btn>
			<Btn
				onClick={(e) => {
					setPage(e.target.innerText);
				}}
			>
				3
			</Btn>
		</Navbar>
	);
}
