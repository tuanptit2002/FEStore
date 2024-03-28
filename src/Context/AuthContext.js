import React, { createContext, useState } from 'react';

// Tạo một context cho trạng thái xác thực
export const AuthContext = createContext();

// Component AuthProvider để cung cấp trạng thái xác thực cho các thành phần con
export const AuthProvider = ({ children }) => {
    // Một ví dụ về trạng thái xác thực và hàm cập nhật trạng thái
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
