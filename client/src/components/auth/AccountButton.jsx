import React, { useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import OnlineIndicator from '../OnlineIndicator';
import AuthModal from './AuthModal';
import { useAuth } from '../../contexts/AuthContext'

function AccountButton() {
	const { isLoggedIn, account, logout } = useAuth();
	const [anchorElUser, setAnchorElUser] = useState(null);
	const [authModal, setAuthModal] = useState(false);
	const [register, setRegister] = useState(false);

	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};
	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const handleLogin = () => {
		setRegister(false);
		setAuthModal(true);
		handleCloseUserMenu();
	}
	const handleRegister = () => {
		setRegister(true);
		setAuthModal(true);
		handleCloseUserMenu();
	}


	const loggedInSettings =
		<>
			<MenuItem onClick={handleCloseUserMenu}>
				<Typography textAlign="center">Account</Typography>
			</MenuItem>
			<MenuItem onClick={logout}>
				<Typography textAlign="center">Logout</Typography>
			</MenuItem>
		</>
	const loggedOutSettings =
		<>
			<MenuItem onClick={handleLogin}>
				<Typography textAlign="center">Login</Typography>
			</MenuItem>
			<MenuItem onClick={handleRegister}>
				<Typography textAlign="center">Register</Typography>
			</MenuItem>
		</>
	const menu =
		<Menu
			sx={{ mt: '45px' }}
			id="menu-appbar"
			anchorEl={anchorElUser}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={Boolean(anchorElUser)}
			onClose={handleCloseUserMenu}
		>
			{isLoggedIn ? loggedInSettings : loggedOutSettings}
		</Menu>

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">

				<IconButton onClick={handleOpenUserMenu}>
					<OnlineIndicator online={isLoggedIn}>
						<Avatar src={account?.username || ''} alt={account?.username || ''} />
					</OnlineIndicator>
				</IconButton>
			</Tooltip>
			{menu}
			<AuthModal
				open={authModal}
				close={() => setAuthModal(false)}
				isRegisterMode={register}
				toggleRegister={() => setRegister((prev) => !prev)}
			/>
		</Box>
	)
}

export default AccountButton