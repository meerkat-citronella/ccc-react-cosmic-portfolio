import React from 'react'
// import { Form, Button } from 'semantic-ui-react'

import { PageView } from './view.css.js'

const Idioms = ({ isVisibile, data }) => {
	const styles = {
		width: isVisibile ? '100%' : '0',
	}

	console.log('idioms data', data)
	const list = () => {
		return data.map((item) => {
			return <li>{item.title}</li>
		})
	}

	return (
		<PageView className="idioms-view" style={styles}>
			<div className="section-wrapper">
				<ul>{list()}</ul>
			</div>
		</PageView>
	)
}

export default Idioms
