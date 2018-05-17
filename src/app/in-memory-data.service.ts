import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
    const problems = [
        { id: 11, name: 'Mr. Nice', acrate:"100%" },
        { id: 12, name: 'Narco', acrate:"100%" },
        { id: 13, name: 'Bombasto', acrate:"100%" },
        { id: 14, name: 'Celeritas', acrate:"100%" },
        { id: 15, name: 'Magneta', acrate:"100%" },
        { id: 16, name: 'RubberMan', acrate:"100%" },
        { id: 17, name: 'Dynama', acrate:"100%" },
        { id: 18, name: 'Dr IQ', acrate:"100%" },
        { id: 19, name: 'Magma', acrate:"100%" },
        { id: 20, name: 'mMagma', acrate:"100%" }
    ];
    return {problems};
  }
}
