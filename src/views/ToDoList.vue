<template>
  <div class="home">
    <input type="text" v-model="inputValue" />
    <button @click="addTask()">Add</button>

    <div v-if="showCompleted">
      <div
        v-for="task in tasks.filter((currTask) => currTask.completed)"
        :key="task"
      >
        <TaskComponent
          :task="task"
          @toggle-completion="toggleCompletion(task)"
          @delete="deleteTask(task)"
        />
      </div>
    </div>

    <div v-if="showUnfinished">
      <div
        v-for="task in tasks.filter((currTask) => !currTask.completed)"
        :key="task"
      >
        <TaskComponent
          :task="task"
          @toggle-completion="toggleCompletion(task)"
          @delete="deleteTask(task)"
        />
      </div>
    </div>

    <div v-if="!showUnfinished && !showCompleted">
      <div v-for="task in tasks" :key="task">
        <TaskComponent
          :task="task"
          @toggle-completion="toggleCompletion(task)"
          @delete="deleteTask(task)"
        />
      </div>
    </div>

    <button @click="useFilter('all')">All</button>
    <button @click="useFilter('unfinished')">Unfinished</button>
    <button @click="useFilter('completed')">Completed</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TaskComponent from "../components/TaskComponent.vue";
import { Task } from "../models/models";

export default defineComponent({
  name: "ToDoList",
  data: () => ({
    tasks: [] as Task[],
    showCompleted: false,
    showUnfinished: false,
    inputValue: "",
  }),
  methods: {
    addTask() {
      if (this.inputValue) {
        this.tasks.push({ value: this.inputValue, completed: false });
      }
      this.inputValue = "";
    },

    deleteTask(targetTask: Task) {
      this.tasks = this.tasks.filter((task) => task !== targetTask);
    },

    toggleCompletion(targetTask: Task) {
      this.tasks[this.tasks.indexOf(targetTask)].completed =
        !this.tasks[this.tasks.indexOf(targetTask)].completed;
    },

    useFilter(filter: string) {
      switch (filter) {
        case "all":
          this.showCompleted = false;
          this.showUnfinished = false;
          break;

        case "unfinished":
          this.showCompleted = false;
          this.showUnfinished = true;
          break;

        case "completed":
          this.showCompleted = true;
          this.showUnfinished = false;
          break;

        default:
          break;
      }
    },
  },
  components: {
    TaskComponent,
  },
});
</script>
