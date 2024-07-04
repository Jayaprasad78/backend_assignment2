class FlowDistribution {
    constructor(astrologers) {
      this.astrologers = astrologers; // Array of Astrologer objects
    }
  
    // Function to find the astrologer with the minimum current load
    getAstrologerWithMinLoad() {
      return this.astrologers.reduce((prev, curr) => {
        return (prev.currentLoad / prev.flowRate) < (curr.currentLoad / curr.flowRate) ? prev : curr;
      });
    }
  
    // Function to distribute a user to an astrologer
    distributeUser(user) {
      const astrologer = this.getAstrologerWithMinLoad();
      astrologer.currentLoad += 1;
      return astrologer;
    }
  
    // Function to adjust the flow rate for a top astrologer
    setTopAstrologerFlowRate(astrologerId, flowRate) {
      const astrologer = this.astrologers.find(a => a.id === astrologerId);
      if (astrologer) {
        astrologer.flowRate = flowRate;
      }
    }
  }
  
  module.exports = FlowDistribution;
  