import type { TaskModelState } from "../models/TaskModelState";

let instance: TimerWorkerManager | null = null;

export class TimerWorkerManager {

    private worker: Worker;

    private constructor() {
        
        this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));

    }

    static getInstance() {

        if(!instance) {
            instance = new TimerWorkerManager();
        }

        return instance;
    }

    postMessage(message: TaskModelState) {
        this.worker.postMessage(message);
    }

    onmessage(callback: (event: MessageEvent) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        instance = null;
        this.worker.terminate();
    }
}