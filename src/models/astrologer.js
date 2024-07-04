class Astrologer {
    constructor(id, name, flowRate = 1) {
      this.id = id;
      this.name = name;
      this.flowRate = flowRate; // Default flow rate is 1
      this.currentLoad = 0; // Number of current connections
    }
  }
  
  module.exports = Astrologer;
  