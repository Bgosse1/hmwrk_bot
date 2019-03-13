import axios from "axios";

export default {
  getAssignments: function() {
    return axios.get("/api/assignments");
  },
  deleteAssignment: function(id) {
    return axios.delete("/api/assignments/" + id);
  },
  saveAssignment: function(assignmentData) {
    console.log("Hello", assignmentData);
    return axios.post("/api/assignments", assignmentData);
  }
};
