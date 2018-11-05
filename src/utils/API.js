
import axios from "axios";

export default {
  // Gets books from the Google API
  getWidget: function(id) {
    return axios.get(`https://walles-widgets.herokuapp.com/widgets/${id}.json`);
  },
  // Gets all widgets
  getWidgets: function() {
    return axios.get("https://walles-widgets.herokuapp.com/widgets.json",  { crossdomain: true });
  },

  // get widgets with a particular color
  filterWidgets: function(color) {
    axios.get("https://walles-widgets.herokuapp.com/widgets.json",  { crossdomain: true }).then(
      widgets => {
        return widgets.filter(widget => widget.color === color)
      });
  },
  // Saves an book to the database
  createWidget: function(bookData) {
    return axios.post("https://walles-widgets.herokuapp.com/widgets.json", bookData);
  }
};