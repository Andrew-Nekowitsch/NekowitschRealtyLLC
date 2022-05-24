import React from 'react'
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'

const components = {
	"xs":
		<Typography
			variant="h5"
			noWrap
			component="a"
			href=""
			sx={{
				mr: 2,
				display: { xs: 'flex', md: 'none' },
				flexGrow: 1,
				fontFamily: 'monospace',
				fontWeight: 700,
				letterSpacing: '.3rem',
				color: 'inherit',
				textDecoration: 'none',
			}}
		>
			Nekowitsch Realty LLC
		</Typography>,
	"md":
		<Typography
			variant="h6"
			noWrap
			component="a"
			href="/"
			sx={{
				mr: 2,
				display: { xs: 'none', md: 'flex' },
				fontFamily: 'monospace',
				fontWeight: 700,
				letterSpacing: '.3rem',
				color: 'inherit',
				textDecoration: 'none',
			}}
		>
			Nekowitsch Realty LLC
		</Typography>,
	"": null
}

function Logo(props) {
	return components[props.size]
}

Logo.propTypes = {
	size: PropTypes.string
}

export default Logo
