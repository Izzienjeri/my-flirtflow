import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "./LikeButton";
import CommentList from "./CommentList";

function UserData() {
  const [users, setUsers] = useState([]);
  const [genderFilter, setGenderFilter] = useState("All");
  const [searchFilter, setSearchFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((users) => setUsers(users))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCommentClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleCommentSubmit = (commentText) => {
    console.log(`User ${selectedUserId} submitted a comment: ${commentText}`);
    // Clear the selected user after submitting the comment
    setSelectedUserId(null);
  };

  const filteredData =
    genderFilter === "All"
      ? users
      : users.filter((user) => user.gender === genderFilter);

  const filteredUser = filteredData
    .filter((user) =>
      user.name.toLowerCase().includes(searchFilter.toLowerCase())
    )
    .filter((user) =>
      ageFilter ? user.age.toString() === ageFilter.toString() : true
    );

  return (
    <div>
      <div className="users">
        <div className="tiles">
          <div>
            <h1>User Profile</h1>
          </div>
        </div>
        <div className="card-user">
          <div className="sidebar">
            <p id="app-name" className="nameed">
              <span>F</span>lirtFlow
            </p>
            <div className="search-bar">
              <div>
                <input
                  className="search"
                  placeholder="Enter Name"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                />
              </div>
              <div className="searc con">
                <FontAwesomeIcon icon={faSearch} size="2x" color="#000000" />
              </div>
            </div>
            <div>
              <p className="nameed">Filter by Age:</p>
              <input
                type="number"
                placeholder="Enter Age"
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
              />
            </div>
            <p className="nameed">Sort by:</p>
            <label>
              <input
                className="rd-btn"
                name="options"
                value="All"
                checked={genderFilter === "All"}
                onChange={() => setGenderFilter("All")}
                type="radio"
              />
              All
            </label>
            <label>
              <input
                className="rd-btn"
                name="options"
                value="Male"
                checked={genderFilter === "Male"}
                onChange={() => setGenderFilter("Male")}
                type="radio"
              />
              Male
            </label>
            <label>
              <input
                className="rd-btn"
                name="options"
                value="Female"
                checked={genderFilter === "Female"}
                onChange={() => setGenderFilter("Female")}
                type="radio"
              />
              Female
            </label>
          </div>
          <div className="userCard">
            {filteredUser.map((user) => (
              <div className="profile" key={user.id}>
                <img src={user.profile_picture} alt={`${user.name}`} />
                <h2>
                  <span>
                    {user.name}, {user.age}, {user.gender}
                  </span>
                </h2>
                <h3>
                  {user.location}, {user.hair_color}
                </h3>
                <p>Tel: {user.phone_number}</p>
                <div className="iconitis">
                  <div>
                    <LikeButton />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faMessage}
                      size="2x"
                      color="#000000"
                      onClick={() => handleCommentClick(user.id)}
                    />
                  </div>
                </div>
                {selectedUserId === user.id && (
                  <CommentList
                    userId={user.id}
                    onSubmit={handleCommentSubmit}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserData;
