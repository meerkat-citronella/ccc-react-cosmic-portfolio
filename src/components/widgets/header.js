import React from 'react'

import { StyledHeader } from './header.css.js'
import '../../App.css'

const Header = ({ clickHandler }) => {
	return (
		<StyledHeader className="app-header">
			<span className="header-my-name" onClick={clickHandler}>
				David Alfonso Castaneda
			</span>
			<ul className="header-nav">
				<li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="ABOUT">
					About
				</li>
				<li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="PORTFOLIO">
					Portfolio
				</li>
				{/* <li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="IDIOMS">
					Idioms
				</li> */}
				<li
					className="header-nav-item"
					onClick={clickHandler}
					data-view-visibility="CONTACT">
					Contact
				</li>
			</ul>
		</StyledHeader>
	)
}

export default Header
