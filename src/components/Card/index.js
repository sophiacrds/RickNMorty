import React from "react";
import * as S from "./style";

export default function Card(p) {
	return (
		<S.CardBox>
			<S.ImgCont>
				<S.ImgContainer>
					<S.Img src={p.image} alt={p.name} title={p.name} />
				</S.ImgContainer>
			</S.ImgCont>
			<S.Label size={p.name.length}>
				<h3>{p.name}</h3>
				<p>
					{p.specie} • <span>{p.status}</span>
				</p>
			</S.Label>
		</S.CardBox>
	);
}
