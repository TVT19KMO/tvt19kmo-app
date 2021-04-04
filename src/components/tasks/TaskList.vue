<template >
  <BaseTable>
    <template #head>
      <th scope="col">Name</th>
      <th scope="col">Note</th>
      <th scope="col">Points</th>
      <th scope="col">Room</th>
    </template>

    <template #default id="app">
      <TaskListRow v-for="task in tasks" v-bind="task" :key="task.Name">
        
        <td> {{task.Name}}</td>
        <td> {{task.Note}} </td>
        <td> {{task.Points}} </td>
        <td> {{task.Room}} </td>
        
          
      </TaskListRow>
    </template>

  </BaseTable>
</template>

<script>

//import faker from 'faker';
import TaskListRow from './TaskListRow.vue';
import axios from 'axios';

export default {
  el: '#app',
  components: { TaskListRow },
  
  data: function() {
    return {
      /*
      tasks: Array.from({ length: 10 }).map((_) => ({
        name: faker.random.arrayElement([
          'Empty trash',
          'Dust windowsills',
          'Dust baseboards',
          'Sort out-of-place items',
          'Make beds',
          'Carry laundry',
          'Carry laundry',
        ]),
        note: faker.lorem.sentence(),
        points: faker.datatype.number(20),
        room: faker.random.arrayElement(['kitchen', 'living room', 'restroom']),
      })),
      */
     tasks: 
     [
        /*
        {
          name: 'TESTI1',
          note: 'lorem ipsum bdbggfbgfbf bssssssssssss gbfffffffffffs gffffffffffffs',
          points: 12,
          room: 'Blogging with Vue'  
        },
        {
          name: 'TESTI2',
          note: 'lorem ipsum bdbggfbgfbf bssssssssssss gbfffffffffffs gffffffffffffs',
          points: 12,
          room: 'Blogging with Vue'  
        }
        */
      ]

      
    };
  },
  
 mounted: function() {
    axios
      .get('http://localhost:5000/api/tasks')
      .then((response) => {
        //let resData =   JSON.stringify(response.data)
       
        let resData = response.data
        //let jsObject = JSON.parse(resData)
       
        //this.tasks.push = resData
          
        
        console.log(this.tasks.push.length)
        console.log(typeof resData)

        for(let i = 0; i < resData.length; i++) {
            console.log(resData[i]
            )
            this.tasks.push(resData[i])
        }
        

        return this.tasks
        
      })
      .catch(error => {
        console.log(error);
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style></style>