import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { Button, Menu, MenuItem, Modal, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import "./style.scss";

type typeProps = {
  buttonText: string;
};

export const DropDownMenu: FC<typeProps> = ({ buttonText }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const isMobile: boolean = useMediaQuery("(max-width:600px)");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return !isMobile ? (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        size="large"
        color="primary">
        {buttonText}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  ) : (
    <>
      <button className="nav__button" onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="modal">
          <nav className="modal__menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link className="modal__link" to={"/12"}>
                  Куда то
                </Link>
              </li>
              <li>
                <Link className="modal__link" to={"/12"}>
                  Куда то ещё
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Modal>
    </>
  );
};
