import React from "react";
import * as S from "./style";
import { useState, useEffect } from "react";
import Card from "../Card";
import { api } from "../../services/api";
// import Pagination from "../Pagination/Pagination";

export default function Cards() {
	const [characters, setCharacters] = useState([]);
	// const [page, setPage] = useState(1);
	const page = 1;

	useEffect(() => {
		api.get(`/?page=${page}`).then((res) => {
			setCharacters(res.data.results);
		});
	}, [page]);

	return (
		<S.Container>
			<S.CardsBox>
				{characters.map((i) => (
					<Card
						name={i.name}
						specie={i.species}
						status={i.status}
						image={i.image}
						location={i.location.name}
						key={i.id}
					/>
				))}
			</S.CardsBox>
			<S.LinkStyle to={"/"}>←</S.LinkStyle>
			{/* <Pagination page={} /> */}
		</S.Container>
	);
}
