import React from 'react';

const NotificationModal = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
        <h2 className="text-lg font-bold mb-2">Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index} className="py-2 border-b border-gray-200">
              {notification.message}
            </li>
          ))}
        </ul>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;