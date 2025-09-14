"use client";
import { React, useState, useEffect } from "react";
import { fetchcards } from "@/backend/actions/useractions";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

import Box from "@mui/joy/Box";
import Skeleton from "@mui/joy/Skeleton";

function GeometrySkeleton() {
  return (
    <div>
      <Box className="flex items-center gap-2  mx-2 ">
        <Skeleton variant="circular" width={48} height={48} />
        <div>
          <Skeleton
            variant="rectangular"
            width={200}
            height="1em"
            sx={{ mb: 1 }}
          />
          <Skeleton variant="rectangular" width={140} height="1em" />
        </div>
      </Box>
    </div>
  );
}

const searchmodal = () => {
  const router = useRouter();
  const [cards, setcards] = useState([]);
  const [open, setOpen] = useState(false);
  const [Text, setText] = useState("");

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async (params) => {
    let dbcards = await fetchcards();
    setcards(JSON.parse(dbcards));
  };

  return (
    <div className="absolute top-0 h-full w-full ">
      <div
        className="capitalize h-full w-full"
        onClick={() => setOpen(true)}
      ></div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog className=" p-0 m-0 rounded-xl overflow-hidden w-[600px] ">
          <input
            placeholder="search creator"
            className="bg-slate-300 outline-none  w-[600px] h-[50px] px-4"
            autoFocus
            required
            value={Text}
            maxLength="30"
            onChange={(e) => setText(e.target.value)}
          />

          <IconButton
            size="large"
            className="absolute top-0 right-0"
            onClick={() => setOpen(false)}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>

          <div className="h-[500px] overflow-y-auto overflow-x-hidden">
            {cards.map((item, index3) => {
              const carduserhandle = () => {
                router.push(`{${item.username}}`);
                setOpen(false);
              };

              return (
                item.name &&
                (Text.length == 0 || item.name.includes(Text)) && (
                  <div
                    key={index3}
                    className=" h-[50px] w-[600px] p-2 mb-2 flex items-center hover:bg-slate-100 cursor-pointer"
                    onClick={carduserhandle}
                  >
                    <div className="relative size-10  rounded-full mx-2 overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={item.userpic}
                        alt=""
                      />
                    </div>
                    <div className="">
                      <div>{item.name}</div>
                      <div>{item.profession}</div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </ModalDialog>
      </Modal>
    </div>
  );
};

export default searchmodal;
