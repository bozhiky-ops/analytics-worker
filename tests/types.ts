// types.ts

import { Worker } from 'worker_threads';

export type ParsedMessage = {
  timestamp: number;
  type: string;
  data: any;
};

export type ProcessedMessage = {
  type: string;
  data: any;
  error?: Error;
};

export type Events = {
  message: ParsedMessage;
  error: Error;
  exit: boolean;
};

export type Options = {
  maxWorkers?: number;
  maxJobs?: number;
  maxQueue?: number;
  timeout?: number;
};

export type WorkerOptions = {
  worker?: Worker;
  options: Options;
};