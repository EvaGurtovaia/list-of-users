import React, { useState, useEffect } from "react";
import "./index.scss";
import { Success } from "./components/Success";
import { Users } from "./components/Users";

// There is a list of users: https://reqres.in/api/users

function App() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState(" ");

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

    return (
        <div className="App">
            <Users
                onChangeSearchValue={onChangeSearchValue}
                searchValue={searchValue}
                items={users}
                isLoading={isLoading}
            />
            {/* <Success /> */}
        </div>
    );
}

export default App;
