import {IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar className='ion-no-border'>
                <IonTitle >
                    Title new22
                </IonTitle>
                <IonButtons slot='start'>
                    <IonButton>
                        <IonIcon slot='icon-only'  name='menu-outline' ></IonIcon>
                    </IonButton>
                </IonButtons>

            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonIcon icon='menu'></IonIcon>

            <h2>good2</h2>
            <h2>good</h2>
        </IonContent>
    </IonPage>
  );
};

export default Home;
