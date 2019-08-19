export const mockService = service => {
  for (let func in service) {
    service[func] = jest.fn();
  }
};