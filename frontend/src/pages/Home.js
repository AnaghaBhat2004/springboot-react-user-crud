import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // For delete modal

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8089/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const confirmDelete = (user) => {
    setSelectedUser(user);
  };

  const deleteUser = async () => {
    try {
      if (selectedUser) {
        await axios.delete(`http://localhost:8089/users/${selectedUser.id}`);
        setSelectedUser(null);
        loadUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="container mt-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-lilac">Users Dashboard</h2>
        <Link className="btn btn-lilac" to="/adduser">
          <i className="bi bi-person-plus"></i> Add User
        </Link>
      </div>

      {/* User Cards */}
      <div className="row">
        {users.map((user) => (
          <div className="col-md-4 mb-4" key={user.id}>
            <div className="card card-lilac shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">@{user.username}</h6>
                <p className="card-text">{user.email}</p>
                <div className="d-flex justify-content-between">
                  <Link
                    className="btn btn-lilac btn-sm"
                    to={`/viewuser/${user.id}`}
                  >
                    <i className="bi bi-eye"></i> View
                  </Link>
                  <Link
                    className="btn btn-outline-lilac btn-sm"
                    to={`/edituser/${user.id}`}
                  >
                    <i className="bi bi-pencil"></i> Edit
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => confirmDelete(user)}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Users Message */}
      {users.length === 0 && (
        <div className="text-center text-muted mt-5">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
            alt="No users"
            width="120"
            className="mb-3"
          />
          <p>
            No users found. Click <b>Add User</b> to create one.
          </p>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" id="deleteModalLabel">
                Confirm Delete
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete{" "}
              <b>{selectedUser?.name}</b>?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={deleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
