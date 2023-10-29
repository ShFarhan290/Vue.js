new Vue({
    el: '#app',
    data: {
        title: "Safayet",
        isItTrue: true,
        cars: ["Supra", "Toyota", "Bmw", "GTR" , "Ferrari" , "Porsche"],
        robot: {
            name: "Hyperless"
        },
        src: "https://images.pexels.com/photos/1480693/pexels-photo-1480693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        alt: "This Is Neon Face Mask",
        myText : " My World Is Darker" ,
        myHTML : "<strong>MarshMellow</strong>" ,
        user : "Farhan" ,
        userAged : 20 ,
        allowAged : 18 ,
        name : 'Safayet' ,
        x : 0 ,
        y : 0,
        formData : {
            firstName : ' ' ,
            lastName : ' '
        },
        a : 0 ,
        b : 0 ,
        Salary : 10
    },
    methods: {
        changeImage: function () {

            if (this.src === "https://images.pexels.com/photos/1480693/pexels-photo-1480693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") {
              this.src = "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
              this.alt = "New Image Alt Text";
            } else {
              this.src = "https://images.pexels.com/photos/1480693/pexels-photo-1480693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
              this.alt = "This Is Neon Face Mask";
            }
        },
        update() {
            setTimeout(() => {
                
                this.name = 'Farhan'
            }, 2000)
        },
        getCoord(event) {
            this.x = event.clientX ;
            this.y = event.clientY ;
        },
        // updateName(newname) {
        //     this.name = newname ;
        // }

        handleForm() {
            console.log(this.formData) ;
        }

    },

    computed: {
        addToA() {
            console.log("add A") ;
            return this.a + this.Salary ;
        } ,
        addToB() {
            console.log("add B") ;
            return this.b + this.Salary ;
        }
    }
});

new Vue({
    el : '#app1' ,
    data : {
        wave : 'Here is my 2nd Instance'
    },
});