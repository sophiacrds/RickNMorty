import styled from "styled-components";
import ricknmorty from "../../assets/ricknmorty.png";
import { LinkStyle } from "../Cards/style";

export const HomeContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding: 5rem 0 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	background: url(${ricknmorty}) no-repeat;
	background-position: bottom;
	background-size: 90vh;

	@media (min-width: 768px) {
		padding: 9rem 0 0;
	}
`;

export const Label = styled.div`
	width: 85%;
	max-width: 30rem;
	height: fit-content;
	color: white;
	text-align: center;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const Btn = styled(LinkStyle)`
	background-color: #323632;
`;
