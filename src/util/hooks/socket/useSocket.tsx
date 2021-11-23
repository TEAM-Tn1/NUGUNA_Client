import { useEffect, useRef } from 'react';
import socketIO from 'socket.io-client';

export const useSocket = () => {
  const socket = useRef<any>();
  const SOCKET_SEVER_URL = `https://server.tn1-dsm.com/Authorization=${localStorage.getItem(
    'access_token',
  )}`;

  useEffect(() => {
    socket.current = socketIO.connect(SOCKET_SEVER_URL, {
      transports: ['websocket'],
    });
  }, []);

  return { socket } as const;
};
