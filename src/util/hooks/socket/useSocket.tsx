import { useEffect, useRef } from 'react';
import socketIO from 'socket.io-client';

export const useSocket = () => {
  const socket = useRef<SocketIOClient.Socket>();
  const SOCKET_SEVER_URL = `https://server.tn1-dsm.com?Authorization=${localStorage.getItem(
    'access_token',
  )}`;

  useEffect(() => {
    console.log('test2');
    socket.current = socketIO.connect(SOCKET_SEVER_URL, {
      transports: ['websocket'],
    });
    return () => console.log('test');
  }, [SOCKET_SEVER_URL, socket]);

  return { socket } as const;
};
