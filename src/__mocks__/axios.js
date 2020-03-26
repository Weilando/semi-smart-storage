const mockAxios = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);
mockAxios.delete = jest.fn(() => Promise.resolve({data: {}}));
mockAxios.get = jest.fn(() => Promise.resolve({ data: {}}));
mockAxios.post = jest.fn(() => Promise.resolve({data: {}}));
mockAxios.update = jest.fn(() => Promise.resolve({data: {}}));

export default mockAxios;
