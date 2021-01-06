import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex justify-center bg-gray-800">
      <p className="text-gray-200">
        Copyright {new Date().getFullYear()} &copy; Sean Campbell
      </p>
    </footer>
  )
}

export default Footer
