import Ember from 'ember';

export default Ember.Component.extend({
  isShowing: false,
  actions: {
    addPost(gif) {
      var date = new Date();
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();
      var today = mm + "/" + dd + "/" + yyyy;
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        body: this.get("body"),
        img_link: gif.image,
        date: today
      };
      console.log(params);
      this.set('isShowing', false);
      this.sendAction("addPost", params);
    },
    showForm() {
      this.set('isShowing', true);
    },
    hideForm() {
      this.set('isShowing', false);
    }
  }
});
