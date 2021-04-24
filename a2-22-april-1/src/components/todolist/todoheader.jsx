import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

import './todoheader.css'
const Todoheader = () => {
    return (
        <div>
			<AppBar
				color='primary'
				position='static'
				style={{ height: '64px' }}>
				<Toolbar>
					<Typography color='inherit'>TODO LIST</Typography>
				</Toolbar>
			</AppBar>
            </div>
		
    )
}

export default Todoheader
