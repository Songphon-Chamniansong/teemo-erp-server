const TYPES = {
    // Service
    HomeService: Symbol.for('HomeService'),
    IPoService: Symbol.for('IPoService'),
    IUserService: Symbol.for('IUserService'),
    IInventoryService: Symbol.for('IInventoryService'),

    // Repositories
    IPoRepository: Symbol.for('IPoRepository'),
    ICustomerRepository: Symbol.for('ICustomerRepository'),
    IUserRepository: Symbol.for('IUserRepository'),
    IInventoryRepository: Symbol.for('IInventoryRepository')
};

export default TYPES;
