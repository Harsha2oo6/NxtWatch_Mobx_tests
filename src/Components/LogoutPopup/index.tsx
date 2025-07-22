import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { loginStore } from "../../Stores/LoginStore/loginstore";
import type { ReactNode } from "react";
import { ModalWrapper, PopupButton, RowDiv, Sure } from "./styledComponents";
import { MenuButton } from "../MobileNavigator/styledComponents";
import { LogoutIcon } from "../../Common/Icons";

const LogoutPopup = observer(() => {
  const navigate = useNavigate();

  return (
    <Popup
      modal
      trigger={
        <div>
          <PopupButton className="logout">Logout</PopupButton>
          <MenuButton><LogoutIcon/></MenuButton>
        </div>
      }
      >
      {((close: ()=>void) => (
        <ModalWrapper>
          <Sure>Are you sure you want to logout?</Sure>
          <RowDiv>
            <PopupButton className="close" onClick={close} >
              Cancel
            </PopupButton>
            <PopupButton className="confirm"
              onClick={() => {
                loginStore.logout();
                navigate("/login", { replace: true });
              }}
            >
              Confirm
            </PopupButton>
          </RowDiv>
        </ModalWrapper>
      )) as any as ReactNode}
    </Popup>
  );
});

export default LogoutPopup;