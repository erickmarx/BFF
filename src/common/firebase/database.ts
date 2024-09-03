import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { pubSub } from '../../app.module';

const databaseConfig: FirebaseOptions = {
  databaseURL: 'http://localhost:9000?ns=bffapi',
  projectId: 'bffapi',
};
const app = initializeApp(databaseConfig);

const database = getDatabase(app);

export function FirebaseDatabase() {
  onValue(ref(database, 'users/1'), async (snapshot) => {
    await pubSub.publish('implementation', snapshot.val());
    console.log(snapshot.val());
  });
  set(ref(database, 'users/1'), { testando: 'teste1' });
}
