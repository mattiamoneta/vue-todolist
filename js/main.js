const { createApp } = Vue

createApp({
  data() {
    return {
      throwError : false,
      textField : "",
      list : [
        {
            text: 'Questo è un task di esempio',
            done: true
        }
      ]
    }
  },
  methods : {
    addItem(){
        if(this.textField.length >= 5){
            this.throwError = false;
            this.list.push({text: this.textField, done: false});
            this.textField = "";
        } else {
            this.throwError = true;
        }
    },
    removeItem(index){
        this.list.splice(index, 1);
    },
    toggleStatus(index){

        if(this.list[index].done == true){
            this.list[index].done = false;
        } else {
            this.list[index].done = true;
        }

    }
  }
}).mount('#app')