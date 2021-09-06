import mongoose from 'mongoose';
// import { InitDataBase } from './init.db';

export class DbConnection {
    public static async initConnection(dbUri: string): Promise<void> {
        await DbConnection.connect(dbUri);
    }

    public static async connect(connStr: string): Promise<void>{
       return mongoose.connect(connStr,
            { useFindAndModify: false, useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true  },
            ).then(() => {
                // without init data
                console.log(`Successfully connected to database`);
                // init data in data base for first run
                // InitDataBase.init().then(()=> {
                //     console.log(`Successfully connected to database`);
                // });
            }).catch((error) => {
                console.error('Error connecting to database: ', error);
                return process.exit(1);
            });
    }

    public static setAutoReconnect(connStr: string): void {
        mongoose.connection.on('disconnected', () => DbConnection.connect(connStr));
    }

    public static async disconnect(): Promise<void> {
       await mongoose.connection.close();
    }
}
