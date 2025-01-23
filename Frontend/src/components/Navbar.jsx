import React, { useState, useEffect } from "react";
import { Leaf } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { ethers } from "ethers";

export default function Navbar({ setIsSidebarOpen, isSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [userAccount, setUserAccount] = useState("");
  const [etherBalance, setEtherBalance] = useState("");
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [info, setInfo] = useState(false);

  const checkAccount = async () => {
    if (!window.ethereum) {
      console.log("Connect to MetaMask");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length > 0) {
        console.log(accounts[0]);
        setUserAccount(accounts[0]);
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.error("Error checking account:", error);
    }
  };

  const getAccountDetails = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const account = accounts[0];
      setUserAccount(account);

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const balanceWei = await provider.getBalance(account);
      const balanceEth = ethers.utils.formatEther(balanceWei);
      setEtherBalance(balanceEth);

      const transactionCount = await provider.getTransactionCount(account);
      setTotalTransactions(transactionCount);

      console.log("Account Address:", account);
      console.log("Balance:", balanceEth, "ETH");
      console.log("Total Transactions:", transactionCount);
    } catch (error) {
      if (error.code === 4001) {
        console.log("Please connect to MetaMask.");
      } else {
        console.error("Error connecting to MetaMask:", error);
      }
    }
  };

  const disconnectWallet = async () => {
    try {
      setUserAccount("");
      setEtherBalance("");
      setTotalTransactions(0);

      localStorage.removeItem("walletAddress");

      console.log("Wallet disconnected");
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  const handleInfo = () => {
    setInfo(!info);
  };

  useEffect(() => {
    checkAccount();
  }, []);

  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center h-16">
            <div className="flex">
              <Leaf className="h-6 mt-1 mr-2 w-6 text-green-500" />
              <button
                className="text-green-700 hover:text-gray-600 font-bold text-2xl"
                onClick={() => navigate("/")}
              >
                EcoPolis
              </button>
            </div>

            <div className="flex space-x-4">
              <button
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium"
                onClick={() => navigate("/about")}
              >
                About
              </button>
              <button
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium"
                onClick={() => navigate("/map")}
              >
                Map
              </button>
              <button
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium"
                onClick={() => navigate("/analysis")}
              >
                Analysis
              </button>
              <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                Upload
              </button>
              {location.pathname == "/map" ? (
                <button
                  className="bg-green-700 text-white hover:bg-green-900 px-4 py-2 rounded-md font-medium"
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                  ChatBot
                </button>
              ) : null}
              <button
                className="bg-green-700 text-white hover:bg-green-900 px-4 py-2 rounded-md font-medium"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-green-700 text-white hover:bg-green-900 px-4 py-2 rounded-md font-medium"
                onClick={getAccountDetails}
              >
                {userAccount
                  ? `${userAccount.slice(0, 10)}...`
                  : "Connect Metamask"}
              </button>
              {userAccount && (
                <button
                  className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md font-medium"
                  onClick={disconnectWallet}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
