import styled from "styled-components";

export const CardBox = styled.div`
	width: 80%;
	max-width: 300px;
	margin: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ImgCont = styled.div`
	width: 90%;
	overflow: hidden;
	border-radius: 0px 0px 20px 20px;
`;

export const ImgContainer = styled.div`
	border-radius: 20px;
	overflow: hidden;
	transform: skew(0deg, 8deg);
	margin: 17px 0px -15px 0px;
`;

export const Img = styled.img`
	width: 100%;
	transform: skew(0, -8deg);
	margin: -20px 0px 0px 0px;
`;

export const Label = styled.div`
	height: ${(p) => (p.size > 16 ? "10.5rem" : "9rem")};
	width: 100%;
	background: #f4f4ea;
	margin: -5rem 0 0 0;
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: center;
	padding: 1rem;
	text-align: center;
	transform: skew(0, -3deg);
	z-index: -99;

	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.278);
	border-radius: 20px;

	h3,
	p {
		width: fit-content;
		transform: skew(0, 3deg);
		color: #000000;
	}

	span {
		font-style: italic;
	}

	@media (min-width: 380px) {
		height: 9rem;
	}
`;
