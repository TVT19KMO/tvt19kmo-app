<template>
    <table class="table">
        <div >
            <h1>Game management statistics</h1>

        </div>
        
        <div v-for="(stat,index) in statData" v-bind:key="index">
            
        </div>

        <div >
            <h2 class="h2">Tasks assigned</h2>
        </div>

        <div>
            <td class="td"> {{ tasksAssigned }} </td>
        </div>

        <div >
            <h2 class="h2">Tasks completed</h2>
        </div>

        <div>
            <td> {{ tasksCompleted }} </td>
        </div>
    </table> 

</template>

<script>

import axios from 'axios';

export default {
  
  name: 'StatisticsPage',
  
  data() {
    return {
        statData: [],
        
  }
  },

  methods: {
     
    getGameStatistics() { 
        const userId = localStorage.getItem('user-id')
        console.log(userId)
        axios.get('http://localhost:5000/api/statistics/' + userId)       
        .then((response) => {
            this.statData = response.data 
            console.log(response.data)
        })
        .catch(error => {
            console.log(error, error.response);
        })
    }  
  },
    //Counts completed tasks

  computed: {
        tasksCompleted () {
            const rows = Object.keys(this.statData).length   
            var num = 0    
            for(var i=0; i< rows; i++) {
                if(this.statData[i].finished != null || '') {
                    num++
                }             
            }  
            return num         
        },

        tasksAssigned () {
            return Object.keys(this.statData).length   
        }
    },

  mounted() {
    this.getGameStatistics()
    
    },
};

</script>

<style>
.table {
    text-align: center;
    display: block;
    width: 50%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    background-color: bisque;
}
.h1 {
    font-size: 30px;
}
.h2 {
    text-align: left;
}

</style>