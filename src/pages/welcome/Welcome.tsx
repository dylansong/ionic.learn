import './Welcome.scss';
import {IonButton, IonContent, IonHeader, IonPage, useIonModal} from "@ionic/react";
import {Login} from "../login/Login";


export const WelcomePage: React.FC = () => {
    const handleHide = () => {
        hide();
    }
    const [show,hide] = useIonModal(Login,{onHide:handleHide})
    return (
        <IonPage>
            <IonHeader></IonHeader>
            <IonContent className='ion-padding ion-text-center' color='primary'>
                <img src="./assets/logo.png" className='logo'/>
                <div className="title">
                    <h2>Welcome</h2>
                    <p>Enjoy the Code Crafts App</p>
                </div>

                <div className='ion-margin-top'>
                    <IonButton onClick={()=>show({cssClass:'login-modal'})} expand='block' className='ion-margin-top' fill='outline' color='white'>SIGN UP</IonButton>
                    <IonButton expand='block' className='ion-margin-top' color='white'>LOGIN</IonButton>
                </div>
            </IonContent>
        </IonPage>
    )
}
