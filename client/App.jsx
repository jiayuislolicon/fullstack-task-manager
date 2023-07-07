import React, { useEffect, useRef, useState } from "react";

import "./app.css";
import reactImg from "./assets/react.png";

const App = () => {
	const [username, setUsername] = useState("");

	useEffect(() => {
		fetch("/api/getUsername")
			.then((res) => res.json())
			.then((user) => {
				setUsername(user.username);
			});
	}, []);

	return (
		<div>
			{username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
			<img src={reactImg} alt='' />
		</div>
	);
};

export default App;
