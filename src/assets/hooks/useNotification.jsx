import {useContext} from 'react';
import {NotificationContext} from '../context/notificationContext';

export default function useNotification() {
   return useContext(NotificationContext);
}