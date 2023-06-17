import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { FC, MouseEvent, useState } from 'react';
import { AppDispatch } from '../../redux/store';

function getHexColor(name: string): string {
  const unicode = name
    .split(' ')
    .map(item => item.charCodeAt(0))
    .join('');

  return `#${unicode.padStart(6, '0')}`;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: getHexColor(name),
      color: 'white',
    },
    children: `${name
      .split(' ')
      .map(str => str.slice(0, 1).toUpperCase())
      .join('')}`,
  };
}

export const UserMenu: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLButtonElement | null>(
    null
  );
  const dispatch: AppDispatch = useDispatch();
  const { user } = useAuth();

  const handleOpenUserMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickLogoutBtn = () => {
    dispatch(logoutUser());
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar {...stringAvatar(`${user.name}`)} />
        </IconButton>
      </Tooltip>
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
        <MenuItem onClick={handleCloseUserMenu}></MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <IconButton onClick={handleClickLogoutBtn} sx={{ p: 0 }}>
            <LogoutIcon />
          </IconButton>
        </MenuItem>
      </Menu>
    </Box>
  );
};
