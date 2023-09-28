const app = Vue.createApp({
  // We can add any data, functions or events here or any component templates
  //   template: '<h2>I am the template</h2>', instead of using the template here we can add it in index.html

  // we must create a function and return the object from there

  // Here we have an object inside createApp
  //   data function with object returned to it as like a data stored inside a variable
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'Name of the Wind', author: 'Patrick Gorgina' },
        { title: 'Lord of the Rings', author: 'Baibhav KC' },
        { title: 'Interseller', author: 'Christopher Nolan' },
      ],
      // title: 'The Final Empire',
      // author: 'Baibhav KC',
      // age: 24,
      // x: 0,
      // y: 0,
    };
  },
  // We defined methods property here which has changeTitle method/function
  methods: {
    changeTitle(name) {
      this.title = name;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvents(e, data) {
      console.log('First Argument: ', e, e.type);
      if (data) return console.log('Second Argument: ', data);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
