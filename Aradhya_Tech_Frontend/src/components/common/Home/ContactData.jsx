import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import Searchbar from "../Searchbar";
import { MdDeleteOutline } from "react-icons/md";
import IconButton from "@mui/material/IconButton";
import { FaEye } from "react-icons/fa";

export default function ContactData() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const columns = [
        { field: "seqNo", headerName: "No.", width: 70 },
        { field: "name", headerName: "Name", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
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
                        onClick={() => handleView(params.row._id)}
                        sx={{color:"green"}}
                    >
                        <FaEye />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        onClick={() => handleDelete(params.row._id)}
                        sx={{ color: "red" }}
                    >
                        <MdDeleteOutline />
                    </IconButton>
                </>
            ),
            sortable: false,
        },
    ];

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                await axios.delete(`http://localhost:8000/api/user/contact/${id}`);
                setRows((prevRows) => prevRows.filter((row) => row._id !== id));
            } catch (error) {
                console.error("Error deleting item:", error);
                setError("Failed to delete item");
            }
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
    

    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="">
            <div className="pb-8">
                <Searchbar />
            </div>
            <div className="bg-white p-6">
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
        </div>
    );
}
