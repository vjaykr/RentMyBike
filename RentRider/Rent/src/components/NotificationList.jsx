import React, { useContext } from 'react';
import { NotificationContext } from '../context/NotificationContext';

const NotificationList = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Notifications</h3>
      {notifications.map((note, index) => (
        <div key={index} className="border p-2 my-2">
          {note.message}
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
