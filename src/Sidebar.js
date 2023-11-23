import React from "react";
import { Button, IconButton } from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DuoOutlinedIcon from "@mui/icons-material/DuoOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<CreateOutlinedIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number="55"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number="5" />
      <SidebarOption Icon={AccessTimeOutlinedIcon} title="Snoozed" number="5" />
      <SidebarOption
        Icon={LabelImportantOutlinedIcon}
        title="Important"
        number="5"
      />
      <SidebarOption Icon={NearMeOutlinedIcon} title="Sent" number="5" />
      <SidebarOption Icon={NoteOutlinedIcon} title="Drafts" number="5" />
      <SidebarOption Icon={ExpandMoreOutlinedIcon} title="More" number="5" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <DuoOutlinedIcon />
          </IconButton>
          <IconButton>
            <LocalPhoneOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
