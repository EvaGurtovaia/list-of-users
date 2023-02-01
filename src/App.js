import React, { useState, useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// There is a list of users: https://reqres.in/api/users

function App() {
    const [users, setUsers] = useState([]);
    const [invites, setInvites] = useState([1, 3]);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        fetch("https://reqres.in/api/users")
            .then((res) => res.json())
            .then((json) => {
                setUsers(json.data);
            })
            .catch((err) => {
                console.warn(err);
                alert("Error occured");
            })
            .finally(() => setLoading(false));
    }, []);

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value);
    };

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites((prev) => prev.filter((_id) => _id !== id));
        } else {
            setInvites((prev) => [...prev, id]);
        }
    };

    return (
        <div className="App">
            <Users
                onChangeSearchValue={onChangeSearchValue}
                searchValue={searchValue}
                items={users}
                isLoading={isLoading}
                invites={invites}
                onClickInvite={onClickInvite}
            />
            {/* <Success /> */}
        </div>
    );
}

export default App;
