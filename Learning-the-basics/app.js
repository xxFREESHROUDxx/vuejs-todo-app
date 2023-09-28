const app = Vue.createApp({
  // We can add any data, functions or events here or any component templates
  //   template: '<h2>I am the template</h2>', instead of using the template here we can add it in index.html

  // we must create a function and return the object from there

  // Here we have an object inside createApp
  //   data function with object returned to it as like a data stored inside a variable
  data() {
    return {
      url: 'http://www.thenetninja.co.uk',
      showBooks: true,
      books: [
        { title: 'Brave New World', author: 'Aldous Huxley', img: 'assets/1.jpg', isFav: true },
        {
          title: 'Game of Thrones',
          author: 'George R.R. Martin',
          img: 'assets/2.jpg',
          isFav: false,
        },
        {
          title: 'Harry Potter and the Cursed Child',
          author: 'J. K. Rowling',
          img: 'assets/3.jpg',
          isFav: true,
        },
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
