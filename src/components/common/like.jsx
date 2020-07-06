import React from 'react';

export default function Like(props) {
	let classes = 'fa fa-heart';
	if (!props.liked) classes += '-o';

	return <i onClick={() => props.onLike(props.item)} className={classes} style={{ cursor: 'pointer' }} />;
}
