const Astrologer = require('../src/models/astrologer');
const User = require('../src/models/user');
const FlowDistribution = require('../src/services/flowDistribution');

test('Distribute user to astrologer with minimum load', () => {
  const astrologers = [new Astrologer(1, 'A'), new Astrologer(2, 'B')];
  const flowDistribution = new FlowDistribution(astrologers);
  
  const user1 = new User(1, 'User1');
  const assignedAstrologer1 = flowDistribution.distributeUser(user1);
  expect(assignedAstrologer1.id).toBe(1);

  const user2 = new User(2, 'User2');
  const assignedAstrologer2 = flowDistribution.distributeUser(user2);
  expect(assignedAstrologer2.id).toBe(2);
});

test('Set flow rate for top astrologer', () => {
  const astrologers = [new Astrologer(1, 'A'), new Astrologer(2, 'B')];
  const flowDistribution = new FlowDistribution(astrologers);
  
  flowDistribution.setTopAstrologerFlowRate(1, 2);
  expect(astrologers[0].flowRate).toBe(2);
});
