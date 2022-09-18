import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	padding: 1rem 1rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;

export const CardsBox = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
`;

export const LinkStyle = styled(Link)`
	width: 3.5rem;
	height: 3.5rem;
	padding: 0.5rem;
	font-size: 3rem;
	text-decoration: none;
	color: white;
	border: 4px solid white;
	border-radius: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;
