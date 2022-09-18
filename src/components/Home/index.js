import React from "react";
import * as S from "./style";

export default function Home() {
	return (
		<S.HomeContainer>
			<S.Label>
				<h1>Do you like Rick and Morty?</h1>
				<S.Btn to={"/carac"}>→</S.Btn>
			</S.Label>
		</S.HomeContainer>
	);
}
