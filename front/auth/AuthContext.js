import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Or SecureStore

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load token from storage on app start
    useEffect(() => {
        const loadToken = async () => {
            const savedToken = await AsyncStorage.getItem('token'); 
            if (savedToken) {
                setToken(savedToken);
            }
            setLoading(false);
        };
        loadToken();
    }, []);

    const login = async (newToken) => {
        await AsyncStorage.setItem('token', newToken);
        setToken(newToken);
    };

    const logout = async () => {
        await AsyncStorage.removeItem('token'); // Or SecureStore
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
