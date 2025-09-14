"use client";

import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import DefaultAvatar from "./assets/default-avatar.svg";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { fetchuser } from "@/backend/actions/useractions";

const Dashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [user, setuser] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const dbuser = await fetchuser(session.user.name);
    setuser(JSON.parse(dbuser));
    setTimeout(() => {
      setloading(false);
    }, 10);
    console.log(user);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const profilehandle = () => {
    handleClose();

    if (!user.name) {
      router.push(`/${session.user.name}/editprofile`);
    } else {
      router.push(`{${session.user.name}}`);
    }
  };

  const Customhandle = () => {
    handleClose();
    signOut();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <div className=" overflow-hidden rounded-full flex items-center justify-center relative size-[40px]">
          <Image
            className=" h-full w-full object-cover"
            src={user?.userpic ?? DefaultAvatar}
            alt=""
            width={32}
            height={32}
          />
        </div>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={profilehandle}>My account</MenuItem>
        <MenuItem onClick={Customhandle}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Dashboard;
