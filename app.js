const app = Vue.createApp({

    data() {
        return {
            name:'',
            age:'',
            wish:'',
        };
    },


    methods: {
        setName(event) {
            this.name = event.target.value;
        },


        registerName() {
            alert('Submitted!');
        },

        setAge(event) {
            this.age = event.target.value;
        },

        checkAge() {
            if ((this.age > 0) && (this.age < 11)) {
                alert("You're too old to ask for a present!")}
                else {
                    alert('Submitted!');
                };
            }
            
        },

        goodBehaviour() {
            alert('Great! Make your wish.');

        },

        badBehaviour() {
            alert('Santa is dissapointed! Try again next year.');
        },

        setWish(event) {
            this.wish = event.target.value;
        },

        toSanta() {
            alert ('Your letter has been sent to the North Pole inbox!');
        }


});
app.mount('#assignment');
