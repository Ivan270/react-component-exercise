import React from 'react';
import Card from '../UI/Card';
import './Concept.css';

const Concept = (props) => {
	const { concepts } = props;
	return (
		<ul id="concepts">
			{concepts.map((concept) => {
				return (
					<Card key={concept.title}>
						<img src={concept.image} alt={concept.title} />
						<h2>{concept.title}</h2>
						<p>{concept.description}</p>
					</Card>
				);
			})}
		</ul>
	);
};

export default Concept;
