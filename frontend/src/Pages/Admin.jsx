import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Dialog } from "@headlessui/react";
import NavBar from "../components/NavBar";
import axios from "axios";
import DatePicker from "react-datepicker"; // Import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import { useSnackbar } from "notistack";

const AdminPage = () => {
  const [members, setMembers] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [paidUpToDate, setPaidUpToDate] = useState(new Date());
  const [joinedAt, setJoinedAt] = useState(new Date()); // State for Joined At date
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setMembers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const openDeleteModal = (member) => {
    setSelectedMember(member);
    setIsDeleteModalOpen(true);
  };

  const openEditModal = (member) => {
    setSelectedMember(member);
    setPaidUpToDate(new Date(member.PaidUpTo));
    setJoinedAt(new Date(member.joinedAt)); // Set joinedAt date
    setIsEditModalOpen(true);
  };

  const handleDelete = (currentUser) => {
    axios
      .delete(`http://localhost:5000/users/${currentUser._id}`)
      .then(() => {
        setIsDeleteModalOpen(false);
        enqueueSnackbar("Member deleted successfully", { variant: "success" });
        setMembers(members.filter((m) => m._id !== currentUser._id));
      })
      .catch((err) => {
        console.log(err);
        enqueueSnackbar("Failed to delete member", { variant: "error" });
      });
  };

  const handleEdit = (updatedMember) => {
    const dbUpdatedMember = {
      ...updatedMember,
      PaidUpTo: paidUpToDate.toISOString(),
      joinedAt: joinedAt.toISOString(), // Send joinedAt date to API
    };

    axios
      .put(`http://localhost:5000/users/${updatedMember._id}`, dbUpdatedMember)
      .then(() => {
        // Find the updated member and replace it in the members array
        setMembers(
          members.map((m) =>
            m._id === updatedMember._id
              ? { ...updatedMember, PaidUpTo: paidUpToDate, joinedAt: joinedAt }
              : m
          )
        );
        setIsEditModalOpen(false);
        enqueueSnackbar("Member updated successfully", { variant: "success" });
      })
      .catch((err) => {
        enqueueSnackbar("Failed to update member", { variant: "error" });
        console.error(err)});
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-r from-blue-700 to-blue-900 p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-8 text-center">
          Admin - Manage Members
        </h1>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full table-auto text-white text-sm md:text-base">
            <thead>
              <tr className="bg-blue-600 text-left">
                <th className="px-2 py-2 md:px-4 md:py-3">S-No</th>
                <th className="px-2 py-2 md:px-4 md:py-3">Name</th>
                <th className="px-2 py-2 md:px-4 md:py-3 text-center">
                  Active Status
                </th>
                <th className="px-2 py-2 md:px-4 md:py-3">Paid Up To</th>
                <th className="hidden md:table-cell px-2 py-2 md:px-4 md:py-3">
                  Joined At
                </th>
                <th className="px-2 py-2 md:px-4 md:py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr
                  key={member._id}
                  className="border-t text-center md:text-left"
                >
                  <td className="px-2 py-2 md:px-4 md:py-3">{index + 1}</td>
                  <td className="px-2 py-2 md:px-4 md:py-3">
                    {member.fullName}
                  </td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center flex justify-center items-center">
                    {member.isAdmin ? (
                      <FaCheckCircle className="text-green-500 mx-auto md:mx-0" />
                    ) : (
                      <FaTimesCircle className="text-red-500 mx-auto md:mx-0" />
                    )}
                  </td>
                  <td className="px-2 py-2 md:px-4 md:py-3">
                    {new Date(member.PaidUpTo).toLocaleDateString()}
                  </td>
                  <td className="hidden md:table-cell px-2 py-2 md:px-4 md:py-3">
                    {new Date(member.joinedAt).toLocaleDateString()}
                  </td>
                  <td className="px-2 py-2 md:px-4 md:py-3 text-center flex items-center justify-center space-x-2">
                    <FaEdit
                      className="text-yellow-400 cursor-pointer"
                      onClick={() => openEditModal(member)}
                    />
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={() => openDeleteModal(member)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Delete Modal */}
        <Dialog
          open={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <Dialog.Title className="text-xl font-bold mb-4">
              Delete Member
            </Dialog.Title>
            <p className="mb-4 text-gray-700">
              Are you sure you want to delete{" "}
              <strong>{selectedMember?.fullName}</strong>? This action cannot be
              undone.
            </p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleDelete(selectedMember)}
              >
                Delete
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>

        {/* Edit Modal */}
        <Dialog
          open={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <Dialog.Title className="text-xl font-bold mb-4">
              Edit Member
            </Dialog.Title>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Is Active:</label>
              <select
                value={selectedMember?.isAdmin}
                onChange={(e) =>
                  setSelectedMember({
                    ...selectedMember,
                    isAdmin: e.target.value === "true",
                  })
                }
                className="w-full p-2 border rounded"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Paid Up To:</label>
              <DatePicker
                selected={paidUpToDate}
                onChange={(date) => setPaidUpToDate(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Joined At:</label>
              <DatePicker
                selected={joinedAt}
                onChange={(date) => setJoinedAt(date)}
                dateFormat="MMMM d, yyyy"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleEdit(selectedMember)}
              >
                Save
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </>
  );
};

export default AdminPage;
