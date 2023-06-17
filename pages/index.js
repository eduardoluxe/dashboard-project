import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4"></h1>
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-bold mb-2">Dashboard</h2>
                <p>Dashboard Desenvolvido pelo Eduardo 14/06</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-500 text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Clientes</h3>
                        <p className="text-sm">Total: 100</p>
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Pedidos</h3>
                        <p className="text-lg">Total: 50</p>
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Funcionários</h3>
                        <p className="text-lg">Total: 1</p>
                    </div>
                    <div className="bg-green-500 text-white p-4 rounded-lg">
                        <h3 className="text-lg font-bold mb-2">Saldo</h3>
                        <p className="text-lg">Total: 80</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
