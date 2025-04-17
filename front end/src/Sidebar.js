// Sidebar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="relative">
            {/* Toggle button */}
            <div className="p-2 text-white bg-dark rounded" style={{ cursor: 'pointer' }}>
                <FaBars onClick={() => setIsOpen(!isOpen)} />
            </div>

            {/* Sidebar Dropdown */}
            {isOpen && (
                <div
                    className="position-absolute bg-dark text-white p-3 rounded shadow"
                    style={{
                        top: '50px',
                        right: 0,
                        width: '200px',
                        zIndex: 999,
                    }}
                >
                    {/* ✅ Admin Button */}
                    <button
                        onClick={() => {
                            navigate('/login');
                            setIsOpen(false);
                        }}
                        className="btn btn-secondary w-100 text-start mb-2"
                    >
                        Admin
                    </button>

                    {/* ✅ Registration Button */}
                    <button
                        onClick={() => {
                            navigate('/register');
                            setIsOpen(false);
                        }}
                        className="btn btn-success w-100 text-start"
                    >
                        Registration
                    </button>
                </div>
            )}


        </div>
    );
};

export default Sidebar;
