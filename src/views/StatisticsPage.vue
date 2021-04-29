<template>
    <PageWrapper title="Game management statistics"></PageWrapper>
    <div class="center">
        <div class="box">
            <div class="column1">
                <h2>Tasks assigned</h2>            
            </div>
            <div class="column2">
                <p> {{ tasksAssigned }} </p>
            </div>
        </div>
        <div class="box">
            <div class="column1">
                <h2>Tasks completed</h2>  
            </div>
            <div class="column2">
                <p> {{ tasksCompleted }} </p>
            </div>
        </div>
    </div>
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
.center {
margin: 0 auto;
}
.column1 {
margin-left: 20px;
width: 10%;
text-align: center;
padding: 10px;
color: white;
background-color: #454d59;
}
.column2 {
text-align: center;
margin-left: 10px;
width: 30%;
padding: 10px;
color: white;
background-color: #454d59;
}
.box {
display: flex;
text-align: center;
margin-bottom: 10px;
}
</style>