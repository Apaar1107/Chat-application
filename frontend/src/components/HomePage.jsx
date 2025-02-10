import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MessageContainer from './MessageContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const { authUser } = useSelector(store => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser) {
      navigate("/login");
    }
  }, [authUser, navigate]);

  return (
    <div className="flex flex-col md:flex-row w-full max-w-screen-lg mx-auto h-screen md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Sidebar for large screens, collapsible on smaller screens */}
      <div className="w-full md:w-1/3 lg:w-1/4 min-h-[80px] md:min-h-full">
        <Sidebar />
      </div>

      {/* Message Container - Takes full width on small screens */}
      <div className="flex-1 w-full min-h-[80px] md:min-h-full">
        <MessageContainer />
      </div>
    </div>
  )
}

export default HomePage;
