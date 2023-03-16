const { createApp } = Vue

createApp({
  data() {
    return {
      throwError : false,
      textField : "",
      list : [
        {
            text: 'sample',
            done: true
        },
        {
            text: 'sample1',
            done: false
        },
        {
            text: 'sample2',
            done: false
        }
      ]
    }
  },
  methods : {
    addItem(){
        if(this.textField.length >= 5){
            this.throwError = false;
            this.list.push({text: this.textField, done: false});
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