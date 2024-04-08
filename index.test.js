const { getHealthStatus } = require('./index');

describe('getHealthStatus', () => {
  it('should return "healthy" for health above 50', () => {
    expect(getHealthStatus({ health: 90 })).toBe('healthy');
  });

  it('should return "wounded" for health between 50 and 15', () => {
    expect(getHealthStatus({ health: 25 })).toBe('wounded');
  });

  it('should return "critical" for health below 15', () => {
    expect(getHealthStatus({ health: 10 })).toBe('critical');
  });
});