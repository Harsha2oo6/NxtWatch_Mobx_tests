import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import { loginStore } from "../../Stores/LoginStore/loginstore";
import type { ReactNode } from "react";
import { ModalWrapper, PopupButton } from "./styledComponents";

const LogoutPopup = observer(() => {
  const navigate = useNavigate();

  return (
    <Popup
      modal
      trigger={
        <div>
          <PopupButton className="logout">Logout</PopupButton>
        </div>
      }
      >
      {((close: ()=>void) => (
        <ModalWrapper>
          <p>Are you sure you want to logout?</p>
          <div >
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
          </div>
        </ModalWrapper>
      )) as any as ReactNode}
    </Popup>
  );
});

export default LogoutPopup;