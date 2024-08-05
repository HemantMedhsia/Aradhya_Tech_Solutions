import React, { useEffect, useState } from "react";

const AdminPanel = () => {
    const now = new Date();

    // Get the current date and time
    const date = now.getDate();
    const month = now.getMonth() + 1; // Months are zero-based, so we add 1
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the date and time as desired
    const formattedDate = `${date}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    const [Cdate, setDate] = useState();
    const [Ctime,setCtime] = useState();

    useEffect(()=>{
        setDate(formattedDate);
        setCtime(formattedTime);
    },[])

    return (
        <div className="bg-orange-100 min-h-screen ">
            <div className="flex flex-row pt-24 px-10 pb-4">
                <div className="w-2/12 mr-6">
                    <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                        <a
                            href="#"
                            className="inline-block text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined float-left pr-2">
                                dashboard
                            </span>
                            Users
                            <span className="material-icons-outlined float-right">
                                keyboard_arrow_right
                            </span>
                        </a>
                        <a
                            href="#"
                            className="inline-block text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined float-left pr-2">
                                tune
                            </span>
                            All Blogs
                            <span className="material-icons-outlined float-right">
                                keyboard_arrow_right
                            </span>
                        </a>
                        <a
                            href="#"
                            className="inline-block text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined float-left pr-2">
                                tune
                            </span>
                            Add Blog
                            <span className="material-icons-outlined float-right">
                                keyboard_arrow_right
                            </span>
                        </a>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
                        <a
                            href="#"
                            className="inline-block text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined float-left pr-2">
                                settings
                            </span>
                            Settings
                            <span className="material-icons-outlined float-right">
                                keyboard_arrow_right
                            </span>
                        </a>
                        <a
                            href="#"
                            className="inline-block text-gray-600 hover:text-black my-4 w-full"
                        >
                            <span className="material-icons-outlined float-left pr-2">
                                power_settings_new
                            </span>
                            Log out
                            <span className="material-icons-outlined float-right">
                                keyboard_arrow_right
                            </span>
                        </a>
                    </div>
                </div>

                <div className="w-10/12">
                    <div className="flex flex-row">
                        <div
                            className="bg-no-repeat bg-red-200 border border-red-300 rounded-xl w-7/12 mr-2 p-6"
                            style={{
                                backgroundImage:
                                    "url(https://previews.dropbox.com/p/thumb/AAvyFru8elv-S19NMGkQcztLLpDd6Y6VVVMqKhwISfNEpqV59iR5sJaPD4VTrz8ExV7WU9ryYPIUW8Gk2JmEm03OLBE2zAeQ3i7sjFx80O-7skVlsmlm0qRT0n7z9t07jU_E9KafA9l4rz68MsaZPazbDKBdcvEEEQPPc3TmZDsIhes1U-Z0YsH0uc2RSqEb0b83A1GNRo86e-8TbEoNqyX0gxBG-14Tawn0sZWLo5Iv96X-x10kVauME-Mc9HGS5G4h_26P2oHhiZ3SEgj6jW0KlEnsh2H_yTego0grbhdcN1Yjd_rLpyHUt5XhXHJwoqyJ_ylwvZD9-dRLgi_fM_7j/p.png?fv_content=true&size_mode=5)",
                                backgroundPosition: "90% center",
                            }}
                        >
                            <p className="text-5xl text-indigo-900">
                                Welcome to <br />
                                <strong>Aradhya Technologies</strong>
                            </p>
                            <span className="bg-red-300 text-xl text-white inline-block rounded-full mt-12 px-8 py-2">
                                <strong>{Cdate}</strong>
                            </span>
                            <span className="bg-red-300 text-xl ml-5 text-white inline-block rounded-full mt-12 px-8 py-2">
                                <strong>{Ctime}</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
