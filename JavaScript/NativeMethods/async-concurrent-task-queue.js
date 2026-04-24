class TaskManager {
    concurrencyLimit;
    currentlyRunning;
    taskQueue;
    constructor(concurrencyLimit) {
        this.concurrencyLimit = concurrencyLimit;
        this.currentlyRunning = 0;
        this.taskQueue = [];
    }

    async addTask(task){
      this.taskQueue.push(task);
       await this.executeTasks();
      
    }  
    
     async  executeTasks() {
        console.log("Executing tasks. Currently running:", this.currentlyRunning, "Queue length:", this.taskQueue.length);
    while (this.currentlyRunning < this.concurrencyLimit && this.taskQueue.length >0 ) {
        const task = this.taskQueue.shift();
        if (task) {
          this.currentlyRunning++;
          try {
         const result = await task();
            
        } catch(error) {
            console.error("Task failed:", error);
        }
        finally {
              this.currentlyRunning--;
              this.executeTasks();
            };
        }
    }
}
        
}

const taskManager = new TaskManager(3); // Limit to 3 concurrent tasks

// Example task
const createTask = (id, duration) => {
    return () => new Promise((resolve) => {
        console.log(`Task ${id} started`);
        setTimeout(() => {
            console.log(`Task ${id} completed`);
            resolve();
        }, duration);
    });
};

// Adding tasks to the manager
for (let i = 1; i <= 10; i++) {
    taskManager.addTask(createTask(i, Math.random() * 2000 + 1000)).then(() => {
        console.log(`Task ${i} has been processed by TaskManager.`);
    }).catch((error) => {
        console.error(`Task ${i} failed with error:`, error);
    });
}
