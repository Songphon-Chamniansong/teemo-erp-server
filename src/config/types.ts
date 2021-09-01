const TYPES = {
    // Service
    HomeService: Symbol.for('HomeService'),
    IPoService: Symbol.for('IPoService'),

    // Repositories
    IPoRepository: Symbol.for('IPoRepository'),
    ICustomerRepository: Symbol.for('ICustomerRepository'),
    IUserRepository: Symbol.for('IUserRepository')
};

export default TYPES;
