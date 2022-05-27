import React from "react";
import { styled } from "@mui/system";
import {
  Sidebar,
  FriendsSidebar,
  Messenger,
  Appbar,
  Loader,
} from "../components";
import { logout } from "../utils/auth";
import { connect } from "react-redux";
import { getActions } from "../store/actions/authActions";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "auto auto 1fr",
  gridTemplateRows: "auto 1fr",
});

const Dashboard = ({ setUserDetails }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      setIsAuthenticated(false);
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      setIsAuthenticated(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Loader />;
  }

  return (
    <Wrapper>
      <Sidebar />
      <FriendsSidebar />
      <Appbar />
      <Messenger />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(null, mapActionsToProps)(Dashboard);
