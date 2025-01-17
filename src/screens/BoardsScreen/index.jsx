import { useState, useEffect} from "react";
import Topbar from "./Topbar";
import CreateBoardModal from "./CreateBoardModal";
import NoBoards from "./NoBoards";
import AppLoader from "../../components/layout/AppLoader";
import { Stack, Grid2} from "@mui/material";
import BoardCard from "./BoardCard";
import useApp from "../../hooks/useApp";

const BoardsScreen = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { fetchBoards } = useApp()
  useEffect(()=>{
    fetchBoards();
  },[]);
  if(loading){
    return <AppLoader/>
  }
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoards/> */}
      <Stack px={3} mt={5}>
        <Grid2 container spacing={4}>
          <BoardCard/>
          <BoardCard/>
          <BoardCard/>
          <BoardCard/>
          <BoardCard/>
        </Grid2>
      </Stack>
    </>
  );
};

export default BoardsScreen;
