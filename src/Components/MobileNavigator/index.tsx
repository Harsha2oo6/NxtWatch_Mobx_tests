import { AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { Menu, MenuButton, MenuItem } from './styledComponents';

const MobileNavigator = () => {
  const navigate = useNavigate();

  return (
    <Popup
      position="bottom right"
      arrow={false}
      trigger={
        <MenuButton>
          <AiOutlineMenu />
        </MenuButton>
      }
    >
      <Menu>
        <MenuItem onClick={() => navigate('/')}>Home</MenuItem>
        <MenuItem onClick={() => navigate('/trending')}>Trending</MenuItem>
        <MenuItem onClick={() => navigate('/gaming')}>Gaming</MenuItem>
        <MenuItem onClick={() => navigate('/saved')}>Saved Videos</MenuItem>
      </Menu>
    </Popup>
  );
};

export default MobileNavigator;
