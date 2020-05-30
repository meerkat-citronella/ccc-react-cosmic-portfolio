import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { ReactTypeformEmbed } from 'react-typeform-embed';

import { PageView } from './view.css.js'

const Contact = ({ isVisibile }) => {
	const styles = {
		width: isVisibile ? '100%' : '0',
	}

	return (
		<PageView className="contact-view" style={styles}>
			<p>
				<a className="contact-link" href="mailto:mail@mailto.com">
					📧 david.smith@gmail.com
				</a>
			</p>
		</PageView>
	)
}

export default Contact
