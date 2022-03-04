import "./App.css";
import { useState } from "react";
//useSlector use to access state and useDispatch to dispatch actions
import { useSelector, useDispatch } from "react-redux";
//import adduser action
import { addUser, deleteUser, updateUsername } from "./features/Users";

import StyledButton, {
  FancyButton,
  SubmitButton,
  Deletebutton,
} from "./Components/ButtonsCrud/Button";

import { NewInput, StyledInput } from "./Components/InputStyled/Input.styles";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  return (
    <div className="App">
      <h1 style={{ color: "#204a6e" }}>TOMMY'S CRUD PROJECT </h1>

      <div className="addnav" style={{ background: "lightblue" }}>
        <label>Name</label>
        <StyledInput
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br></br>
        <label>Username</label>
        <br></br>
        <StyledInput
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        {/* <button
            onClick={() => {
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name: name,
                  username: username,
                })
              );
            }}
          >
            Add User
          </button> */}
        <br></br>
        <FancyButton
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          {" "}
          Add User
        </FancyButton>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div className="displayEachUsers">
              <div>
                <h1>{user.name}</h1>
              </div>

              <h2>{user.username}</h2>

              <div>
                <NewInput
                  type="text"
                  placeholder="Edit Username..."
                  onChange={(event) => {
                    setNewUsername(event.target.value);
                  }}
                />

                <StyledButton
                  onClick={() => {
                    dispatch(
                      updateUsername({ id: user.id, username: newUsername })
                    );
                  }}
                >
                  Update Username
                </StyledButton>
                <Deletebutton
                  onClick={() => {
                    dispatch(deleteUser({ id: user.id }));
                  }}
                >
                  Delete User
                </Deletebutton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
