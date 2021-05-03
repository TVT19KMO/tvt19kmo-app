<template>
    <PageWrapper title="Game management statistics"></PageWrapper>
    <div>
        <div class="box"> 
            <h1>Coins</h1> 
                 
            <div class="column">
                <h2 class="headline">Coins spended</h2>
                <p> {{ coinsSpended }} </p>
            </div>
        </div>
        <br>
        <div class="box"> 
            <h1>Tasks</h1>         
           <div class="column">
                <h2 class="headline">Total assigned tasks</h2>
                <p> {{ tasksAssigned }} </p>
            </div>
            <div class="column">
                <h2 class="headline">Total completed tasks</h2>
                <p> {{ tasksCompleted }} </p>
            </div>  
        </div>
        <br>
        <div class="box"> 
            <h1>Rooms</h1>         
           <div class="column">
                <h2 class="headline">Tasks assigned into Livingroom</h2>
                <p> {{ tasksInLivingroom }} </p>
            </div>
            <div class="column">
                <h2 class="headline">Tasks assigned into Toilet</h2>
                <p> {{ tasksInToilet }} </p>
            </div>
            <div class="column">
                <h2 class="headline">Tasks assigned into Kitchen</h2>
                <p> {{ tasksInKitchen }} </p>
            </div>
            <div class="column">
                <h2 class="headline">Tasks assigneg into Diningroom</h2>
                <p> {{ tasksInDiningroom }} </p>
            </div>
            <div class="column">
                <h2 class="headline">Tasks assigned into Bedroom</h2>
                <p> {{ tasksInBedroom }} </p>
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
        console.log(localStorage)
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
        coinsSpended () {
            const rows = Object.keys(this.statData).length   
            var coins = 0
            var stat = this.statData
           
            for(var i=0; i< rows; i++) {
                if(stat[i].task.difficulty == '608837a0bfcad20c0e8ceca3') {        
                    coins += 50                        
                }
            }
            for(var i=0; i< rows; i++) {
                if(stat[i].task.difficulty == '608837a0bfcad20c0e8ceca4') {        
                    coins += 100                      
                }
            }
            for(var i=0; i< rows; i++) {
                if(stat[i].task.difficulty == '608837a0bfcad20c0e8ceca5') {        
                    coins += 200                          
                }     
            }     
            return coins      
        },
        tasksInLivingroom () {
            const rows = Object.keys(this.statData).length   
            var tasks = 0
            var stat = this.statData
           
            for(var i=0; i< rows; i++) {
                if(stat[i].task.room == '608837a0bfcad20c0e8cec9e') {        
                    tasks++                        
                }
            }
            return tasks      
        },
        tasksInToilet () {
            const rows = Object.keys(this.statData).length   
            var tasks = 0
            var stat = this.statData
           
            for(var i=0; i< rows; i++) {
                if(stat[i].task.room == '608837a0bfcad20c0e8cec9f') {        
                    tasks++                        
                }
            }
            return tasks      
        },
        tasksInKitchen () {
            const rows = Object.keys(this.statData).length   
            var tasks = 0
            var stat = this.statData
           
            for(var i=0; i< rows; i++) {
                if(stat[i].task.room == '608837a0bfcad20c0e8ceca0') {        
                    tasks++                        
                }
            }
            return tasks      
        },
        tasksInDiningroom () {
            const rows = Object.keys(this.statData).length   
            var tasks = 0
            var stat = this.statData
           
            for(var i=0; i< rows; i++) {
                if(stat[i].task.room == '608837a0bfcad20c0e8ceca1') {        
                    tasks++                        
                }
            }
            return tasks      
        },
        tasksInBedroom () {
            const rows = Object.keys(this.statData).length   
            var tasks = 0
            var stat = this.statData
           
            for(var i=0; i< rows; i++) {
                if(stat[i].task.room == '608837a0bfcad20c0e8ceca2') {        
                    tasks++                        
                }
            }
            return tasks      
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
.column {
border-width: 1px;
width: 20%;
padding: 10px;
color: white;
background-color: #454d59;
}
.headline {
color:lightseagreen;
}
.box {
color: white;
display: grid;
align-items: center;
justify-items: center;
}
.h1 {
color: white;
font-size: 30px;
}
</style>