import { Worker, isMainThread, parentPort, workerData } from 'worker_threads';

interface IAnalyticsMessage {
  type: string;
  payload: { [key: string]: any };
}

interface IConfig {
  port: number;
}

interface IJob {
  id: number;
  type: string;
  payload: { [key: string]: any };
}

interface IEvent {
  id: string;
  data: { [key: string]: any };
}

interface IEventResponse {
  id: string;
  data: { [key: string]: any };
}

interface IWorkerJob {
  id: number;
  eventId: string;
  type: string;
  payload: { [key: string]: any };
}