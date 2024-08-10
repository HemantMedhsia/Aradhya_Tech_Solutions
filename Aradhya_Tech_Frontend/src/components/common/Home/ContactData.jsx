import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Searchbar from "../Searchbar";
import { MdDeleteOutline } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { FaEye } from "react-icons/fa";
import Button from "../Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ToastContainer,toast } from "react-toastify";

export default function ContactData() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const [viewContactBox, setViewContactBox] = useState(false);
    const [topic, setTopic] = useState("");
    const [message, setMessage] = useState("");

    const columns = [
        { field: "seqNo", headerName: "No.", width: 70 },
        { field: "name", headerName: "Name", width: 220 },
        { field: "email", headerName: "Email", width: 230 },
        { field: "contactNumber", headerName: "Contact Number", width: 150 },
        { field: "topic", headerName: "Topic", width: 200 },
        {
            field: "actions",
            headerName: "",
            width: 100,
            renderCell: (params) => (
                <>
                    <IconButton
                        aria-label="view"
                        onClick={() => handleView(params.row.msg, params.row.topic)}
                        sx={{ color: "green" }}
                    >
                        <FaEye />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDeleteData(params.row._id)}
                        sx={{ color: "red" }}
                    >
                        <MdDeleteOutline />
                    </IconButton>
                </>
            ),
            sortable: false,
        },
    ];

    const handleView = (message, topic) => {
        setViewContactBox(true);
        setTopic(topic);
        setMessage(message);
    };

    const handleDeleteData = async (id) => {
        setDeleteConfirmation(true);
        setDeleteId(id);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/user/contact/${id}`);
            setRows((prevRows) => prevRows.filter((row) => row._id !== id));
            toast.success("Row Data Deleted Sucessfully !!")
        } catch (error) {
            console.error("Error deleting item:", error);
            setError("Failed to delete row data");
            toast.error("Failed to delete data !!")
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/user/contact"
                );

                // Add sequential numbers to the rows
                const dataWithSeqNo = response.data.map((item, index) => ({
                    ...item,
                    seqNo: index + 1, // Sequential number starts from 1
                }));

                setRows(dataWithSeqNo);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const cancelDelete = () => {
        setDeleteConfirmation(false);
    };

    const closeViewContactBox = () => {
        setViewContactBox(false);
        setTopic("");
        setMessage("");
    };

    if (loading) return <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full bg-gray-900 opacity-80"><span className="dataloader absolute"></span></div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="">
            <div className="pb-8">
                <Searchbar />
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500">
                <div style={{ width: "100%" }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => row._id}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        disableColumnMenu
                        disableSelectionOnClick
                        hideFooterPagination
                        sx={{
                            "& .MuiDataGrid-root": {
                                border: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                fontSize: "14px",
                            },
                        }}
                    />
                </div>
            </div>
            <ToastContainer/>
            {deleteConfirmation && (
                <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative py-3 sm:max-w-md sm:mx-auto w-full">
                        <div className="relative bg-white shadow-lg sm:rounded-3xl sm:p-10">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold">
                                        Confirm Delete
                                    </h1>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                                        Are you sure you want to delete this
                                        blog?
                                    </div>
                                    <div className="relative mt-6 flex justify-between">
                                        <Button
                                            name={"Yes, Delete"}
                                            onClick={() => {
                                                handleDelete(deleteId);
                                                cancelDelete();
                                            }}
                                        />
                                        <Button
                                            name={"Cancel"}
                                            onClick={cancelDelete}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Modal
                open={viewContactBox}
                onClose={closeViewContactBox}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                    }}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Topic: {topic}
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Message: {message}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
