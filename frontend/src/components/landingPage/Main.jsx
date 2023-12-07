import { Link } from "react-router-dom";
import checkMark from "../assets/png/checkMark.png";
import Demo from "../assets/png/Demo.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UILink from "@mui/material/Link";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grow from "@mui/material/Grow";

export default function () {
  return (
    <>
      <div className="mx-auto flex flex-col w-full bg-gradient-left  border-t border-[#00000036]  ">
        <div className="flex-col gap-2 flex grow w-full my-20 lg:my-12 mx-auto items-center ">
          <img src={checkMark} className="w-40 mb-1 m-auto" alt="checkMark" />
          <Typography fontFamily={"monospace"} variant="h3" className="  ">
            AdhdList
          </Typography>
          <Typography>Get your shit done !</Typography>
          <Typography gutterBottom>
            With AdhdList stop getting distracted and start getting your shit
            done
          </Typography>
          <Link to="/todos/all">
            <Button size="small" variant="contained">
              Start Now !
            </Button>
          </Link>
        </div>
        <div className="mx-auto flex my-auto w-full border-t bg-[#0c0c0c31] border-[#0000003a] py-16">
          <div className="m-auto py-5 ">
            <List>
              <Grow in timeout={400}>
                <ListItem> ✦ Track your Time </ListItem>
              </Grow>
              <Grow in timeout={800}>
                <ListItem> ✦ Stop getting distracted </ListItem>
              </Grow>
              <Grow in timeout={1200}>
                <ListItem>
                  {" "}
                  ✦ Add steps and finish yor work more smoothly{" "}
                </ListItem>
              </Grow>
              <Grow in timeout={1600}>
                <ListItem> ✦ Become focused, organized, and calm </ListItem>
              </Grow>
              <Grow in timeout={2000}>
                <ListItem> ✦ Completely free and open source </ListItem>
              </Grow>
            </List>
          </div>
          <Grow in timeout={2400}>
            <img src={Demo} className="w-96 mb-1 m-auto " alt="Demo" />
          </Grow>
        </div>
      </div>
    </>
  );
}


