import {
  getConnectionManager, createConnection, Connection
} from "typeorm";

const CONNECTION_NAME = 'default';


export const allocateDBConnection = ():Promise<Connection> => {
  if (!getConnectionManager().has(CONNECTION_NAME)) {
    return createConnection();
  }
  else {
    const connection = getConnectionManager().get(CONNECTION_NAME);
    if (!connection.isConnected) {
      return connection.connect();
    }
    else {
      return Promise.resolve(connection);
    }
  }
};

export const releaseDBConnection = (connection:Connection):Promise<void> => {
  if (connection.isConnected) {
    return connection.close();
  }
};

export const releaseAllDBConnections = ():Promise<void> => {
  if (getConnectionManager().has(CONNECTION_NAME)) {
    const connection = getConnectionManager().get(CONNECTION_NAME);
    if (connection.isConnected) {
      return connection.close();
    }
  }
};
