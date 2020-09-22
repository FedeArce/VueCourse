const game = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: false,
        };
    },

    computed: {
        monsterBarStyle() {
            return {width: this.monsterHealth + '%'};
        },
        playerBarStyle() {
            return {width: this.playerHealth + '%'}
        },
    },

    watch: {
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0 )
                ;
            else if (value <= 0)
                ;
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealt <= 0 )
                ;
            else if (value <= 0)
                ;
        },
    },

    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.monsterHealth = 100;
            this.playerHealth = 100;
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        attack: function(){
            var max = 10;
            var min = 0;
            var playerDamage = this.random(min,max);
            var monsterDamage = this.random(min,max);

            this.monsterHealth -= playerDamage;
            this.playerHealth -= monsterDamage;

            this.check();
        },
        specialAttack: function(){
            var max = 20;
            var min = 10
            var playerDamage = this.random(min,max);
            var monsterDamage = this.random(min,max);

            this.monsterHealth -= playerDamage;
            this.playerHealth -= monsterDamage;

            this.check();
        },
        heal: function(){
            var max = 10;
            var min = 0;
            var playerHeal = this.random(min,max);
            var monsterDamage = this.random(min,max);

            this.playerHealth += playerHeal;
            this.playerHealth -= monsterDamage;

            this.check();
        },

        check: function(){
            if(this.monsterHealth<0 && this.playerHealth>0){
                this.gameIsRunning = false;
                if(confirm('Player Won! New Game?'))
                    this.startGame();
            }
            else if (this.monsterHealth>0 && this.playerHealth<0){
                this.gameIsRunning = false;
                if(confirm('Monster Won! New Game?'))
                    this.startGame();
            }
            else if (this.monsterHealth<0 && this.playerHealth<0){
                this.gameIsRunning = false;
                if(confirm('Both Lost! New Game?'))
                    this.startGame();
            }
        },

        random: function(min,max){
            r = Math.floor(Math.random() * (max-min))+min;
            return r;
        },
    }
});

game.mount('#game');

/*({
    el: '#game',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: true,
    },
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.monsterHealth = 100;
            this.playerHealth = 100;
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        attack: function(){
            var max = 10;
            var min = 0;
            var playerDamage = this.random(min,max);
            var monsterDamage = this.random(min,max);

            this.monsterHealth -= playerDamage;
            this.playerHealth -= monsterDamage;

            this.check();
        },
        specialAttack: function(){
            var max = 20;
            var min = 10
            var playerDamage = this.random(min,max);
            var monsterDamage = this.random(min,max);

            this.monsterHealth -= playerDamage;
            this.playerHealth -= monsterDamage;

            this.check();
        },
        heal: function(){
            var max = 10;
            var min = 0;
            var playerHeal = this.random(min,max);
            var monsterDamage = this.random(min,max);

            this.playerHealth += playerHeal;
            this.playerHealth -= monsterDamage;

            this.check();
        },

        check: function(){
            if(this.monsterHealth<0 && this.playerHealth>0){
                this.gameIsRunning = false;
                if(confirm('Player Won! New Game?'))
                    this.startGame();
            }
            else if (this.monsterHealth>0 && this.playerHealth<0){
                this.gameIsRunning = false;
                if(confirm('Monster Won! New Game?'))
                    this.startGame();
            }
            else if (this.monsterHealth<0 && this.playerHealth<0){
                this.gameIsRunning = false;
                if(confirm('Both Lost! New Game?'))
                    this.startGame();
            }
        },

        random: function(min,max){
            r = Math.floor(Math.random() * (max-min))+min;
            return r;
        },
    },
});*/